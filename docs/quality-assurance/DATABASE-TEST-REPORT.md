# Database testing

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Migrations run only on new SQLite QA databases; PHPUnit uses :memory:. Unique/FK constraints, parent nulling, cascade notes, soft deletion, tag pivot and transaction rollback pass. A 25-service query-count assertion stays at most four queries. Existing project DB was not migrated/reset/deleted. MySQL and true production concurrency/load are NOT TESTED.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| PHP-091 | test_soft_deleted_post_remains_hidden; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-092 | test_pagination_filter_sort_and_eager_loading; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-094 | test_parent_delete_nulls_child_fk; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-096 | test_transaction_rollback_restores_data; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-097 | test_unique_slug_enforced_by_database; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-098 | test_invalid_fk_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-148 | test_array_foreign_key_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| DB-mysql | MySQL target integrity/performance; Implemented behavior meets the stated requirement | Only isolated SQLite tested; no dedicated MySQL target supplied. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| DB-concurrency | True multi-worker concurrency/load; Implemented behavior meets the stated requirement | Single-process PHP dev server and PHPUnit do not establish production concurrent behavior. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
