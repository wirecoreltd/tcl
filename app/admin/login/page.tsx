"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error || "Login failed.");
        setLoading(false);
        return;
      }
      router.push(params.get("from") || "/admin/photos");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="Tropical Consulting Ltd" className="h-14 w-14 rounded-lg mb-4" />
          <h1 className="font-display font-semibold text-xl text-offwhite">
            Admin Sign In
          </h1>
          <p className="mt-1 text-sm text-offwhite/50">
            Tropical Consulting Ltd
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-card p-7 space-y-5">
          <div>
            <label className="block text-xs font-mono text-offwhite/50 mb-2">
              Username
            </label>
            <input
              name="username"
              autoComplete="username"
              required
              className="w-full rounded-xl bg-navy-panel/60 border border-navy-line px-4 py-3 text-sm text-offwhite focus:outline-none focus:border-cyan/60 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-offwhite/50 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-xl bg-navy-panel/60 border border-navy-line px-4 py-3 text-sm text-offwhite focus:outline-none focus:border-cyan/60 transition-colors"
            />
          </div>

          {error && <p className="text-sm text-brandRed">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-electric-light transition-colors disabled:opacity-60"
          >
            <Lock size={15} />
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
