export default function LocationSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
            Office Location
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2E59] leading-tight mb-3">
            Find Our Office
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg">
            Our team is available Mon–Fri, 9am–6pm. Get in touch before visiting.
          </p>
        </div>

        {/* Two-column layout: map left, details right */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">

          {/* Map placeholder */}
          {/*
            TODO: Replace this entire block with a Google Maps embed once the office address is confirmed.

            Step 1 — Get the embed URL:
              a) Open Google Maps and search for the office address
              b) Click Share → Embed a map → Copy HTML
              c) Extract the src URL from the <iframe> tag

            Step 2 — Replace with:
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[420px] lg:min-h-[480px]">
                <iframe
                  src="PASTE_EMBED_URL_HERE"
                  width="100%"
                  height="480"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nexora Funding Limited — office location"
                />
              </div>

            TODO: Office address — to be confirmed by client
            TODO: Geo coordinates — [latitude], [longitude]
          */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[360px] sm:min-h-[420px] flex flex-col">

            {/* Subtle map-tile grid background */}
            <div
              className="absolute inset-0 bg-slate-50"
              style={{
                backgroundImage:
                  "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            {/* Road-like horizontal/vertical stripes at lower opacity */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(#cbd5e1 2px, transparent 2px), linear-gradient(90deg, #cbd5e1 2px, transparent 2px)",
                backgroundSize: "132px 132px",
              }}
            />

            {/* Central placeholder content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-8 py-10">
              <div className="w-14 h-14 bg-[#0B2E59]/[0.07] border border-[#0B2E59]/[0.12] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0B2E59]/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <p className="text-[#0B2E59]/70 font-semibold text-sm mb-1">Office Location</p>
              <p className="text-slate-400 text-xs max-w-[200px]">Address to be confirmed — map will appear here</p>
            </div>

            {/* Bottom TODO strip */}
            <div className="relative z-10 bg-slate-100/90 border-t border-slate-200 px-5 py-2.5 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-400 text-[11px]">TODO: Replace with Google Maps embed when office address is confirmed</p>
            </div>

          </div>

          {/* Office details column */}
          <div className="space-y-4">

            {/* Address card */}
            {/* TODO: Replace placeholder text with confirmed office address */}
            <div className="bg-[#F4F5F7] rounded-xl border border-slate-200/80 p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#0B2E59]/[0.07] border border-[#0B2E59]/[0.10] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#0B2E59]/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#0B2E59] font-semibold text-sm mb-2">Office Address</h4>
                  {/* TODO: Replace with confirmed office address when provided by client */}
                  <p className="text-slate-400 text-sm italic leading-relaxed">
                    Address to be confirmed
                  </p>
                </div>
              </div>
            </div>

            {/* Office hours card */}
            {/* TODO: Confirm actual office hours with client before publishing */}
            <div className="bg-[#F4F5F7] rounded-xl border border-slate-200/80 p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#0B2E59]/[0.07] border border-[#0B2E59]/[0.10] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#0B2E59]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#0B2E59] font-semibold text-sm mb-2">Office Hours</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-6">
                      <span className="text-slate-500 text-sm">Mon – Fri</span>
                      <span className="text-[#0B2E59] text-sm font-medium">9:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-slate-400 text-sm">Saturday</span>
                      <span className="text-slate-400 text-sm">Closed</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-slate-400 text-sm">Sunday</span>
                      <span className="text-slate-400 text-sm">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions card */}
            {/* TODO: Add transport/parking/directions details once office address is confirmed */}
            <div className="bg-[#F4F5F7] rounded-xl border border-slate-200/80 p-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#0B2E59]/[0.07] border border-[#0B2E59]/[0.10] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#0B2E59]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#0B2E59] font-semibold text-sm mb-2">Getting Here</h4>
                  {/* TODO: Add transport and parking details once office address is confirmed */}
                  <p className="text-slate-400 text-sm italic">Directions to be added</p>
                </div>
              </div>
            </div>

            {/* CTA — speak to an advisor before visiting */}
            <a
              href="#contact"
              className="flex items-center justify-between gap-3 bg-[#0B2E59] hover:bg-[#082347] rounded-xl px-5 py-4 transition-colors duration-200 group"
            >
              <div>
                <p className="text-white font-semibold text-sm">Prefer to speak first?</p>
                <p className="text-white/60 text-xs mt-0.5">Contact us before visiting</p>
              </div>
              <svg className="w-4 h-4 text-[#C76A1B] shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
