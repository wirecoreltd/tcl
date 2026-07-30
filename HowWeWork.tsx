import {
  ShieldCheck,
  Lightbulb,
  Eye,
  Handshake,
  Users,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const VALUES = [
  { icon: ShieldCheck, label: "Ownership" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Eye, label: "Transparency" },
  { icon: Handshake, label: "Integrity" },
  { icon: Users, label: "Teamwork" },
  { icon: TrendingUp, label: "Growth" },
];

const JOURNEY = [
  { year: "2020", label: "Company Founded" },
  { year: "2021", label: "Operational Expansion" },
  { year: "2022", label: "New Services" },
  { year: "2023", label: "International Growth" },
  { year: "2024", label: "Growing Teams" },
  { year: "Today", label: "Supporting Global Businesses" },
];

export default function AboutContent() {
  return (
    <>
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Our Story
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
              Built in Mauritius, for global operations
            </h2>
            <p className="mt-5 text-offwhite/65 leading-relaxed">
              Founded in Mauritius in 2020, Tropical Consulting Ltd was
              created with a simple mission: to deliver dependable
              operational support that helps international businesses
              succeed.
            </p>
            <p className="mt-4 text-offwhite/65 leading-relaxed">
              Since then, we have grown into a trusted partner providing
              24/7 operational services through skilled professionals,
              efficient processes, and a culture of continuous
              improvement.
            </p>
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            <div className="glass-card rounded-card p-7">
              <h3 className="font-display font-semibold text-lg text-offwhite">
                Mission
              </h3>
              <p className="mt-2.5 text-sm text-offwhite/60 leading-relaxed">
                To deliver operational excellence that empowers businesses
                to perform at their best every day.
              </p>
            </div>
            <div className="glass-card rounded-card p-7">
              <h3 className="font-display font-semibold text-lg text-offwhite">
                Vision
              </h3>
              <p className="mt-2.5 text-sm text-offwhite/60 leading-relaxed">
                To become a globally recognized operational support company
                known for reliability, innovation and people.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-navy-deep">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-xl">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Our Values
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
              What guides how we operate
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <Reveal delay={i * 70} key={v.label}>
                <div className="glass-card rounded-card p-6 flex items-center gap-3">
                  <v.icon size={18} className="text-cyan shrink-0" />
                  <span className="font-medium text-offwhite/85 text-sm">
                    {v.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-cyan uppercase">
                Why Mauritius
              </span>
              <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
                An ideal base for global operations
              </h2>
              <p className="mt-5 text-offwhite/65 leading-relaxed">
                Mauritius provides an ideal environment for international
                business with its multilingual workforce, strategic
                location, and strong business ecosystem.
              </p>
              <p className="mt-4 text-offwhite/65 leading-relaxed">
                This allows TCL to deliver world-class operational support
                across multiple time zones while maintaining exceptional
                service quality.
              </p>
            </div>
            <div className="glass-card rounded-card p-8">
              <ul className="space-y-4 text-sm text-offwhite/70">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  Multilingual, highly skilled workforce
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  Strategic time-zone position between Africa, Asia & Europe
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  Mature, business-friendly ecosystem
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  Stable regulatory environment
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-navy-deep">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Our Journey
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
              From startup to global partner
            </h2>
          </Reveal>

          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-line" />
            <div className="space-y-10">
              {JOURNEY.map((step, i) => (
                <Reveal delay={i * 90} key={step.year}>
                  <div className="relative">
                    <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full bg-cyan shadow-glowCyan" />
                    <span className="font-mono text-xs text-cyan tracking-wide">
                      {step.year}
                    </span>
                    <p className="mt-1 font-display font-semibold text-lg text-offwhite">
                      {step.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
