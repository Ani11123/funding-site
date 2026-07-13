import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ currentLabel }: { currentLabel: string }) {
  const items = [
    { label: "Home", href: "/" },
    { label: "Business Finance", href: "/#business-finance" },
    { label: currentLabel, href: undefined },
  ];

  return (
    <nav aria-label="Breadcrumb" className="bg-[#F4F5F7] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-[13px]">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-slate-500 hover:text-[#C76A1B] font-medium transition-colors duration-150"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-[#0B2E59] font-semibold" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
