import assert from "node:assert/strict";
import test from "node:test";
import {
  canonicalUrl,
  readLaunchConfig,
  validateProductionLaunch,
} from "../src/config/launch.ts";
import { MVP_ROUTES, ROUTES } from "../src/config/routes.ts";

test("preview launch configuration fails closed", () => {
  const config = readLaunchConfig({});
  assert.equal(config.allowIndexing, false);
  assert.equal(config.siteUrl, undefined);
  assert.equal(validateProductionLaunch(config).length, 2);
});

test("production launch configuration requires an HTTPS origin without a path", () => {
  assert.equal(
    readLaunchConfig({
      PUBLIC_ALLOW_INDEXING: "true",
      PUBLIC_SITE_URL: "http://example.com",
    }).siteUrl,
    undefined,
  );
  assert.equal(
    readLaunchConfig({
      PUBLIC_ALLOW_INDEXING: "true",
      PUBLIC_SITE_URL: "https://example.com/subpath",
    }).siteUrl,
    undefined,
  );

  const valid = readLaunchConfig({
    PUBLIC_ALLOW_INDEXING: "true",
    PUBLIC_SITE_URL: "https://example.com",
  });
  assert.deepEqual(validateProductionLaunch(valid), []);
  assert.equal(canonicalUrl("/race", valid), "https://example.com/race");
});

test("the canonical MVP route list contains every route exactly once", () => {
  assert.equal(MVP_ROUTES.length, 10);
  assert.equal(new Set(MVP_ROUTES).size, MVP_ROUTES.length);
  assert.deepEqual(MVP_ROUTES, Object.values(ROUTES));
});
