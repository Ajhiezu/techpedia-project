# Optimization

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Measure first: representative article-list payload was 346,161 bytes because full bodies were included. Lists now omit heavy content and details load on demand; cache merging avoids request races. Real browser verifies article body/tags/date and service detail. Result: 5,894 bytes (98.30% smaller). No time-based speed improvement, production Lighthouse score or field CWV improvement is claimed. No major package upgrade, speculative index or indiscriminate cache was introduced.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| CONTRAST-muted on white | muted on white; WCAG normal-text ratio >=4.5:1 | 5.3397 | PASS | [evidence](evidence/contrast.json) |
| CONTRAST-muted on light | muted on light; WCAG normal-text ratio >=4.5:1 | 4.9727 | PASS | [evidence](evidence/contrast.json) |
| CONTRAST-primary on white | primary on white; WCAG normal-text ratio >=4.5:1 | 6.1596 | PASS | [evidence](evidence/contrast.json) |
| CONTRAST-white on primary | white on primary; WCAG normal-text ratio >=4.5:1 | 6.1596 | PASS | [evidence](evidence/contrast.json) |
| PERF-field | Field CWV/INP at p75; Implemented behavior meets the stated requirement | No real-user dataset; INP remains null. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| PERF-payload | Measured list over-fetch reduction; Smaller representative list without breaking detail | 346161 -> 5894 bytes; 98.30% smaller; full detail remains available | PASS | [evidence](evidence/live-http.json) |
| PERF-lab | Cold-document lab measurements; Independent timeOrigin and all content loaded | Five routes, two independent documents each; localhost, CPU4x, external fonts blocked; no field/production claim | PASS | [evidence](evidence/performance-after.json) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
