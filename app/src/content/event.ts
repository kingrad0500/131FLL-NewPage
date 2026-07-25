import { TBD, UNCONFIRMED } from "../lib/placeholder.ts";
import type { CTA, EventFacts } from "./types.ts";

const LEGACY_SITE = "legacy homepage (frontend.md 6.1)";
const LOCKUP = "event lockup (assets/brand/fort-lauderdale-13-1-logo.png)";

export const event: EventFacts = {
  name: "Fort Lauderdale 13.1",

  // The lockup reads "19th Annual". Whether the next running is the 19th or
  // the 20th depends on the canonical year, which is itself unconfirmed.
  edition: UNCONFIRMED("19th Annual", "Event edition", LOCKUP),

  city: "Fort Lauderdale",
  state: "FL",
  locationLabel: "Fort Lauderdale, Florida",

  // frontend.md 11 records that the reference site mixes 2023-2026 dates and
  // still shows a 2017 copyright, so this date is observed, not verified.
  // Start time is unknown, so 6:00 AM is a placeholder within the timestamp;
  // the countdown is accurate only once DEC-009 resolves.
  startsAt: UNCONFIRMED(
    "2026-11-08T06:00:00-05:00",
    "Race start date and time",
    LEGACY_SITE,
  ),
  dateLabel: UNCONFIRMED("November 8, 2026", "Race date label", LEGACY_SITE),

  registrationUrl: TBD("Registration provider URL"),
  resultsUrl: TBD("Results provider URL"),
  photosUrl: TBD("Race photo provider URL"),

  contactEmail: TBD("Contact email address"),
  volunteerEmail: TBD("Volunteer coordinator email address"),

  social: [
    { label: "Facebook", href: TBD("Facebook URL") },
    { label: "Instagram", href: TBD("Instagram URL") },
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
