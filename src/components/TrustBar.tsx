const items = [
  {
    label: "Funding Range",
    value: "£10,000 – £5,000,000",
    description: "Flexible business finance at every stage of your growth.",
  },
  {
    label: "Multiple Solutions",
    value: "Tailored to You",
    description: "The right product matched to your goals and circumstances.",
  },
  {
    label: "Response Time",
    value: "Same-Day Callback",
    description: "Every enquiry receives a personal response the same day.",
  },
  {
    label: "UK Coverage",
    value: "All Industries",
    description: "Serving businesses of every size, across the whole of the UK.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Editorial positioning statement */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
          <span className="block w-8 h-[2px] bg-[#C76A1B] mx-auto mb-7" />
          <h2 className="text-[#0B2E59] text-2xl sm:text-[28px] font-bold leading-[1.35] tracking-tight mb-4">
            Independent advisors.
            <br />
            Working for your business.
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.75]">
            We find the right funding for your situation and guide you clearly through every step of the process.
          </p>
        </div>

        {/* Trust signals — open typographic grid, no card containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-9 border-t border-slate-100 pt-12 sm:pt-14">
          {items.map((item, i) => (
            <div key={i}>
              <span className="block w-6 h-[2px] bg-[#C76A1B] mb-4" />
              <p className="text-[#C76A1B] text-[10px] font-bold tracking-[0.2em] uppercase mb-2.5">
                {item.label}
              </p>
              <h3 className="text-[#0B2E59] font-bold text-lg sm:text-xl leading-snug mb-2.5">
                {item.value}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
