# Fort Lauderdale 13.1 — Agent Instructions

Authoritative operating contract for this repository. Detailed research lives in [`agents/`](agents/).

## Mission

A modern, cinematic website for the Fort Lauderdale 13.1 running festival. It should feel like a premium race campaign: impactful on the first viewport, built for runners, easy to navigate, rich with purposeful motion, and fast enough to feel premium rather than heavy.

This is **not** a clone of Shamrock Run Fest and **not** a restoration of the old WordPress site.

## Source-of-truth documents

| File | Role |
|---|---|
| This file | Authoritative implementation and quality standard |
| [`agents/agents.md`](agents/agents.md) | Full specification — components, motion, accessibility, performance |
| [`agents/plan.md`](agents/plan.md) | Phased execution order and approval gates |
| [`agents/decisions.md`](agents/decisions.md) | Approved and unresolved decisions — **read before assuming any fact** |
| [`agents/asset-manifest.md`](agents/asset-manifest.md) | Asset status, rights, alt text, usage |
| [`agents/frontend.md`](agents/frontend.md) | Inventory of the original site (research) |
| [`agents/idea.md`](agents/idea.md) | Interaction inspiration study (research) |

Priority when documents conflict: this file → current product-owner direction → `plan.md` for the authorized phase → `frontend.md` → `idea.md`.

`frontend.md` and `idea.md` are research. They describe evidence and recommendations; they do not authorize copying assets, publishing historical content, or cloning another website.

## Non-negotiables

### Truth and content safety

- **Never invent** event dates, distances, start times, prices, policies, sponsor status, contact details, URLs, or route facts.
- Missing information uses an explicit `[TBD]` value in content data and gets an entry in `agents/decisions.md`.
- Placeholder content is visibly marked in preview and **blocks production release** (`npm run audit`).
- Archived site content is historical evidence, not proof anything is still current. A logo in the archive does not prove current sponsorship.

### Scope discipline

- Implement only the currently approved phase in `plan.md`.
- Prefer reusable primitives over page-specific exceptions.
- Do not add a feature merely because a reference site has it.

### File and asset safety

- `/Users/radstudios/Documents/Archives/...` is **read-only reference**. Never edit or rename archived files.
- Work from the curated [`assets/`](assets/) library. Copy approved files into `app/public/assets/` and reference them with project-relative URLs.
- **Never hardcode absolute workstation paths into application code.**

### External actions

- Do not deploy, publish, change DNS, submit forms, or modify third-party services unless the current request authorizes it.
- Preview deployments must be identified as previews. Production requires the launch approval gate in `plan.md`.

## Current state

- **Stack:** Astro + TypeScript (DEC-002). Application lives in [`app/`](app/).
- **Release scope:** MVP (DEC-001) — Home, Race overview, distance pages, Schedule, Registration, Results & Photos, FAQs/Contact.
- **Phase:** 8 complete; Phase 9 partial; automated production-readiness QA
  implemented. All ten MVP routes exist. Manual cross-browser QA remains.
- **Blocking gaps:** 22 unresolved facts, 27 generated-media registrations, two
  hard artwork placeholders, one withheld sponsor, missing licensed fonts and
  updated/reversed lockups, and pending course confirmations.

### Next task

Resolve the owner-dependent blockers in
[`agents/production-readiness.md`](agents/production-readiness.md). Replace
generated media and hard placeholders only with approved assets. Run
`npm run qa` for preview QA and `npm run build:production` for the release gate.

### Media tooling

- **Higgsfield MCP server** — configured in [`.mcp.json`](.mcp.json), HTTP transport, authenticated 2026-07-24. This is the path to use; call its tools directly.
- **`higgsfield` CLI — deliberately NOT installed.** Its bootstrap pipes a remote script to shell, and the MCP server already covers the need.
- **The 7 `higgsfield-*` skills in [`.agents/skills/`](.agents/skills/) are therefore inert.** They wrap the CLI, not the MCP server, so invoking one will fail at its bootstrap step. Do not reach for them; use the MCP tools. They are gitignored as a reinstallable tool artifact.
- A separate account-level `claude.ai Higgsfield` connector may also appear in `claude mcp list`. If it works, the project-scoped duplicate can be dropped with `claude mcp remove higgsfield`.

## Brand system

Navy anchors, yellow is the primary action color, aqua adds coastal context, coral is limited to festival energy. Never green as a dominant theme. Never every accent in one section.

Tokens live in [`app/src/styles/tokens.css`](app/src/styles/tokens.css). Values are provisional until official brand assets arrive.

Typography uses three roles: a structural grotesk for UI and body, a bold condensed face for numerals and impact labels, and an expressive display accent for hero statements only — never for paragraphs, navigation, or instructions.

## Motion rules

- No scroll-jacking. No required horizontal wheel gesture.
- No more than one dominant scroll effect per viewport.
- No animation that hides essential content indefinitely.
- Every animation needs a reduced-motion path.
- Prefer CSS. Do not add an animation library for effects CSS can do.
- Timing: micro 160–240 ms · menu 350–500 ms · section reveal 600–900 ms · media crossfade 600–1200 ms · marquee 20–45 s.
- Easing: standard `cubic-bezier(.22,1,.36,1)` · emphasized `cubic-bezier(.16,1,.3,1)` · menu `cubic-bezier(.87,0,.13,1)`.

## Accessibility floor

Semantic landmarks · skip link · one `h1` per page · logical heading order · keyboard-accessible menu/rail/accordion · visible focus states · 44×44 px touch targets · descriptive alt text · empty alt for decorative · no important text baked into images or video · captions for meaningful speech · menu traps and restores focus · links not distinguished by color alone.

## Performance budget

AVIF/WebP with responsive `srcset` · intrinsic dimensions on everything · poster images for all video · pause offscreen video · defer below-fold media.

Targets: LCP < 2.5 s on representative mobile · CLS < 0.1 · initial compressed JS < 180 KB · critical image < 300 KB · hero video < 6–8 MB.

## Definition of done

A feature is complete only when approved behavior and content are implemented; desktop and mobile are verified; keyboard behavior is verified; reduced motion is verified where motion exists; loading, empty, error, and media-failure states are handled; tests appropriate to the risk pass; no `[TBD]` is presented as real content; and the decision log is updated.

A page is not complete merely because it resembles a reference screenshot.

## Commands

```bash
cd app
npm install
npm run dev               # local development
npm run build             # preview build — audit is advisory, placeholders render
npm run build:production  # release build — FAILS on any unresolved content
npm run audit             # advisory content report
npm run audit:release     # same report, exits non-zero if anything is unresolved
npm run check             # Astro + TypeScript diagnostics
```

`build` and `build:production` differ only in whether the audit blocks. Preview builds must succeed so unfinished work stays reviewable; production builds must fail so it cannot ship.
