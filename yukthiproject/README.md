# Yukthi

Yukthi is a full-stack SaaS platform that helps startups and engineering teams analyze, optimize, and reduce unnecessary AI infrastructure spending across tools like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and other AI platforms.

The platform performs deterministic pricing analysis, identifies inefficient subscriptions, detects optimization opportunities, and generates AI-powered executive summaries with estimated savings recommendations.

---

# Live Product Vision

The platform is designed as an AI infrastructure optimization system rather than a simple pricing calculator.

Users can:
- analyze AI tooling spend
- identify inefficient pricing plans
- detect overlapping subscriptions
- generate optimization recommendations
- save and share audit reports
- receive AI-generated executive summaries

---

# Core Features

## Yukthi Engine
- deterministic pricing analysis
- optimization recommendation engine
- savings calculation system
- subscription efficiency analysis

## Pricing Intelligence Layer
- normalized vendor pricing architecture
- centralized pricing data services
- structured plan comparison logic

## AI Summary System
- OpenRouter-powered executive summaries
- deterministic financial isolation
- hallucination-safe prompt engineering

## Public Shareable Reports
- dynamic public audit URLs
- OpenGraph metadata
- social sharing support

## Lead Capture Infrastructure
- email collection workflow
- Supabase persistence
- Resend email integration

## Analytics & Visualization
- savings dashboards
- optimization scoring
- spend comparison charts
- recommendation cards

---

# Tech Stack

## Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- Framer Motion

## Backend
- Next.js Route Handlers
- Modular audit engine architecture
- Zod validation
- OpenRouter integration

## Database
- Supabase

## Email Infrastructure
- Resend

## Deployment
- Vercel

---

# Architecture Highlights

The system intentionally separates:
- pricing intelligence
- recommendation generation
- deterministic calculations
- AI summarization

LLMs are NOT used for:
- pricing calculations
- savings estimation
- recommendation generation

This architecture improves:
- reliability
- reproducibility
- financial trustworthiness

---

# Product Flow

```txt
Landing Page
→ AI Spend Form
→ Audit Engine
→ Optimization Analysis
→ AI Summary Generation
→ Results Dashboard
→ Lead Capture
→ Public Shareable Report
```

---

# API Endpoints

## POST `/api/audit`
Generates AI infrastructure optimization audits.

## POST `/api/summary`
Generates executive-style AI summaries.

## POST `/api/leads`
Stores leads and sends audit emails.

## GET `/api/share?id=`
Retrieves public audit reports.

---

# Local Development

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
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
- API testing
- frontend flow testing
- persistence validation
- email delivery testing
- public share route testing

Detailed testing documentation:
```txt
TESTS.md
```

---

# Current Status

## Completed
- architecture design
- pricing intelligence layer
- optimization engine
- backend APIs
- OpenRouter integration
- Supabase persistence
- frontend dashboard
- charts & visualizations
- lead capture
- public sharing system
- CI/CD setup

## Planned Improvements
- stronger overlap detection
- advanced optimization heuristics
- recommendation learning systems
- organization-level analytics
- caching & scalability improvements

---

# Design Philosophy

The platform prioritizes:
- deterministic financial analysis
- trustworthy recommendations
- modern SaaS UX
- modular architecture
- scalable infrastructure

---

# Author

Built by Jayanth Midde as part of a production-style AI infrastructure optimization platform project.