/**
 * Content audit (DEC-008).
 *
 * Reports every unresolved and unverified content value, plus every sponsor
 * withheld for an unusable asset.
 *
 * Exit codes:
 *   0  clean, or advisory mode (default)
 *   1  release mode (--release) with unresolved items outstanding
 *
 * `npm run build` runs this advisory so preview builds succeed with visible
 * placeholders. `npm run build:production` runs it with --release so unfinished
 * content cannot reach production.
 */

import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { summarizeProvisional, findTBDPaths } from "../src/lib/placeholder.ts";
import { withheldSponsors } from "../src/content/sponsors.ts";

const isRelease = process.argv.includes("--release");

/*
 * Content modules are discovered rather than listed. The provisional registry
 * only populates for modules that are imported, so a hand-maintained list
 * means a new content file silently drops out of the release gate — the one
 * mechanism that is supposed to fail closed would fail open.
 */
const contentDir = fileURLToPath(new URL("../src/content/", import.meta.url));
const moduleNames = (await readdir(contentDir))
  .filter((file) => file.endsWith(".ts") && file !== "types.ts")
  .sort();

const contentTree: Record<string, unknown> = {};
for (const name of moduleNames) {
  contentTree[name.replace(/\.ts$/, "")] = await import(
    new URL(name, new URL("../src/content/", import.meta.url)).href
  );
}

const bold = (s: string) => `\x1b[1m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;

const { tbd, unconfirmed, generated } = summarizeProvisional();
const strayPaths = findTBDPaths(contentTree);

console.log(`\n${bold("Fort Lauderdale 13.1 — content audit")}`);
console.log(dim(isRelease ? "mode: release (blocking)" : "mode: advisory"));
console.log(dim(`scanned ${moduleNames.length} content modules`));

if (tbd.length > 0) {
  console.log(`\n${red(bold(`✗ ${tbd.length} unresolved [TBD] values`))}`);
  const byDecision = new Map<string, typeof tbd>();
  for (const entry of tbd) {
    const key = entry.decision ?? "unassigned";
    const group = byDecision.get(key);
    if (group) group.push(entry);
    else byDecision.set(key, [entry]);
  }
  for (const [decision, entries] of [...byDecision].sort()) {
    console.log(`\n  ${bold(decision)}`);
    for (const entry of entries) console.log(`    · ${entry.label}`);
  }
}

if (unconfirmed.length > 0) {
  console.log(
    `\n${yellow(bold(`⚠ ${unconfirmed.length} unverified values`))} ${dim("(observed, not confirmed by the product owner)")}`,
  );
  for (const entry of unconfirmed) {
    console.log(`    · ${entry.label} = ${bold(entry.value)}`);
    console.log(`      ${dim(`observed in ${entry.source}`)}`);
  }
}

if (generated.length > 0) {
  console.log(
    `\n${yellow(bold(`⚠ ${generated.length} AI-generated assets in place of real media`))}`,
  );
  console.log(
    dim("    These are synthetic. They must be replaced before launch (DEC-011)."),
  );
  for (const entry of generated) {
    console.log(`    · ${entry.label}`);
    console.log(`      ${dim(entry.value)}`);
  }
}

if (withheldSponsors.length > 0) {
  console.log(
    `\n${yellow(bold(`⚠ ${withheldSponsors.length} sponsors withheld from rendering`))}`,
  );
  for (const sponsor of withheldSponsors) {
    console.log(`    · ${bold(sponsor.name)}`);
    console.log(`      ${dim(sponsor.assetNote ?? "asset not production-ready")}`);
  }
}

if (strayPaths.length > 0) {
  console.log(
    `\n${dim(bold(`Content paths carrying a [TBD] value (${strayPaths.length})`))}`,
  );
  for (const path of strayPaths) console.log(dim(`    · ${path}`));
}

const blocking =
  tbd.length + unconfirmed.length + generated.length + withheldSponsors.length;

if (blocking === 0) {
  console.log(`\n${green(bold("✓ No unresolved content. Clear for release."))}\n`);
  process.exit(0);
}

console.log(
  `\n${bold("Summary:")} ${tbd.length} unresolved · ${unconfirmed.length} unverified · ${generated.length} generated · ${withheldSponsors.length} sponsors withheld`,
);

if (isRelease) {
  console.log(
    `${red(bold("Release blocked."))} Resolve the items above and record them in agents/decisions.md.\n`,
  );
  process.exit(1);
}

console.log(
  dim("Advisory only — preview build continues. Run with --release to enforce.\n"),
);
process.exit(0);
