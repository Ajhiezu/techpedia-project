# Design Tokens Final — Phase 2.5

The Phase 1 token set remains final. Phase 2 applies it without change.

| Group | Tokens applied |
| --- | --- |
| Brand | Primary `#2457D6`; Deep `#163B8C`; Light `#F4F7FC`; White `#FFFFFF`; Ink `#172B4D`; Secondary `#64748B`. |
| Typography | Plus Jakarta Sans 56/64 display through 22/30 H4; Inter 18/28 intro, 16/24 body, 14/20 UI. |
| Layout | 1200 px max desktop container; 12/8/4 grid; gutters 24/20/16 px; section space 96/72/56 px. |
| Shape/depth | Radius 6/10/16 px; `shadow.sm` for cards and `shadow.md` for menu/elevated visual. |
| States | Focus `#2457D6`; success `#16794C`; warning `#9A5B00`; error `#B42318`; information `#1D4ED8`. |

All listed white text pairings and body sizing retain the Phase 1 WCAG 2.2 AA verification requirement.

## Phase 5 accessibility correction

The implemented muted text token is now `#5D6C82` to meet normal-text contrast on Light Background `#F4F7FC`: 4.97:1 instead of 4.43:1. Primary Royal Blue and brand direction are unchanged. See docs/quality-assurance/ACCESSIBILITY-AUDIT-REPORT.md for evidence and remaining limits.
