# SEO audit

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Pre-publication noindex/disallow is intentional. Route descriptions/OG and article time/tags were corrected; actual Laravel web-root robots now matches staging policy. Next.js SITE_URL/SITE_INDEXABLE, canonical/OG, robots and published-only sitemap source were added without inventing a domain; legal drafts/admin excluded. This source has not been compiled/runtime-tested. Static hash fallback is not accepted as production route-level SEO; actual domain/build remain blocking.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| CHROME-SEO-meta | Distinct descriptions for home, services and contact; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-SEO-noindex | Pre-publication site prevents indexing; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| EDGE-SEO-meta | Distinct descriptions for home, services and contact; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-SEO-noindex | Pre-publication site prevents indexing; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| LIVE-robots | Actual web root robots prevents indexing; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| SEO-hash | Production crawlable route acceptance; Implemented behavior meets the stated requirement | P1: static fallback uses hash routes; production SSR/canonical acceptance depends on unbuilt Next.js. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| SEO-domain | Production canonical/domain/sitemap; Implemented behavior meets the stated requirement | No verified public origin; configurable Next.js source is uncompiled. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
