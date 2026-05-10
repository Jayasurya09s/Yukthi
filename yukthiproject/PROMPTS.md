# PROMPTS.md

# Prompt Engineering Strategy

## Overview

The platform intentionally limits LLM responsibilities to:

* executive-style summarization
* readability improvements
* recommendation explanation formatting

LLMs are NOT responsible for:

* pricing calculations
* savings estimation
* recommendation generation
* financial decision-making

All financial logic remains deterministic and fully testable.

This architecture was intentionally designed to reduce:

* hallucinated outputs
* inconsistent recommendations
* trust issues
* non-reproducible audits

---

# Core Architectural Principle

The most important prompt-engineering decision was:

```txt id="u0x9pr"
AI enhances deterministic systems.
It does not replace critical financial logic.
```

The audit engine:

* calculates savings
* determines recommendations
* evaluates pricing

The LLM only transforms finalized outputs into:

* concise summaries
* executive-friendly explanations
* readable recommendations

---

# Current LLM Provider

## OpenRouter

Used for:

* summary generation
* lightweight explanation formatting

Compatible models tested:

* Claude-family models
* GPT-compatible models

---

# Primary Production Prompt

The following prompt is used inside:

```txt id="0m7kqp"
lib/ai/prompts.ts
```

Function:

```txt id="o7j5w4"
buildAuditSummaryPrompt()
```

---

# Current Prompt

```txt
You are an AI infrastructure cost optimization analyst.

Generate a concise professional audit summary.

STRICT RULES:
- Use ONLY the exact savings numbers provided.
- Do NOT invent or estimate new numbers.
- Do NOT hallucinate pricing.
- Keep response under 100 words.
- Mention optimization opportunities clearly.
- Maintain executive-report tone.

Audit Data:
{...}
```

---

# Why This Prompt Structure Was Chosen

The prompt intentionally:

* constrains creativity
* minimizes hallucinations
* limits verbosity
* enforces professional tone

The LLM is treated as:

```txt id="0d7dzk"
a formatting and summarization layer
```

—not—

```txt id="1mjlwm"
a financial reasoning engine
```

This separation significantly improves:

* consistency
* reproducibility
* trustworthiness

---

# Prompt Inputs

The model receives:

* deterministic audit outputs
* finalized recommendation objects
* exact savings calculations
* structured optimization metadata

Example payload:

```json
{
  "totalMonthlySavings": 40,
  "totalAnnualSavings": 480,
  "recommendations": [
    {
      "tool": "Cursor",
      "recommendedPlan": "Pro"
    }
  ]
}
```

The model never receives:

* raw pricing logic
* pricing calculations
* optimization heuristics
* authority to modify savings numbers

---

# Early Problems Encountered

## 1. Hallucinated Savings Values

During early testing:

* the model occasionally rewrote savings values
* recommendation wording became inconsistent
* summaries drifted from deterministic calculations

Example issue:

```txt id="0l5d1y"
Audit engine returned:
$40/month savings

LLM summary returned:
approximately $120/month savings
```

This immediately reduced:

* trustworthiness
* audit reliability
* financial consistency

---

# 2. Overly Verbose Summaries

Initial prompts produced:

* marketing-style language
* unnecessary optimism
* long multi-paragraph outputs

This conflicted with the intended:

* executive-report tone
* operational clarity
* financially grounded positioning

---

# Safeguards Added

## 1. Explicit Numerical Constraints

The prompt explicitly prohibits:

* inventing values
* estimating numbers
* changing savings calculations

---

## 2. Deterministic Isolation

All calculations occur BEFORE the LLM step.

The model only receives finalized outputs.

---

## 3. Structured Prompt Inputs

The prompt consumes structured JSON-like payloads instead of unstructured prose.

This reduced:

* ambiguity
* hallucinations
* formatting drift

---

## 4. Short Output Constraints

The summary is intentionally limited to:

```txt id="k7x5nq"
under 100 words
```

This improves:

* readability
* consistency
* executive usability

---

## 5. Graceful Fallbacks

If the LLM provider fails:

* deterministic audit results still render
* fallback summaries are generated
* the audit experience remains functional

This prevents:

* broken user flows
* empty reports
* dependency lockups

---

# Prompt Design Goals

The prompts aim to generate:

* concise executive summaries
* trustworthy language
* financially grounded wording
* readable optimization insights
* operationally useful recommendations

The prompts intentionally avoid:

* hype-heavy language
* exaggerated ROI claims
* aggressive sales tone
* speculative recommendations

---

# Future Prompt Improvements

Potential future additions:

* executive vs technical summary modes
* multilingual summaries
* organization-specific narratives
* optimization-priority explanations
* benchmark-aware summaries
* confidence-scored recommendation wording

---

# Biggest Prompt Engineering Insight

The most important realization during development was:

```txt id="l1nq5j"
The value of the product does not come from AI-generated prose.

It comes from deterministic recommendations
that users can actually trust.
```

That insight shaped:

* the architecture
* the audit-engine boundaries
* the recommendation system
* the summary generation flow
* the overall product positioning

---

# Final Philosophy

The strongest results came from combining:

* deterministic pricing systems
* rule-based recommendations
* constrained AI summarization

instead of relying on:

```txt id="2y7nzs"
fully autonomous AI-generated financial analysis
```

The platform intentionally treats AI as:

* an enhancement layer
* not the source of financial truth.
