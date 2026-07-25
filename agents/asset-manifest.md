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
- `generated`: AI-generated interim placeholder (DEC-011). Renders normally,
  release-blocking, must be replaced by real photography.

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

### Owner-supplied files — 2026-07-25

Dropped by the product owner into `partners/`; map artifacts refiled under
`maps/`. These supersede the matching rows in the table above
(`baptist-health.jpg`, `dole.png`, `fort-lauderdale-beach-bid.jpg` are retired).

| Asset | Source path relative to curated root | Verified | Status | Permission | Production copy | Notes |
|---|---|---|---|---|---|---|
| Baptist Health (transparent) | `partners/Baptist Health logo - No Background.png` | 2048×706 PNG, alpha: yes | approved | Owner-supplied 2026-07-25 | `app/public/assets/partners/baptist-health.png` (880×303, trimmed) | Clean, sharp. Renders in the "Presented by" tier (DEC-006). |
| Dole (transparent) | `partners/DOLE logo No background.png` | 2048×706 PNG, alpha: yes | approved (small display) | Owner-supplied 2026-07-25; sponsor confirmed | `app/public/assets/partners/dole.png` (480×321, trimmed) | Source appears AI-enlarged (slightly irregular sunburst). Invisible at the 2.75rem supporting-tier height. Request a brand original before any larger use. |
| Fort Lauderdale Beach BID (attempt) | `partners/BID logo - No background.png` | 2048×706 PNG, alpha: yes | replace | Owner-supplied 2026-07-25 | none — withheld | AI-reconstructed enlargement: halo artifacts, text clipped mid-letter at the right edge ("Distric…", "….com"). Unfit to represent the partner's mark. URL is wired in content; publishes automatically once a clean file lands. |
| Course KMZ (organizer GPS data) | `maps/2025-ly-fort-lauderdale-running-festival.kmz` | KML: 468-pt course line, start/finish, 4 turnarounds (incl. 5K), 10K split, relay exchange, 13 mile markers, 11 water stations | approved (source data) | Organizer file via owner 2026-07-25 | not rendered on site yet | Course line labeled "2024 NOVEMBER FINAL COURSE"; relay exchange "2025". 2026 geometry confirmation pending (DEC-012). Original filename: "2025 LY Fort LAUDERDALE Running Festival.kmz". |
| Course screenshot (legacy) | `maps/course-screenshot-2024.png` | 2048×706 PNG | reference | Organizer-derived via owner 2026-07-25 | none | Fuzzy Google-Earth capture; superseded by the KMZ-derived render below. Original filename: "Map of the race.png". |
| Course map — full render | `maps/course-map-full.png` | 1988×4163 PNG | candidate | Rendered 2026-07-25 from the organizer KMZ (no generative processing); style approved by owner | not wired — course pages not built | CARTO Voyager basemap (attributed) + route, mile markers, water stations, turnarounds, relay exchange, 10K split, legend. Footnote marks "subject to 2026 confirmation". Per-distance variants pending DEC-012 confirmations. |

### Assets required but entirely absent

Nothing in the curated root satisfies these. All are blockers for a production release.

| Need | Required by | Status |
|---|---|---|
| Homepage hero video (10–20 s, 1920×1080+, no baked-in text, no essential audio) | `agents.md` §6.3; `plan.md` Phase 3 | missing — not generated 2026-07-25: no local ffmpeg to guarantee the <8 MB / silent-track spec, so the photo hero ships and `MediaHero` degrades as designed |
| Hero poster image (desktop + mobile crop) | `agents.md` §6.3 | **generated placeholder in place** — real photography still required |
| Story scroller media, 5–8 clips or high-resolution photos | `agents.md` §6.6 | **generated placeholders in place** (5 stills) — real photography still required |
| One image per race distance | `agents.md` §6.7 | **generated placeholders in place** — real photography still required |
| Festival/finish-line photography | `agents.md` §6.8 | **generated placeholder in place** — real photography still required |
| Volunteer/community photography | `plan.md` Phase 3 | **generated placeholder in place** (`race/community`) — real photography still required |
| Course maps per distance | `agents.md` §7 | **organizer KMZ received 2026-07-25**; full-course render produced (see Owner-supplied files). Per-distance variants pending distance-logic + 2026 geometry confirmation (DEC-012). Maps must NOT be AI-generated. |
| Interior hero photography (one per MVP route) | `agents.md` §7 | **generated placeholders staged** in `app/public/assets/heroes/interior-*.avif` — the interior routes do not exist yet, so nothing references them |
| Licensed brand fonts | `agents.md` §4 | missing |
| Reversed (white) event lockup for dark surfaces — see DEC-010 | `agents.md` §6.2 | missing — must NOT be generated (brand asset) |

Until these arrive the application renders clearly-marked placeholders per DEC-008,
now upgraded to photorealistic generated stand-ins per DEC-011.

## Generated interim assets (DEC-011) — added 2026-07-25

