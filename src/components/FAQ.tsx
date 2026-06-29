"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does it cost to use Nexora Funding Limited?",
    a: "Our initial advice and market search is completely free of charge. We are paid a commission by the lender only when a deal completes — meaning you never pay us directly. This is standard practice in business finance broking.",
  },
  {
    q: "Will applying affect my credit score?",
    a: "No. Our initial enquiry and market search uses a soft credit check, which does not appear on your credit file. A hard search only occurs when you formally accept an offer and choose to proceed — and we will always let you know before that happens.",
  },
  {
    q: "How quickly can I get funding?",
    a: "It depends on the product and lender, but many of our clients receive an initial offer within 24 hours. Unsecured loans can fund in as little as 1–3 working days. More complex products like property finance or structured growth deals typically take 2–6 weeks.",
  },
  {
    q: "My business has a poor credit history. Can you still help?",
    a: "Yes — often we can. We work with a wide range of lenders, including specialists in adverse credit. The right product depends on your circumstances, which is why we ask for a conversation first rather than an automated decision.",
  },
  {
    q: "Do I need to be an established business, or can startups apply?",
    a: "We help both. Established businesses have more lender options, but startups are not excluded. There are startup-specific products and lenders we work with — especially where the founder has personal assets or a strong business plan.",
  },
  {
    q: "What information do I need to provide?",
    a: "To get started, we just need your basic business details and a rough idea of what you're looking for. Lenders will eventually require 3–6 months of bank statements, accounts, and sometimes a business plan — but we guide you through every step.",
  },
  {
    q: "Are you regulated?",
    a: "Yes. Nexora Funding Limited is authorised and regulated by the Financial Conduct Authority (FCA). You can verify our credentials on the FCA Register. Our advisors operate under strict conduct rules to ensure your interests always come first.",
  },
  {
    q: "What if I've been declined by my bank?",
    a: "A bank decline doesn't mean you can't get funding. Banks have strict criteria and a limited product range. We access a much wider market and regularly arrange funding for businesses that have previously been turned down by high-street lenders.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">FAQs</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081F3F] mb-4">
            Questions we get asked every day
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Call us on{" "}
            <a href="tel:+443301234567" className="text-[#081F3F] font-semibold hover:text-[#D4AF37] transition-colors">
              0330 123 4567
            </a>{" "}
            and we&apos;ll answer straight away.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden hover:border-[#D4AF37]/40 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#081F3F] text-sm pr-4">{faq.q}</span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45 border-[#D4AF37] text-[#D4AF37]" : ""
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#081F3F] hover:bg-[#0a2647] text-white font-semibold px-7 py-3.5 rounded transition-colors text-sm"
          >
            Still have questions? Ask an advisor
          </a>
        </div>
      </div>
    </section>
  );
}
