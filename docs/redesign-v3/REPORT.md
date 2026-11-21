# Techpedia Project V3 — implementation and visual review

Indonesian-language update: all active navigation, hero panels, service and project copy, workflow, pricing, FAQ, footer, contact messages, accessibility labels, page titles, and shared source content are localized. Brand/project/technology names and real screenshots remain authentic. The build regenerates all 23 routes. Build/lint, 21 automated tests, and the adjusted 16-check browser suite passed; additional checks confirmed hero CTA bounds at 320/390px. Latest previews: `bahasa-indonesia-desktop.png` and `bahasa-indonesia-mobile.png`. Mascots remain hidden and the original wizard cursor remains enabled, per the owner's latest preferences.

Latest owner-requested brand/menu update: the supplied `Logo TechPedia (3).jpg` is now used in the navbar, footer, CTA, organization metadata, and browser favicon. The copied JPEG is byte-identical to the supplied file; CSS adapts its monochrome presentation to dark/light surfaces. `frontend/assets/brand-menu.css` supplies a two-column Services dropdown with six real services and a full-catalog link. Build, lint, 21 static tests, and browser checks for opening, Escape/outside-click dismissal, logo loading, and desktop/mobile overflow passed. Updated previews: `services-dropdown.png` and `brand-mobile.png`.

## Result

Rebuilt the active static website around the reference's composition system: centered three-slide hero, numbered tabs, layered neutral/cyan ambience, capability strip, wide real-project showcase, light flat two-column services, dark six-stage process beside a sticky project visual, large two-column work, three pricing offers plus a full-width custom offer, dominant cyan CTA, light split FAQ, and extended dark footer.

The Services page now has a split title/inquiry hero with a genuine StayEase screenshot, light core capabilities, dark related capabilities, process, CTA, and FAQ. Both `/work/` and the existing `/portfolio/` expose the redesigned image-led project listing with working category filters. All existing service detail and project case-study routes remain. Case-study typography, background contrast, feature sections, gallery captions, and handover details were brought into the same design system.

This is a local implementation; no deployment or external messages were sent.

## Reference work and review evidence

All six supplied HTML files were parsed. All six live reference pages were captured in Chrome. The [reference audit](REFERENCE-AUDIT.md) documents observed section composition, fonts, geometry, colors, spacing, interactions, and deliberate differences.

The homepage reference and Techpedia were captured at **1440 × 900**, **768 × 1024**, and **390 × 844**. Initial captures are retained in `initial/`; corrected views are in `final/`. Final captures load **Inter Tight and Inter** from Google Fonts, and `final/measurements.json` records loaded font faces and no horizontal overflow at the three target viewports. The deterministic browser regression suite separately blocks remote fonts to verify fallback rendering.

Open [the side-by-side comparison gallery](comparison/index.html), or inspect the [desktop](comparison/desktop.png), [tablet](comparison/tablet.png), and [mobile](comparison/mobile.png) comparisons. Reference is on the left; Techpedia is on the right. Reference screenshots are documentation artifacts, excluded from the production `frontend/` and `dist/` trees.

## Final comparison

“Verified” means reviewed in actual browser captures and/or exercised in the browser suite. It does not mean pixel identity or a subjective design score.

| Section | Reference pattern | Techpedia implementation | Status |
|---|---|---|---|
| Navbar | Compact 84px dark header, central navigation, outlined pill CTA | 84px desktop / 80px mobile, original logo, real routes, service dropdown, outlined Work With Us | Verified |
| Hero | Centered oversized display, subtitle, twin CTAs, three numbered tabs, ambient art | Three accessible software/business/development panels; approximately 88px desktop, 61px tablet, 38px mobile; original mascot in a separate lower art layer | Verified |
| Trust strip | Broad horizontal logo rhythm | Real capability typography with wrapped mobile layout; no client endorsements | Verified |
| Showcase | Wide video visual between hero and services | Selectable wide showcase with four genuine project screenshots; clearly labeled as project previews | Verified |
| Services | Light neutral, two columns, three rows, category/title/circular arrow | Six software services, fine rules, restrained cyan hover; one column on mobile | Verified |
| Process | Centered intro; six vertical stages, accent rail, sticky adjacent image | Six requirement-to-handover stages and original RPK dashboard visual | Verified |
| Work | Dark, large image-led project grid | Four authentic projects, large 4:3 previews, type/status, detail links, technical disclosures; real filters on Work | Verified |
| Pricing | New Techpedia addition | Three offers plus full-width Custom Application; quote-led pricing, editable scope, verified WhatsApp prefills | Verified |
| CTA | Full-width bright accent with left text and right original art | Full-width cyan conversion block, dark text/button, original Techpedia logo detail | Verified |
| FAQ | Split editorial intro and accordion | Light split layout as explicitly requested, native keyboard disclosures, cyan expanded icon | Verified |
| Footer | Extended dark navigation/contact area | Genuine brand, service/work/pricing/contact links, verified channels, typographic brand sign-off | Verified |

## Corrections made after the first pass

