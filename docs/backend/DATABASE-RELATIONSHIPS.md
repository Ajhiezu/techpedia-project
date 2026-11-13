> Historical relationship design. Current implementation uses native session authentication and `users.is_admin`; Sanctum/Spatie role/token relationships shown below are deferred. Actual implemented relations are in `backend/app/Models`; see BACKEND-ARCHITECTURE.md and PHASE-4-IMPLEMENTATION-REPORT.md.

# Database Relationships — Techpedia Project

> Eloquent model relationships for all models in the `techpedia_db` schema.

---

## Table of Contents

1. [User](#user)
2. [Service Category & Service](#service-category--service)
3. [Project Category, Project, Project Images & Technologies](#project-category-project-project-images--technologies)
4. [Category, Tag & Post](#category-tag--post)
5. [FAQ Category & FAQ](#faq-category--faq)
6. [Testimonial](#testimonial)
7. [Contact Message & Notes](#contact-message--notes)
8. [Media](#media)
9. [Site Settings](#site-settings)
10. [Spatie Permission Models](#spatie-permission-models)
11. [Relationship Matrix](#relationship-matrix)

---

## User

**Model:** `App\Models\User`  
**Table:** `users`  
**Traits:** `HasApiTokens` (Sanctum), `HasRoles` (Spatie)

```php
// A user (admin) can author many blog posts
public function posts(): HasMany
{
    return $this->hasMany(Post::class, 'author_id');
}

// A user can leave many internal notes on contact messages
public function contactMessageNotes(): HasMany
{
    return $this->hasMany(ContactMessageNote::class, 'admin_id');
}

// A user can have many Sanctum personal access tokens
// (provided automatically by HasApiTokens trait)
public function tokens(): MorphMany { ... }

// A user belongs to many roles (Spatie — via model_has_roles)
// (provided automatically by HasRoles trait)
public function roles(): BelongsToMany { ... }

// A user has many direct permissions (Spatie — via model_has_permissions)
// (provided automatically by HasRoles trait)
public function permissions(): BelongsToMany { ... }
```

---

## Service Category & Service

**Models:** `App\Models\ServiceCategory`, `App\Models\Service`  
**Tables:** `service_categories`, `services`

### ServiceCategory

```php
// A service category can contain many services
public function services(): HasMany
{
    return $this->hasMany(Service::class, 'category_id');
}

// Active services only
public function activeServices(): HasMany
{
    return $this->hasMany(Service::class, 'category_id')
                ->where('status', 'published');
}
```

### Service

```php
// A service belongs to one service category (nullable)
public function category(): BelongsTo
{
    return $this->belongsTo(ServiceCategory::class, 'category_id');
}
```

**Casts:**
```php
protected $casts = [
    'features'    => 'array',   // JSON column
    'benefits'    => 'array',   // JSON column
    'is_featured' => 'boolean',
];
```

---

## Project Category, Project, Project Images & Technologies

**Models:** `App\Models\ProjectCategory`, `App\Models\Project`, `App\Models\ProjectImage`, `App\Models\ProjectTechnology`  
**Tables:** `project_categories`, `projects`, `project_images`, `project_technologies`

### ProjectCategory

```php
// A project category has many projects
public function projects(): HasMany
{
    return $this->hasMany(Project::class, 'category_id');
}

// Published projects only
public function publishedProjects(): HasMany
{
    return $this->hasMany(Project::class, 'category_id')
                ->where('status', 'published');
}
```

### Project

```php
// A project belongs to one project category (nullable)
public function category(): BelongsTo
{
    return $this->belongsTo(ProjectCategory::class, 'category_id');
}

// A project has many gallery images
public function images(): HasMany
{
    return $this->hasMany(ProjectImage::class, 'project_id')
                ->orderBy('sort_order');
}

// A project has many technology tags
public function technologies(): HasMany
{
    return $this->hasMany(ProjectTechnology::class, 'project_id')
                ->orderBy('sort_order');
}
```

**Traits:** `SoftDeletes`  
**Casts:**
```php
protected $casts = [
    'is_featured'  => 'boolean',
    'published_at' => 'datetime',
];
```

### ProjectImage

```php
// A project image belongs to one project
public function project(): BelongsTo
{
    return $this->belongsTo(Project::class, 'project_id');
}
```

### ProjectTechnology

```php
// A technology tag belongs to one project
public function project(): BelongsTo
{
    return $this->belongsTo(Project::class, 'project_id');
}
```

---

## Category, Tag & Post

**Models:** `App\Models\Category`, `App\Models\Tag`, `App\Models\Post`  
**Tables:** `categories`, `tags`, `posts`, `post_tag`

### Category

```php
// A category can have one parent category (self-referential)
public function parent(): BelongsTo
{
    return $this->belongsTo(Category::class, 'parent_id');
}

// A category can have many child categories
public function children(): HasMany
{
    return $this->hasMany(Category::class, 'parent_id');
}

// A category has many posts
public function posts(): HasMany
{
    return $this->hasMany(Post::class, 'category_id');
}
```

### Tag

```php
// A tag belongs to many posts (via post_tag pivot)
public function posts(): BelongsToMany
{
    return $this->belongsToMany(Post::class, 'post_tag', 'tag_id', 'post_id');
}
```

### Post

```php
// A post belongs to one author (User)
public function author(): BelongsTo
{
    return $this->belongsTo(User::class, 'author_id');
}

// A post belongs to one category (nullable)
public function category(): BelongsTo
{
    return $this->belongsTo(Category::class, 'category_id');
}

// A post belongs to many tags (via post_tag pivot)
public function tags(): BelongsToMany
{
    return $this->belongsToMany(Tag::class, 'post_tag', 'post_id', 'tag_id');
}
```

**Traits:** `SoftDeletes`  
**Casts:**
```php
protected $casts = [
    'is_featured'  => 'boolean',
    'published_at' => 'datetime',
];
```

---

## FAQ Category & FAQ

**Models:** `App\Models\FaqCategory`, `App\Models\Faq`  
**Tables:** `faq_categories`, `faqs`

### FaqCategory

```php
// A FAQ category has many FAQs
public function faqs(): HasMany
{
    return $this->hasMany(Faq::class, 'category_id')
                ->orderBy('sort_order');
}

// Active FAQs only
public function activeFaqs(): HasMany
{
    return $this->hasMany(Faq::class, 'category_id')
                ->where('is_active', true)
                ->orderBy('sort_order');
}
```

### Faq

```php
// A FAQ optionally belongs to one FAQ category
// (category_id is nullable — FAQs can be uncategorized)
public function category(): BelongsTo
{
    return $this->belongsTo(FaqCategory::class, 'category_id');
}
```

---

## Testimonial

**Model:** `App\Models\Testimonial`  
**Table:** `testimonials`

No relationships to other models. Testimonials are standalone records.

**Casts:**
```php
protected $casts = [
    'is_published' => 'boolean',
    'rating'       => 'integer',
];
```

---

## Contact Message & Notes

**Models:** `App\Models\ContactMessage`, `App\Models\ContactMessageNote`  
**Tables:** `contact_messages`, `contact_message_notes`

### ContactMessage

```php
// A contact message can have many admin notes
public function notes(): HasMany
{
    return $this->hasMany(ContactMessageNote::class, 'message_id')
                ->orderBy('created_at');
}

// Latest note shortcut
public function latestNote(): HasOne
{
    return $this->hasOne(ContactMessageNote::class, 'message_id')
                ->latestOfMany();
}
```

### ContactMessageNote

```php
// A note belongs to one contact message
public function message(): BelongsTo
{
    return $this->belongsTo(ContactMessage::class, 'message_id');
}

// A note belongs to one admin user who wrote it
public function admin(): BelongsTo
{
    return $this->belongsTo(User::class, 'admin_id');
}
```

---

## Media

**Model:** `App\Models\Media`  
**Table:** `media`

```php
// A media item optionally belongs to one uploader (User)
public function uploader(): BelongsTo
{
    return $this->belongsTo(User::class, 'uploaded_by');
}
```

No polymorphic relationship is implemented in Phase 4. File paths are stored as strings directly on each content model's column (`thumbnail`, `photo`, `featured_image`, `file_path`).

---

## Site Settings

**Model:** `App\Models\SiteSetting`  
**Table:** `site_settings`

No relationships to other models. Settings are retrieved by unique `key`.

**Accessor example:**
```php
// Cast 'value' based on 'type' column
public function getValueAttribute($raw): mixed
{
    return match($this->type) {
        'json'    => json_decode($raw, true),
        'boolean' => (bool) $raw,
        'integer' => (int) $raw,
        default   => $raw,
    };
}
```

---

## Spatie Permission Models

Spatie provides its own models. The `User` model uses the `HasRoles` trait which injects all needed relationship methods.

### Role

```php
// A role belongs to many permissions (via role_has_permissions)
public function permissions(): BelongsToMany { ... }

// A role belongs to many users (via model_has_roles, polymorphic)
public function users(): MorphToMany { ... }
```

### Permission

```php
// A permission belongs to many roles (via role_has_permissions)
public function roles(): BelongsToMany { ... }

// A permission belongs to many users (direct, via model_has_permissions)
public function users(): MorphToMany { ... }
```

---

## Relationship Matrix

| From Model            | Relationship Type    | To Model              | Via / FK                              |
|-----------------------|----------------------|-----------------------|---------------------------------------|
| `User`                | `hasMany`            | `Post`                | `posts.author_id`                     |
| `User`                | `hasMany`            | `ContactMessageNote`  | `contact_message_notes.admin_id`      |
| `User`                | `hasMany`            | `Media`               | `media.uploaded_by`                   |
| `User`                | `belongsToMany`      | `Role`                | `model_has_roles` (Spatie)            |
| `User`                | `belongsToMany`      | `Permission`          | `model_has_permissions` (Spatie)      |
| `ServiceCategory`     | `hasMany`            | `Service`             | `services.category_id`                |
| `Service`             | `belongsTo`          | `ServiceCategory`     | `services.category_id`                |
| `ProjectCategory`     | `hasMany`            | `Project`             | `projects.category_id`                |
| `Project`             | `belongsTo`          | `ProjectCategory`     | `projects.category_id`                |
| `Project`             | `hasMany`            | `ProjectImage`        | `project_images.project_id`           |
| `Project`             | `hasMany`            | `ProjectTechnology`   | `project_technologies.project_id`     |
| `ProjectImage`        | `belongsTo`          | `Project`             | `project_images.project_id`           |
| `ProjectTechnology`   | `belongsTo`          | `Project`             | `project_technologies.project_id`     |
| `Category`            | `belongsTo`          | `Category` (self)     | `categories.parent_id`                |
| `Category`            | `hasMany`            | `Category` (self)     | `categories.parent_id`                |
| `Category`            | `hasMany`            | `Post`                | `posts.category_id`                   |
| `Post`                | `belongsTo`          | `Category`            | `posts.category_id`                   |
| `Post`                | `belongsTo`          | `User`                | `posts.author_id`                     |
| `Post`                | `belongsToMany`      | `Tag`                 | `post_tag`                            |
| `Tag`                 | `belongsToMany`      | `Post`                | `post_tag`                            |
| `FaqCategory`         | `hasMany`            | `Faq`                 | `faqs.category_id`                    |
| `Faq`                 | `belongsTo`          | `FaqCategory`         | `faqs.category_id` (nullable)         |
| `ContactMessage`      | `hasMany`            | `ContactMessageNote`  | `contact_message_notes.message_id`    |
| `ContactMessageNote`  | `belongsTo`          | `ContactMessage`      | `contact_message_notes.message_id`    |
| `ContactMessageNote`  | `belongsTo`          | `User`                | `contact_message_notes.admin_id`      |
| `Role`                | `belongsToMany`      | `Permission`          | `role_has_permissions`                |
| `Permission`          | `belongsToMany`      | `Role`                | `role_has_permissions`                |
