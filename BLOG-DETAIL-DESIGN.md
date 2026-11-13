# Blog Detail — High-Fidelity Design

## Reading-First Composition

The Blog Detail is designed for focused reading. It prioritises article quality before conversion and never displays invented author, date, or article content.

```text
HEADER + BREADCRUMB
ARTICLE HEADER: category, H1, approved author/date, share controls
FEATURED IMAGE (optional/approved)
READING AREA: TOC 3-col + article body 8-col
INLINE RELATED-SERVICE CTA (contextual)
RELATED ARTICLES (valid content only)
FINAL CTA
FOOTER
```

## Section Specification

| Section | High-fidelity direction | Content rule |
| --- | --- | --- |
| Breadcrumb | `Insights / [Category] / [Current article]`, compact and accessible. | Current article is non-link. |
| Article header | Narrow 8-column text block; category badge, H1, short dek, author component, publication date, optional updated date. | Author name/photo/date only when accurately available; otherwise omit the missing field rather than invent it. |
| Share controls | Compact icon buttons labelled Share article, Copy link, and permitted channels. | Buttons require accessible names; do not show inactive social destinations. |
| Featured image | 16:9/3:2 approved image, meaningful alt/caption where needed. | Omit rather than use unrelated decorative stock image. |
| Table of contents | Sticky 3-column desktop rail listing H2 anchors; becomes disclosure/select above content on tablet/mobile. | Hide when article has too few headings to be useful. |
| Article body | 8-column readable measure, H2/H3 hierarchy, diagrams only where they clarify. | All article copy requires editorial approval. |
| Related service CTA | Light inline callout after substantive content; route to one relevant service. | Contextual; no disruptive mid-paragraph prompts. |
| Related articles | Up to three valid article cards. | Omit if no relevant approved articles exist. |
| Final CTA | Deep Blue compact band; `Discuss Your Needs` → Contact. | General invitation, no promise of consultation terms. |

## Responsive & Accessibility

- Desktop: body 8/12 with TOC 3/12; tablet moves TOC above or beside reading content; mobile uses one column.
- Body text remains 16/24 px minimum. Long title wraps naturally; share controls wrap without collision.
- Headings are semantic and generate TOC links; focus target offset accounts for sticky header.
- Share feedback uses a non-disruptive status message such as “Link copied” only after the action succeeds.
