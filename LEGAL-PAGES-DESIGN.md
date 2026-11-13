# Privacy Policy & Terms — High-Fidelity Design

## Status

These are document-layout designs, not legal documents. Neither Privacy Policy nor Terms & Conditions may be presented as final, active, or legally reviewed until their content has been approved by the appropriate authority.

## Shared Layout

```text
HEADER + BREADCRUMB
LEGAL HEADER: document title + status/last-updated placeholder
READING LAYOUT: TOC 3-col | legal content 8-col
CONTACT/QUESTION ROUTE
FOOTER
```

## Page Specification

| Element | Privacy Policy | Terms & Conditions |
| --- | --- | --- |
| Page title | Privacy Policy | Terms & Conditions |
| Hero/meta | H1, short neutral intro, `Last updated: TBD` until approved. | H1, short neutral intro, `Last updated: TBD` until approved. |
| Table of contents | Sticky desktop rail listing approved document headings. | Same reading pattern and component. |
| Content body | Narrow 8-column legal reading measure; numbered sections and lists. | Narrow 8-column legal reading measure; numbered sections and lists. |
| Contact route | Link to Contact for privacy questions only after proper route is confirmed. | Link to Contact for general terms questions only after proper route is confirmed. |

## Visual & Responsive Rules

- White reading canvas with Light Background surrounding page; no sales CTA band in legal documents.
- Last-updated date is omitted or labelled TBD in design review; it is never fabricated.
- Desktop TOC is sticky only while its content fits viewport; tablet TOC becomes a horizontal anchor bar; mobile TOC becomes a disclosure above content.
- Legal headings are semantic, preserve source order, and have clear focus target offset below sticky header.
- Footer retains legal links; no WhatsApp/social/contact item is rendered without verified destination.
