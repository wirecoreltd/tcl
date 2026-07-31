import { NextResponse } from "next/server";
import { checkCredentials, createSessionToken, ADMIN_SESSION_COOKIE } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.username || !body?.password) {
    return NextResponse.json(
      { ok: false, error: "Username and password are required." },
      { status: 400 }
    );
  }

  let valid: boolean;
  try {
    valid = checkCredentials(body.username, body.password);
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Admin login isn't configured yet. Set ADMIN_USERNAME, ADMIN_PASSWORD and ADMIN_SESSION_SECRET as environment variables.",
      },
      { status: 500 }
    );
  }

  if (!valid) {
    return NextResponse.json(
      { ok: false, error: "Incorrect username or password." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
