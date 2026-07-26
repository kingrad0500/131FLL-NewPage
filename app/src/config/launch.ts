export interface LaunchEnvironment {
  PUBLIC_ALLOW_INDEXING?: string;
  PUBLIC_SITE_URL?: string;
}

export interface LaunchConfig {
  allowIndexing: boolean;
  siteUrl?: URL;
}

/** Normalize build-environment strings once for every launch consumer. */
export function readLaunchConfig(environment: object): LaunchConfig {
  const values = environment as LaunchEnvironment;
  const allowIndexing = values.PUBLIC_ALLOW_INDEXING === "true";
  let siteUrl: URL | undefined;

  if (values.PUBLIC_SITE_URL) {
    try {
      const candidate = new URL(values.PUBLIC_SITE_URL);
      if (candidate.protocol === "https:" && candidate.pathname === "/") {
        siteUrl = candidate;
      }
    } catch {
      // Validation reports the invalid value; preview rendering stays noindex.
    }
  }

  return { allowIndexing, siteUrl };
}

export function validateProductionLaunch(config: LaunchConfig): string[] {
  const issues: string[] = [];
  if (!config.allowIndexing) {
    issues.push(
      "PUBLIC_ALLOW_INDEXING must be exactly true for a production release.",
    );
  }
  if (!config.siteUrl) {
    issues.push(
      "PUBLIC_SITE_URL must be a valid HTTPS production origin with no path.",
    );
  }
  return issues;
}

export function canonicalUrl(
  pathname: string,
  config: LaunchConfig,
): string | undefined {
  return config.siteUrl ? new URL(pathname, config.siteUrl).href : undefined;
}
