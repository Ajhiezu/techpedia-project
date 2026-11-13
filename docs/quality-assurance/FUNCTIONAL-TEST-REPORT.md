# Functional testing

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

All nineteen public routes and available internal destinations run in Chrome/Edge. Valid/invalid/long/special-character forms, double submission, loading, failure/network and empty/unavailable states are checked. Real browser submission is separately verified in SQLite. Fixed form guards, skip routing, dropdown focus, breadcrumb and article metadata. Missing related/featured modules remain FAIL.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
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
| CHROME-NAV-breadcrumb | Contact breadcrumb uses the page name; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-NAV-links | All internal navigation destinations exist; Assertions pass | ["/", "/portfolio", "/about", "/insights", "/contact", "/services", "/services/website-development", "/services/custom-software-development", "/services/ui-ux-design", "/process", "/faq", "/services/e-commerce-development", "/privacy-policy", "/terms"] | PASS | [evidence](evidence/browser-final.json) |
| CHROME-NAV-images | Image sources resolve with explicit intrinsic size; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-PORT-filter | Portfolio filter changes cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-BLOG-pagination | Article adapter reads all API pages; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-BLOG-filter | Blog category filter hides unrelated cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
| CHROME-BLOG-metadata | Blog detail shows date and tags; Assertions pass | Assertions passed | PASS | [evidence](evidence/browser-final.json) |
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
| EDGE-NAV-breadcrumb | Contact breadcrumb uses the page name; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-NAV-links | All internal navigation destinations exist; Assertions pass | ["/", "/portfolio", "/about", "/insights", "/contact", "/services", "/services/website-development", "/services/custom-software-development", "/services/ui-ux-design", "/process", "/faq", "/services/e-commerce-development", "/privacy-policy", "/terms"] | PASS | [evidence](evidence/edge-final.json) |
| EDGE-NAV-images | Image sources resolve with explicit intrinsic size; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PORT-filter | Portfolio filter changes cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-BLOG-pagination | Article adapter reads all API pages; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-BLOG-filter | Blog category filter hides unrelated cards; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-BLOG-metadata | Blog detail shows date and tags; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
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
| EDGE-JS-errors | No unhandled JavaScript exceptions; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-DATA-unavailable | Unavailable API produces visible fallback without uncaught error; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| EDGE-PORT-empty | Empty portfolio uses honest empty state; Assertions pass | Assertions passed | PASS | [evidence](evidence/edge-final.json) |
| LIVE-contact | Real contact is persisted before success; HTTP/database assertions pass | 201 followed by authorized read of persisted row | PASS | [evidence](evidence/live-http.json) |
| LIVE-browser-contact | Real Chrome -> Laravel -> SQLite contact; Browser success, no CSP violations, persisted second message | Real API list/detail lazy loading, publication date, tags and service detail verified.<br>Chrome displayed confirmed real Laravel success; no CSP violations or JS exceptions.<br> Persisted browser rows: 1 | PASS | [evidence](evidence/live-http.json) |
| RELATED-services | Related services; Implemented behavior meets the stated requirement | P2: no related-services module. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| RELATED-projects | Related/featured portfolio; Implemented behavior meets the stated requirement | P2: no related-project module; home portfolio remains empty-pattern content. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| RELATED-articles | Related articles; Implemented behavior meets the stated requirement | P2: no related-articles module. | FAIL | [evidence](PHASE-5-TEST-PLAN.md) |
| CONTENT-legal | Final legal/contact/inquiry operations; Implemented behavior meets the stated requirement | Legal drafts and unverified official contact remain; actual project collection stays disabled. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| NEXT-e2e | Next.js -> Laravel end-to-end; Implemented behavior meets the stated requirement | Next.js packages unavailable; static frontend -> Laravel -> SQLite tested separately. | BLOCKED | [evidence](PHASE-5-TEST-PLAN.md) |
| LIVE-browser-contact | Real Chrome -> Laravel -> SQLite contact; Browser success, no CSP violations, persisted second message | Real API list/detail lazy loading, publication date, tags and service detail verified.<br>Chrome displayed confirmed real Laravel success; no CSP violations or JS exceptions.<br> Persisted browser rows: 1 | PASS | [evidence](evidence/live-http.json) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
