# UI Style Guidelines — Techpedia Project

## 1. Foundation

This document applies the Phase 1 Design System to the approved Phase 2.1 visual direction. `DESIGN-TOKENS.md`, `COMPONENT-SPECIFICATION.md`, and `ACCESSIBILITY-GUIDELINES.md` remain the source of truth for underlying values, states, and accessibility requirements.

## 2. Header & Navigation

| Element | Style rule |
| --- | --- |
| Header surface | White, with a subtle bottom border after scroll if needed. |
| Logo area | Quiet, left aligned; do not crowd with strapline. |
| Navigation | Inter 14/20 medium; Dark Text default; Royal Blue active state. |
| Primary nav CTA | Royal Blue filled button: `Konsultasikan Kebutuhan Anda`. |
| Services access | Inline nav on desktop; disclosure/menu state clear; mobile uses labelled menu trigger. |
| Mobile header | Logo + menu trigger; preserve Contact path without forcing a full-width persistent button. |

## 3. Buttons & Links

| Variant | Visual treatment | Use |
| --- | --- | --- |
| Primary | Royal Blue fill, white label, 10 px radius, comfortable horizontal padding. | Main conversion action. |
| Secondary | White/light surface, Royal Blue border/label. | Supporting route within CTA group. |
| Tertiary | Text link with direction icon optional. | Low-emphasis navigation. |
| Destructive/system | Semantic token only, never brand primary. | System contexts such as error recovery. |

Hover may darken the Primary surface toward Deep Blue; focus always uses a visible ring. Do not use more than one Primary button in a local CTA group.

## 4. Cards & Surfaces

| Component | Style rule |
| --- | --- |
| Standard card | White surface, `border.default`, radius 10 px, padding 24–32 px, `shadow.sm` only when separation needs help. |
| Service card | Optional simple icon; H3; two-to-three line description; tertiary link at bottom. |
| Project card | Valid image/output at stable aspect ratio; category label; title; service detail. Do not use fictional project preview. |
| Blog card | Category label, H3, concise excerpt, valid metadata only. |
| CTA band | Light Background by default; Deep Blue variant only for a final high-emphasis moment with white text and validated contrast. |

Cards should be grouped by content need. A card grid is not a replacement for editorial layout.

## 5. Typography & Content Styling

- H1 has a clear max width and uses deliberate line breaks only where they preserve meaning.
- Intro copy uses `body.large`; standard copy uses `body`; labels and metadata use `body.small` or `caption` only when still readable.
- Use Dark Text for primary reading and Secondary Text for supporting context. Avoid low-opacity text.
- Eyebrows are optional. If used, they are short, descriptive, and not the only indicator of section meaning.
- Keep body measure comfortable; article reading columns use the narrow content container.

## 6. Section Layout

| Pattern | Composition | Use |
| --- | --- | --- |
| Hero | Eyebrow → H1 → intro → CTA group, paired with a purposeful visual on desktop. | Home and service pages. |
| Service grid | H2/intro → 3/2/1 card grid → route to service detail. | Home and Services. |
| Split section | Narrative/CTA plus diagram, product frame, or permitted image. | About, service explanation, Contact helper. |
| Process | Numbered steps, connected lightly on desktop, stacked on mobile. | Work Process and Our Process. |
| FAQ | Topic header + accordion group + contextual CTA. | FAQ and service detail. |
| CTA close | Short title, one-sentence value reminder, CTA group. | End of page. |

Alternate White and Light Background sections only when it clarifies grouping. Do not alternate mechanically on every section.

## 7. Form & Feedback Styling

- Labels sit above controls; inputs have white surface, clear border, 10 px radius, and 16 px body text.
- Focus border/ring is visible; error shows semantic error color plus text below the control.
- Helper copy explains purpose, not internal jargon. Privacy notice sits adjacent to the consent/submission moment.
- Loading preserves button width and replaces/augments label with status. Success moves to the documented confirmation state.

## 8. Iconography, Illustration & Image Usage

- Use one consistent outline icon family with rounded joins and approximately 2 px visual weight.
- Icons are supportive: pair them with labels and do not decorate every heading.
- Illustrations use modular geometry and sparse Royal Blue focus; they must clarify a concept.
- Images have purposeful crops, accessible alt text, and a stable aspect ratio. Use real/approved assets only.

## 9. Motion & Visual QA

| Area | Rule |
| --- | --- |
| Transitions | 150–250 ms; opacity, color, and small transform changes only. |
| Hover | Never causes content reflow or hides a primary action. |
| Scroll | Optional one-time subtle reveal; content remains available without animation. |
| Reduced motion | Use instant/near-instant state changes and no decorative reveal. |
| QA | Verify contrast, keyboard focus, long content, empty/error/loading/success states, 200% zoom, and 320 px viewport. |

## 10. Visual Consistency Checklist

- [ ] White + Light Background dominate; Royal Blue identifies action/emphasis.
- [ ] Heading/body use the approved font roles and scale.
- [ ] Components use documented tokens; no arbitrary color, radius, or spacing values.
- [ ] One Primary CTA per local CTA group.
- [ ] Cards, navigation, and forms retain their documented states.
- [ ] Visual assets are meaningful, valid, permitted, and not fabricated as proof.
- [ ] Mobile layout stacks cleanly with no horizontal overflow.
