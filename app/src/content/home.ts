import { GENERATED, TBD } from "../lib/placeholder.ts";
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
    // No approved footage exists yet (DEC-005). The still images below are
    // AI-generated interim placeholders (DEC-011) — release-blocking until
    // real photography replaces them.
    video: null,
    poster: GENERATED(
      "/assets/heroes/hero-desktop.avif",
      "Homepage hero poster (doubles as reduced-motion image)",
    ),
    desktopImage: GENERATED(
      "/assets/heroes/hero-desktop.avif",
      "Homepage hero image — desktop",
    ),
    mobileImage: GENERATED(
      "/assets/heroes/hero-mobile.avif",
      "Homepage hero image — mobile",
    ),
    imageAlt: "Runners along the Fort Lauderdale oceanfront at sunrise",
    focalPointDesktop: "50% 50%",
    focalPointMobile: "50% 40%",
  },
  // GalleryHero bento cells (agents/hero-gallery-spec.md, DEC-013). Picks
  // approved 2026-07-25; chosen so nothing repeats imagery used further down
  // the homepage. Order matters: cells 2 and 3 are tall, so they take the
  // people-facing frames that survive a portrait crop, while the wide cells
  // take the landscapes.
  gallery: [
    {
      src: GENERATED(
        "/assets/heroes/hero-desktop.avif",
        "Gallery hero cell — oceanfront pack (large cell)",
      ),
      alt: "Runners along the Fort Lauderdale oceanfront at sunrise",
    },
    {
      src: GENERATED(
        "/assets/heroes/interior-5k.avif",
        "Gallery hero cell — family fun run",
      ),
      alt: "Families and kids running together on a city street",
    },
    {
      src: GENERATED(
        "/assets/heroes/interior-results.avif",
        "Gallery hero cell — finisher medals",
      ),
      alt: "Three finishers laughing with medals around their necks",
    },
    {
      src: GENERATED(
        "/assets/heroes/interior-relay.avif",
        "Gallery hero cell — relay pair",
      ),
      alt: "Two runners side by side on a coastal road",
    },
    {
      src: GENERATED(
        "/assets/heroes/interior-10k.avif",
        "Gallery hero cell — palm-lined road",
      ),
      alt: "Palm-lined road running toward turquoise ocean water",
    },
  ],
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
  // Opening time confirmed by the product owner 2026-07-25; programming,
  // vendors, and closing hours remain TBD below.
  body: "From 7:00 AM the finish area opens into the running festival: music, food, and a place to find your people once the medal is around your neck.",
  image: GENERATED(
    "/assets/festival/festival.avif",
    "Festival feature image",
  ),
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
