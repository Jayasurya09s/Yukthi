import { NextResponse } from "next/server";

import { openrouter } from "@/lib/ai/openrouter";

import { buildAuditSummaryPrompt } from "@/lib/ai/prompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt =
      buildAuditSummaryPrompt(body);

    const completion =
      await openrouter.chat.completions.create({
        model:
          "anthropic/claude-3-haiku",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const summary =
      completion.choices[0].message.content;

    return NextResponse.json({
      success: true,
      summary,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        summary:
          "Your stack shows potential optimization opportunities based on pricing and usage efficiency analysis.",
      },
      { status: 500 }
    );
  }
}