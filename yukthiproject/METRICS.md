# METRICS.md

# Measurement Strategy

## Overview

The audit product is not intended to maximize:

* page views
* session length
* daily active users

It is fundamentally a:

```txt id="d8d3bt"
B2B lead-generation and qualification product
```

The measurement strategy therefore focuses on:

* qualified operator engagement
* audit completion quality
* consultation intent
* monetized conversions

instead of consumer-style engagement metrics.

---

# North Star Metric

## Qualified Paid Conversions Per Month

Definition:

```txt id="7ecv2x"
Number of companies that generate revenue for Credex
after completing an audit
```

This includes:

* AI credit purchases
* infrastructure optimization engagements
* financing/origination events

---

# Why This Is The North Star

This metric directly connects:

* product usage
* user value
* business outcomes
* ARR growth

A large number of audits means very little if:

* nobody books consultations
* nobody converts into revenue
* recommendations are ignored

The product only succeeds if:

```txt id="kk8c9s"
audits lead to real operational decisions
```

and eventually:

```txt id="dr0i5f"
revenue-generating customer relationships
```

---

# Input Metrics

The North Star metric is driven by three primary funnel metrics.

---

# 1. Completed Audits Per Month

Definition:

```txt id="2s1zqk"
Number of users who fully complete the audit flow
```

Why it matters:

* measures top-of-funnel demand
* validates landing-page clarity
* validates onboarding simplicity

Low completion volume may indicate:

* weak positioning
* poor onboarding UX
* low perceived value

---

# 2. Audit → Consultation Booking Rate

Definition:

```txt id="gx74sd"
Percentage of completed audits
that result in a booked consultation
```

Why it matters:

* measures recommendation credibility
* measures user trust
* measures savings relevance

This is likely the most important early-stage product signal.

If users complete audits but do not book consultations, the product may:

* feel untrustworthy
* surface weak recommendations
* fail to demonstrate enough savings value

---

# 3. Consultation → Paid Conversion Rate

Definition:

```txt id="k79hqs"
Percentage of consultations
that convert into monetized outcomes
```

Examples:

* AI credit purchases
* infrastructure optimization engagements
* financing/origination events

Why it matters:

* validates lead quality
* validates business viability
* validates GTM assumptions

This metric determines whether the audit tool is economically sustainable.

---

# First Events To Instrument

The first implementation priority is lightweight event tracking around the core funnel.

---

# Audit Completed Event

Properties:

```txt id="epi7t2"
user_email
company_domain
company_size_bucket
estimated_monthly_savings
utm_source
timestamp
```

Purpose:

* source attribution
* cohort analysis
* funnel segmentation
* ICP validation

---

# Consultation Booked Event

Properties:

```txt id="07wuwq"
audit_id
booked_timestamp
estimated_savings
traffic_source
```

Purpose:

* conversion analysis
* recommendation effectiveness
* lead quality scoring

---

# Monetized Conversion Event

Properties:

```txt id="hzwbq6"
audit_id
revenue_type
deal_size
conversion_timestamp
```

Purpose:

* revenue attribution
* CAC analysis
* funnel economics

---

# Initial Dashboards

## Funnel Dashboard

Tracks:

```txt id="tx9exj"
Visitors
→ Audit Starts
→ Completed Audits
→ Consultations Booked
→ Paid Conversions
```

Segmented by:

* acquisition source
* company size
* estimated savings range

This helps identify:

* strongest traffic channels
* highest-converting ICPs
* weak funnel stages

---

# Source ROI Dashboard

Tracks:

* CAC by channel
* revenue by channel
* consultation quality
* payback efficiency

The goal is to identify:

```txt id="av26l2"
which acquisition channels produce
high-intent operators instead of low-quality traffic
```

---

# Metrics That Trigger A Pivot

The product should pivot if:

```txt id="nx3wn1"
Audit → Paid Conversion < 1%
after 3 months of stable traffic
```

AND:

```txt id="brs7qh"
CAC per audit exceeds expected revenue per audit
```

Why?

Because this would suggest:

* the savings recommendations are not compelling enough
* users do not perceive enough value
* the acquisition strategy is attracting low-intent users

---

# Likely Pivot Direction

If conversion quality is weak, the likely pivot would be:

```txt id="py5k1f"
from broad self-serve acquisition
toward higher-trust enterprise distribution
```

Potential examples:

* deeper Credex integration
* founder-led onboarding
* enterprise optimization workflows
* finance-team-focused consulting

---

# Additional Useful Metrics

## Public Share Rate

Definition:

```txt id="t7u2z0"
Percentage of audits that generate public share links
```

Why it matters:

* measures virality
* measures recommendation confidence
* measures share-worthiness

---

# Time-To-Complete Audit

Definition:

```txt id="by8a7s"
Median time required to complete a full audit
```

Why it matters:

* onboarding friction
* UX quality
* completion probability

Long completion times likely reduce funnel conversion.

---

# Repeat Audit Rate

Definition:

```txt id="z86z1k"
Percentage of users who run another audit within 90 days
```

Why it matters:

* ongoing operational value
* evolving spend needs
* retention potential

---

# Metrics Intentionally Avoided

The platform intentionally avoids optimizing for:

* raw page views
* vanity impressions
* social likes
* superficial engagement
* generic DAU growth

Those metrics are less meaningful for a product used:

* occasionally
* operationally
* during budgeting decisions

---

# Product Philosophy Behind The Metrics

The measurement philosophy is based on one core belief:

```txt id="m64ls2"
High-quality optimization insights
create more durable business value
than superficial AI engagement.
```

That belief influenced:

* the audit design
* the deterministic recommendation system
* the funnel strategy
* the GTM positioning
* the monetization model

The product succeeds when users:

* trust the recommendations
* take action on them
* save meaningful money
* associate Credex with operational value
