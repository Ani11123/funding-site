import Image from "next/image";
import LogoMark from "@/components/LogoMark";
import { businessFinanceProducts } from "@/data/businessFinanceData";
import { socialLinks } from "@/data/socialLinks";

const fundingLinks = businessFinanceProducts.map((p) => ({ label: p.navTitle, href: p.route }));

const companyLinks = [
  { label: "Business Finance", href: "#business-finance" },
  { label: "How It Works", href: "#process" },
  { label: "Why Nexora Funding Limited", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#082347]">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-b border-white/10">

          {/* Col 1 — Brand + company summary */}
          <div>
            <div className="mb-3">
              <LogoMark mode="dark" className="w-[140px] sm:w-[155px] lg:w-[170px] h-auto" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Independent commercial finance advisors helping UK businesses access flexible funding with confidence.
              Registered in England &amp; Wales.
            </p>
          </div>

          {/* Col 2 — Business Finance links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Business Finance</h3>
            <ul className="space-y-2">
              {fundingLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#C76A1B] text-sm transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#C76A1B]/50 rounded-full shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#C76A1B] text-sm transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#C76A1B]/50 rounded-full shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Stay Informed: GDPR/ICO → Newsletter → Social */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Stay Informed</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Get funding guides, market updates and practical advice for UK business owners.
            </p>

            {/* GDPR / ICO compliance badges — trust first */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="relative h-9 w-[70px] opacity-55 hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/compliance/GDPR.png"
                    alt="GDPR Compliant"
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-600">GDPR Compliant</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="relative h-9 w-[70px] opacity-55 hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/compliance/ICO.png"
                    alt="ICO Registered"
                    fill
                    className="object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-600">ICO Registered</span>
              </div>
            </div>

            {/* Newsletter CTA — after trust signals */}
            {/* TODO: Replace # with client's newsletter signup URL (Mailchimp etc.) */}
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-[#C76A1B]/40 hover:border-[#C76A1B] text-[#C76A1B] text-sm font-semibold px-4 py-2.5 rounded-md transition-all duration-200 hover:bg-[#C76A1B]/10"
            >
              Subscribe to Newsletter
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 bg-white/5 hover:bg-[#C76A1B]/15 border border-white/10 hover:border-[#C76A1B]/30 rounded-lg flex items-center justify-center text-slate-500 hover:text-[#C76A1B] transition-all duration-150"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nexora Funding Limited. All rights reserved.</p>

          {/* Policy links */}
          <div className="flex flex-wrap items-center gap-4">
            {/* TODO: Link to real policy pages when created */}
            <a href="#" className="hover:text-[#C76A1B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C76A1B] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#C76A1B] transition-colors">Complaints</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
