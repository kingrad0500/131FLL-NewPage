import { GENERATED } from "../lib/placeholder.ts";
import type { Distance } from "./types.ts";

/**
 * Start times, pricing, and registration links confirmed by the product owner
 * 2026-07-25 (DEC-009). Prices display the sign-up fee alongside the entry
 * fee so runners see the real checkout total.
 */
export const distances: Distance[] = [
  {
    name: "Half Marathon",
    shortName: "13.1",
    description:
      "The main event. Thirteen point one miles of oceanfront Fort Lauderdale, starting at sunrise and finishing on the beach.",
    startTime: "6:15 AM",
    price: "$80 + $7.00 sign-up fee",
    image: GENERATED(
      "/assets/race/13-1.avif",
      "Distance card image — Half Marathon",
    ),
    imageAlt: "Runners on the oceanfront half marathon course",
    registrationUrl: "https://runsignup.com/fortlauderdale131",
    detailsUrl: "/race/13-1",
    active: true,
  },
  {
    name: "Half Marathon Relay",
    shortName: "Relay",
    description:
      "Split the 13.1 with a teammate. Two legs, one finish line, and you cross it together.",
    startTime: "6:15 AM",
    // Confirmed 2026-07-25: teammate 2 must be in the relay exchange area by
    // 6:45 AM. Surface this on the relay detail page when it is built.
    price: "$110 per team + $9.03 sign-up fee",
    image: GENERATED(
      "/assets/race/relay.avif",
      "Distance card image — Half Marathon Relay",
    ),
    imageAlt: "Relay teammates finishing together",
    registrationUrl: "https://runsignup.com/fortlauderdale131",
    detailsUrl: "/race/relay",
    active: true,
  },
  {
    name: "10K",
    shortName: "10K",
    description:
      "Six point two miles with the same coastal views and the same Fort Lauderdale finish.",
    startTime: "7:00 AM",
    price: "$55 + $5.31 sign-up fee",
    image: GENERATED(
      "/assets/race/10k.avif",
      "Distance card image — 10K",
    ),
    imageAlt: "Runners along the palm-lined 10K course",
    registrationUrl: "https://runsignup.com/fortlauderdale131",
    detailsUrl: "/race/10k",
    active: true,
  },
  {
    name: "5K",
    shortName: "5K",
    description:
      "A fast, friendly 3.1 miles. The right distance for a first race or a family morning.",
    startTime: "7:00 AM",
    price: "$40 + $4.30 sign-up fee",
    image: GENERATED(
      "/assets/race/5k.avif",
      "Distance card image — 5K",
    ),
    imageAlt: "Runners at the 5K start line",
    registrationUrl: "https://runsignup.com/fortlauderdale131",
    detailsUrl: "/race/5k",
    active: true,
  },
];

export const activeDistances = distances.filter((d) => d.active);
