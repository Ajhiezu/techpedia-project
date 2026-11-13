# Visual Direction — Techpedia Project

## 1. Direction Summary

**Confident clarity.** Techpedia Project should feel like a capable technology partner: structured enough for a business decision-maker, modern enough for a product-minded founder, and approachable enough for an owner navigating digitalisation for the first time.

The visual direction is **Corporate Professional with Product Clarity**. It pairs an editorial, whitespace-led corporate layout with selective product-style interfaces, diagrams, and process visuals. The result should not resemble a generic freelancer portfolio, an enterprise dashboard, or an overly decorative startup landing page.

### Desired perception

| Must feel | Should not feel |
| --- | --- |
| Professional, considered, reliable | Generic template, stock-heavy, impersonal |
| Modern and technically capable | Futuristic for its own sake or “AI hype” driven |
| Clear and collaborative | Dense, jargon-heavy, or sales-aggressive |
| Calm and premium | Sterile, cold, or excessively minimalist |

## 2. Art Direction Formula

```text
Light corporate canvas
+ clear editorial typography
+ Royal Blue action accents
+ purposeful interface/process visuals
+ disciplined card system
= a credible digital-business partner
```

Use visual hierarchy—not decoration—to create impact: a confident H1, compact supporting copy, one clear CTA, deliberate spacing, and a relevant visual artifact are stronger than gradients, floating shapes, or ambient animation.

## 3. Visual Pillars

### A. Structured confidence

Create order through a 12-column layout, aligned section edges, compact navigation, and clear content grouping. Primary pages should open with one dominant message and a restrained visual companion.

### B. Technology with business context

Use anonymised product-interface compositions, workflow diagrams, system modules, or data-inspired structured illustrations. Visuals need to explain a service, process, or business problem; they are not generic “technology decoration.”

### C. Human, not informal

Where imagery is used, prefer real collaborative work, contextual devices, or authentic work environments. Avoid staged handshake photos, headset operators, floating code, and images that imply a larger team, office, or client base than verified.

### D. Measured momentum

Micro-interactions signal quality: a button response, active navigation state, accordion expansion, or a subtle entrance. There is no need for parallax, autoplay carousels, or highly kinetic hero scenes.

## 4. Color Application

| Role | Application | Rule |
| --- | --- | --- |
| White `#FFFFFF` | Main reading surface, cards, header. | Dominant background. |
| Light Background `#F4F7FC` | Alternating sections, page canvas, muted bands. | Creates rhythm without adding a new brand color. |
| Royal Blue `#2457D6` | Primary CTA, active link, focus, key diagram node. | Reserve for actions and emphasis. |
| Deep Blue `#163B8C` | Selected/active states, rare dark emphasis band, visual depth. | Use sparingly; never replace the light-first direction. |
| Dark Text `#172B4D` | Display, heading, body. | Default textual authority. |
| Secondary Text `#64748B` | Eyebrow context, metadata, supporting text. | Never reduce opacity until contrast is rechecked. |

Recommended page balance: approximately 70–80% white/light canvas, 15–25% dark text/neutral UI, and 5–10% blue emphasis. This is a compositional guide, not a production color quota.

## 5. Typography Direction

- **Plus Jakarta Sans** carries confidence in H1–H4: bold but not condensed, with controlled line breaks.
- **Inter** carries body, navigation, labels, metadata, and form UI for high legibility.
- Large headings use concise, business-oriented language. Body copy remains readable and never compresses to accommodate decoration.
- Use sentence case, not all caps, for headings and CTA labels. Eyebrows may use restrained uppercase/letter spacing only when short.
- Follow the type scale in `DESIGN-TOKENS.md`; do not introduce display sizes ad hoc.

## 6. Image, Illustration & Icon Direction

| Asset | Direction | Avoid |
| --- | --- | --- |
| Product/UI visuals | Clean, partially abstracted interface frames, dashboards, flows, and module diagrams; show plausible structure but no fictional metrics/clients. | Fake analytics, made-up logos, unreadable dense UI mockups. |
| Photography | Editorial crop, natural lighting, authentic working context, restrained blue/neutral grading. | Generic posed teams, handshakes, server-room clichés, exaggerated “innovation” imagery. |
| Illustration | Thin-line or solid geometric system illustrations with minimal detail; use cards, flows, nodes, and containers. | Cartoon mascots, noisy 3D blobs, highly saturated gradients. |
| Icons | Simple modern outline set, 1.75–2 px visual stroke, rounded joins, single-color by default. | Mixed icon families, emoji, overly literal icons. |

## 7. Layout, Cards & Navigation

- Layout leads with content in a controlled 12/8/4-column grid. Large whitespace separates decisions; compact spacing groups related information.
- Cards are white surfaces with subtle border, moderate radius, and minimal shadow. They contain a single action or remain static; avoid turning every paragraph into a card.
- Navigation is white, calm, and compact. The primary CTA is the only filled control in the header; Services may use a focused dropdown/mega menu only if it improves findability.
- CTA bands use light background or Deep Blue only when contrast, content density, and action hierarchy remain clear.

## 8. Motion Direction

| Motion | Direction |
| --- | --- |
| Hover/focus | 150–200 ms state feedback; no layout shift. |
| Accordion/menu | 180–250 ms opacity/height transition with clear open state. |
| Scroll reveal | Optional, subtle fade/translate once; never required to understand content. |
| Diagram/process | Optional staged emphasis only when it explains sequence. |
| Reduced motion | Remove decorative movement and use immediate state changes. |

## 9. Non-negotiable Consistency Rules

1. White + Royal Blue remains the central identity; no new primary color or pervasive gradient.
2. Every section has one information purpose and a clear hierarchy before a decorative element is added.
3. Every screen uses shared tokens, container, type scale, and component states from Phase 1.
4. Portfolio, testimonials, technology logos, and team imagery require valid content and permission; use the documented fallback when absent.
5. Mobile retains the same message hierarchy, with a single-column reading flow and no horizontal overflow.
