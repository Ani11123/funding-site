"use client";

import { useState, useEffect } from "react";
import LogoMark from "@/components/LogoMark";

const navLinks = [
  { label: "Funding Options", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] sm:h-[76px] lg:h-[96px]">

          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 hover:opacity-85 transition-opacity duration-200">
            <LogoMark mode="light" className="h-[44px] sm:h-[52px] lg:h-[72px]" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0B2E59] group transition-colors duration-150"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#C76A1B] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              Speak to Advisor
            </a>
          </div>

          {/* Mobile — CTA + hamburger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="#contact"
              className="bg-[#C76A1B] hover:bg-[#a85918] text-white font-semibold text-xs px-3.5 py-2 rounded-md transition-colors duration-150"
            >
              Speak to Advisor
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 text-[#0B2E59]"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3.5 text-sm font-medium text-slate-700 hover:text-[#0B2E59] hover:bg-slate-50 rounded transition-colors border-b border-slate-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
