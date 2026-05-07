export type BillingType = "seat" | "usage";

export type PricingConfidence =
  | "official"
  | "estimated"
  | "community";

export interface PricingSource {
  url: string;
  verifiedAt: string;
  confidence: PricingConfidence;
}

export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface ToolPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice?: number;
  billingType: BillingType;
  recommendedTeamSize?: {
    min: number;
    max: number;
  };
  recommendedUseCases: string[];
  features: PlanFeature[];
  source: PricingSource;
}

export interface VendorPricing {
  vendor: string;
  displayName: string;
  category: string;
  plans: ToolPlan[];
}