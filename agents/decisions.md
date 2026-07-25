# Fort Lauderdale 13.1 — Decision Log

Use this file for product, design, content, and engineering decisions. Do not use it for routine implementation notes.

## Status values

- `TBD`: unresolved and requires an owner.
- `approved`: current decision.
- `rejected`: considered but not selected.
- `superseded`: replaced by a later decision.

## Decision template

### DEC-000 — Short title

- Date: YYYY-MM-DD
- Status: TBD
- Owner: Product owner / Design / Engineering
- Decision or question:
- Options considered:
- Current choice:
- Evidence/source:
- Consequences:
- Blocks:

## Current decisions

### DEC-001 — Release scope

- Date: 2026-07-24
- Status: approved
- Owner: Product owner
- Decision or question: Will the first release be the MVP route set or the full approved route set?
- Options considered: MVP / Full
- Current choice: **MVP.** First release covers Home, Race overview, active distance pages (13.1, Relay, 10K, 5K), Schedule, Registration, Results & Photos, and FAQs/Contact.
- Evidence/source: `plan.md`, Phase 1; product-owner direction 2026-07-24.
- Consequences: Resources, Partners, Charities, Groups, Sponsors, Volunteer, Training, Travel, Parking, and Spectator Info are deferred to a second release. Navigation must not link to unbuilt destinations (`plan.md` line 339).
- Blocks: Nothing. Unblocks route scaffolding.

### DEC-002 — Application stack

- Date: 2026-07-24
- Status: approved
- Owner: Engineering
- Decision or question: Which component-based TypeScript framework and deployment target will be used?
- Options considered: Astro + TypeScript / Next.js App Router / SvelteKit
- Current choice: **Astro + TypeScript.**
- Evidence/source: `plan.md`, Phase 0 stack criteria; product-owner direction 2026-07-24.
- Rationale: The MVP is ~8 largely static content routes needing strong SEO. Astro ships zero baseline JavaScript and hydrates only the interactive islands (`BrandLoader`, `FullScreenMenu`, `RaceCountdown`, `DistanceRail`, `StoryScroller`), which makes the sub-180 KB initial-JS budget in `agents.md` §14 achievable by default rather than by optimization. `astro:assets` provides the responsive AVIF/WebP `srcset` pipeline required by §14 without additional tooling.
- Consequences: Content lives in typed content collections. Interactive components use `client:*` directives scoped to need. Deployment target is a static adapter unless a future integration requires SSR.
- Blocks: Nothing. Unblocks application scaffolding.

### DEC-003 — Canonical event facts

- Date: 2026-07-24 · resolved 2026-07-25
- Status: approved
- Owner: Product owner
- Decision or question: Confirm event year, date, location, active distances, start times, and policy sources.
- Options considered: Not applicable.
- Current choice: **Confirmed by the product owner 2026-07-25.** November 8, 2026, Fort Lauderdale FL. 20th edition. Distances 13.1, Relay, 10K, 5K all active. First gun 6:15 AM ET (13.1 & Relay); 10K and 5K at 7:00 AM; festival opens 7:00 AM. Relay teammate 2 must be in the exchange area by 6:45 AM.
- Evidence/source: Product-owner checklist responses, 2026-07-25 (this conversation).
- Consequences: Countdown, ticker, distance rail, and SEO now run on confirmed values; the `UNCONFIRMED` markers were removed from `event.ts` and `distances.ts`.
- Blocks: Nothing.

### DEC-004 — Archived asset permission

- Date: 2026-07-24 · resolved 2026-07-25
- Status: approved
- Owner: Product owner
- Decision or question: Which archived event and sponsor assets are approved for reuse?
- Options considered: Approve individually / replace with current originals.
- Current choice: **Approved individually 2026-07-25.** Liquid Youth and Visit Lauderdale archived files remain in use. Owner supplied new transparent Baptist Health and Dole files (approved; Dole small-display only). The supplied Beach BID file is an AI-reconstructed enlargement and stays withheld until the BID provides an original. All five sponsor URLs confirmed and wired.
- Evidence/source: Product-owner responses and files, 2026-07-25; `agents/asset-manifest.md` "Owner-supplied files" section.
- Consequences: Baptist Health and Dole now render in the showcase; the withheld notice lists only the Beach BID.
- Blocks: Beach BID visibility only.

### DEC-005 — Hero media

