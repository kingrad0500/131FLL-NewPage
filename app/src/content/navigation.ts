import type { NavGroup } from "./types.ts";

/**
 * Menu structure from AGENTS.md, filtered to the MVP release (DEC-001).
 *
 * plan.md line 339: "Do not publish empty navigation destinations." Links with
 * `inRelease: false` are defined here so the second release is a flag flip,
 * but they are filtered out of every rendered surface.
 */
export const navigation: NavGroup[] = [
  {
    label: "Race",
    links: [
      { label: "Overview", href: "/race", inRelease: true },
      { label: "Schedule", href: "/race/schedule", inRelease: true },
      { label: "13.1", href: "/race/13-1", inRelease: true },
      { label: "Relay", href: "/race/relay", inRelease: true },
      { label: "10K", href: "/race/10k", inRelease: true },
      { label: "5K", href: "/race/5k", inRelease: true },
    ],
  },
  {
    label: "Plan Your Weekend",
    links: [
      { label: "Training", href: "/resources/training", inRelease: false },
      { label: "Travel", href: "/resources/travel", inRelease: false },
      { label: "Parking & Directions", href: "/resources/parking", inRelease: false },
      { label: "Spectator Info", href: "/resources/spectators", inRelease: false },
    ],
  },
  {
    label: "Results & Photos",
    links: [{ label: "Results & Photos", href: "/results", inRelease: true }],
  },
  {
    label: "Get Involved",
    links: [
      { label: "Volunteer", href: "/volunteer", inRelease: false },
      { label: "Groups", href: "/partners/groups", inRelease: false },
      { label: "Charities", href: "/partners/charities", inRelease: false },
    ],
  },
  {
    label: "Partners",
    links: [{ label: "Sponsors", href: "/partners/sponsors", inRelease: false }],
  },
  {
    label: "Contact",
    links: [{ label: "FAQs & Contact", href: "/faqs", inRelease: true }],
  },
];

/** Only groups that still have at least one shippable link. */
export const releaseNavigation: NavGroup[] = navigation
  .map((group) => ({
    ...group,
    links: group.links.filter((link) => link.inRelease),
  }))
  .filter((group) => group.links.length > 0);
