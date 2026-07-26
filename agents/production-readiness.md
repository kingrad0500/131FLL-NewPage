# Fort Lauderdale 13.1 — Production Readiness Report

Date: 2026-07-25  
Scope: release-gate hardening, automated QA, documentation reconciliation, and
production-readiness assessment.  
Deployment: not attempted or authorized.

## Outcome

The preview application builds successfully and the new automated QA suite
passes. Production remains intentionally blocked because required event facts
and final assets have not been supplied.

Current release-gate inventory:

- 22 unresolved facts
- 27 generated-media registrations across 21 generated still files
- 2 hard media placeholders: 2026 shirt artwork and finisher medal artwork
- 1 withheld sponsor: Fort Lauderdale Beach BID
- 0 unverified values
- 0 provisional markers outside the audited content boundary

`npm run audit:release` exits with code 1, as it should. No unresolved value was
invented, no placeholder was silently approved, and nothing was deployed.

## Problem found

The original release audit dynamically imported `src/content/*.ts`. This
correctly populated the provisional registry for content modules, but it did not
execute `.astro` pages. Consequently, the following were missing from the
production report:

- The 2026 deferral policy
- The registration page hero
- The race-overview hero
- The schedule hero
- The results hero
- The FAQs hero
- The missing 2026 shirt and medal artwork

The release was already blocked by other items, but it could eventually have
reported a false clean result after those other items were resolved.

## Changes made

### Fail-closed audit

- Added `app/scripts/source-policy.ts`.
- The source policy recursively examines TypeScript and Astro source files.
- `TBD()`, `UNCONFIRMED()`, and `GENERATED()` declarations are allowed only in
  `src/content/` or their defining library.
- A marker placed in a page, layout, or component now becomes a release error.
- `PlaceholderMedia` supports an explicit `releaseBlocking` flag.
- Guaranteed visible placeholders carrying that flag are independently counted
  by the release audit.
- The audit now reports how many content modules and source files/policies it
  scans and includes source-policy failures in its exit decision.

### Content-boundary cleanup

Moved page-level provisional declarations into audited content modules:

- Added `app/src/content/registration.ts` for the registration hero, policies,
  close date, distance-change policy, and deferral policy.
- Moved the FAQs hero into `faqs.ts`.
- Moved the results hero into `results.ts`.
- Moved the schedule hero into `schedule.ts`.
- Moved the race-overview hero into `races.ts`.
- Shared registration facts are imported by FAQs rather than registered twice.

No public copy or event fact was changed.

### Hard media placeholders

The half-marathon page’s missing 2026 race shirt and finisher medal artwork now
use `releaseBlocking` on `PlaceholderMedia`. They still render honestly in
preview and now prevent production.

### Automated tests

Added `app/tests/source-policy.test.ts` with four regression tests:

1. Reject a provisional marker declared in a page.
2. Allow a provisional marker in an audited content module.
3. Detect an explicitly release-blocking media placeholder.
4. Ignore a normal runtime fallback placeholder that has a valid media path.

Added `app/tests/build-output.test.ts` with four build-output tests:

1. All ten MVP routes exist, include metadata and a `<main>`, and contain
   exactly one `<h1>`.
2. Every local `<img>` and `<source>` reference in generated HTML resolves to a
   file in the build.
3. Generated HTML contains no `file://` URLs or absolute workstation paths.
4. Each route remains below the 180 KB compressed initial-JavaScript budget,
   including inline scripts.

Added package commands:

```bash
npm test
npm run test:build
npm run qa
```

`npm run qa` runs Astro/TypeScript diagnostics, source-policy tests, the preview
build, and build-output tests.

### Documentation reconciled

Updated:

- `AGENTS.md`
- `README.md`
- `agents/status.md`
- `agents/asset-manifest.md`
- `agents/decisions.md`

The documentation now reflects all ten routes, partial Phase 9 motion, the
current audit totals, the live course map, the new QA commands, and DEC-015.

## Verification results

### Passed

`npm run check`

- 53 files checked
- 0 errors
- 0 warnings
- 0 hints

