# Homepage Responsive Design — Techpedia Project

## 1. Breakpoint Plan

| Mode | Canvas | Grid | Section spacing | Design priority |
| --- | --- | --- | --- | --- |
| Desktop | ≥1200 px | 12 columns, 24 px gutter, max 1200 px container | 96 px | Two-column hero and structured grids. |
| Tablet | 768–1199 px | 8 columns, 20 px gutter, 32–48 px margin | 72 px | Preserve grouping; use 2-column grids. |
| Mobile | <768 px | 4 columns, 16 px gutter, 16–24 px margin | 56 px | One clear reading/action flow. |
| Small mobile QA | 320–374 px | Fluid 4-column | 48–56 px | Protect text wrap, form controls, and navigation. |

## 2. Section Adaptation

| Section | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Header | Full nav, Services dropdown, `Let's Talk`. | Nav may collapse before items crowd; CTA remains available. | Logo + menu trigger; menu contains page links and CTA; no horizontal nav scroll. |
| Hero | 7/12 copy + 5/12 visual; CTA inline. | Split if copy remains comfortable, else visual below copy. | Copy first; visual below; primary/secondary CTA stacked full/near-full width. |
| Trust blocks | Four columns. | 2×2 grid. | One column or compact 2×2 only when labels remain legible. |
| Service cards | 3×2. | 2×3. | One column. |
| About | 6/12 narrative + 6/12 visual. | Two column or stack based on visual scale. | Narrative then visual, one column. |
| Featured projects | Three cards. | Two columns, then final card full/centered if needed. | One card per row; placeholder label remains prominent. |
| Why choose us | 3+2 grid. | 2+2+1 grid. | Single-column list/cards; avoid forced equal height. |
| Work process | Six horizontal aligned steps. | Three-by-two numbered grid. | Vertical sequence with connector line. |
| FAQ | 4/8 split. | Intro above or 2/6 split. | Intro, CTA, then one-column accordion. |
| Final CTA | Horizontal copy/action balance. | Stack when button group crowds. | Text first, button full width. |
| Footer | Five grouped columns. | Two/three grouped columns. | Stacked groups or accessible disclosures. |

## 3. Typography & Spacing Adaptation

| Token | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Hero display | 56/64 px | 48/56 px | 40/48 px |
| H2 | 36/44 px | 32/40 px | 30/38 px |
| Card H3 | 28/36 px | 24/32 px | 22/30 px |
| Intro copy | 18/28 px | 18/28 px | 16/24 px |
| Body / form text | 16/24 px | 16/24 px | 16/24 px |

Never reduce body text below 16 px merely to retain the desktop layout. Wrap headline text naturally; do not impose line breaks that break at narrower widths.

## 4. Mobile Interaction Requirements

- All interactive controls have a 44 × 44 px minimum target or equivalent target area.
- The mobile menu has a labelled close control, keyboard support, and no hover dependence.
- Service links and FAQ triggers use the entire intended action region; adjacent targets have enough separation.
- Sticky header and optional sticky CTA must not cover the virtual keyboard, accordion content, footer links, or focused controls.
- Project tiles with no valid content are not included in the public mobile page; use the Approach fallback.

## 5. Overflow & QA

- Media uses responsive width and stable aspect ratio; dashboard hero visual may crop internally but never overflow its card/container.
- CTA groups wrap or stack before text/button collisions occur.
- No grid/card/input/image has a fixed width larger than the mobile container.
- Validate at 320, 375, 768, 1024, 1280, and 1440 px; verify 200% zoom, landscape, long navigation labels, and reduced-motion behavior.
- The DOM order follows mobile reading order: hero copy → hero visual; section heading → supporting content → action.
