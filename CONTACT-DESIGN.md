# Contact Page — High-Fidelity Design

## Page Objective

Contact is the primary conversion page. It gathers only the information needed to begin discovery and makes privacy, progress, error recovery, and alternative contact routes clear without making unsupported response-time commitments.

```text
HEADER
CONTACT HERO: H1 + reassurance + short process context
MAIN CONTENT: 7-col inquiry form | 5-col contact/help panel
FAQ STRIP
FOOTER
```

## High-Fidelity Layout

| Section | Design treatment | Status rule |
| --- | --- | --- |
| Hero | White; H1 **Tell us what you want to build.**; supportive copy: share the business need, idea, or issue; 8-column max. | Do not promise response time, free consultation, or project acceptance. |
| Inquiry form | White elevated surface, 7/12 desktop. Grouped: Contact → Project need → Privacy. Labels above controls. | Uses approved field rules below. |
| Contact/help panel | Light Background 5/12; explains what to include, service selection help, privacy link, verified direct contact if available. | Email/WhatsApp/social are hidden until active and confirmed. |
| WhatsApp CTA | Secondary outlined action with WhatsApp icon. | **Conditional:** only displayed if active, monitored channel and prefilled message policy exist. |
| FAQ strip | Three common questions or link to full FAQ beneath form. | Answers must remain policy-safe. |

## Form Fields

| Group | Field | Required | High-fidelity behaviour |
| --- | --- | ---: | --- |
| Contact | Name | Yes | Text input with visible label. |
| Contact | Email / WhatsApp number | At least one | Present both fields; group-level helper states one is required. |
| Contact | Business/organisation | No | Optional context field. |
| Project need | Service selection | Yes | Native select or accessible radio cards; includes `Belum yakin / perlu rekomendasi`; preselected from service routes. |
| Project need | Budget range | No | Disabled from public configuration until commercial ranges are approved; may show `Belum ditentukan`. |
| Project need | Project description | Yes | Textarea with prompt: “Ceritakan tujuan, masalah, atau jenis solusi yang Anda butuhkan.” |
| Project need | Link/reference | No | Optional URL; no attachment field until workflow is ready. |
| Privacy | Consent | Yes | Checkbox plus Privacy Policy link; no prechecked state. |

## Form State Designs

| State | Visual treatment | Behaviour/copy |
| --- | --- | --- |
| Default | White input, `border.default`, label and helper text. | Clear grouping and optional markers. |
| Focus | Royal Blue 2 px visible focus ring + stronger border. | Never rely on shadow or color change alone. |
| Validation error | Error border/icon plus inline `color.error.700` message below affected field. | Preserve value; focus error summary/first invalid field on submit. |
| Submitting | Button retains dimensions, becomes disabled with spinner/status. | `Sending inquiry…`; prevent duplicate submit. |
| Success | Dedicated confirmation state/page with success icon, summary of non-sensitive selected service/contact channel, routes back to Services/Insights. | `Thank you, your inquiry has been received.` No invented ticket or response-time promise. |
| Failure | Form remains populated; error alert and retry action. | `Your inquiry was not sent. Check your connection and try again.` Show alternative only if active. |

## Responsive & Accessibility

- Desktop: form 7/12, helper 5/12. Tablet stacks if field comfort is compromised. Mobile: one column, submit full width.
- Controls have 44 px+ touch targets; appropriate keyboard types are used for email, phone, and URL.
- Error and submit messages use semantic live-region behavior; color is never the only signal.
- Avoid modal forms. Contact has a direct, shareable URL and retains input after recoverable failure.