- Replaced the V2 split homepage hero entirely and added all three selectable panels with keyboard navigation.
- Reviewed real section measurements and changed all-dark repetition into dark → light services → dark process/work/pricing → cyan CTA → light FAQ → dark identity/footer.
- Replaced service rows with the reference-like flat two-column category/title composition.
- Added the missing large media transition using original screenshots, with functional project selectors.
- Corrected legacy case-study white-on-light text and gallery caption contrast while retaining content and carousel functionality.
- Adjusted mobile display proportions, mascot clearance, tablet tab width, and play/pause touch target after viewport checks.
- Reworked the Services page again after comparing its initial centered hero with the reference's split inquiry composition.
- Restored a usable Services dropdown and corrected the legacy back-to-top glyph.
- Strengthened the footer's large, light typographic brand sign-off and moved it above the navigation columns after reviewing the reference footer side by side.

## Brand and content preservation

Original logo, mascot images/posters, mascot intro/idle videos, floating WhatsApp companion, and all project screenshots are reused. Their source files were not modified. No new character, fake screenshot, partner logo, award, testimonial, client metric, office, or registration detail was created.

RPK Pustaka, TechCommers, StayEase, and Tech Resto retain their detail routes, galleries, demos, contributions, and known project metadata. Missing stacks or unconfirmed statuses/types remain disclosed. All published services remain accessible, including additional existing categories on the Services page.

No Techpedia posts are published in the content source. The journal component remains hidden, with no invented articles or public Insights navigation. AI Solutions and Fintech references were studied as page patterns; no unsupported Techpedia offerings were added.

Verified channels remain WhatsApp `6287732774899`, email `ajhiezudesign@gmail.com`, and Fastwork `techpedia_project`. The existing optional API contact behavior, local contact mode, analytics consent implementation, legacy hash routing, backend, and separate Next.js implementation remain intact.

## Main source changes

| File | Purpose |
|---|---|
| `frontend/assets/studio-v3.js` | Independent reusable hero, capability strip, showcase, services, process, work, pricing, CTA, FAQ, journal, identity, Services and Work renderers; tab/showcase/scroll interactions |
| `frontend/assets/studio-v3.css` | Central tokens, Inter Tight/Inter typography, dark/light/cyan rhythm, responsive grids, shared internal-page styling, focus/reduced-motion rules |
| `frontend/assets/pricing.js` | Editable four-offer configuration; final package renamed Custom Application; approval flag remains false |
| `frontend/assets/app.js` | Active V3 renderer integration; Services/Work replacement; `/work/` route support; original detail/contact/API logic retained |
| `frontend/index.html` | Shared navigation/footer shell, original brand, new font/module/styles, dropdown, corrected glyph |
| `scripts/prerender-site.mjs` | Prerenders V3 and the new Work route |
| `scripts/cro-static.test.cjs` | Includes new Work route in SEO/link/asset checks |
| `scripts/qa/studio-v3-browser.cjs` | V3 interaction, layout, contacts, filters, routes, image, mascot and runtime regression suite |
| `scripts/qa/studio-v3-visual.cjs` | Repeatable target-viewport and internal-page captures, font loading and layout measurements |
| `scripts/qa/reference-v3.cjs` | Live reference screenshot/measurement collection |
| `scripts/qa/inspect-saved-reference.py` | Structural audit of owner-supplied HTML |
| `scripts/qa/compare-studio-v3.py` | Side-by-side QA artifacts and comparison gallery |
| `package.json`, `README.md` | Active V3 lint/browser commands and handoff guidance |

The normal build refreshes 23 static HTML routes, sitemap, robots, public bootstrap/content, and `dist/`. Earlier uncommitted project changes were preserved. Legacy V2 design files remain available as history but are not loaded by the active shell.

## Actual validation

- `npm.cmd run build`: passed, **23 pages** prerendered, static output copied to `dist/`.
- `npm.cmd test`: passed, **21 tests**, including prerendered route headings, unique SEO, canonical/social metadata, sitemap, all referenced local files, approved content, contact/URL safety, and publication rules.
- `npm.cmd run lint`: passed, including the active V3 module and pricing configuration.
- `npm.cmd run test:browser`: passed, **17 browser checks**, including three slide controls and keyboard keys; 320/390/768/1440 layouts across all slides; actual CTA/mascot collision checks; section contrast; screenshot showcase; dropdown; quote links; keyboard FAQ; mobile focus trap/Escape; both Work route filters; all existing service routes and project case studies at multiple widths; galleries; decoded images; real contact links; hash/cross-page navigation; reduced-motion and normal mascot playback/pause; no runtime exceptions. Results: `browser-results.json`.
- Final visual capture runner completed at all three requested sizes; Inter/Inter Tight loaded and no homepage overflow recorded. Initial and final screenshots were inspected side by side and confirmed issues were corrected.

No TypeScript source changed. The production site is vanilla JavaScript with static prerendering, so there is no applicable production TypeScript check. The separate, untouched Next.js implementation was not built/typechecked.

## Remaining owner decisions and limits

Exact commercial prices remain hidden behind `pricingApproved: false`. The owner must approve numbers, scope, revisions, support, and infrastructure terms before enabling rates. Update the config and rebuild to refresh prerendered offers.

Missing project stacks and unconfirmed project type/status still need owner input. Real articles or an authentic project video can replace the hidden journal/screenshot showcase later; none were fabricated.

Visual differences intentionally retained: Techpedia's original brand/mascot, cyan accent, different heading content, capability names instead of partner marks, genuine screenshots instead of reference artwork, one real category filter row, additional pricing, and the requested light FAQ. The Services page uses Techpedia's own content and screenshot inquiry panel.

Real-device touch behavior, field Core Web Vitals, external demo uptime, and message delivery inside third-party services were not measured. Local Chrome checks confirm destination construction and local behavior. No deployment was performed.
