import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import Footer from "@/components/Footer";
import ScrollToTop from "./ScrollToTop";

/**
 * Shared layout for the legal policy pages (Terms and Conditions, Privacy &
 * Cookies Policy). Text is supplied by the client and lives in src/data/legal —
 * this component only handles presentation.
 *
 * Inline markup supported in text strings:
 *   **bold**        → <strong>
 *   email addresses → mailto: links
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface LegalSection {
  id: string;
  number: number;
  title: string;
  /** Optional group heading rendered above this section (e.g. "Cookies Policy"). */
  groupHeading?: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  dateLabel: string;
  date: string;
  intro?: string[];
  sections: LegalSection[];
}

const EMAIL_PATTERN = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/gi;

function renderEmails(text: string, keyPrefix: string): ReactNode[] {
  return text.split(EMAIL_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={`${keyPrefix}-${i}`}
        href={`mailto:${part}`}
        className="text-[#C76A1B] hover:text-[#a85918] underline underline-offset-2 transition-colors"
      >
        {part}
      </a>
    ) : (
      <Fragment key={`${keyPrefix}-${i}`}>{part}</Fragment>
    )
  );
}

function renderInline(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#0B2E59]">
        {renderEmails(part, `b${i}`)}
      </strong>
    ) : (
      <Fragment key={i}>{renderEmails(part, `t${i}`)}</Fragment>
    )
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "h3") {
    return (
      <h3 className="text-[#0B2E59] text-base font-bold pt-2">{block.text}</h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="space-y-2 pl-1">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-[#C76A1B] shrink-0" />
            <span>{renderInline(item)}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{renderInline(block.text)}</p>
  );
}

export default function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <ScrollToTop />

      {/* Logo-only header — same sizing as the site Header, links home */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-[84px] sm:h-[96px] lg:h-[108px]">
            <Link
              href="/"
              aria-label="Nexora Funding Limited — home"
              className="flex items-center shrink-0 hover:opacity-85 transition-opacity duration-200"
            >
              <LogoMark mode="light" className="w-[130px] sm:w-[150px] lg:w-[170px] h-auto" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Title band — navy gradient and stripe texture consistent with page heroes */}
        <section className="relative overflow-hidden bg-[#0B2E59]">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #0B2E59 0%, #082347 60%, #061830 100%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #C76A1B 0px, #C76A1B 1px, transparent 1px, transparent 60px)",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            <p className="text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Legal
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              {doc.title}
            </h1>
            <p className="text-white/75 text-sm sm:text-base">
              {doc.dateLabel}: <span className="text-white font-semibold">{doc.date}</span>
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {doc.intro && (
              <div className="space-y-4 mb-10">
                {doc.intro.map((text, i) => (
                  <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {renderInline(text)}
                  </p>
                ))}
              </div>
            )}

            <div className="space-y-10">
              {doc.sections.map((section) => (
                <Fragment key={section.id}>
                  {section.groupHeading && (
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2E59] tracking-tight pt-6 border-t border-slate-200">
                      {section.groupHeading}
                    </h2>
                  )}
                  <section id={section.id} className="scroll-mt-40 lg:scroll-mt-48">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0B2E59] leading-tight tracking-tight mb-4">
                      <span className="text-[#C76A1B] mr-2">{section.number}.</span>
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                      ))}
                    </div>
                  </section>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
