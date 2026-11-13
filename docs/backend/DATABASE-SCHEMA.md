# Database Schema — Techpedia Project

> Current migration: `backend/database/migrations/2026_11_13_000001_create_content_tables.php`. SQLite local default; MySQL remains a target requiring runtime validation. Integer widths may use portable Laravel integer columns.

> **Database target:** MySQL 8.0 · `techpedia_db` · Charset: `utf8mb4` · Collation: `utf8mb4_unicode_ci`

---

## Table of Contents

1. [Authentication & Authorization](#authentication--authorization)
2. [Services](#services)
3. [Portfolio](#portfolio)
4. [Blog / Insights](#blog--insights)
5. [FAQ](#faq)
6. [Testimonials](#testimonials)
7. [Contact](#contact)
8. [Media](#media)
9. [Settings](#settings)
10. [Index Summary](#index-summary)

---

## Authentication & Authorization

### `users`

Standard Laravel users table, extended with `is_admin` boolean, default false. Authentication uses native session cookies and CSRF. No Sanctum/Spatie tables are implemented.

| Column              | Type                     | Nullable | Default | Notes                           |
|---------------------|--------------------------|----------|---------|---------------------------------|
| `id`                | `bigint unsigned`        | No       | —       | Primary key, auto-increment     |
| `name`              | `varchar(255)`           | No       | —       |                                 |
| `email`             | `varchar(255)`           | No       | —       | Unique                          |
| `password`          | `varchar(255)`           | No       | —       | Bcrypt hashed                   |
| `email_verified_at` | `timestamp`              | Yes      | NULL    |                                 |
| `remember_token`    | `varchar(100)`           | Yes      | NULL    |                                 |
| `created_at`        | `timestamp`              | Yes      | NULL    |                                 |
| `updated_at`        | `timestamp`              | Yes      | NULL    |                                 |

**Indexes:** `PRIMARY (id)`, `UNIQUE (email)`

---

## Services

### `service_categories`

| Column       | Type              | Nullable | Default | Notes                       |
|--------------|-------------------|----------|---------|-----------------------------|
| `id`         | `bigint unsigned` | No       | —       | Primary key, auto-increment |
| `name`       | `varchar(255)`    | No       | —       | Display name                |
| `slug`       | `varchar(255)`    | No       | —       | URL-friendly identifier     |
| `description`| `text`            | Yes      | NULL    |                             |
| `sort_order` | `int`             | No       | 0       | Display ordering            |
| `is_active`  | `tinyint(1)`      | No       | 1       | Visibility toggle           |
| `created_at` | `timestamp`       | Yes      | NULL    |                             |
| `updated_at` | `timestamp`       | Yes      | NULL    |                             |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`

---

### `services`

| Column             | Type                        | Nullable | Default  | Notes                             |
|--------------------|-----------------------------|----------|----------|-----------------------------------|
| `id`               | `bigint unsigned`           | No       | —        | Primary key, auto-increment       |
| `category_id`      | `bigint unsigned`           | Yes      | NULL     | FK → `service_categories.id`      |
| `title`            | `varchar(255)`              | No       | —        |                                   |
| `slug`             | `varchar(255)`              | No       | —        | Unique URL identifier             |
| `short_description`| `varchar(500)`              | Yes      | NULL     | Used in cards/previews            |
| `description`      | `longtext`                  | Yes      | NULL     | Full rich-text description        |
| `thumbnail`        | `varchar(255)`              | Yes      | NULL     | Relative path under public disk   |
| `icon_name`        | `varchar(100)`              | Yes      | NULL     | Icon identifier (e.g. Lucide name)|
| `features`         | `json`                      | Yes      | NULL     | Array of feature strings          |
| `benefits`         | `json`                      | Yes      | NULL     | Array of benefit strings          |
| `is_featured`      | `tinyint(1)`                | No       | 0        | Highlight on homepage             |
| `status`           | `enum('draft','published')` | No       | `draft`  |                                   |
| `sort_order`       | `int`                       | No       | 0        |                                   |
| `meta_title`       | `varchar(255)`              | Yes      | NULL     | SEO title override                |
| `meta_description` | `varchar(500)`              | Yes      | NULL     | SEO meta description              |
| `created_at`       | `timestamp`                 | Yes      | NULL     |                                   |
| `updated_at`       | `timestamp`                 | Yes      | NULL     |                                   |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`, `INDEX (category_id)`, `INDEX (status)`, `INDEX (is_featured)`

---

## Portfolio

### `project_categories`

| Column       | Type              | Nullable | Default | Notes                       |
|--------------|-------------------|----------|---------|-----------------------------|
| `id`         | `bigint unsigned` | No       | —       | Primary key, auto-increment |
| `name`       | `varchar(255)`    | No       | —       |                             |
| `slug`       | `varchar(255)`    | No       | —       | Unique URL identifier       |
| `description`| `text`            | Yes      | NULL    |                             |
| `sort_order` | `int`             | No       | 0       |                             |
| `is_active`  | `tinyint(1)`      | No       | 1       |                             |
| `created_at` | `timestamp`       | Yes      | NULL    |                             |
| `updated_at` | `timestamp`       | Yes      | NULL    |                             |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`

---

### `projects`

| Column              | Type                        | Nullable | Default  | Notes                             |
|---------------------|-----------------------------|----------|----------|-----------------------------------|
| `id`                | `bigint unsigned`           | No       | —        | Primary key, auto-increment       |
| `category_id`       | `bigint unsigned`           | Yes      | NULL     | FK → `project_categories.id`      |
| `title`             | `varchar(255)`              | No       | —        |                                   |
| `slug`              | `varchar(255)`              | No       | —        | Unique URL identifier             |
| `short_description` | `varchar(500)`              | Yes      | NULL     |                                   |
| `overview`          | `text`                      | Yes      | NULL     | Project overview section          |
| `challenge`         | `text`                      | Yes      | NULL     | Problem / challenge section       |
| `solution`          | `text`                      | Yes      | NULL     | Solution section                  |
| `results`           | `text`                      | Yes      | NULL     | Results / outcomes section        |
| `thumbnail`         | `varchar(255)`              | Yes      | NULL     | Relative path under public disk   |
| `project_url`       | `varchar(255)`              | Yes      | NULL     | Live project URL                  |
| `status`            | `enum('draft','published')` | No       | `draft`  |                                   |
| `is_featured`       | `tinyint(1)`                | No       | 0        |                                   |
| `published_at`      | `timestamp`                 | Yes      | NULL     |                                   |
| `sort_order`        | `int`                       | No       | 0        |                                   |
| `meta_title`        | `varchar(255)`              | Yes      | NULL     |                                   |
| `meta_description`  | `varchar(500)`              | Yes      | NULL     |                                   |
| `created_at`        | `timestamp`                 | Yes      | NULL     |                                   |
| `updated_at`        | `timestamp`                 | Yes      | NULL     |                                   |
| `deleted_at`        | `timestamp`                 | Yes      | NULL     | Soft delete                       |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`, `INDEX (category_id)`, `INDEX (status)`, `INDEX (is_featured)`, `INDEX (deleted_at)`

---

### `project_images`

| Column       | Type              | Nullable | Default | Notes                           |
|--------------|-------------------|----------|---------|---------------------------------|
| `id`         | `bigint unsigned` | No       | —       | Primary key, auto-increment     |
| `project_id` | `bigint unsigned` | No       | —       | FK → `projects.id` (cascade delete) |
| `file_path`  | `varchar(255)`    | No       | —       | Relative path under public disk |
| `caption`    | `varchar(255)`    | Yes      | NULL    |                                 |
| `sort_order` | `int`             | No       | 0       |                                 |
| `created_at` | `timestamp`       | Yes      | NULL    |                                 |
| `updated_at` | `timestamp`       | Yes      | NULL    |                                 |

**Indexes:** `PRIMARY (id)`, `INDEX (project_id)`

---

### `project_technologies`

| Column       | Type              | Nullable | Default | Notes                               |
|--------------|-------------------|----------|---------|-------------------------------------|
| `id`         | `bigint unsigned` | No       | —       | Primary key, auto-increment         |
| `project_id` | `bigint unsigned` | No       | —       | FK → `projects.id` (cascade delete) |
| `name`       | `varchar(100)`    | No       | —       | e.g. `Laravel`, `Vue.js`            |
| `sort_order` | `int`             | No       | 0       |                                     |
| `created_at` | `timestamp`       | Yes      | NULL    |                                     |
| `updated_at` | `timestamp`       | Yes      | NULL    |                                     |

**Indexes:** `PRIMARY (id)`, `INDEX (project_id)`

---

## Blog / Insights

### `categories`

Typed category hierarchy for editorial classification. Services/projects retain their dedicated category tables; this is not an Eloquent polymorphic relationship.

| Column       | Type                                   | Nullable | Default | Notes                           |
|--------------|----------------------------------------|----------|---------|---------------------------------|
| `id`         | `bigint unsigned`                      | No       | —       | Primary key, auto-increment     |
| `parent_id`  | `bigint unsigned`                      | Yes      | NULL    | Self-referential FK (nullable)  |
| `name`       | `varchar(255)`                         | No       | —       |                                 |
| `slug`       | `varchar(255)`                         | No       | —       | Unique URL identifier           |
| `description`| `text`                                 | Yes      | NULL    |                                 |
| `type`       | `enum('blog','service','project')`     | No       | `blog`  | Discriminator for context       |
| `sort_order` | `int`                                  | No       | 0       |                                 |
| `is_active`  | `tinyint(1)`                           | No       | 1       |                                 |
| `created_at` | `timestamp`                            | Yes      | NULL    |                                 |
| `updated_at` | `timestamp`                            | Yes      | NULL    |                                 |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`, `INDEX (parent_id)`, `INDEX (type)`

---

### `tags`

| Column       | Type              | Nullable | Default | Notes                       |
|--------------|-------------------|----------|---------|-----------------------------|
| `id`         | `bigint unsigned` | No       | —       | Primary key, auto-increment |
| `name`       | `varchar(100)`    | No       | —       |                             |
| `slug`       | `varchar(100)`    | No       | —       | Unique URL identifier       |
| `created_at` | `timestamp`       | Yes      | NULL    |                             |
| `updated_at` | `timestamp`       | Yes      | NULL    |                             |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`, `UNIQUE (name)`

---

### `posts`

| Column                | Type                                      | Nullable | Default  | Notes                             |
|-----------------------|-------------------------------------------|----------|----------|-----------------------------------|
| `id`                  | `bigint unsigned`                         | No       | —        | Primary key, auto-increment       |
| `author_id`           | `bigint unsigned`                         | No       | —        | FK → `users.id`                   |
| `category_id`         | `bigint unsigned`                         | Yes      | NULL     | FK → `categories.id`              |
| `title`               | `varchar(255)`                            | No       | —        |                                   |
| `slug`                | `varchar(255)`                            | No       | —        | Unique URL identifier             |
| `excerpt`             | `text`                                    | Yes      | NULL     | Short teaser text                 |
| `content`             | `longtext`                                | No       | —        | Full rich-text body               |
| `featured_image`      | `varchar(255)`                            | Yes      | NULL     | Relative path under public disk   |
| `status`              | `enum('draft','published','scheduled')`   | No       | `draft`  |                                   |
| `published_at`        | `timestamp`                               | Yes      | NULL     | Used for scheduling               |
| `reading_time_minutes`| `tinyint unsigned`                        | Yes      | NULL     | Estimated read time               |
| `is_featured`         | `tinyint(1)`                              | No       | 0        |                                   |
| `meta_title`          | `varchar(255)`                            | Yes      | NULL     |                                   |
| `meta_description`    | `varchar(500)`                            | Yes      | NULL     |                                   |
| `created_at`          | `timestamp`                               | Yes      | NULL     |                                   |
| `updated_at`          | `timestamp`                               | Yes      | NULL     |                                   |
| `deleted_at`          | `timestamp`                               | Yes      | NULL     | Soft delete                       |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`, `INDEX (author_id)`, `INDEX (category_id)`, `INDEX (status)`, `INDEX (published_at)`, `INDEX (is_featured)`, `INDEX (deleted_at)`

---

### `post_tag` _(pivot)_

| Column    | Type              | Nullable | Notes              |
|-----------|-------------------|----------|--------------------|
| `post_id` | `bigint unsigned` | No       | FK → `posts.id`    |
| `tag_id`  | `bigint unsigned` | No       | FK → `tags.id`     |

**Indexes:** `PRIMARY (post_id, tag_id)`

---

## FAQ

### `faq_categories`

| Column       | Type              | Nullable | Default | Notes                       |
|--------------|-------------------|----------|---------|-----------------------------|
| `id`         | `bigint unsigned` | No       | —       | Primary key, auto-increment |
| `name`       | `varchar(255)`    | No       | —       |                             |
| `slug`       | `varchar(255)`    | No       | —       | Unique URL identifier       |
| `sort_order` | `int`             | No       | 0       |                             |
| `is_active`  | `tinyint(1)`      | No       | 1       |                             |
| `created_at` | `timestamp`       | Yes      | NULL    |                             |
| `updated_at` | `timestamp`       | Yes      | NULL    |                             |

**Indexes:** `PRIMARY (id)`, `UNIQUE (slug)`

---

### `faqs`

| Column        | Type              | Nullable | Default | Notes                           |
|---------------|-------------------|----------|---------|---------------------------------|
| `id`          | `bigint unsigned` | No       | —       | Primary key, auto-increment     |
| `category_id` | `bigint unsigned` | Yes      | NULL    | FK → `faq_categories.id` (nullable — uncategorized allowed) |
| `question`    | `text`            | No       | —       |                                 |
| `answer`      | `text`            | No       | —       |                                 |
| `sort_order`  | `int`             | No       | 0       |                                 |
| `is_active`   | `tinyint(1)`      | No       | 1       |                                 |
| `created_at`  | `timestamp`       | Yes      | NULL    |                                 |
| `updated_at`  | `timestamp`       | Yes      | NULL    |                                 |

**Indexes:** `PRIMARY (id)`, `INDEX (category_id)`, `INDEX (is_active)`

---

## Testimonials

### `testimonials`

| Column           | Type              | Nullable | Default | Notes                               |
|------------------|-------------------|----------|---------|-------------------------------------|
| `id`             | `bigint unsigned` | No       | —       | Primary key, auto-increment         |
| `client_name`    | `varchar(255)`    | No       | —       |                                     |
| `client_title`   | `varchar(255)`    | Yes      | NULL    | e.g. `CEO`, `Product Manager`       |
| `client_company` | `varchar(255)`    | Yes      | NULL    |                                     |
| `content`        | `text`            | No       | —       | Testimonial body                    |
| `rating`         | `tinyint`         | No       | 5       | Integer 1–5                         |
| `photo`          | `varchar(255)`    | Yes      | NULL    | Relative path under public disk     |
| `is_published`   | `tinyint(1)`      | No       | 0       |                                     |
| `sort_order`     | `int`             | No       | 0       |                                     |
| `created_at`     | `timestamp`       | Yes      | NULL    |                                     |
| `updated_at`     | `timestamp`       | Yes      | NULL    |                                     |

**Indexes:** `PRIMARY (id)`, `INDEX (is_published)`

---

## Contact

### `contact_messages`

| Column          | Type                                                   | Nullable | Default | Notes                               |
|-----------------|--------------------------------------------------------|----------|---------|-------------------------------------|
| `id`            | `bigint unsigned`                                      | No       | —       | Primary key, auto-increment         |
| `name`          | `varchar(255)`                                         | No       | —       | Submitter's name                    |
| `email`         | `varchar(255)`                                         | No       | —       | Submitter's email                   |
| `company`       | `varchar(255)`                                         | Yes      | NULL    |                                     |
| `service_needed`| `varchar(255)`                                         | Yes      | NULL    | Selected service of interest        |
| `budget`        | `varchar(100)`                                         | Yes      | NULL    | Budget range (string, e.g. `< $5K`) |
| `message`       | `text`                                                 | No       | —       |                                     |
| `status`        | `enum('new','read','in_progress','replied','closed')`  | No       | `new`   |                                     |
| `ip_address`    | `varchar(45)`                                          | Yes      | NULL    | IPv4 or IPv6                        |
| `user_agent`    | `text`                                                 | Yes      | NULL    | Browser/client UA string            |
| `created_at`    | `timestamp`                                            | Yes      | NULL    |                                     |
| `updated_at`    | `timestamp`                                            | Yes      | NULL    |                                     |

**Indexes:** `PRIMARY (id)`, `INDEX (status)`, `INDEX (email)`, `INDEX (created_at)`

---

### `contact_message_notes`

| Column       | Type              | Nullable | Default | Notes                               |
|--------------|-------------------|----------|---------|-------------------------------------|
| `id`         | `bigint unsigned` | No       | —       | Primary key, auto-increment         |
| `message_id` | `bigint unsigned` | No       | —       | FK → `contact_messages.id` (cascade delete) |
| `admin_id`   | `bigint unsigned` | No       | —       | FK → `users.id`                     |
| `note`       | `text`            | No       | —       | Internal admin note                 |
| `created_at` | `timestamp`       | Yes      | NULL    |                                     |
| `updated_at` | `timestamp`       | Yes      | NULL    |                                     |

**Indexes:** `PRIMARY (id)`, `INDEX (message_id)`, `INDEX (admin_id)`

---

## Media

### `media`

| Column          | Type              | Nullable | Default | Notes                               |
|-----------------|-------------------|----------|---------|-------------------------------------|
| `id`            | `bigint unsigned` | No       | —       | Primary key, auto-increment         |
| `file_name`     | `varchar(255)`    | No       | —       | Stored filename (UUID-based)        |
| `original_name` | `varchar(255)`    | No       | —       | Original upload filename            |
| `mime_type`     | `varchar(100)`    | No       | —       | e.g. `image/jpeg`, `image/png`      |
| `file_size`     | `bigint unsigned` | No       | —       | File size in bytes                  |
| `file_path`     | `varchar(500)`    | No       | —       | Relative path under public disk     |
| `alt_text`      | `varchar(255)`    | Yes      | NULL    | Accessibility alt text              |
| `uploaded_by`   | `bigint unsigned` | Yes      | NULL    | FK → `users.id` (nullable)          |
| `created_at`    | `timestamp`       | Yes      | NULL    |                                     |
| `updated_at`    | `timestamp`       | Yes      | NULL    |                                     |

**Indexes:** `PRIMARY (id)`, `INDEX (uploaded_by)`, `INDEX (mime_type)`

---

## Settings

### `site_settings`

| Column        | Type                                        | Nullable | Default  | Notes                                   |
|---------------|---------------------------------------------|----------|----------|-----------------------------------------|
| `id`          | `bigint unsigned`                           | No       | —        | Primary key, auto-increment             |
| `key`         | `varchar(255)`                              | No       | —        | Unique setting key (e.g. `site_name`)   |
| `value`       | `text`                                      | Yes      | NULL     | Stored value (cast based on `type`)     |
| `type`        | `enum('text','json','boolean','integer')`   | No       | `text`   | Determines how `value` is deserialized  |
| `description` | `varchar(500)`                              | Yes      | NULL     | Human-readable description of the key  |
| `created_at`  | `timestamp`                                 | Yes      | NULL     |                                         |
| `updated_at`  | `timestamp`                                 | Yes      | NULL     |                                         |

**Indexes:** `PRIMARY (id)`, `UNIQUE (key)`

**Sample keys:**

| Key                   | Type      | Description                          |
|-----------------------|-----------|--------------------------------------|
| `site_name`           | `text`    | Site display name                    |
| `site_tagline`        | `text`    | Tagline shown in header/hero         |
| `site_email`          | `text`    | Public contact email                 |
| `site_phone`          | `text`    | Public phone number                  |
| `site_address`        | `text`    | Office address                       |
| `social_links`        | `json`    | JSON object of social media URLs     |
| `hero_heading`        | `text`    | Hero section heading                 |
| `hero_subheading`     | `text`    | Hero section subheading              |
| `about_text`          | `text`    | About page body text                 |
| `maintenance_mode`    | `boolean` | Toggle site-wide maintenance mode    |

---

## Index Summary

| Table                   | Primary | Unique Keys         | Foreign Keys                           |
|-------------------------|---------|---------------------|----------------------------------------|
| `users`                 | id      | email               | —                                      |
| `service_categories`    | id      | slug                | —                                      |
| `services`              | id      | slug                | category_id → service_categories       |
| `project_categories`    | id      | slug                | —                                      |
| `projects`              | id      | slug                | category_id → project_categories       |
| `project_images`        | id      | —                   | project_id → projects                  |
| `project_technologies`  | id      | —                   | project_id → projects                  |
| `categories`            | id      | slug                | parent_id → categories (self)          |
| `tags`                  | id      | slug, name          | —                                      |
| `posts`                 | id      | slug                | author_id → users, category_id → categories |
| `post_tag`              | compound| —                   | post_id → posts, tag_id → tags         |
| `faq_categories`        | id      | slug                | —                                      |
| `faqs`                  | id      | —                   | category_id → faq_categories (nullable)|
| `testimonials`          | id      | —                   | —                                      |
| `contact_messages`      | id      | —                   | —                                      |
| `contact_message_notes` | id      | —                   | message_id → contact_messages, admin_id → users |
| `media`                 | id      | —                   | uploaded_by → users (nullable)         |
| `site_settings`         | id      | key                 | —                                      |
