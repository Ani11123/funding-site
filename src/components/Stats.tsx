const stats = [
  { value: "£150M+", label: "Funding Arranged" },
  { value: "500+", label: "UK Businesses Helped" },
  { value: "24 hrs", label: "Average Decision Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const logos = ["HSBC", "Lloyds", "NatWest", "Barclays", "Shawbrook", "Funding Circle"];

export default function Stats() {
  return (
    <section className="bg-[#F8FAFC] py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[#081F3F]">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lender logos */}
        <div className="border-t border-slate-200 pt-10">
          <p className="text-center text-slate-400 text-xs font-semibold tracking-widest uppercase mb-6">
            Connected to the UK&apos;s leading lenders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-slate-400 font-bold text-sm sm:text-base tracking-wider opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
