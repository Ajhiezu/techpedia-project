# Phase 2 Component Handoff

## Implementation order

1. Tokens, font loading, reset, 12/8/4 responsive container.
2. Header, mobile drawer, footer, button/link/focus primitives.
3. Card, section header, CTA band, process, badge, empty state.
4. Accordion/filter with native semantic buttons and ARIA state.
5. Contact form controls, validation summary, loading/success/error behaviors.

## Non-negotiable implementation requirements

- Use design tokens; avoid hard-coded ad-hoc colour/spacing values.
- Preserve a visible focus ring and semantic elements.
- Keep touch targets at least 44 × 44 CSS px.
- Maintain content-first DOM order at mobile.
- Do not render conditional evidence components until source content is approved.
- Implement reduced-motion alternatives and avoid layout shift.

Reference styles are supplied in `design-prototype/styles.css`; this file is a design reference, not production code.
