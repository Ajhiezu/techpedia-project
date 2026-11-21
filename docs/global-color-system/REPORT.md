# Global color system refactor

The owner's final UI is retained. This change is limited to color declarations, theme tokens and their build/import integration. It adds no dependencies and does not change layouts, grid, typography, spacing, sizes, radii, animation timing, content, routing, APIs or business rules. Original images, logo files, mascot artwork, video and fonts are unchanged.

## Source files

- `frontend/assets/theme-tokens.css`: single literal palette, semantic color roles, RGB channels and compatibility aliases.
- `frontend/assets/component-colors.css`: color-only component/state rules shared with the React implementation.
- Existing styles migrated from literal colors to semantic roles: `styles.css`, `dropdown.css`, `breadcrumb.css`, `reviews.css`, `portfolio.css`, `professional.css`, `project-carousel.css`, `cursor.css`, `studio-v3.css`, `brand-menu.css`, `legal.css`, `internal-pages.css`, `awwwards.css`, `color-system.css`.
- Legacy, currently unloaded `studio.css` and `reference-theme.css` were also mapped to tokens. They remain unloaded; no template or layout was switched.
- `frontend/assets/cursor.js`: canvas drawing colors now read theme RGB channels; simulation, animation, alpha values and gradient stop positions remain unchanged.
- `scripts/prerender-site.mjs`: includes the theme and shared component color layer in the existing CSS bundle.
- `frontend-next/app/globals.css`: imports the shared color layers and exposes semantic Tailwind v4 colors through `@theme inline`. No separate Tailwind config or theme provider exists. React components have no inline brand-color styles requiring a JSX change.
- `frontend/index.html`: browser theme-color is White. Generated `frontend/assets/site.css`, HTML route copies and `dist/` were rebuilt.

## Semantic palette and mapping

| Role | Value / behavior |
| --- | --- |
| Background, surface, secondary | White `#FFFFFF` |
| Primary interactive | Cyan `#06B6D4`; hover `#0891B2`; pressed `#0E7490` |
| Cyan subtle / subtle hover | `#ECFEFF` / `#CFFAFE` |
| Accent | Purple `#7C3AED`; hover `#6D28D9`; pressed `#5B21B6` |
| Accent subtle / subtle hover | `#F5F3FF` / `#EDE9FE` |
| Heading / foreground | `#0F172A` |
| Body / muted text | `#475569` / `#64748B` |
| Neutral hover / active | `#F8FAFC` / `#F1F5F9` |
| Border / border hover | `#E2E8F0` / `#CBD5E1` |
| Interactive border / focus ring | Cyan hover `#0891B2`, for a visible ring on White |
| Link / link hover | Cyan pressed `#0E7490` / darker Cyan `#155E75`, for AA text contrast |
| Disabled | `#F1F5F9` with `#64748B` text |
| Destructive / success / warning / info | Semantic red / green / amber / cyan, with separate subtle backgrounds |

Legacy aliases (`--page`, `--ink`, `--line`, `--cyan`, `--blue`, `--deep`, etc.) reference the same semantic roles. The old text use of `--muted` was migrated to `--body-foreground`; `--muted` is now a subtle neutral surface. Cyclic self-aliases were removed.

Primary buttons use dark text at default and hover, then white text on the darker pressed background. Secondary/outline controls retain white/cyan-subtle surfaces, so adjacent primary and secondary buttons remain distinct. Regular tags use Cyan; the featured package badge and special demo badges use Purple. Purple does not replace Cyan interaction states. Existing functional status colors remain semantic rather than decorative brand colors.

Gradients keep their existing function, direction, stops, geometry and timing; only color values are replaced. Colored shadows retain their original offsets, blur, spread and alpha. Native artwork/cursor image colors and mascot visual materials are deliberately excluded from recoloring. No new visual ornaments or UI components were introduced to force a percentage distribution.

## Components checked

Desktop/sticky navigation, active links, service dropdown/popover and hover items, mobile menu and close control; primary/secondary/outline/icon buttons and hover/focus/pressed/disabled/loading states; badges, cards, selected category filters, project image overlays, FAQ, progress indicators, case-study galleries and carousel controls; API-mode form fields, placeholders, focus and validation; legal draft labels; footer; body-mounted analytics consent panel and both consent choices.

No dedicated toast, tooltip, native dialog, modal overlay, context-menu, radio/switch, skeleton or general pagination component is implemented in the current public frontend. They were not invented. Overlay, status and surface tokens are available for future use. The floating consent UI is tested in its existing form; analytics was not enabled or sent in production configuration.

## Verification

- Static build: passed, 23 generated routes plus the existing custom 404 output.
- `npm.cmd test`: 21 passed.
- `npm.cmd run lint`, `npm.cmd run lint:awwwards` and cursor JavaScript syntax check: passed.
- Functional browser suite: passed. It checks selectors, menus/Escape, keyboard FAQ, quote links, portfolio filtering, gallery navigation and contacts, along with responsive layouts.
- `browser.json`: 62 checks, zero serious/critical axe violations and zero runtime errors. Includes all 23 routes at 390 and 1440 px plus actual interactive/form/consent states.
- `preservation.json`: 46 before/after snapshots of element geometry, typography, padding, margin, radii, grid, positioning, transforms and motion properties are identical. CSS source checks also found zero non-color declaration changes in the 16 original active stylesheets inspected, and zero gradient-function changes.
- Screenshots in this directory capture the new palette. Pixel differences caused by intentional color changes are expected; computed layout is unchanged.

## Remaining verification limit

`npm.cmd run next:typecheck` and `npm.cmd run next:build` were attempted. The alternate `frontend-next` checkout has no installed dependencies, so they stop at `tsc is not recognized` and `next is not recognized`. The shared Next/Tailwind theme imports are implemented, but its build and browser behavior cannot be certified from this environment. No dependencies were added to bypass this limitation. The active static website is built and tested above. No deployment was performed.
