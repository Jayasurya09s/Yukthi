interface SavingsCardProps {
  title: string;
  value: string;
  description: string;
}

export default function SavingsCard({
  title,
  value,
  description,
}: SavingsCardProps) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:from-white/[0.12] hover:to-white/[0.08]">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          {title}
        </p>

        <h3 className="mt-6 text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
          {value}
        </h3>

        <p className="mt-4 leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  );
}