# 404 Error Page — High-Fidelity Design

## Page Objective

The custom 404 restores orientation quickly while preserving Techpedia Project’s professional visual language. It is not a playful campaign page and should not distract from recovery.

```text
SIMPLIFIED HEADER: wordmark + Home link
CENTERED ERROR CONTENT
  [Simple system-path illustration]
  404
  H1: This page could not be found.
  Supporting guidance
  [Back to Home] [Explore Services]
RECOVERY LINKS: Portfolio · Insights · Contact
FOOTER
```

## Visual Specification

| Element | High-fidelity treatment |
| --- | --- |
| Background | White canvas with a restrained Light Background panel around the central content. |
| Illustration | Original line illustration: a browser frame, broken-but-reconnecting route line, and one Royal Blue node. It communicates recovery, not failure drama. |
| Error code | Large Plus Jakarta Sans `404` in Deep Blue, used as orientation not decoration. |
| H1/body | H1 **This page could not be found.**; body: `The link may be outdated or the address may be incorrect.` |
| Primary CTA | Royal Blue `Back to Home`. |
| Secondary CTA | Outline `Explore Services`. |
| Recovery links | Tertiary links for Portfolio, Insights, and Contact. |

## Interaction, Response & Technical Note

- All actions have clear focus/hover states, keyboard access, and 44 px+ touch targets.
- Desktop/tablet center the recovery panel; mobile stacks CTA buttons and keeps illustration within the 4-column container.
- There is no search field unless site search is genuinely implemented; it must not be a static visual control.
- At implementation, this route must return HTTP 404 and use `noindex`; those are technical requirements, not part of the visual design.
