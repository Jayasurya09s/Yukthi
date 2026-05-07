import { pricingData } from "@/data/pricing-data";

export function getVendorPricing(vendor: string) {
  return pricingData.find((item) => item.vendor === vendor);
}

export function getPlanPricing(
  vendor: string,
  planId: string
) {
  const vendorPricing = getVendorPricing(vendor);

  if (!vendorPricing) return null;

  return vendorPricing.plans.find(
    (plan) => plan.id === planId
  );
}