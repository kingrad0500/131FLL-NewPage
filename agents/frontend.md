# Fort Lauderdale 13.1 — Frontend Technical Design Reference

## 1. Purpose and evidence

This document inventories the visible frontend of the Fort Lauderdale 13.1 website for a future rebuild. It is based on 21 supplied full-page desktop screenshots captured on July 24, 2026. It covers visual structure, reusable components, page families, content patterns, imagery, typography, colors, and likely responsive behavior.

This is a visual audit, not a source-code audit. Exact font files, CSS values, breakpoints, hover states, animation timing, carousel behavior, URLs, and accessibility markup must be confirmed during implementation. Approximate values below are reconstruction targets.

## 2. Overall visual character

- Event-focused, photographic, energetic, and sponsor-forward.
- Wide desktop layout with full-bleed hero photography and centered content columns.
- Strong visual repetition across all interior pages.
- Mostly neutral interface: white, pale patterned white, light gray, charcoal, and dark gray.
- Brand color accents are primarily navy and bright yellow; inline links sometimes appear orange.
- Typography is a condensed/compact sans-serif style, generally uppercase for navigation and headings.
- Dense informational pages rely on alternating white and light-gray horizontal content bands.

## 3. Global page anatomy

Most interior pages use this sequence:

1. Utility bar
2. Main header with logo, navigation, and search
3. Full-width photographic hero
4. Translucent title/subtitle panel centered over the hero
5. Main content area with a centered maximum-width container
6. Alternating white/patterned-white and pale-gray sections
7. Floating contact/email control on the right edge
8. Deep charcoal pre-footer band
9. Footer containing logo, copyright, and repeated navigation

The homepage is a visual exception: it uses a large promotional composite hero and sponsor/registration content instead of the standard interior-page title hero.

## 4. Global components

### 4.1 Utility bar

- Full viewport width.
- Approximate height: 28–34 px.
- Background: medium/dark gray.
- Centered inner container aligned with the header content.
- Left-aligned tagline: “Experience Fort Lauderdale in a whole new way! Run FTL 13.1”.
- Right-aligned social icons: Facebook and Twitter/X-style bird.
- Social icons use the bright yellow brand accent.
- Text is small, light gray/white, regular weight.

### 4.2 Main header

- White background.
- Desktop height is approximately 105–125 px.
- Centered maximum-width inner container, visually around 1,100–1,200 px.
- Event/sponsor lockup on the left:
  - 13.1 shield/ribbon.
  - Liquid Youth Fort Lauderdale event wordmark.
  - Baptist Health endorsement below.
- Primary navigation is right-aligned and vertically centered:
  - Home
  - Race
  - Registration
  - Results & Photos
  - Resources
  - Partners
  - Volunteer
  - Contact Us
  - Search icon
- Navigation styling:
  - Uppercase.
  - Compact sans serif.
  - Dark gray.
  - Small size, approximately 12–14 px in the screenshots.
  - Active item receives a thin yellow underline.
- The screenshots do not show dropdown menus, but category pages imply dropdowns may exist for Race, Registration, Resources, and Partners.

### 4.3 Standard interior hero

- Full viewport width; fixed visual height near 300–400 px depending on screenshot scale.
- Background image uses an event/running photograph with a wide cinematic crop.
- Likely `background-size: cover` and centered or page-specific focal positioning.
- A centered translucent charcoal title panel overlays the image.
- Panel composition:
  - Large uppercase white title, roughly 46–64 px desktop.
  - Thin yellow/orange divider line.
  - White subtitle, roughly 22–30 px desktop.
  - Dark gray background at approximately 55–70% opacity.
- A small outlined circular carousel/pagination indicator is visible near the hero’s upper-right edge on many pages. This suggests a slider or shared hero module, though only one slide is visible in screenshots.

### 4.4 Main content container

