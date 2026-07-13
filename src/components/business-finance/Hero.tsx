import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import type { BusinessFinancePageContent } from "./types";

export default function Hero({ content }: { content: BusinessFinancePageContent["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={content.image}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 42%" }}
          priority
          quality={85}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,46,89,0.55) 0%, rgba(8,35,71,0.72) 45%, rgba(6,24,48,0.85) 100%)",
          }}
        />
      </div>

      {/* Subtle diagonal stripe pattern, consistent with homepage Hero */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C76A1B 0px, #C76A1B 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-20 sm:py-24 lg:py-28">
          <div className="animate-fade-in max-w-2xl">
            <p className="inline-flex items-center gap-3 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-6 h-[2px] bg-[#C76A1B] rounded" />
              {content.eyebrow}
            </p>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 6px rgba(0,0,0,0.30)" }}
            >
              {content.heading}
            </h1>

            <p
              className="text-white/85 text-base sm:text-lg leading-[1.7] mb-10 max-w-xl"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.40)" }}
            >
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-bold px-8 py-3.5 rounded-md transition-all duration-200 text-sm shadow-lg hover:-translate-y-0.5"
              >
                {content.primaryCtaLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-[#C76A1B]/60 text-white hover:text-[#C76A1B] font-semibold px-8 py-3.5 rounded-md transition-all duration-200 text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                {content.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
