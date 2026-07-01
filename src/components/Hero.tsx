import Image from "next/image";

const trustBadges = [
  {
    icon: (
      <svg className="w-4 h-4 text-[#C76A1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Trusted by UK Business Owners",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-[#C76A1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Multiple Funding Solutions",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-[#C76A1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Fast & Confidential",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "88vh" }}>

      {/* Hero background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-[-4%] animate-hero-zoom">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=85"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            priority
            quality={85}
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,46,89,0.22) 0%, rgba(8,35,71,0.42) 30%, rgba(8,35,71,0.65) 65%, rgba(6,24,48,0.75) 100%)",
          }}
        />
      </div>

      {/* Subtle diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C76A1B 0px, #C76A1B 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50vh] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, rgba(199,106,27,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Centred content vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 45%, rgba(6,24,48,0.45) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-24 lg:py-32">
          <div className="animate-fade-in text-center max-w-3xl mx-auto">

            {/* Eyebrow */}
            <p className="inline-flex items-center justify-center gap-3 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-7">
              <span className="w-6 h-[2px] bg-[#C76A1B] rounded" />
              Funding Solutions for UK Businesses
              <span className="w-6 h-[2px] bg-[#C76A1B] rounded" />
            </p>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[1.13] mb-6"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 6px rgba(0,0,0,0.30)" }}
            >
              The Right Funding.
              <br />
              The Right{" "}
              <span
                className="text-[#C76A1B]"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.70)" }}
              >
                Time.
              </span>
            </h1>

            {/* Hero tagline — updated per client */}
            <p
              className="text-white/80 text-base sm:text-lg leading-[1.7] mb-10 max-w-2xl mx-auto"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.40)" }}
            >
              Connecting UK businesses with trusted commercial finance solutions.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-bold px-9 py-4 rounded-md transition-all duration-200 text-sm shadow-lg hover:-translate-y-0.5"
              >
                Request Funding
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-white/25 hover:border-[#C76A1B]/60 text-white hover:text-[#C76A1B] font-semibold px-9 py-4 rounded-md transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Speak to an Advisor
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  {badge.icon}
                  <span className="text-slate-300 text-xs font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
