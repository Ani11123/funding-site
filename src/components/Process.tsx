const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Tell Us Your Need",
    desc: "Share your funding requirement, business type and goals. Our team listens — no automated forms, no jargon.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Advisor Assessment",
    desc: "A dedicated funding specialist reviews your profile and identifies the most suitable options from our lender panel.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Matched Solutions",
    desc: "We present tailored funding routes that align with your cashflow, sector and timeline — clearly explained.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Funding Secured",
    desc: "Move forward with confidence. We guide you through every step until the funding reaches your account.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
            How It Works
            <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2E59] mb-3 leading-tight">
            Four Clear Steps to Your Funding
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We handle the complexity so you can focus on running your business.
          </p>
        </div>

        {/* Step cards — 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="relative bg-[#F4F5F7] border border-slate-200/80 rounded-2xl p-7 group card-lift"
            >
              {/* Connector line — hidden on last card, visible on desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[3.25rem] left-[calc(100%+1px)] w-6 h-[2px] bg-[#C76A1B]/30 z-10" />
              )}

              {/* Step number — top right */}
              <span className="absolute top-5 right-5 text-[#0B2E59]/10 font-extrabold text-4xl leading-none select-none group-hover:text-[#C76A1B]/15 transition-colors duration-300">
                {step.num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 bg-[#0B2E59] rounded-xl flex items-center justify-center text-white mb-5 group-hover:bg-[#C76A1B] transition-colors duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-[#0B2E59] font-bold text-base mb-2.5 leading-snug">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>

              {/* Bottom accent */}
              <div className="mt-6 w-8 h-[3px] bg-[#C76A1B]/40 rounded group-hover:bg-[#C76A1B] group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0B2E59] hover:bg-[#082347] text-white font-semibold text-sm px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Start Your Journey
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
