import { GENERATED, TBD } from "../lib/placeholder.ts";

export const scheduleHeroImage = GENERATED(
  "/assets/heroes/interior-schedule.avif",
  "Interior hero — Race schedule",
);
import type { PickupWindow, ScheduleEntry } from "./types.ts";

/**
 * Race weekend schedule.
 *
 * Confirmed 2026-07-25: race Sunday 8 November 2026, packet pickup Saturday
 * 7 November, times and locations unchanged from the organiser's own pages.
 * The two windows marked below disagree between the organiser's FAQ and
 * schedule pages; the owner chose the FAQ values and flagged them for later
 * correction (agents/interior-content-brief.md §E).
 */

export const raceDay = {
  date: "Sunday, November 8, 2026",
  venue: "Las Olas Oceanside Park",
  address: "3000 E Las Olas Blvd, Fort Lauderdale, FL 33316",
  startLine: "Las Olas & A1A",
};

export const raceDaySchedule: ScheduleEntry[] = [
  {
    time: "4:30 AM",
    label: "Race-morning packet pickup opens",
    detail: "At the registration tent, race site.",
  },
  {
    time: "5:00 AM",
    label: "Race-day registration opens",
    detail: "If space remains. Closes at 5:50 AM.",
  },
  {
    time: "6:15 AM",
    label: "Half Marathon and Relay start",
    detail: "Las Olas & A1A.",
  },
  {
    time: "6:45 AM",
    label: "Relay exchange closes",
    detail: "Runner two must be in the exchange area by this time.",
  },
  { time: "7:00 AM", label: "10K and 5K start", detail: "Las Olas & A1A." },
  {
    time: "7:00 AM",
    label: "Post-race festival opens",
    detail: "Music, food, and the finish area.",
  },
  {
    time: "9:45 AM",
    label: "Half marathon course closes",
    detail:
      "Three hours thirty minutes after the start. Roads reopen and runners still out continue on the sidewalks.",
  },
  {
    time: "10:00 AM",
    label: "Walkers finish",
    detail: "All walkers complete the course by this time.",
  },
  { time: TBD("Awards ceremony time"), label: "Awards ceremony" },
  { time: TBD("Festival closing time"), label: "Festival closes" },
];

export const packetPickup: PickupWindow[] = [
  {
    day: "Saturday, November 7, 2026",
    hours: "8:00 AM – 6:00 PM",
    venue: "Downtown Events Center",
    address: "416 NE 1st Street, Fort Lauderdale, FL 33301",
    note: "Held alongside the health and fitness expo. We strongly recommend collecting your packet on Saturday.",
  },
  {
    day: "Sunday, November 8, 2026",
    hours: "4:30 AM – 6:00 AM",
    venue: "Race site registration tent",
    address: "Las Olas & A1A, Fort Lauderdale",
    note: "Race-morning pickup only — allow time to reach the start.",
  },
];

export const pickupRules = [
  "Photo identification is required to collect your packet.",
  "Someone else may collect it for you with a photocopy of your photo ID and your confirmation email.",
];

export const packetContents = [
  "Your bib number, with the gear-check tag attached",
  "Your timing tag, already fixed to the back of the bib",
  "Safety pins",
  "A post-race beer wristband, for participants 21 and over",
];

export const bibRules = [
  "Wear your bib on the front, outside all clothing, for the entire race.",
  "Do not alter, fold, or wrinkle the bib — the timing tag is on the back of it.",
  "Bibs and timing tags are non-transferable.",
];

export const chipTiming =
  "Timing is handled by Split Second Timing. The lightweight tag on the back of your bib records both your clock time, which runs from the starting gun, and your chip time, which runs from the moment you cross the start mat. Your chip time is your personal result.";
