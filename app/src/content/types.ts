/**
 * Content model.
 *
 * Field names follow the content architecture in AGENTS.md so that structured
 * data, not markup, carries the event's facts.
 */

export interface CTA {
  label: string;
  href: string;
  priority: "primary" | "secondary" | "tertiary";
  external?: boolean;
}

/**
 * Which designed scene a section sits in. Surfaces are a composition decision
 * belonging to the page, not a component internal — the class also drives
 * focus-ring, accent, and secondary-button theming (see global.css).
 */
export type SectionSurface = "light" | "warm" | "muted" | "dark" | "deepest";

/** Heading + prose block. */
export interface EditorialBlock {
  eyebrow: string;
  title: string;
  body: string[];
}

/** Heading + prose + a supporting image. */
export interface FeatureBlock {
  eyebrow: string;
  title: string;
  body: string;
  image: string | null;
  imageAlt: string;
  /** Optional supporting note; may carry a [TBD] marker. */
  details?: string;
}

export type FocalPoint = `${number}% ${number}%`;

export interface HeroMedia {
  /** Looping hero video. Null until approved footage is supplied (DEC-005). */
  video: string | null;
  /** Required poster. Doubles as the reduced-motion and video-failure image. */
  poster: string | null;
  desktopImage: string | null;
  mobileImage: string | null;
  imageAlt: string;
  focalPointDesktop: FocalPoint;
  focalPointMobile: FocalPoint;
}

export interface Hero {
  media: HeroMedia;
  eyebrow: string;
  title: string;
  subtitle: string;
  actions: CTA[];
}

export interface StoryStep {
  id: string;
  title: string;
  body: string;
  media: string | null;
  mediaAlt: string;
  accent: "aqua" | "coral" | "yellow";
}

export interface Distance {
  name: string;
  shortName: string;
  description: string;
  startTime: string;
  price: string;
  image: string | null;
  imageAlt: string;
  registrationUrl: string;
  detailsUrl: string;
  active: boolean;
}

export type SponsorTier = "presenting" | "title" | "supporting";

export interface Sponsor {
  name: string;
  logo: string | null;
  /** Intrinsic dimensions of `logo`. Required to reserve space and avoid CLS. */
  logoWidth?: number;
  logoHeight?: number;
  alt: string;
  url: string;
  tier: SponsorTier;
  active: boolean;
  /**
   * False when the asset exists but is unfit to publish — wrong format, too
   * small, or unverified. AGENTS.md forbids rendering broken or empty logo
   * frames, so these are omitted rather than shown degraded.
   */
  assetReady: boolean;
  assetNote?: string;
}

export interface NavLink {
  label: string;
  href: string;
  /** False for routes deferred past the MVP release (DEC-001). */
  inRelease: boolean;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export interface EventFacts {
  name: string;
  edition: string;
  city: string;
  state: string;
  locationLabel: string;
  /** ISO 8601 with offset. Drives the countdown. */
  startsAt: string;
  dateLabel: string;
  registrationUrl: string;
  resultsUrl: string;
  photosUrl: string;
  contactEmail: string;
  volunteerEmail: string;
  social: { label: string; href: string }[];
}
