1) The hardest bug you hit this week, and how you debugged it

The hardest bug I encountered was a downstream data-shape mismatch that left the PDF export showing zeroed savings across every metric. At first glance this looked like a rendering problem or a conversion issue in the HTML-to-PDF pipeline, so my initial hypothesis was either (a) the PDF renderer was stripping numeric values, (b) the QR image fetch caused the template to fail, or (c) the audit data never reached the template. I reproduced the exact audit input locally and logged the object returned by `runAudit` in `lib/audit-engine/engine.ts` — the numbers were present and correct there, which eliminated hypothesis (c).

Next I traced the data flow from `runAudit` to the PDF template in `app/api/audit-pdf/route.ts`. I printed the assembled template context (server-side) and found a naming mismatch: the audit code returned camelCase properties (e.g., `totalMonthlySavings`) while the PDF template expected snake_case (e.g., `total_monthly_savings`). That mismatch meant the template rendered using `undefined` values, which were then coerced to zero in HTML. To validate, I added small, scoped temporary logs in the API route and returned a JSON debug endpoint that mirrored exactly what the template consumed — the values were indeed missing in the template context.

The fix was straightforward once isolated: update the template to reference the correct property names, and add defensive guards like `audit.totalMonthlySavings ?? 0` to avoid silent failures. I also added a unit test asserting that the audit output shape includes the required top-level fields and a small integration check that renders the HTML snippet in-memory to confirm numbers appear. Key lessons: reproduce the bug end-to-end, inspect data at each handoff, and add small, reversible instrumentation to validate hypotheses. These techniques caught the real issue quickly and prevented further downstream regressions.

2) A decision you reversed mid-week, and why

Mid-week I reversed an early UX decision to keep a decorative animated frame background on the landing page. The animation looked modern and helped the product feel polished quickly, but it introduced three concrete problems as we prepared shareable PDF export and public report pages. First, the animation caused subtle CSS stacking and rendering order issues that affected the print stylesheet. Second, the animation increased the page’s visual complexity, which made screenshots used in marketing and the public report less professional. Third, the additional CSS and JS increased bundle size and made the PDF rendering path slightly less deterministic in server contexts.

My decision process was: prototype quickly with the animation, then validate with two checks — (a) produce a sample PDF and confirm pixel output and (b) take a programmatic screenshot for the social preview. Both checks showed quality regressions. Given the project’s goals — shareable, professional audit reports that look credible in an investor or finance review — perceived trustworthiness was more important than a decorative flourish. I removed the animation and replaced it with a simple, accessible CSS background that rendered consistently across browsers and in the PDF output.

This reversal improved reliability (fewer print-related CSS edge cases), reduced bundle size, and made the public reports appear more professional. It also underscored an important principle for this project: visual polish must not undermine the core functional deliverable (accurate, auditable reports).

3) What you would build in week 2 if you had it

If I had a week 2, I would prioritize three engineering initiatives aimed at improving conversion and scalability. First, integrate Credex’s native onboarding flow so applicants can be auto-invited and pre-filled with underwriting metadata. This is the single highest-impact distribution channel because Credex can supply permissioned, high-intent traffic that dramatically lowers CAC and increases conversion to consults. Implementation would focus on a read-only prefill API and an invite trigger in the underwriting flow.

Second, move audit execution to an asynchronous job queue (Redis + BullMQ or a managed queue). Right now the audit runs synchronously in an API route; for scale this must be queued and processed by worker instances. This allows longer-running checks, safe rate-limited calls to external pricing sources, and offloading PDF generation to worker pools. The UI would display a job ID and progress indicator and deliver the finished report via email or the public URL.

Third, instrument the funnel carefully: `audit_completed`, `consultation_booked`, and `conversion` events with source attribution (DM, community post, Credex). Then build a small ROI dashboard to measure LTV/CAC by source. These three steps — Credex integration, async processing, and instrumentation — convert more audits into monetized outcomes and make scaling to thousands of audits per month realistic.

4) How you used AI tools

I used AI selectively and intentionally. The audit calculations and recommendation logic are deterministic and implemented in code; I deliberately avoided using LLMs for core financial math. Instead, I used an LLM (via OpenRouter / Claude) only to rewrite deterministic outputs into a concise, professional executive summary. The `PROMPTS.md` documents the full prompt used and the constraints applied (strict rules to avoid inventing numbers). For marketing copy and GTM brainstorming (headlines, DM templates) I did use an LLM to accelerate iteration, but every claim and price in the product is traceable to `PRICING_DATA.md` and the pricing JSON.

One specific time the AI was wrong: an early prompt produced a summary that cited a higher savings number than the audit engine computed. I caught this during QA because the summary used a different number than the audit result. That prompted two changes: (1) make the prompt strictly extractive by embedding the audit JSON and instructing the model to "Use ONLY the exact savings numbers provided", and (2) add a server-side sanity check that rejects any generated summary whose numbers don’t exactly match the audit output. These two changes eliminated the hallucination problem. In short: use AI for language, not for logic; lock the model down with constraints; and verify outputs programmatically.

5) Self-rating (1–10) with one-line reasons

- Discipline: 8 — maintained daily DEVLOG entries and followed a focused plan each day.
- Code quality: 7 — the core logic is modular and tested, but some UI trade-offs remain for speed.
- Design sense: 6 — functional and usable, but visual polish and accessibility could be improved.
- Problem-solving: 8 — resolved cross-stack bugs (data shape, PDF rendering) with systematic debugging.
- Entrepreneurial thinking: 8 — targeted GTM, unit economics, and Credex distribution were prioritized early.

Each rating reflects honest trade-offs: we prioritized correctness and clarity over flashy UI, and aimed for reproducible, auditable outputs that a finance reviewer can trust.

*** End of reflection file