- Centered, approximately 960–1,120 px wide on desktop.
- Generous horizontal breathing room.
- Body text is dark gray with loose line height, approximately 1.5–1.7.
- Long paragraphs generally use a readable text measure rather than spanning the entire viewport.
- Section padding is commonly 40–70 px vertically.
- Content backgrounds alternate between:
  - White with a very faint repeating event-mark watermark.
  - Flat light gray.

### 4.5 Section heading with flanking rules

- Repeated on most pages.
- Uppercase, centered, dark gray heading.
- Thin horizontal lines extend to the left and right.
- Heading sits on the section’s background color.
- Used for headings including Schedule, 13.1, 10K, Packet Pickup, Registration Changes, Results, Training, Travel, Charities, and similar.
- Component should gracefully collapse on narrow screens by shortening or hiding the rules.

### 4.6 Buttons and links

Primary CTA:

- Rectangular.
- Bright yellow background.
- Dark navy/charcoal uppercase label.
- Wide letter spacing.
- Medium/large padding.
- Usually centered.
- Subtle bottom edge/shadow visible in some screenshots.

Text links:

- Orange to yellow-orange.
- No prominent underline in normal state.
- Some list links begin with a `>` glyph.

### 4.7 Floating contact control

- Fixed to the right viewport edge around the vertical midpoint or lower half.
- Square medium-gray button.
- White envelope icon.
- Appears on nearly every page.
- Some screenshots show it lower because of viewport/page capture position, supporting `position: fixed`.
- Rebuild should include an accessible name such as “Contact us”.

### 4.8 Footer

- A tall dark charcoal pre-footer/spacer band precedes the footer content on many pages.
- Footer itself is a slightly lighter charcoal.
- Centered inner container.
- Event logo appears left.
- Copyright text appears near center: “Copyright All Rights Reserved © 2017”.
- Repeated footer navigation appears along the lower portion:
  - Home, Race, Registration, Results & Photos, Resources, Partners, Volunteer, Contact Us.
- Footer text is small, muted light gray.
- Short pages still pin the footer visually near the bottom with generous dark space above it.

## 5. Design tokens (approximated from screenshots)

### 5.1 Color palette

| Token | Approximate value | Usage |
|---|---:|---|
| Brand navy | `#002B5C` to `#003466` | Logo, major brand graphics |
| Brand yellow | `#FFD200` to `#FFD500` | CTAs, active nav underline, social icons |
| Link orange | `#F39A16` to `#F5A000` | Inline links, chevrons |
| Utility gray | `#606060` to `#666666` | Top utility bar |
| Footer dark | `#3D4147` to `#42464C` | Pre-footer/footer |
| Hero overlay | `rgba(75,75,75,.62)` | Hero title panel |
| Body text | `#4A4A4A` to `#5A5A5A` | Paragraphs |
| Strong text | `#222222` to `#333333` | Bold labels and headings |
| Light section | `#EEEEEE` to `#F1F1F1` | Alternating content bands |
| Canvas | `#FFFFFF` | Header and content |
| Pattern | `#F7F7F7` to `#FAFAFA` | Very faint repeating background marks |

Exact values must be sampled from original brand assets before production.

### 5.2 Typography

Observed characteristics suggest a condensed or humanist sans-serif family similar to Open Sans Condensed for headings/navigation and a readable sans serif for body copy.

Recommended token structure:

- `font-family-heading`: condensed sans-serif with strong uppercase readability.
- `font-family-body`: clean sans-serif.
- `font-size-body-desktop`: 16–18 px.
- `line-height-body`: 1.55–1.7.
- `font-size-nav`: 12–14 px.
- `font-size-section-title`: 24–32 px.
- `font-size-hero-title`: 48–64 px.
- `font-size-hero-subtitle`: 22–30 px.
- Heading weight: 600–700.
- Body weight: 400.
- Navigation and CTA letter spacing: 0.04–0.14 em.

### 5.3 Spacing and layout

