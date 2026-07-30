"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card rounded-card p-8 flex flex-col items-center text-center gap-3">
        <CheckCircle2 size={28} className="text-cyan" />
        <p className="font-display font-semibold text-lg text-offwhite">
          Message sent
        </p>
        <p className="text-sm text-offwhite/60">
          Thanks for reaching out — we'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-card p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Subject" name="subject" required />
      <div>
        <label className="block text-xs font-mono text-offwhite/50 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-xl bg-navy-panel/60 border border-navy-line px-4 py-3 text-sm text-offwhite placeholder:text-offwhite/25 focus:outline-none focus:border-cyan/60 transition-colors resize-none"
          placeholder="How can we help?"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-300">
          <AlertCircle size={16} />
          Something went wrong — please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-electric-light transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
        <Send size={16} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono text-offwhite/50 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl bg-navy-panel/60 border border-navy-line px-4 py-3 text-sm text-offwhite placeholder:text-offwhite/25 focus:outline-none focus:border-cyan/60 transition-colors"
      />
    </div>
  );
}
