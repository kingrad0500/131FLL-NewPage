import { GENERATED, TBD } from "../lib/placeholder.ts";
import type { RacePage } from "./types.ts";

/**
 * Distance detail pages.
 *
 * Facts here are confirmed by the product owner (2026-07-25) or drawn from the
 * organiser's own material — see agents/interior-content-brief.md, which records
 * the source and confidence of every value. Anything unconfirmed is wrapped in
 * TBD() rather than guessed: a wrong cutoff time or aid-station count is a
 * safety problem, not a copy problem.
 *
 * Course descriptions are written from the organiser's GPS course file, so they
 * describe the route that file actually traces and make no mile-by-mile claims.
 */

const START_FINISH = "Las Olas & A1A — Las Olas Oceanside Park";

export const raceOverviewHeroImage = GENERATED(
  "/assets/heroes/interior-race.avif",
  "Interior hero — Race overview",
);

const courseMap = (alt: string) => ({
  src: "/assets/maps/course-map.avif",
  alt,
  caption:
    "Route from the organiser's GPS course file. Mile markers, the eleven water stations, the 10K split, and the relay exchange are all marked. Subject to final 2026 confirmation.",
});

/** Policies that apply to every distance. */
const SHARED_NOTES = [
  {
    title: "Walkers",
    body: "Walkers are welcome and start behind the runners. There is no early start, and walkers finish by 10:00 AM.",
  },
  {
    title: "On the course",
    body: "Headphones are allowed, but keep the volume low or wear a single earbud so you can hear marshals and traffic. Baby joggers, skateboards, bicycles, and animals are not permitted.",
  },
];

export const halfMarathonPage: RacePage = {
  slug: "/race/13-1",
  eyebrow: "The Main Event",
  title: "Half Marathon",
  subtitle: "Thirteen point one miles of Fort Lauderdale coastline.",
  heroImage: GENERATED(
    "/assets/heroes/interior-13-1.avif",
    "Interior hero — Half Marathon",
  ),
  intro: [
    "The half marathon starts in the dark and finishes in the sun. You head north on A1A with the Atlantic on your shoulder, turn back through the beach, run west into Las Olas, and come back out to the ocean for the last stretch to the line.",
    "One road, one city, and a finish line on the beach — with the post-race festival waiting on the other side of it.",
  ],
  facts: [
    { label: "Start time", value: "6:15 AM" },
    { label: "Start & finish", value: START_FINISH },
    { label: "Entry", value: "$80 + $7.00 sign-up fee" },
    { label: "Course limit", value: "3 hours 30 minutes" },
    { label: "Aid stations", value: "11, with water and sports drink" },
    { label: "Course", value: "USATF certified" },
    { label: "Minimum age", value: "14 (minor waiver required under 18)" },
    { label: "Field cap", value: TBD("13.1 participant cap") },
  ],
  receive: [
    "Commemorative finisher medal",
    "Official race shirt",
    "Finish-line food tent access",
    "Post-race beer wristband (21+)",
    "Chip timing by Split Second Timing",
  ],
  courseMap: courseMap(
    "Course map showing the half marathon route along A1A and Las Olas Boulevard, with mile markers, water stations, the relay exchange, and the start and finish at Las Olas and A1A.",
  ),
  notes: [
    {
      title: "After the course limit",
      body: "The course is open for three hours and thirty minutes. Once it closes the roads reopen to traffic and runners still out continue on the sidewalks as pedestrians.",
    },
    ...SHARED_NOTES,
    {
      title: "Athletes in wheelchairs",
      body: TBD("Wheelchair and para-athlete policy for 13.1"),
    },
  ],
};

