# Portfolio Hub validation report

Date: 13 November 2026. Scope: the updated local-content Techpedia hub, not retrospective certification of the earlier CMS architecture. No deployment performed.

Environment: Windows, Node 24, Chrome/Edge headless, local static HTTP server. The test server returns 503 for any /api request. Synthetic QA project records are injected only by the browser harness; actual project data remains empty. Each main/secondary page is checked at 320,375,390,768,1024,1280,1440,1920px. Contacts match the addresses explicitly supplied by the owner.

| Check | Status | Actual result | Evidence |
| --- | --- | --- | --- |
| Node unit tests | PASS | 18 tests including legacy API adapter, contact URLs, project modes, filtering and public-data sanitization | [evidence](evidence/unit-tests.json) |
| JavaScript syntax | PASS | app.js, api.js and hub.js parse | [evidence](evidence/lint.json) |
| Static production artifact | PASS | Build validates local data and copies public files to dist/ | [evidence](evidence/static-build.json) |
| Chrome portfolio hub | PASS | 28 browser checks; 0 API requests | [evidence](evidence/chrome-browser.json) |
| Edge portfolio hub | PASS | 28 browser checks; 0 API requests | [evidence](evidence/edge-browser.json) |
| Optional legacy API mode | PASS | 10 compatibility checks passed in the retained API-mode fixture harness | [evidence](evidence/api-compatibility.json) |
| React/Next.js build | BLOCKED | npm installation returns EACCES; next executable unavailable | [evidence](evidence/react-build.json) |
| React/TypeScript check | BLOCKED | TypeScript packages/executable unavailable | [evidence](evidence/react-typecheck.json) |

## Verified behavior

Home, service/detail pages, About, Projects, Contact, retained secondary pages and 404 render with no Laravel dependency. Published/approved local records show category filters, technology labels, case-study content and valid external actions. Live Demo and Figma/GitHub use separate tabs with noopener/noreferrer. Case-study-only entries have no demo button. Case studies do not load, ping, embed or query demo applications. Both browser runs record zero backend API requests and no unhandled JavaScript exceptions.

WhatsApp points to +62 87732774899, email to ajhiezudesign@gmail.com and Fastwork to the supplied techpedia_project profile. Direct contact links are inspected, not sent: no WhatsApp/email/Fastwork message was transmitted during testing.

Public build preparation removes draft/unapproved/future projects and strips unsupported internal fields. The source file content/site.json is outside dist/; only generated public data is copied to the static output. No fictional client project, portfolio result or repository was added to the actual site. Profile GitHub remains absent until supplied.

## Repairs during implementation

New browser harness quoting and file-encoding errors were corrected before accepting its results; these were test-harness errors, not claimed product bugs. Visual inspection also identified missing system-font fallbacks when external Google Fonts cannot load; fallbacks were added and browser checks rerun.

## Limits and remaining inputs

The source React/Next.js/Tailwind variant is configured for static export and local data, but build/typecheck cannot be certified without npm access. The tested artifact is the dependency-free static frontend. Static-host _headers configuration is prepared but has not been verified on Cloudflare. The hash-route fallback is not a substitute for verified per-route production SEO. Domain, final legal text, actual project content/screenshots and any live-demo health are not verified. No real demo URLs have been supplied.

Previous Phase 5 reports remain historical for the prior scope. CMS/dashboard/role/database are no longer dependencies of the requested hub; this scope change does not turn old failed requirements into tested passes or authorize deployment.

Editing instructions: [CONTENT-GUIDE.md](CONTENT-GUIDE.md). Source example: [PROJECT-TEMPLATE.json](PROJECT-TEMPLATE.json). Current architecture: [ARCHITECTURE.md](ARCHITECTURE.md).
