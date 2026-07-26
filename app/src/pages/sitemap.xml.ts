import type { APIRoute } from "astro";

export const prerender = true;

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
];

export const GET: APIRoute = () => {
  const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === "true";
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const urls =
    allowIndexing && siteUrl
      ? routes
          .map(
            (route) =>
              `  <url><loc>${new URL(route, siteUrl).href}</loc></url>`,
          )
          .join("\n")
      : "";
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
