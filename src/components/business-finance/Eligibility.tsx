import { CheckCircle2 } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { BusinessFinancePageContent } from "./types";

export default function Eligibility({ content }: { content: BusinessFinancePageContent["eligibility"] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F4F5F7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow align="center">{content.eyebrow}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2E59] mb-4 leading-tight tracking-tight max-w-2xl mx-auto">
            {content.heading}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-7 sm:p-9 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {content.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C76A1B] shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-[#333333] text-sm sm:text-[15px] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-7 pt-6 border-t border-slate-100">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}
