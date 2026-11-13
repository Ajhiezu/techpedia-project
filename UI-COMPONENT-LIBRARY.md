# UI Component Library — Phase 2.5

## Source of truth

This library extends, rather than replaces, `DESIGN-TOKENS.md`, `COMPONENT-SPECIFICATION.md`, and `ACCESSIBILITY-GUIDELINES.md` from Phase 1. The rendered reference is `design-prototype/`.

| Family | Components | Purpose |
| --- | --- | --- |
| Navigation | Desktop header, mobile drawer, services disclosure, breadcrumb, footer, back-to-top | Orientation and recovery navigation. |
| Actions | Primary, secondary/outline, tertiary text link, icon action | One clear action hierarchy. |
| Content | Section heading, service/value card, conditional portfolio state, process step, badge, CTA band | Scannable information without decorative card overload. |
| Input | Text/email input, select, textarea, checkbox, submit and feedback | Accessible inquiry collection. |
| Disclosure | FAQ accordion, service menu, filter chip | Progressive disclosure with visible state. |

## Shared construction

- Buttons: 44 px minimum target, 8 px radius, Inter 14/20 600. Filled primary uses Royal Blue; secondary is white with Royal Blue border.
- Cards: white surface, `#D8E0EF` border, 10 px radius, 24–25 px padding. Shadow is reserved for an elevated visual or menu.
- Header: 80 px desktop / 68 px mobile, white sticky surface; a subtle bottom border appears after scroll.
- Section header: eyebrow → H2 → optional supporting copy/action. One H2 per section.
- Inputs: label above control, 12 px inner padding, 8 px radius, visible 3 px focus halo. Place errors adjacent to the field.
- FAQ: full-width semantic button, 44 px+ target, visible plus/minus indicator and `aria-expanded` state.

## Content constraints

Testimonial, statistics, team, project, technology-stack, and contact components are conditional. They may not be visually populated as public evidence until the underlying facts, attribution, and publication approval exist.
