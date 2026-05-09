# Testing Documentation

## Testing Strategy

The platform uses a layered testing strategy focused primarily on deterministic backend systems.

The highest priority areas for testing are:
- pricing intelligence
- optimization logic
- audit calculations
- API validation
- persistence workflows

---

# Current Backend Tests

## 1. Audit Engine Tests

File:
```txt
tests/audit-engine.test.ts
```

Covers:
- total monthly spend calculations
- annual savings calculations
- optimization recommendation generation
- team-plan downgrade detection
- optimized vs non-optimized audit states

---

## 2. Pricing Layer Tests

File:
```txt
tests/pricing.test.ts
```

Covers:
- pricing retrieval
- plan lookup logic
- vendor pricing resolution
- invalid plan handling



# tests
post http://localhost:3000/api/summary

{
  "totalMonthlySavings": 120,
  "recommendations": [
    {
      "tool": "Cursor",
      "reason": "Business plan unnecessary for small teams"
    }
  ]
}

{"success":true,"summary":"As an AI infrastructure cost optimization analyst, I have conducted a thorough audit of your current AI spending. The analysis reveals that your organization can optimize costs by reconsidering the business plan for your Cursor tool, which is unnecessary for small teams. This optimization opportunity can potentially result in estimated monthly savings of $120. By addressing these findings, your company can redirect resources towards more strategic initiatives while maintaining the efficiency and effectiveness of your AI infrastructure. I'm available to discuss these recommendations in more detail and provide further guidance on optimizing your AI spending."}



post http://localhost:3000/api/audit

{
  "teamSize": 2,
  "primaryUseCase": "coding",
  "tools": [
    {
      "vendor": "cursor",
      "planId": "business",
      "monthlySpend": 80,
      "seats": 2
    }
  ]
}

{"success":true,"audit":{"id":"3315c3a2-3956-4150-8d98-91f07616f65b","created_at":"2026-05-08T15:48:04.65708+00:00","team_size":2,"primary_use_case":"coding","total_monthly_spend":80,"total_monthly_savings":40,"total_annual_savings":480,"optimized":false,"recommendations":[{"tool":"cursor","reason":"Current plan exceeds recommended collaboration and seat requirements for your team size.","confidence":60,"currentPlan":"Business","annualSavings":480,"monthlySavings":40,"recommendedPlan":"Pro"}]},"result":{"totalMonthlySpend":80,"totalMonthlySavings":40,"totalAnnualSavings":480,"optimized":false,"recommendations":[{"tool":"cursor","currentPlan":"Business","recommendedPlan":"Pro","monthlySavings":40,"annualSavings":480,"confidence":60,"reason":"Current plan exceeds recommended collaboration and seat requirements for your team size."}]}}


## Lead API Testing

Endpoint:
```txt
POST /api/leads
```

Validated:
- lead persistence
- email workflow
- audit linkage
- Resend integration
- public report URL generation

---

## Public Share API Testing

Endpoint:
```txt
GET /api/share?id=
```

Validated:
- public audit retrieval
- shareable report rendering
- non-sensitive data exposure
- invalid audit handling

---

# Frontend Testing

## Landing Page Testing

Validated:
- responsive layout
- hero section rendering
- feature sections
- form rendering
- mobile responsiveness

---

## Spend Form Testing

Validated:
- dynamic tool addition
- React Hook Form integration
- Zod validation
- API submission flow
- loading states
- error handling

---

## Results Dashboard Testing

Validated:
- savings cards rendering
- optimization score generation
- chart rendering
- recommendation cards
- AI summary rendering
- responsive dashboard layout

---

## Public Audit Page Testing

Validated:
- dynamic route rendering
- share functionality
- copy-link flow
- OpenGraph metadata generation
- mobile rendering

---

# Email Workflow Testing

Validated:
- Resend integration
- email delivery
- shareable audit links
- domain verification flow
- production sender configuration

Production sender:
```txt
noreply@yukti.ai
```

---

# Database Testing

## Supabase Validation

Validated:
- audit persistence
- lead persistence
- relational linkage
- public retrieval queries

Tables tested:
- audits
- leads

---

# CI/CD Testing

GitHub Actions pipeline validates:
- dependency installation
- linting
- production builds

Workflow file:
```txt
.github/workflows/ci.yml
```

---

# Manual Testing Workflow

Complete product lifecycle tested:

```txt
Landing Page
→ Submit AI Spend Form
→ Generate Audit
→ AI Summary Generation
→ Results Dashboard
→ Lead Capture
→ Email Delivery
→ Public Share Page
→ Share Link Copy
```

---

# Lighthouse Testing

Validated:
- accessibility
- SEO metadata
- responsiveness
- best practices

Areas improved:
- semantic structure
- loading states
- responsive layouts
- OpenGraph metadata

---

# Major Bugs Encountered

## 1. AI Hallucinated Savings Values
Issue:
- LLM generated incorrect savings numbers.

Fix:
- added deterministic isolation
- strengthened prompt constraints
- separated financial calculations from AI summarization

---

## 2. Resend Sandbox Restrictions
Issue:
- test emails restricted to account owner email.

Fix:
- verified production domain
- configured custom sender:
```txt
noreply@yukti.ai
```

---

## 3. Client/Server Rendering Boundaries
Issue:
- browser APIs used inside server-rendered routes.

Fix:
- isolated clipboard/share functionality into client components

---

# Current Testing Status

## Completed
- backend testing
- frontend testing
- integration testing
- persistence testing
- email testing
- public-share testing

## Planned Future Testing
- automated integration tests
- stress testing
- caching validation
- recommendation edge-case testing
- concurrent audit generation testing