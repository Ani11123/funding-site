import { socialLinks } from "@/data/socialLinks";

export default function TopBar() {
  return (
    // Sticky so it stays visible on scroll — z-[60] ensures it sits above the main header (z-50)
    <div className="sticky top-0 z-[60] bg-[#082347] text-slate-400 text-xs border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">

          {/* Left — Trustpilot reference */}
          {/* TODO: Replace # href with client's actual Trustpilot profile URL */}
          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="See our reviews on Trustpilot"
          >
            <svg className="w-3.5 h-3.5 text-[#00B67A] shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
            </svg>
            <span className="hidden sm:inline text-slate-400 text-xs">See our reviews on</span>
            <span className="text-[#00B67A] font-semibold text-xs tracking-wide">Trustpilot</span>
          </a>

          {/* Right — social media icons, driven by the shared socialLinks config */}
          <div className="flex items-center gap-3.5">
            {socialLinks.map(({ label, href, path }) => {
              const isExternal = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-slate-500 hover:text-[#C76A1B] transition-colors duration-150"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
