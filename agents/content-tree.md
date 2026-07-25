# Fort Lauderdale 13.1 — Content and Route Tree

## Purpose

This file defines the root branches of the website’s content. It was extracted from the saved homepage navigation and cross-checked with `frontend.md`.

It serves as:

- The starting sitemap.
- The route-planning reference.
- The content-migration checklist.
- The basis for desktop, mobile, footer, and full-screen menu navigation.

Archived links confirm historical structure only. Current content, URLs, sponsors, dates, and external services still require approval through `decisions.md`.

## Root route tree

```text
/
├── race/
│   ├── schedule/
│   ├── fort-lauderdale-13-1/
│   ├── relay/
│   └── 10k/                  Legacy label: “5K/10K”
├── registration/
│   ├── registration-refund/
│   └── registrations-changes-deferrals/
├── results-photos/
├── resources/
│   ├── training/
│   ├── travel/
│   ├── parking-directions/
│   └── spectator-info/
├── partners/
│   ├── charities/
│   ├── groups/
│   └── sponsors/
├── volunteer/
└── contact/
    └── faqs/
```

## Branch definitions

### `/` — Home

Purpose:

- Introduce the event emotionally.
- Communicate the date, location, and active distances.
- Drive registration.
- Route visitors to race information, results, resources, and partners.

Legacy homepage content confirmed in the saved HTML:

1. Global utility/social area.
2. Primary navigation.
3. Full-width promotional slider.
4. Event date.
5. Registration-open announcement.
6. Register CTA.
7. Medical-partner presentation.
8. Registration CTA band.
9. Race-results CTA band.
10. Race-photo information.
11. Event-sponsor section.
12. Sponsor inquiry.
13. Footer navigation and contact control.

Target homepage branches from `agents.md`:

```text
Home
├── Brand loader
├── Event ticker
├── Overlay header
├── Cinematic hero
├── Countdown
├── Editorial introduction
├── Fort Lauderdale story scroller
├── Distance rail
├── Festival highlight
├── Registration/results conversion band
├── Sponsor showcase
└── Conversion footer
```

### `/race/` — Race overview

Purpose:

- Explain the event and route experience.
- Introduce every active distance.
- Route runners to schedules and distance details.

Children:

- `/race/schedule/`
- `/race/fort-lauderdale-13-1/`
- `/race/relay/`
- `/race/10k/`

Target content:

- Race overview hero.
- Short route/event introduction.
- Active-distance cards.
- Schedule summary.
- Course highlights.
- Registration CTA.

### `/race/schedule/` — Schedule

Purpose:

- Provide the authoritative race-weekend timeline.

Target content:

- Event date and venue.
- Packet pickup.
- Race-day start times.
- Start/finish information.
- Festival timing.
- Registration-packet contents.
- Bib and timing-chip instructions.

All times and dates remain `[TBD]` until approved.

### `/race/fort-lauderdale-13-1/` — Half marathon

Purpose:

- Explain the main 13.1-mile event.

Target content:

- Distance hero.
- Course summary and map.
- Start time/location.
- Registration inclusions.
- Shirt and medal.
- Timing and awards.
- Accessibility/wheelchair policy.
- Registration CTA.

### `/race/relay/` — Relay

Purpose:

- Explain relay participation and team logistics.

Target content:

- Relay format.
- Team-member legs.
- Exchange area.
- Baton/timing instructions.
- Finish-together details.
- Transportation/parking note.
- Registration CTA.

### `/race/10k/` — 10K and/or 5K

Legacy navigation labels this route “5K/10K,” while the URL is `/race/10k/`.

Decision required:

- Confirm which distances are active.
- Decide whether 5K and 10K share one route or receive separate pages.
- Record the decision in `decisions.md`.

Target content:

- Active distance information.
- Start time/location.
- Course map.
- Registration inclusions.
- Shirt/medal.
- Registration CTA.

### `/registration/` — Registration

Purpose:

- Provide the primary registration pathway and eligibility information.

Children:

- `/registration/registration-refund/`
- `/registration/registrations-changes-deferrals/`

Target content:

- Registration status.
- Verified external registration link.
- Eligibility/age requirements.
- Pricing only when approved.
- Important deadlines.
- Links to policy pages.

### `/registration/registration-refund/` — Refund policy

Purpose:

- Publish the current approved refund policy.

Rules:

- Do not migrate historical wording without approval.
- Include policy effective date.
- Link back to registration.

### `/registration/registrations-changes-deferrals/` — Changes and deferrals

Purpose:

- Explain distance changes, transfers, deferrals, and deadlines.

Rules:

- Use current provider instructions.
- Use verified contact details.
- Include deadlines only when approved.

Recommended future slug:

`/registration/changes-deferrals/`

Preserve a redirect from the legacy misspelled/awkward URL if the slug changes.

### `/results-photos/` — Results and photos

Purpose:

- Give runners fast access to current and historical results and official photos.

Target content:

