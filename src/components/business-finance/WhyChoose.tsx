import Eyebrow from "./Eyebrow";
import type { BusinessFinancePageContent } from "./types";

/**
 * Simplified, service-page variant of the homepage WhyChooseUs section.
 * Same visual language (dark navy, glass tiles, orange accents) but
 * fewer tiles and no pull quote — keeps sub-pages lighter than the homepage.
 */
export default function WhyChoose({ content }: { content: BusinessFinancePageContent["whyChoose"] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0B2E59] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C76A1B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(199,106,27,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14">
          <Eyebrow align="center">{content.eyebrow}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white mb-4 leading-tight tracking-tight max-w-2xl mx-auto">
            {content.heading}
          </h2>
          <p className="text-slate-300/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white/[0.09] hover:bg-white/[0.13] backdrop-blur-sm border border-white/20 hover:border-[#C76A1B]/40 rounded-xl p-7 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#C76A1B]/[0.22] border border-[#C76A1B]/40 rounded-xl flex items-center justify-center text-[#C76A1B] mb-5 group-hover:bg-[#C76A1B]/30 transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{item.title}</h3>
                <p className="text-slate-200/90 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            Speak to an Advisor
          </a>
          <p className="text-slate-400 text-sm">Free consultation. No obligation. No hidden fees.</p>
        </div>
      </div>
    </section>
  );
}
