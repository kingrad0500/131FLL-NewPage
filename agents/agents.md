# Fort Lauderdale 13.1 — Project Build Instructions

## 1. Project mission

Create a modern, cinematic, high-energy website for the Fort Lauderdale 13.1 running festival.

The final experience should feel as polished, active, and memorable as a premium contemporary race campaign. Use the motion ideas and immersive pacing documented in `idea.md`, while preserving the Fort Lauderdale content, race structure, sponsor visibility, coastal identity, and navy/yellow visual language documented in `frontend.md`.

This is not a copy of Shamrock Run Fest. It is a distinct Fort Lauderdale experience inspired by its confidence, movement, storytelling, and strong conversion hierarchy.

The desired result is:

- Impactful on the first viewport.
- Designed specifically for runners.
- Cinematic and energetic.
- Easy to understand and navigate.
- Rich with purposeful scroll effects and media.
- Responsive and accessible.
- Fast enough to feel premium rather than heavy.
- Maintainable by Codex through reusable components and structured content.

## 1.1 Agent operating contract

These rules apply to every agent working on the project:

### Truth and content safety

- Never invent event dates, distances, start times, prices, policies, sponsor status, contact details, URLs, race claims, or route facts.
- When information is missing, use an explicit `[TBD]` value in content data and add it to the project decision log.
- Placeholder content must be visibly marked in preview environments and must block production release.
- Archived website content is historical evidence, not proof that information is still current.
- A logo’s presence in the archive does not prove current sponsorship or permission to publish it.

### Scope discipline

- Implement only the current approved phase in `plan.md`.
- Do not build all routes before the representative homepage and interior-page systems are approved.
- Prefer reusable primitives over page-specific exceptions.
- Do not add features solely because the reference site contains them.
- Do not replace unresolved product decisions with personal design assumptions.
- If a missing decision changes architecture, content legality, or integration behavior, stop that portion and record the blocker while continuing independent work.

### Evidence and validation

- Identify whether a decision comes from:
  - Approved product-owner input.
  - `agents.md`.
  - Observed Fort Lauderdale reference material.
  - Shamrock inspiration.
  - An implementation recommendation.
- Verify significant visual changes at desktop and mobile sizes.
- Verify significant interactive changes with keyboard and reduced-motion settings.
- Report what was tested and what remains unverified.

### File and asset safety

- Treat archived webpage folders as read-only references.
- Never edit or rename archived source files.
- Work from the curated project `assets` directory.
- Do not hardcode absolute local filesystem paths into application code.
- Copy approved assets into the application’s public/static system and reference them with project-relative URLs.
- Preserve user files and unrelated working-tree changes.

### External actions

- Do not deploy, publish, change DNS, submit forms, send messages, upload private files, or modify third-party services unless the current user request authorizes that action.
- Preview deployments must be clearly identified as previews.
- Production deployment requires completion of the launch approval gate in `plan.md`.

## 2. Source-of-truth documents

Read these files before designing or implementing:

- `frontend.md`: inventory of the original Fort Lauderdale website, routes, content patterns, colors, imagery, and reusable components.
- `idea.md`: analysis of Shamrock Run Fest’s modern visual hierarchy, video, ticker, menu, scrolling scenes, distance rail, partner motion, and animation architecture.
- `agents.md`: this document; the authoritative implementation and quality standard.
- `plan.md`: phased execution order, required inputs, deliverables, and approval gates.
- `content-tree.md`: extracted route hierarchy, page purposes, navigation projection, and content-migration branches.

Priority when documents overlap:

1. This `agents.md`.
2. Current product-owner direction.
3. `plan.md` for the currently authorized phase and handoff requirements.
4. `content-tree.md` for the current route and content hierarchy.
5. `frontend.md` for observed Fort Lauderdale content and route references.
6. `idea.md` for inspiration and interaction patterns.

Do not carry old-site defects into the new product.

`frontend.md` and `idea.md` are research documents. They describe evidence and recommendations but do not independently authorize copying assets, publishing historical content, adding every observed component, or cloning another website.

When the application repository is created, place a maintained copy of these instructions at the repository root as `AGENTS.md` so Codex discovers them automatically. The root file must remain concise enough to operate from; detailed research may continue to live in the `agents/` documentation folder.

### Decision log

Maintain `agents/decisions.md` once implementation begins. Each unresolved or approved decision should record:

