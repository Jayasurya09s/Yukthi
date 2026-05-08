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

---

## 3. Recommendation Tests

File:
```txt
tests/recommendations.test.ts
```

Covers:
- recommendation generation
- confidence scoring
- optimization selection
- savings estimation logic

---

## 4. Validation Tests

File:
```txt
tests/validations.test.ts
```

Covers:
- invalid payload rejection
- malformed tool validation
- invalid team sizes
- invalid pricing values

---

## 5. API Tests

File:
```txt
tests/api.test.ts
```

Covers:
- audit API responses
- summary API responses
- share endpoint retrieval
- Supabase persistence flow

---

# Manual API Testing

The APIs were manually tested using:
- Postman

Tested endpoints:
- POST /api/audit
- POST /api/summary
- GET /api/share

---

# Current Testing Focus

Current testing efforts prioritize:
- deterministic backend correctness
- recommendation reliability
- financial calculation accuracy

Frontend integration tests will be added after the UI layer is completed.

---

# Planned Improvements

Planned future testing additions:
- integration tests
- edge-case recommendation testing
- load testing for audit generation
- caching validation
- public-share route security testing


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