interface AuditSummaryProps {
  summary: string;
}

export default function AuditSummary({
  summary,
}: AuditSummaryProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <p className="text-sm uppercase tracking-widest text-blue-400">
        Executive Summary
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
        AI Spend Analysis
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-zinc-400">
        {summary}
      </p>
    </div>
  );
}