- Date: 2026-07-24
- Status: approved (interim approach); final media still TBD
- Owner: Product owner / Design
- Decision or question: Will the homepage launch with approved video or the cinematic image fallback?
- Options considered: Video / Image sequence / Static image
- Current choice: **Build now against clearly-marked placeholder media.** The `MediaHero` component and its poster/video/focal-point contract are implemented in full; the media itself resolves from content data so real footage is a data swap with no component change.
- Evidence/source: `plan.md`, Phase 3; product-owner direction 2026-07-24.
- Consequences: Placeholders render a visible `[PLACEHOLDER]` badge in development and preview, and fail the production build check (see DEC-008). Final hero art direction, poster weight, and motion tuning remain open until real media arrives.
- Blocks: Production release only.

### DEC-006 — Sponsor tier conflict: Baptist Health

- Date: 2026-07-24 · resolved 2026-07-25
- Status: approved
- Owner: Product owner
- Decision or question: Is Baptist Health the *presenting* sponsor or the *official medical partner*? The two available sources disagree.
- Options considered: Presenting / Official medical partner / Both
- Current choice: **Both, with Baptist Health more prominent** (product owner, 2026-07-25). Tier order: "Presented by" — Baptist Health (first, largest); "Title Partner" — Liquid Youth; then Supporting Partners. The former "medical" tier id was replaced by "title" in `types.ts`/`sponsors.ts`.
- Evidence/source: The event lockup reads "…Liquid Youth 13.1 … **Presented by** Baptist Health"; product-owner direction 2026-07-25: "Both. But put more relevance on Baptist Health."
- Consequences: `SponsorShowcase` tier structure is final; Baptist Health leads the showcase.
- Blocks: Nothing.
- Challenged and reaffirmed 2026-07-25: the live site at `131fortlauderdale.com` names **Broward Health** as "Official Medical Provider" on both its homepage and sponsors page, and does not mention Baptist Health anywhere; the 2025 packet-pickup expo was Baptist-Health-branded and the Facebook slug still reads Cleveland Clinic, so the partnership has changed hands more than once. That evidence was put to the product owner, who directed: *"Baptist Health is the official and most important sponsor. What other pages said, do not follow that."* The live site is treated as out of date and the tiering above stands unchanged. Recorded here because publishing the wrong medical partner would misrepresent a commercial relationship — if this is ever revisited, start from this note.

### DEC-007 — "Running Festival" sub-brand

- Date: 2026-07-24
- Status: TBD
- Owner: Product owner / Design
- Decision or question: Is the red "Running Festival" mark a current sub-brand that must appear, and how should it coexist with the navy/yellow system?
- Options considered: Retain as-is / restyle within the palette / retire from the new site
- Current choice: TBD
- Evidence/source: Visible in `assets/media/legacy-homepage-hero.png` as a bright red confetti wordmark. It is not accounted for anywhere in the `agents.md` §4 palette.
- Consequences: Its red conflicts directly with the coral/yellow accents and would violate `agents.md` §4 ("Do not use every accent color in the same section"). Affects the festival section (§6.8) and the footer lockup.
- Blocks: Festival section art direction.

### DEC-008 — Placeholder content policy

- Date: 2026-07-24
- Status: approved
- Owner: Engineering
- Decision or question: How are unresolved `[TBD]` values and placeholder media prevented from reaching production?
- Options considered: Manual review / automated build gate
- Current choice: **Automated build gate.** A content audit runs against structured content and fails the production build on any `[TBD]` token or placeholder-flagged asset. Development and preview builds pass but render a visible placeholder badge.
- Evidence/source: `plan.md`, Phase 6; `agents.md` §1.1.
- Consequences: Production cannot ship unresolved content by accident. Preview environments remain honest about what is unfinished.
- Blocks: Nothing.

### DEC-011 — AI-generated media as interim assets

- Date: 2026-07-24
- Status: approved (interim only)
- Owner: Product owner
- Decision or question: May AI-generated imagery stand in for the missing photography and video?
- Options considered: Photoreal placeholder-gated / atmospheric-abstract only / photoreal intended for launch
- Current choice: **Photorealistic, registered as generated, release-blocking.** Generated assets render normally so the design can be evaluated with realistic media, but each is wrapped in `GENERATED()` in content data and reported by `npm run audit`. `npm run build:production` fails while any remain.
- Evidence/source: Product-owner direction 2026-07-24; scope constrained by `agents.md` §15.
- Consequences:
  - Generated media is **not** approved for launch. A generated image of a real race is not documentation of that race.
  - Course maps, sponsor logos, and the event lockup are excluded from generation entirely — see the "not generatable" table in `agents/media-brief.md`.
  - Prompts must avoid baked-in text, invented sponsor branding, and recognisable route claims.
  - Every generated asset is recorded in the manifest with tool, date, and prompt.
