# Interaction Specification — Phase 2.7

- Pointer feedback: 150–200 ms colour/border/shadow feedback; no layout shift.
- Menu and accordion: 180–250 ms maximum; Escape/return-focus behavior is required in Phase 3 for the menu.
- Focus: 3 px Royal Blue outline with offset; focus must remain visible on every surface.
- Filters: selected state uses text and `aria-pressed`, not colour alone.
- Form: validation must preserve values; failure must retain entered values; the first error receives focus; success must be announced.
- Reduced motion: immediate changes for non-essential animation.

No carousel, autoplay, scrolljacking, count-up statistic, ambient animation, or hover-only action is approved.
