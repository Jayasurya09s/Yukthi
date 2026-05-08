# Prompt Engineering

## Audit Summary Prompt

The platform uses LLMs only for natural-language summarization of deterministic audit results.

LLMs are intentionally NOT used for:
- financial calculations
- pricing comparisons
- savings estimation
- recommendation generation

This decision improves:
- audit reliability
- deterministic outputs
- reproducibility
- financial trustworthiness

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

# Why This Prompt Structure

The prompt is intentionally constrained because financial recommendation systems are highly sensitive to hallucinated values.

The model is only responsible for:
- summarization
- readability
- executive-style communication

All calculations originate from the deterministic audit engine.

---

# Initial Problems Encountered

During early testing, the model hallucinated incorrect savings values that differed from the audit engine outputs.

To address this:
- stricter constraints were added
- explicit anti-hallucination instructions were introduced
- deterministic pricing calculations remained isolated from the LLM layer

This separation significantly improved consistency and reliability.