- Blocks: Production release, until real photography replaces every generated asset.
- Related: [`agents/media-brief.md`](media-brief.md)

### DEC-010 — Reversed event lockup required

- Date: 2026-07-24
- Status: TBD
- Owner: Product owner / Design
- Decision or question: A white/reversed version of the event lockup is needed for dark surfaces.
- Options considered: Supply a reversed lockup / keep using the 13.1 mark on dark surfaces
- Current choice: Interim — dark surfaces use the 13.1 mark.
- Evidence/source: Verified during implementation. The supplied lockup is full-colour (navy shield, yellow sun, navy wordmark, Baptist Health endorsement). Applying `brightness(0) invert(1)` to place it on navy collapses the shield, sun, and fine endorsement type into an illegible white silhouette.
- Consequences: The overlay header and footer currently show the 13.1 mark rather than the full lockup, so "Fort Lauderdale" and the Baptist Health endorsement are not visible in those positions. The accessible name still identifies the event.
- Blocks: Full brand presentation in the header and footer.

### DEC-009 — Event facts pending confirmation

- Date: 2026-07-24 · resolved 2026-07-25 (one item open)
- Status: approved
- Owner: Product owner
- Decision or question: Confirm the specific facts below, which the build previously treated as `[TBD]`.
- Current choice: **Confirmed by the product owner 2026-07-25** and wired into content:
  - Race date November 8, 2026; edition **20th Annual** (the lockup artwork still reads 19th and stays in use — updated art requested from the designer alongside DEC-010).
  - All four distances active. 13.1 & Relay 6:15 AM; 10K & 5K 7:00 AM; festival opens 7:00 AM; relay teammate 2 at the exchange by 6:45 AM.
  - Pricing incl. sign-up fees: 13.1 $80+$7.00 · Relay $110/team+$9.03 · 10K $55+$5.31 · 5K $40+$4.30.
  - Registration `https://runsignup.com/fortlauderdale131`; results `…/Race/Results/Overview/83064`; photos `…/Race/FortLauderdale131/Page-2`.
  - Contact `info@131FortLauderdale.com` (corrected by the product owner 2026-07-25, replacing `Josh@splitsecondtiming.com`); volunteers `Lorraine@exclusivesports.com`; Facebook page (slug predates current sponsor naming — confirmed current); Instagram `wildsideonline`.
- Open items: **Festival programming, vendors, and closing hours** — the one remaining `[TBD]` on the site.
- Evidence/source: Product-owner checklist responses, 2026-07-25.
- Consequences: Countdown, ticker, distance rail, registration path, contact, and social links are live data. The audit's unresolved count drops from 25 to 1.
- Blocks: Production content only via the single open item and DEC-011 media.

### DEC-014 — Interior page system (Phase 8)

- Date: 2026-07-25
- Status: approved
- Owner: Product owner / Engineering
- Decision or question: What layout system carries the nine MVP interior routes?
- Options considered: One-off layouts per route / a shared page system approved on a representative page first.
- Current choice: **Shared system, approved on `/race/13-1` first** (`plan.md` Phase 8). `InteriorHero` opens every route at ~52svh; `RaceDetail` renders any distance from a `RacePage` data object, so a new distance is a data file rather than a layout. `FaqAccordion` uses native `<details>`/`<summary>` with an animated disclosure and zero JavaScript; `ResultsArchive` leads with the newest year and collapses older ones.
- Evidence/source: Product-owner approvals 2026-07-25 — legacy copy confirmed real and adaptable, `/registration` built as an informational page with entry still on RunSignup, FAQ as an accordion, results routed out to Athlinks.
- Consequences: All nine routes exist and every menu destination resolves. Unconfirmed race logistics render as visible `[TBD]` badges (21 at build time) rather than being invented — the audit lists each one. `/registration` was added to the Race navigation group so the page is reachable.
- Fixed during the build: interior pages had no `data-header-sentinel`, so the overlay header never switched to its solid state and the white MENU control became invisible against page content once scrolled. `InteriorHero` now emits the sentinel.
- Blocks: Nothing. Production release still blocked by the open `[TBD]` items and DEC-011 media.

