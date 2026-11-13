# Bug tracking

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

**18 application defects fixed.** Missing required features and blocked acceptance gates remain open below; no confirmed Critical vulnerability is claimed.

| ID | Priority / risk | Initial condition and cause | Impact | Repair | Retest |
| --- | --- | --- | --- | --- | --- |
| BUG-01 | P1 / High | Rate limits exhausted before five attempts: Nested numeric throttles shared a hashed signature. [before](evidence/backend-regression-before.json) | Valid requests blocked too early | Named independent rate limiters | [PASS](evidence/backend-final.xml) |
| BUG-02 | P2 / Medium | Referenced media deletable: Delete ignored content references. [before](evidence/backend-regression-before.json) | Broken/restorable content images | Guard references including soft-deleted content; return409 | [PASS](evidence/backend-final.xml) |
| BUG-03 | P1 / Medium | Published detail became404 after null date: Update failed to retain existing publication date. [before](evidence/backend-regression-before.json) | Published content disappeared | Preserve date or initialize now | [PASS](evidence/backend-final.xml) |
| BUG-04 | P2 / Medium | Category self/ancestor cycle accepted: FK validation did not validate hierarchy. [before](evidence/backend-regression-before.json) | Invalid traversal graph | Cycle-aware ancestor validation | [PASS](evidence/backend-final.xml) |
| BUG-05 | P2 / Medium | Security headers absent: No hardening middleware. [before](evidence/backend-regression-before.json) | Missing defense in depth | CSP/nosniff/referrer/frame/permissions; secure production HSTS | [PASS](evidence/live-http.json) |
| BUG-06 | P3 / Low | Logo intrinsic dimensions missing: HTML omitted width/height. [before](evidence/browser-before-confirmed.json) | Layout uncertainty | Explicit dimensions with existing responsive CSS | [PASS](evidence/browser-final.json) |
| BUG-07 | P2 / Low | Article date/tags omitted: Detail template ignored metadata. [before](evidence/browser-before-confirmed.json) | Missing editorial context | Escaped date/tags and actual detail fetching | [PASS](evidence/live-http.json) |
| BUG-08 | P1 / Medium | Two submit events sent two requests: Disabled button without synchronous handler guard. [before](evidence/browser-before-confirmed.json) | Duplicate inquiries | Pending guard; confirmation requires201 | [PASS](evidence/browser-final.json) |
| BUG-09 | P1 / Low | Skip link opened404: Hash fragment interpreted as a route. [before](evidence/browser-before-confirmed.json) | Keyboard navigation broken | Focus main without routing | [PASS](evidence/browser-final.json) |
| BUG-10 | P2 / Low | Escape hid focused dropdown item: Closing did not restore focus. [before](evidence/browser-before-confirmed.json) | Invisible keyboard focus | Restore disclosure trigger | [PASS](evidence/edge-final.json) |
| BUG-11 | P2 / Low | All routes shared description: Metadata only in initial HTML. [before](evidence/browser-before-confirmed.json) | Poor per-page metadata | Update descriptions/OG and configurable Next metadata | [PASS](evidence/browser-final.json) |
| BUG-12 | P2 / Medium | Unnecessary wildcard CORS: Inherited default config. [before](evidence/live-http-before.json) | Unneeded cross-origin public access | Explicit same-origin policy | [PASS](evidence/live-http.json) |
| BUG-13 | P2 / Low | Web-root robots allowed indexing: Static public file bypassed route policy. [before](evidence/live-http-before.json) | Staging/draft discovery | Align actual public robots with noindex/disallow | [PASS](evidence/live-http.json) |
| BUG-14 | P2 / Medium | Selected muted text contrast4.43: Muted token on light background. [before](evidence/contrast.json) | Normal text below4.5 | Darken muted token; ratio4.97 | [PASS](evidence/contrast.json) |
| BUG-15 | P2 / Medium | Listing sent complete article bodies: Detail fields selected in list. [before](evidence/live-http-before.json) | Excessive representative payload | Lean list fields plus lazy details | [PASS](evidence/live-http.json) |
| BUG-16 | P1 / Medium | Arrays passed scalar exists validation: Missing integer/string rules. [before](evidence/backend-array-before.json) | Invalid public/admin request caused500 | Type validation rejects422 without persistence | [PASS](evidence/backend-final.xml) |
| BUG-17 | P2 / Low | Back-to-top ignored reduced motion: JS always requested smooth scroll. [before](evidence/source-review-findings.json) | Unexpected motion | Use media preference in scroll options | [PASS](evidence/browser-final.json) |
| BUG-18 | P3 / Low | Breadcrumb used marketing heading: Wrong pageHead argument. [before](evidence/source-review-findings.json) | Unclear long breadcrumb | Use semantic page label; Contact regression | [PASS](evidence/browser-final.json) |

