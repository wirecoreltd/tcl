"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Life at TCL", href: "/life-at-tcl" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/85 backdrop-blur-md border-b border-navy-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        <a href="/" className="flex items-center gap-2 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan" />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight text-offwhite">
            Tropical Consulting
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-offwhite/75 hover:text-offwhite transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="/careers"
            className="inline-flex items-center rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:bg-electric-light transition-colors"
          >
            Join Our Team
          </a>
        </div>

        <button
          className="lg:hidden text-offwhite"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-navy-line px-6 py-6 flex flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-offwhite/85"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/careers"
            className="inline-flex items-center justify-center rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white"
          >
            Join Our Team
          </a>
        </div>
      )}
    </header>
  );
}
