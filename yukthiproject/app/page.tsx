import Hero from "@/components/landing/hero";

import Features from "@/components/landing/features";

import FAQ from "@/components/landing/faq";

import SpendForm from "@/components/forms/spend-form";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background: Dark with gradient */}
      <div className="fixed inset-0 -z-20 bg-black" />
      
      {/* Animated gradient background as fallback */}
      <div className="fixed inset-0 -z-20 bg-linear-to-b from-blue-600/5 via-black to-black" />

      {/* Main Content */}
      <div className="relative z-10">

        {/* Hero Section */}
        <Hero />

        {/* Spend Form / Audit Section */}
        <SpendForm />

        {/* Features Section */}
        <Features />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <footer className="border-t border-white/10 py-16 text-center">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm text-zinc-400">
              Yukthi — Enterprise-grade AI infrastructure cost optimization platform
            </p>
            
            <p className="mt-4 text-xs text-zinc-500">
              Built for startups optimizing AI spending across ChatGPT, Claude, Cursor, Copilot, Gemini, and more.
            </p>

            <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-500">
              <a href="/privacy" className="transition hover:text-zinc-400">Privacy</a>
              <span className="text-zinc-700">•</span>
              <a href="/terms" className="transition hover:text-zinc-400">Terms</a>
              <span className="text-zinc-700">•</span>
              <a href="/contact" className="transition hover:text-zinc-400">Contact</a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}