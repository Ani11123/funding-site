"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

type FormData = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  fundingType: string;
  amount: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  fundingType: "",
  amount: "",
  message: "",
};

const fundingTypes = [
  "Business Loan",
  "Invoice Finance",
  "Asset Finance",
  "Merchant Cash Advance",
  "Secured Business Loan",
  "Working Capital",
  "Not sure yet, need advice",
];

const amounts = [
  "Under £25,000",
  "£25,000 – £100,000",
  "£100,000 – £250,000",
  "£250,000 – £500,000",
  "Over £500,000",
];

const inputClass =
  "w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C76A1B]/30 focus:border-[#C76A1B] transition-all bg-[#F4F5F7]";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Phase 1: frontend only — Phase 2 will add backend/email integration
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B2E59] relative overflow-hidden">

      {/* Subtle background image — professional advisory atmosphere */}
      {/* TODO: Replace with final licensed background image when available */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.07 }}>
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #C76A1B 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Left — advisory info panel, flex column so map fills remaining height */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white mb-4 leading-tight tracking-tight">
              Speak with a Commercial Finance Advisor.
            </h2>
            <p className="text-slate-300/80 leading-relaxed mb-6 text-base max-w-md">
              Tell us what you need and we&apos;ll match you with the right funding solution. No obligation. No jargon.
            </p>

            {/* Compact contact details card */}
            <div className="border border-white/[0.12] rounded-xl overflow-hidden mb-5">

              {/* Office — two-line condensed address */}
              <div className="px-5 py-3.5 border-b border-white/[0.08]">
                <p className="text-[#C76A1B] text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">Office</p>
                <address className="text-slate-300 text-sm leading-relaxed not-italic">
                  Office 19768, 182–184 High Street North<br />
                  East Ham, London E6 2JA
                </address>
              </div>

              {/* Phone + Email — side by side */}
              <div className="grid grid-cols-2 divide-x divide-white/[0.08]">
                <div className="px-5 py-3.5">
                  <p className="text-[#C76A1B] text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">Phone</p>
                  <a
                    href="tel:+442034323492"
                    className="text-slate-300 hover:text-[#C76A1B] text-sm font-medium transition-colors duration-150 whitespace-nowrap"
                  >
                    020 3432 3492
                  </a>
                </div>
                <div className="px-5 py-3.5">
                  <p className="text-[#C76A1B] text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5">Email</p>
                  <a
                    href="mailto:office@nexorafunding.co.uk"
                    className="text-slate-300 hover:text-[#C76A1B] text-sm font-medium transition-colors duration-150 break-all"
                  >
                    office@nexorafunding.co.uk
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps embed — flex-1 fills remaining column height to match form */}
            <div className="flex-1 min-h-[180px] rounded-xl overflow-hidden shadow-md border border-white/10">
              <iframe
                src="https://maps.google.com/maps?q=182-184+High+Street+North%2C+East+Ham%2C+London+E6+2JA&t=m&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nexora Funding Limited — Office Location, East Ham, London"
              />
            </div>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#4F6D8A]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#4F6D8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[#0B2E59] font-bold text-xl mb-2">Enquiry received</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Thank you, {form.name.split(" ")[0]}. A member of our team will be in touch within one working day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-[#0B2E59] font-bold text-xl mb-1">Free Funding Enquiry</h3>
                <p className="text-slate-400 text-sm mb-6">No obligation. No spam. Just honest advice.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Your name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Business name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={form.businessName}
                        onChange={handleChange}
                        required
                        placeholder="Smith &amp; Co Ltd"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Phone number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="07700 900000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@smithco.co.uk"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Funding type
                      </label>
                      <select
                        name="fundingType"
                        value={form.fundingType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select type…</option>
                        {fundingTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Funding amount
                      </label>
                      <select
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select range…</option>
                        {amounts.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                      Tell us more (optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="What the funding is for, your industry, or how quickly you need it…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C76A1B] hover:bg-[#a85918] disabled:opacity-70 text-white font-bold py-3.5 rounded-md transition-all duration-200 text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Submit Free Enquiry"
                    )}
                  </button>

                  <p className="text-center text-slate-400 text-xs leading-relaxed">
                    By submitting, you agree to be contacted regarding your enquiry. We respect your privacy and will never share your details.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
