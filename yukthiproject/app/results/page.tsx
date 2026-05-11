
"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { Share2, ArrowLeft } from "lucide-react";

import SavingsCard from "@/components/audit/savings-card";

import RecommendationCard from "@/components/audit/recommendation-card";

import SavingsChart from "@/components/charts/savings-chart";

import AuditSummary from "@/components/audit/audit-summary";
import LeadCaptureForm from "@/components/forms/lead-capture-form";

type AuditRecommendation = {
  tool: string;
  currentPlan: string;
  recommendedPlan: string;
  monthlySavings: number;
  annualSavings: number;
  confidence: number;
  reason: string;
};

type StoredAuditData = {
  audit: {
    id: string;
    team_size: number;
  };
  result: {
    totalMonthlySpend: number;
    totalMonthlySavings: number;
    totalAnnualSavings: number;
    recommendations: AuditRecommendation[];
  };
  summary: string;
};

export default function ResultsPage() {
  const router = useRouter();

  const [data] = useState<StoredAuditData | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const stored = localStorage.getItem("audit-result");

    if (!stored) {
      return null;
    }

    try {
      return JSON.parse(stored) as StoredAuditData;
    } catch {
      return null;
    }
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!data) {
      router.push("/");
    }
  }, [data, router]);

  const handleShare = async () => {
    if (!data) {
      return;
    }

    const shareUrl = `${window.location.origin}/api/share?id=${data.audit.id}`;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold">
            Loading Audit Results...
          </h1>

          <p className="mt-6 text-zinc-400">
            Preparing your AI infrastructure optimization report.
          </p>

          <div className="mt-8 h-1 w-24 mx-auto bg-linear-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
        </div>
      </main>
    );
  }

  const result = data.result;

  const optimizedSpend =
    result.totalMonthlySpend -
    result.totalMonthlySavings;

  const optimizationScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        (result.totalMonthlySavings /
          result.totalMonthlySpend) *
          100
      )
    )
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <button
          onClick={() => router.push("/")}
          className="group mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Audit Results
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Your AI Spend Optimization Report
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Your AI infrastructure analysis is complete. Discover optimization opportunities and start reducing costs immediately.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
          <SavingsCard
            title="Monthly Savings"
            value={`$${result.totalMonthlySavings.toLocaleString()}`}
            description="Estimated monthly optimization opportunity identified by the audit engine."
          />

          <SavingsCard
            title="Annual Savings"
            value={`$${result.totalAnnualSavings.toLocaleString()}`}
            description="Projected yearly savings if optimization recommendations are implemented."
          />

          <SavingsCard
            title="Optimization Score"
            value={`${optimizationScore}%`}
            description="Estimated optimization potential based on current subscription efficiency."
          />
        </div>

        {/* Audit Summary */}
        <div className="mb-16">
          <AuditSummary summary={data.summary} />
        </div>

        {/* Savings Chart */}
        <div className="mb-16">
          <SavingsChart
            currentSpend={result.totalMonthlySpend}
            optimizedSpend={optimizedSpend}
          />
        </div>

        {/* Recommendations Section */}
        <div className="mb-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Recommendations
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
                Optimization Opportunities
              </h2>
            </div>

            <button
              onClick={handleShare}
              className={`group relative flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                copied
                  ? "border-green-500/30 bg-green-500/10 text-green-200"
                  : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
              }`}
            >
              <Share2 className="h-5 w-5" />
              {copied ? "Link Copied!" : "Share Audit"}
            </button>
          </div>
        </div>

        {/* Lead Capture */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-8 backdrop-blur-md">
          <LeadCaptureForm
            auditId={data.audit.id}
            teamSize={data.audit.team_size}
          />
        </div>

        {/* Recommendations List */}
        <div className="space-y-6">
          {result.recommendations.map(
            (recommendation: AuditRecommendation, index: number) => (
              <RecommendationCard
                key={index}
                tool={recommendation.tool}
                currentPlan={recommendation.currentPlan}
                recommendedPlan={recommendation.recommendedPlan}
                monthlySavings={recommendation.monthlySavings}
                annualSavings={recommendation.annualSavings}
                confidence={recommendation.confidence}
                reason={recommendation.reason}
              />
            )
          )}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="group relative flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            Generate Another Audit
          </button>
        </div>
      </section>
    </main>
  );
}