# Prompt Engineering

## Philosophy

The platform intentionally limits LLM responsibilities to:
- summarization
- readability
- executive-style communication

LLMs are NOT used for:
- pricing calculations
- savings estimation
- recommendation generation
- financial decision making

This architecture prevents hallucinated financial outputs and improves deterministic reliability.

---

# Why Deterministic Financial Logic Matters

Financial recommendation systems require:
- reproducibility
- numerical correctness
- consistency
- auditability

Purely AI-generated financial recommendations can:
- hallucinate values
- generate inconsistent outputs
- reduce user trust

To avoid this:
- all calculations are deterministic
- AI only consumes finalized audit outputs

---

# Current LLM Usage

## OpenRouter

The system uses:
- OpenRouter
- Claude / GPT-compatible models

Purpose:
- executive summary generation
- readable audit explanations

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
```

---

# Prompt Inputs

The model receives:
- deterministic audit outputs
- recommendation data
- savings calculations
- optimization metadata

Example payload:

```json
{
  "totalMonthlySavings": 40,
  "totalAnnualSavings": 480,
  "recommendations": [
    {
      "tool": "cursor",
      "recommendedPlan": "Pro"
    }
  ]
}
```

---

# Initial Problems Encountered

## Hallucinated Savings Values

During early testing:
- the model generated incorrect savings estimates
- summary outputs differed from deterministic audit calculations

Example issue:
- audit engine returned `$40/month`
- LLM hallucinated `$120/month`

This created:
- trust issues
- financial inconsistency
- unreliable summaries

---

# Solution

The following safeguards were added:

## 1. Deterministic Isolation
AI never calculates financial outputs.

---

## 2. Explicit Constraints
Prompts explicitly prohibit:
- inventing numbers
- estimating values
- changing savings calculations

---

## 3. Structured Inputs
The LLM only receives finalized deterministic outputs.

---

## 4. Graceful Fallbacks
If OpenRouter fails:
- deterministic audit results still render successfully
- fallback summaries are returned

---

# Prompt Design Goals

The prompts aim to produce:
- concise executive summaries
- professional tone
- trustworthy explanations
- consistent outputs
- readable recommendations

---

# Future Prompt Improvements

Potential future additions:
- organization-specific summaries
- technical vs executive summary modes
- multilingual summaries
- optimization-priority scoring explanations
- adaptive recommendation narratives

---

# Architectural Insight

One of the biggest lessons from building this platform was realizing that:
- AI should enhance deterministic systems
- not replace critical financial logic

The strongest architecture combined:
- deterministic pricing intelligence
- structured recommendation systems
- constrained AI summarization

rather than fully AI-generated analysis.