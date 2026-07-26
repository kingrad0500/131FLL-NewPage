# Fort Lauderdale 13.1

Website for the Fort Lauderdale 13.1 running festival.

## Repository layout

```
.
├── AGENTS.md            Operating contract — read this first
├── agents/              Research, plan, decisions, asset manifest
├── assets/              Curated source asset library (masters, not shipped)
└── app/                 Astro application
    ├── public/assets/   Approved assets copied for the build
    ├── scripts/         Content audit
    └── src/
        ├── components/  UI components
        ├── content/     Structured content data
        ├── layouts/     AppShell
        ├── lib/         Shared utilities
        ├── pages/       Routes
        └── styles/      Design tokens and global CSS
```

`assets/` is the curated master library. Files are copied into `app/public/assets/` only after their status and permission are recorded in [`agents/asset-manifest.md`](agents/asset-manifest.md). The application never references the master library or any absolute path directly.

## Setup

Requires Node 20+ (developed on 24.16.0).

```bash
cd app
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Scripts

Run from `app/`.

| Command | Purpose |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Preview build to `dist/` — the audit reports but does not block |
| `npm run build:production` | Release build — **fails** if any content is unresolved |
| `npm run preview` | Serve the built output locally |
| `npm run audit` | Content report (advisory) |
| `npm run audit:release` | Content report that exits non-zero if anything is unresolved |
| `npm run check` | Astro and TypeScript diagnostics |
| `npm test` | Release-policy regression tests |
| `npm run test:build` | Build and validate every generated route |
| `npm run qa` | Diagnostics, policy tests, preview build, and output tests |

## Content model

Content is structured data, not markup. Editing copy, distances, sponsors, or event facts means editing files in `app/src/content/` — no component changes required.

- `event.ts` — canonical event facts (date, location, URLs, contacts, social)
- `distances.ts` — the four distances: times, pricing, registration links
- `races.ts` — distance detail pages; a new distance is a data object here
- `schedule.ts` — race-day timeline, packet pickup, packet contents, timing
- `registration.ts` — registration policies, deadlines, and page hero
- `results.ts` — results archive by year and distance
- `faqs.ts` — FAQ groups and questions
- `home.ts` — homepage hero, gallery cells, editorial, festival
- `stories.ts` — story scroller steps
- `sponsors.ts` — sponsors by tier
- `navigation.ts` — menu structure

## Placeholder policy

Three markers in `src/lib/placeholder.ts` track content that is not ready:

| Marker | Meaning | Renders as |
|---|---|---|
| `TBD()` | The value is unknown | A visible badge |
| `UNCONFIRMED()` | Real, but not confirmed by the product owner | Normally |
| `GENERATED()` | AI placeholder standing in for real media | Normally |

All three are release-blocking. Provisional markers must be declared in
`src/content/`; the source-policy test rejects markers placed directly in pages
or components. Guaranteed visible placeholders use `releaseBlocking` and enter
the same gate. See DEC-008, DEC-011, and DEC-015 in
[`agents/decisions.md`](agents/decisions.md).

To see what is currently unresolved:

```bash
npm run audit
```

## Current status

**Phase 8 complete** — the homepage and all nine MVP interior routes are built,
and every navigation destination resolves. Parts of Phase 9 (motion polish) are
already in: the homepage gallery hero and the sticky story sequence.

Release scope is MVP (DEC-001). Production release remains blocked on real
photography (27 generated registrations), 22 unresolved facts, two hard artwork
placeholders, licensed fonts, and the brand assets listed in the manifest.

A full record of what is built, what is confirmed, and what is outstanding is in
[`agents/status.md`](agents/status.md).

The latest verification evidence is in
[`agents/production-readiness.md`](agents/production-readiness.md).

## Deployment

Not yet configured. No production deployment may occur before the launch approval gate in [`agents/plan.md`](agents/plan.md) is satisfied.

Preview builds default to `noindex, nofollow`, a site-wide `robots.txt`
disallow, and an empty sitemap. For the final approved Vercel Production
environment, set:

```text
PUBLIC_ALLOW_INDEXING=true
PUBLIC_SITE_URL=https://the-final-production-domain.example
```

`npm run build:production` rejects a launch unless indexing is explicitly
enabled and `PUBLIC_SITE_URL` is a valid HTTPS origin. Do not set these values
for Preview environments.
