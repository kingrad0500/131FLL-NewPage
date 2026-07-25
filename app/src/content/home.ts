import { TBD } from "../lib/placeholder.ts";
import { dateLocationLabel, event, registerAction } from "./event.ts";
import type { CTA, EditorialBlock, FeatureBlock, Hero } from "./types.ts";

/**
 * Homepage content.
 *
 * The hero headline is approved-pending editorial copy drawn from the
 * directions offered in AGENTS.md. It makes no factual claim about the race,
 * so it is safe to render; final copy is a product-owner decision.
 */
export const homeHero: Hero = {
  media: {
    // No approved footage exists yet (DEC-005). MediaHero degrades to its
    // static path automatically when video and poster are both null.
    video: null,
    poster: null,
    desktopImage: null,
    mobileImage: null,
    imageAlt: "Runners along the Fort Lauderdale oceanfront at sunrise",
    focalPointDesktop: "50% 50%",
    focalPointMobile: "50% 40%",
  },
  eyebrow: dateLocationLabel,
  title: "Run the Coast",
  subtitle:
    "Sunrise over the Atlantic, thirteen point one miles of Fort Lauderdale, and a finish line on the beach.",
  actions: [
    registerAction,
    { label: "Explore the Races", href: "#distances", priority: "secondary" },
  ],
};

export const editorialIntro: EditorialBlock = {
  eyebrow: "The Race",
  title: "Your fastest view of Fort Lauderdale",
  body: [
    "Most of the year, this stretch of coast belongs to traffic. On race morning it belongs to you.",
    "The course traces the Atlantic through the heart of Fort Lauderdale, turns inland through Las Olas, and brings you back to the beach for the finish. Four distances, one route, one city that shows up for it.",
  ],
};

export const festival: FeatureBlock = {
  eyebrow: "After the Finish",
  title: "It doesn't end at the finish line",
  body: "The finish area opens into the running festival: music, food, and a place to find your people once the medal is around your neck.",
  image: null,
  imageAlt: "Post-race festival crowd at the finish area",
  details: TBD("Confirmed festival programming, vendors, and hours"),
};

export const conversionActions: CTA[] = [
  registerAction,
  {
    label: "View Results",
    href: event.resultsUrl,
    priority: "secondary",
    external: true,
  },
  {
    label: "Race Photos",
    href: event.photosUrl,
    priority: "tertiary",
    external: true,
  },
  { label: "Race Schedule", href: "/race/schedule", priority: "tertiary" },
];
