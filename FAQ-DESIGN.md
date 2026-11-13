# FAQ Page — High-Fidelity Design

## Composition

```text
HEADER
FAQ HERO: H1 + short explanation
SEARCH + CATEGORY FILTERS
FAQ ACCORDION GROUPS
CONTACT SUPPORT CTA
FOOTER
```

## Section Specification

| Section | High-fidelity treatment | Content rule |
| --- | --- | --- |
| Hero | White; H1 **Find clarity before you start.**; body points to services, process, and inquiry questions. | No answer promises beyond established policy. |
| Category filters | Light Background chips: Getting Started, Services, Project Process, Maintenance & Support, Inquiry & Privacy. | Categories can be refined after final FAQ inventory exists. |
| Search | Labelled search field with clear action and result summary. | Optional until enough FAQ items require search. |
| Accordion groups | White, 8-column reading width; category heading + question triggers with right-side chevron. | Answers are approved policy copy, not generic marketing claims. |
| Empty state | Light empty panel with **No answers match your search.** | `Clear search` and `Contact Us` routes. |
| Support CTA | Deep Blue band: **Still need help deciding?** | `Discuss Your Needs` → Contact; no promise of support timing. |

## Interaction & Responsive

- Accordions use full-width buttons, visible focus rings, `aria-expanded`, and panel association; multiple panels may remain open.
- Filter state includes text/result count or summary, not color alone; `Clear filters` is visible after selection.
- Desktop uses intro/search and content hierarchy within 12 columns; mobile stacks filters, search, then accordions with 44 px+ triggers.
- The FAQ navigation link/utility route is accessible from footer and contextual page links; it does not crowd main navigation.
