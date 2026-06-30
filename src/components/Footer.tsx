import LogoMark from "@/components/LogoMark";

const fundingLinks = [
  { label: "Business Loans", href: "#services" },
  { label: "Asset Finance", href: "#services" },
  { label: "Invoice Finance", href: "#services" },
  { label: "Merchant Cash Advance", href: "#services" },
  { label: "Secured Business Loans", href: "#services" },
  { label: "Working Capital", href: "#services" },
];

const companyLinks = [
  { label: "Funding Options", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why Nexora Funding Limited", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#082347]">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">

          {/* Col 1 — Brand + company summary */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <LogoMark mode="dark" className="w-[155px] sm:w-[175px] lg:w-[200px] h-auto" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Independent business funding advisors helping UK SMEs access the right finance. We work alongside you — from initial enquiry through to funds in your account.
            </p>

            {/* Contact placeholders */}
            {/* TODO: Replace with client's final phone number and email address */}
            <div className="space-y-2.5">
              <a
                href="tel:+440000000000"
                className="flex items-center gap-2.5 text-slate-400 hover:text-[#C76A1B] text-sm transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-[#C76A1B]/60 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0000 000 0000
              </a>
              <a
                href="mailto:hello@nexorafunding.co.uk"
                className="flex items-center gap-2.5 text-slate-400 hover:text-[#C76A1B] text-sm transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-[#C76A1B]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@nexorafunding.co.uk
              </a>
            </div>
          </div>

          {/* Col 2 — Funding options */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Funding Options</h3>
            <ul className="space-y-2.5">
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
            <h3 className="text-white font-semibold text-sm mb-5">Company</h3>
            <ul className="space-y-2.5">
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

          {/* Col 4 — Stay Informed + Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Stay Informed</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Get funding guides, market updates and practical advice for UK business owners.
            </p>
            {/* Newsletter link — no form. TODO: Replace # with client's newsletter signup URL (Mailchimp etc.) */}
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
            {/* TODO: Replace # hrefs with client's social media URLs */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
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
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nexora Funding Limited. Registered in England &amp; Wales. All rights reserved.</p>
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
