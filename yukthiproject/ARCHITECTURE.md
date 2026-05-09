# System Architecture

## Overview

AI Spend Audit is a modular full-stack SaaS platform designed to analyze and optimize AI infrastructure spending across modern AI tooling ecosystems.

The architecture intentionally separates:
- deterministic financial logic
- pricing intelligence
- recommendation systems
- AI-generated summarization
- persistence workflows
- public-share infrastructure

This separation improves:
- reliability
- scalability
- financial trustworthiness
- maintainability

---

# High-Level Architecture

```txt
Frontend UI
    ↓
Audit Form System
    ↓
API Layer
    ↓
Validation Layer
    ↓
Audit Engine
    ↓
Pricing Intelligence
    ↓
Recommendation Engine
    ↓
Persistence Layer
    ↓
AI Summary Layer
    ↓
Public Share System
```

---

# Frontend Architecture

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- Framer Motion

---

## Frontend Responsibilities

The frontend layer handles:
- user interaction
- dynamic spend forms
- dashboard rendering
- charts & analytics
- public share pages
- lead capture workflows

---

## UI Flow

```txt
Landing Page
→ Spend Form
→ Audit Submission
→ Loading State
→ Results Dashboard
→ Lead Capture
→ Public Share Page
```

---

## State Management

Current state handling:
- React Hook Form
- localStorage persistence
- route-based rendering

Potential future improvements:
- Zustand
- React Query
- optimistic updates

---

# Backend Architecture

## Stack
- Next.js Route Handlers
- TypeScript
- Zod validation
- OpenRouter integration

---

## API Layer

### POST `/api/audit`

Responsibilities:
- validate payloads
- orchestrate audit engine
- calculate savings
- persist audits
- return structured audit results

---

### POST `/api/summary`

Responsibilities:
- generate AI-powered executive summaries
- consume deterministic audit outputs
- gracefully fallback during LLM failures

---

### POST `/api/leads`

Responsibilities:
- persist lead data
- connect audits to leads
- generate public report URLs
- trigger email delivery

---

### GET `/api/share?id=`

Responsibilities:
- retrieve public audit reports
- expose non-sensitive audit data
- support shareable report rendering

---

# Validation Layer

Validation uses:
- Zod schemas
- typed payload parsing
- structured request constraints

This improves:
- API reliability
- input safety
- predictable orchestration

---

# Audit Engine Architecture

## Core Principle

The audit engine is intentionally deterministic.

LLMs are NOT responsible for:
- pricing calculations
- savings generation
- optimization logic
- recommendation scoring

This prevents:
- hallucinated financial outputs
- inconsistent calculations
- non-reproducible recommendations

---

## Audit Engine Flow

```txt
Input Payload
→ Pricing Lookup
→ Plan Analysis
→ Recommendation Generation
→ Savings Calculation
→ Confidence Scoring
→ Structured Output
```

---

# Pricing Intelligence Layer

## Responsibilities

The pricing layer handles:
- vendor pricing normalization
- plan resolution
- spend comparison
- recommendation baselines

---

## Current Supported Vendors

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini

---

## Future Improvements

Potential additions:
- real-time vendor pricing ingestion
- API-based pricing sync
- historical pricing analytics

---

# Recommendation Engine

The recommendation engine analyzes:
- team size
- pricing inefficiencies
- unnecessary enterprise plans
- subscription mismatches

Outputs:
- recommended plans
- savings estimates
- confidence scores
- reasoning explanations

---

# AI Summary Layer

## OpenRouter Integration

The system uses OpenRouter for:
- executive-style summaries
- human-readable optimization explanations

---

## Important Architectural Constraint

AI-generated summaries are isolated from:
- financial calculations
- pricing intelligence
- deterministic recommendation logic

This architecture ensures:
- financial consistency
- safer AI integration
- deterministic outputs

---

# Database Architecture

## Stack
- Supabase PostgreSQL

---

## Current Tables

### audits

Stores:
- audit results
- savings calculations
- recommendations
- optimization metadata

---

### leads

Stores:
- email captures
- company metadata
- audit associations

---

# Persistence Flow

```txt
Audit Generated
→ Persist Audit
→ Generate Public ID
→ Capture Lead
→ Associate Lead with Audit
→ Send Email
```

---

# Public Share Infrastructure

## Dynamic Public Reports

Routes:
```txt
/audit/[id]
```

Public pages expose:
- recommendations
- charts
- savings analytics

Sensitive data intentionally excluded:
- email addresses
- company metadata

---

# Email Infrastructure

## Stack
- Resend

Production sender:
```txt
noreply@yukti.ai
```

Responsibilities:
- audit delivery
- public-share links
- lead confirmation

---

# CI/CD Architecture

## GitHub Actions

Pipeline validates:
- dependency installation
- linting
- production builds

Future additions:
- automated testing
- preview deployments
- Lighthouse validation

---

# Scalability Considerations

Potential future improvements:
- caching layer
- queue-based email processing
- async audit generation
- recommendation learning systems
- organization-level analytics

---

# Security Considerations

Current safeguards:
- validation layer
- typed payloads
- deterministic financial calculations
- restricted public exposure
- environment variable isolation

---

# Design Philosophy

The platform prioritizes:
- deterministic correctness
- modular architecture
- financial trustworthiness
- modern SaaS UX
- production-oriented engineering