### DEC-012 — Course map source and rendering

- Date: 2026-07-25
- Status: approved (two confirmations pending)
- Owner: Product owner / Engineering
- Decision or question: How are course maps produced without violating the ban on fabricated route data?
- Options considered: Keep legacy screenshot / AI-enhance the screenshot / render from the organizer's GPS data.
- Current choice: **Render from the organizer's KMZ only; no generative processing of maps, ever** (reaffirms DEC-011's exclusion — AI enhancement was considered and rejected because upscalers invent detail on factual labels). The owner approved the styled full-course render on 2026-07-25 ("that one looks amazing"): CARTO Voyager basemap with attribution, palette-styled route and markers, legend, and a "subject to 2026 confirmation" footnote. Saved as `assets/maps/course-map-full.png`; render script retained in the session scratchpad.
- Evidence/source: `assets/maps/2025-ly-fort-lauderdale-running-festival.kmz` (organizer GPS data via owner); owner approvals 2026-07-25.
- Consequences: Course pages get honest, crisp maps. The legacy screenshot (`maps/course-screenshot-2024.png`) is reference only.
- Open items: (1) organizer confirmation that the 2024 course line + 2025 relay exchange hold for 2026; (2) owner confirmation of per-distance derivation logic (10K = shared miles 1–6 + marked split; 5K = out-and-back at the marked turnaround; Relay = full course with exchange) before per-distance maps are produced.
- Blocks: Per-distance maps; wiring maps into the site (course pages not yet built).

### DEC-013 — Component inspiration policy and the GalleryHero

- Date: 2026-07-25
- Status: approved
- Owner: Product owner / Engineering
- Decision or question: May third-party UI galleries (21st.dev et al.) drive component design, and how is the homepage hero evolving?
- Options considered: Adopt React + Tailwind + shadcn stack / one-off React island / recreate patterns natively with project tools.
- Current choice: **Recreate natively.** Galleries are treated as pattern libraries — the idea is borrowed, the implementation is ours (Astro, design tokens, scoped CSS, minimal or zero JS). First application: `GalleryHero.astro`, a native recreation of the 21st.dev "hero-gallery-scroll-animation" bento pattern per `agents/hero-gallery-spec.md`. Owner-approved parameters: the five approved image picks (all `GENERATED()`-gated), 220svh scroll length (180svh mobile), and a static composition for reduced motion.
- Amendment 2026-07-25: the no-support fallback was originally the static composition (zero JavaScript). Firefox 153 was then confirmed to support **none** of the five properties the native path needs, so the owner asked for parity across browsers. A 1.1 KB inline script now drives the identical reveal where scroll-driven animations are unavailable; it exits immediately when they are, so Chromium remains script-free and reduced-motion users keep the static composition. Verified in real Chrome and Firefox, including the reduced-motion path.
- Evidence/source: Product-owner direction 2026-07-25; spec approvals 1–3 the same day.
- Consequences: The homepage swaps `MediaHero` → `GalleryHero`; `MediaHero` remains for interior pages. The audit's generated count rises 13 → 17 (four staged interior-hero images now referenced). Deeply stateful widgets (comboboxes, tables, pickers) are out of scope for native recreation and require a fresh decision if ever wanted.
- Second application 2026-07-25 — **StoryScroller sticky sequence**, adapted from the 21st.dev "scroll-01" pattern. This is the Phase 9 enhancement the component was always scaffolded for (`plan.md` step 9): on desktop a sticky media panel holds one image while the five steps scroll past, cross-fading as each reaches mid-screen. Owner-approved parameters: inactive steps dim to 45% rather than fading out, media panel left with text right, roughly three screens of scroll (measured 307svh), and only the active image exposed to assistive technology. Driven by **IntersectionObserver**, not scroll-driven CSS — "which step is centred" is a discrete question and IO is supported everywhere, so unlike the hero this needs no second code path. The plain alternating stack remains the baseline for mobile, reduced motion, and no-JavaScript, and a step still awaiting media disables the panel rather than showing gaps. Verified in Chrome and Firefox at desktop, plus mobile and reduced-motion.
- Blocks: Nothing.

