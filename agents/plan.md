# Fort Lauderdale 13.1 — Production Plan

## Goal

Build the modern Fort Lauderdale 13.1 website defined by `agents.md`, using:

- `frontend.md` for content and original-site structure.
- `idea.md` for cinematic interaction inspiration.
- The saved Fort Lauderdale HTML/assets as visual and asset references.

The work should proceed in the phases below. Do not begin a later phase while its required inputs are missing.

## Phase 0 — Establish the project operating system

### Work

- Select the application stack before scaffolding.
- Confirm where the implementation repository will live.
- Place the authoritative instructions at the repository root as `AGENTS.md`.
- Keep `frontend.md`, `idea.md`, `plan.md`, and detailed research inside an `agents/` documentation folder.
- Create:
  - `agents/decisions.md` for approved and unresolved decisions.
  - `agents/asset-manifest.md` for asset status, rights, alt text, and usage.
  - A short project `README.md` for setup, scripts, and environment requirements.
- Define preview and production deployment responsibilities.

### Recommended stack decision criteria

Choose the simplest stack that supports:

- Component-based TypeScript development.
- Static or hybrid rendering for strong SEO.
- Responsive image optimization.
- Local video/poster assets.
- Route-level content.
- Accessible client-side motion.
- Automated component and end-to-end testing.
- Preview deployments.

Do not choose a framework because the Shamrock or archived site used it. Record the selected stack and rationale in `agents/decisions.md`.

### Deliverable

- Repository location.
- Approved stack.
- Root `AGENTS.md`.
- Decision log.
- Asset manifest.
- Working local setup instructions.

### Approval gate

No application scaffolding begins until the stack and repository location are recorded.

## Phase 1 — Confirm the product

### Work

- Confirm the current event year, date, location, and race distances.
- Confirm the final route list.
- Decide whether the first release includes every legacy page or only priority pages.
- Confirm registration, results, photos, maps, and contact providers.
- Confirm sponsor tiers and current partners.
- Choose the release scope:
  - `MVP`: homepage plus the critical registration/race-information path.
  - `Full`: all approved legacy content families.

### You provide

- Current event details.
- Registration link.
- Results/photos links.
- Current race schedule.
- Approved contact emails and social links.
- Current sponsor list.

### Deliverable

- Approved route map.
- Content checklist.
- List of integrations and external links.
- Explicit MVP or full-release route list.

### Approval gate

No production copy or integration work starts until event facts are confirmed.

## Phase 2 — Audit and organize assets

### Work

- Inventory the saved Fort Lauderdale asset folder.
- Separate reusable brand assets from outdated or broken files.
- Rename approved files with stable descriptive names.
- Record dimensions, usage, focal point, and alt text.
- Convert suitable photography to AVIF/WebP.
- Prepare desktop and mobile image crops.

### Authoritative project asset root

All agents must use this directory as the source for approved project assets:

`/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/`

Do not import production files directly from the archived webpage folder.

The absolute path above is a workstation handoff path, not an application runtime path. Application code must use project-relative asset URLs after approved files are copied into the repository.

#### Brand assets

Root:

`/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/brand/`

Files:

- `fort-lauderdale-13-1-loader.png`
  - Full path: `/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/brand/fort-lauderdale-13-1-loader.png`
  - Use for the yellow loading-screen sequence.
- `fort-lauderdale-13-1-logo.png`
  - Full path: `/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/brand/fort-lauderdale-13-1-logo.png`
  - Use for the header, full-screen menu, and footer until a production SVG is supplied.

#### Media assets

Root:

`/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/media/`

Files:

- `legacy-homepage-hero.png`
  - Full path: `/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/media/legacy-homepage-hero.png`
  - Use as a visual/content reference or temporary fallback—not as the final cinematic hero unless explicitly approved.

#### Partner assets

Root:

`/Users/radstudios/Documents/Freelance/Josh Stern/FLL 13.1 Webpage/assets/partners/`

Files:

- `liquid-youth.png`
- `baptist-health.jpg`
- `visit-lauderdale.png`
- `fort-lauderdale-beach-bid.jpg`
- `dole.png`

Agents should resolve these files from the partner root above. Before production release, confirm that each organization remains a current partner and that the logo is approved for use.

#### Future asset folders

Add new approved assets under the same project root:

- `assets/heroes/`
- `assets/race/`
- `assets/festival/`
- `assets/volunteers/`
- `assets/maps/`
- `assets/icons/`
- `assets/video/`
- `assets/fonts/`