- Global content maximum width: approximately 1,100–1,200 px.
- Long-form text measure: approximately 850–1,000 px.
- Desktop side gutters: 24–40 px minimum.
- Section vertical padding: 40–70 px.
- Header logo width: approximately 230–290 px.
- Standard hero height: approximately 320–390 px.
- Border/rule thickness: 1 px.
- Most elements use square corners; rounded cards are not part of the visual language.

## 6. Page templates and visible content

### 6.1 Homepage

The homepage is promotion-led rather than using the standard interior hero.

Visible elements:

- Global utility bar and header.
- Large edge-to-edge composite promotional banner:
  - Multiple cutout runners.
  - Huge navy “FORT LAUDERDALE” background lettering.
  - Yellow/navy `13.1` mark.
  - Date label: “November 8th, 2026”.
  - Main announcement: “2026 REGISTRATION NOW OPEN”.
  - Yellow “REGISTER” CTA.
- Large sponsor/festival artwork immediately beneath:
  - Liquid Youth product imagery.
  - Liquid Youth logo.
  - Running Festival logo.
  - Baptist Health medical partner lockup.
- Wide yellow CTA bar: “2026 REGISTER NOW”.
- Thin yellow divider.
- Second wide yellow CTA bar: “2025 RACE RESULTS”.
- Small informational text block for event photos/Facebook delivery.
- Sponsor section:
  - Heading “EVENT SPONSORS”.
  - Liquid Youth and Baptist Health as primary logos.
  - Secondary sponsor logo grid including Visit Lauderdale, BID, and Dole.
  - Some missing/broken or text-placeholder images are visible.
  - Sponsorship inquiry copy/link.
- Global footer.

No conventional card carousel is visible. The hero may be a single promotional slide or a slider; screenshot evidence alone is inconclusive.

### 6.2 Race landing page

Hero:

- Crowded road race photo.
- Title: “RACE”.
- Subtitle: “Have some fun in the sun”.

Content:

- Introductory bold paragraph.
- Alternating category bands:
  - Schedule
  - 13.1
  - 10K
- Each category has a short description and orange child-page link.
- Standard footer.

### 6.3 Race schedule

Hero:

- Runners on a palm-lined beachfront road.
- Title: “SCHEDULE”.
- Subtitle: “From packet pickup to post-race party”.

Content:

- Centered event-day heading and location block.
- Bulleted schedule.
- Packet Pickup section in gray.
- Detailed pickup locations/times with bold labels.
- “In Your Registration Packet” list.
- “What to Know About Your Bib” list.
- “Chip Timing” text block.
- Strong alternation between white patterned and gray bands.

### 6.4 Race 13.1

Hero:

- Half-marathon runners with road traffic/police support.
- Title: “13.1”.
- Subtitle: “Welcome to the main event”.

Content:

- Course Map heading and small map thumbnail.
- Register and Receive section.
- Two-column area for Race Shirt and Finisher Medal; screenshot shows “ARTWORK COMING SOON!” placeholders.
- Benefit bullet list.
- Athletes in Wheelchairs section with paragraphs and orange links.

### 6.5 Relay

Hero:

- Runners along a palm-lined road.
- Title: “RELAY”.
- Subtitle: “Running is better with a friend”.

Content:

- Introductory explanatory paragraphs.
- Gray “Starting Locations” section.
- Structured subsections for team member 1, team member 2, and finish-together.
- Bulleted distance/start information.
- Important notes below.

### 6.6 10K

Hero:

- High-angle palm-lined beach road photo.
- Title: “10K”.
- Subtitle: “Experience the Fort Lauderdale finish”.

Content:

- Race description, venue, start time, and start location.
- “10K Course Map” embedded interactive map panel.
- “More Details” link.
- Register and Receive section.
- Large race-shirt artwork.
- Map module visibly contains map controls and should be treated as an embed/integration component.

### 6.7 Registration landing/details

Hero:

- Side-view runners next to the ocean.
- Title: “REGISTRATION”.
- Subtitle: “Snag your spot now”.

Content:

