import type { ResultsYear } from "./types.ts";

/**
 * Results archive.
 *
 * Links supplied by the product owner 2026-07-25. Results are hosted on
 * Athlinks; this page's job is simply to send people to the right year and
 * distance. Athlinks renders results client-side, so the individual links
 * could not be machine-verified — they are reproduced exactly as supplied.
 *
 * Gaps are real and left as they are rather than papered over: there is no
 * 2022 event listed, and no relay or 5K before 2025.
 */
export const resultsArchive: ResultsYear[] = [
  {
    year: "2025",
    races: [
      {
        distance: "Half Marathon",
        href: "https://www.athlinks.com/event/375222/results/Event/1126959/Course/2651321/Results?page=1",
      },
      {
        distance: "Half Marathon Relay",
        href: "https://www.athlinks.com/event/375222/results/Event/1126959/Course/2651326/Results?page=1",
      },
      {
        distance: "10K",
        href: "https://www.athlinks.com/event/375222/results/Event/1126959/Course/2651322/Results?page=1",
      },
      {
        distance: "5K",
        href: "https://www.athlinks.com/event/375222/results/Event/1126959/Course/2651324/Results?page=1",
      },
    ],
  },
  {
    year: "2024",
    races: [
      {
        distance: "Half Marathon",
        href: "https://www.athlinks.com/event/375222/results/Event/1070206/Results",
      },
      {
        distance: "10K",
        href: "https://www.athlinks.com/event/375222/results/Event/1070206/Course/2431136/Results?page=1",
      },
    ],
  },
  {
    year: "2023",
    races: [
      {
        distance: "Half Marathon",
        href: "https://www.athlinks.com/event/375222/results/Event/1040238/Course/2325809/Results?page=1",
      },
      {
        distance: "Two-Person Relay",
        href: "https://www.athlinks.com/event/375222/results/Event/1040238/Course/2325810/Results?page=1",
      },
      {
        distance: "10K",
        href: "https://www.athlinks.com/event/375222/results/Event/1040238/Course/2325811/Results?page=1",
      },
    ],
  },
  {
    year: "2021",
    races: [
      {
        distance: "Half Marathon",
        href: "https://www.athlinks.com/event/362923/results/Event/999040/Results",
      },
      {
        distance: "Two-Person Relay",
        href: "https://www.athlinks.com/event/362923/results/Event/999040/Course/2170371/Results?page=1",
      },
      {
        distance: "10K",
        href: "https://www.athlinks.com/event/362923/results/Event/999040/Course/2170372/Results?page=1",
      },
    ],
  },
];

export const clockVsChip =
  "Clock time runs from the starting gun. Chip time runs from the moment you cross the start mat to the moment you cross the finish. With a field this size the two can differ by several minutes — your chip time is your personal result.";
