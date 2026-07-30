import { ArrowRight, Globe2 } from "lucide-react";
import OpsNetwork from "./OpsNetwork";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div
        className="absolute inset-0 bg-grid-fade pointer-events-none"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 mb-8">
            <Globe2 size={15} className="text-cyan" />
            <span className="font-mono text-xs tracking-wide text-offwhite/80">
              Based in Mauritius · Supporting Global Operations Since 2020
            </span>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-offwhite">
            Operational Excellence{" "}
            <span className="bg-gradient-to-r from-cyan to-electric-light bg-clip-text text-transparent">
              Never Sleeps.
            </span>
          </h1>

          <p className="mt-7 text-lg text-offwhite/70 max-w-xl leading-relaxed">
            Tropical Consulting Ltd delivers reliable 24/7 operational
            support to international digital businesses. Through dedicated
            people, efficient processes, and continuous improvement, we
            help our partners operate with confidence every hour of every
            day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-electric-light transition-colors"
            >
              Explore Our Services
              <ArrowRight size={16} />
            </a>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3.5 text-sm font-semibold text-offwhite hover:border-cyan/50 transition-colors"
            >
              Join Our Team
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {["24/7 Operations", "Always Connected", "Global Support"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
                  </span>
                  <span className="font-mono text-xs text-offwhite/60">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative aspect-[860/470] w-full">
          <OpsNetwork />
        </div>
      </div>
    </section>
  );
}
