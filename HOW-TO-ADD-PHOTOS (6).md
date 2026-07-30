import { Clock, TrendingUp, Users, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Clock,
    title: "Around-the-Clock Support",
    text: "24/7 operational coverage with dedicated teams.",
  },
  {
    icon: TrendingUp,
    title: "Performance Driven",
    text: "Every process is measured, monitored and continuously improved.",
  },
  {
    icon: Users,
    title: "People Focused",
    text: "Professional teams committed to delivering exceptional service.",
  },
  {
    icon: Rocket,
    title: "Built for Growth",
    text: "Scalable operations designed to grow alongside your business.",
  },
];

export default function WhyTCL() {
  return (
    <section className="py-24 lg:py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-cyan uppercase">
            Why TCL
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-offwhite tracking-tight">
            Why Businesses Choose TCL
          </h2>
          <p className="mt-5 text-offwhite/65 leading-relaxed">
            We become an extension of your business, providing operational
            expertise that keeps your organization running efficiently
            around the clock.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item, i) => (
            <Reveal delay={i * 90} key={item.title}>
              <div className="glass-card rounded-card p-7 h-full transition-all duration-300">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-electric/15 text-electric-light mb-5">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg text-offwhite">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-offwhite/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
