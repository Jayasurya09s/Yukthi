import { NextResponse } from "next/server";

import { supabase } from "@/lib/db/supabase";

import { transporter } from "@/lib/email/mailer";

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

await transporter.sendMail({
  from: `"Yukthi" <${process.env.EMAIL_USER}>`,

  to: email,

  subject: "Your Yukthi AI Audit Report",

  html: `
    <div style="font-family: Arial, sans-serif; padding: 24px;">
      <h1>Your Yukthi Audit Report is Ready</h1>

      <p>
        We analyzed your AI infrastructure stack and identified optimization opportunities.
      </p>

      <p>
        View your public audit report:
      </p>

      <a href="${shareUrl}">
        ${shareUrl}
      </a>

      <p style="margin-top: 24px;">
        — Team Yukthi
      </p>
    </div>
  `,
});

    
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