# System Architecture

## High-Level Architecture

```mermaid
flowchart TD

A[User Input Form]
--> B[Validation Layer]

B --> C[Normalization Layer]

C --> D[Pricing Intelligence Layer]

D --> E[Usage Analysis Engine]

E --> F[Optimization Engine]

F --> G[Recommendation Scoring Engine]

G --> H[Savings Calculator]

H --> I[AI Summary Generator]

I --> J[Result Formatter]

J --> K[Persistence Layer]

K --> L[Public Share Layer]

# API Layer

## Audit API

Endpoint:
```txt
POST /api/audit
```

Responsibilities:
- validate audit payloads
- orchestrate optimization engine
- calculate savings
- persist audit results
- return structured audit response

---

## Summary API

Endpoint:
```txt
POST /api/summary
```

Responsibilities:
- generate AI-powered executive summaries
- consume deterministic audit outputs
- gracefully fallback during model/API failures

---

## Share API

Endpoint:
```txt
GET /api/share?id=
```

Responsibilities:
- retrieve public audit reports
- expose non-sensitive optimization data
- support shareable result pages

---

# Persistence Layer

Supabase currently stores:
- audit results
- optimization recommendations
- lead captures
- shareable report metadata

Audit reports are persisted immediately after generation to support public shareability and future analytics.