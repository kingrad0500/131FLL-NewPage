import { TBD, UNCONFIRMED } from "../lib/placeholder.ts";
import type { Distance } from "./types.ts";

/**
 * The four distances are read from the shield in the event lockup, which lists
 * "10K, 5K, HALF, RELAY". Descriptions are adapted from the legacy site's
 * subtitles (frontend.md 6.4-6.6); prices and start times are genuinely
 * unknown and must not be guessed.
 */
const SHIELD = "event lockup shield (10K, 5K, HALF, RELAY)";

export const distances: Distance[] = [
  {
    name: "Half Marathon",
    shortName: "13.1",
    description:
      "The main event. Thirteen point one miles of oceanfront Fort Lauderdale, starting at sunrise and finishing on the beach.",
    startTime: TBD("13.1 start time"),
    price: TBD("13.1 registration price"),
    image: null,
    imageAlt: "Runners on the oceanfront half marathon course",
    registrationUrl: TBD("13.1 registration URL"),
    detailsUrl: "/race/13-1",
    active: UNCONFIRMED(true, "13.1 is an active distance", SHIELD),
  },
  {
    name: "Half Marathon Relay",
    shortName: "Relay",
    description:
      "Split the 13.1 with a teammate. Two legs, one finish line, and you cross it together.",
    startTime: TBD("Relay start time"),
    price: TBD("Relay registration price"),
    image: null,
    imageAlt: "Relay teammates finishing together",
    registrationUrl: TBD("Relay registration URL"),
    detailsUrl: "/race/relay",
    active: UNCONFIRMED(true, "Relay is an active distance", SHIELD),
  },
  {
    name: "10K",
    shortName: "10K",
    description:
      "Six point two miles with the same coastal views and the same Fort Lauderdale finish.",
    startTime: TBD("10K start time"),
    price: TBD("10K registration price"),
    image: null,
    imageAlt: "Runners along the palm-lined 10K course",
    registrationUrl: TBD("10K registration URL"),
    detailsUrl: "/race/10k",
    active: UNCONFIRMED(true, "10K is an active distance", SHIELD),
  },
  {
    name: "5K",
    shortName: "5K",
    description:
      "A fast, friendly 3.1 miles. The right distance for a first race or a family morning.",
    startTime: TBD("5K start time"),
    price: TBD("5K registration price"),
    image: null,
    imageAlt: "Runners at the 5K start line",
    registrationUrl: TBD("5K registration URL"),
    detailsUrl: "/race/5k",
    active: UNCONFIRMED(true, "5K is an active distance", SHIELD),
  },
];

export const activeDistances = distances.filter((d) => d.active);
