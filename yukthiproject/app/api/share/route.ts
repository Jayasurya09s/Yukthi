import { NextResponse } from "next/server";

import { supabase } from "@/lib/db/supabase";

export async function GET(req: Request) {
  const { searchParams } =
    new URL(req.url);

  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 400 }
    );
  }

  const { data, error } =
    await supabase
      .from("audits")
      .select("*")
      .eq("id", id)
      .single();

  if (error) {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    audit: data,
  });
}