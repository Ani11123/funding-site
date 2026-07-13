import Eyebrow from "./Eyebrow";
import type { BusinessFinancePageContent } from "./types";

export default function LoanTypes({ content }: { content: BusinessFinancePageContent["loanTypes"] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14">
          <Eyebrow align="center">{content.eyebrow}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2E59] mb-4 leading-tight tracking-tight max-w-2xl mx-auto">
            {content.heading}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.items.map((item) => (
            <div
              key={item.title}
              className="bg-[#F4F5F7] border border-slate-200/80 hover:border-[#C76A1B]/30 rounded-2xl p-7 card-lift"
            >
              <h3 className="text-[#0B2E59] font-bold text-base sm:text-lg mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
