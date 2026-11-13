# Accessibility audit

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Reference: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). Checks cover skip/focus, keyboard menu trapping/Escape, labels, accordion state, reduced motion and selected contrast. Fixed skip-to-404, hidden dropdown focus, explicit smooth back-to-top, logo dimensions and muted contrast: 4.43 -> 4.97 on light background. This is a partial automated/manual review, not complete AA certification. Screen reader and complete rendered audit remain NOT TESTED.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| CHROME-A11Y-skip | Skip link focuses content without routing to 404; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-dropdown | Dropdown Escape restores trigger focus; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-mobile | Mobile dialog traps focus and restores trigger; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-faq | FAQ expanded state matches panel visibility; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-labels | All contact inputs have accessible labels; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-motion | Reduced motion preference disables smooth scrolling; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-NAV-backtop | Back-to-top honors reduced motion; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| EDGE-A11Y-skip | Skip link focuses content without routing to 404; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-dropdown | Dropdown Escape restores trigger focus; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-mobile | Mobile dialog traps focus and restores trigger; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-faq | FAQ expanded state matches panel visibility; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-labels | All contact inputs have accessible labels; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-motion | Reduced motion preference disables smooth scrolling; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-NAV-backtop | Back-to-top honors reduced motion; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| CONTRAST-muted on white | muted on white; WCAG normal-text ratio >=4.5:1 | 5.3397 | PASS | [evidence](evidence/contrast.json) |
| CONTRAST-muted on light | muted on light; WCAG normal-text ratio >=4.5:1 | 4.9727 | PASS | [evidence](evidence/contrast.json) |
| CONTRAST-primary on white | primary on white; WCAG normal-text ratio >=4.5:1 | 6.1596 | PASS | [evidence](evidence/contrast.json) |
| CONTRAST-white on primary | white on primary; WCAG normal-text ratio >=4.5:1 | 6.1596 | PASS | [evidence](evidence/contrast.json) |
| A11Y-reader | Manual screen reader compatibility; Implemented behavior meets the stated requirement | No manual screen-reader session available. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| A11Y-full | Full WCAG 2.2 AA acceptance; Implemented behavior meets the stated requirement | Keyboard/DOM/selected contrast checks are partial; no full manual/axe certification. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