## Open acceptance findings

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| BUILD-next | Next.js production build; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/next-build.json) |
| TYPE-next | Next.js type check; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/next-typecheck.json) |
| DEP-composer | Composer advisory audit; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/composer-audit.json) |
| DEP-npm | npm advisory audit; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/npm-audit.json) |
| DEP-outdated | npm outdated review; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/npm-outdated.json) |
| QA-boost | Required Laravel Boost setup; Implemented behavior meets the stated requirement | Installation attempted; Packagist connection rejected. Available vendor still allowed runtime tests. | BLOCKED | [evidence](../../backend/AGENTS.md) |
| CMS-dashboard | Visual CMS dashboard; Implemented behavior meets the stated requirement | P1: no dashboard UI exists. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| CMS-roles | Super Admin/Admin/Editor permissions; Implemented behavior meets the stated requirement | P1: only users.is_admin exists; granular roles are absent. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| CMS-stats | Database-driven statistics and recent activity; Implemented behavior meets the stated requirement | P1: statistics/activity endpoint and UI absent. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| API-taxonomy | Public homepage/categories/tags endpoints; Implemented behavior meets the stated requirement | P2: dedicated endpoints are absent from implemented route registry. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| RELATED-services | Related services; Implemented behavior meets the stated requirement | P2: no related-services module. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| RELATED-projects | Related/featured portfolio; Implemented behavior meets the stated requirement | P2: no related-project module; home portfolio remains empty-pattern content. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| RELATED-articles | Related articles; Implemented behavior meets the stated requirement | P2: no related-articles module. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| SEO-hash | Production crawlable route acceptance; Implemented behavior meets the stated requirement | P1: static fallback uses hash routes; production SSR/canonical acceptance depends on unbuilt Next.js. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| CONTENT-legal | Final legal/contact/inquiry operations; Implemented behavior meets the stated requirement | Legal drafts and unverified official contact remain; actual project collection stays disabled. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| SEO-domain | Production canonical/domain/sitemap; Implemented behavior meets the stated requirement | No verified public origin; configurable Next.js source is uncompiled. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| NEXT-e2e | Next.js -> Laravel end-to-end; Implemented behavior meets the stated requirement | Next.js packages unavailable; static frontend -> Laravel -> SQLite tested separately. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| MAIL-delivery | Production mail/queue delivery; Implemented behavior meets the stated requirement | Recipient/provider unavailable; real notifications deliberately off. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| LIGHTHOUSE | Lighthouse on five routes; Implemented behavior meets the stated requirement | Lighthouse not installed; npm access blocked. CDP metrics are not Lighthouse scores. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| DB-mysql | MySQL target integrity/performance; Implemented behavior meets the stated requirement | Only isolated SQLite tested; no dedicated MySQL target supplied. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| DB-concurrency | True multi-worker concurrency/load; Implemented behavior meets the stated requirement | Single-process PHP dev server and PHPUnit do not establish production concurrent behavior. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| A11Y-reader | Manual screen reader compatibility; Implemented behavior meets the stated requirement | No manual screen-reader session available. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| A11Y-full | Full WCAG 2.2 AA acceptance; Implemented behavior meets the stated requirement | Keyboard/DOM/selected contrast checks are partial; no full manual/axe certification. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| RESP-firefox | Firefox; Implemented behavior meets the stated requirement | Executable unavailable. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| RESP-safari | Safari; Implemented behavior meets the stated requirement | Unavailable on Windows. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| RESP-device | Physical devices and manual 200% zoom; Implemented behavior meets the stated requirement | Emulated viewport tests do not replace physical-device/assistive review. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| PERF-field | Field CWV/INP at p75; Implemented behavior meets the stated requirement | No real-user dataset; INP remains null. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| SEC-https | Actual TLS/HSTS edge configuration; Implemented behavior meets the stated requirement | No HTTPS staging/production deployment performed. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| SEC-history | Tracked files and Git history secret review; Implemented behavior meets the stated requirement | No accessible .git; ignore rules cannot prove tracking status. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| CMS-password | Password change/forgot/reset UI; Implemented behavior meets the stated requirement | Optional screens/endpoints are absent. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| CMS-media-edit | Separate media metadata editor; Implemented behavior meets the stated requirement | Alt text on upload tested; no separate metadata-edit endpoint. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| OPS-backup | Backup/restore drill; Implemented behavior meets the stated requirement | Not executed; prerequisite for approved staging/deployment. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |

## Harness limitations corrected

Initial missing SQLite driver was an environment blocker. Programmatic minlength/JS-variable mistakes, stale post-login CSRF, dirty form state and cumulative hash-navigation metrics were harness errors, not application fixes. PHP process environment did not populate storage superglobals: final QA auto-prepend now enforces/verifies .qa storage before bootstrapping. Earlier live runs used new SQLite DBs and generated QA credentials but could leave QA session/cache artifacts in application storage; no existing data was deleted. Final separate-storage session-expiry test passes. Baseline cumulative SPA performance samples are discarded. These corrections do not inflate the 18 application-fix count.
