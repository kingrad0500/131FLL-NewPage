import type { APIRoute } from "astro";
import { readLaunchConfig } from "../config/launch.ts";
import { MVP_ROUTES } from "../config/routes.ts";

export const prerender = true;

export const GET: APIRoute = () => {
  const launch = readLaunchConfig(import.meta.env);
  const urls =
    launch.allowIndexing && launch.siteUrl
      ? MVP_ROUTES
          .map(
            (route) =>
              `  <url><loc>${new URL(route, launch.siteUrl).href}</loc></url>`,
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
