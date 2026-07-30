import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CareersCTA() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="glass-card rounded-card px-8 py-16 lg:py-20 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-grid-fade pointer-events-none"
              aria-hidden
            />
            <h2 className="relative font-display font-semibold text-3xl lg:text-4xl text-offwhite tracking-tight max-w-2xl mx-auto">
              Looking for Your Next Opportunity?
            </h2>
            <p className="relative mt-5 text-offwhite/65 max-w-lg mx-auto leading-relaxed">
              Join an international company where your ideas matter and your
              career can grow.
            </p>
            <a
              href="/careers"
              className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:bg-electric-light transition-colors"
            >
              View Open Positions
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
