import { NextResponse } from "next/server";

/**
 * Receives access requests from /request-access.
 * TODO: connect to the team's CRM or inbox (e.g. HubSpot, Attio, or an email provider).
 * Until then, requests are validated and logged on the server only.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !body.consent) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  console.info("[request-access]", {
    name,
    email,
    role: body.role,
    location: body.location,
    providers: body.providers,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
