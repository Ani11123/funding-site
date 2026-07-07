// TODO: Replace placeholder testimonials with real client testimonials when provided
// Each testimonial has: quote, name (or initials), role, company, and location

const testimonials = [
  {
    quote:
      "The team at Nexora Funding Limited helped us understand our options clearly and found us funding when we'd already been declined elsewhere. The whole process was straightforward and professional.",
    initials: "J.M.",
    role: "Managing Director",
    company: "Manufacturing Business",
    location: "East Midlands",
    avatarBg: "bg-[#4F6D8A]",
  },
  {
    quote:
      "From my first conversation with an advisor, I knew we were in good hands. They matched us with the right invoice finance facility quickly and the impact on our cashflow was immediate.",
    initials: "S.P.",
    role: "Director",
    company: "Logistics Company",
    location: "West Yorkshire",
    avatarBg: "bg-[#0B2E59]",
  },
  {
    quote:
      "As a retail business owner, I didn't know where to start with funding. Nexora Funding Limited guided us through the entire journey. I'd highly recommend speaking to their advisors.",
    initials: "R.C.",
    role: "Owner",
    company: "Retail Business",
    location: "Greater London",
    avatarBg: "bg-[#6b8fad]",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
            Client Feedback
            <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2E59] mb-4 leading-tight tracking-tight max-w-2xl mx-auto">
            What Business Owners Say
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We measure our success by the outcomes we deliver for the businesses we support.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/80 rounded-2xl p-7 flex flex-col card-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-[#C76A1B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Large open quote */}
              <div className="text-[#C76A1B]/25 font-serif text-6xl leading-none mb-2 select-none">&ldquo;</div>

              {/* Quote */}
              <p className="text-[#333333]/80 text-sm leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[#0B2E59] font-semibold text-sm">{t.initials}</p>
                  <p className="text-slate-400 text-xs">{t.role} · {t.company}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
