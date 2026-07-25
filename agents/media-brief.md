# Fort Lauderdale 13.1 — Media Generation Brief

Every asset the build is currently missing, with the prompt and specification
needed to produce it. Written so it can be executed either by an agent driving
a generation tool or by a person working in a web UI.

Status: **executed 2026-07-25** via the Higgsfield MCP server (Soul 2.0,
~0.12 credits/image; ~4.7 credits total including rerolls and one 4k
upscale). All 21 stills produced, retouched, converted, and integrated —
see "Generated interim assets" in `agents/asset-manifest.md` for per-asset
notes and deviations. The optional hero video was **not** attempted: no
local ffmpeg to guarantee the <8 MB / silent spec, and the photo hero
degrades correctly. Scope approved 2026-07-24 — photorealistic, registered
as generated, release-blocking (DEC-011).

Prompt lesson recorded for future regens: this model treats negated nouns
("no bibs") as attractors when the scene implies a race. What works:
recast the scene so the prior disappears (training run, friends, from
behind, silhouette), describe clothing as "plain solid-colour, completely
blank fabric", and avoid the words "race", "finish", "corral" entirely.

## Ground rules

These apply to every prompt below.

1. **No text in frame.** `agents.md` forbids important text baked into images.
   No bibs with legible numbers, no banners, no signage, no watermarks.
2. **No sponsor branding.** No invented logos on shirts, arches, or barriers.
   Real sponsor marks are supplied separately and are legally controlled.
3. **No real route claims.** Coastal Florida character is the goal, not a
   reproduction of the actual course. Do not attempt recognisable landmarks
   that would assert "this is mile 7."
4. **Palette.** Navy `#001F45`/`#002B5C`, event yellow `#FFD200`, aqua
   `#19B8C4`, warm coral `#F47A4A`, sand `#F5F0E8`. Sunrise warmth over
   tropical-postcard saturation. Athletic, not touristic.
5. **Diverse, ordinary runners.** Range of ages, body types, paces and
   ethnicities. This is a community half marathon, not an elite field.
6. **Overlay safety.** The hero carries a navy gradient with white type across
   the lower third. Keep that region uncluttered and mid-to-dark in value.

## Not generatable — do not attempt

| Asset | Why |
|---|---|
| Course maps (per distance) | Factual route data. A synthetic map is actively misleading and could send a runner the wrong way. Must come from the organiser or a mapping provider. |
| Sponsor, charity, and running-group logos | Third-party trademarks. Must be supplied and permissioned. |
| The event lockup / reversed logo (DEC-010) | Brand asset. Must come from the organiser's designer. |

## Priority 1 — Homepage hero

The LCP element. Generate the poster first; the video only if the tool
supports it at acceptable quality and file size.

### `hero-poster-desktop`

- Destination: `assets/heroes/hero-desktop.avif` → `app/public/assets/heroes/`
- Ratio 16:9, minimum 2560×1440, delivered under 300 KB after conversion
- Focal point: `50% 50%`
- Content field: `homeHero.media.desktopImage` / `.poster`

> Wide cinematic photograph, early morning, a loose pack of distance runners
> moving along an oceanfront road in South Florida. Low golden sunrise light
> coming off the Atlantic on the left, long soft shadows across the asphalt.
> Palm trees lining the right edge. Shot on a long lens at f/2.8, slight
> motion blur in the legs, sharp on the lead runners. Warm highlights, deep
> navy-blue shadows in the sky. Cool teal ocean. Documentary sports
> photography, natural colour, no text, no logos, no signage.

### `hero-poster-mobile`

- Destination: `assets/heroes/hero-mobile.avif`
- Ratio 4:5, minimum 1200×1500
- Focal point: `50% 40%`
- Content field: `homeHero.media.mobileImage`

> Same scene and treatment as the desktop hero, recomposed vertically: one or
> two runners centred in the upper two-thirds, road and shadow filling the
> lower third, ocean visible behind. Keep the lower third simple enough for
> white type to sit over it.

### `hero-video` (optional)

- Destination: `assets/video/hero.mp4`
- 10–20 s, 1920×1080 or better, H.264, **under 6–8 MB**, no audio track
- Content field: `homeHero.media.video`

> Slow tracking shot alongside runners on an oceanfront road at sunrise.
> Gentle handheld motion, no cuts, no camera shake. Sun flaring off the water.
> Loopable — begin and end on similar framing. No text, no logos.

