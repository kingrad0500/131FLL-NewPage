# Project status

Where the build stands, what is confirmed, and what is still outstanding.
Written to be the first file someone reads when picking this project back up.

Last updated: **2026-07-25**. Release scope: **MVP** (DEC-001).

## Phase progress

Phases are from `plan.md`.

| Phase | State | Notes |
|---|---|---|
| 0 — Project operating system | Complete | Astro + TypeScript (DEC-002); docs in `agents/`; decision log and asset manifest live |
| 1 — Confirm the product | Complete | Event facts confirmed by the product owner 2026-07-25 (DEC-003, DEC-009) |
| 2 — Audit and organize assets | Complete | Manifest records every file, its permission, and its production copy |
| 3 — Cinematic media | Complete *as placeholder* | 21 generated still files used by 27 audited registrations (DEC-011); real photography still required |
| 4 — Information architecture | Complete | Content is typed data in `app/src/content/`; `content-tree.md` holds the route hierarchy |
| 5 — Design system | Complete | Tokens in `styles/tokens.css`; licensed fonts still outstanding |
| 6 — Technical foundation | Complete | Shell, components, content audit, build gate |
| 7 — Homepage | Complete | All sections built and responsive |
| 8 — Interior pages | Complete | Nine MVP routes; every menu destination resolves (DEC-014) |
| 9 — Motion polish | Partial | Gallery hero and sticky story sequence done; distance-rail and sponsor motion outstanding |
| 10 — QA | Partial | Automated production-readiness suite passes; manual cross-browser, assistive-technology, and throttled performance QA remain |
| 11 — Launch | Not started | No deployment target configured |

## What is live

### Routes

| Route | Contents |
|---|---|
| `/` | Loader, ticker, overlay header, gallery hero, countdown, editorial, sticky story sequence, distance rail, festival, conversion band, sponsors, footer |
| `/race` | Hub: four distance cards with times and pricing, plus a schedule promo |
| `/race/schedule` | Race-day timeline, both packet pickup windows, packet contents, bib rules, chip timing |
| `/race/13-1` | Full distance page — the approved template |
| `/race/relay` | Same system; carries the most open facts |
| `/race/10k`, `/race/5k` | Same system |
| `/registration` | Prices, eligibility, refund/transfer/change policies. Entry itself goes to RunSignup |
| `/results` | 2025 as cards, 2021–2024 collapsed, photos link, clock-vs-chip |
| `/faqs` | Four accordion groups (~27 questions) and the contact block |

Deferred past the MVP (defined in `navigation.ts`, filtered out of every rendered
surface so nothing links to an empty page): Resources, Volunteer, Groups,
Charities, Sponsors.

### Components

`BrandLoader` · `EventTicker` · `SiteHeader` · `FullScreenMenu` · `GalleryHero`
· `RaceCountdown` · `EditorialIntro` · `StoryScroller` · `DistanceRail` ·
`FestivalHighlight` · `ConversionBand` · `SponsorShowcase` · `ConversionFooter`
· `FloatingContactButton` · `InteriorHero` · `RaceDetail` · `FaqAccordion` ·
`ResultsArchive` · `PlaceholderMedia` · `Provisional` · `CTAGroup` ·
`BrandLockup`

**`MediaHero` is currently unused.** The homepage moved to `GalleryHero` and
interior routes use `InteriorHero`, so nothing imports it. It is kept rather
than deleted because it is the only hero that handles the video → poster →
placeholder degradation chain, which is exactly what will be needed when real
footage arrives (DEC-005). If the project decides against a video hero, this is
safe to delete.

Two are recreations of third-party gallery patterns, rebuilt with project tokens
rather than imported (DEC-013): `GalleryHero` and the sticky mode of
`StoryScroller`.

## Confirmed content

All confirmed by the product owner on **2026-07-25** unless noted.

- **Event** — Sunday 8 November 2026, Fort Lauderdale. 20th edition (the supplied
  lockup artwork still reads "19th Annual" and stays in use by owner direction).
- **Distances and starts** — 13.1 and Relay 6:15 AM; 10K and 5K 7:00 AM; festival
  opens 7:00 AM; relay runner two in the exchange area by 6:45 AM.
- **Pricing** — 13.1 $80 + $7.00 · Relay $110/team + $9.03 · 10K $55 + $5.31 ·
  5K $40 + $4.30.
- **Links** — registration, results, and photos on RunSignup; results archive on
  Athlinks; Facebook and Instagram confirmed as current.
- **Contacts** — `info@131FortLauderdale.com` (corrected from an earlier address)
  and `Lorraine@exclusivesports.com` for volunteering.
- **Course** — start and finish at Las Olas & A1A, Las Olas Oceanside Park;
  USATF certified; 3 hours 30 minutes; **11** water stations; walkers finish by
  10:00 AM.
