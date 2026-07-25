# Fort Lauderdale 13.1 — Asset Manifest

## Rules

- The curated source root is:
  `/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/`
- The archived webpage folder is reference-only.
- Application code must use project-relative URLs, never absolute workstation paths.
- `TBD` permission or sponsor status blocks production publication.
- Preserve original curated files; optimize copied application versions.

## Status values

- `reference`: available for design reference only.
- `candidate`: technically usable but awaiting approval.
- `approved`: approved for production use.
- `replace`: must be replaced.
- `retired`: intentionally excluded.

## Current assets

Dimensions, format, and alpha below were verified directly against the files on 2026-07-24. They are measurements, not estimates.

| Asset | Source path relative to curated root | Verified | Intended use | Status | Permission | Current partner/brand | Alt-text direction | Notes |
|---|---|---|---|---|---|---|---|---|
| 13.1 loader | `brand/fort-lauderdale-13-1-loader.png` | 400×400 PNG, **alpha: yes** | Branded loading sequence | candidate | TBD | TBD | Decorative; adjacent text identifies the event | Transparency **confirmed**. The distressed black mark composites directly onto the yellow field with no knockout step. 400×400 is sufficient for the loader at all breakpoints but should be re-exported as SVG for a crisp large-scale reveal. |
| Event lockup | `brand/fort-lauderdale-13-1-logo.png` | 322×132 PNG, alpha: yes | Header, menu, footer | candidate | TBD | TBD | Fort Lauderdale 13.1 event logo | Reads "The 19th Annual Liquid Youth 13.1 Fort Lauderdale Running Festival — Presented by Baptist Health". Shield reads "10K, 5K, HALF, RELAY". Drives DEC-006 and DEC-009. **Too small for retina header use** (needs ~2× at the 230–290 px display width in `frontend.md` §5.3). Request production SVG. |
| Legacy homepage artwork | `media/legacy-homepage-hero.png` | 1920×897 PNG, alpha: yes | Visual/content reference only | reference | TBD | Mixed historical content | Not for production use | **Cannot serve as the hero.** Contains baked-in headline text, which `agents.md` §13 forbids. Runner bibs are dated Dec 2021. Contains the red "Running Festival" mark (DEC-007). |
| Liquid Youth | `partners/liquid-youth.png` | 648×231 PNG, alpha: yes | Presenting/title partner | candidate | TBD | TBD | Liquid Youth | Best-conditioned partner file available. Confirm tier per DEC-006; request SVG. |
| Baptist Health | `partners/baptist-health.jpg` | 2048×706 JPEG, **alpha: no** | Medical or presenting partner | replace | TBD | TBD | Baptist Health | Resolution is ample, but **JPEG with no transparency renders as a white rectangle on navy sections**. A transparent PNG or SVG is required before this can appear in the sponsor showcase. |
| Visit Lauderdale | `partners/visit-lauderdale.png` | 6601×2101 PNG, alpha: yes | Tourism/supporting partner | candidate | TBD | TBD | Visit Lauderdale | Oversized master; downscale during build. Usable as-is. |
| Fort Lauderdale Beach BID | `partners/fort-lauderdale-beach-bid.jpg` | 175×75 JPEG, **alpha: no** | Supporting partner | replace | TBD | TBD | Fort Lauderdale Beach BID | **Unusable.** Too small for a spacious tier layout and has no transparency. Must be replaced with a current original. |
| Dole | `partners/dole.png` | 136×91 PNG, **alpha: no** | Supporting partner | replace | TBD | TBD | Dole | **Unusable.** Smallest asset in the set, no transparency. Identified from the archive's `ds_P6ob.png`; confirm this is in fact Dole and request a current original. |

### Assets required but entirely absent

Nothing in the curated root satisfies these. All are blockers for a production release.

| Need | Required by | Status |
|---|---|---|
| Homepage hero video (10–20 s, 1920×1080+, no baked-in text, no essential audio) | `agents.md` §6.3; `plan.md` Phase 3 | missing |
| Hero poster image (desktop + mobile crop) | `agents.md` §6.3 | missing |
| Story scroller media, 5–8 clips or high-resolution photos | `agents.md` §6.6 | missing |
| One image per race distance | `agents.md` §6.7 | missing |
| Festival/finish-line photography | `agents.md` §6.8 | missing |
| Volunteer/community photography | `plan.md` Phase 3 | missing |
| Course maps per distance | `agents.md` §7 | missing |
| Interior hero photography (one per MVP route) | `agents.md` §7 | missing |
| Licensed brand fonts | `agents.md` §4 | missing |
| Reversed (white) event lockup for dark surfaces — see DEC-010 | `agents.md` §6.2 | missing |

Until these arrive the application renders clearly-marked placeholders per DEC-008.

## New asset template

Add one row per new file:

| Asset | Source path relative to curated root | Intended use | Status | Permission | Current partner/brand | Alt-text direction | Notes |
|---|---|---|---|---|---|---|---|
| Example | `heroes/example.jpg` | Homepage hero poster | candidate | TBD | Not applicable | Runners along Fort Lauderdale’s oceanfront route | Record crop/focal point and optimization |

## Production-copy checklist

Before copying an asset into the application:

- Confirm permission/status.
- Confirm current branding or sponsorship.
- Confirm intended component/page.
- Write alternative text or mark it decorative.
- Select one master source.
- Record the project-relative destination.
- Optimize format and dimensions.
- Verify desktop and mobile crops.
- Verify visual quality on light and dark backgrounds.