- Date.
- Decision or question.
- Status: `TBD`, `approved`, `rejected`, or `superseded`.
- Owner.
- Supporting source/link.
- Consequences for design, content, or engineering.

Do not bury product decisions in chat history.

## 3. Creative direction

### Concept: Sunrise to Finish Line

Build the experience around a runner’s progression through Fort Lauderdale:

1. Anticipation before the race.
2. Sunrise and oceanfront start.
3. Movement through A1A and Las Olas.
4. Community, spectators, and volunteers.
5. Finish-line achievement.
6. Post-race festival.

The website should unfold like a race story rather than a stack of unrelated sections.

### Emotional qualities

- Fast, warm, bright, and optimistic.
- Coastal rather than tropical-tourism cliché.
- Athletic without looking severe.
- Festival-oriented without becoming visually chaotic.
- Premium enough to inspire trust in registration.
- Friendly to first-time runners as well as experienced athletes.

### What to preserve from the original site

- Fort Lauderdale 13.1 event identity.
- Race information architecture.
- 13.1, relay, 10K, and other confirmed distance information.
- Strong registration and results pathways.
- Sponsor and medical-partner prominence.
- Coastal runner photography.
- Navy and yellow brand recognition.
- Results, resources, partners, volunteer, and FAQ content families.

### What to modernize

- Replace the static white header with an immersive overlay header on the homepage.
- Replace dense static bands with designed visual scenes.
- Replace generic page heroes with modern media and editorial typography.
- Replace small links with clear CTA hierarchy.
- Convert race options into an interactive distance rail.
- Convert long landing-page link lists into visual navigation cards.
- Modernize sponsor presentation with tiering and controlled marquee motion.
- Improve line length, spacing, mobile behavior, focus states, and readability.
- Remove stale dates, broken images, empty frames, and repeated content.

## 4. Brand system

### Required palette

Use the Fort Lauderdale 13.1 palette, not Shamrock green.

| Token | Starting value | Purpose |
|---|---:|---|
| `navy-950` | `#001F45` | Deep backgrounds and overlays |
| `navy-800` | `#002B5C` | Primary brand navy |
| `yellow-500` | `#FFD200` | Primary action and loading screen |
| `yellow-300` | `#FFE66B` | Soft yellow highlights |
| `aqua-500` | `#19B8C4` | Coastal secondary accent |
| `coral-500` | `#F47A4A` | Festival/warm highlight |
| `sand-100` | `#F5F0E8` | Warm light canvas |
| `gray-100` | `#EFEFEF` | Secondary section background |
| `ink-950` | `#151411` | Strong text and dark contrast |
| `white` | `#FFFFFF` | Light text and canvas |

These values are provisional. Sample and replace them with official brand values when original assets are available.

### Color usage

- Navy anchors the experience and provides athletic credibility.
- Yellow is the primary action color and signature moment.
- Aqua adds coastal context.
- Coral is limited to festival energy and supporting highlights.
- Sand/off-white prevents the experience from feeling sterile.
- Do not use green as a dominant theme.
- Do not use every accent color in the same section.
- Maintain strong contrast across video and photography.

### Typography

Use three clearly defined roles:

1. Structural grotesk:
   - Navigation, body text, buttons, metadata, and utility information.
   - Modern and highly readable.

2. Bold condensed/numerical display:
   - `13.1`, dates, countdown, prices, distance names, and high-impact section labels.

3. Expressive display accent:
   - Hero statements and occasional editorial phrases.
   - May be italic, hand-drawn, or energetic.
   - Never use for paragraphs, navigation, or essential instructions.

Use fluid type with `clamp()`. Avoid dozens of arbitrary fixed sizes.

## 5. Signature loading experience

### Purpose

The loading screen is a short branded opening beat based on the supplied reference screenshot: a full yellow field with a large black `13.1` mark.

It should create anticipation without delaying access.

### Visual sequence

1. Cover the viewport with event yellow.
2. Center a large textured or distressed `13.1` wordmark in ink/near-black.
3. Optionally show a minimal progress dot, short line, or percentage underneath.
4. Animate the mark with a subtle scale, wipe, or track-like reveal.
5. Reveal the homepage by:
   - Sliding the yellow panel upward, or
   - Splitting/wiping it away horizontally, or
   - Expanding the `13.1` mark into the first hero transition.
6. The homepage hero continues immediately behind it.

