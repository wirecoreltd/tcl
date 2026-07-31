const SESSION_COOKIE = "tcl_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 12; // 12 hours

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not set. Add it as an environment variable (any long random string)."
    );
  }
  return secret;
}

async function importKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function sign(value: string): Promise<string> {
  const key = await importKey(getSecret());
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Builds a signed session token: `expiryTimestamp.signature`. */
export async function createSessionToken(): Promise<string> {
  const expiry = (Date.now() + SESSION_DURATION_MS).toString();
  const signature = await sign(expiry);
  return `${expiry}.${signature}`;
}

/** Verifies a session token's signature and expiry. Safe to call on the Edge runtime. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [expiry, signature] = token.split(".");
  if (!expiry || !signature) return false;

  let expected: string;
  try {
    expected = await sign(expiry);
  } catch {
    return false;
  }

  if (expected.length !== signature.length) return false;
  // constant-time-ish comparison
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  if (diff !== 0) return false;

  return Number(expiry) > Date.now();
}

/** Checks submitted credentials against the admin env vars. */
export function checkCredentials(username: string, password: string): boolean {
  const validUser = process.env.ADMIN_USERNAME;
  const validPass = process.env.ADMIN_PASSWORD;
  if (!validUser || !validPass) {
    throw new Error(
      "ADMIN_USERNAME / ADMIN_PASSWORD are not set as environment variables."
    );
  }
  return username === validUser && password === validPass;
}

export const ADMIN_SESSION_COOKIE = SESSION_COOKIE;
