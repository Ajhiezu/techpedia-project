# Techpedia: Dari kebutuhan ke sistem

## Brief
Redesign the active, buildless HTML/CSS/JavaScript website. Techpedia builds custom business software, websites, integrations and desktop applications. The audience is business owners and agency collaborators. Primary action: discuss a real project. Indonesian copy, existing contacts, original project images and honest client/demo labels remain the source of truth. No invented results, clients or prices. Existing uncommitted work is preserved.

## Concepts considered
Scores: originality / fit / feasibility / portability (lower portability is better).

| Concept | Anchor and signature | Emotion and screenshot | Scores |
| --- | --- | --- | --- |
| Dari kebutuhan ke sistem | Techpedia's actual projects turn library, commerce, hotel and restaurant workflows into systems. A project selector connects each business need to its original application screen. | Clarity and capability; oversized statement next to an application on a cyan drafting surface. | 4 / 5 / 5 / 2 |
| Ensiklopedia aplikasi | The "pedia" name becomes a browsable application index with subject annotations. | Discovery; a typographic index with an open project plate. | 4 / 4 / 5 / 2 |
| Satu meja kerja | The consultation-to-delivery process becomes a common workbench of briefs and deliverables. | Collaboration; overlapping documents and application windows. | 3 / 4 / 3 / 4 |

Pick the first: original applications provide evidence for the promise, immediately and throughout the journey.

Idea: Real business needs become useful, inspectable software.
Metaphor: A system drawing, from an annotated need to a working application.
Signature: Select a business context and the need, project name and actual application screenshot update together.
Emotion: Clear, direct, capable.
Motion verb: Align and connect.
Screenshot: Oversized "Kebutuhan nyata. Sistem yang tepat." beside a cyan application study.

## System
Palette: the owner's supplied Coolors Digital Blue ramp, extended with explicit cyan and purple supporting colors after feedback that the site looked overwhelmingly white. White #FFFFFF remains the content surface; blue #003D99 forms strong introduction fields, cyan #ECFEFF forms contextual sections, and purple #6D28D9 forms the closing invitation. The detailed hierarchy is documented below. Shared tokens live in `frontend/assets/theme-tokens.css`; final section composition is authored in `color-composition.css`. The header, footer, dropdowns and mobile navigation use white surfaces.
Type: existing Inter Tight for display and Inter for body (Google Fonts); local Arial fallback. Display tracking -0.065em, body 16px minimum, labels 12–14px. No font required for the layout to work.
Grid: 12 columns, 1320px maximum, fluid 24–60px gutters. Hero 7/5 split, project study full width, service index, sticky process, staggered project wall, compact package matrix, oversized final CTA.
Shape: 2px for technical plates; pills reserved for controls and actions.
Motion: GSAP power3.out, 0.35s interactions and 0.8s entrance. Lenis desktop scroll on GSAP's ticker, native scrolling on touch and reduced motion. No loader. No autoplay or idle motion: this is a business service website; project selection, hover, focus and transitions carry its character. All content visible before JS and under reduced motion.

## Composition
```
Header    [brand]             [navigation]          [contact]
Hero      [studio label                 ] [context note    ]
          [Kebutuhan nyata.             ] [project count   ]
          [Sistem yang tepat.          ↗] [                ]
          [description + actions       ] [capability tabs ]
Study     [business context selector] [need -> real screen]
Work      [title + intro]   [large project] [smaller project]
Services  [section title]   [six ruled service rows         ]
Process   [sticky application study] [six numbered stages  ]
Packages  [intro]          [scope / contents / quote rows   ]
FAQ       [intro]          [expandable questions            ]
About     [statement]      [specific existing practice      ]
Finale    [Punya kebutuhan? / Kita susun sistemnya.         ]
Footer    [links and contact] [large wordmark               ]
```

Genericness review: removed centered three-line agency slogan, decorative ambient blobs, repeated centered headings, fake code and repeated equal cards. Actual project imagery and business context lead the composition. No new imagery or fabricated content required.

## Shared color hierarchy

The owner supplied `Tailwind Colors - Coolors.html`, saved from the Digital Blue palette. The complete ramp is transcribed verbatim into `--brand-50` through `--brand-950`: #E5F0FF, #CCE0FF, #99C2FF, #66A3FF, #3385FF, #0066FF, #0052CC, #003D99, #002966, #001433, #000E24. Later feedback explicitly requests visible cyan and purple in addition to blue, so cyan #06B6D4 and purple #7C3AED families supplement this reference.

Color is carried by whole sections rather than only small controls. Home and work introductions use blue 700 with white headings and cyan 100 highlights. The home context selector sits on cyan 50 and selects in blue 500. Internal-page introductions use a broad light-blue/cyan field. The workflow chapter uses purple 50. Every closing invitation uses purple 700 with white text and a white button; filled blue is reserved for regular primary actions. Project screenshots stay unchanged, with uniform blue 50 frames. Featured badges use purple, and demo badges cyan. White separates these fields and remains the reading surface. Error, success and warning retain their semantic colors. The existing static HTML/CSS stack is retained because this is a visual composition revision, not a framework migration. Stillness at rest remains intentional; existing interactive feedback and reduced-motion support are preserved.

### Earlier direction: quiet application gallery

This earlier composition decision remains useful for neutral framing, but its cyan/purple color values have been superseded by the supplied Digital Blue reference above. This is a color refinement of the existing static HTML/CSS site, not a framework or layout replacement. Existing local Inter / Inter Tight fonts, real screenshots, routes and behavior remain the source of truth.

Three directions considered (originality / fit / feasibility / portability):

- White application gallery: neutral framing lets the real library, commerce, hotel and restaurant screenshots supply variety; cyan actions and one purple badge. 4 / 5 / 5 / 2.
- Cyan drafting board: broad cyan fields connect the operational systems. 3 / 3 / 5 / 3; rejected because the owner finds the current color distribution distracting.
- Purple studio identity: purple actions and cyan supporting surfaces. 3 / 2 / 5 / 4; rejected because it gives the accent equal visual importance to the secondary color.

Selected: white application gallery. Idea: the work supplies the color, while the interface supplies clear decisions. Metaphor: a quiet gallery of working applications. Signature: the existing context selector connects a business need to its actual screen. Emotion: calm and clear. Motion verb: align. Screenshot: neutral project frames, dark typography and one cyan contact action. No idle animation is added for this color revision. Existing hover and keyboard feedback remain functional. The final accessory removed is alternating cyan/purple gallery frames.

Approximate visual intent: white and neutrals occupy almost the entire interface; cyan is confined to actions and selection; purple is a small, meaningful emphasis. This is a compositional rule, not a measured pixel percentage. Color in the project screenshots is original content and is preserved.

`frontend/assets/brand-theme.css` applies this hierarchy across the static site and is shared with the React frontend. `header.css` owns navigation styling. Both compile after the existing component color rules. The compatibility token `--primary` still names the cyan action color; `--brand-primary` names the dominant white brand surface.

## Delivery
Run `npm.cmd run build`, then `npm.cmd start` for http://localhost:8081. Production output is dist/. Existing Vercel configuration retained. Publishing is outside this local redesign request. Prices remain unapproved and hidden; project statuses and legal drafts retain existing qualifications.
