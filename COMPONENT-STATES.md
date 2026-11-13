# Component States — Phase 2.5

| Component | Required states | Prototype implementation |
| --- | --- | --- |
| Links/buttons | Default, hover, focus-visible, active; disabled/loading where applicable | Colour/border feedback; 3 px focus outline; no layout shift. |
| Header/menu | Closed, open, current route | `aria-expanded`; keyboard-focusable drawer controls. |
| Accordion | Collapsed, expanded, focus | `aria-expanded`, linked answer panel, plus/minus state. |
| Filter | Default, selected, focus | `aria-pressed`; selection feedback only changes visual prototype state. |
| Form inputs | Default, filled, focus, validation error | Native labels and focus halo; submit validation summary. |
| Submit | Default, validation error, prototype success, prototype failure | No network request; success explicitly states no data was sent. |

Phase 3 must retain semantic controls, focus order, keyboard operation, error focus, and screen-reader announcements.
