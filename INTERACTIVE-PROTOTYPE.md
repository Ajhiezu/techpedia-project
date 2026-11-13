# Interactive Prototype — Phase 2.7

## Location and boundary

The executable prototype is in `design-prototype/`. It is intentionally isolated from production and contains no backend, API, database, analytics, form submission, or CMS integration.

Open `design-prototype/index.html` in a browser.

## Implemented interactions

| Interaction | Behavior |
| --- | --- |
| Desktop / mobile navigation | Hash routing across Home, Services, detail, Portfolio, About, Insights, Contact, FAQ, legal, and 404 views. |
| Services disclosure | Click/keyboard-operated disclosure with an accessible expanded state and direct Services fallback. |
| Mobile navigation | Labelled menu drawer and close control. |
| CTA navigation | Routes to context-appropriate prototype pages. |
| Filters | Selected chip state for prototype evaluation; no fake project results are displayed. |
| FAQ | Multi-open accordion with linked answer panels and visible state. |
| Inquiry form | Required-field validation, prototype success, and explicit failed-submission state. No values are transmitted. |
| Back to top | Component pattern documented; Phase 3 may include it after verifying keyboard and focus behavior. |

## Content boundary

Portfolio, case study, testimonial, technology, editorial, team, and contact content uses transparent fallback treatment until supplied and approved. The prototype does not use mock data that could be mistaken for an actual client or achievement.
