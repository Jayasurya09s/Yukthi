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
      "Analyze AI subscriptions using structured pricing intelligence and optimization logic with real-time market data.",
    icon: DollarSign,
  },
  {
    title: "Optimization Engine",
    description:
      "Detect inefficient plans, overlapping tools, and unnecessary enterprise subscriptions automatically.",
    icon: BrainCircuit,
  },
  {
    title: "Savings Analytics",
    description:
      "Visualize monthly and annual savings opportunities across your entire AI infrastructure stack.",
    icon: BarChart3,
  },
  {
    title: "Deterministic Audits",
    description:
      "Financial recommendations generated through deterministic logic rather than hallucinated AI outputs.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Features
        </p>

        <h2 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
          Enterprise-Grade Intelligence
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-zinc-300">
          Yukthi combines pricing intelligence, optimization analysis,
          and AI-generated executive summaries to help startups reduce AI
          infrastructure costs by 20-40%.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-8 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:from-white/12 hover:to-white/8"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br from-blue-500/5 to-transparent" />

              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition-all duration-300 group-hover:h-14 group-hover:w-14 group-hover:bg-blue-500/25">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}