### Behavioral rules

- Target duration: approximately 900–1,500 ms after critical hero media is ready.
- Never hold the user for decorative reasons.
- Maximum fallback duration: 2,000 ms.
- Do not show on every internal navigation.
- Prefer showing once per browser session.
- It may show on first direct page load only.
- If media is cached, retain a minimum display of roughly 500–700 ms so the sequence does not flash.
- If JavaScript fails, content must remain available.
- Do not block accessibility tree access longer than necessary.
- Restore normal page scrolling when the loader completes.

### Reduced-motion behavior

- No scale, wipe, or rapid transition.
- Show the yellow cover and `13.1` mark briefly, then crossfade in approximately 150–250 ms.
- Allow immediate content access.

### Implementation component

`BrandLoader`

Required inputs:

- `mark`
- `backgroundColor`
- `foregroundColor`
- `minimumDuration`
- `maximumDuration`
- `showOncePerSession`
- `reducedMotion`
- `onComplete`

The loader must have automated tests for timeout, cached media, reduced motion, and session persistence.

## 6. Homepage experience

The homepage must follow a deliberate narrative sequence.

### 6.1 Event ticker

A continuous horizontal information bar above the hero:

- Event date.
- Fort Lauderdale, Florida.
- Confirmed race distances.
- Short arrow or dot separators.

Example structure:

`NOVEMBER 8, 2026 • FORT LAUDERDALE, FL • 13.1 / RELAY / 10K / 5K →`

Rules:

- Duplicate content for seamless looping.
- Pause on hover and keyboard focus.
- Provide a static wrapped fallback under reduced motion.
- Do not make the ticker the only source of essential information.

### 6.2 Overlay header

Homepage header:

- Transparent over the hero.
- White or high-contrast event logo.
- Sponsor lockup remains secondary.
- Large outlined Menu pill on the right.
- Optional compact Register control.
- Changes to solid navy, sand, or blurred glass after leaving the hero.

Internal-page header:

- May use the solid compact state immediately.
- Must remain visually consistent with the homepage system.

### 6.3 Full-height media hero

The initial hero should occupy approximately 85–100 `svh`.

Content:

- Muted looping race/lifestyle video or cinematic photo sequence.
- Fort Lauderdale footage: sunrise, ocean, A1A, palms, runners, cheering, finish line, festival.
- Dark navy or sunset-toned gradient overlay.
- Small event mark or graphic.
- One expressive headline.
- One dominant Register CTA.
- One secondary Explore the Races action.

Possible headline directions:

- Run the Coast.
- Your Fastest View of Fort Lauderdale.
- Sunrise. Miles. Finish Line.
- The Oceanfront Is Calling.

Use final approved copy; do not invent production claims.

Hero rules:

- Provide a poster image.
- Never autoplay audio.
- Pause when offscreen.
- Use focal-position controls for desktop and mobile.
- Maintain text contrast across every frame.
- Use a static image if video is blocked or reduced motion is active.

### 6.4 Countdown

- Large numerical countdown to race day.
- Days, hours, minutes, and seconds.
- Include the full date in visible text.
- Keep the component accurate across time zones.
- After race start, transition to race-day or results messaging.

### 6.5 Editorial introduction

Explain what makes the event special:

- Oceanfront route.
- Las Olas.
- Fort Lauderdale community.
- Running festival.
- Race-day energy.

Treatment:

- Large editorial heading.
- Narrow paragraph measure.
- Optional line or mask reveal.
- Copy remains selectable and semantic.
- Avoid animating every word.

### 6.6 Fort Lauderdale story scroller

Create a scroll-driven feature sequence inspired by modern editorial storytelling.

Suggested stories:

- Oceanfront Miles.
- Las Olas Energy.
- A Race for Every Pace.
- South Florida Community.
- Finish-Line Celebration.
- Running Festival.

Desktop:

- Sticky visual/media panel.
- Text steps scroll beside it.
- Active step changes image, short video, crop, gradient, or graphic.
- Motion uses crossfade, small parallax, and controlled scale.

Mobile:

- Normal stacked cards.
- No sticky scroll trap.
- Small entrance reveals only.

Reduced motion:

- Static stacked content at all widths.

### 6.7 Distance rail

Create a premium horizontal showcase for confirmed race distances.

Each `DistanceCard` includes:

