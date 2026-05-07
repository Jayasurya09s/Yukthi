import { AuditInput } from "@/types/audit";

import { getPlanPricing } from "@/lib/pricing/pricing-service";

import { suggestBetterPlan } from "@/lib/optimizer/plan-optimizer";

import { calculateConfidenceScore } from "@/lib/scoring/confidence-score";

export async function runAudit(
  input: AuditInput
) {
  let totalMonthlySpend = 0;
  let totalMonthlySavings = 0;

  const recommendations = [];

  for (const tool of input.tools) {
    totalMonthlySpend += tool.monthlySpend;

    const currentPlan = getPlanPricing(
      tool.vendor,
      tool.planId
    );

    if (!currentPlan) continue;

    const optimizedPlan = suggestBetterPlan(
      tool.vendor,
      tool.seats
    );

    if (!optimizedPlan) continue;

    if (optimizedPlan.id !== currentPlan.id) {
      const savings =
        (currentPlan.monthlyPrice -
          optimizedPlan.monthlyPrice) *
        tool.seats;

      totalMonthlySavings += savings;

      recommendations.push({
        tool: tool.vendor,
        currentPlan: currentPlan.name,
        recommendedPlan: optimizedPlan.name,
        monthlySavings: savings,
        annualSavings: savings * 12,

        confidence:
          calculateConfidenceScore(savings),

        reason:
          "Current plan exceeds recommended collaboration and seat requirements for your team size.",
      });
    }
  }

  return {
    totalMonthlySpend,
    totalMonthlySavings,
    totalAnnualSavings:
      totalMonthlySavings * 12,

    optimized:
      totalMonthlySavings <= 0,

    recommendations,
  };
}