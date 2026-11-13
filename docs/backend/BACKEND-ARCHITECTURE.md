> Phase 5 update: available Laravel vendor now supports actual isolated SQLite/HTTP testing. Prior statements about absent vendor describe the earlier handoff. Current results: [Phase 5 completion](../quality-assurance/PHASE-5-COMPLETION-REPORT.md). Next.js build remains blocked.

# Backend architecture - current implementation

Updated 2026-11-13. Laravel 13/PHP 8.3+ matches the pre-existing Composer manifest/lock; local PHP is 8.5. SQLite is the local default; MySQL is configurable. Composer dependencies are currently unavailable, so this is implemented source with syntax validation, not a verified running backend.

## Request flow

`routes/api.php` -> throttle -> public controller or admin session/CSRF/auth/admin middleware -> validated whitelist -> Eloquent -> database -> JSON response.

- Public content is allowlisted and filtered by publication state/time. Responses select public fields explicitly; settings keys are allowlisted.
- Administration uses native Laravel session authentication, CSRF and `users.is_admin`; logout invalidates the session. There are no default accounts. Use `php artisan techpedia:admin` interactively.
- The earlier Sanctum/Spatie/editor/super-admin design is deferred. No token auth or granular role implementation is claimed. Native mechanisms avoid inventing authentication while package installation is blocked. See [Laravel authentication](https://laravel.com/framework/docs/13.x/authentication).
- `config/content.php` defines resource models, allowed writable fields, validation and relation constraints. Blog tag sync and related content writes use database transactions.
- Projects/posts use soft deletion. Published future content is hidden. The Laravel scheduler publishes due scheduled posts.
- Inquiry input is validated, minimally persisted, never publicly listed, and throttled to 5/minute. IP/user agent columns remain nullable and are not populated. Submission is disabled by default until data handling is reviewed.
- Admins can list/read/update/delete inquiries and add private notes. Successful submission means database persistence, not email delivery or a project commitment.
- Optional `NotifyInquiryRecipient` jobs have three attempts and run only when configured. Notifications default off. A notification dispatch failure is reported without misrepresenting a saved message as lost. `MAIL_MAILER=log` is local-only delivery.
- Media upload accepts JPG/PNG/WebP images, at most 5 MB and 6000x6000 pixels; storage-generated filenames avoid user-selected paths. SVG/scripts are rejected. Use `php artisan storage:link` for public files.

## Runtime configuration

Use `backend/.env.example`. Preserve existing local secrets; never commit `.env`. Production needs a real application key, HTTPS, `APP_DEBUG=false`, `SESSION_SECURE_COOKIE=true`, database/backups, private logs, mail/queue settings if notifications are enabled, and a business-approved retention policy. Contact is enabled explicitly through `CONTACT_FORM_ENABLED=true`.

The root Laravel web route serves the preserved static frontend. The separate Next.js server proxies API/storage to Laravel via server-only `BACKEND_URL`.

API routes and examples: [API-CONTRACT.md](API-CONTRACT.md). Acceptance and remaining checks: [../development/PHASE-1-4-STATUS.md](../development/PHASE-1-4-STATUS.md).
