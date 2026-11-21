# Reference deconstruction — Techpedia V3

## Sources and method

Inspected all six owner-supplied HTML files in `C:/Users/ajhie/Downloads`, using an HTML parser to list section boundaries, font declarations, stylesheets, and headings. See `saved-html-audit.json`. These files are reference material only; their source is not included in production assets.

Captured the live [homepage](https://zeeframes.com/), [Services](https://zeeframes.com/services), [Work](https://zeeframes.com/work), [Insights](https://zeeframes.com/insights), [AI Solutions](https://zeeframes.com/ai-solutions), and [Fintech](https://zeeframes.com/industries/fintech-design-agency) in Chrome. Screenshots and computed section measurements are in `reference/`. The first full-page capture timed out; section-by-section captures succeeded and were used instead. Network permission was required for the live captures.

Exact homepage viewport captures: 1440 × 900, 768 × 1024, and 390 × 844. The live reference autoplays; its mobile capture shows a different hero slide from desktop. Comparisons assess structure and proportions rather than identical slide copy.

## Repeating visual system

The visible content sits within approximately 1240px on the 1440px desktop, with margins near 92px. Header height is 84px, with a compact logo, middle navigation, locale control, and thin outlined pill CTA. Geologica, Inter Tight, and Inter are declared in the saved pages; computed section headings use Inter Tight, typically 500 weight, 36px/40px. Display hero text is bold uppercase and centered. Ordinary body copy is approximately 16px. Bright accent is concentrated in tab states, labels, selected borders, and a full-width promotional section.

Most sections use 80px vertical padding on desktop, with smaller 24–48px spacing in mobile utility classes. The site varies between centered introductions, flat two-column service lists, a long vertical process narrative with an adjacent image, image-first work, a horizontal accent promotion, and split FAQ/contact sections. It does not repeat a uniform three-card grid throughout.

| Area | Observed reference composition | Styling, motion, and responsive behavior | Techpedia decision |
|---|---|---|---|
| Navigation | 84px dark horizontal header, roughly 1240px content, centered dense menu, locale and outlined CTA at right | 14px menu; thin white pill border; accent current-page underline; mobile logo, locale, hamburger | Same density and outline treatment; About, Services, Work, Pricing only; useful service dropdown; no fabricated Insights/industry links |
| Hero | Centered competency pill, huge uppercase heading, one-line subtitle, two pills, three numbered underlined tabs | Dark neutral background with restrained accent ambience and layered art; roughly 72–88px heading desktop; mobile centered ~38px, compact horizontal tabs; live slide changes | Independently implemented three-panel accessible slider, no autoplay; cyan ambience; original mascot in a lower decorative layer; manual slide selection and arrow/Home/End keyboard support |
| Trust | Small uppercase centered lead-in and broad horizontal partner marks below the hero | High-contrast white marks; even horizontal spacing; moving/cropped strip at narrow widths | Static wrapped capability typography; no partner marks or unverified technology claims |
| Video showcase | Wide media-led block directly between hero and light services; measured section height ~806px | Dark surround; minimal overlaid link; wide media plane | Real existing project screenshots in a selectable wide showcase; clearly identified as screenshots, not a fabricated showreel |
| Services | Light neutral background, centered 36px heading/subtitle, two columns and three rows | Flat rows separated by fine rules; category label above ~28px title, circular top-right arrow, ~32px column gap; single-column mobile | Same grid geometry, original six software capabilities and concise scope copy; cyan hover fill and arrow response |
| Process | Centered heading above long six-step list on left and sticky square-ish image on right | 36px step headings; small number outside an accent vertical rail; subdued inactive text; measured total height ~1833px; mobile stacks | Six original workflow stages with number, subtitle, description, active cyan rail; sticky original RPK dashboard visual instead of reference stock imagery |
| Work | Dark section, centered intro, very large two-column thumbnails | ~4:3 frames, modest corner radius, titles/categories below; subtle image motion; stacked mobile | Four genuine projects and original screenshots; full detail routes, statuses, type disclosures, contribution/stack details; no invented outcomes |
| Accent CTA | Full-width bright accent field, left-aligned heading/copy/button, decorative object to right; measured ~414px high | Gradient/noise-like depth; heading ~36px; dark/neutral text and rounded button | ~420px cyan block, larger supplied Techpedia heading, original logo detail on right, real WhatsApp CTA; right art hidden on mobile |
| FAQ | Split introduction/CTA and accordion; live homepage version is dark | ~36px heading; rectangular disclosures with subtle borders and accent expanded state | Explicit user V3 requirement takes priority: light split layout, fine rules, native keyboard-accessible details, restrained cyan expanded icon |
| Insights | Light editorial section, image-led article cards; listing page has centered uppercase heading, search, featured split article | Reading metadata, topic classification, generous gaps | No Techpedia posts exist. Prepared component stays hidden; no invented articles, dates, reading times, or public article navigation |
| Testimonials/contact | Genuine testimonial content and inquiry area, followed by office/contact locations | Light-to-dark transition; large contact heading; multiple contact columns | No testimonials or offices invented. Existing direct contact/API behavior retained; real WhatsApp, email, Fastwork in footer/contact route |
| Footer | Extended full-width dark navigation and company identity, multiple columns | Compact headings, muted links, clear contrast and spacing; mobile wraps | Original Techpedia logo, service links, work/pricing, verified contacts, large typographic sign-off; no branches or registrations invented |

## Other page patterns

Services uses a split dark hero with a large left title and inquiry panel, then grouped capability introductions and large cards. The side-by-side review prompted a further revision to Techpedia's Services page: a split dark title/inquiry hero with an authentic StayEase screenshot, followed by the light service grid, related-capabilities group, process, cyan CTA, and light FAQ. No awards or team photographs were substituted for missing proof.

Work uses a centered multi-line title, substantial spacing before two filter rows, and a large mixed-width gallery. Techpedia has four projects and two existing categories, so it uses one functional category row and a two-column gallery. No empty taxonomies or pagination were added.

Insights uses a light heading/search region and a featured article split with an image, followed by editorial cards. No corresponding published Techpedia content exists.

AI Solutions and Fintech use focused offer heroes, capability/use-case sections, work proof, process, technology information, FAQ, and conversion sections. These are useful structural references, but Techpedia has no verified equivalent AI/fintech offering. No such services or claims were created.

## Visual review and iteration

`initial/` contains the first rendered V3 captures. Review found legacy case-study light surfaces with light text, cropped/weak technical text contrast, and a mobile mascot clearance issue. The next pass corrected the case-study colors, gallery captions, service density, mobile typography and interaction target, pricing paragraph alignment, dropdown navigation, and mascot spacing. `final/` contains recaptures; `comparison/` contains side-by-side artifacts, with the reference on the left and Techpedia on the right.

Reference page scripts, artwork, images, logos, partner marks, testimonials, and copy were not copied into `frontend/`. All reference screenshots remain QA artifacts under this documentation directory.