- Registration status sentence.
- Centered yellow “REGISTER NOW” CTA.
- Eligibility/age copy and email link.
- Large gray Registration Changes section.
- Subheadings: Distance Change, Refunds, Deferral.
- Bold uppercase deadline warning.

### 6.8 Registration refund

- Reuses the ocean-running registration hero.
- Title: “REGISTRATION REFUND”.
- Subtitle: “Learn about our refund program”.
- Very short content page with one uppercase no-refunds/no-deferrals statement.
- Large dark empty band before the footer due to limited content.

### 6.9 Results & Photos

Hero:

- Finishers/medal imagery.
- Title: “RESULTS & PHOTOS”.
- Subtitle: “The culmination of your hard work”.

Content:

- Current/recent year links.
- Large gray Results section containing a multi-year nested link archive.
- Clock Time vs. Chip Time explanatory section.
- Official Race Photos section with external provider link.
- Content is list-heavy; reconstruction should improve semantic hierarchy without changing visible information architecture.

### 6.10 Resources landing page

Hero:

- Dense starting-line crowd.
- Title: “RESOURCES”.
- Subtitle: “Everything you need for a successful race”.

Content:

- Intro paragraph.
- Alternating link bands:
  - Training
  - Travel
  - Parking and Directions
  - Spectator Info
- Each contains a sentence and orange CTA link.

### 6.11 Training

- Reuses dense starting-line crowd hero.
- Title: “TRAINING”.
- Subtitle: “Prepare to beat your best”.
- Introductory paragraph.
- Gray Virtual Training section.
- Two textual offerings:
  - Run Plan
  - Run 1:1 Coaching
- Orange “Learn more” links.

### 6.12 Travel

- Reuses dense starting-line crowd hero.
- Title: “TRAVEL”.
- Subtitle: “Visit this sunny paradise”.
- Short two-paragraph content area.
- Sparse page followed by a large dark footer lead-in.

### 6.13 Parking & Directions

- Reuses dense starting-line crowd hero.
- Title: “PARKING & DIRECTIONS”.
- Subtitle: “Get where you need to be on race day”.
- Race-Day Parking heading with flanking rules.
- Intro copy, emphasized carpool recommendation, and bulleted parking locations.

### 6.14 Spectator Info

Hero:

- Start-line runners with raised hands.
- Title: “SPECTATOR INFO”.
- Subtitle: “Cheer on your favorite runners”.

Content:

- Two explanatory paragraphs.
- Large course-map image centered within the content container.

### 6.15 Partners landing page

Hero:

- Women running near a finish area.
- Title: “PARTNERS”.
- Subtitle: “Because racing is better with friends”.

Content:

- Intro paragraph.
- Alternating bands linking to:
  - Charities
  - Groups
  - Sponsors

### 6.16 Charities

- Reuses partners hero.
- Title: “CHARITIES”.
- Subtitle: “Run for a cause”.
- Introductory copy and contact email.
- “2020 Charities” heading.
- Partner entries with name, external-link CTA, descriptive copy, and logo.
- At least Cure SMA and HELP are visible.

### 6.17 Groups

- Reuses partners hero.
- Title: “GROUPS”.
- Subtitle: “Run with your team”.
- Intro copy, group partner application CTA, and contact email.
- “2024 Groups” logo grid.
- Visible logos include Fort Lauderdale Triathletes, GoRun, TRIBE, and World Fuel Services.
- Several bordered empty placeholders indicate missing/unloaded logos; new implementation should not render empty frames.

### 6.18 Sponsors

Hero:

- Post-race/event-village crowd with tents.
- Title: “SPONSORS”.
- Subtitle: “The race wouldn’t be possible without them”.

Content:

- Intro sentence.
- Large “TITLE SPONSOR & OFFICIAL MEDICAL PROVIDER” heading.
- Large Liquid Youth and Baptist Health logos.
- Secondary sponsor logo row.
- Some missing sponsor images appear as text placeholders.
- Sponsorship inquiry, group partner application link, and contact email.