If the result exceeds ~8 MB after compression, drop it and ship the photo
hero. `MediaHero` already degrades correctly.

## Priority 2 — Story scroller (5 assets)

Ratio 3:2, minimum 1600×1067. Destination `assets/race/`.
Content field: `stories[].media` in `app/src/content/stories.ts`.

| id | Prompt |
|---|---|
| `oceanfront-miles` | Runners silhouetted against a bright Atlantic sunrise, ocean filling the background, warm rim light on shoulders. Wide shot, low sun, deep navy sky above the glow. |
| `las-olas-energy` | Dense crowd of spectators lining a palm-lined urban boulevard, clapping and cheering as runners pass in the foreground. Bright mid-morning light, motion blur on the runners, joyful faces sharp. No signage or banners. |
| `every-pace` | A mixed group of runners of visibly different ages, paces and body types sharing a wide road — one walking, one pushing hard. Warm daylight, shallow depth of field, candid and unposed. |
| `community` | Volunteers at a roadside aid station handing paper cups of water to passing runners, arms outstretched, water catching the light. Warm morning sun, candid documentary framing. Plain unbranded shirts. |
| `finish-line` | A runner crossing a finish line with both arms raised, eyes closed, exhausted and elated. Shallow depth of field, blurred crowd behind, warm backlight. No text or banners in frame. |

## Priority 3 — Distance cards (4 assets)

Ratio 4:3, minimum 1200×900. Destination `assets/race/`.
Content field: `distances[].image` in `app/src/content/distances.ts`.

Each should read as a distinct moment so the four cards do not look like one
photo shot four times.

| id | Prompt |
|---|---|
| `13-1` | A committed distance runner mid-stride on an open oceanfront road, early light, empty road ahead suggesting distance still to cover. Determined expression, lean athletic build. |
| `relay` | Two runners side by side on a coastal road, one clearly handing off to the other, both smiling. Warm daylight, sense of partnership. |
| `10k` | A small group of runners rounding a palm-lined bend, elevated three-quarter view showing the road curving toward the water. Bright morning. |
| `5k` | A parent and child running together in a friendly, uncrowded start-line moment. Warm, welcoming, casual clothing. Soft daylight. |

## Priority 4 — Festival

- Destination: `assets/festival/festival.avif`, ratio 4:3, minimum 1200×900
- Content field: `festival.image` in `app/src/content/home.ts`

> Post-race gathering on grass near a beach: people in running clothes with
> medals around their necks, sitting and standing in small groups, plain white
> event tents out of focus behind. Late morning sun, warm and relaxed. No
> branding, no signage, no legible text.

## Priority 5 — Interior heroes (MVP routes)

Ratio 21:9, minimum 2400×1029. Destination `assets/heroes/`. Shorter than the
homepage hero (45–65 svh), so composition should tolerate a heavy crop.

| Route | Direction |
|---|---|
| `/race` | Wide pack of runners filling a road, shot from a high angle |
| `/race/schedule` | Early-morning start corral, runners waiting, low light |
| `/race/13-1` | Long open coastal straight, few runners, sense of distance |
| `/race/relay` | Two runners together on the course |
| `/race/10k` | Palm-lined road curving toward the ocean |
| `/race/5k` | Friendly, mixed-ability group near a start line |
| `/registration` | Runners jogging beside the water, side view |
| `/results` | Medals and finishers, close and celebratory |
| `/faqs` | Runners approaching a finish area, mid-distance |

## Integration procedure

For each generated asset:

1. Save the original to the curated library under `assets/<category>/`.
   Never overwrite; that directory is the master.
2. Convert to AVIF (and WebP fallback) at the sizes above; copy the production
   version into `app/public/assets/<category>/`.
3. Reference it in content data with the `GENERATED()` marker, not a bare
   string:

   ```ts
   import { GENERATED } from "../lib/placeholder.ts";

   media: GENERATED(
     "/assets/race/oceanfront-miles.avif",
     "Story image — Oceanfront Miles",
   ),
   ```

   This keeps the asset rendering normally while holding the release gate
   shut. `npm run audit` will list it under "AI-generated assets".
4. Add a manifest row in `agents/asset-manifest.md` with status `generated`,
   the tool and date, and the prompt used.
5. Verify the crop at 1440, 768, and 390 px before accepting it.

## Replacement

Every asset here is a stand-in. When real photography arrives, swap the file
and drop the `GENERATED()` wrapper — no component changes. When the last
wrapper is gone, `npm run build:production` stops failing on this count.
