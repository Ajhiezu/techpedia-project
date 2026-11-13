# Frontend testing - Phase 5 update

13 November 2026. Current evidence is in [Phase 5 QA](../quality-assurance/PHASE-5-COMPLETION-REPORT.md).

- Root JavaScript syntax checks and static build PASS. The static build is not a Next.js production build.
- Three adapter tests PASS.
- Seventy Chrome and seventy Edge cases PASS, including nineteen routes at eight widths each. Fixtures and real Laravel HTTP are distinguished in evidence.
- Actual browser inquiry submission, lazy article/service details and database persistence PASS on isolated Laravel/SQLite.
- Next.js type check/build and runtime remain BLOCKED by missing npm dependencies.
- Full screen-reader/device/manual accessibility and field performance remain unverified.

Reproduce fixture checks with `node scripts/qa/browser.cjs`; select Edge with QA_BROWSER=edge. Set a unique QA_LABEL to preserve baseline evidence. Use the isolated live runner for real server testing; never point fixtures or destructive tests at production.
