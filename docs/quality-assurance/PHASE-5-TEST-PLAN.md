# Phase 5 test plan

Tanggal: 13 November 2026. Scope: Phase 1-4 repository, both frontend implementations, Laravel API and isolated database. No production deployment or production destructive tests are authorized in this phase.

## Audit and baseline

Read Phase 1 completion, Phase 2 completion/tokens/design, current Phase 1-4 status, frontend architecture/testing, backend architecture/API/schema/relations, all first-party source/config/routes and existing tests. First-party source hashes are recorded in evidence/baseline-source-inventory.json. Repository has no accessible .git; credential tracking/history cannot be certified.

Backend vendor dependencies are now present, superseding the earlier Phase 4 limitation. SQLite DLL is available but not enabled globally. Tests invoke PHP with `-d extension=pdo_sqlite`; the global PHP configuration is unchanged. Next.js packages remain unavailable due npm EACCES. Required Boost installation was attempted and failed on Packagist access.

## Feature inventory

- Nineteen public route cases: Home; Services; six service details; Portfolio/list/detail; About; Process; Insights/list/detail; Contact; FAQ; Privacy; Terms; 404.
- Navigation: desktop/mobile, dropdown, footer, internal links, service selection, breadcrumb, back-to-top, skip/focus/keyboard, reduced motion.
- Services/categories: create/read/update/delete, required fields, invalid/FK/duplicate data, anonymous and regular-user rejection.
- Portfolio/categories/media: published/draft/future/soft-deleted visibility, list/detail/category controls, parent/child behavior, image reference protection.
- Posts/categories/tags: CRUD, publication date, scheduled status, pagination, sorting/filtering, tag pivot and rollback.
- FAQ/testimonials/settings: CRUD, validation, publication controls and public settings allowlist.
- Contact: required/invalid/long/special-character input, consent/honeypot, duplicate browser events, loading/success/failure/network error, confirmed database persistence; admin read/status/private notes/filter/delete.
- Authentication/security: real session login/logout, CSRF on live HTTP, wrong/nonexistent account, rate limiting, admin authorization, mass assignment, injection payloads as data, public data exposure, CORS, headers, sensitive files.
- Media: valid raster images, invalid/executable/SVG/oversized files, alt text, deletion/reference behavior.
- Database: migrations on disposable SQLite, unique/foreign keys, null/cascade behavior, soft deletion, transaction rollback, query count and list payload size.
- Performance: measure cold documents on five representative pages before/after observed optimization; record assets and API bytes; no invented Lighthouse/field scores.
- Responsive: all nineteen routes at eight target widths. Chrome and Edge; unavailable Firefox/Safari/devices remain NOT TESTED.
- Accessibility: semantic/heading/labels/focus, contrast calculation, keyboard/menu/accordion, image sizes/alt, reduced motion. Manual screen reader remains NOT TESTED.
- SEO: titles/descriptions, article date/tags, noindex/robots, canonical/OG/sitemap production configuration, draft exclusion; deployment domain is not supplied.

## Missing implemented features

The existing CMS is an administration API. A visual Admin Dashboard, statistics/recent activity UI, Super Admin/Editor permission model, password change/forgot/reset screens, related-content features and dedicated public homepage/categories/tags endpoints are absent. These are recorded as FAIL or NOT TESTED as appropriate, never PASS and never described as working CMS features.

## Safety and evidence

Unit/API integration tests force APP_ENV=testing, SQLite :memory:, array mail and no real notifications. Live HTTP tests use APP_ENV=qa so CSRF stays active, a newly created database under .qa/live-*/, separate storage/session/cache, generated QA-only credentials in process memory and notifications off. Existing .env and project database are not modified. Reports never store QA passwords, cookies or CSRF tokens.

Tools: PHP 8.5, Composer, PHPUnit, Node 24, Chrome/Edge CDP, Python. Browser fixtures are explicitly distinguished from real Laravel HTTP tests. Raw JSON/JUnit/screenshots are retained in evidence/. Every final case has PASS, FAIL, BLOCKED or NOT TESTED; aggregate counts derive from the final case ledger. Historical failures remain in baseline evidence and bug tracking even after regression passes.

## Acceptance

No P0/P1 open issues; complete important CMS/auth/API/database/functional/security checks; production Next.js build and type check; dependency security; approved business/legal/domain settings; documented minor issues. If these cannot be met, report NOT READY FOR DEPLOYMENT and wait for explicit user approval before Phase 6.
