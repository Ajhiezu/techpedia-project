# Homepage Interaction Specification — Techpedia Project

## 1. Navigation

| Element | Default / pointer | Keyboard & screen reader behavior | Mobile behavior |
| --- | --- | --- | --- |
| Sticky header | White, transparent shadow; adds subtle bottom border after scrolling. | Skip link is first focusable item; active Home has `aria-current`. | Header keeps logo + labelled menu trigger. |
| Services dropdown | Opens on click/tap; hover may preview on pointer devices only. | Trigger is a button with `aria-expanded`; Enter/Space toggles; Escape closes; focus returns to trigger. | Opens inside menu panel as a disclosure, not hover-only. |
| Primary nav CTA | Royal Blue default; Deep Blue hover; visible Royal Blue focus ring. | Native link/button semantics; readable destination label. | Retains clear route inside menu or a safe compact action. |
| Mobile menu | Closed by default; no underlying interaction when open. | Focus moves into dialog/panel; Escape and close button exit; focus returns to trigger. | Full-height panel with 44 px minimum targets. |

## 2. Hero & Section Actions

| Element | Interaction | State requirement |
| --- | --- | --- |
| Start a Project | Navigates to `/contact` and preserves `Belum yakin / perlu rekomendasi` rather than forcing a service selection. | Primary button default/hover/focus/active/disabled N/A. |
| Explore Our Work | Navigates to `/portfolio`. | Secondary button has distinct border, hover, and focus ring. |
| Service card | Text link and/or whole card activates only one destination. | Card hover is subtle border/elevation; no layout shift; link has accessible name. |
| About/process links | Navigate to defined About page/anchor. | Anchor receives visible focus and target context. |
| Project card | Only interactive when project detail exists. | In TBD review mode, non-interactive card includes visible status label. |
| Final CTA | Navigates to Contact. | Maintains high text/button contrast on Deep Blue surface. |

## 3. FAQ Accordion

- Each question is a full-width button with visible chevron and 44 px+ target height.
- Default state is collapsed. Expanded state changes chevron orientation and exposes the answer panel.
- `aria-expanded` and panel association are required; focus remains on the trigger after expansion.
- Allow multiple items to stay open unless testing identifies a stronger reason for single-open behavior.
- Use 180–250 ms height/opacity transition; reduced-motion setting expands immediately.

## 4. Feedback & State Rules

| Scenario | UI response |
| --- | --- |
| Route loading | Preserve selected button width; optional non-blocking loading state only if navigation is delayed. |
| Project data unavailable | Replace section with documented Approach fallback; no broken images/card shell. |
| Testimonials unavailable | Omit the section and collapse its spacing; do not show “coming soon” social proof. |
| Services menu unavailable/fails | Nav still links to `/services` as a direct fallback. |
| Contact channel TBD | CTA routes to form page; do not reveal empty WhatsApp/social controls. |
| Reduced motion | Remove reveal/parallax, use immediate open/close or color state changes. |

## 5. Motion Budget

| Interaction | Duration | Motion |
| --- | ---: | --- |
| Button/link state | 150–200 ms | Color/border/shadow only. |
| Card hover | 180–200 ms | Border/shadow and maximum 2 px translate, optional. |
| Dropdown/menu | 180–250 ms | Opacity + short vertical transition. |
| FAQ expansion | 180–250 ms | Height/opacity without abrupt page jump. |
| Section reveal | Optional; ≤250 ms | One-time fade/short translate; never blocks reading. |

No auto-playing carousel, ambient moving background, count-up statistic, scrolljacking, or motion-only communication is permitted.

## 6. Analytics Readiness (No Tracking Implementation)

Potential Phase 3 event definitions, subject to privacy approval:

- `homepage_cta_start_project`
- `homepage_cta_explore_work`
- `homepage_service_detail_opened`
- `homepage_faq_opened`
- `homepage_cta_discuss_project`

Do not implement analytics or collect personal data as part of this design phase.
