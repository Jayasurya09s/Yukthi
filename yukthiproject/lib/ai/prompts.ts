export function buildAuditSummaryPrompt(
  auditData: any
) {
  return `
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
${JSON.stringify(auditData, null, 2)}
`;
}