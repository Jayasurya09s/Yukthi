interface RecommendationCardProps {
  tool: string;
  currentPlan: string;
  recommendedPlan: string;
  monthlySavings: number;
  annualSavings: number;
  confidence: number;
  reason: string;
}

export default function RecommendationCard({
  tool,
  currentPlan,
  recommendedPlan,
  monthlySavings,
  annualSavings,
  confidence,
  reason,
}: RecommendationCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-400">
            {tool}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            {currentPlan} → {recommendedPlan}
          </h3>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          {confidence}% confidence
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-black/30 p-5">
          <p className="text-sm text-zinc-400">
            Monthly Savings
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            ${monthlySavings}
          </p>
        </div>

        <div className="rounded-2xl bg-black/30 p-5">
          <p className="text-sm text-zinc-400">
            Annual Savings
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            ${annualSavings}
          </p>
        </div>
      </div>

      <p className="mt-8 leading-relaxed text-zinc-400">
        {reason}
      </p>
    </div>
  );
}