- Current results CTA.
- Current photo provider.
- Search instructions.
- Clock-time versus chip-time explanation.
- Historical result archive.
- External-provider disclosures.

### `/resources/` — Runner resources

Purpose:

- Help runners prepare for race weekend.

Children:

- `/resources/training/`
- `/resources/travel/`
- `/resources/parking-directions/`
- `/resources/spectator-info/`

Target landing content:

- Four visual resource cards.
- Short description and CTA for each.
- Registration and schedule links.

### `/resources/training/` — Training

Purpose:

- Provide approved training plans, coaching, and partner resources.

Target content:

- Training introduction.
- Training options.
- Training-plan links.
- Safety disclaimer where appropriate.

### `/resources/travel/` — Travel

Purpose:

- Help visitors plan their Fort Lauderdale stay.

Target content:

- Hotel information.
- Tourism/area guidance.
- Airport and local transport.
- Partner links.
- Race-weekend CTA.

### `/resources/parking-directions/` — Parking and directions

Purpose:

- Provide race-day arrival information.

Target content:

- Start/finish address.
- Parking locations.
- Road closures.
- Rideshare/transit guidance.
- Accessible parking.
- Map and external navigation link.

### `/resources/spectator-info/` — Spectator information

Purpose:

- Help spectators support runners safely.

Target content:

- Recommended viewing locations.
- Course map.
- Start/finish guidance.
- Road-access limitations.
- Festival access.
- Runner-tracking information if available.

### `/partners/` — Partners overview

Purpose:

- Explain partner programs and route users to current partner categories.

Children:

- `/partners/charities/`
- `/partners/groups/`
- `/partners/sponsors/`

Target landing content:

- Partner-program introduction.
- Charities card.
- Groups card.
- Sponsors card.
- Partnership inquiry CTA.

### `/partners/charities/` — Charities

Purpose:

- Present approved charity partners and participation information.

Target content:

- Charity-program explanation.
- Current charity profiles.
- Approved logos.
- External links.
- Contact/application CTA.

### `/partners/groups/` — Groups

Purpose:

- Present current running clubs, corporate teams, and group programs.

Target content:

- Group benefits.
- Application CTA.
- Current group-logo grid.
- Contact information.

### `/partners/sponsors/` — Sponsors

Purpose:

- Present current sponsors by tier.

Target hierarchy:

1. Presenting/title partner.
2. Official medical partner.
3. Supporting sponsors.
4. Sponsorship inquiry.

Only assets marked approved and current in `asset-manifest.md` may be published.

### `/volunteer/` — Volunteer

Purpose:

- Recruit and inform volunteers.

Target content:

- Volunteer impact story.
- Available roles.
- Shift/event details.
- Requirements.
- Signup CTA.
- Verified coordinator contact.

### `/contact/` — Contact

Purpose:

- Route questions to the correct event contact.

Child:

- `/contact/faqs/`

Target content:

- Contact categories.
- Verified email/form.
- Response expectations.
- FAQ CTA.

### `/contact/faqs/` — FAQs

Legacy label: “FAQ’s.”

Recommended visible label: “FAQs.”

Target categories:

- Race information.
- Registration.
- Packet pickup.
- Results and awards.
- Travel/parking.
- Accessibility.

Use accessible accordions with deep-linkable questions.

## Confirmed external integrations from the saved homepage

These links are historical references and require current verification:

| Purpose | Historical destination | Status |
|---|---|---|
| Registration | `https://runsignup.com/fortlauderdale131` | Verify current |
| 2025 results | `https://www.athlinks.com/event/375222/results/Event/1126959/Results` | Historical |
| Bib lookup/photo workflow | ChronoTrack confirmation URL | Historical; reassess workflow |
| Visit Lauderdale | `https://www.sunny.org/` | Verify current destination |

Do not hardcode these into the new application until approved.

## Navigation projections

### Primary/full-screen menu

```text
Home
Race
  Overview
  Schedule
  13.1
  Relay
  10K / 5K
Registration
Results & Photos
Plan Your Weekend
  Training
  Travel
  Parking & Directions
  Spectator Info
Get Involved
  Volunteer
  Groups
  Charities
Partners
FAQs / Contact
Register Now
```

### Footer

```text
Race
Registration
Results & Photos
Resources
Get Involved
Partners
Contact
Social
Legal
```

## MVP content branch

The minimum coherent launch tree is:

```text
/
├── race/
│   ├── schedule/
│   └── [active distance pages]
├── registration/
├── results-photos/
└── contact/
    └── faqs/
```

Do not show navigation links to unfinished or empty pages.

## Decisions required before route implementation

- Confirm MVP or full-release scope.
- Confirm active race distances.
- Decide whether 5K and 10K share a route.
- Confirm canonical event date and location.
- Confirm registration/results/photo providers.
- Confirm whether legacy results remain on-site.
- Confirm current resource and partner pages.
- Approve redirects for any renamed routes.

