import { AIUseCase, ToolVendor } from "./pricing";

export interface AuditToolInput {
  vendor: ToolVendor;
  planId: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditInput {
  tools: AuditToolInput[];
  teamSize: number;
  primaryUseCase: AIUseCase;
}

export interface AuditRecommendation {
  tool: string;
  currentPlan: string;
  recommendedPlan: string;
  monthlySavings: number;
  annualSavings: number;
  reason: string;
}

export interface AuditResult {
  totalMonthlySpend: number;
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  recommendations: AuditRecommendation[];
  optimized: boolean;
}