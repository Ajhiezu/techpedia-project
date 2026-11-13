# Prototype User Flows — Phase 2.7

1. **Service inquiry:** `#/` → `#/services` → `#/services/[service]` → `#/contact` → validation/success state.
2. **Portfolio evaluation:** `#/` → `#/portfolio` → transparent no-project fallback → `#/services` or `#/contact`. Case study layout is documented in `CASE-STUDY-DESIGN.md` and becomes interactive only with valid project content.
3. **Insight discovery:** `#/` → `#/insights` → article-detail pattern → `#/services`.
4. **Direct inquiry:** `#/contact` → invalid state or prototype success/failure state.

All routes are local hash routes; no external system is contacted.
