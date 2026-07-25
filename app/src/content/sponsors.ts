import { TBD } from "../lib/placeholder.ts";
import type { Sponsor, SponsorTier } from "./types.ts";

/**
 * Sponsor tiering is UNRESOLVED (DEC-006). The event lockup reads "Presented
 * by Baptist Health" while agents.md 6.10 and frontend.md 6.18 tier Liquid
 * Youth as title sponsor with Baptist Health as official medical provider.
 * The tiers below follow the specification; they must be verified before
 * release because publishing the wrong tier misrepresents a relationship.
 *
 * `assetReady: false` omits a sponsor from rendering entirely. AGENTS.md
 * forbids broken images, empty frames, and missing-image labels, so a sponsor
 * with an unusable file is left out rather than shown degraded.
 */
export const sponsors: Sponsor[] = [
  {
    name: "Liquid Youth",
    logo: "/assets/partners/liquid-youth.png",
    logoWidth: 648,
    logoHeight: 231,
    alt: "Liquid Youth",
    url: TBD("Liquid Youth URL", "DEC-004"),
    tier: "presenting",
    active: true,
    assetReady: true,
  },
  {
    name: "Baptist Health",
    logo: null,
    alt: "Baptist Health",
    url: TBD("Baptist Health URL", "DEC-004"),
    tier: "medical",
    active: true,
    assetReady: false,
    assetNote:
      "Available file is a 2048x706 JPEG with no alpha channel. It renders as a white rectangle on navy surfaces. Needs a transparent PNG or SVG.",
  },
  {
    name: "Visit Lauderdale",
    logo: "/assets/partners/visit-lauderdale.png",
    // Downscaled from the 6601×2101 curated master; see asset-manifest.md.
    logoWidth: 440,
    logoHeight: 140,
    alt: "Visit Lauderdale",
    url: TBD("Visit Lauderdale URL", "DEC-004"),
    tier: "supporting",
    active: true,
    assetReady: true,
  },
  {
    name: "Fort Lauderdale Beach BID",
    logo: null,
    alt: "Fort Lauderdale Beach BID",
    url: TBD("Fort Lauderdale Beach BID URL", "DEC-004"),
    tier: "supporting",
    active: true,
    assetReady: false,
    assetNote:
      "Available file is 175x75 JPEG with no alpha. Too small to render without visible degradation. Needs a current original.",
  },
  {
    name: "Dole",
    logo: null,
    alt: "Dole",
    url: TBD("Dole URL", "DEC-004"),
    tier: "supporting",
    active: true,
    assetReady: false,
    assetNote:
      "Available file is 136x91 PNG with no alpha, identified from the archive's ds_P6ob.png. Sponsor identity and current status both unconfirmed.",
  },
];

/**
 * Tier order, labels, and display scale in one place. Adding a tier means
 * adding a row here — the type union derives from it, and the showcase maps
 * over it, so a new tier cannot silently fail to render.
 */
export const sponsorTiers = [
  { id: "presenting", label: "Presenting Partner", size: "lg" },
  { id: "medical", label: "Official Medical Partner", size: "lg" },
  { id: "supporting", label: "Supporting Partners", size: "sm" },
] as const satisfies readonly {
  id: SponsorTier;
  label: string;
  size: "lg" | "sm";
}[];

/** Tiers that have at least one sponsor fit to publish. */
export const publishableTiers = sponsorTiers
  .map((tier) => ({
    ...tier,
    sponsors: sponsors.filter(
      (s) => s.tier === tier.id && s.active && s.assetReady,
    ),
  }))
  .filter((tier) => tier.sponsors.length > 0);

/** Sponsors withheld from rendering because their asset is unfit to publish. */
export const withheldSponsors = sponsors.filter(
  (s) => s.active && !s.assetReady,
);
