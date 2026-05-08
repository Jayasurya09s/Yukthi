import { NextResponse } from "next/server";

import { auditSchema } from "@/lib/validations/audit-schema";

import { runAudit } from "@/lib/audit-engine/engine";

import { supabase } from "@/lib/db/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validated =
      auditSchema.parse(body);

    const auditResult =
      await runAudit(validated);

    const { data, error } =
      await supabase
        .from("audits")
        .insert({
          team_size: validated.teamSize,

          primary_use_case:
            validated.primaryUseCase,

          total_monthly_spend:
            auditResult.totalMonthlySpend,

          total_monthly_savings:
            auditResult.totalMonthlySavings,

          total_annual_savings:
            auditResult.totalAnnualSavings,

          optimized:
            auditResult.optimized,

          recommendations:
            auditResult.recommendations,
        })
        .select()
        .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      audit: data,
      result: auditResult,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate audit",
      },
      { status: 500 }
    );
  }
}