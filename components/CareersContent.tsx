"use client";

import { useState } from "react";
import {
  Globe,
  GraduationCap,
  TrendingUp,
  Users,
  Award,
  Rocket,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import Reveal from "./Reveal";

const WHY_JOIN = [
  { icon: Globe, label: "International Team" },
  { icon: GraduationCap, label: "Continuous Learning" },
  { icon: TrendingUp, label: "Career Development" },
  { icon: Users, label: "Collaborative Culture" },
  { icon: Award, label: "Recognition" },
  { icon: Rocket, label: "Growth Opportunities" },
];

const POSITIONS = [
  "Customer Support Representative",
  "Operations Officer",
  "QA Specialist",
  "Fraud Analyst",
  "CRM Executive",
  "Business Analyst",
  "HR Officer",
  "Team Leader",
];

const PROCESS = ["Apply", "Interview", "Assessment", "Offer", "Welcome"];

const FAQ = [
  {
    q: "What are the working hours?",
    a: "Since we support operations 24/7, we run rotating shifts across day, evening and night coverage. Specific shift patterns are shared during the interview process for each role.",
  },
  {
    q: "What training is provided?",
    a: "Every new hire completes a structured onboarding program covering our tools, processes and quality standards, followed by ongoing training as our services and technology evolve.",
  },
  {
    q: "What benefits do employees receive?",
    a: "Benefits vary by role and are detailed during the offer stage — they typically include performance recognition, professional development support, and a collaborative, modern workplace.",
  },
  {
    q: "Is there room for career progression?",
    a: "Yes. We prioritize promoting from within, and many of our team leads and managers started in entry-level operational roles.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-offwhite">{q}</span>
        <ChevronDown
          size={18}
          className={`text-cyan shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="px-6 pb-6 text-sm text-offwhite/60 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

export default function CareersContent() {
  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-xl mb-10">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Why Join Us
            </span>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_JOIN.map((item, i) => (
              <Reveal delay={i * 60} key={item.label}>
                <div className="glass-card rounded-card p-6 flex items-center gap-3.5">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-electric/15 text-electric-light shrink-0">
                    <item.icon size={18} />
                  </div>
                  <span className="font-medium text-offwhite/85 text-sm">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy-deep">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-10">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Open Positions
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
              Current Openings
            </h2>
          </Reveal>
          <div className="divide-y divide-navy-line border-y border-navy-line">
            {POSITIONS.map((pos, i) => (
              <Reveal delay={i * 50} key={pos}>
                <a
                  href="/contact"
                  className="group flex items-center justify-between py-5 hover:px-2 transition-all"
                >
                  <span className="font-display font-medium text-offwhite">
                    {pos}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-offwhite/30 group-hover:text-cyan transition-colors"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Recruitment Process
            </span>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {PROCESS.map((step, i) => (
              <Reveal delay={i * 90} key={step}>
                <div className="text-center">
                  <div className="mx-auto h-11 w-11 rounded-full bg-electric/15 text-electric-light flex items-center justify-center font-mono text-sm font-semibold">
                    {i + 1}
                  </div>
                  <p className="mt-3 text-sm font-medium text-offwhite/80">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy-deep">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-10">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              FAQ
            </span>
          </Reveal>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Reveal delay={i * 70} key={item.q}>
                <FAQItem {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
