import type { APIRoute } from "astro";
import { canonicalUrl, readLaunchConfig } from "../config/launch.ts";

export const prerender = true;

export const GET: APIRoute = () => {
  const launch = readLaunchConfig(import.meta.env);
  const sitemapUrl = canonicalUrl("/sitemap.xml", launch);
  const lines = launch.allowIndexing
    ? [
        "User-agent: *",
        "Allow: /",
        ...(sitemapUrl ? [`Sitemap: ${sitemapUrl}`] : []),
      ]
    : ["User-agent: *", "Disallow: /"];

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
