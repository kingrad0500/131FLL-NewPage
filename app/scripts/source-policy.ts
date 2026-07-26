import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

export interface SourcePolicyFinding {
  file: string;
  line: number;
  message: string;
  kind: "marker-outside-content" | "release-placeholder";
}

const MARKER_PATTERN = /\b(?:TBD|UNCONFIRMED|GENERATED)\s*\(/g;
const RELEASE_PLACEHOLDER_PATTERN =
  /<PlaceholderMedia\b[^>]*\breleaseBlocking(?:\s*=\s*(?:\{true\}|"true"))?[^>]*>/gs;

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return walk(path);
      return [path];
    }),
  );
  return nested.flat();
}

function lineAt(source: string, index: number): number {
  return source.slice(0, index).split("\n").length;
}

function stripComments(source: string): string {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (comment) => comment.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
}

export async function inspectSourcePolicy(
  sourceRoot = fileURLToPath(new URL("../src/", import.meta.url)),
): Promise<SourcePolicyFinding[]> {
  const findings: SourcePolicyFinding[] = [];
  const files = (await walk(sourceRoot)).filter((file) =>
    [".astro", ".ts"].includes(extname(file)),
  );

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const searchable = stripComments(source);
    const displayFile = relative(sourceRoot, file);
    const isContentModule = displayFile.startsWith(`content/`);
    const isPlaceholderLibrary = displayFile === "lib/placeholder.ts";

    if (!isContentModule && !isPlaceholderLibrary) {
      for (const match of searchable.matchAll(MARKER_PATTERN)) {
        findings.push({
          file: displayFile,
          line: lineAt(searchable, match.index),
          message:
            "Provisional markers must be declared in src/content so the release audit imports them.",
          kind: "marker-outside-content",
        });
      }
    }

    for (const match of searchable.matchAll(RELEASE_PLACEHOLDER_PATTERN)) {
      findings.push({
        file: displayFile,
        line: lineAt(searchable, match.index),
        message: "Visible placeholder media is still awaiting a production asset.",
        kind: "release-placeholder",
      });
    }
  }

  return findings.sort(
    (a, b) => a.file.localeCompare(b.file) || a.line - b.line,
  );
}

