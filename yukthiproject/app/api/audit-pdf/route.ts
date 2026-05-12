import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/db/supabase";

export const runtime = "nodejs";

function getAppUrl() {
  if (process.env.NODE_ENV !== "production") {
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  }

  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  );
}

type AuditRecommendation = {
  title?: string;
  tool?: string;
  description?: string;
  reason?: string;
  monthlySavings?: number;
  monthly_savings?: number;
  confidence?: number;
  confidence_score?: number;
};

type AuditRecord = {
  current_monthly_spend?: number | null;
  total_monthly_spend?: number | null;
  total_monthly_savings?: number | null;
  total_annual_savings?: number | null;
  recommendations?: AuditRecommendation[] | null;
};

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing audit ID" },
        { status: 400 }
      );
    }

    // Fetch audit from database
    const { data: auditData, error } = await supabase
      .from("audits")
      .select("*")
      .eq("id", id)
      .single();

    const audit = auditData as AuditRecord | null;

    if (error || !audit) {
      return NextResponse.json(
        { error: "Audit not found" },
        { status: 404 }
      );
    }

    // Calculate optimization score
    const currentMonthlySpend =
      audit.current_monthly_spend ??
      audit.total_monthly_spend ??
      0;

    const optimizationScore = Math.max(
      0,
      Math.min(
        100,
        Math.round(
          ((audit.total_monthly_savings || 0) / (currentMonthlySpend || 1)) * 100
        )
      )
    );

    // Generate QR code using external API
    const shareLink = `${getAppUrl()}/api/share?id=${id}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(shareLink)}`;

    // Create HTML content for PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          * { margin: 0; padding: 0; }
          body { font-family: 'Arial', sans-serif; background: #f5f5f5; }
          .page { 
            width: 8.5in; 
            height: 11in; 
            margin: auto; 
            padding: 40px; 
            background: white; 
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .header {
            border-bottom: 3px solid #000000;
            margin-bottom: 40px;
            padding-bottom: 20px;
          }
          .logo { 
            font-size: 28px; 
            font-weight: 700; 
            color: #000000;
            letter-spacing: 2px;
          }
          .title { 
            font-size: 28px; 
            font-weight: bold; 
            color: #000; 
            margin: 30px 0;
          }
          .section {
            margin-bottom: 30px;
            page-break-inside: avoid;
          }
          .section-title {
            font-size: 14px;
            font-weight: 700;
            color: #000000;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border-bottom: 2px solid #000000;
            padding-bottom: 8px;
          }
          .metrics {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }
          .metric-box {
            background: #f5f5f5;
            padding: 18px;
            border-left: 4px solid #000000;
            border-radius: 4px;
          }
          .metric-value {
            font-size: 28px;
            font-weight: 700;
            color: #000000;
          }
          .metric-label {
            font-size: 11px;
            color: #333333;
            margin-top: 5px;
            font-weight: 500;
          }
          .recommendations {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 15px;
          }
          .recommendation-item {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e0e0e0;
          }
          .recommendation-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .rec-title { 
            font-weight: 700; 
            color: #000000; 
            margin-bottom: 4px;
            font-size: 13px;
          }
          .rec-savings { 
            color: #000000; 
            font-weight: 700;
            font-size: 12px;
          }
          .rec-confidence { 
            display: inline-block;
            padding: 3px 10px;
            background: #000000;
            color: white;
            border-radius: 2px;
            font-size: 10px;
            margin-top: 4px;
            font-weight: 600;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #666;
          }
          .qr-section {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #000000;
            page-break-inside: avoid;
          }
          .qr-code {
            margin: 15px auto;
          }
          .qr-code img { 
            width: 200px; 
            height: 200px;
            border: 2px solid #000000;
            background: white;
          }
          .qr-label { 
            font-size: 11px; 
            color: #333333; 
            margin-top: 10px;
            font-weight: 500;
          }
          .qr-url {
            font-size: 9px;
            color: #666666;
            margin-top: 8px;
            word-break: break-all;
            font-family: 'Courier New', monospace;
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <div class="logo">YUKTHI</div>
            <p style="color: #666; margin-top: 5px; font-size: 12px;">AI Infrastructure Cost Intelligence</p>
          </div>

          <div class="title">AI Spend Optimization Report</div>

          <div class="section">
            <div class="section-title">Key Savings</div>
            <div class="metrics">
              <div class="metric-box">
                <div class="metric-value">$${audit.total_annual_savings?.toLocaleString() || '0'}</div>
                <div class="metric-label">Annual Savings Potential</div>
              </div>
              <div class="metric-box">
                <div class="metric-value">$${audit.total_monthly_savings?.toLocaleString() || '0'}</div>
                <div class="metric-label">Monthly Savings Potential</div>
              </div>
              <div class="metric-box">
                <div class="metric-value">${optimizationScore}%</div>
                <div class="metric-label">Optimization Score</div>
              </div>
              <div class="metric-box">
                <div class="metric-value">$${currentMonthlySpend.toLocaleString()}</div>
                <div class="metric-label">Current Monthly Spend</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Recommendations</div>
            <div class="recommendations">
              ${
                Array.isArray(audit.recommendations)
                  ? audit.recommendations
                      .slice(0, 5)
                      .map(
                        (rec: AuditRecommendation) => `
                <div class="recommendation-item">
                  <div class="rec-title">${rec.title || rec.tool || 'Optimization'}</div>
                  <p style="font-size: 12px; color: #666; margin-bottom: 5px;">${
                    rec.description || rec.reason || ''
                  }</p>
                  <div class="rec-savings">
                    💰 Save $${(rec.monthlySavings ?? rec.monthly_savings ?? 0).toLocaleString()}/month
                  </div>
                  <span class="rec-confidence">Confidence: ${
                    rec.confidence ?? rec.confidence_score ?? 0
                  }%</span>
                </div>
              `
                      )
                      .join('')
                  : '<p style="color: #666;">No recommendations available</p>'
              }
            </div>
          </div>

          <div class="qr-code">
            <img src="${qrCodeUrl}" alt="QR Code" />
            <div class="qr-label">Scan to view full interactive report online</div>
          </div>

          <div class="footer">
            <p>This report was generated by Yukthi - AI Infrastructure Cost Intelligence</p>
            <p style="margin-top: 10px;">Generated on ${new Date().toLocaleDateString()}</p>
            <p style="margin-top: 5px; font-size: 9px;">Report ID: ${id}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Return HTML as response
    return new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": `attachment; filename="audit-report-${id}.html"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
