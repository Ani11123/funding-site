"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { BusinessFinancePageContent } from "./types";

export default function Faq({ content }: { content: BusinessFinancePageContent["faqs"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Eyebrow align="center">{content.eyebrow}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2E59] mb-4 leading-tight tracking-tight max-w-2xl mx-auto">
            {content.heading}
          </h2>
        </div>

        <div className="space-y-3">
          {content.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="border border-slate-200/80 hover:border-[#C76A1B]/30 rounded-xl overflow-hidden transition-colors duration-200"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#0B2E59] text-sm sm:text-[15px] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "rotate-45 border-[#C76A1B] text-[#C76A1B] bg-[#C76A1B]/10"
                        : "border-slate-300 text-slate-500"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