- Distance name.
- Short description.
- Start time if confirmed.
- Price if confirmed.
- Hero image or video still.
- Learn More action.
- Register action where appropriate.

Interaction:

- One dominant card with part of the next card visible.
- Pointer drag.
- Previous/next buttons.
- Keyboard arrow navigation.
- Native swipe on touch devices.
- CSS scroll snap.
- Progress indicator.
- No page-scroll hijacking.

### 6.8 Festival section

Show that this is more than a race:

- Finish-line celebration.
- Liquid Youth/Running Festival relationship if current.
- Music, food, community, and sponsor activations.
- Use energetic photography or short video.
- Avoid unsupported promises.

### 6.9 Results and registration conversion band

Provide direct pathways:

- Register Now.
- View Results.
- Race Photos.
- Plan Race Weekend.

Use clear CTA priority; not every action should look primary.

### 6.10 Sponsor showcase

Use tiers:

1. Presenting/title partner.
2. Official medical partner.
3. Supporting sponsors.

Presentation:

- Primary partners receive static, spacious placement.
- Supporting logos may use a slow marquee.
- Normalize optical logo height.
- Pause movement on hover/focus.
- Static grid under reduced motion.
- Never show missing-image labels or empty frames.

### 6.11 Conversion footer

- Strong final registration message.
- Event date and location.
- Registration CTA.
- Navigation groups.
- Contact and social links.
- Sponsor lockup.
- Current copyright year.
- Newsletter only if actually supported.

## 7. Internal-page system

Retain the routes and content families documented in `frontend.md`, but apply the new visual system.

### Required page families

- Race landing page.
- Schedule.
- 13.1.
- Relay.
- 10K and any confirmed additional distance.
- Registration.
- Registration policies.
- Results & Photos.
- Resources landing page.
- Training.
- Travel.
- Parking & Directions.
- Spectator Info.
- Partners landing page.
- Charities.
- Groups.
- Sponsors.
- Volunteer.
- FAQs/Contact.

### Interior hero

- Shorter than the homepage hero.
- 45–65 `svh` depending on page.
- Strong page-specific photography.
- Oversized page title.
- Short subtitle.
- Optional small motion or parallax.
- Breadcrumbs where useful.
- No generic translucent gray rectangle copied from the old site.

### Long-form content

- Readable measure of roughly 65–75 characters.
- Strong heading hierarchy.
- Content sections use sand, white, light gray, navy, or photography as deliberate scenes.
- Avoid repetitive alternating bands without visual purpose.
- Use callout cards, timelines, icon rows, map panels, and accordions where they improve comprehension.

### FAQ

- Use accessible accordion groups.
- Questions remain discoverable and printable.
- Open/close animation is short.
- Deep-linking to a question is preferred.
- Search/filter may be added only if content volume justifies it.

### Maps

- Responsive aspect-ratio container.
- Accessible external-map fallback.
- Do not block initial rendering with a heavy map embed.
- Load interactive map on demand or near viewport.

## 8. Navigation system

### Closed header

- Minimal logo + Menu.
- Register CTA may remain visible.
- Clear contrast over all backgrounds.

### Full-screen menu

Group links instead of presenting one long unstructured list:

- Race:
  - Overview.
  - Schedule.
  - 13.1.
  - Relay.
  - 10K/5K.
- Plan Your Weekend:
  - Training.
  - Travel.
  - Parking.
  - Spectator Info.
- Results & Photos.
- Get Involved:
  - Volunteer.
  - Groups.
  - Charities.
- Partners.
- FAQs/Contact.

Menu behavior:

- Full viewport.
- Large readable links.
- Approximately 350–500 ms reveal.
- Escape closes.
- Focus is trapped while open.
- Focus returns to trigger when closed.
- Background page cannot scroll while open.
- Current route is identified.
- Register is visually dominant.

## 9. Component architecture

```text
AppShell
├── BrandLoader
├── EventTicker
├── SiteHeader
│   ├── BrandLockup
│   ├── HeaderRegisterCTA
│   ├── MenuTrigger
│   └── FullScreenMenu
├── Main
│   ├── MediaHero | InteriorHero
│   ├── RaceCountdown
│   ├── EditorialIntro
│   ├── StoryScroller
│   │   ├── StickyMedia
│   │   └── StorySteps
│   ├── DistanceRail
│   │   ├── DistanceCard
│   │   ├── RailControls
│   │   └── RailProgress
│   ├── FestivalHighlight
│   ├── ContentSection
│   ├── CTAGroup
│   ├── FAQAccordion
│   ├── ResponsiveMap
│   └── SponsorShowcase
│       ├── PartnerTier
│       └── SponsorMarquee
├── FloatingContactButton
└── ConversionFooter
```

