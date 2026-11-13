# Performance audit

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

References: [Web Vitals](https://web.dev/articles/vitals), [thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds). Good targets are LCP <=2500ms, INP <=200ms and CLS <=0.1 at real-user p75. Local samples do not establish field p75. Ten independent cold documents per before/after set cover five routes. CPU contention, localhost and blocked external fonts prevent a production speed claim. Legacy cumulative SPA metrics embedded in browser reports are invalid for page-level comparison; only performance-before/after.json are used. Lighthouse/field INP remain unverified.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| LIGHTHOUSE | Lighthouse on five routes; Implemented behavior meets the stated requirement | Lighthouse not installed; npm access blocked. CDP metrics are not Lighthouse scores. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| PERF-field | Field CWV/INP at p75; Implemented behavior meets the stated requirement | No real-user dataset; INP remains null. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| PERF-payload | Measured list over-fetch reduction; Smaller representative list without breaking detail | 346161 -> 5894 bytes; 98.30% smaller; full detail remains available | PASS | [evidence](evidence/live-http.json) |
| PERF-lab | Cold-document lab measurements; Independent timeOrigin and all content loaded | Five routes, two independent documents each; localhost, CPU4x, external fonts blocked; no field/production claim | PASS | [evidence](evidence/performance-after.json) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).

## Laboratory samples

| Route | Before median LCP (ms) | After median LCP (ms) | Before/after max CLS |
| --- | --- | --- | --- |
| / | 1506.0 | 1860.0 | 0.0000 / 0.0000 |
| /services | 484.0 | 712.0 | 0.0000 / 0.0000 |
| /portfolio | 398.0 | 488.0 | 0.0000 / 0.0000 |
| /insights | 424.0 | 390.0 | 0.0000 / 0.0000 |
| /contact | 478.0 | 530.0 | 0.0000 / 0.0000 |

Two samples/route and overlapping host load are insufficient for a performance acceptance claim. All documents have distinct timeOrigin and content loaded. INP is null.

## Source asset sizes (bytes)

| Asset | Before | After |
| --- | --- | --- |
| app.js | 23137 | 24955 |
| api.js | 700 | 700 |
| styles.css | 11907 | 12024 |
| logo.png | 22255 | 22255 |

JavaScript grew to support validation, metadata, accessibility and lazy-detail handling. The demonstrated saving is API payload size, not a smaller JS bundle. No separate production API latency percentile or MySQL query-plan benchmark is claimed.
