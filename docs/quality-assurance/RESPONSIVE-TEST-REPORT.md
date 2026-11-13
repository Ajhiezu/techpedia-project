# Responsive and cross-browser

Tanggal: 13 November 2026. Environment: Windows, PHP 8.5/Laravel 13, Node 24, PHPUnit with SQLite :memory:, real HTTP with a new .qa/live-* SQLite database, Chrome 157 and Edge 157. Final live tests enforce separate storage/session/cache with APP_ENV=qa so CSRF stays active. No production deployment.

Tools: PHPUnit/JUnit, Node CDP/HTTP assertions, Python audit and selected WCAG luminance calculation. Fixture browser tests are distinct from real Laravel/DB tests. Rows below give final expected/actual/status/evidence. Raw outputs provide full assertion detail.

## Findings, repairs and limits

Nineteen routes x eight widths x two browser products (both Chromium/Blink) = 304 viewport assertions grouped into 38 case rows. Widths: 320,375,390,768,1024,1280,1440,1920. Horizontal overflow and interactions pass; representative mobile/desktop screenshots inspected. Chrome/Edge run with separate local profiles and --no-sandbox for QA. Firefox/Safari/physical devices/manual zoom remain NOT TESTED.

## Final test cases

| ID | Test / expected result | Actual result | Status | Evidence |
| --- | --- | --- | --- | --- |
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
| RESP-firefox | Firefox; Implemented behavior meets the stated requirement | Executable unavailable. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| RESP-safari | Safari; Implemented behavior meets the stated requirement | Unavailable on Windows. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| RESP-device | Physical devices and manual 200% zoom; Implemented behavior meets the stated requirement | Emulated viewport tests do not replace physical-device/assistive review. | NOT TESTED | [evidence](PHASE-5-TEST-PLAN.md) |
| VISUAL | Representative mobile/desktop visual review; Representative layout readable and consistent | Screenshots inspected for brand/readability/clipping. Full device certification is not claimed; breadcrumb corrected and tested. | PASS | [evidence](evidence/live-contact-mobile.png) |

Full final ledger: [TEST-CASE-RESULTS.json](TEST-CASE-RESULTS.json).
