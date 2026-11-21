# Techpedia Project redesign V2

## Audit and implementation

The live site's repository entry point is `frontend/`: vanilla JavaScript, shared CSS, local approved content, and a Node prerender build. The separate `frontend-next/` implementation is not the production entry point and was left alone. Existing uncommitted work was retained. No dependencies or backend changes were needed.

The ZeeFrames homepage was reviewed for its navigation, oversized hero, service presentation, process, project showcase, conversion area, FAQ, and footer hierarchy. Its content and assets were not copied. The production Techpedia URL could not be opened by the web reader, so the local production source and original assets were audited directly.

## Files and components

- `frontend/assets/studio.js`: reusable homepage renderer with hero, value strip, service rows, process timeline, four original portfolio previews, pricing, working principles, project CTA, native FAQ accordion, and studio identity. Includes section navigation and process observation, without hiding essential content.
- `frontend/assets/studio.css`: centralized graphite/cyan tokens, Space Grotesk display typography, responsive grids, hover states, reduced motion, shared route styling, editorial footer, and mascot framing.
- `frontend/assets/pricing.js`: editable package configuration, draft rates, and `pricingApproved: false`.
- `frontend/assets/app.js`: homepage integration; existing project, contact, API, service, and legal rendering remains available. Section hash changes no longer rerender the homepage.
- `frontend/index.html`: navigation, mobile menu, font loading, stylesheet/script wiring, footer, and theme metadata shell.
- `scripts/prerender-site.mjs`: loads the new homepage and pricing renderers for static HTML generation.
- `scripts/qa/cro-browser.cjs`: existing hero expectation updated for the redesign.
- `scripts/qa/studio-v2-browser.cjs`: redesign browser regression runner with separate screenshot/result outputs.
- `scripts/qa/studio-v2-features.cjs`: package messaging, section hierarchy and anchors, native keyboard FAQ, project assets, mobile focus, screenshots, and runtime checks.
- The normal build refreshes all 22 generated HTML pages, public content/SEO outputs, and `dist/` using the existing build pipeline.

## Preserved assets and facts

Original `logo.png`, mascot image/poster, intro/idle MP4s, and floating WhatsApp mascot files are reused without modifying their bytes, colors, proportions, or identity. The hero retains its play/pause button and reduced-motion behavior; the light video backdrop is deliberately framed against the dark UI. No generated replacement art or fake screenshots were introduced.

All four approved projects remain available: RPK Pustaka, TechCommers, StayEase, and Tech Resto. Their original detail routes, demos, screenshot galleries, contribution descriptions, and disclosures remain. Missing stack data and unconfirmed status/type information are explicitly identified rather than invented. Home project metadata and contribution are available through expandable details.

Verified contacts remain WhatsApp `6287732774899`, email `ajhiezudesign@gmail.com`, and Fastwork `techpedia_project`. No LinkedIn/TikTok URLs were present in verified contact data, so none were invented.

## Pricing

Four packages: Fix & Maintain, Website Starter, Feature Development, and Custom Business System. Exact draft rates are hidden from rendered offers by default. Each package has a verified WhatsApp link containing its name. Terms explain scope, extras, infrastructure, third-party charges, revisions, optional support, and estimated timelines. After owner approval, edit package scopes/rates and enable `pricingApproved`; formatting uses Indonesian Rupiah via `Intl.NumberFormat`. Run `npm.cmd run build` after edits because the site is prerendered.

## Validation

- `npm.cmd run build`: passed; 22 pages prerendered and static assets copied to `dist/`.
- `npm.cmd test`: 21 tests passed, including all prerendered routes, local links/assets, SEO uniqueness, sitemap, contact safety, and publication filtering.
- `npm.cmd run lint`: passed. `node --check` for both new JavaScript modules also passed.
- `node scripts/qa/studio-v2-browser.cjs`: 14 browser checks passed. Includes 320/390/768/1440 widths, CTA sizes, mobile menu/Escape, all four project routes, carousel navigation, contact prefilling, legacy hash routes, analytics consent, mascot playback/pause, and no runtime exceptions.
- `node scripts/qa/studio-v2-features.cjs`: nine browser checks passed for section order, four hidden-price packages, correct package messages, section anchors, native keyboard FAQ, original images, bidirectional mobile focus wrapping, cross-page pricing navigation, full-page screenshots, and no runtime errors.

Evidence is stored alongside this report in `browser-results.json`, `feature-results.json`, `after-desktop.png`, `after-mobile.png`, `full-desktop.png`, and `full-mobile.png`.

## Limits and owner decisions

No deployment was performed. Local Chrome QA uses its existing headless CDP runner and blocks Google Fonts for deterministic offline fallback checks; external font delivery, real devices, field Core Web Vitals, remote demo availability, and external contact-service delivery are not verified by these tests. This static frontend does not have a TypeScript check; the untouched Next.js app was not built or typechecked.

Owner confirmation is still needed for commercial rates, exact package scope/revision/support limits, missing project stacks, and unconfirmed project status/type. Working principles are described as agreements to establish for each engagement, without invented team sizes, clients, awards, or business results.