All produced with **Higgsfield Soul 2.0** (`soul_2`, 2k quality) via the
Higgsfield MCP server on 2026-07-25; the desktop hero was additionally passed
through the Bytedance 4k upscaler. Base prompts are the ones in
`agents/media-brief.md`, extended per image with anti-text / anti-brand
language ("plain solid-colour athletic wear, completely blank fabric… no
bibs, no numbers, no logos, no signage"). Every file is wrapped in
`GENERATED()` where referenced; `npm run audit` reports all 13 wired
references and `build:production` blocks on them.

Production copies are AVIF + WebP pairs under `app/public/assets/<category>/`.
Curated masters are full-quality PNGs of the same crops under `assets/<category>/`.

| Asset | Master (curated root) | Production copy | Size | Notes / deviations from the brief prompt |
|---|---|---|---|---|
| Hero poster — desktop | `heroes/hero-desktop.png` | `heroes/hero-desktop.avif` (+`.webp`) | 2560×1440, 153 KB | 4k-upscaled. First take rejected for legible bib numbers. |
| Hero poster — mobile | `heroes/hero-mobile.png` | `heroes/hero-mobile.avif` | 1200×1500 | Generated 3:4, cropped 4:5. Take 1 rejected: model baked caption text into the lower third. Two small garment marks blurred out. Cooler/dusker than the desktop take — flag for review. |
| Story — oceanfront-miles | `race/oceanfront-miles.png` | `race/oceanfront-miles.avif` | 1600×1067 | Clean silhouette take, no retouch. |
| Story — las-olas-energy | `race/las-olas-energy.png` | `race/las-olas-energy.avif` | 1600×1067 | Runners recast as foreground motion-blur streaks. Left ~300 px cropped to remove two spectators wearing garbled bibs. Takes 1/3 rejected (Nike mark + legible bib; lanyards everywhere). |
| Story — every-pace | `race/every-pace.png` | `race/every-pace.avif` | 1600×1067 | Recast as a casual training run to kill the bib prior. Two shorts swooshes, one chest swoosh, and cap script blurred out. |
| Story — community | `race/community.png` | `race/community.avif` | 1600×1067 | Volunteers face camera, runners from behind. Two cap emblems blurred. Take 1 rejected (shirt text + bib). |
| Story — finish-line | `race/finish-line.png` | `race/finish-line.avif` | 1600×1067 | Described purely visually (no "race"/"finish" vocabulary) after takes 1–2 produced a sponsor-style banner and a pinned blank bib. Film border cropped. |
| Distance — 13.1 | `race/13-1.png` | `race/13-1.avif` | 1200×900 | Clean. |
| Distance — Relay | `race/relay.png` | `race/relay.avif` | 1200×900 | Recast as friends' mid-run high-five (take 1 had fake bib text, flag, swoosh). Small "AOR03" chest print blurred. |
| Distance — 10K | `race/10k.png` | `race/10k.avif` | 1200×900 | Elevated palm-bend view. Two garbled painted road stencils blurred out; distant runners carry tiny illegible bibs (accepted — no legible numbers). |
| Distance — 5K | `race/5k.png` | `race/5k.avif` | 1200×900 | Parent + child, clean. |
| Festival | `festival/festival.png` | `festival/festival.avif` | 1200×900 | Medals + white tents on grass near beach. Two swooshes blurred; medal ribbons carry faint illegible weave text (accepted at display size). |
| Interior hero — /race | `heroes/interior-race.png` | `heroes/interior-race.avif` | 2048×878 | Pack wears bibs; all illegible smudges (rule bans *legible* numbers). Below the 2400 px brief minimum — acceptable for placeholder, regenerate larger for launch. |
| Interior hero — /race/schedule | `heroes/interior-schedule.png` | `heroes/interior-schedule.avif` | 2048×878 | Pre-dawn silhouettes (take 1 had fully legible bib numbers + brand text). |
| Interior hero — /race/13-1 | `heroes/interior-13-1.png` | `heroes/interior-13-1.avif` | 2048×878 | Empty coastal straight, clean. |
| Interior hero — /race/relay | `heroes/interior-relay.png` | `heroes/interior-relay.avif` | 2048×878 | adidas mark on shorts blurred. |
| Interior hero — /race/10k | `heroes/interior-10k.png` | `heroes/interior-10k.avif` | 2048×878 | Empty palm road to ocean, clean. |
| Interior hero — /race/5k | `heroes/interior-5k.png` | `heroes/interior-5k.avif` | 1978×848 | Left edge cropped (film-rebate lettering); crop biased upward so foreground bibs fall outside the band; remaining bib faces garbled/illegible. Weakest compliance of the set — first candidate for a regen. |
| Interior hero — /registration | `heroes/interior-registration.png` | `heroes/interior-registration.avif` | 2048×878 | Two tiny chest prints blurred. Water reads lake-calm rather than surf — acceptable. |
| Interior hero — /results | `heroes/interior-results.png` | `heroes/interior-results.avif` | 2048×878 | Blank medals on solid palette-coloured ribbons (takes 1–2 had ribbon/banner pseudo-text). |
| Interior hero — /faqs | `heroes/interior-faqs.png` | `heroes/interior-faqs.avif` | 2048×878 | Runners from behind (take 1 had large paper bibs). Small hem tag blurred. |

Raw un-retouched generations and the retouch/conversion scripts are in the
session scratchpad only; the curated PNGs above are the masters.

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

