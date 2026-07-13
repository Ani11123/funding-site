import { Lightbulb } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { BusinessFinancePageContent } from "./types";

export default function Intro({ content }: { content: BusinessFinancePageContent["intro"] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B2E59] leading-tight tracking-tight mb-6">
          {content.heading}
        </h2>

        <div className="space-y-5">
          {content.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Adviser tip callout — free value add, no fabricated stats */}
        <div className="mt-8 flex gap-4 border-l-[3px] border-[#C76A1B] bg-[#F4F5F7] rounded-r-xl pl-5 pr-5 py-5">
          <Lightbulb className="w-5 h-5 text-[#C76A1B] shrink-0 mt-0.5" />
          <p className="text-[#333333] text-sm leading-[1.75]">
            <span className="text-[#0B2E59] font-semibold">Adviser tip.</span>{" "}
            Lenders assess affordability differently depending on your sector and trading history.
            A short conversation with an adviser upfront can save time by pointing you straight
            towards lenders likely to say yes.
          </p>
        </div>
      </div>
    </section>
  );
}
