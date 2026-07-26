import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { gzipSync } from "node:zlib";

const distRoot = new URL("../dist/", import.meta.url);

const routes = [
  "/",
  "/race",
  "/race/schedule",
  "/race/13-1",
  "/race/relay",
  "/race/10k",
  "/race/5k",
  "/registration",
  "/results",
  "/faqs",
] as const;

function routeFile(route: string): URL {
  return route === "/"
    ? new URL("index.html", distRoot)
    : new URL(`${route.slice(1)}/index.html`, distRoot);
}

async function walk(directory: URL): Promise<URL[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const url = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);
      return entry.isDirectory() ? walk(url) : [url];
    }),
  );
  return nested.flat();
}

test("the preview build contains every MVP route with one h1", async () => {
  for (const route of routes) {
    const html = await readFile(routeFile(route), "utf8");
    assert.match(html, /<main\b/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.equal(
      html.match(/<h1\b/g)?.length ?? 0,
      1,
      `${route} must contain exactly one h1`,
    );
  }
});

test("every local image in generated HTML exists in dist", async () => {
  for (const route of routes) {
    const html = await readFile(routeFile(route), "utf8");
    const sources = [...html.matchAll(/<(?:img|source)\b[^>]*\bsrc="(\/[^"]+)"/g)]
      .map((match) => match[1])
      .filter((source): source is string => Boolean(source));

    for (const source of sources) {
      await assert.doesNotReject(
        access(new URL(source.slice(1), distRoot)),
        `${route} references missing asset ${source}`,
      );
    }
  }
});

test("generated output contains no workstation paths or file URLs", async () => {
  const files = await walk(distRoot);
  for (const file of files.filter((url) => url.pathname.endsWith(".html"))) {
    const html = await readFile(file, "utf8");
    assert.doesNotMatch(html, /file:\/\//);
    assert.doesNotMatch(html, /\/Users\/radstudios\//);
  }
});

test("initial JavaScript remains below the 180 KB compressed budget", async () => {
  const files = await walk(distRoot);
  const externalScripts = new Map(
    await Promise.all(
      files
        .filter((url) => url.pathname.endsWith(".js"))
        .map(async (url) => [url.pathname, await readFile(url)] as const),
    ),
  );

  for (const route of routes) {
    const html = await readFile(routeFile(route), "utf8");
    const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
      .map((match) => match[1] ?? "");
    const scriptSources = [...html.matchAll(/<script\b[^>]*\bsrc="(\/[^"]+)"/g)]
      .map((match) => match[1])
      .filter((source): source is string => Boolean(source));
    const payloads = [
      ...inlineScripts.map((script) => Buffer.from(script)),
      ...scriptSources.map((source) => externalScripts.get(source) ?? Buffer.alloc(0)),
    ];
    const compressedBytes = payloads.reduce(
      (sum, payload) => sum + gzipSync(payload).byteLength,
      0,
    );

    assert.ok(
      compressedBytes < 180 * 1024,
      `${route} JavaScript is ${Math.round(compressedBytes / 1024)} KB compressed`,
    );
  }
});
