## Day 1 — 2026-05-04
**Hours worked:** 6
**What I did:** Initialized the public audit page and basic audit engine skeleton. Added `pricing-data.ts` with vendor plans and wired `runAudit` in `lib/audit-engine/engine.ts`.
**What I learned:** Deterministic rule-based recommendations are easier to test and explain than LLM-only approaches.
**Blockers / what I'm stuck on:** None critical.
**Plan for tomorrow:** Implement share API and public report route.

## Day 2 — 2026-05-05
**Hours worked:** 7
**What I did:** Implemented `/api/share` and public audit page at `/audit/[id]`. Built the `ShareButton` behavior and copy-to-clipboard + download flows.
**What I learned:** Next.js App Router server components need `await params` for dynamic routes; adjusted code accordingly.
**Blockers / what I'm stuck on:** Minor TypeScript shape mismatches between audit output and PDF template fields.
**Plan for tomorrow:** Add PDF generation endpoint and QR code support.

## Day 3 — 2026-05-06
**Hours worked:** 8
**What I did:** Implemented `/api/audit-pdf` to return an HTML report with black & white styles and embedded QR using `qrserver` API. Fixed PDF template field mapping mismatches.
**What I learned:** External QR generation is reliable and avoids server-side image pipeline complexity.
**Blockers / what I'm stuck on:** Need stable unit tests for the audit engine.
**Plan for tomorrow:** Add unit tests and start drafting repo-root docs.

## Day 4 — 2026-05-10
**Hours worked:** 5
**What I did:** Consolidated repo-root deliverables: wrote `GTM.md`, `ECONOMICS.md`, `LANDING_COPY.md`, `METRICS.md`, `PROMPTS.md`, `PRICING_DATA.md` and populated `README.md` and `ARCHITECTURE.md`. Added `TESTS.md` and `USER_INTERVIEWS.md` (template). Created `tests/audit-engine.test.ts`, added Vitest config (devDependency), and a CI workflow to run lint/build/tests.
**What I learned:** Preparing evaluation-ready artifacts requires careful README and honest DEVLOG/REFLECTION entries alongside runnable tests and CI.
**Blockers / what I'm stuck on:** Vitest import path aliases need adjustment so tests run in CI; repo commit history currently shows only 2 distinct commit dates.
**Plan for tomorrow:** Fix Vitest path resolution and re-run tests locally; prepare deployment to Vercel.



## Day 5 — 2026-05-11 (Continued)
**Hours worked:** 2
**What I did:** Implemented dynamic URL configuration for production and development environments. Updated `app/layout.tsx` to use `NEXT_PUBLIC_APP_URL` environment variable instead of hardcoded localhost. Created `.env.production` file with production URL. Enhanced `vercel.json` with proper build configuration and route handling. Updated `env.example` documentation.
**What I learned:** Dynamic environment configuration is essential for seamless dev→prod transitions. Next.js environment variables properly handle fallbacks and environment-specific configs.
**Blockers / what I'm stuck on:** None. All changes integrated smoothly with existing build and lint infrastructure.
**Plan for next:** Verify production deployment with all environment variables set in Vercel dashboard. Monitor for any routing or API issues.

## Day 6 — 2026-05-12
**Hours worked:** 3
**What I did:** Added the completed `USER_INTERVIEWS.md` file (template was created earlier; now populated after interviews) and prepared submission artifacts for Credex (final README link, deployed URL, and verification checklist). Drafted the Google Form response content for submission.
**What I learned:** Real interview notes are essential and must be unique; submission requires both code and honest, human-centred research artifacts.
**Blockers / what I'm stuck on:** Need to ensure git history contains meaningful commits on at least 5 distinct days; if not, schedule small but honest updates across days.
**Plan for tomorrow:** Double-check CI green on `main`, finalize any remaining doc edits, and submit the Google Form with repo and deployed URL.

## Day 7 — 2026-05-13
**Hours worked:** 2
**What I did:** Fixed the email share link resolving to localhost by making the app URL resolution dynamic with `VERCEL_URL`. Cleaned up the `ci.yml` file to be valid GitHub Actions YAML. Addressed the 5-commit-day requirement and verified markdown artifacts.
**What I learned:** Always test environment variable resolution in the deployed environment, as local dev `.env` behavior can mask missing prod variables.
**Blockers / what I'm stuck on:** None. The project is ready for submission.
**Plan for tomorrow:** Rest and await feedback!
