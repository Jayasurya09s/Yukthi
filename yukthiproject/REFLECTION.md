# Reflection

## Initial Thinking

At the beginning of the project, I initially viewed the idea as a simple AI subscription calculator.

Very quickly, I realized the actual challenge was much deeper:
- AI tooling ecosystems are fragmented
- pricing structures vary significantly
- organizations often adopt overlapping subscriptions without visibility into efficiency

This changed my mindset from:
```txt
“building a calculator”
```

to:
```txt
“building an AI infrastructure optimization platform.”
```

---

# Biggest Technical Lesson

One of the biggest lessons during development was understanding that:
- AI should enhance deterministic systems
- not replace critical financial logic

Initially, I allowed the LLM to generate more flexible summaries.

During testing, I discovered hallucinated savings values that differed from the deterministic calculations produced by the audit engine.

For example:
- the audit engine correctly calculated `$40/month`
- the AI summary generated `$120/month`

This immediately highlighted an important engineering problem:
```txt
Financial recommendation systems cannot rely entirely on unconstrained LLM outputs.
```

That realization heavily influenced the architecture.

I redesigned the system so that:
- pricing calculations remained deterministic
- recommendation logic remained internal
- AI only handled summarization and readability

This separation significantly improved reliability and trustworthiness.

---

# Product Thinking Evolution

Another important realization was that:
```txt
A technically functional product is not automatically a good product.
```

Initially, I focused heavily on:
- APIs
- optimization logic
- backend orchestration

But once the frontend dashboard and public sharing system were built, I understood how important:
- perceived quality
- UX clarity
- shareability
- trust signals

are for SaaS products.

The project evolved from:
```txt
“backend-first engineering”
```

to:
```txt
“building a complete user-facing product experience.”
```

---

# Most Challenging Areas

## 1. Prompt Reliability

The hardest AI-related problem was constraining prompts strongly enough to prevent hallucinated financial outputs.

This required:
- deterministic isolation
- explicit prompt constraints
- graceful fallback handling

---

## 2. Client vs Server Rendering

Using Next.js App Router introduced several rendering challenges:
- browser APIs in server components
- clipboard interactions
- localStorage persistence

I had to carefully separate:
- server-rendered logic
- client-only interactions

---

## 3. Balancing Speed vs Architecture

Because the project was built under time constraints, there was constant tension between:
- rapid feature delivery
- clean architecture
- maintainability

I learned that:
```txt
Good architecture is often about choosing where NOT to overengineer.
```

---

# What I’m Most Proud Of

The part I’m most proud of is the overall system design.

The platform now includes:
- deterministic audit logic
- pricing intelligence
- AI summarization
- public report sharing
- lead capture infrastructure
- email workflows
- charts and analytics
- CI/CD setup

What started as a simple idea evolved into a production-style SaaS MVP.

---

# What I Would Improve Next

If given more time, I would improve:
- overlap detection intelligence
- organization-level analytics
- recurring monitoring
- automated pricing ingestion
- caching & scalability
- automated integration testing

I would also explore:
- historical spend tracking
- recommendation learning systems
- team-level optimization dashboards

---

# Founder Perspective

One thing I learned during this project is that:
```txt
Building products is not only about engineering.
```

It also requires:
- positioning
- trust
- UX thinking
- operational simplicity
- business reasoning

Features like:
- public reports
- email delivery
- shareable links
- landing copy

ended up being just as important as backend logic.

---

# Final Takeaway

The biggest insight from this project was:

```txt
The most valuable AI systems are often the ones that combine deterministic infrastructure with carefully constrained AI assistance.
```

Instead of replacing core logic with AI, the strongest architecture used:
- deterministic systems for correctness
- AI for readability and communication

That balance became the core philosophy of the entire platform.