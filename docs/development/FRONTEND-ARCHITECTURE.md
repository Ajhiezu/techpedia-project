> Latest scope update: the owner has chosen an independent Portfolio Hub with hardcoded local projects and direct WhatsApp/email/Fastwork contact. The CMS/API architecture below is retained historical/optional scope. See [current architecture](../portfolio-hub/ARCHITECTURE.md) and [hub validation](../portfolio-hub/VALIDATION-REPORT.md). No deployment approval is implied.

# Frontend architecture

Two implementations coexist during migration:

- `frontend/`: dependency-free HTML/CSS/browser JavaScript, served by Laravel on the same origin. `assets/api.js` owns bounded pagination and failure detection; `assets/app.js` owns hash routing and DOM interactions. Data-derived strings are escaped. API failures remain visible, and contact success is shown only for a successful HTTP response.
- `frontend-next/`: Next.js App Router with an optional catch-all server route, TypeScript, Tailwind and established CSS. `lib/api.ts` owns server-side requests; `Content`, `Catalog`, `Navigation` and `ContactForm` are reusable components. API/storage rewrites preserve same-origin browser requests. No secrets are exposed through NEXT_PUBLIC environment variables.

Both use `/api/v1` and published content only. A static-only Python server can preview layout but cannot store inquiries. Run Laravel to serve the static implementation and API together.

The Next.js source has not been compiled because npm access is blocked. The static implementation is the one covered by the recorded Chrome fixture tests. No build/runtime equivalence is claimed.
