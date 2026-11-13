# Our Process — High-Fidelity Design

## Information Architecture Decision

Phase 1 designates Our Process as `/about#our-process` at initial release. This document provides a complete high-fidelity process module that can be shown as an anchor section; it becomes a standalone `/process` page only after content depth warrants a separate route.

## Composition

```text
HEADER + BREADCRUMB/ANCHOR CONTEXT
PROCESS INTRO: 7-col copy + 5-col connected-stage visual
SIX DEVELOPMENT STAGES
COMMUNICATION WORKFLOW
QUALITY ASSURANCE
PROJECT HANDOVER
FAQ / CLARIFICATION
CTA
FOOTER
```

## Section Specification

| Section | High-fidelity treatment | Boundary |
| --- | --- | --- |
| Introduction | White hero with H1 **A clear path from business need to digital solution.**; six-node visual system. | Do not state fixed project duration or methodology certification. |
| Six stages | Light Background, 6-step desktop rail / 3×2 tablet / vertical mobile: Discovery, Planning, Design, Development, Testing, Deployment. Each step has purpose, input, and output label. | Labels are a communication framework; exact practices follow project scope. |
| Communication workflow | White 6/6 split: stakeholder input → shared decisions → documented next step. Use message/document/decision icons. | Do not promise response frequency or named tools until confirmed. |
| Quality assurance | Light Background checklist visual: requirements alignment, functional review, usability/accessibility considerations, launch readiness. | Do not claim certification, test coverage, or performance target without evidence. |
| Project handover | White handoff map: agreed delivery → documentation/access context where applicable → next-step support discussion. | No warranty, SLA, training, or support commitment unless confirmed. |
| FAQ | Compact accordion for scope, collaboration, and launch questions. | Answers remain policy-safe. |
| CTA | Deep Blue close: **Ready to map out your next digital step?**; `Schedule a Discovery Session`. | Routes to Contact; service unset or preselected per source route. |

## Interaction & Responsive

- Stage rail has selected/focusable step state only if it reveals additional detail; otherwise it remains a semantic ordered list.
- Tablet converts the rail to 3×2, mobile to an ordered vertical timeline with connectors that do not convey information alone.
- Communication/QA/handover diagrams have textual equivalents and stable reading order.
- Header, footer, CTA, type scale, focus states, and reduced-motion treatment remain consistent with Homepage and Services.