Shared services:

```text
MotionProvider
├── reducedMotion
├── viewportCategory
├── intersectionObservers
└── animationTokens

MediaController
├── visibility
├── autoplayEligibility
├── pauseOffscreen
└── posterFallback
```

## 10. Content architecture

Use structured data rather than embedding content directly in page components.

### Page

- `slug`
- `title`
- `navigationGroup`
- `seo`
- `hero`
- `sections`

### Hero

- `variant`
- `video`
- `poster`
- `desktopImage`
- `mobileImage`
- `imageAlt`
- `focalPointDesktop`
- `focalPointMobile`
- `eyebrow`
- `title`
- `subtitle`
- `actions`

### Story step

- `id`
- `title`
- `body`
- `media`
- `mediaAlt`
- `accent`

### Distance

- `name`
- `shortName`
- `description`
- `startTime`
- `price`
- `image`
- `registrationUrl`
- `detailsUrl`
- `active`

### Sponsor

- `name`
- `logo`
- `alt`
- `url`
- `tier`
- `active`

### FAQ

- `category`
- `question`
- `answer`
- `links`

## 11. Motion rules

Motion must feel intentional, not like a template.

### Allowed layers

Ambient:

- Hero video.
- Event ticker.
- Supporting sponsor marquee.

Scroll:

- Headline reveals.
- Small image parallax.
- Sticky story progression.
- Distance-rail progress.
- Controlled color/background transitions.

Interaction:

- Menu.
- Buttons.
- Cards.
- Slider controls.
- Accordion.

### Timing tokens

- Micro interaction: 160–240 ms.
- Menu: 350–500 ms.
- Section reveal: 600–900 ms.
- Editorial reveal: 700–1,000 ms.
- Media crossfade: 600–1,200 ms.
- Ambient marquee: approximately 20–45 seconds per loop.

### Easing tokens

- Standard: `cubic-bezier(.22, 1, .36, 1)`.
- Emphasized: `cubic-bezier(.16, 1, .3, 1)`.
- Menu slide: `cubic-bezier(.87, 0, .13, 1)`.

### Prohibited behavior

- No scroll-jacking.
- No animation that hides essential content indefinitely.
- No required horizontal wheel gesture.
- No more than one dominant scroll effect per viewport.
- No long stagger sequence that makes users wait.
- No constant motion behind long reading sections.
- No animation without a reduced-motion path.
- No unnecessary animation library for basic CSS effects.

## 12. Responsive rules

Design three intentional modes:

The breakpoints below are the implementation standard. Different ranges mentioned in `frontend.md` or `idea.md` describe their respective references and must not override this section.

### Desktop: above approximately 1000 px

- Full cinematic hero.
- Sticky story scroller.
- Large horizontal distance rail.
- Full typographic scale.
- Menu remains compact when closed.

### Tablet: approximately 751–1000 px

- Reduced hero height and type.
- Simplified sticky behavior or stacked story sequence.
- Distance rail remains horizontally scrollable.
- Comfortable 24–32 px gutters.

### Mobile: approximately 320–750 px

- Hero uses separate crop/poster.
- Header is compact.
- Loader mark scales without clipping.
- Story sections stack.
- Distance cards use native swipe.
- CTA controls may become full width.
- Sponsor marquee becomes static under constrained conditions.
- Maps and video maintain defined aspect ratios.
- No content is covered by the floating contact button.

Verify at 1440, 1024, 768, 390, and 320 px.

## 13. Accessibility requirements

- Semantic landmarks.
- Skip-to-content link.
- One `h1` per page.
- Logical heading order.
- Keyboard-accessible menu, rail, accordion, and maps.
- Visible focus states.
- Minimum 44×44 px touch targets.
- Sufficient color and media-overlay contrast.
- Descriptive image alternative text.
- Empty alt text for decorative media.
- No important text baked into images or video.
- Reduced-motion support.
- Captions for any video with meaningful speech.
- Slider position communicated accessibly without excessive announcements.
- Menu traps and restores focus.
- Loader never prevents screen-reader access indefinitely.
- Links are not distinguished by color alone.