`npm test`

- 4 tests passed
- 0 failed

`npm run build`

- Preview audit completed
- Static build completed
- 10 pages generated

`node --test tests/build-output.test.ts`

- 4 tests passed
- All MVP routes present
- One `<h1>` per route
- All referenced local images present
- No workstation-path leakage
- JavaScript budget passed

Compressed inline JavaScript measured during this pass:

- Homepage: 3,813 bytes
- Each interior route: 1,048 bytes
- Budget: 184,320 bytes per route

`git diff --check`

- No whitespace errors

### Correctly blocked

`npm run audit:release`

- Exit code: 1
- 22 unresolved facts
- 27 generated-media registrations
- 2 release-blocking media placeholders
- 1 withheld sponsor
- 0 misplaced markers

This failure is expected and required.

### Not completed in this environment

A browser connection was unavailable during this pass. I therefore did not
claim a fresh manual result for:

- Safari or mobile Safari
- Keyboard-only traversal
- Screen-reader behavior
- Runtime focus trapping and restoration
- Reduced-motion visual behavior
- Slow-network or slow-CPU behavior
- LCP and CLS under representative mobile throttling

Earlier Chrome and Firefox spot checks are recorded in `agents/status.md`, but
they are not a substitute for the final Phase 10 device/browser matrix.

## Owner and organizer inputs still required

### Event facts

The authoritative list is printed by `npm run audit`. It currently includes:

- Distance-change process
- Deferral policy
- Registration close date
- Award categories and ceremony time
- Festival programming, vendors, and closing time
- Half-marathon and 5K participant caps
- Wheelchair and para-athlete policy
- Relay leg distances, team rules, minimum age, inclusions, exchange transport,
  and substitutions
- 10K and 5K time limits and minimum ages
- 10K and 5K entry inclusions

### Final assets

- Real photography replacing all generated race imagery
- Updated lockup reading “20th Annual”
- Reversed/white event lockup
- Licensed brand fonts
- Original Fort Lauderdale Beach BID logo
- 2026 race shirt artwork
- 2026 finisher medal artwork

### Course

- Organizer confirmation that the supplied 2024 course geometry and 2025 relay
  exchange apply in 2026
- Product-owner approval of the per-distance map derivation

### Launch configuration

- Hosting/deployment target
- Production domain and canonical URL
- Analytics requirements
- Legacy redirect list
- Final launch authorization
- Rollback owner and post-launch smoke-test owner

## Final manual QA required

Before launch, test:

- 1440, 1024, 768, 390, and 320 px widths
- Current Safari, Chrome, Firefox, and mobile Safari
- Keyboard-only navigation
- Screen-reader landmarks and control names
- Menu focus trap, Escape close, scroll lock, and focus restoration
- Reduced-motion paths
- Loader session and timeout behavior
- Distance rail pointer, keyboard, drag, and swipe behavior
- Slow network, slow CPU, blocked media, and disabled JavaScript
- Every external URL and email link
- Sponsor proportions and final brand artwork
- LCP below 2.5 seconds and CLS below 0.1 on representative mobile

Record results and approved exceptions before changing Phase 10 to complete.

## Production go/no-go rule

Production is a **no-go** until all of the following are true:

```text
npm run build:production passes
npm run qa passes
manual Phase 10 browser/device/accessibility QA passes
performance budgets pass or exceptions are approved
product owner signs off on facts, sponsors, branding, course, and media
deployment, redirects, rollback, and post-launch checks are ready
```

The codebase is now better protected against accidental release, but it is not
yet a production release candidate because the owner-dependent blockers remain.

## Vercel preflight rerun

Rerun: 2026-07-25 after the repository was connected to GitHub/Vercel.

- Git remote: `origin` points to `kingrad0500/131FLL-NewPage`.
- Branch: `main`.
- Local and remote `main` both pointed to commit `af1868f` at inspection time.
- The application-level release-gate and QA work is included in that commit.
- `npm run qa` passed again: 0 Astro diagnostics, 4 source-policy tests, 10
  generated routes, and 4 build-output tests.
