# Frontend data contract

`GET /api/v1/{services|projects|posts|faqs|testimonials}` returns a Laravel length-aware paginator with `data`, `current_page`, `last_page`, `next_page_url`, `per_page` and `total`. Adapters follow page numbers on the configured origin rather than trusting URLs returned by a remote server; 100 pages is the defensive limit.

Services map `short_description`/`description` to static `summary`/`detail`. Projects/posts include `category_name`; FAQ records map `question`/`answer`. Article/project body text is rendered as plain text. Draft, scheduled/future and soft-deleted content is excluded from public reads.

`POST /api/v1/contact`: name, email, optional company/budget, service_needed (published service slug), message, accepted consent, and empty optional website honeypot. No email/IP/UA is returned publicly. Success is 201, validation is 422, throttling 429 and disabled collection 503.
