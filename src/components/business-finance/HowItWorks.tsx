import Eyebrow from "./Eyebrow";
import type { BusinessFinancePageContent } from "./types";

export default function HowItWorks({ content }: { content: BusinessFinancePageContent["howItWorks"] }) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative bg-[#F4F5F7] border border-slate-200/80 rounded-2xl p-7 group card-lift"
              >
                {index < content.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[3.25rem] left-[calc(100%+1px)] w-6 h-[2px] bg-[#C76A1B]/30 z-10" />
                )}

                <span className="absolute top-5 right-5 text-[#0B2E59]/10 font-extrabold text-4xl leading-none select-none group-hover:text-[#C76A1B]/15 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="w-12 h-12 bg-[#0B2E59] rounded-xl flex items-center justify-center text-white mb-5 group-hover:bg-[#C76A1B] transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-[#0B2E59] font-bold text-base mb-2.5 leading-snug">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>

                <div className="mt-6 w-8 h-[3px] bg-[#C76A1B]/40 rounded group-hover:bg-[#C76A1B] group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
