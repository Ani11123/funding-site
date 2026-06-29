export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background — dark image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80'), linear-gradient(135deg, #081F3F 0%, #0a2647 100%)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#081F3F]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-5">
          Not Sure Where to Start?
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          Let&apos;s Find the Right Funding for Your Business
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Talk to our funding experts today. It&apos;s free, confidential and with no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+443301234567"
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49e2a] text-[#081F3F] font-bold px-8 py-4 rounded-md transition-all duration-200 text-sm shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Speak to an Advisor
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-md transition-all duration-200 text-sm w-full sm:w-auto justify-center hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Request a Callback
          </a>
        </div>
      </div>
    </section>
  );
}
