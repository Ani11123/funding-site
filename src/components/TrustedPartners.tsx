import Image from "next/image";

/**
 * TrustedPartners — continuous CSS marquee of lender logos.
 *
 * To update logos: replace or add PNG files in public/assets/lenders/
 * and update the partners array below. No other code changes required.
 */
const partners = [
  { label: "365 Finance",      src: "/assets/lenders/365finance.png" },
  { label: "Capify",           src: "/assets/lenders/capify.png" },
  { label: "Elect Capital",    src: "/assets/lenders/electcapital.png" },
  { label: "Fleximize",        src: "/assets/lenders/fleximize.png" },
  { label: "Funding Circle",   src: "/assets/lenders/fundingcircle.png" },
  { label: "Bizcap",           src: "/assets/lenders/bizcap.png" },
  { label: "iwoca",            src: "/assets/lenders/iwoca.png" },
  { label: "LendingCrowd",     src: "/assets/lenders/lendingcrowd.png" },
  { label: "Lenkie",           src: "/assets/lenders/lenkie.png" },
  { label: "MCL",              src: "/assets/lenders/mcl.png" },
  { label: "Momenta Finance",  src: "/assets/lenders/momentafinance.png" },
  { label: "Swiftfund",        src: "/assets/lenders/swiftfund.png" },
  { label: "Together",         src: "/assets/lenders/together.png" },
  { label: "YouLend",          src: "/assets/lenders/youlend.png" },
];

// Doubled for seamless infinite CSS marquee (translateX -50% trick)
const track = [...partners, ...partners];

export default function TrustedPartners() {
  return (
    <section className="py-16 lg:py-20 bg-[#F4F5F7] overflow-hidden">

      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-3">
          <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
          Trusted Partners
          <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2E59] leading-tight tracking-tight max-w-2xl mx-auto">
          Our Lender &amp; Partner Network
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
          We work with a carefully selected panel of lenders and partners to find the best fit for your business.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F4F5F7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F4F5F7] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track — 55 s for 14 logos */}
        <div className="animate-marquee gap-5" style={{ animationDuration: "55s" }}>
          {track.map((partner, i) => (
            <div
              key={i}
              className="shrink-0 w-44 h-20 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center mx-2.5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="relative w-28 h-11">
                <Image
                  src={partner.src}
                  alt={partner.label}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
