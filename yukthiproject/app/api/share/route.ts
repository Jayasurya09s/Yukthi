import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/db/supabase";

export async function GET(
  request: NextRequest
) {
  try {
    const searchParams =
      request.nextUrl.searchParams;

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing audit ID",
        },
        { status: 400 }
      );
    }

    // Verify the audit exists
    const { data, error } =
      await supabase
        .from("audits")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !data) {
      return NextResponse.json(
        {
          success: false,
          error: "Audit not found",
        },
        { status: 404 }
      );
    }

    // Return the audit data as JSON
    return NextResponse.json(
      {
        success: true,
        audit: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}