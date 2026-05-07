import { getVendorPricing } from "@/lib/pricing/pricing-service";

export function suggestBetterPlan(
  vendor: string,
  seats: number
) {
  const pricing = getVendorPricing(vendor);

  if (!pricing) return null;

  for (const plan of pricing.plans) {
    const min =
      plan.recommendedTeamSize?.min ?? 1;

    const max =
      plan.recommendedTeamSize?.max ?? 999;

    if (seats >= min && seats <= max) {
      return plan;
    }
  }

  return null;
}