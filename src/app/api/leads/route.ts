// src/app/api/leads/route.ts
import { NextResponse } from "next/server";

// 1. Define clean TypeScript types for the lead
export interface LeadRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// 2. Mock Database (In-memory for MVP)
// Portfolio Note: In a real production app, we would use Prisma + PostgreSQL here.
let leads: LeadRequest[] = [];

export async function POST(request: Request) {
  try {
    const body: LeadRequest = await request.json();

    // 3. Simple Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 4. Save the lead
    leads.push(body);

    // Portfolio Pitch: "I've structured this to easily swap the in-memory array
    // for a real database like Supabase or MongoDB when scaling."
    console.log("New Lead Captured:", body);

    return NextResponse.json(
      { message: "Lead captured successfully!" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
