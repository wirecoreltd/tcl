import { NextResponse } from "next/server";

/**
 * Minimal contact-form handler.
 *
 * Right now this just validates the payload and logs it — enough to test
 * the form end to end. To actually deliver emails, wire in a provider such
 * as Resend (https://resend.com) or Formspree, e.g.:
 *
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "TCL Website <site@tropicalconsultingltd.com>",
 *     to: "hello@tropicalconsultingltd.com",
 *     subject: `New enquiry: ${subject}`,
 *     text: `${name} (${email}, ${company}) wrote:\n\n${message}`,
 *   });
 *
 * Remember to add any API keys as environment variables in Vercel
 * (Project Settings → Environment Variables), never commit them.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  // TODO: replace with a real email provider call (see comment above).
  console.log("New contact form submission:", body);

  return NextResponse.json({ ok: true });
}
