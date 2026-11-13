# Homepage Section Specification — Techpedia Project

## Shared Design Rules

Desktop uses a 1200 px maximum container and 12-column grid with 24 px gutters. Default section rhythm is 96 px top/bottom; compact internal groups use the spacing scale in `DESIGN-TOKENS.md`. H2 is 36/44 px, H3 28/36 px, body 16/24 px unless the component specification defines otherwise.

| # | Section | Content & high-fidelity layout | CTA / interaction | Content status |
| ---: | --- | --- | --- | --- |
| 1 | Sticky navigation | White 80 px bar; approved logo/wordmark; Home, Services disclosure, Portfolio, About Us, Insights, Contact; filled `Let's Talk`. | `Let's Talk` → Contact; Services opens keyboard-accessible menu. | Contact route is final; contact details remain TBD. |
| 2 | Hero | 7/12 copy and 5/12 original interface visual. Eyebrow, specified H1/description, button group. | `Start a Project` → Contact; `Explore Our Work` → Portfolio. | Copy confirmed by Phase 2.2 brief; visual is generic. |
| 3 | Trust & Technology | Light Background; four compact equal blocks with outline icons: Technology Expertise, Development Capabilities, Quality Assurance, Customer-Focused Approach. Each has one short explanatory line. | Optional text link: `How We Work` → About/#our-process. | Do not substitute with client/project counts, certifications, or logos. |
| 4 | Services overview | White; left-aligned header with `Explore all services`; 3×2 card grid. Each card: icon, H3, 2-line description, `Learn more` direction link. | Each link routes to matching service detail. | Six services are confirmed. |
| 5 | About preview | Light Background; narrative 6/12 and modular process/system illustration 6/12. H2: **Technology That Solves Real Business Problems.** | `About Us` → `/about`; optional `Our Process` → `/about#our-process`. | Brand narrative only; do not imply team scale. |
| 6 | Featured projects | White; section intro, 3 cards at 4 columns each. Card media ratio 16:10; category badge; project name; description; technology stack text; `View Case Study`. | Project link only activates after a valid Project Detail exists. | **TBD/conditional.** For review, label every card `Project showcase — TBD`; production fallback is Approach section. |
| 7 | Why choose us | Light Background; H2/intro, then five compact pillar cards in 3+2 grid: Tailored Solutions, Modern Technology, Quality-Driven Development, Transparent Communication, Scalable Architecture. | Tertiary `Discuss Your Needs` → Contact. | Phrase as approach, not an unqualified guarantee. |
| 8 | Work process | White; six numbered steps on an aligned horizontal rail: Discovery → Planning → Design → Development → Testing → Deployment. Step has number, title, one-line purpose. | `Explore Our Process` → `/about#our-process`. | Stage labels are a design model; operational detail remains subject to confirmation. |
| 9 | Testimonials | No public visual section until valid materials exist. Design-library component remains documented only. | N/A until published. | **Conditional.** Never fill with sample names, quotes, portraits, or logos. |
| 10 | FAQ | Light Background; 4-column intro + CTA and 8-column accordion. Questions cover service selection, starting an inquiry, scope discussion, and maintenance/support within confirmed boundaries. | Accordion; `View all FAQ` → `/faq`. | Answers must not promise price, turnaround, SLA, or integration. |
| 11 | Final CTA | Deep Blue full-width band inside 1200 px container; H2: **Have an Idea? Let's Build It Together.**; one supporting sentence; primary white/blue contrast-safe button. | `Discuss Your Project` → `/contact`. | No promise of response time or consultation terms. |
| 12 | Footer | Deep Blue/ink surface; wordmark + short positioning; columns: Navigation, Services, Resources, Contact; social icons; legal row. | All links keyboard accessible; contact/social only if verified. | Contact and social destinations are TBD. |

## Service Card Content Structure

| Service | Description direction | Detail route |
| --- | --- | --- |
| Website Development | Professional websites built around your business needs. | `/services/website-development` |
| E-Commerce Development | Online store experiences designed for practical operations. | `/services/ecommerce-development` |
| Custom Software Development | Custom systems for workflows that need more structure. | `/services/custom-software-development` |
| ERP & Business Solutions | Connected tools for key operational processes. | `/services/erp-business-solutions` |
| UI/UX Design | Clear interfaces that support user and business goals. | `/services/ui-ux-design` |
| Maintenance & IT Support | Ongoing technical care for digital solutions. | `/services/maintenance-it-support` |

## FAQ Content Architecture

Use final approved copy only after operational confirmation. Suggested information architecture—not final answer copy—is:

1. How do I choose the right service?
2. What should I prepare before starting a project?
3. Can you help with an existing website or application?
4. How is project scope discussed?
5. Can a solution be developed in stages?
6. What information should I include in an inquiry?

## Featured Project Fallback

If no valid project can be published, replace the full Featured Projects section with **From Challenge to Solution**:

```text
Business need → Discovery & prioritisation → Designed solution → Build & support
```

This preserves page rhythm and evaluation support without suggesting nonexistent client work.
