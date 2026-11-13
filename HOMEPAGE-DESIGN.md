# Homepage High-Fidelity Design — Techpedia Project

## 1. Design Objective

Homepage ini adalah landing experience utama untuk mengubah pengunjung yang baru mengenal Techpedia Project menjadi calon klien yang siap mengeksplorasi layanan atau memulai inquiry. Desain menerapkan arah **Corporate Professional with Product Clarity**: light-first, editorial, berbasis sistem, dan fokus pada keputusan bisnis.

Dokumen ini adalah spesifikasi visual high-fidelity untuk artboard desain; bukan implementasi frontend. Nilai token dan state aksesibilitas mengikuti `DESIGN-TOKENS.md`, `COMPONENT-SPECIFICATION.md`, dan `ACCESSIBILITY-GUIDELINES.md`.

## 2. Desktop Artboard — 1440 px

```text
┌──────────────────────────────────────── 1440 px ─────────────────────────────────────┐
│ [Techpedia Project]  Home  Services⌄  Portfolio  About Us  Insights  Contact [Let's Talk]│
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / HERO · White surface · 1200 px container · 112 px vertical padding                  │
│  ┌────────────────────────────── 7/12 ───────────────────┬────── 5/12 ──────────────┐ │
│  │  TECHNOLOGY PARTNER                                   │  [Product interface frame]│ │
│  │  Transform Your Ideas Into Powerful                   │  Modular dashboard, flow  │ │
│  │  Digital Solutions.                                   │  nodes, no real data      │ │
│  │  Supporting description                               │                             │ │
│  │  [Start a Project]  [Explore Our Work]                │                             │ │
│  └───────────────────────────────────────────────────────┴─────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / TRUST & TECHNOLOGY · Light Background · 4 equal capability blocks                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / SERVICES · White · Section header + 3 × 2 service card grid                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / ABOUT PREVIEW · Light Background · narrative 6/12 | modular visual 6/12             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / FEATURED PROJECTS · White · 3 project showcase placeholders OR approach fallback    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / WHY CHOOSE US · Light Background · 5 pillars: 3 + 2 balanced grid                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / WORK PROCESS · White · 6 numbered steps with subtle connector                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / TESTIMONIALS · Conditional slot; omit entirely when no valid content exists          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / FAQ · Light Background · 2-column intro / single accordion column                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / FINAL CTA · Deep Blue band · white copy · [Discuss Your Project]                     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  / FOOTER · Deep Blue/ink surface · grouped links and verified contact only              │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

## 3. Visual Composition

| Area | High-fidelity direction |
| --- | --- |
| Header | 80 px white sticky header; logo left, compact Inter navigation center/right, single Royal Blue filled `Let's Talk` CTA. A thin border appears after scroll. |
| Hero | White surface; Plus Jakarta Sans display at 56/64 px, max 7 text columns; description at 18/28 px; two-button CTA group. The interface visual occupies a clean 5-column panel with a thin border and soft shadow. |
| Hero visual | Original abstract product composition: dashboard cards, progress/flow line, and system nodes; blue is selective; all visible labels generic; no invented data, brand logos, or client names. |
| Section rhythm | 96 px desktop spacing. White and Light Background alternate only to clarify groups, not mechanically. |
| Surface depth | White card + `border.default`; `shadow.sm` reserved for elevated/highlighted elements. |
| Blue emphasis | Royal Blue marks CTAs, active states, direction icons, selected process elements, and small visual highlights. Deep Blue is restricted to final CTA and selected/hover depth. |

## 4. Required Hero Copy & Route Mapping

| Element | Copy | Action |
| --- | --- | --- |
| H1 | Transform Your Ideas Into Powerful Digital Solutions. | — |
| Description | We help businesses grow through professional websites, custom software, and innovative digital solutions designed around your needs. | — |
| Primary CTA | Start a Project | `/contact` with service value unset (`Belum yakin / perlu rekomendasi`). |
| Secondary CTA | Explore Our Work | `/portfolio`; keep portfolio fallback visible if no published projects exist. |
| Header CTA | Let's Talk | `/contact`. |

The English CTA/copy above is user-specified for this high-fidelity homepage. Operational content elsewhere may retain Indonesian as established in Phase 1.

## 5. Section Order & Conversion Rationale

1. **Hero:** establishes promise and gives two routes based on intent.
2. **Trust & Technology:** reframes trust as approach/capability rather than unverified social proof.
3. **Services:** lets users self-select a relevant solution early.
4. **About Preview:** establishes the business-first partner positioning.
5. **Featured Projects:** supports evaluation only when evidence exists; otherwise, communicates approach.
6. **Why Choose Us:** differentiates through method and values, not unsupported superlatives.
7. **Work Process:** reduces uncertainty about collaboration.
8. **Testimonials:** reserved for authentic, permitted social proof.
9. **FAQ:** handles remaining objections just before final conversion.
10. **Final CTA:** gives a low-friction last action after the user has enough context.

## 6. Asset & Content Constraints

| Item | Design treatment before validated content exists |
| --- | --- |
| Logo | Use a wordmark placeholder in artboard; replace only with approved logo asset. |
| Hero visual | Use original generic interface/diagram visual; it must not imply a real product or performance result. |
| Project cards | Display only inside the design-review state with a visible `Project showcase — TBD` label; do not ship as public portfolio content. |
| Technology stack | Do not show logos or named stacks until actual delivery capability is confirmed. |
| Testimonials | Omit the section entirely in public output until valid quote, attribution, and permission are available. |
| Contact/social | Use `TBD` labels in artboard; show only verified routes at launch. |

## 7. High-Fidelity Review Checklist

- [ ] One clear visual priority in hero: H1, then description, then primary CTA.
- [ ] Brand Blue is an action/emphasis color, not a page fill.
- [ ] Every card has a purpose, stable image ratio, and consistent internal spacing.
- [ ] Project/testimonial placeholders cannot be mistaken for real proof.
- [ ] Buttons, nav, accordion, and mobile menu expose documented focus and state styles.
- [ ] No fixed-width component creates horizontal overflow at 320 px or 200% zoom.
