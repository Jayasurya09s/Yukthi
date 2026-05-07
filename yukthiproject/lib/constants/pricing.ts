import { ToolPricing } from "@/types/pricing";

export const PRICING_DATA: ToolPricing[] = [
  {
    vendor: "chatgpt",
    displayName: "ChatGPT",
    plans: [
      {
        id: "plus",
        name: "Plus",
        monthlyPrice: 20,
        perSeat: true,
        features: ["GPT-4 access"],
        recommendedFor: ["writing", "research", "mixed"],
      },
      {
        id: "team",
        name: "Team",
        monthlyPrice: 30,
        perSeat: true,
        features: ["Team workspace"],
        recommendedFor: ["coding", "mixed"],
      },
    ],
  },

  {
    vendor: "cursor",
    displayName: "Cursor",
    plans: [
      {
        id: "pro",
        name: "Pro",
        monthlyPrice: 20,
        perSeat: true,
        features: ["Fast completions"],
        recommendedFor: ["coding"],
      },
      {
        id: "business",
        name: "Business",
        monthlyPrice: 40,
        perSeat: true,
        features: ["Team billing"],
        recommendedFor: ["coding"],
      },
    ],
  },

  {
    vendor: "claude",
    displayName: "Claude",
    plans: [
      {
        id: "pro",
        name: "Pro",
        monthlyPrice: 20,
        perSeat: true,
        features: ["Claude access"],
        recommendedFor: ["writing", "research"],
      },
      {
        id: "team",
        name: "Team",
        monthlyPrice: 30,
        perSeat: true,
        features: ["Team collaboration"],
        recommendedFor: ["mixed"],
      },
    ],
  },
];