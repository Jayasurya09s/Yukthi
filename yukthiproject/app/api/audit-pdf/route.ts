import PDFDocument from "pdfkit";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/db/supabase";
import { getAppUrl } from "../../../lib/utils/app-url";

export const runtime = "nodejs";

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
  summary?: string | null;
};

function createPdfBuffer(render: (doc: PDFKit.PDFDocument) => void) {
  return new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 48 });
    const chunks: Buffer[] = [];

    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    render(doc);
    doc.end();
  });
}

function currency(value: number | null | undefined) {
  return `$${(value || 0).toLocaleString()}`;
}

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing audit ID" }, { status: 400 });
    }

    const { data: auditData, error } = await supabase
      .from("audits")
      .select("*")
      .eq("id", id)
      .single();

    const audit = auditData as AuditRecord | null;

    if (error || !audit) {
      return NextResponse.json({ error: "Audit not found" }, { status: 404 });
    }

    const currentMonthlySpend =
      audit.current_monthly_spend ?? audit.total_monthly_spend ?? 0;

    const optimizationScore = Math.max(
      0,
      Math.min(
        100,
        Math.round(
          ((audit.total_monthly_savings || 0) / (currentMonthlySpend || 1)) * 100
        )
      )
    );

    const shareLink = `${getAppUrl()}/api/share?id=${id}`;
    const recommendations = Array.isArray(audit.recommendations)
      ? audit.recommendations.slice(0, 5)
      : [];

    const buffer = await createPdfBuffer((doc) => {
      doc.font("Helvetica-Bold").fontSize(24).fillColor("#111111");
      doc.text("YUKTHI", { align: "left" });
      doc.moveDown(0.2);
      doc.font("Helvetica").fontSize(11).fillColor("#666666");
      doc.text("AI Infrastructure Cost Intelligence");

      doc.moveDown(1);
      doc.font("Helvetica-Bold").fontSize(20).fillColor("#111111");
      doc.text("AI Spend Optimization Report");

      doc.moveDown(1);
      doc.font("Helvetica-Bold").fontSize(13).text("Key Savings");
      doc.moveDown(0.4);

      const metricTop = doc.y;
      const metricWidth = 245;
      const metricHeight = 58;
      const left = 48;
      const right = 302;

      const metrics = [
        [left, metricTop, "Annual Savings Potential", currency(audit.total_annual_savings)],
        [right, metricTop, "Monthly Savings Potential", currency(audit.total_monthly_savings)],
        [left, metricTop + 78, "Optimization Score", `${optimizationScore}%`],
        [right, metricTop + 78, "Current Monthly Spend", currency(currentMonthlySpend)],
      ] as const;

      for (const [x, y, label, value] of metrics) {
        doc.roundedRect(x, y, metricWidth, metricHeight, 6).fillAndStroke("#f5f5f5", "#d4d4d4");
        doc.fillColor("#111111").font("Helvetica-Bold").fontSize(16).text(value, x + 14, y + 12);
        doc.fillColor("#555555").font("Helvetica").fontSize(9).text(label, x + 14, y + 34);
      }

      doc.y = metricTop + 160;
      doc.moveDown(0.6);
      doc.font("Helvetica-Bold").fontSize(13).fillColor("#111111").text("Recommendations");
      doc.moveDown(0.5);

      if (recommendations.length === 0) {
        doc.font("Helvetica").fontSize(11).fillColor("#666666").text("No recommendations available.");
      } else {
        recommendations.forEach((rec, index) => {
          if (index > 0) {
            doc.moveDown(0.6);
          }

          const title = rec.title || rec.tool || "Optimization";
          const description = rec.description || rec.reason || "";
          const savings = rec.monthlySavings ?? rec.monthly_savings ?? 0;
          const confidence = rec.confidence ?? rec.confidence_score ?? 0;

          doc.roundedRect(doc.x, doc.y, 499, 70, 6).fillAndStroke("#fafafa", "#e5e5e5");
          doc.fillColor("#111111").font("Helvetica-Bold").fontSize(11).text(title, doc.x + 12, doc.y + 10);
          doc.fillColor("#555555").font("Helvetica").fontSize(10).text(description, doc.x + 12, doc.y + 26, {
            width: 470,
            height: 24,
          });
          doc.fillColor("#111111").font("Helvetica-Bold").fontSize(10).text(
            `Save ${currency(savings)}/month`,
            doc.x + 12,
            doc.y + 52
          );
          doc.font("Helvetica").text(`Confidence: ${confidence}%`, doc.x + 170, doc.y + 52);
          doc.y += 78;
        });
      }

      doc.moveDown(0.8);
      doc.font("Helvetica-Bold").fontSize(12).fillColor("#111111").text("Public Share Link");
      doc.font("Helvetica").fontSize(10).fillColor("#555555").text(shareLink, {
        link: shareLink,
        underline: true,
      });

      doc.moveDown(1);
      doc.font("Helvetica").fontSize(9).fillColor("#777777").text(
        `Generated on ${new Date().toLocaleDateString()} • Report ID: ${id}`,
        { align: "center" }
      );
    });

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="audit-report-${id}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
