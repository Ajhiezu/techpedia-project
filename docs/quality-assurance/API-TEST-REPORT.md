# API testing

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Public/admin routes, status codes, publication filtering, pagination/filter/sort, settings allowlist, validation, unique keys and access checks run against Laravel. Node adapter tests cover pagination-origin safety and failure/payload handling. Fixed colliding throttle keys, scalar-array bypass, excessive list fields and CORS. Dedicated public homepage/taxonomy endpoints remain absent.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| PHP-001 | test_that_true_is_true; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-004 | test_future_publication_is_not_public; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-007 | test_regular_user_cannot_manage_content; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-010 | test_contact_is_disabled_until_configured; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-011 | test_contact_is_saved_without_exposing_personal_data; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-012 | test_contact_requires_consent_and_valid_email; Test method assertions pass | 5 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-020 | test_script_upload_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-021 | test_the_application_returns_a_successful_response; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-074 | test_invalid_inquiry_not_stored with data set #0; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-075 | test_invalid_inquiry_not_stored with data set #1; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-076 | test_invalid_inquiry_not_stored with data set #2; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-077 | test_invalid_inquiry_not_stored with data set #3; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-078 | test_invalid_inquiry_not_stored with data set #4; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-079 | test_invalid_inquiry_not_stored with data set #5; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-080 | test_invalid_inquiry_not_stored with data set #6; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-081 | test_invalid_inquiry_not_stored with data set #7; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-082 | test_invalid_inquiry_not_stored with data set #8; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-086 | test_unregistered_email_returns_generic_error; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-093 | test_invalid_pagination_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-104 | test_published_date_cannot_be_accidentally_cleared; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-105 | test_category_cannot_be_its_own_parent; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-106 | test_public_responses_have_security_headers; Test method assertions pass | 4 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-108 | test_post_list_omits_heavy_body_but_detail_keeps_it; Test method assertions pass | 5 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-109 | test_category_ancestor_cycle_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-149 | test_array_service_slug_is_rejected; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| LIVE-public | Public list uses real Laravel/database; HTTP/database assertions pass | Six seeded services from isolated SQLite | PASS | [evidence](evidence/live-http.json) |
| LIVE-pagination | Real posts paginate 20 + 1; HTTP/database assertions pass | {"firstPageBytes": 5894, "total": 21} | PASS | [evidence](evidence/live-http.json) |
| ADAPTER-1 | Pagination stays on configured origin; Node assertions pass | Node test runner exit 0 | PASS | [evidence](evidence/unit-adapter.json) |
| ADAPTER-2 | HTTP failure rejects; Node assertions pass | Node test runner exit 0 | PASS | [evidence](evidence/unit-adapter.json) |
| ADAPTER-3 | Malformed payload rejects; Node assertions pass | Node test runner exit 0 | PASS | [evidence](evidence/unit-adapter.json) |
| API-taxonomy | Public homepage/categories/tags endpoints; Implemented behavior meets the stated requirement | P2: dedicated endpoints are absent from implemented route registry. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
