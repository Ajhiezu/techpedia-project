# Regression testing

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Historical failing baselines are retained. Final PHPUnit has 149 PASS/366 assertions; Chrome and Edge have 70 PASS each; live HTTP/browser has 14 PASS; adapter has 3 PASS. Fixed implementation defects are recorded separately from harness corrections. Programmatic minlength, duplicate JS variable, stale CSRF, dirty-form isolation, cumulative SPA metrics and storage/session assumptions were corrected before accepting results. Final HTTP bootstrap verifies isolated storage before seeding.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
| PHP-001 | test_that_true_is_true; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-002 | test_public_services_exclude_drafts; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-003 | test_draft_detail_is_not_public; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-004 | test_future_publication_is_not_public; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-005 | test_private_settings_are_not_exposed; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-006 | test_anonymous_admin_request_is_unauthorized; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-007 | test_regular_user_cannot_manage_content; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-008 | test_admin_can_create_and_update_content_with_unique_slug_validation; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-009 | test_unknown_content_resource_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-010 | test_contact_is_disabled_until_configured; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-011 | test_contact_is_saved_without_exposing_personal_data; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-012 | test_contact_requires_consent_and_valid_email; Test method assertions pass | 5 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-013 | test_honeypot_rejects_submission; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-014 | test_login_rejects_non_admin_credentials; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-015 | test_admin_login; Test method assertions pass | 4 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-016 | test_contact_notes_are_private; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-017 | test_non_admin_cannot_promote_their_account_through_content_api; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-018 | test_dotted_resource_name_is_not_a_config_lookup; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-019 | test_admin_image_upload_is_stored_and_can_be_deleted; Test method assertions pass | 5 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-020 | test_script_upload_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-021 | test_the_application_returns_a_successful_response; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
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
| PHP-074 | test_invalid_inquiry_not_stored with data set #0; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-075 | test_invalid_inquiry_not_stored with data set #1; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-076 | test_invalid_inquiry_not_stored with data set #2; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-077 | test_invalid_inquiry_not_stored with data set #3; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-078 | test_invalid_inquiry_not_stored with data set #4; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-079 | test_invalid_inquiry_not_stored with data set #5; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-080 | test_invalid_inquiry_not_stored with data set #6; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-081 | test_invalid_inquiry_not_stored with data set #7; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-082 | test_invalid_inquiry_not_stored with data set #8; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-083 | test_special_characters_are_stored_as_data_not_sql; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-084 | test_contact_rate_limit; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-085 | test_login_rate_limit; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-086 | test_unregistered_email_returns_generic_error; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-087 | test_logout_invalidates_authentication; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-088 | test_password_is_hashed; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-089 | test_private_user_fields_not_exposed; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-090 | test_draft_project_is_hidden; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-091 | test_soft_deleted_post_remains_hidden; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-092 | test_pagination_filter_sort_and_eager_loading; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-093 | test_invalid_pagination_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-094 | test_parent_delete_nulls_child_fk; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-095 | test_message_delete_cascades_private_notes; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-096 | test_transaction_rollback_restores_data; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-097 | test_unique_slug_enforced_by_database; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-098 | test_invalid_fk_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-099 | test_mass_assignment_does_not_allow_privilege_escalation; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-100 | test_post_tags_sync; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-101 | test_messages_workflow_and_filter; Test method assertions pass | 6 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-102 | test_oversized_media_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-103 | test_referenced_media_cannot_be_deleted; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-104 | test_published_date_cannot_be_accidentally_cleared; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-105 | test_category_cannot_be_its_own_parent; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-106 | test_public_responses_have_security_headers; Test method assertions pass | 4 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-107 | test_sensitive_files_are_not_public; Test method assertions pass | 3 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-108 | test_post_list_omits_heavy_body_but_detail_keeps_it; Test method assertions pass | 5 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-109 | test_category_ancestor_cycle_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-110 | test_cors_does_not_allow_arbitrary_origins; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
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
| PHP-148 | test_array_foreign_key_is_rejected; Test method assertions pass | 1 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| PHP-149 | test_array_service_slug_is_rejected; Test method assertions pass | 2 PHPUnit assertions; SQLite :memory: | PASS | [evidence](evidence/backend-final.xml) |
| CHROME-PAGE-/ | Open /; Assertions pass | Transform Your Ideas Into Powerful Digital Solutions. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/services | Open /services; Assertions pass | Digital services shaped around your business context. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/services/website-development | Open /services/website-development; Assertions pass | Website Development | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/services/e-commerce-development | Open /services/e-commerce-development; Assertions pass | E-Commerce Development | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/services/custom-software-development | Open /services/custom-software-development; Assertions pass | Custom Software Development | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/services/erp-business-solutions | Open /services/erp-business-solutions; Assertions pass | ERP & Business Solutions | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/services/ui-ux-design | Open /services/ui-ux-design; Assertions pass | UI/UX Design | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/services/maintenance-it-support | Open /services/maintenance-it-support; Assertions pass | Maintenance & IT Support | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/portfolio | Open /portfolio; Assertions pass | Selected digital work. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/portfolio/approved-project | Open /portfolio/approved-project; Assertions pass | QA Approved project | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/about | Open /about; Assertions pass | Digital solutions built around practical business needs. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/process | Open /process; Assertions pass | A shared path from a question to a useful digital outcome. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/insights | Open /insights; Assertions pass | Ideas for making digital work more understandable. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/insights/article-0 | Open /insights/article-0; Assertions pass | <img src=x onerror="window.injected=true"> | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/contact | Open /contact; Assertions pass | Tell us about the work you are considering. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/faq | Open /faq; Assertions pass | Useful information before you begin. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/privacy-policy | Open /privacy-policy; Assertions pass | Privacy Policy | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/terms | Open /terms; Assertions pass | Terms & Conditions | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PAGE-/missing-page | Open /missing-page; Assertions pass | This page is not available. | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/ | / at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/services | /services at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/services/website-development | /services/website-development at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/services/e-commerce-development | /services/e-commerce-development at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/services/custom-software-development | /services/custom-software-development at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/services/erp-business-solutions | /services/erp-business-solutions at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/services/ui-ux-design | /services/ui-ux-design at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/services/maintenance-it-support | /services/maintenance-it-support at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/portfolio | /portfolio at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/portfolio/approved-project | /portfolio/approved-project at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/about | /about at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/process | /process at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/insights | /insights at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/insights/article-0 | /insights/article-0 at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/contact | /contact at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/faq | /faq at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/privacy-policy | /privacy-policy at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/terms | /terms at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-RESP-/missing-page | /missing-page at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/browser-final.json) |
| CHROME-NAV-breadcrumb | Contact breadcrumb uses the page name; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-NAV-links | All internal navigation destinations exist; Assertions pass | ["/", "/portfolio", "/about", "/insights", "/contact", "/services", "/services/website-development", "/services/custom-software-development", "/services/ui-ux-design", "/process", "/faq", "/services/e-commerce-development", "/privacy-policy", "/terms"] | PASS | [evidence](evidence/browser-final.json) |
| CHROME-NAV-images | Image sources resolve with explicit intrinsic size; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PORT-filter | Portfolio filter changes cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-BLOG-pagination | Article adapter reads all API pages; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-BLOG-filter | Blog category filter hides unrelated cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-BLOG-metadata | Blog detail shows date and tags; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-SEC-xss | API text is escaped on article details; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-selection | Service selection carries to contact; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-invalid-name- | Reject invalid name ; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-invalid-email- | Reject invalid email ; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-invalid-email-invalid | Reject invalid email invalid; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-invalid-description- | Reject invalid description ; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-invalid-description-short | Reject invalid description short; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-invalid-consent-false | Reject invalid consent false; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-length | HTML form specifies maximum lengths; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-double | Repeated submit events produce one HTTP request; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-success | Valid special-character inquiry confirms successful HTTP persistence contract; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-failure | Failure never produces false success: failure; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-FORM-network | Failure never produces false success: network; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-skip | Skip link focuses content without routing to 404; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-dropdown | Dropdown Escape restores trigger focus; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-mobile | Mobile dialog traps focus and restores trigger; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-faq | FAQ expanded state matches panel visibility; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-labels | All contact inputs have accessible labels; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-A11Y-motion | Reduced motion preference disables smooth scrolling; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-NAV-backtop | Back-to-top honors reduced motion; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-SEO-meta | Distinct descriptions for home, services and contact; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-SEO-noindex | Pre-publication site prevents indexing; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-JS-errors | No unhandled JavaScript exceptions; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-DATA-unavailable | Unavailable API produces visible fallback without uncaught error; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PORT-empty | Empty portfolio uses honest empty state; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| EDGE-PAGE-/ | Open /; Assertions pass | Transform Your Ideas Into Powerful Digital Solutions. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/services | Open /services; Assertions pass | Digital services shaped around your business context. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/services/website-development | Open /services/website-development; Assertions pass | Website Development | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/services/e-commerce-development | Open /services/e-commerce-development; Assertions pass | E-Commerce Development | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/services/custom-software-development | Open /services/custom-software-development; Assertions pass | Custom Software Development | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/services/erp-business-solutions | Open /services/erp-business-solutions; Assertions pass | ERP & Business Solutions | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/services/ui-ux-design | Open /services/ui-ux-design; Assertions pass | UI/UX Design | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/services/maintenance-it-support | Open /services/maintenance-it-support; Assertions pass | Maintenance & IT Support | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/portfolio | Open /portfolio; Assertions pass | Selected digital work. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/portfolio/approved-project | Open /portfolio/approved-project; Assertions pass | QA Approved project | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/about | Open /about; Assertions pass | Digital solutions built around practical business needs. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/process | Open /process; Assertions pass | A shared path from a question to a useful digital outcome. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/insights | Open /insights; Assertions pass | Ideas for making digital work more understandable. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/insights/article-0 | Open /insights/article-0; Assertions pass | <img src=x onerror="window.injected=true"> | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/contact | Open /contact; Assertions pass | Tell us about the work you are considering. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/faq | Open /faq; Assertions pass | Useful information before you begin. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/privacy-policy | Open /privacy-policy; Assertions pass | Privacy Policy | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/terms | Open /terms; Assertions pass | Terms & Conditions | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PAGE-/missing-page | Open /missing-page; Assertions pass | This page is not available. | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/ | / at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/services | /services at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/services/website-development | /services/website-development at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/services/e-commerce-development | /services/e-commerce-development at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/services/custom-software-development | /services/custom-software-development at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/services/erp-business-solutions | /services/erp-business-solutions at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/services/ui-ux-design | /services/ui-ux-design at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/services/maintenance-it-support | /services/maintenance-it-support at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/portfolio | /portfolio at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/portfolio/approved-project | /portfolio/approved-project at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/about | /about at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/process | /process at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/insights | /insights at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/insights/article-0 | /insights/article-0 at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/contact | /contact at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/faq | /faq at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/privacy-policy | /privacy-policy at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/terms | /terms at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-RESP-/missing-page | /missing-page at eight viewport widths; Assertions pass | 8/8 widths without horizontal overflow | PASS | [evidence](evidence/edge-final.json) |
| EDGE-NAV-breadcrumb | Contact breadcrumb uses the page name; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-NAV-links | All internal navigation destinations exist; Assertions pass | ["/", "/portfolio", "/about", "/insights", "/contact", "/services", "/services/website-development", "/services/custom-software-development", "/services/ui-ux-design", "/process", "/faq", "/services/e-commerce-development", "/privacy-policy", "/terms"] | PASS | [evidence](evidence/edge-final.json) |
| EDGE-NAV-images | Image sources resolve with explicit intrinsic size; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PORT-filter | Portfolio filter changes cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-BLOG-pagination | Article adapter reads all API pages; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-BLOG-filter | Blog category filter hides unrelated cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-BLOG-metadata | Blog detail shows date and tags; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-SEC-xss | API text is escaped on article details; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-selection | Service selection carries to contact; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-invalid-name- | Reject invalid name ; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-invalid-email- | Reject invalid email ; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-invalid-email-invalid | Reject invalid email invalid; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-invalid-description- | Reject invalid description ; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-invalid-description-short | Reject invalid description short; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-invalid-consent-false | Reject invalid consent false; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-length | HTML form specifies maximum lengths; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-double | Repeated submit events produce one HTTP request; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-success | Valid special-character inquiry confirms successful HTTP persistence contract; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-failure | Failure never produces false success: failure; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-FORM-network | Failure never produces false success: network; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-skip | Skip link focuses content without routing to 404; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-dropdown | Dropdown Escape restores trigger focus; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-mobile | Mobile dialog traps focus and restores trigger; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-faq | FAQ expanded state matches panel visibility; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-labels | All contact inputs have accessible labels; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-A11Y-motion | Reduced motion preference disables smooth scrolling; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-NAV-backtop | Back-to-top honors reduced motion; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-SEO-meta | Distinct descriptions for home, services and contact; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-SEO-noindex | Pre-publication site prevents indexing; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-JS-errors | No unhandled JavaScript exceptions; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-DATA-unavailable | Unavailable API produces visible fallback without uncaught error; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PORT-empty | Empty portfolio uses honest empty state; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| LIVE-public | Public list uses real Laravel/database; HTTP/database assertions pass | Six seeded services from isolated SQLite | PASS | [evidence](evidence/live-http.json) |
| LIVE-pagination | Real posts paginate 20 + 1; HTTP/database assertions pass | {"firstPageBytes": 5894, "total": 21} | PASS | [evidence](evidence/live-http.json) |
| LIVE-auth-deny | Unauthenticated admin endpoint returns 401; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-csrf | Login rejects missing CSRF on actual HTTP request; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-login | Valid session login succeeds with CSRF; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-contact | Real contact is persisted before success; HTTP/database assertions pass | 201 followed by authorized read of persisted row | PASS | [evidence](evidence/live-http.json) |
| LIVE-notes-private | Private notes are inaccessible publicly; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-files | Sensitive dotfile and traversal rejected; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-cors | No wildcard CORS for untrusted origin; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-headers | Security headers on actual public HTML; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-robots | Actual web root robots prevents indexing; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-session-expiry | Expired real file session denies access; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-logout | Logout invalidates a real session; HTTP/database assertions pass | Assertions passed | PASS | [evidence](evidence/live-http.json) |
| LIVE-browser-contact | Real Chrome -> Laravel -> SQLite contact; Browser success, no CSP violations, persisted second message | Real API list/detail lazy loading, publication date, tags and service detail verified.<br>Chrome displayed confirmed real Laravel success; no CSP violations or JS exceptions.<br> Persisted browser rows: 1 | PASS | [evidence](evidence/live-http.json) |
| ADAPTER-1 | Pagination stays on configured origin; Node assertions pass | Node test runner exit 0 | PASS | [evidence](evidence/unit-adapter.json) |
| ADAPTER-2 | HTTP failure rejects; Node assertions pass | Node test runner exit 0 | PASS | [evidence](evidence/unit-adapter.json) |
| ADAPTER-3 | Malformed payload rejects; Node assertions pass | Node test runner exit 0 | PASS | [evidence](evidence/unit-adapter.json) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
