import { NextResponse } from "next/server";

import { supabase } from "@/lib/db/supabase";

import { resend } from "@/lib/email/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      companyName,
      role,
      teamSize,
      auditId,
    } = body;

    const { error } = await supabase
      .from("leads")
      .insert({
        email,
        company_name: companyName,
        role,
        team_size: teamSize,
        audit_id: auditId,
      });

    if (error) {
      throw error;
    }

    const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL}/audit/${auditId}`;

const emailResponse =
  await resend.emails.send({
    from:
      "AI Spend Audit <noreply@yukti.ai>",

    to: email,

    subject:
      "Your AI Spend Audit Report",

    html: `
      <h1>Your AI Spend Audit is Ready</h1>

      <p>
        We analyzed your AI infrastructure spending and generated your optimization report.
      </p>

      <p>
        View your audit:
      </p>

      <a href="${shareUrl}">
        ${shareUrl}
      </a>
    `,
  });

console.log(emailResponse);
    
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}