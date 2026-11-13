# Responsive Review — Phase 2.6

## Design review matrix

| Size | Expected review result |
| --- | --- |
| 320, 375, 390 | Single-column content; full-width CTA; no horizontal navigation or overflow. |
| 768 | Two-column cards where readable; menu remains safe. |
| 1024 | Layout begins desktop composition only when header and text fit. |
| 1280, 1440, 1920 | 1200 px content cap retained; no overextended reading lines. |
| 200% zoom / reduced motion | Reflow and immediate non-essential state changes remain usable. |

The CSS implementation encodes these rules. Final Phase 3 QA must test with actual browsers, user content, keyboard, assistive technology, and zoom.