- **Policies** — no refunds (owner's exact wording is in `registration.astro`),
  no person-to-person transfers, headphones allowed with caution, no baby
  joggers, skateboards, bicycles, or animals.
- **Timing** — Split Second Timing. Every ChronoTrack reference from the old
  copy was removed.
- **Packet pickup** — Saturday 7 November 2026, Downtown Events Center.
- **Sponsors** — Liquid Youth and Baptist Health share one top row labelled
  "Title Sponsor & Official Medical Provider", then supporting. Note the live
  site names Broward Health instead; the owner directed that Baptist Health
  stands. See the challenge note under DEC-006.

## Outstanding

### 1. Race logistics — 22 unresolved facts

Listed by `npm run audit`; the hardened gate now includes the previously missed
2026 deferral policy. Summary: award categories and ceremony time, festival
programming and closing time, participant caps for the
13.1 and 5K, the wheelchair policy, six relay facts (leg distances, team rules,
minimum age, what each teammate receives, exchange transport, substitutions),
time limits and minimum ages for the 10K and 5K, what each distance receives,
the registration close date, and the distance-change mechanism.

Run `cd app && npm run audit` for the live list.

### 2. Media

Twenty-one generated still files are in place of real photography (DEC-011),
producing 27 audited registrations because some files fill more than one visual
role. Every use is wrapped in `GENERATED()`. The homepage hero video was never
attempted. Shirt and medal artwork are two additional hard media placeholders.

### 3. Brand and partner assets

- Reversed/white event lockup for dark surfaces (DEC-010).
- Updated lockup artwork reading "20th Annual".
- A clean Fort Lauderdale Beach BID logo — the supplied file is an AI
  reconstruction with clipped text and is withheld from rendering.
- 2026 race shirt and finisher medal artwork.
- Licensed brand fonts.

### 4. Course confirmations (DEC-012)

- Organizer confirmation that the 2024 course line and 2025 relay exchange hold
  for 2026.
- Sign-off on per-distance map derivation before those variants are produced.

## Verification performed

The 2026-07-25 production-readiness pass added a repeatable `npm run qa` suite.
It verifies diagnostics, marker-placement policy, every MVP build route, one
`h1` per route, local image existence, workstation-path absence, and the
compressed JavaScript budget. The suite passes. `audit:release` intentionally
fails on the documented blockers. See `production-readiness.md`.

Not a formal Phase 10 pass, but the following was checked with a real headless
browser rather than assumed:

- **Routes** — all ten return 200, exactly one `h1` each, no broken images, no
  horizontal overflow at 390 px.
- **Navigation** — every menu link followed and confirmed to resolve.
- **Gallery hero** — Chrome, Firefox, and reduced-motion at 1440/768/390 across
  three scroll positions; title and both CTAs visible at scroll 0 everywhere.
- **Story sequence** — Chrome and Firefox desktop, mobile, and reduced motion;
  active step tracking, dimming, and single-image exposure to assistive tech.
- **Menu** — open, close by pointer, scroll-lock release, at desktop and phone
  widths.
- **Build** — `astro check` clean; ten pages building; audit reporting.

## Bugs found and fixed during the build

Recorded because each was invisible in the code and only appeared when the real
page was driven in a browser.

1. **Menu could not be closed by pointer.** The overlay painted above the header,
   burying the Close control. Fixed by stacking the header above the menu.
2. **MENU control invisible on interior pages.** Interior pages emitted no
   `data-header-sentinel`, so the overlay header never went solid and white text
   sat on white content. `InteriorHero` now emits it.
3. **Hero animation silently dead.** The CSS minifier folded `animation-timeline`
   into the `animation` shorthand, which Chrome rejects outright. The timeline
   binding now lives in its own rule that cannot be folded.
4. **Hero copy pre-faded on first paint.** The global `scroll-padding-block-start`
   also insets view timelines. Fixed with `view-timeline-inset: 0`.
5. **Course map illegible.** Capping its height to the viewport squeezed it to
   ~350 px wide. It now renders at 640 px with a full-size link.
6. **`/registration` was an orphan** — built but unreachable. Added to the Race
   navigation group.

## Where things are documented

| Document | Holds |
|---|---|
| `AGENTS.md` (root) | The operating contract and quality standard |
| `plan.md` | Phased execution order and approval gates |
| `decisions.md` | Every product, design, and engineering decision (DEC-001…DEC-014) |
| `asset-manifest.md` | Every asset: source, status, permission, production copy, alt text |
| `content-tree.md` | Route hierarchy and content-migration branches |
| `interior-content-brief.md` | Interior page content, its sources, and the open questions |
| `media-brief.md` | The generated-media run: prompts, tool, and lessons |
| `hero-gallery-spec.md` | The gallery hero: spec, as-built deviations, browser findings |
| `frontend.md` | Observed structure of the legacy site |
| `idea.md` | Interaction inspiration |
| `status.md` | This file |
