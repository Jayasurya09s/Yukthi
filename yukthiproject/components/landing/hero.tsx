"use client";

import { ArrowRight, Sparkles, TrendingDown } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.querySelector('[data-section="audit-form"]');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm transition hover:border-blue-400/50 hover:bg-blue-500/15">
          
          AI Infrastructure Cost Intelligence
        </div>

        {/* Main headline */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl text-white">
          Stop Overpaying
          <span className="block bg-linear-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            for AI Tools
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
          Analyze your AI stack, detect unnecessary spending, and discover
          optimization opportunities across ChatGPT, Claude, Cursor, Copilot,
          Gemini, and more.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row items-center justify-center">
          <button
            onClick={scrollToForm}
            className="group relative flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-white/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 rounded-xl bg-white opacity-0 transition-opacity group-hover:opacity-10" />
          </button>

          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <TrendingDown className="h-5 w-5" />
            View Report
          </a>
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { value: "$12k+", label: "Avg Annual Savings" },
            { value: "8+", label: "Platforms Supported" },
            { value: "100%", label: "Deterministic Analysis" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:from-white/12 hover:to-white/6"
            >
              <p className="text-4xl font-bold bg-linear-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium text-zinc-400 transition-colors group-hover:text-zinc-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
