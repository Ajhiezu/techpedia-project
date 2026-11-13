# Services Overview — High-Fidelity Design

## Artboard & Composition

Desktop artboard: 1440 px, 1200 px max container, 12-column grid, shared sticky header/footer. The visual rhythm is White → Light Background → White → Light Background → White → Deep Blue CTA, with 96 px section spacing.

```text
HEADER
HERO: 7-col message + 5-col service-map visual
SERVICE INTRO: concise business-first statement
SIX SERVICES: 3 × 2 card grid
SERVICE BENEFITS: four value blocks on light surface
TECHNOLOGY CAPABILITIES: capability model, not unverified stack logos
DEVELOPMENT PROCESS: six-step horizontal rail
SERVICE FAQ: intro 4-col + accordion 8-col
FINAL CTA
FOOTER
```

## Section Specification

| Section | High-fidelity treatment | Conversion purpose |
| --- | --- | --- |
| Hero | Eyebrow `DIGITAL BUSINESS SOLUTIONS`; H1 **Build the right digital foundation for your business.**; 7/12 copy + 5/12 connected-service map. | `Discuss Your Project` → Contact. |
| Introduction | White text column, 8/12 max; short explanation that solutions begin with business context, not technology labels. | Establishes positioning before choice. |
| Service directory | Six consistent white cards, subtle border, outline icon, H3, 2–3 lines, tertiary `Explore service`. | Routes to service detail. |
| Benefits | Light Background; four compact blocks: Business-focused, Clear collaboration, Purposeful technology, Ongoing improvement. | Clarifies approach without claims of scale. |
| Technology capabilities | White split: business-problem diagram + copy explaining website, application, system, experience, and support capabilities. | Do not name stack/tool logos until confirmed. |
| Development process | Light Background; numbered six-step rail, horizontal desktop and vertical mobile. | `Explore Our Process` → About anchor. |
| FAQ | White; 4/8 split, four to six accordion questions. | Routes remaining objections to FAQ/Contact. |
| CTA | Deep Blue band; H2 **Not sure which solution fits?** | `Start a Conversation` → Contact with service unset. |

## Service Card Hierarchy

| Service | Icon metaphor | Description direction | Route |
| --- | --- | --- | --- |
| Website Development | Browser frame | Professional web presence shaped around business goals. | `/services/website-development` |
| E-Commerce Development | Shopping bag / checkout flow | Online selling experience with operations in mind. | `/services/ecommerce-development` |
| Custom Software Development | Connected modules | Purpose-built systems for unique workflows. | `/services/custom-software-development` |
| ERP & Business Solutions | Structured data grid | Connected visibility across core operations. | `/services/erp-business-solutions` |
| UI/UX Design | Cursor / layout grid | Clear interfaces before and during product build. | `/services/ui-ux-design` |
| Maintenance & IT Support | Shield / toolkit | Ongoing care for existing digital solutions. | `/services/maintenance-it-support` |

## Responsive & State Notes

- Desktop: hero split and 3×2 service grid. Tablet: hero may stack and card grid is 2 columns. Mobile: one-column services, full-width CTA.
- Cards use documented hover/focus states without layout shift; entire card is clickable only if it contains one destination.
- The Services navigation item is active. Header CTA remains `Let's Talk` to match Homepage.
- Technology capability visuals are generic diagrams, never fake logos, certifications, metrics, or integration claims.