When the implementation repository is created, copy approved files from this authoritative asset root into the application’s public/static asset system. Preserve this directory as the curated source library.

Record every copied file in `agents/asset-manifest.md` with:

- Source path.
- Project-relative destination.
- Asset owner/source.
- Permission status.
- Current/legacy status.
- Intended pages/components.
- Alternative text.
- Optimization performed.

### Assets already found

- `131preloader`: 400×400.
- Header/event logo: 322×132.
- Large homepage artwork: up to 1920×897.
- Liquid Youth logo.
- Visit Lauderdale logo.
- Baptist Health logo at several resolutions.
- BID and other sponsor imagery.

### Archived image reference table

Source folder:

`/Users/radstudios/Documents/Archives/Documents/Home - Fort Lauderdale 13.1_files/`

This archive path is legacy reference only. Agents must prefer the authoritative project asset root documented above.

| Archived file | Dimensions | Proposed use | Status |
|---|---:|---|---|
| `131preloader_P6ob.png` | 400×400 | Yellow loading screen and `13.1` brand reveal | Strong candidate; verify transparency and current mark |
| `header-logo_P6ob.png` | 322×132 | Header, menu, and footer event lockup | Reusable reference; request SVG for production |
| `unnamed_P6ob.png` | 1920×897 | Original homepage promotional artwork/reference | Usable reference; not ideal as the new cinematic hero |
| `unnamed-1536x718_P6ob.png` | 1536×718 | Responsive version of homepage artwork | Use only when this exact composite is required |
| `unnamed-1024x478_P6ob.png` | 1024×478 | Tablet-sized homepage artwork | Legacy responsive derivative |
| `unnamed-768x359_P6ob.png` | 768×359 | Small/tablet homepage artwork | Legacy responsive derivative |
| `unnamed-300x140_P6ob.png` | 300×140 | Thumbnail/small derivative | Avoid for large rendering |
| `liquid-youth-logo-dark-2_P6ob.png` | 648×231 | Presenting/title partner section | Verify current sponsorship and obtain SVG if possible |
| `vl_rgb_primary_fullcolor_P6ob.png` | 6601×2101 | Visit Lauderdale sponsor/tourism partner | High-resolution source; optimize before use |
| `vl_rgb_primary_fullcolor-1024x326_P6ob.png` | 1024×326 | Responsive Visit Lauderdale logo | Existing derivative |
| `vl_rgb_primary_fullcolor-768x244_P6ob.png` | 768×244 | Responsive Visit Lauderdale logo | Existing derivative |
| `vl_rgb_primary_fullcolor-300x95_P6ob.png` | 300×95 | Small Visit Lauderdale logo | Existing derivative |
| `bh-full-color-stacked-logo-2048x706_P6ob.jpg` | 2048×706 | Baptist Health medical-partner section | Strong raster source; request transparent/vector version |
| `bh-full-color-stacked-logo-1536x529_P6ob.jpg` | 1536×529 | Responsive Baptist Health logo | Existing derivative |
| `bh-full-color-stacked-logo-768x265_P6ob.jpg` | 768×265 | Responsive Baptist Health logo | Existing derivative |
| `bh-full-color-stacked-logo-scaled-1024x353_P6ob.jpg` | 1024×353 | Responsive Baptist Health logo | Existing derivative |
| `bh-full-color-stacked-logo-scaled-300x103_P6ob.jpg` | 300×103 | Small Baptist Health logo | Existing derivative |
| `bid_P6ob.jpg` | 175×75 | Supporting sponsor grid | Low resolution; replace with a current original |
| `ds_P6ob.png` | 136×91 | Supporting sponsor logo/reference | Identify sponsor and request original |
| `ex_P6ob.png` | Unreadable | Unknown/missing sponsor asset | Do not use until replaced |
| `florida-fresh-dairy-farmers_P6ob.jpg` | Unreadable | Legacy sponsor asset | Do not use until replaced and sponsorship is confirmed |
| `generate-captcha_P6ob.png` | 200×70 | Legacy CAPTCHA image | Do not reuse; use a current accessible form-protection solution |

### Asset implementation rules

- Treat the archive as read-only reference material.
- Do not link the new website directly to absolute archive paths.
- Copy only approved assets into the new project’s asset directory.
- Rename files descriptively, for example:
  - `brand/fort-lauderdale-13-1-logo.png`
  - `brand/fort-lauderdale-13-1-loader.png`
  - `partners/liquid-youth.png`
  - `partners/baptist-health.png`
  - `partners/visit-lauderdale.png`
