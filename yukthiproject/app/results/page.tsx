
"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import SavingsCard from "@/components/audit/savings-card";

import RecommendationCard from "@/components/audit/recommendation-card";

import SavingsChart from "@/components/charts/savings-chart";

import AuditSummary from "@/components/audit/audit-summary";
import LeadCaptureForm from "@/components/forms/lead-capture-form";
export default function ResultsPage() {
  const router = useRouter();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem(
      "audit-result"
    );

    if (!stored) {
      router.push("/");
      return;
    }

    setData(JSON.parse(stored));
  }, [router]);

if (!data) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="max-w-xl text-center">
            <h1 className="text-4xl font-bold">
            No Audit Found
            </h1>

            <p className="mt-6 text-zinc-400">
            Generate an audit to view your AI infrastructure optimization report.
            </p>

            <a
            href="/"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 font-medium text-black"
            >
            Generate Audit
            </a>
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
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Audit Results
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Your AI Spend Audit
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Analyze your current AI infrastructure spending and optimization opportunities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <SavingsCard
            title="Monthly Savings"
            value={`$${result.totalMonthlySavings}`}
            description="Estimated monthly optimization opportunity identified by the audit engine."
          />

          <SavingsCard
            title="Annual Savings"
            value={`$${result.totalAnnualSavings}`}
            description="Projected yearly savings if optimization recommendations are implemented."
          />

          <SavingsCard
            title="Optimization Score"
            value={`${optimizationScore}%`}
            description="Estimated optimization potential based on current subscription efficiency."
          />
        </div>

        <div className="mt-16">
          <AuditSummary summary={data.summary} />
        </div>

        <div className="mt-16">
          <SavingsChart
            currentSpend={result.totalMonthlySpend}
            optimizedSpend={optimizedSpend}
          />
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-400">
                Recommendations
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
                Optimization Opportunities
              </h2>
            </div>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Share Audit
            </button>
          </div>
        <div className="mt-20">
        <LeadCaptureForm
            auditId={data.audit.id}
            teamSize={data.audit.team_size}
        />
        </div>       
          <div className="mt-10 space-y-6">
            {result.recommendations.map(
              (recommendation: any, index: number) => (
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
        </div>
      </section>
    </main>
  );
}