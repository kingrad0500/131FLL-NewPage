/**
 * Provisional content tracking.
 *
 * AGENTS.md forbids inventing event facts and requires that unresolved values
 * be explicit and blocked from production. Two distinct problems exist, so
 * there are two markers:
 *
 *   TBD()         The value is unknown. Renders a visible badge.
 *   UNCONFIRMED() The value was observed in reference material but has not
 *                 been confirmed by the product owner. Renders normally,
 *                 because it is real content, but is still release-blocking.
 *
 * The distinction matters: marking observed facts as TBD would leave the site
 * unrenderable, while rendering them silently would present unverified
 * historical data as current. Both are tracked; neither reaches production.
 */

export const TBD_PREFIX = "[TBD]";

export type ProvisionalKind = "tbd" | "unconfirmed" | "generated";

export interface ProvisionalEntry {
  kind: ProvisionalKind;
  /** Human-readable description of what is missing or unverified. */
  label: string;
  /** Rendered value, for reporting. */
  value: string;
  /** Where an unconfirmed value was observed. */
  source?: string;
  /** Decision-log entry that owns this item. */
  decision?: string;
}

const registry: ProvisionalEntry[] = [];

/**
 * Marks a value as unknown. The returned string is safe to render and will
 * carry a visible badge via `<Provisional>`.
 */
export function TBD(label: string, decision = "DEC-009"): string {
  const value = `${TBD_PREFIX} ${label}`;
  registry.push({ kind: "tbd", label, value, decision });
  return value;
}

/**
 * Marks a real but unverified value. Returns the value unchanged so it renders
 * normally, while still registering as release-blocking.
 */
export function UNCONFIRMED<T>(
  value: T,
  label: string,
  source: string,
  decision = "DEC-009",
): T {
  registry.push({
    kind: "unconfirmed",
    label,
    value: String(value),
    source,
    decision,
  });
  return value;
}

/**
 * Marks a synthetic (AI-generated) asset standing in for real photography.
 *
 * Returns the path unchanged so the asset renders normally — the point is to
 * evaluate the design with realistic media — while registering as
 * release-blocking. A generated image of a real race is not documentation of
 * that race, so it must never reach production silently (DEC-011).
 */
export function GENERATED(
  path: string,
  label: string,
  decision = "DEC-011",
): string {
  registry.push({ kind: "generated", label, value: path, decision });
  return path;
}

export function isTBD(value: unknown): value is string {
  return typeof value === "string" && value.startsWith(TBD_PREFIX);
}

/** Strips the marker prefix for display contexts that render their own badge. */
export function stripTBD(value: string): string {
  return isTBD(value) ? value.slice(TBD_PREFIX.length).trim() : value;
}

export function getProvisionalRegistry(): ProvisionalEntry[] {
  return [...registry];
}

export function summarizeProvisional(): {
  tbd: ProvisionalEntry[];
  unconfirmed: ProvisionalEntry[];
  generated: ProvisionalEntry[];
  total: number;
} {
  const byKind = (kind: ProvisionalKind) =>
    registry.filter((e) => e.kind === kind);

  return {
    tbd: byKind("tbd"),
    unconfirmed: byKind("unconfirmed"),
    generated: byKind("generated"),
    total: registry.length,
  };
}

/**
 * Walks arbitrary content data and reports the dotted path of every TBD value.
 * Used by the audit to catch values that bypassed the helpers.
 */
export function findTBDPaths(input: unknown, basePath = ""): string[] {
  const found: string[] = [];

  const walk = (node: unknown, path: string): void => {
    if (isTBD(node)) {
      found.push(path || "(root)");
      return;
    }
    if (Array.isArray(node)) {
      node.forEach((item, i) => walk(item, `${path}[${i}]`));
      return;
    }
    if (node && typeof node === "object") {
      for (const [key, val] of Object.entries(node)) {
        walk(val, path ? `${path}.${key}` : key);
      }
    }
  };

  walk(input, basePath);
  return found;
}
