import {
  BarChart3,
  BrainCircuit,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Pricing Intelligence",
    description:
      "Analyze AI subscriptions using structured pricing intelligence and optimization logic.",
    icon: DollarSign,
  },
  {
    title: "Optimization Engine",
    description:
      "Detect inefficient plans, overlapping tools, and unnecessary enterprise subscriptions.",
    icon: BrainCircuit,
  },
  {
    title: "Savings Analytics",
    description:
      "Visualize monthly and annual savings opportunities across your AI infrastructure stack.",
    icon: BarChart3,
  },
  {
    title: "Deterministic Audits",
    description:
      "Financial recommendations are generated through deterministic logic rather than hallucinated AI outputs.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          Features
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Built Like a Real Financial Intelligence Platform
        </h2>

        <p className="mt-6 text-lg text-zinc-400">
          AI Spend Audit combines pricing intelligence, optimization analysis,
          and AI-generated executive summaries to help startups reduce AI
          infrastructure costs.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-blue-500/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}