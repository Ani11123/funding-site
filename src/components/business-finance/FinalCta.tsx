import { ArrowRight, PhoneCall } from "lucide-react";
import type { BusinessFinancePageContent } from "./types";

export default function FinalCta({ content }: { content: BusinessFinancePageContent["finalCta"] }) {
  return (
    <section className="py-20 lg:py-24 bg-[#082347]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-5">
          <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
          {content.eyebrow}
          <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-5">
          {content.heading}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#contact"
            className="flex items-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-bold px-8 py-4 rounded-md transition-all duration-200 text-sm shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <PhoneCall className="w-4 h-4" />
            Speak to a Commercial Finance Advisor
          </a>
          <a
            href="/#contact"
            className="flex items-center gap-2 border border-white/25 hover:border-[#C76A1B]/60 text-white hover:text-[#C76A1B] font-semibold px-8 py-4 rounded-md transition-all duration-200 text-sm w-full sm:w-auto justify-center"
          >
            Request a Callback
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
