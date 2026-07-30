import { Lightbulb, Cog, LineChart, Target } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We constantly improve the way we work.",
  },
  {
    icon: Cog,
    title: "Execution",
    text: "Reliable processes with operational excellence.",
  },
  {
    icon: LineChart,
    title: "Optimization",
    text: "Continuous improvement through testing and automation.",
  },
  {
    icon: Target,
    title: "Results",
    text: "Performance backed by measurable KPIs.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <span className="font-mono text-xs tracking-widest text-cyan uppercase">
            How We Work
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-offwhite tracking-tight">
            A Cycle Built to Run Without Pause
          </h2>
        </Reveal>

        <div className="divide-y divide-navy-line border-y border-navy-line">
          {PILLARS.map((p, i) => (
            <Reveal delay={i * 80} key={p.title}>
              <div className="group grid sm:grid-cols-[auto,1fr,2fr] items-center gap-4 sm:gap-10 py-8">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-electric/15 text-electric-light group-hover:bg-cyan/15 group-hover:text-cyan transition-colors">
                  <p.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl text-offwhite">
                  {p.title}
                </h3>
                <p className="text-offwhite/60 leading-relaxed max-w-lg">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
