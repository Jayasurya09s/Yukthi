# Yukthi

Yukthi is a SaaS-style web platform that helps startups and engineering teams analyze, optimize, and reduce unnecessary AI tooling expenses across platforms like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and others.

The platform performs deterministic financial analysis on AI subscriptions, detects inefficient pricing plans, identifies overlapping tool usage, and generates actionable optimization recommendations with estimated monthly and annual savings.

## Core Features

- AI tool spend analysis
- Pricing intelligence engine
- Optimization recommendation system
- AI-generated personalized summaries
- Public shareable audit reports
- Lead capture system for high-savings users
- Realtime-ready pricing architecture
- Deterministic audit calculations

## Tech Stack

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend
- Next.js Route Handlers
- Modular audit engine architecture

### Database
- Supabase

### AI Integration
- OpenRouter API

### Deployment
- Vercel

## Current Progress

- Project architecture initialized
- Modular backend structure completed
- Pricing intelligence layer implemented
- Recommendation engine foundation completed
- Optimization engine initialized

## Planned Features

- Public audit result pages
- OpenGraph share previews
- Personalized AI summaries
- Email lead capture
- Benchmark analysis
- Savings visualizations
- Realtime pricing verification

## Local Setup

```bash
npm install
npm run dev

## Backend Progress

The backend architecture currently includes:
- modular audit orchestration
- pricing intelligence services
- optimization engine
- recommendation scoring
- OpenRouter-based AI summaries
- Supabase persistence layer
- public audit retrieval APIs

Current API endpoints:
- POST /api/audit
- POST /api/summary
- GET /api/share