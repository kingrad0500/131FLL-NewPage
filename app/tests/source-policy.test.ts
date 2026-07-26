import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { inspectSourcePolicy } from "../scripts/source-policy.ts";

test("rejects provisional markers declared outside content modules", async () => {
  const root = await mkdtemp(join(tmpdir(), "fll-source-policy-"));
  await mkdir(join(root, "pages"), { recursive: true });
  await writeFile(
    join(root, "pages", "example.astro"),
    '---\nconst value = TBD("missed fact");\n---\n',
  );

  const findings = await inspectSourcePolicy(root);
  assert.equal(findings.length, 1);
  assert.equal(findings[0]?.kind, "marker-outside-content");
});

test("allows provisional markers in audited content modules", async () => {
  const root = await mkdtemp(join(tmpdir(), "fll-source-policy-"));
  await mkdir(join(root, "content"), { recursive: true });
  await writeFile(
    join(root, "content", "example.ts"),
    'export const value = TBD("audited fact");\n',
  );

  assert.deepEqual(await inspectSourcePolicy(root), []);
});

test("finds explicitly release-blocking PlaceholderMedia", async () => {
  const root = await mkdtemp(join(tmpdir(), "fll-source-policy-"));
  await mkdir(join(root, "components"), { recursive: true });
  await writeFile(
    join(root, "components", "Example.astro"),
    '<PlaceholderMedia label="shirt art" releaseBlocking />\n',
  );

  const findings = await inspectSourcePolicy(root);
  assert.equal(findings.length, 1);
  assert.equal(findings[0]?.kind, "release-placeholder");
});

test("ignores fallback PlaceholderMedia that has a valid production path", async () => {
  const root = await mkdtemp(join(tmpdir(), "fll-source-policy-"));
  await mkdir(join(root, "components"), { recursive: true });
  await writeFile(
    join(root, "components", "Example.astro"),
    '<PlaceholderMedia label="runtime fallback" />\n',
  );

  assert.deepEqual(await inspectSourcePolicy(root), []);
});
