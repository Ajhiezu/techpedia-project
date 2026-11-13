# API contract

Base: `/api/v1`. All requests should send `Accept: application/json`. Public limits: 60/minute; contact/login limits: 5/minute. Invalid input returns 422 with `errors`; unauthorized/forbidden/not-found return 401/403/404. Database-backed behavior is now covered by Phase 5 tests on isolated SQLite; target MySQL remains unverified. See ../quality-assurance/PHASE-5-COMPLETION-REPORT.md.

## Public

- `GET /services`, `/projects`, `/posts`, `/faqs`, `/testimonials`: 20-item pagination, optional `page`; optional numeric `category_id` except testimonials.
- `GET /services/{slug}`, `/projects/{slug}`, `/posts/{slug}`: published detail or 404. Projects include images/technologies; posts include tags. Future/unpublished/deleted records remain private.
- `GET /settings`: fixed public key allowlist; values are stored strings.
- `POST /contact`: name, email, company?, service_needed, budget?, message (10-10000 characters), consent accepted, website empty. Returns 201 with a generic confirmation. Disabled collection returns 503 without persistence.

## Admin session and CSRF

1. `GET /admin/csrf` to establish a session and obtain `{token: ...}`.
2. Preserve the session cookie and send `X-CSRF-TOKEN` with every mutation, including login.
3. `POST /admin/login` with email/password for an admin account.
4. After login regenerates the session, fetch `/admin/csrf` again before the next mutation.
5. `GET /admin/me` reads the session; `POST /admin/logout` invalidates it.

Mutations require native Laravel CSRF protections; do not disable them to make clients work. Non-admin accounts cannot use management endpoints. The API uses cookies, not bearer tokens.

## Management

`GET/POST /admin/content/{resource}` and `GET/PUT/DELETE /admin/content/{resource}/{id}`. PUT expects all fields marked required in `config/content.php`.

Resources: services, projects, posts, faqs, testimonials, service-categories, project-categories, faq-categories, categories, tags, settings, project-images, project-technologies. Names map to a fixed registry, never arbitrary tables. Posts accept optional `tag_ids`; settings values validate against their declared type. Publishing a post/project initializes its publication date if not already provided.

`GET /admin/messages?status=new`, `GET /admin/messages/{id}`, `PATCH /admin/messages/{id}` with status new/read/in_progress/replied/closed, `POST /admin/messages/{id}/notes` with note, `DELETE /admin/messages/{id}`.

`GET/POST /admin/media`, `DELETE /admin/media/{id}`. Upload is multipart with file and optional alt_text. Store returned file_path in content image fields. Files are served under `/storage/{file_path}` after creating the storage link.

Raw Eloquent paginators are used: `data`, `current_page`, `last_page`, `next_page_url`, `per_page`, `total`. They are not JsonResource `{meta,links}` pagination wrappers.

List responses now omit full service/project/article bodies; request the detail endpoint for full content. Media deletion returns 409 while referenced, including soft-deleted content. Rate limits use independent named buckets.
