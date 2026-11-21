# Techpedia redesign with the Awwwards skill

Implemented locally on the active static frontend. The concept is **Dari kebutuhan ke sistem**: a visitor selects a real business context and sees the corresponding original application. The existing static stack was retained to fit the project's deployment and content pipeline.

## Changes

- New typographic homepage with light drawing surfaces, deep teal ink and the existing cyan identity.
- Four business contexts update project copy, image, label and case-study link together. Client/demo distinctions remain visible.
- Staggered project gallery, ruled service index, application-backed process chapter, scope comparison and final consultation CTA.
- Matching Services, Work, case-study and contact surfaces, including repaired contrast boundaries inherited from the previous theme.
- Inter and Inter Tight served locally; GSAP and Lenis served from checked-in distributions. Reduced motion uses native scrolling and still content. Primary text stays still so motion does not postpone its paint.
- Server-rendered content preserved on initial browser boot. External scripts defer, and build combines CSS into `frontend/assets/site.css` to reduce request overhead. Edit component CSS files, then rebuild; do not edit site.css directly.
- New site preview image, custom `404.html`, existing canonical URLs, sitemap, robots, contacts and privacy controls retained.
- Floating WhatsApp and cursor trail hidden to clear the reading surface. Contact actions remain in navigation, packages, CTA and contact page.

## Verification

- `npm.cmd run build`: 23 static pages plus custom 404, output in `dist/`.
- `npm.cmd test`: 21 passed.
- `npm.cmd run lint` and `npm.cmd run lint:awwwards`: passed.
- Browser checks: homepage at 320, 390, 768 and 1440 px; 20 public routes at 390/768/1440 with one h1 and no horizontal overflow. Context selectors, keyboard FAQ, mobile menu/Escape, service dropdown, category filter, case-study carousel, quote messages and contact links passed.
- axe checks on Home, Services, Work, Contact and RPK case study: no violations in the latest functional run (`checks/results.json`).
- Two screenshot/audit passes and two independent visual critiques. The second critique is [CRITIQUE.md](CRITIQUE.md), with a weighted **7.01/10**, an estimate rather than an Awwwards award. It predates the final performance/metadata refinements; its visual judgments remain applicable.
- Server audit: 0 FAIL; remaining warnings are documented content repetition, long existing metadata and original image weights. See `audit.txt`.
- `final/report.json` records additional screenshot, reduced-motion and anchor checks; its mobile figures use an existing cache. Use `final/cold-mobile.json` for the separate fresh-context, cache-disabled 4x CPU/1.6 Mbps measurement. These local HTTP-server results do not establish deployed Core Web Vitals.

## Remaining limits

The independent review does not meet the skill's aspirational score of 8 in every category. It identifies opportunities for a more distinctive need-to-system interaction throughout the process, shorter mobile reading and stronger verified project outcomes. No business outcomes or completion statuses were invented. Existing unconfirmed statuses, quote-only prices and legal drafts still require the owner's factual review.

Original full-size project images are retained. The latest fresh-context local run measured LCP **8.404 s**, CLS **0**, and no runtime errors under the stated CPU/network throttling. This misses the 2.5 s target and remains an optimization item; do not interpret the cached screenshot run as a cold-load result. Native cross-document transitions were removed after a browser abort in pass 2; the site retains project-selection motion, button feedback, desktop smooth scrolling and ordinary browser navigation. No deployment was performed.

## Run and publish

Run `npm.cmd run build`, then `npm.cmd start` and open http://localhost:8081. For production-artifact QA use `python -m http.server 8081 --directory dist` instead of `npm.cmd start`, then run `npm.cmd run test:browser` in another terminal. Install QA dependencies with `npm.cmd install` if missing. Existing Vercel settings are retained; publish `dist/` through the existing root configuration or the generated `frontend/` directory through its existing configuration.

Source design: `DESIGN.md`, `frontend/assets/studio-v3.js`, `frontend/assets/awwwards.css`, `frontend/assets/awwwards-motion.js`. Content remains in `content/site.json`; pricing approval remains in `frontend/assets/pricing.js`.
