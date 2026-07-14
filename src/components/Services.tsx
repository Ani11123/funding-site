import Image from "next/image";
import { businessFinanceProducts } from "@/data/businessFinanceData";

export default function Services() {
  return (
    <section
      id="business-finance"
      className="py-20 lg:py-28 bg-[#F4F5F7]"
      style={{ scrollMarginTop: "160px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Editorial header ── */}
        <div className="lg:flex lg:items-stretch lg:gap-14 xl:gap-16 mb-16 lg:mb-20">

          {/* Left — heading, copy and advisor callout */}
          <div className="lg:w-[54%] mb-10 lg:mb-0">
            <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
              Business Finance
              <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2E59] mb-4 leading-tight tracking-tight">
              Choose the funding route<br className="hidden sm:block" /> that fits your business.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
              Every business has different needs. We work with you to understand your situation, then match you to the funding route that makes the most commercial sense.
            </p>

            {/* Advisor callout — orange left-border block */}
            <div className="border-l-[3px] border-[#C76A1B] bg-white rounded-r-xl pl-5 pr-5 py-5 shadow-sm">
              <p className="text-[#333333] text-sm leading-[1.75]">
                <span className="text-[#0B2E59] font-semibold">Not sure which option fits?</span>{" "}
                Our advisors take the time to understand your business stage, cashflow and growth plans, then guide you to the right solution.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#C76A1B] text-sm font-bold mt-4 hover:gap-3 transition-all duration-200"
              >
                Speak to an Advisor
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — premium image, height matches left column via items-stretch */}
          <div className="lg:w-[46%]">
            {/* TODO: Replace with client-approved licensed image — target path: public/assets/images/sections/business-finance.jpg */}
            <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.11)]">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                alt="Professional advisor reviewing business finance options with a UK business owner"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 46vw, 100vw"
                quality={80}
              />
              {/* Advisor badge — bottom-left overlay */}
              <div className="absolute bottom-4 left-4 bg-[#082347]/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-[#C76A1B] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[11px] font-bold leading-tight">Expert Guidance</p>
                  <p className="text-white/60 text-[10px] leading-tight mt-0.5">Advisor-led funding advice</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Card grid sub-label ── */}
        <p className="inline-flex items-center gap-2 text-[#C76A1B] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
          <span className="w-3 h-[2px] bg-[#C76A1B] rounded" />
          Our Business Finance Solutions
        </p>

        {/* ── Service cards — 3-column grid, balanced 2 rows of 3 for 6 active products ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {businessFinanceProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.slug}
                className="group bg-white border border-slate-200/80 hover:border-[#C76A1B]/30 rounded-2xl p-6 lg:p-7 card-lift"
              >
                <div className="w-12 h-12 bg-[#0B2E59] rounded-xl flex items-center justify-center text-white mb-5 shrink-0 group-hover:bg-[#C76A1B] transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#0B2E59] font-bold text-base mb-2 leading-snug">{product.navTitle}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{product.cardDescription}</p>
                <a
                  href={product.route}
                  className="inline-flex items-center gap-1.5 text-[#C76A1B] text-sm font-bold group-hover:gap-3 transition-all duration-200"
                >
                  Explore now
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA block ── */}
        <div className="mt-14 sm:mt-16 bg-white rounded-2xl border border-slate-200/60 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="max-w-lg">
            <h3 className="text-[#0B2E59] font-bold text-lg sm:text-xl mb-2">Ready to explore your options?</h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Speak to one of our advisors and get clear, honest guidance on the funding route that fits your business, with no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-sm whitespace-nowrap"
            >
              Speak to an Advisor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-[#0B2E59]/20 hover:border-[#C76A1B]/40 text-[#0B2E59] hover:text-[#C76A1B] font-semibold text-sm px-7 py-3.5 rounded-md transition-all duration-200 whitespace-nowrap"
            >
              Request Funding
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
