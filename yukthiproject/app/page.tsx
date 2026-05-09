import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import FAQ from "@/components/landing/faq";
import SpendForm from "@/components/forms/spend-form";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />

      <SpendForm />

      <Features />

      <FAQ />

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-400">
        <p>
          AI Spend Audit — Built for startups optimizing AI infrastructure costs.
        </p>
      </footer>
    </main>
  );
}