- Keep one master file per logo and generate responsive derivatives during the build.
- Prefer SVG for logos and AVIF/WebP for photography.
- Preserve original files separately; optimize only copied production versions.
- Record license/permission, sponsor status, alt text, and intended page usage in the asset manifest.
- Do not publish unreadable, broken, unidentified, or outdated sponsor files.

### You provide

- Written confirmation that the project may reuse the archived site assets.
- Official vector logos if available (`SVG`, `EPS`, or high-resolution transparent PNG).
- Current sponsor logos.
- Original race photography.

### Recommended media upload

Upload one organized folder containing:

- `logos/`
- `heroes/`
- `race/`
- `festival/`
- `volunteers/`
- `sponsors/`
- `maps/`

For every important image, include the highest-resolution original rather than a screenshot.

### Deliverable

- Asset manifest.
- Approved/rejected asset list.
- Optimized production media folder.

## Phase 3 — Supply cinematic media

### Work

- Select the homepage hero video.
- Select short clips or photos for the story scroller.
- Select media for each distance card.
- Create poster images and mobile fallbacks.

### You provide

Recommended homepage video:

- 10–20 seconds.
- Landscape, ideally 1920×1080 or higher.
- Sunrise, A1A, ocean, runners, crowds, finish line, or festival.
- No essential spoken audio.
- Clean source without baked-in text.

Recommended supporting media:

- 5–8 short clips, each 3–8 seconds, or equivalent high-resolution photos.
- At least one asset for every race distance.
- One volunteer/community asset.
- One sponsor/festival asset.

Upload `.mp4` or `.mov`. Photos should preferably be high-resolution `.jpg`, `.png`, `.tif`, or original camera files.

### Fallback

If video is unavailable, build a cinematic photo hero with subtle scale, crossfade, and parallax. Do not delay the entire project for video.

### Deliverable

- Media selection board.
- Hero poster and video specifications.
- Desktop/mobile focal-point map.

## Phase 4 — Information architecture and content

### Work

- Convert the legacy content into structured page data.
- Use `content-tree.md` as the starting sitemap and migration checklist.
- Remove outdated years, broken links, duplicate copy, and obsolete partners.
- Shorten homepage content into clear visual scenes.
- Preserve detailed logistics on internal pages.
- Define SEO titles and descriptions.

### Priority routes

1. Home.
2. Race overview.
3. 13.1.
4. Relay.
5. 10K/5K.
6. Schedule.
7. Registration.
8. Results & Photos.
9. Resources.
10. Volunteer.
11. Partners.
12. FAQs/Contact.

Secondary pages can follow after the core launch path is stable.

For an MVP release, the minimum coherent path is:

1. Home.
2. Race overview and active distance pages.
3. Schedule.
4. Registration.
5. Results & Photos.
6. FAQs/Contact.

Resources, partners, volunteer, and other approved pages may ship in the same release only when their content and assets are ready. Do not publish empty navigation destinations.

### You provide

- Final copy or permission to adapt the archived copy.
- Current policy language.
- Map links/files.
- Final sponsor descriptions.

### Deliverable

- Approved content model.
- Route-by-route content document.
- Link and redirect map.

## Phase 5 — Design system

### Work

- Finalize navy/yellow/aqua/coral/sand color tokens.
- Select licensed typography.
- Define fluid type, spacing, grids, buttons, links, cards, and focus states.
- Design desktop, tablet, and mobile behavior.
- Create animation and reduced-motion tokens.

### Key design moments

- Yellow `13.1` loading screen.
- Event-information ticker.
- Overlay header and full-screen menu.
- Cinematic media hero.
- Countdown.
- Story scroller.
- Distance rail.
- Sponsor tiers and marquee.
- Conversion footer.

### You provide

- Official brand guide, if one exists.
- Font licenses/files, if required.
- Feedback on one initial visual direction.

### Deliverable

- Design tokens.
- Core component designs.
- Homepage design at 1440, 768, and 390 px.

### Approval gate

Approve the homepage visual language before building all internal pages.

## Phase 6 — Technical foundation

### Work

- Scaffold the frontend application.
- Configure routing, structured content, and asset handling.
- Build semantic page shell and reusable components.
- Add automated formatting, linting, and tests.
- Establish preview/deployment workflow.
- Add placeholder detection so unresolved `[TBD]` content fails a production build or release check.
- Add environment-variable documentation without committing secrets.

### Initial components

- `BrandLoader`
- `EventTicker`
- `SiteHeader`
- `FullScreenMenu`
- `MediaHero`
- `RaceCountdown`
- `StoryScroller`
- `DistanceRail`
- `SponsorShowcase`
- `ConversionFooter`