### 6.19 Volunteer

Hero:

- Large group of volunteers in blue shirts.
- Title: “VOLUNTEER”.
- Subtitle: “Make a difference with our events family”.

Content:

- Several paragraphs explaining volunteer participation.
- Hashtag mention.
- Coordinator contact information with orange email links.
- Sparse page with a large dark footer lead-in.

### 6.20 Contact Us / FAQs

Hero:

- Runners approaching/at finish area.
- Title: “FAQ’S”.
- Subtitle: “Answers to all of your pressing questions”.

Content:

- Long static FAQ document, not an accordion in the screenshot.
- Section heading groups with flanking rules:
  - Race Information
  - Registration
  - Packet Pickup
  - Results and Awards
- Each question is bold, followed by a normal-weight answer.
- Inline orange links.
- Alternating white patterned and gray bands separate question groups.

## 7. Shared image inventory

Image families visible across the screenshots:

- Master event/logo lockup used in header and footer.
- Homepage promotional composite with runner cutouts and oversized typography.
- Race hero: dense roadway runners.
- Schedule hero: beachfront road runners.
- 13.1 hero: race pack with police/traffic context.
- Relay hero: palm-lined road pack.
- 10K hero: elevated beach-road view.
- Registration hero: side-view oceanfront runners.
- Results hero: medal/finish celebration.
- Resources hero: dense start-line crowd.
- Spectator hero: raised-hands start-line crowd.
- Partners hero: women runners/finish area.
- Sponsors hero: event village and tents.
- Volunteer hero: blue-shirt volunteer group.
- FAQ hero: finish-line runners.
- Course map thumbnails/static maps.
- Embedded MapMyRun-style map.
- Shirt artwork.
- Sponsor, charity, and running-group logos.
- Subtle repeating white background pattern based on event numerals/marks.

All images should be cataloged with:

- Stable descriptive filename.
- Page usage.
- Desktop focal point.
- Mobile focal point.
- Alternative text.
- Intrinsic dimensions.
- Copyright/source status.

## 8. Responsive behavior to implement

Only desktop screenshots were supplied. The following is a recommended responsive reconstruction, not observed behavior.

### Large desktop: 1200 px and above

- Full horizontal navigation.
- Header logo and nav share one row.
- Heroes remain 340–420 px high.
- Content width capped near 1,100–1,200 px.
- Two-column content retained where present.

### Tablet: approximately 768–1199 px

- Reduce header/logo and nav spacing.
- Replace nav with a menu button before links collide.
- Heroes around 280–340 px.
- Reduce title sizes.
- Keep content gutters at 24–32 px.
- Logo grids use two or three columns.

### Mobile: below approximately 768 px

- Utility message may wrap or hide social icons if necessary.
- Header becomes logo + menu button.
- Navigation opens in an accessible drawer or disclosure panel.
- Hero imagery uses deliberate mobile crop/focal positions.
- Overlay title panel becomes nearly full width with smaller type.
- Section rules shorten or disappear.
- All multi-column layouts stack.
- CTA buttons become comfortably tappable and may become full width.
- Sponsor/group logo grids collapse to one or two columns.
- Embedded maps use a responsive 16:9 or controlled aspect-ratio wrapper.
- Floating email button must not cover text or other controls.
- Footer stacks logo, copyright, and navigation.

Recommended verification widths: 1440, 1024, 768, 390, and 320 px.

## 9. Interaction model

Observed or strongly implied:

- Primary navigation links.
- Category dropdowns or child-page routing.
- Search icon/action.
- Hero slider indicator.
- Registration and results CTAs.
- Inline links and mailto links.
- Sponsor/logo links.
- Embedded route map controls.
- Floating contact/email button.
- Social links.

Recommended states for every interactive element:

- Default, hover, focus-visible, active, and disabled where relevant.
- Active navigation underline in brand yellow.
- High-contrast keyboard focus ring distinct from the active underline.
- External links should be identifiable to assistive technology.

