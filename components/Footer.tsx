import { Linkedin, Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-navy-line bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Tropical Consulting Ltd logo" className="h-8 w-8" />
            <span className="font-display font-semibold text-lg text-offwhite">
              Tropical Consulting
            </span>
          </div>
          <p className="mt-4 text-sm text-offwhite/55 leading-relaxed max-w-xs">
            Operational excellence. Powered by people. Available 24/7.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-offwhite/50 hover:text-cyan transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-offwhite/50 hover:text-cyan transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="text-offwhite/50 hover:text-cyan transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-offwhite/45">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="/about" className="text-offwhite/70 hover:text-offwhite transition-colors">About</a></li>
            <li><a href="/services" className="text-offwhite/70 hover:text-offwhite transition-colors">Services</a></li>
            <li><a href="/life-at-tcl" className="text-offwhite/70 hover:text-offwhite transition-colors">Life at TCL</a></li>
            <li><a href="/careers" className="text-offwhite/70 hover:text-offwhite transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-offwhite/45">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><span className="text-offwhite/70">Customer Support</span></li>
            <li><span className="text-offwhite/70">Operations Management</span></li>
            <li><span className="text-offwhite/70">Fraud & Risk</span></li>
            <li><span className="text-offwhite/70">Business Intelligence</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-offwhite/45">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-offwhite/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-cyan shrink-0" />
              Mauritius
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-cyan shrink-0" />
              +230 XXX XXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-cyan shrink-0" />
              hello@tropicalconsultingltd.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-line py-6 text-center">
        <p className="text-xs text-offwhite/40">
          © 2020–{new Date().getFullYear()} Tropical Consulting Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
