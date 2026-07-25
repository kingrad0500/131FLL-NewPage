# GalleryHero — translation spec

Native recreation of the 21st.dev "hero-gallery-scroll-animation" pattern
(bento grid + scroll-linked reveal) for the homepage hero. Inspiration only:
no React, no Tailwind, no new runtime dependencies. Status: **built and
verified 2026-07-25** as `app/src/components/GalleryHero.astro` (DEC-013).
See "As built" at the end for deviations from this spec.

## The effect, in plain terms

On load, the full hero copy (date/location eyebrow, "Run the Coast" title,
subtitle, both CTAs) sits centered on a navy field, with the five-image bento
grid scaled down (~50%) around and behind it. As the user scrolls, the grid
grows to fill the viewport while the copy fades and scales away; the images
finish edge-to-edge, then the page continues into the editorial intro. The
scroll sequence pins the hero for about one extra viewport of scrolling.

## Hard requirements carried over from the current hero

1. **Race date and Register visible without scrolling.** The copy block is
   fully visible at scroll position 0 — plus the ticker and header Register
   stay fixed throughout. Satisfied by design.
2. **Server-rendered content.** Headline, eyebrow, subtitle, CTAs are plain
   HTML — visible with JS disabled and before any hydration (there is none).
3. **Reduced motion:** `prefers-reduced-motion` gets a static composition —
   grid at final layout, copy overlaid with the navy gradient scrim, no
   pinning, no animation.
4. **Performance:** CSS scroll-driven animations (`animation-timeline`) drive
   the reveal with no JavaScript wherever they are supported, gated behind
   `@supports`. **Revised 2026-07-25** (owner direction, after Firefox 153
   was confirmed to lack support entirely): a 1.1 KB inline script provides
   the same reveal in browsers without it, so every browser matches. The
   script exits immediately when the native path is available, keeping
   Chromium script-free. LCP is the big-cell AVIF with
   `fetchpriority="high"`.
5. **Header contract:** the `[data-header-sentinel]` moves to the end of the
   scroll container, so the header stays in overlay mode through the pinned
   sequence and goes solid after it. Header/menu stacking is unaffected.
6. **Release gate:** all five images wrapped in `GENERATED()` (DEC-011).

## Layout

