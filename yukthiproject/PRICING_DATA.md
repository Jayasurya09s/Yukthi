# PRICING_DATA.md

# Pricing Sources

## Overview

All pricing values used by the audit engine are sourced from official vendor pricing pages and manually verified during development.

The audit engine references pricing data stored in:

```txt id="zq0kw9"
data/pricing-data.ts
```

Each pricing entry includes:

* source URL
* verification date
* normalized pricing structure

The goal of this document is to ensure:

* pricing transparency
* audit reproducibility
* deterministic recommendation logic

---

# ChatGPT (OpenAI)

Source:

```txt id="lvqzy4"
https://openai.com/chatgpt/pricing
```

Verified:

```txt id="1tjlwm"
2026-05-08
```

Plans:

* Plus — $20/month
* Team — $30/user/month
* Enterprise — custom pricing

---

# OpenAI API

Source:

```txt id="qg06hk"
https://platform.openai.com/pricing
```

Verified:

```txt id="6qgjsj"
2026-05-08
```

Notes:

* Pricing varies by model and token usage.
* The audit engine currently uses simplified API-spend assumptions instead of exact token forecasting.

---

# Cursor

Source:

```txt id="hs6krv"
https://cursor.com/pricing
```

Verified:

```txt id="0h4sfr"
2026-05-08
```

Plans:

* Hobby — free
* Pro — $20/user/month
* Business — $40/user/month
* Enterprise — custom pricing

---

# GitHub Copilot

Source:

```txt id="mwb8qv"
https://github.com/features/copilot
```

Verified:

```txt id="tygbvs"
2026-05-08
```

Plans:

* Individual — $10/month
* Business — $19/user/month
* Enterprise — $39/user/month

---

# Claude (Anthropic)

Source:

```txt id="o6d8d2"
https://www.anthropic.com/pricing
```

Verified:

```txt id="xjlwm7"
2026-05-08
```

Plans:

* Free — free
* Pro — $20/month
* Max — custom pricing
* Team — $30/user/month
* Enterprise — custom pricing

---

# Anthropic API

Source:

```txt id="5q2f84"
https://www.anthropic.com/pricing
```

Verified:

```txt id="qjlwm1"
2026-05-08
```

Notes:

* Pricing varies by model and token usage.
* The audit engine uses simplified assumptions for API-cost comparisons.

---

# Gemini (Google)

Sources:

```txt id="98v1xl"
https://ai.google.dev/pricing
```

```txt id="gprx0q"
https://cloud.google.com/vertex-ai/generative-ai/pricing
```

Verified:

```txt id="hwn2v8"
2026-05-08
```

Plans:

* Gemini Advanced — approximately $20/month
* API pricing — usage based
* Enterprise pricing — custom

---

# Windsurf

Source:

```txt id="rb85ll"
https://windsurf.com/pricing
```

Verified:

```txt id="zjlwm4"
2026-05-08
```

Plans:

* Free — free
* Pro — approximately $15/month
* Team — custom pricing

---

# Pricing Normalization Notes

Different vendors structure pricing differently:

* seat-based pricing
* token-based API pricing
* organization licensing
* usage-based billing

To keep recommendations deterministic, the audit engine normalizes pricing into comparable monthly estimates wherever possible.

Examples:

* API pricing may be approximated into monthly spend bands
* enterprise pricing is treated as “custom pricing”
* missing public pricing defaults to manual review recommendations

---

# Important Architectural Decision

The audit engine intentionally does NOT:

* scrape live vendor pricing
* dynamically ingest pricing APIs
* rely on real-time pricing updates

Reasons:

* deterministic audits
* reproducible testing
* lower infrastructure complexity
* reduced external dependencies

Pricing updates are instead:

```txt id="ll1kql"
manually verified and version-controlled
```

which improves:

* audit consistency
* recommendation reliability
* debugging simplicity

---

# Future Improvements

Potential future additions:

* automated pricing refresh jobs
* historical pricing comparisons
* vendor pricing change alerts
* token-usage forecasting models
* pricing confidence scores

---

# Core Pricing Philosophy

One important realization during development was:

```txt id="xoq6jv"
Trustworthy optimization recommendations
matter more than perfect real-time pricing precision.
```

The audit tool is designed to provide:

* operational guidance
* pricing visibility
* optimization direction

rather than functioning as:

* a live procurement engine
* a billing platform
* a real-time finance system
