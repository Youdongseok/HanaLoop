// src/app/api/companies/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchCompanies } from "@/lib/api";

export async function GET(req: NextRequest) {
  try {
    const companies = await fetchCompanies();
    return NextResponse.json(companies);
  } catch (err) {
    return NextResponse.json({ error: "기업 데이터 불러오기 실패" }, { status: 500 });
  }
}