Desktop (mirrors the inspiration's default variant):

```
┌──────────────────────────┬────────┐
│                          │  cell2 │
│         cell 1           ├────────┤
│      (hero-desktop)      │  cell3 │
├────────────┬─────────────┴────────┤
│   cell 4   │        cell 5        │
└────────────┴──────────────────────┘
```

Mobile: cells 2 and 3 are omitted; cell 1 full width, cells 4 and 5 split a
bottom row. Transform origins per cell match the inspiration (corners pull
toward frame edges as they scale).

## Content contract

`homeHero.media` is unchanged (MediaHero remains in the codebase for future
interior pages). New field `homeHero.gallery: { src, alt }[5]`, proposed
picks — chosen to avoid repeating images that already appear further down the
homepage (stories, distance cards, festival):

| Cell | Image | Why |
|---|---|---|
| 1 (large) | `heroes/hero-desktop.avif` | Existing LCP hero image |
| 2 | `heroes/interior-results.avif` | Medals close-up, celebratory |
| 3 | `heroes/interior-10k.avif` | Palm road to the ocean |
| 4 | `heroes/interior-relay.avif` | Two runners together |
| 5 | `heroes/interior-5k.avif` | Family energy |

The four interior-hero images are currently staged but unused, so nothing on
the page duplicates. Wiring them raises the audit's generated count 13 → 17,
which is correct and intended. If the interior pages later want unique
heroes, we regenerate purpose-shot cells (~0.5 credits).

## Motion spec

- Container: `220vh` desktop, `180vh` mobile (deliberately shorter than the
  inspiration's 350vh — less scroll hostage-taking; tunable via one token).
- Grid: sticky at top, `100svh`, gap and padding from spacing tokens.
- Cells: `scale 0.5 → 1`, `translate -35% → 0` mapped over the first ~90% of
  container scroll; per-cell `transform-origin` as in the inspiration.
- Copy block: sticky, centered; `opacity/scale 1 → 0` over the first ~50%.
  A radial navy veil sits behind the copy for text contrast over the scaled
  grid and fades out with it.
- Background: `--navy-950` field, consistent with the current hero and the
  white header/ticker text.

## Accessibility

- Images keep their manifest alt texts (they are content, not decoration).
- Heading order unchanged (`h1` in the copy block, first heading on page).
- No scroll hijacking beyond native scrolling — no wheel/touch interception,
  no focus trap; keyboard users tab straight to the CTAs.
- Focus-visible styles on CTAs verified against the navy field.

## Verification plan (same rig as the menu fix)

Headless Chrome at 1440/768/390: screenshots at scroll 0%, ~50%, 100%;
reduced-motion emulation screenshot; assert copy block and both CTAs visible
at position 0 in every viewport; confirm zero JS shipped by the component;
build + audit pass.

## Open decisions for the product owner

1. Approve the five image picks (or name swaps).
2. Approve 220vh scroll length (vs. the inspiration's longer 350vh).
3. Firefox/no-support fallback: static composition (recommended, keeps zero
   JS) vs. a ~2 KB script that animates everywhere.

## Record

Implemented as `app/src/components/GalleryHero.astro`; homepage swapped
`MediaHero` → `GalleryHero`; decision logged as DEC-013 with the inspiration
credited (21st.dev "hero-gallery-scroll-animation" pattern, recreated
natively).

## As built — deviations and hard-won details

Three changes were made during implementation, each for a concrete reason:

1. **The grid scales as one piece (0.62 → 1), not cell-by-cell.** The
   inspiration scales every cell from its own corner origin. Rebuilt with
   our five images and our bento proportions, that produced a scattered
   opening frame — five fragments adrift on navy with the headline fighting
   them. Scaling the grid as a unit (cells carry only a subtle 0.9 → 1 of
   their own) opens on a tidy miniature of the final layout and reads as
   deliberate composition.
2. **Narrow screens (≤48rem) keep the mosaic full-bleed** and animate only
   the copy fade. A two-column grid shrunk to 62% collapses into thin
   strips that the headline cannot share space with. The veil also goes
   from a centred radial pool to a full-frame wash at this size, because
   the imagery sits directly behind the text.
3. **Image order differs from the approved list's ordering** (same five
   approved images). Cells 2 and 3 are tall, so they take the people-facing
   frames (family fun run, finisher medals); the wide cells take the
   landscapes (oceanfront pack, relay pair, palm road). Landscapes cropped
   to portrait strips looked broken.

Two implementation traps worth remembering:

- **Never let the `animation` shorthand carry the timeline.** The CSS
  minifier folds `animation-timeline` into the shorthand, producing
  `animation: linear both name --ghero`, which Chrome rejects outright —
  silently disabling the animation with no error anywhere. The binding
  therefore lives in its own, more specific rule that cannot be folded.
- **`view-timeline-inset: 0` is required.** The global
  `scroll-padding-block-start` (which keeps anchor targets clear of the
  fixed topbar) also insets view timelines, starting the timeline one
  topbar-height above scroll 0 — unreachable — so the copy rendered
  pre-faded at 80% opacity on first paint.

Verified in headless Chrome at 1440/768/390 across three scroll positions
plus reduced-motion emulation: copy at full opacity with title and both CTAs
in view at scroll 0 in every viewport; monotonic reveal; static composition
under reduced motion. Note the brand loader sets
`documentElement.overflow = hidden` while it plays, which suspends the scroll
timeline — any future automated check must wait for `[data-brand-loader]` to
finish before measuring.

### Cross-browser parity (added 2026-07-25)

Firefox 153 reports **no support for any** of the five properties the native
path needs (`animation-timeline`, `view-timeline-name`, `view-timeline-inset`,
`animation-range`, `scroll()`), so it fell back to the static composition.
The owner asked for parity, so a 1.1 KB inline script now publishes scroll
progress as custom properties (`--ghero-grid-scale`, `--ghero-cell-scale`,
`--ghero-copy-opacity`, `--ghero-copy-scale`) consumed by `.is-js-driven`
rules that mirror the keyframe values exactly — one set of numbers, so the
two paths cannot drift.

Verified in the real browsers:

| Path | Result |
|---|---|
| Chrome (native) | `is-js-driven` absent, no inline properties set, `ghero-cell-in` running — script exits, fast path unchanged |
| Firefox 153 (scripted) | 220vh stage, copy 1.00 → 0.03 → 0.00, cells 0.9 → 1.0 — matches Chrome |
| Firefox + reduced motion | 100vh, no `is-js-driven`, copy at full opacity — static composition preserved |

Safari remains **unverified** (cannot be driven from this environment). If it
lacks native support it now takes the scripted path automatically, so the
outcome is correct either way; only the JS-vs-CSS route differs.
