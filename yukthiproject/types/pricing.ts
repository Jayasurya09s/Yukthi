export type AIUseCase =
  | "coding"
  | "writing"
  | "research"
  | "data"
  | "mixed";

export type ToolVendor =
  | "cursor"
  | "chatgpt"
  | "claude"
  | "copilot"
  | "gemini"
  | "openai-api"
  | "anthropic-api"
  | "windsurf";

export interface ToolPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice?: number;
  perSeat: boolean;
  features: string[];
  recommendedFor: AIUseCase[];
}

export interface ToolPricing {
  vendor: ToolVendor;
  displayName: string;
  plans: ToolPlan[];
}