### Deliverable

- Running responsive application.
- Shared shell.
- Static homepage with no advanced animation.

## Phase 7 — Homepage implementation

### Work

Implement in this order:

1. Semantic static layout.
2. Responsive header/menu.
3. Yellow `13.1` loader.
4. Hero video/poster.
5. Ticker.
6. Countdown.
7. Editorial story.
8. Distance rail.
9. Festival content.
10. Sponsor presentation.
11. Footer.
12. Motion enhancement.

### Rule

Every section must work before animation is added.

### Deliverable

- Complete homepage.
- Responsive behavior.
- Reduced-motion version.
- Video-failure fallback.

## Phase 8 — Internal pages

### Work

- Build one representative interior page first.
- Approve the page system.
- Apply it to all remaining routes.
- Add maps, FAQs, results archives, logo grids, and policies.

### Deliverable

- Complete route set.
- Shared interior hero and content components.
- No one-off layouts unless content genuinely requires one.

## Phase 9 — Motion and interaction polish

### Work

- Add headline reveals and controlled parallax.
- Enhance desktop story sections with sticky media.
- Refine distance-rail transitions.
- Add sponsor movement.
- Tune buttons, menu, loader, and hover/focus states.

### Limits

- No scroll-jacking.
- One dominant scroll effect per viewport.
- No decorative delay beyond the loader maximum.
- All motion has a reduced-motion fallback.
- Mobile uses simpler motion than desktop.

### Deliverable

- Final motion system.
- Interaction behavior documentation.

## Phase 10 — Quality assurance

### Test

- Widths: 1440, 1024, 768, 390, and 320 px.
- Safari, Chrome, Firefox, and mobile Safari.
- Keyboard-only navigation.
- Screen-reader landmarks and controls.
- Reduced motion.
- Video blocked or slow.
- Slow network and CPU.
- Loader timeout/session behavior.
- Menu focus trap and restoration.
- Slider buttons, keyboard, drag, and swipe.
- Maps and external links.
- Sponsor images and logo proportions.
- Content accuracy.
- No unresolved `[TBD]` values in production content.
- No application references to absolute workstation paths.
- Asset-manifest permission and status checks.

### Targets

- LCP below 2.5 seconds on representative mobile.
- CLS below 0.1.
- No unintended horizontal overflow.
- No broken images, empty logo frames, or outdated placeholder content.

### Deliverable

- QA report.
- Fixed release candidate.

## Phase 11 — Launch

### Work

- Configure production domain and environment variables.
- Verify analytics and forms.
- Confirm redirects from legacy URLs.
- Create final backup/version.
- Deploy.
- Run post-launch smoke test.

### You provide

- Domain/DNS access or the responsible contact.
- Analytics identifiers.
- Form recipient details.
- Final approval.

### Deliverable

- Production website.
- Launch checklist.
- Maintenance handoff.

### Production approval gate

Production launch requires:

- Approved content and current event facts.
- Approved asset rights/status.
- No unresolved production-blocking decisions.
- Passing accessibility, performance, and interaction QA.
- Confirmed analytics/form behavior.
- Confirmed rollback or previous-version recovery path.
- Explicit product-owner approval to deploy.

## Definition of final product

The project is final only when:

- Every route in the approved release scope is live and connected.
- Registration and results pathways use verified destinations.
- The loader, hero, menu, ticker, countdown, story scroller, distance rail, and sponsor system have appropriate failure and reduced-motion states.
- Mobile, tablet, and desktop layouts are verified.
- Keyboard navigation and focus management are verified.
- Performance targets are met or exceptions are documented and approved.
- All production assets appear in the asset manifest.
- No broken, unidentified, unauthorized, or stale sponsor asset is published.
- Setup, content ownership, deployment, and maintenance are documented.

## Fastest efficient workflow

To keep the project moving smoothly, provide these items first:

1. Current event facts and URLs.
2. Permission/rights confirmation for archived assets.
3. Official logos and sponsor files.
4. Homepage video or best available photography.
5. Final registration CTA.
6. One decision: full launch or priority-page launch.

Once those are available, implementation can proceed without repeatedly stopping for missing content.

## First action

Create an `assets-inbox` folder and upload:

- Official event logo.
- `131preloader` original.
- Best 10–20-second video.
- Ten strongest race/festival photos.
- Current sponsor logos.
- Course maps.
- Brand guide and fonts, if available.

Then confirm:

- Event date.
- Active distances.
- Registration URL.
- Desired first-release routes.
