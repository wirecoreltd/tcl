import { NextResponse } from "next/server";
import { del } from "@vercel/blob";

export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: "Vercel Blob isn't connected yet." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const pathname = body?.pathname;

  if (typeof pathname !== "string" || !pathname.startsWith("images/")) {
    return NextResponse.json(
      { ok: false, error: "Invalid or missing pathname." },
      { status: 400 }
    );
  }

  await del(pathname);
  return NextResponse.json({ ok: true });
}
