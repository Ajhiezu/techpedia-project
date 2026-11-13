# Security audit

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Reference: [OWASP Top 10:2025](https://top10.owasp.org/2025/). Tests cover direct access, CSRF, session/logout/expiry, hashing, rate limits, SQL payloads as stored data, XSS escaping, mass assignment, uploads, sensitive files, CORS and headers. Fixed rate collisions, scalar-array validation, wildcard CORS, missing headers and media-reference deletion. No confirmed Critical finding is claimed. Granular roles remain an open High/P1 requirement gap. Dependency vulnerability status and Git history are unverified; this is not a zero-vulnerability certification.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| PHP-002 | test_public_services_exclude_drafts; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-003 | test_draft_detail_is_not_public; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-005 | test_private_settings_are_not_exposed; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-013 | test_honeypot_rejects_submission; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-083 | test_special_characters_are_stored_as_data_not_sql; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-084 | test_contact_rate_limit; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-088 | test_password_is_hashed; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-089 | test_private_user_fields_not_exposed; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-090 | test_draft_project_is_hidden; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-099 | test_mass_assignment_does_not_allow_privilege_escalation; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-107 | test_sensitive_files_are_not_public; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-110 | test_cors_does_not_allow_arbitrary_origins; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| CHROME-SEC-xss | API text is escaped on article details; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| EDGE-SEC-xss | API text is escaped on article details; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| LIVE-auth-deny | Unauthenticated admin endpoint returns 401; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-csrf | Login rejects missing CSRF on actual HTTP request; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-notes-private | Private notes are inaccessible publicly; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-files | Sensitive dotfile and traversal rejected; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-cors | No wildcard CORS for untrusted origin; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-headers | Security headers on actual public HTML; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-session-expiry | Expired real file session denies access; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| AUDIT-secrets | Limited embedded-secret pattern scan; No matches to explicitly scanned patterns; not a full secret/history certification | {"scope": "first-party source only, pattern scan; not proof of no secrets; git metadata unavailable", "findings": []} | PASS | [evidence](evidence/secret-scan.json) |
| AUDIT-ignore | Environment ignore configuration; Ignore rules present; no claim about unavailable Git history | Root and backend ignore .env; tracking/history remains unverified | PASS | [evidence](../../.gitignore) |
| AUDIT-prod | Production template safety; Safe production template, not a deployed configuration | Debug disabled, secure cookies, no production secrets | PASS | [evidence](../../backend/.env.production.example) |
| CMS-roles | Super Admin/Admin/Editor permissions; Implemented behavior meets the stated requirement | P1: only users.is_admin exists; granular roles are absent. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| SEC-https | Actual TLS/HSTS edge configuration; Implemented behavior meets the stated requirement | No HTTPS staging/production deployment performed. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| SEC-history | Tracked files and Git history secret review; Implemented behavior meets the stated requirement | No accessible .git; ignore rules cannot prove tracking status. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| DEP-composer | Composer advisory audit; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/composer-audit.json) |
| DEP-npm | npm advisory audit; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/npm-audit.json) |
| DEP-outdated | npm outdated review; Implemented behavior meets the stated requirement | Attempted command failed: unavailable dependencies/registry or missing npm lockfile | BLOCKED | [evidence](evidence/npm-outdated.json) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).

## Security findings and disposition

| Finding / location | Risk | Impact and safe evidence | Recommendation / final status |
| --- | --- | --- | --- |
| Colliding throttle keys; backend/routes/api.php and AppServiceProvider.php | High | Early 429 on valid attempt counts; backend-regression-before.json | Independent named buckets; PASS in backend-final.xml |
| Scalar-array validation bypass; backend/config/content.php and ContactController.php | Medium | QA array inputs caused500; backend-array-before.json | Require integer/string types; PASS422 in backend-final.xml |
| Missing headers; backend/bootstrap/app.php and SecurityHeaders.php | Medium | No nosniff/referrer headers in baseline | Hardening middleware; PASS on actual HTTP |
| Unnecessary wildcard CORS; backend/config/cors.php | Medium | Untrusted origin received wildcard; live-http-before.json. No credentialed-data exploit claimed | Same-origin policy; PASS in live-http.json |
| Deletion of referenced media; MediaController.php | Medium | Authorized delete broke a referenced image | Return409 including soft-deleted references; PASS in backend-final.xml |
| Granular role authorization absent; User.php and RequireAdmin.php | High | Source implements only is_admin; requested Editor/Super Admin not available | Implement required role model and direct endpoint tests before acceptance; FAIL open requirement, not an observed admin bypass |
| Dependency vulnerability state unknown; composer.lock/frontend-next package manifest | Informational | Registry/advisory access failed; npm lockfile absent | Restore access and audit resolved versions; BLOCKED, no clean claim |
| Git tracking/history unverified; workspace metadata | Informational | No accessible .git; limited secret-pattern scan only | Review actual tracked files/history privately; NOT TESTED |