export const relayPage: RacePage = {
  slug: "/race/relay",
  eyebrow: "Two Runners, One Finish",
  title: "Half Marathon Relay",
  subtitle: "Split the 13.1 with a teammate and cross the line together.",
  heroImage: GENERATED(
    "/assets/heroes/interior-relay.avif",
    "Interior hero — Half Marathon Relay",
  ),
  intro: [
    "The relay is the half marathon shared between two people. Runner one starts with the half marathon field at 6:15 AM and hands over at the exchange; runner two takes the rest of the course to the beach.",
    "Same course, same finish line, half the distance each — and you finish it together.",
  ],
  facts: [
    { label: "Start time", value: "6:15 AM" },
    { label: "Start & finish", value: START_FINISH },
    { label: "Entry", value: "$110 per team + $9.03 sign-up fee" },
    {
      label: "Exchange",
      value: "Runner two must be in the exchange area by 6:45 AM",
    },
    { label: "Leg distances", value: TBD("Relay leg distances") },
    { label: "Course limit", value: "3 hours 30 minutes" },
    { label: "Aid stations", value: "11, with water and sports drink" },
    { label: "Team size", value: TBD("Relay team composition rules") },
    { label: "Minimum age", value: TBD("Relay minimum age") },
  ],
  receive: [
    TBD("What each relay teammate receives (medal, shirt)"),
    "Finish-line food tent access",
    "Post-race beer wristband (21+)",
    "Chip timing by Split Second Timing",
  ],
  courseMap: courseMap(
    "Course map with the relay exchange marked on A1A, along with mile markers, water stations, and the shared start and finish at Las Olas and A1A.",
  ),
  notes: [
    {
      title: "Getting to the exchange",
      body: TBD("How runner two reaches the exchange — transport and parking"),
    },
    {
      title: "Team changes",
      body: TBD("Relay team name changes and substitutions"),
    },
    ...SHARED_NOTES,
  ],
};

export const tenKPage: RacePage = {
  slug: "/race/10k",
  eyebrow: "Six Point Two",
  title: "10K",
  subtitle: "The same coast, the same finish, a shorter morning.",
  heroImage: GENERATED(
    "/assets/heroes/interior-10k.avif",
    "Interior hero — 10K",
  ),
  intro: [
    "The 10K shares the half marathon's opening miles along the ocean before splitting away at the marked point and turning for home.",
    "You start an hour after the half, on the same road, and finish on the same beach.",
  ],
  facts: [
    { label: "Start time", value: "7:00 AM" },
    { label: "Start & finish", value: START_FINISH },
    { label: "Entry", value: "$55 + $5.31 sign-up fee" },
    { label: "Course limit", value: TBD("10K course time limit") },
    {
      label: "Aid stations",
      value: "Shared with the half marathon course, water and sports drink",
    },
    { label: "Minimum age", value: TBD("10K minimum age") },
  ],
  receive: [
    TBD("What 10K entrants receive (medal, shirt)"),
    "Finish-line food tent access",
    "Post-race beer wristband (21+)",
    "Chip timing by Split Second Timing",
  ],
  courseMap: courseMap(
    "Course map showing the 10K split from the half marathon route, with water stations and the shared start and finish at Las Olas and A1A.",
  ),
  notes: SHARED_NOTES,
};

export const fiveKPage: RacePage = {
  slug: "/race/5k",
  eyebrow: "Three Point One",
  title: "5K",
  subtitle: "A fast, friendly morning on the beach road.",
  heroImage: GENERATED(
    "/assets/heroes/interior-5k.avif",
    "Interior hero — 5K",
  ),
  intro: [
    "The 5K is the shortest way into the morning: out along the beach road to the marked turnaround and back to the same finish line as everyone else.",
    "It is the right distance for a first race, and it finishes into the same festival.",
  ],
  facts: [
    { label: "Start time", value: "7:00 AM" },
    { label: "Start & finish", value: START_FINISH },
    { label: "Entry", value: "$40 + $4.30 sign-up fee" },
    { label: "Course limit", value: TBD("5K course time limit") },
    { label: "Minimum age", value: TBD("5K minimum age") },
    { label: "Field cap", value: TBD("5K participant cap") },
  ],
  receive: [
    TBD("What 5K entrants receive (medal, shirt)"),
    "Finish-line food tent access",
    "Post-race beer wristband (21+)",
    "Chip timing by Split Second Timing",
  ],
  courseMap: courseMap(
    "Course map showing the 5K turnaround south of the start, with the shared start and finish at Las Olas and A1A.",
  ),
  notes: [
    {
      title: "Bringing the family",
      body: "Everyone runs or walks their own race — but baby joggers and strollers are not permitted on the course, along with skateboards, bicycles, and animals.",
    },
    ...SHARED_NOTES.filter((note) => note.title !== "On the course"),
    {
      title: "On the course",
      body: "Headphones are allowed, but keep the volume low or wear a single earbud so you can hear marshals and traffic.",
    },
  ],
};

export const racePages = [halfMarathonPage, relayPage, tenKPage, fiveKPage];
