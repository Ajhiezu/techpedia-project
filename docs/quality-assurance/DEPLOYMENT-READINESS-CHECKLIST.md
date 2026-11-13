# Deployment readiness checklist

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

**NOT READY FOR DEPLOYMENT. Phase 6 not authorized.**

- [x] Real static-browser and Laravel/SQLite tests, bug repairs and regression evidence.
- [x] Actual HTTP CSRF/login/logout/expiry and database-confirmed contact submission.
- [x] Validated upload/reference protection, CORS and hardening headers.
- [x] Static build and PHP/JavaScript syntax checks.
- [x] Safe production environment template without credentials; collection/indexing off by default.
- [x] QA reports, raw evidence, final case ledger and completion verdict.
- [ ] Required visual CMS/statistics and granular roles implemented/accepted.
- [ ] Next.js packages/lockfile/type check/production build successful.
- [ ] Next.js real integration and production canonical/sitemap verified.
- [ ] Dependency advisory/outdated review complete.
- [ ] Dedicated MySQL and true multi-worker/load validation.
- [ ] Full manual accessibility/screen reader/device and Lighthouse/field review.
- [ ] Verified domain/contact/legal/business facts/retention and inquiry owner.
- [ ] Actual HTTPS/TLS and edge header verification on approved staging.
- [ ] Mail recipient/provider, queue worker and accepted test delivery.
- [ ] Backup/restore drill, asset storage/access and migration/rollback review.
- [ ] Explicit user approval for Phase 6.

## Proposed procedure, not executed

Close P1 gaps and BLOCKED tests first. Set verified domain and server-only variables through a secret store; retain noindex/collection-off until legal/operations acceptance. Take private consistent DB/asset backups, record checksums and prove restoration on an isolated database. Review additive migrations before migrate --force; never migrate:fresh on existing data. Build with a resolved lockfile and passing CI/audit results. Configure storage permissions/link, queue and scheduler, then test staging HTTPS/CSRF/inquiry/SEO. Define app rollback independently of destructive DB rollback and preserve schema compatibility/backups. Publish only after explicit approval.
