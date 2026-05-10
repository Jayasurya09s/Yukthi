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
  const confidenceColor =
    confidence >= 90
      ? "border-green-500/30 bg-green-500/10 text-green-300"
      : confidence >= 70
        ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
        : "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:border-green-500/30 hover:from-white/[0.12] hover:to-white/[0.08]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              {tool}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              <span className="text-zinc-400">{currentPlan}</span>
              <span className="mx-2 text-blue-300">→</span>
              <span className="text-white">{recommendedPlan}</span>
            </h3>
          </div>

          <div className={`rounded-xl border px-4 py-2 text-sm font-semibold whitespace-nowrap ${confidenceColor}`}>
            {confidence}%
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 border border-white/10 p-6 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-white/20">
            <p className="text-sm font-medium text-zinc-400">
              Monthly Savings
            </p>

            <p className="mt-3 text-4xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
              ${monthlySavings.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-6 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-white/20">
            <p className="text-sm font-medium text-zinc-400">
              Annual Savings
            </p>

            <p className="mt-3 text-4xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent">
              ${annualSavings.toLocaleString()}
            </p>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">
          {reason}
        </p>
      </div>
    </div>
  );
}