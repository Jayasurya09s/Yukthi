# Yukthi

## AI Infrastructure Spend Audit & Optimization Platform

**Live Demo :** https://yukthi-one.vercel.app/


Yukthi is a full-stack SaaS platform that helps startups and engineering teams analyze, optimize, and reduce unnecessary AI infrastructure spending across tools such as:

* ChatGPT
* Claude
* Cursor
* GitHub Copilot
* Gemini
* OpenAI API
* Anthropic API

The platform performs deterministic pricing analysis, detects inefficient subscriptions, identifies optimization opportunities, and generates concise AI-powered executive summaries.

---

# Product Vision
# Deployment & Configuration

## Dynamic URL Handling

The application uses environment variables for dynamic URL configuration:

### Development
```bash
npm run dev
# Uses: http://localhost:3000 (from .env.local)
```

### Production
```
Vercel deployment
# Uses: https://yukthi-one.vercel.app (from .env.production + Vercel Dashboard)
```

All internal links, shareable audit URLs, QR codes, and API endpoints automatically adapt to the deployment environment.

## Environment Variables

Required environment variables (set in `.env.local` for dev, Vercel Dashboard for production):

```
NEXT_PUBLIC_SUPABASE_URL=https://ktmvrllntfxccaegzdir.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
OPENROUTER_API_KEY=<your-api-key>
EMAIL_USER=<your-email>
EMAIL_PASS=<your-app-password>
NEXT_PUBLIC_APP_URL=http://localhost:3000  # For dev (production: https://yukthi-one.vercel.app)
```

## Testing Links

After deployment, these URLs are available:
- **Homepage:** https://yukthi-one.vercel.app/
- **Contact:** https://yukthi-one.vercel.app/contact
- **Privacy:** https://yukthi-one.vercel.app/privacy
- **Terms:** https://yukthi-one.vercel.app/terms
- **Shared Audits:** https://yukthi-one.vercel.app/api/share?id=<audit-id>

---

# Product Vision

Modern startups increasingly rely on multiple AI tools simultaneously.

As AI adoption grows:

* subscription overlap increases
* vendor pricing becomes fragmented
* API spend becomes harder to track
* operational inefficiencies compound quietly

Yukthi is designed to function as:

```txt id="p0jv4l"
a financially trustworthy AI spend optimization system
```

instead of:

```txt id="6zz7yt"
a generic AI dashboard
```

The platform prioritizes:

* deterministic audit logic
* explainable recommendations
* trustworthy financial outputs
* operational clarity

---

# Core Features

## Deterministic Audit Engine

The audit engine:

* analyzes AI tooling spend
* detects pricing inefficiencies
* identifies overlapping subscriptions
* generates optimization recommendations
* estimates monthly and annual savings

All financial calculations are deterministic and fully testable.

---

## AI Executive Summaries

OpenRouter-powered summaries provide:

* concise executive-style explanations
* optimization overviews
* readable recommendations

LLMs are intentionally NOT responsible for:

* pricing calculations
* savings estimation
* financial reasoning

---

## Public Shareable Reports

Users can:

* generate public audit URLs
* share optimization reports
* preview reports with Open Graph metadata
* distribute findings internally

Sensitive organizational data is excluded from public pages.

---

## Lead Capture Infrastructure

Includes:

* email collection workflows
* Supabase persistence
* Resend email delivery
* audit/report associations

---

## Analytics & Visualization

The frontend includes:

* savings dashboards
* optimization summaries
* spend comparison charts
* recommendation cards
* audit breakdown views

---

# Product Flow

```txt id="l8k9k7"
Landing Page
→ AI Spend Input Form
→ Deterministic Audit Engine
→ Optimization Analysis
→ AI Summary Generation
→ Results Dashboard
→ Lead Capture
→ Public Shareable Report
```

---

# Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Recharts

---

## Backend

* Next.js Route Handlers
* Modular audit engine architecture
* Zod validation
* OpenRouter integration

---

## Database

* Supabase PostgreSQL

---

## Infrastructure

* Vercel
* GitHub Actions
* Resend Email API

---

# Architecture Philosophy

The system intentionally separates:

* pricing intelligence
* deterministic calculations
* recommendation generation
* AI summarization

This architecture improves:

* financial trustworthiness
* reproducibility
* maintainability
* testing reliability

LLMs are treated as:

```txt id="u7q2yt"
a summarization layer
```

—not—

```txt id="ah4v9z"
the source of financial truth
```

---

# API Endpoints

## POST `/api/audit`

Runs deterministic AI infrastructure audits and generates optimization recommendations.

---

## POST `/api/summary`

Generates executive-style AI summaries using finalized audit outputs.

---

## POST `/api/leads`

Stores leads and triggers audit delivery workflows.

---

## GET `/api/share?id=`

Retrieves public audit reports for sharing and preview rendering.

---

# Local Development

## 1. Install Dependencies

```bash
npm install
```

---

## 2. Start Development Server

```bash
npm run dev
```

---

## 3. Production Build

```bash
npm run build
npm start
```

---

# Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

OPENROUTER_API_KEY=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

---

# Testing

The project includes:

* audit-engine tests
* API route testing
* public share route validation
* persistence testing
* email delivery verification

Additional testing documentation:

```txt id="4k5b6x"
TESTS.md
```

---

# Key Engineering Decisions

## 1. Deterministic Logic Over Full AI Automation

Financial calculations remain rule-based to prevent:

* hallucinated savings
* inconsistent recommendations
* non-reproducible audits

---

## 2. Lightweight Infrastructure

The stack intentionally prioritizes:

* fast iteration velocity
* low hosting costs
* operational simplicity
* scalable serverless deployment

---

## 3. Shareable Public Reports

Public reports improve:

* virality
* collaboration
* product discoverability

while remaining:

* opt-in
* sanitized
* privacy-aware

---

# Current Status

## Completed

* audit engine
* pricing intelligence layer
* optimization recommendation system
* OpenRouter integration
* Supabase persistence
* frontend dashboard
* public sharing infrastructure
* CI/CD setup
* documentation system

---

## Planned Improvements

* deeper overlap detection
* organization-level analytics
* recommendation confidence scoring
* caching infrastructure
* benchmarking systems
* advanced optimization heuristics

---

# Deployment

Recommended deployment platform:

```txt id="q4w2ls"
Vercel
```

The architecture is optimized for:

* serverless deployment
* low operational overhead
* rapid iteration

---

# Design Philosophy

The product experience was inspired by modern B2B SaaS products such as:

* Stripe
* Linear
* Ramp
* Vercel

The interface intentionally prioritizes:

* clarity
* operational trust
* readability
* actionable recommendations

over:

* excessive animations
* AI hype
* dashboard complexity

---

# Repository Documentation

Additional repository documentation:

* `ARCHITECTURE.md`
* `DEVLOG.md`
* `PROMPTS.md`
* `PRICING_DATA.md`
* `METRICS.md`
* `GTM.md`
* `ECONOMICS.md`
* `TESTS.md`
* `REFLECTION.md`

---

# Author

Built by Jayanth Midde as part of a production-oriented AI infrastructure optimization platform project.
