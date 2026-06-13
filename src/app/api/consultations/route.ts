import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";

type ConsultationPayload = {
  city?: unknown;
  name?: unknown;
  phone?: unknown;
};

function sanitizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConsultationPayload;
    const name = sanitizeText(body.name);
    const phone = sanitizeText(body.phone);
    const city = sanitizeText(body.city);

    if (!name || !phone || !city) {
      return NextResponse.json(
        { message: "لطفاً همه فیلدها را تکمیل کنید." },
        { status: 400 },
      );
    }

    await sql`
      CREATE TABLE IF NOT EXISTS consultations (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        city TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    const [consultation] = await sql<{ id: number }[]>`
      INSERT INTO consultations (name, phone, city)
      VALUES (${name}, ${phone}, ${city})
      RETURNING id
    `;

    return NextResponse.json({ id: consultation.id, message: "درخواست شما ثبت شد." });
  } catch (error) {
    console.error("Failed to submit consultation request", error);

    return NextResponse.json(
      { message: "ثبت درخواست با خطا مواجه شد." },
      { status: 500 },
    );
  }
}
