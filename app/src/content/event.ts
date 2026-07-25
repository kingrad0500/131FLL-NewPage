import type { CTA, EventFacts } from "./types.ts";

/**
 * Canonical event facts, confirmed by the product owner 2026-07-25
 * (DEC-003, DEC-009). Values here are authoritative for the countdown,
 * ticker, registration path, and SEO.
 */
export const event: EventFacts = {
  name: "Fort Lauderdale 13.1",

  // Confirmed 20th edition. The supplied lockup artwork still reads
  // "19th Annual" and remains in use per product-owner direction 2026-07-25;
  // updated artwork is on the designer request list (see DEC-010 notes).
  edition: "20th Annual",

  city: "Fort Lauderdale",
  state: "FL",
  locationLabel: "Fort Lauderdale, Florida",

  // First gun: 13.1 & Relay at 6:15 AM ET. The 10K and 5K start at 7:00 AM;
  // per-distance times live in distances.ts.
  startsAt: "2026-11-08T06:15:00-05:00",
  dateLabel: "November 8, 2026",

  registrationUrl: "https://runsignup.com/fortlauderdale131",
  resultsUrl: "https://runsignup.com/Race/Results/Overview/83064",
  photosUrl: "https://runsignup.com/Race/FortLauderdale131/Page-2",

  contactEmail: "info@131FortLauderdale.com",
  volunteerEmail: "Lorraine@exclusivesports.com",

  social: [
    {
      label: "Facebook",
      // Page slug predates current sponsor naming; confirmed as the event's
      // current page by the product owner 2026-07-25.
      href: "https://www.facebook.com/ClevelandClinicFlorida13.1FortLauderdale/",
    },
    { label: "Instagram", href: "https://www.instagram.com/wildsideonline" },
  ],
};

/** Ticker content. Essential facts also appear in the page body per AGENTS.md. */
export const tickerItems: string[] = [
  event.dateLabel,
  "Fort Lauderdale, FL",
  "13.1 / Relay / 10K / 5K",
];

/** "November 8, 2026 · Fort Lauderdale, Florida" — composed once. */
export const dateLocationLabel = `${event.dateLabel} · ${event.locationLabel}`;

/**
 * The primary conversion action. Defined once so the header, menu, footer,
 * hero, and conversion band cannot drift apart on label or destination.
 */
export const registerAction: CTA = {
  label: "Register Now",
  href: event.registrationUrl,
  priority: "primary",
  external: true,
};
