import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "Multiple Funding Options",
    desc: "Access a wide range of business finance products through a single conversation.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Real Funding Expertise",
    desc: "Our advisors bring genuine commercial finance experience — not scripts.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast, Confidential Process",
    desc: "We respect your time and your privacy at every step of the journey.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Tailored to Your Business",
    desc: "Every recommendation is built around your sector, stage and specific requirements.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Guidance at Every Step",
    desc: "We stay involved from initial enquiry through to funds landing in your account.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "No Commitment Required",
    desc: "Speak to us for free. No obligation, no pressure — just honest, straight-talking advice.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0B2E59] relative overflow-hidden">

      {/* Subtle background image — adds depth and texture to the dark section */}
      {/* TODO: Replace with final licensed background image when available */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.06 }}>
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C76A1B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Diagonal highlight */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(176,141,87,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
          <div>
            <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-5">
              More Than Funding.
              <br />
              <span className="text-[#C76A1B]">A Partner You Can Trust.</span>
            </h2>
            <p className="text-slate-300/80 text-base leading-relaxed max-w-md">
              We don&apos;t just match you with a lender. We work alongside you — understanding your business, your ambitions and the challenges you face.
            </p>
          </div>

          {/* Right — pull quote */}
          <div className="hidden lg:flex flex-col justify-center">
            <blockquote className="border-l-2 border-[#C76A1B]/40 pl-6">
              <p className="text-white/80 text-lg leading-relaxed italic font-light">
                &ldquo;We believe every UK business deserves access to the right funding — not just whatever a bank will approve.&rdquo;
              </p>
              <footer className="mt-4 text-[#C76A1B] text-sm font-semibold">Nexora Funding Limited Advisory Team</footer>
            </blockquote>
          </div>
        </div>

        {/* Feature tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/10 hover:bg-white/[0.15] border border-white/[0.15] hover:border-[#C76A1B]/30 rounded-xl p-6 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-[#C76A1B]/20 border border-[#C76A1B]/30 rounded-lg flex items-center justify-center text-[#C76A1B] mb-4 group-hover:bg-[#C76A1B]/30 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">{feature.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Speak to an Advisor
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-slate-400 text-sm">Free consultation. No obligation. No hidden fees.</p>
        </div>

      </div>
    </section>
  );
}
