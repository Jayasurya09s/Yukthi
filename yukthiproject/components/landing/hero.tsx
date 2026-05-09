"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-blue-400" />
          AI Infrastructure Cost Optimization Platform
        </div>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Stop Overpaying
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            for AI Tools
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Analyze your AI stack, detect unnecessary spending, and discover
          optimization opportunities across ChatGPT, Claude, Cursor, Copilot,
          Gemini, and more.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-medium text-black transition hover:scale-[1.02]">
            Audit My Stack
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition hover:bg-white/10">
            View Demo Report
          </button>
        </div>

        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-4xl font-bold text-white">$12k+</p>
            <p className="mt-2 text-zinc-400">
              Potential annual savings identified
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-4xl font-bold text-white">8+</p>
            <p className="mt-2 text-zinc-400">
              AI platforms supported
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-4xl font-bold text-white">100%</p>
            <p className="mt-2 text-zinc-400">
              Deterministic pricing analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}