## 10. Accessibility requirements for the rebuild

- Use semantic landmarks: header, nav, main, sections, and footer.
- One page-level `h1`; preserve logical heading order.
- Ensure hero text has sufficient contrast over every crop.
- Do not bake important text into hero images.
- Provide meaningful alt text for informative photography and logos; use empty alt text for decorative images.
- Label search, social, menu, carousel, map, and floating email controls.
- Support keyboard navigation for menus, sliders, and maps.
- Respect reduced-motion preferences.
- Ensure minimum 44×44 px touch targets on small screens.
- Avoid using orange/yellow alone to convey link state.
- Repair or suppress missing sponsor/group images rather than showing empty frames or raw alt-text placeholders.
- Convert FAQ content to semantic question/answer groups; an accordion is optional, but if used it must be keyboard accessible and progressively enhanced.

## 11. Content and quality issues visible in the reference

- Dates span multiple years (2023, 2024, 2025, and 2026).
- Copyright remains 2017.
- Some sponsor images are missing and display text placeholders.
- Group page contains empty bordered image boxes.
- Several pages repeat age/registration copy that may be contextually incorrect.
- Registration screenshots show different wording and deadlines.
- “FAQ’S” should normally be “FAQs”.
- Some content lines are very long on wide screens.
- Short pages create disproportionately large dark empty areas.
- Very small navigation/footer text may fail comfortable readability.
- Hero titles and subtitles appear embedded in a slider-like pattern even when a page has one hero.

These should be treated as reference-site issues, not requirements to reproduce.

## 12. Recommended component architecture

```text
AppShell
├── UtilityBar
├── SiteHeader
│   ├── BrandLockup
│   ├── PrimaryNavigation
│   ├── MobileMenu
│   └── SiteSearch
├── Main
│   ├── HomePromoHero | InteriorHero
│   ├── ContentSection
│   │   ├── RuledSectionHeading
│   │   ├── RichText
│   │   ├── CTAButton
│   │   ├── LinkList
│   │   ├── LogoGrid
│   │   ├── InfoColumns
│   │   ├── FAQGroup
│   │   └── ResponsiveMap
│   └── SponsorShowcase
├── FloatingContactButton
└── SiteFooter
```

Recommended data-driven fields:

- Hero: image, mobile image, focal position, title, subtitle, overlay width.
- Content section: theme (`patterned` or `gray`), heading, ruled heading flag, body blocks.
- CTA: label, URL, visual priority, external flag.
- Logo item: image, alt text, URL, sponsor tier.
- FAQ item: question, answer, related links.
- Route map: embed URL or image, accessible fallback link.

## 13. Acceptance criteria for visual reconstruction

- Header, utility bar, hero, content bands, floating contact button, and footer remain consistent across all routes.
- Page-specific hero titles, subtitles, and images match the inventory.
- Active navigation state appears correctly for every page family.
- Content does not exceed a readable line length.
- All supplied content patterns can be represented without one-off layout hacks.
- No missing images, raw alt text, or empty logo frames appear.
- Images preserve relevant subjects at desktop and mobile widths.
- CTAs and links follow one consistent token system.
- Desktop screenshots can be recreated closely at comparable viewport widths.
- Pages pass keyboard-only navigation and automated accessibility checks.
- Layout is stable at 1440, 1024, 768, 390, and 320 px.

## 14. Open questions for the product owner

- Is the goal a close visual restoration or a modern redesign using the same information architecture?
- Which event year and race date should be canonical?
- Which race distances remain active: 13.1, relay, 10K, and/or 5K?
- Should the hero module remain a carousel?
- What should search cover?
- Which sponsor, charity, and group logos are current and licensed?
- Should FAQs remain static or become collapsible?
- Which registration/results providers and map embeds will be integrated?
- Should legacy results remain on the main site or move to an archive?
- Are mobile screenshots or original brand/font files available?

