import { MapPin, Phone, Mail } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          <Reveal>
            <div className="glass-card rounded-card p-6 flex items-start gap-4">
              <MapPin size={20} className="text-cyan shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-offwhite/45 uppercase tracking-wide">
                  Address
                </p>
                <p className="mt-1 text-sm text-offwhite/80">
                  Mauritius
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="glass-card rounded-card p-6 flex items-start gap-4">
              <Phone size={20} className="text-cyan shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-offwhite/45 uppercase tracking-wide">
                  Phone
                </p>
                <p className="mt-1 text-sm text-offwhite/80">
                  +230 XXX XXXX
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="glass-card rounded-card p-6 flex items-start gap-4">
              <Mail size={20} className="text-cyan shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-offwhite/45 uppercase tracking-wide">
                  Email
                </p>
                <p className="mt-1 text-sm text-offwhite/80">
                  hello@tropicalconsultingltd.com
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="glass-card rounded-card overflow-hidden aspect-[4/3]">
              <iframe
                title="Map — Mauritius"
                src="https://www.google.com/maps?q=Mauritius&output=embed"
                className="w-full h-full grayscale-[30%] opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
