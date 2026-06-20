import { NextResponse } from "next/server";

import { sql } from "@/lib/db";

export const runtime = "nodejs";

type CatalogDownloadPayload = {
  name?: unknown;
  phone?: unknown;
};

function sanitizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CatalogDownloadPayload;
    const name = sanitizeText(body.name);
    const phone = sanitizeText(body.phone);

    if (!phone) {
      return NextResponse.json(
        { message: "لطفاً شماره همراه خود را وارد کنید." },
        { status: 400 },
      );
    }

    await sql`
      CREATE TABLE IF NOT EXISTS catalog_downloads (
        id BIGSERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    const [catalogDownload] = await sql<{ id: number }[]>`
      INSERT INTO catalog_downloads (name, phone)
      VALUES (${name || null}, ${phone})
      RETURNING id
    `;

    return NextResponse.json({
      id: catalogDownload.id,
      message: "اطلاعات شما ثبت شد، دانلود کاتالوگ آغاز می‌شود.",
    });
  } catch (error) {
    console.error("Failed to submit catalog download request", error);

    return NextResponse.json(
      { message: "ثبت اطلاعات با خطا مواجه شد." },
      { status: 500 },
    );
  }
}
