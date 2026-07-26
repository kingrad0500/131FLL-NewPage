import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = () => {
  const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === "true";
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const lines = allowIndexing
    ? [
        "User-agent: *",
        "Allow: /",
        ...(siteUrl ? [`Sitemap: ${new URL("/sitemap.xml", siteUrl).href}`] : []),
      ]
    : ["User-agent: *", "Disallow: /"];

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
