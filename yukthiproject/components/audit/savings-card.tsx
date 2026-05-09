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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <p className="text-sm uppercase tracking-widest text-zinc-400">
        {title}
      </p>

      <h3 className="mt-4 text-5xl font-bold tracking-tight text-white">
        {value}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
}