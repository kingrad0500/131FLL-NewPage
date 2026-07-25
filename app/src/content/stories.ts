import { GENERATED } from "../lib/placeholder.ts";
import type { StoryStep } from "./types.ts";

/**
 * Story scroller steps, following the "Sunrise to Finish Line" progression in
 * AGENTS.md. Copy here is editorial description of the city and the course
 * character, not a claim about race logistics, pricing, or amenities.
 *
 * Media is AI-generated interim placeholder imagery (DEC-011), wrapped in
 * GENERATED() so it renders normally while remaining release-blocking.
 */
export const stories: StoryStep[] = [
  {
    id: "oceanfront-miles",
    title: "Oceanfront Miles",
    body: "The course runs the coast. You start with the Atlantic on one side and the sunrise coming up over it, and it stays with you for miles.",
    media: GENERATED(
      "/assets/race/oceanfront-miles.avif",
      "Story image — Oceanfront Miles",
    ),
    mediaAlt: "Runners along the Atlantic oceanfront at sunrise",
    accent: "aqua",
  },
  {
    id: "las-olas-energy",
    title: "Las Olas Energy",
    body: "Fort Lauderdale turns out for this one. The stretch through Las Olas is loud, crowded, and the fastest you will feel all morning.",
    media: GENERATED(
      "/assets/race/las-olas-energy.avif",
      "Story image — Las Olas Energy",
    ),
    mediaAlt: "Spectators cheering runners along Las Olas Boulevard",
    accent: "coral",
  },
  {
    id: "every-pace",
    title: "A Race for Every Pace",
    body: "Four distances share one finish line. Whether you are chasing a personal best or walking your first 5K, you finish in the same place.",
    media: GENERATED(
      "/assets/race/every-pace.avif",
      "Story image — A Race for Every Pace",
    ),
    mediaAlt: "Runners of varied ages and paces on the course",
    accent: "yellow",
  },
  {
    id: "community",
    title: "South Florida Community",
    body: "Volunteers on every mile, neighbors on every corner, and a few thousand people who got up before the sun for the same reason you did.",
    media: GENERATED(
      "/assets/race/community.avif",
      "Story image — South Florida Community",
    ),
    mediaAlt: "Volunteers handing water to runners at an aid station",
    accent: "aqua",
  },
  {
    id: "finish-line",
    title: "Finish-Line Celebration",
    body: "The last turn puts the beach in front of you. Then the medal, the music, and somewhere to sit down.",
    media: GENERATED(
      "/assets/race/finish-line.avif",
      "Story image — Finish-Line Celebration",
    ),
    mediaAlt: "A runner crossing the finish line with arms raised",
    accent: "coral",
  },
];
