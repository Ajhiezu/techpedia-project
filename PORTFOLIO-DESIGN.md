# Portfolio Overview — High-Fidelity Design

## Artboard & Page Logic

The Portfolio page supports evaluation, but never fabricates evidence. It has two valid modes:

1. **Published portfolio mode:** valid, permitted projects exist.
2. **Approach fallback mode:** no publishable projects exist; cards and filters are replaced with a clear method/solution-category explanation.

```text
HEADER
HERO: 7-col evaluation message + 5-col modular gallery visual
CATEGORY FILTER BAR
PROJECT GRID OR APPROACH FALLBACK
LOAD MORE / PAGINATION (only when real project volume needs it)
PROJECT PREVIEW / RELATED SERVICE ROUTE
CTA
FOOTER
```

## High-Fidelity Sections

| Section | Design direction | Content rule |
| --- | --- | --- |
| Hero | White; H1 **Explore solutions shaped around real business needs.** 7/12 copy + 5/12 layered project-frame visual. | Does not claim portfolio volume or client list. |
| Category filters | Light Background chip bar: All, Website, E-Commerce, Custom Software, ERP & Business Systems, UI/UX. Selected chip is Royal Blue; `Clear filter` available. | Display only categories containing valid projects; do not show empty category counts. |
| Project cards | White 3-column grid; 16:10 thumbnail, category badge, title, concise permitted description, services used, `View Project`. | All content must be accurate and approved. |
| Project preview | Optional selected-card detail strip, created only for valid project data; image left, summary/action right. | Omit if it duplicates Project Detail or lacks valid content. |
| Pagination/load more | Low-emphasis outlined control below grid; visible result context. | Use only when multiple valid projects need progressive disclosure; otherwise no control. |
| CTA | Light/Deep Blue closing band: `Discuss Your Project`. | Routes to Contact. |

## Card & Empty State

| State | High-fidelity treatment | Action |
| --- | --- | --- |
| Valid project | Accessible media, category, title, permitted short description, route to detail. | View Project. |
| Active filter has no result | Quiet empty state: **No published projects in this category yet.** | `Clear filter` and `Explore Services`. |
| No publishable portfolio | Full approach fallback: challenge → discovery → solution direction → build/support. | `Explore Services` and `Discuss Your Project`. |
| Loading | Stable skeleton shape only during real data loading. | No fake project information. |

## Interaction & Responsive

- Filters are click/tap and keyboard operable; selection is not communicated by color alone.
- Desktop grid is three columns; tablet two; mobile one. On mobile, filters use accessible horizontal scroll or select and retain `Clear filter`.
- Thumbnail media is responsive with stable aspect ratio. Long titles/descriptions never overlap labels or action links.
- Header/footer and CTA treatment match Homepage. Portfolio is active in navigation.
