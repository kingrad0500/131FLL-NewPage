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

## Content model

Content is structured data, not markup. Editing copy, distances, sponsors, or event facts means editing files in `app/src/content/` — no component changes required.

- `event.ts` — canonical event facts (date, location, distances, URLs)
- `distances.ts` — race distances for the distance rail and detail pages
- `stories.ts` — story scroller steps
- `sponsors.ts` — sponsors by tier
- `navigation.ts` — menu structure

## Placeholder policy

Unconfirmed values use the `TBD` helper from `src/lib/placeholder.ts`. These render with a visible badge in development and preview, and **fail `npm run build`**.

This is deliberate: it makes unfinished content impossible to ship by accident. See DEC-008 in [`agents/decisions.md`](agents/decisions.md).

To see what is currently unresolved:

```bash
npm run audit
```

## Current status

Phase 6 — technical foundation. The static semantic homepage and shared shell are in place; advanced motion (Phase 9) is not yet applied.

Release scope is MVP (DEC-001). Production release is blocked on photography, video, licensed fonts, confirmed event facts (DEC-009), and sponsor tiering (DEC-006).

## Deployment

Not yet configured. No production deployment may occur before the launch approval gate in [`agents/plan.md`](agents/plan.md) is satisfied.
