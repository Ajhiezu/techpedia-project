# CMS testing

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Real Laravel tests cover thirteen resource CRUD types, empty/invalid data, duplicates where unique, direct unauthorized access, messages/status/filter/private notes and media. Real sessions/CSRF/logout/expiry are exercised over HTTP. Fixed media reference deletion, cycles, dates and rate limits. Visual dashboard/statistics and granular roles are absent; optional password/media-edit screens are not claimed.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| PHP-006 | test_anonymous_admin_request_is_unauthorized; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-008 | test_admin_can_create_and_update_content_with_unique_slug_validation; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-009 | test_unknown_content_resource_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-014 | test_login_rejects_non_admin_credentials; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-015 | test_admin_login; Test method assertions pass | 4 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-016 | test_contact_notes_are_private; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-017 | test_non_admin_cannot_promote_their_account_through_content_api; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-018 | test_dotted_resource_name_is_not_a_config_lookup; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-019 | test_admin_image_upload_is_stored_and_can_be_deleted; Test method assertions pass | 5 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-022 | test_resource_crud with data set #0; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-023 | test_resource_crud with data set #1; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-024 | test_resource_crud with data set #2; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-025 | test_resource_crud with data set #3; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-026 | test_resource_crud with data set #4; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-027 | test_resource_crud with data set #5; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-028 | test_resource_crud with data set #6; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-029 | test_resource_crud with data set #7; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-030 | test_resource_crud with data set #8; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-031 | test_resource_crud with data set #9; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-032 | test_resource_crud with data set #10; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-033 | test_resource_crud with data set #11; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-034 | test_resource_crud with data set #12; Test method assertions pass | 9 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-035 | test_empty_resource_payload_rejected with data set #0; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-036 | test_empty_resource_payload_rejected with data set #1; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-037 | test_empty_resource_payload_rejected with data set #2; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-038 | test_empty_resource_payload_rejected with data set #3; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-039 | test_empty_resource_payload_rejected with data set #4; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-040 | test_empty_resource_payload_rejected with data set #5; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-041 | test_empty_resource_payload_rejected with data set #6; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-042 | test_empty_resource_payload_rejected with data set #7; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-043 | test_empty_resource_payload_rejected with data set #8; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-044 | test_empty_resource_payload_rejected with data set #9; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-045 | test_empty_resource_payload_rejected with data set #10; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-046 | test_empty_resource_payload_rejected with data set #11; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-047 | test_empty_resource_payload_rejected with data set #12; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-048 | test_resource_mutation_denies_anonymous with data set #0; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-049 | test_resource_mutation_denies_anonymous with data set #1; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-050 | test_resource_mutation_denies_anonymous with data set #2; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-051 | test_resource_mutation_denies_anonymous with data set #3; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-052 | test_resource_mutation_denies_anonymous with data set #4; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-053 | test_resource_mutation_denies_anonymous with data set #5; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-054 | test_resource_mutation_denies_anonymous with data set #6; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-055 | test_resource_mutation_denies_anonymous with data set #7; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-056 | test_resource_mutation_denies_anonymous with data set #8; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-057 | test_resource_mutation_denies_anonymous with data set #9; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-058 | test_resource_mutation_denies_anonymous with data set #10; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-059 | test_resource_mutation_denies_anonymous with data set #11; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-060 | test_resource_mutation_denies_anonymous with data set #12; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-061 | test_resource_mutation_denies_non_admin with data set #0; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-062 | test_resource_mutation_denies_non_admin with data set #1; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-063 | test_resource_mutation_denies_non_admin with data set #2; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-064 | test_resource_mutation_denies_non_admin with data set #3; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-065 | test_resource_mutation_denies_non_admin with data set #4; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-066 | test_resource_mutation_denies_non_admin with data set #5; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-067 | test_resource_mutation_denies_non_admin with data set #6; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-068 | test_resource_mutation_denies_non_admin with data set #7; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-069 | test_resource_mutation_denies_non_admin with data set #8; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-070 | test_resource_mutation_denies_non_admin with data set #9; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-071 | test_resource_mutation_denies_non_admin with data set #10; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-072 | test_resource_mutation_denies_non_admin with data set #11; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-073 | test_resource_mutation_denies_non_admin with data set #12; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-085 | test_login_rate_limit; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-087 | test_logout_invalidates_authentication; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-095 | test_message_delete_cascades_private_notes; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-100 | test_post_tags_sync; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-101 | test_messages_workflow_and_filter; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-102 | test_oversized_media_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-103 | test_referenced_media_cannot_be_deleted; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-111 | test_invalid_type_rejected_by_every_resource with data set #0; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-112 | test_invalid_type_rejected_by_every_resource with data set #1; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-113 | test_invalid_type_rejected_by_every_resource with data set #2; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-114 | test_invalid_type_rejected_by_every_resource with data set #3; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-115 | test_invalid_type_rejected_by_every_resource with data set #4; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-116 | test_invalid_type_rejected_by_every_resource with data set #5; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-117 | test_invalid_type_rejected_by_every_resource with data set #6; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-118 | test_invalid_type_rejected_by_every_resource with data set #7; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-119 | test_invalid_type_rejected_by_every_resource with data set #8; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-120 | test_invalid_type_rejected_by_every_resource with data set #9; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-121 | test_invalid_type_rejected_by_every_resource with data set #10; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-122 | test_invalid_type_rejected_by_every_resource with data set #11; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-123 | test_invalid_type_rejected_by_every_resource with data set #12; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-124 | test_duplicates_rejected_for_unique_resources with data set #0; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-125 | test_duplicates_rejected_for_unique_resources with data set #1; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-126 | test_duplicates_rejected_for_unique_resources with data set #2; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-127 | test_duplicates_rejected_for_unique_resources with data set #3; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-128 | test_duplicates_rejected_for_unique_resources with data set #4; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-129 | test_duplicates_rejected_for_unique_resources with data set #5; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-130 | test_duplicates_rejected_for_unique_resources with data set #6; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-131 | test_duplicates_rejected_for_unique_resources with data set #7; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-132 | test_duplicates_rejected_for_unique_resources with data set #8; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-133 | test_anonymous_cannot_read_update_or_delete_resource with data set #0; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-134 | test_anonymous_cannot_read_update_or_delete_resource with data set #1; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-135 | test_anonymous_cannot_read_update_or_delete_resource with data set #2; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-136 | test_anonymous_cannot_read_update_or_delete_resource with data set #3; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-137 | test_anonymous_cannot_read_update_or_delete_resource with data set #4; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-138 | test_anonymous_cannot_read_update_or_delete_resource with data set #5; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-139 | test_anonymous_cannot_read_update_or_delete_resource with data set #6; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-140 | test_anonymous_cannot_read_update_or_delete_resource with data set #7; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-141 | test_anonymous_cannot_read_update_or_delete_resource with data set #8; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-142 | test_anonymous_cannot_read_update_or_delete_resource with data set #9; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-143 | test_anonymous_cannot_read_update_or_delete_resource with data set #10; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-144 | test_anonymous_cannot_read_update_or_delete_resource with data set #11; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-145 | test_anonymous_cannot_read_update_or_delete_resource with data set #12; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-146 | test_wrong_admin_password_rejected; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-147 | test_used_media_in_soft_deleted_content_is_protected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| LIVE-login | Valid session login succeeds with CSRF; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-logout | Logout invalidates a real session; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| CMS-dashboard | Visual CMS dashboard; Implemented behavior meets the stated requirement | P1: no dashboard UI exists. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| CMS-stats | Database-driven statistics and recent activity; Implemented behavior meets the stated requirement | P1: statistics/activity endpoint and UI absent. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| MAIL-delivery | Production mail/queue delivery; Implemented behavior meets the stated requirement | Recipient/provider unavailable; real notifications deliberately off. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| CMS-password | Password change/forgot/reset UI; Implemented behavior meets the stated requirement | Optional screens/endpoints are absent. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| CMS-media-edit | Separate media metadata editor; Implemented behavior meets the stated requirement | Alt text on upload tested; no separate metadata-edit endpoint. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
