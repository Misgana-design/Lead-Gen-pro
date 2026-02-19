// src/app/api/leads/route.ts (Updated)
import { supabase } from "@/lib/supabase";
import { error } from "console";
import { NextResponse } from "next/server";

export interface LeadRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  id: number;
  status?: string;
  created_at: string;
}

// Mock Database (Persistent for the duration of the server session)

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { error } = await supabase.from("leads").insert([
      {
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
      },
    ]);
    if (error) throw error;
    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    console.error("Supabase error details", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const idToDelete = searchParams.get("id");
    const id = Number(idToDelete);

    if (!id) {
      return NextResponse.json({ error: "Id required" }, { status: 500 });
    }
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) throw error;
    return NextResponse.json({ message: "Deleted" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Couldn't delete" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();

    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);
    if (error) throw error;
    return NextResponse.json({ message: "Status updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Couldn't update status" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error();
    // In production, you would check a "secret" header here for basic protection
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Couldn't get data" }, { status: 500 });
  }
}