- `npm run audit:release` correctly exited 1 on the same production blockers:
  22 unresolved facts, 27 generated registrations, 2 hard media placeholders,
  and 1 withheld sponsor.
- Registration, RunSignup results, photos, all 12 Athlinks archive URLs,
  Facebook, Instagram, and the four rendered sponsor destinations returned an
  HTTP 200 response during the link check.
- The RunSignup photos page identifies the event as the 20th Annual Liquid
  Youth Fort Lauderdale Running Festival on November 8, 2026.

No local `.vercel/project.json`, Vercel deployment URL, custom domain, sitemap,
or `robots.txt` was available in the workspace. Vercel project protection,
preview indexing behavior, deployment headers, and the deployed runtime cannot
be verified locally. A preview URL or connected browser session is required for
that final hosted-environment pass.

The working tree still contains uncommitted documentation changes:

- `AGENTS.md`
- `README.md`
- `agents/asset-manifest.md`
- `agents/decisions.md`
- `agents/status.md`
- this report

## Hosted Vercel validation

Deployment checked:
`https://131-fll-new-page.vercel.app/`

### Passed on the deployed version

- HTTPS and Vercel HSTS are active.
- All ten MVP routes return HTTP 200.
- Unknown routes return HTTP 404.
- Vercel serves cached static HTML successfully.
- Registration, results, photos, all Athlinks archive links, social profiles,
  and rendered sponsor destinations returned HTTP 200 during the broader link
  check.

### Hosted issues found

- The deployment is publicly reachable without Vercel Authentication.
- No `X-Robots-Tag` prevents indexing.
- `robots.txt` returns 404.
- `sitemap.xml` returns 404.
- Unknown routes receive Vercel's plain-text 404 instead of an event-branded
  recovery page.

### Remediation implemented locally

- Preview pages now default to `noindex, nofollow`.
- Preview `robots.txt` defaults to `Disallow: /`.
- Preview sitemap contains no public URLs.
- Added a branded, accessible 404 page.
- Added optional canonical and Open Graph URLs from `PUBLIC_SITE_URL`.
- Added production-only indexing and canonical-origin requirements to
  `audit:release`.
- Added `.env.example`.
- Expanded build QA from 4 to 6 tests, covering crawler controls and the 404.
- `npm run qa` passes with 0 diagnostics, 4 source-policy tests, and 6
  build-output tests.

These remediations are not present on the provided Vercel URL until the local
changes are committed and pushed. No push or deployment was performed during
this validation.

## Behavior-preserving refactor

Date: 2026-07-25

Refactored the two highest-value duplication points without changing content,
visuals, URLs, or release policy:

- Added `app/src/config/routes.ts` as the canonical typed route registry.
- Navigation, sitemap generation, and build-output QA now import the same
  `MVP_ROUTES`/`ROUTES` definitions.
- Added `app/src/config/launch.ts` as the canonical parser and validator for
  preview indexing, the production origin, and canonical URLs.
- The shared layout, robots endpoint, sitemap endpoint, and release audit now
  consume the same normalized launch configuration.
- Added three configuration regression tests covering fail-closed previews,
  invalid production origins, canonical URL generation, and route uniqueness.
- Reduced route/config duplication while preserving the audit inventory at 22
  unresolved facts, 27 generated registrations, 2 media placeholders, and 1
  withheld sponsor.

Post-refactor verification:

- `npm run check`: 0 errors, warnings, or hints across 59 files.
- Unit tests: 7 passed.
- Build-output tests: 6 passed.
- Preview build: 11 HTML pages plus robots and sitemap generated.
- `git diff --check`: clean.
- `audit:release`: still blocks on the same content/media inventory and the two
  explicit production environment requirements.

The large `GalleryHero`, `StoryScroller`, `DistanceRail`, and `SiteHeader`
interaction scripts were reviewed but intentionally left intact. Extracting
their browser behavior without a working interaction-test surface would create
more regression risk than maintenance benefit. Page titles and descriptions
also remain beside their page templates because they are route-specific,
readable there, and not currently drifting.
