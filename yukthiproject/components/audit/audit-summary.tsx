interface AuditSummaryProps {
  summary: string;
}

export default function AuditSummary({
  summary,
}: AuditSummaryProps) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:from-white/[0.12] hover:to-white/[0.08]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Executive Summary
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          AI Spend Analysis
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">
          {summary}
        </p>
      </div>
    </div>
  );
}