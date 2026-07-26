/**
 * Canonical application routes.
 *
 * Navigation, sitemap generation, and build verification import this module so
 * a route cannot be added to one release surface and omitted from another.
 */
export const ROUTES = {
  home: "/",
  race: "/race",
  schedule: "/race/schedule",
  halfMarathon: "/race/13-1",
  relay: "/race/relay",
  tenK: "/race/10k",
  fiveK: "/race/5k",
  registration: "/registration",
  results: "/results",
  faqs: "/faqs",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

export const MVP_ROUTES = Object.freeze(Object.values(ROUTES)) as readonly AppRoute[];

