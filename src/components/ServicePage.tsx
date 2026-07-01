import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServicePageProps {
  title: string;
  description: string;
  category?: string;
}

export default function ServicePage({
  title,
  description,
  category = "Business Finance",
}: ServicePageProps) {
  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-[70vh] bg-[#F4F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
            {category}
            <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] leading-tight mb-5">
            {title}
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-3 max-w-lg mx-auto">
            {description}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            {/* TODO: Full page content pending from client. Replace this placeholder before launch. */}
            Full details about this product are coming soon. In the meantime, speak to one of our advisors for personal guidance tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C76A1B] hover:bg-[#a85918] text-white font-bold px-8 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-sm text-sm"
            >
              Speak to an Advisor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-[#0B2E59]/20 hover:border-[#C76A1B]/40 text-[#0B2E59] hover:text-[#C76A1B] font-semibold px-8 py-3.5 rounded-md transition-all duration-200 text-sm"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
