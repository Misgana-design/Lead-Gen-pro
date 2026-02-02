// src/app/api/leads/route.ts (Updated)
import { NextResponse } from "next/server";

export interface LeadRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Mock Database (Persistent for the duration of the server session)
const leads: LeadRequest[] = [];

export async function POST(request: Request) {
  const body = await request.json();
  const newLead = {
    ...body,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    status: "New",
  };
  leads.push(newLead);
  return NextResponse.json({ message: "Success" }, { status: 201 });
}

export async function GET() {
  // In production, you would check a "secret" header here for basic protection
  return NextResponse.json(leads);
}
