import type { Sponsor, SponsorTier } from "./types.ts";

/**
 * Tiering confirmed by the product owner 2026-07-25 (DEC-006): Baptist Health
 * and Liquid Youth are both top-tier, with Baptist Health given greater
 * prominence — "Presented by" renders first and largest, Liquid Youth follows
 * as Title Partner. Sponsor URLs confirmed the same day (DEC-004).
 *
 * `assetReady: false` omits a sponsor from rendering entirely. AGENTS.md
 * forbids broken images, empty frames, and missing-image labels, so a sponsor
 * with an unusable file is left out rather than shown degraded.
 */
export const sponsors: Sponsor[] = [
  {
    name: "Baptist Health",
    logo: "/assets/partners/baptist-health.png",
    // Trimmed + downscaled from the owner-supplied transparent original
    // (assets/partners/"Baptist Health logo - No Background.png").
    logoWidth: 880,
    logoHeight: 303,
    alt: "Baptist Health",
    url: "https://baptisthealth.net/",
    tier: "presenting",
    active: true,
    assetReady: true,
  },
  {
    name: "Liquid Youth",
    logo: "/assets/partners/liquid-youth.png",
    logoWidth: 648,
    logoHeight: 231,
    alt: "Liquid Youth",
    url: "https://myliquidyouth.com/",
    tier: "title",
    active: true,
    assetReady: true,
  },
  {
    name: "Visit Lauderdale",
    logo: "/assets/partners/visit-lauderdale.png",
    // Downscaled from the 6601×2101 curated master; see asset-manifest.md.
    logoWidth: 440,
    logoHeight: 140,
    alt: "Visit Lauderdale",
    url: "https://www.visitlauderdale.com/",
    tier: "supporting",
    active: true,
    assetReady: true,
  },
  {
    name: "Dole",
    logo: "/assets/partners/dole.png",
    // Trimmed + downscaled from the owner-supplied transparent original
    // (assets/partners/"DOLE logo No background.png").
    logoWidth: 480,
    logoHeight: 321,
    alt: "Dole",
    url: "https://www.dole.com/",
    tier: "supporting",
    active: true,
    assetReady: true,
  },
  {
    name: "Fort Lauderdale Beach BID",
    logo: null,
    alt: "Fort Lauderdale Beach BID",
    url: "https://www.broward.org/Arts/CulturalOrganizations/Pages/organization.aspx?org=1408",
    tier: "supporting",
    active: true,
    assetReady: false,
    assetNote:
      "File supplied 2026-07-25 is an AI-reconstructed enlargement with halo artifacts and text clipped mid-letter at the right edge — unfit to represent the partner's mark. Awaiting an original from the BID; the URL is wired so it publishes the moment a clean file lands.",
  },
];

/**
 * Tier order, labels, and display scale in one place. Adding a tier means
 * adding a row here — the type union derives from it, and the showcase maps
 * over it, so a new tier cannot silently fail to render.
 */
export const sponsorTiers = [
  { id: "presenting", label: "Presented by", size: "lg" },
  { id: "title", label: "Title Partner", size: "lg" },
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
