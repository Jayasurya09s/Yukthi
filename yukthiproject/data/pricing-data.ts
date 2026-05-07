import { VendorPricing } from "@/lib/pricing/pricing-types";

export const pricingData: VendorPricing[] = [
  {
    vendor: "chatgpt",
    displayName: "ChatGPT",
    category: "assistant",
    plans: [
      {
        id: "plus",
        name: "Plus",
        monthlyPrice: 20,
        billingType: "seat",
        recommendedTeamSize: {
          min: 1,
          max: 3,
        },
        recommendedUseCases: [
          "writing",
          "research",
          "mixed",
        ],
        features: [
          {
            name: "GPT-4 access",
            included: true,
          },
        ],
        source: {
          url: "https://openai.com/chatgpt/pricing",
          verifiedAt: "2026-05-08",
          confidence: "official",
        },
      },

      {
        id: "team",
        name: "Team",
        monthlyPrice: 30,
        billingType: "seat",
        recommendedTeamSize: {
          min: 4,
          max: 50,
        },
        recommendedUseCases: [
          "coding",
          "mixed",
        ],
        features: [
          {
            name: "Shared workspace",
            included: true,
          },
        ],
        source: {
          url: "https://openai.com/chatgpt/pricing",
          verifiedAt: "2026-05-08",
          confidence: "official",
        },
      },
    ],
  },

  {
    vendor: "cursor",
    displayName: "Cursor",
    category: "coding",
    plans: [
      {
        id: "pro",
        name: "Pro",
        monthlyPrice: 20,
        billingType: "seat",
        recommendedTeamSize: {
          min: 1,
          max: 5,
        },
        recommendedUseCases: ["coding"],
        features: [
          {
            name: "Fast AI completions",
            included: true,
          },
        ],
        source: {
          url: "https://cursor.com/pricing",
          verifiedAt: "2026-05-08",
          confidence: "official",
        },
      },

      {
        id: "business",
        name: "Business",
        monthlyPrice: 40,
        billingType: "seat",
        recommendedTeamSize: {
          min: 6,
          max: 100,
        },
        recommendedUseCases: ["coding"],
        features: [
          {
            name: "Centralized billing",
            included: true,
          },
        ],
        source: {
          url: "https://cursor.com/pricing",
          verifiedAt: "2026-05-08",
          confidence: "official",
        },
      },
    ],
  },
];