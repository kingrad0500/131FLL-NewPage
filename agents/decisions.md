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

- Date: 2026-07-24
- Status: TBD
- Owner: Product owner
- Decision or question: Confirm event year, date, location, active distances, start times, and policy sources.
- Options considered: Not applicable.
- Current choice: TBD
- Evidence/source: Current event operations information.
- Consequences: Controls content, countdown, ticker, navigation, registration, and SEO.
- Blocks: Production content.

### DEC-004 — Archived asset permission

- Date: 2026-07-24
- Status: TBD
- Owner: Product owner
- Decision or question: Which archived event and sponsor assets are approved for reuse?
- Options considered: Approve individually / replace with current originals.
- Current choice: TBD
- Evidence/source: `agents/asset-manifest.md`
- Consequences: Controls production media and sponsor visibility.
- Blocks: Production publication of unverified assets.

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

- Date: 2026-07-24
- Status: TBD
- Owner: Product owner
- Decision or question: Is Baptist Health the *presenting* sponsor or the *official medical partner*? The two available sources disagree.
- Options considered: Presenting / Official medical partner / Both
- Current choice: TBD
- Evidence/source: The event lockup (`assets/brand/fort-lauderdale-13-1-logo.png`) reads "The 19th Annual Liquid Youth 13.1 Fort Lauderdale Running Festival — **Presented by** Baptist Health". `agents.md` §6.10 and `frontend.md` §6.18 instead tier Liquid Youth as title sponsor with Baptist Health as official medical provider.
- Consequences: Determines the tier structure, ordering, and relative sizing of `SponsorShowcase` / `PartnerTier`. Publishing the wrong tier misrepresents a sponsor relationship.
- Blocks: Final sponsor showcase; production release.

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

- Date: 2026-07-24
- Status: TBD
- Owner: Product owner
- Decision or question: Confirm the specific facts below, which the build currently treats as `[TBD]`.
- Current choice: TBD
- Evidence/source: Observed in reference material but unverified.
- Open items:
  - Race date. The legacy homepage advertises "November 8th, 2026"; `frontend.md` §11 notes the reference site mixes 2023–2026 dates and a 2017 copyright, so this needs confirmation rather than inheritance.
  - Edition number. The lockup says "19th Annual" — confirm whether the next running is the 19th or 20th.
  - Active distances. The shield reads "10K, 5K, HALF, RELAY"; confirm all four are running.
  - Start times, start locations, and per-distance pricing.
  - Registration provider and URL.
  - Results and photo provider URLs.
  - Contact and volunteer email addresses; social URLs.
- Consequences: Controls the countdown, ticker, distance rail, schedule, registration path, and SEO.
- Blocks: Production content.