## 14. Performance requirements

- Use AVIF/WebP images with responsive `srcset`.
- Provide intrinsic dimensions/aspect ratios.
- Optimize hero video and use a poster.
- Pause offscreen videos.
- Defer below-the-fold media.
- Load maps on demand or near viewport.
- Use CSS for simple motion.
- Import scroll-animation code only where used.
- Avoid generated-framework bloat.

Provisional targets:

- Largest Contentful Paint below 2.5 seconds on representative mobile.
- Cumulative Layout Shift below 0.1.
- Initial compressed JavaScript under approximately 180 KB where practical.
- Initial poster/critical image under approximately 300 KB.
- Hero video target under 6–8 MB.
- No loader delay beyond its maximum timeout.

## 15. Plugin and tool usage

Use available Codex skills/plugins when they materially improve the product:

- Use image generation only for original supportive visual assets, textures, or concept imagery—not to imitate copyrighted Shamrock creative.
- Use browser testing for responsive, interactive, keyboard, animation, and visual QA when accessible.
- Use visualization tooling only when it clarifies interaction or architecture.
- Use website building/hosting tools when the project is ready for implementation and deployment.
- Prefer original brand assets, licensed event photography, and provided sponsor logos over generated replacements.

Any generated visual must:

- Fit the Fort Lauderdale palette.
- Avoid fake sponsor branding.
- Avoid misleading depictions of the actual race route.
- Be clearly replaceable with approved production photography.

## 16. Quality gates

Before calling a page complete:

- Compare it to the intended visual reference at desktop and mobile widths.
- Verify loader behavior, session behavior, timeout, and reduced motion.
- Verify header contrast over hero and scrolled content.
- Verify menu keyboard behavior and focus restoration.
- Verify hero poster and blocked-video fallback.
- Verify ticker pause and reduced-motion fallback.
- Verify sticky section releases correctly.
- Verify distance rail with mouse, touch, buttons, and keyboard.
- Verify there is no accidental horizontal overflow.
- Verify sponsor logos load without distortion or broken placeholders.
- Verify content dates and details are current.
- Verify pages with little content do not produce arbitrary empty dark bands.
- Run accessibility checks.
- Run performance checks.
- Test Safari/iOS autoplay behavior.
- Test slow network and CPU conditions.

### Definition of done

A feature is complete only when:

- Approved behavior and content are implemented.
- Desktop and mobile layouts are verified.
- Keyboard behavior is verified.
- Reduced-motion behavior is verified when motion is present.
- Loading, empty, error, and media-failure states are handled.
- Automated tests appropriate to the risk pass.
- No unresolved `[TBD]` value is presented as real content.
- Relevant documentation and the decision log are updated.
- The result can be reviewed without relying on undocumented local setup.

A page is not complete merely because it visually resembles a reference screenshot.

## 17. Content issues that must be resolved

Do not publish until these are confirmed:

- Canonical event year and date.
- Active race distances.
- Registration provider and URLs.
- Start times and race locations.
- Results and photo providers.
- Sponsor tiers and current logo files.
- Official brand fonts and colors.
- Approved hero video/photography.
- Volunteer and contact emails.
- Social URLs.
- Refund/change policies.
- Whether historic results remain on the primary site.

## 18. Recommended implementation sequence

1. Confirm content, assets, and routes.
2. Establish tokens and typography.
3. Build the semantic static homepage without animation.
4. Build the responsive header and full-screen menu.
5. Implement the yellow `13.1` loader.
6. Optimize and integrate hero video/poster.
7. Add ticker and countdown.
8. Build the distance rail using native scroll snap.
9. Build the story sequence as a normal stack.
10. Enhance the story sequence into a desktop sticky experience.
11. Add festival and sponsor motion.
12. Build shared interior-page system.
13. Migrate all content families from `frontend.md`.
14. Add reduced-motion and media-failure paths.
15. Complete responsive, accessibility, performance, and visual QA.

## 19. Final decision standard

When making a design or engineering choice, ask:

1. Does this feel unmistakably Fort Lauderdale?
2. Does it help a runner understand, anticipate, or join the event?
3. Is the movement purposeful?
4. Does it still work without animation or video?
5. Can this be maintained as a reusable component?
6. Does it improve the experience without copying the Shamrock site?

If the answer is not clearly yes, simplify or redesign it.
