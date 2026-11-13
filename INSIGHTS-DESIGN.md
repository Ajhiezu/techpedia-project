# Insights Overview — High-Fidelity Design

## Purpose & Artboard

Insights is a reading-first discovery page. It supports awareness and consideration without pretending that draft articles are published content. Desktop uses the shared 1440 px artboard, 1200 px container, sticky header/footer, and a White → Light Background → White rhythm.

```text
HEADER
BLOG HERO: 7-col editorial message + 5-col knowledge/diagram visual
CATEGORY NAVIGATION + SEARCH
FEATURED ARTICLE (conditional)
LATEST ARTICLE GRID
PAGINATION (when valid volume requires it)
OPTIONAL NEWSLETTER (only after consent/process exists)
CTA
FOOTER
```

## Section Specification

| Section | High-fidelity direction | Content/status rule |
| --- | --- | --- |
| Hero | White; H1 **Insights for better digital decisions.**; short explanatory body and a structured knowledge-card visual. | Avoid publication-volume or expertise claims. |
| Category navigation | Light Background chip row: Web Development, Programming, Database & Backend, Software Engineering, AI & Technology, Digital Business. | Only show categories that have approved content at launch. |
| Search | Search field with visible label, search icon, clear control when text exists, result summary. | Search is optional until real article volume warrants it. |
| Featured article | Large 7/5 editorial card: image, category, title, valid author/date, excerpt, link. | Omit when no approved feature article exists. |
| Article cards | White 3-column grid; category badge, H3, excerpt, valid metadata, directional link. | Do not use filler article titles, authors, dates, or images as public content. |
| Pagination | Low-emphasis Previous / numbered pages / Next or `Load more`. | Use only for real article volume; current page has clear state. |
| Newsletter | Light Background inline panel with email field and privacy link. | **Optional/TBD.** Hide until consent wording, data process, and mailing workflow are approved. |
| CTA | Deep Blue close: **Need help applying these ideas to your business?** | `Discuss Your Needs` → Contact. |

## Interaction & Responsive

- Category chips/filter and search work together; a readable result summary and `Clear filters` action appear when active.
- Empty state: **No published articles match this selection.** Offer `Clear filters` and `Explore Services`.
- Desktop: featured card 7/5 and article grid 3 columns. Tablet: grid 2 columns. Mobile: category controls become accessible horizontal scroll/select; cards one column.
- Insights is active in navigation. Loading placeholders are allowed only during actual data retrieval and must not resemble published articles.
