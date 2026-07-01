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
  "Not Sure — Need Advice",
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
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — info panel */}
          <div>
            <p className="inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Let&apos;s find the right funding for your business.
            </h2>
            <p className="text-slate-300/80 leading-relaxed mb-10 text-base max-w-md">
              Fill in the form and a dedicated advisor will be in touch within one working day. No pressure. No jargon. Just straight-talking advice.
            </p>

            {/* Contact options */}
            {/* TODO: Replace placeholders with client's final phone/WhatsApp/email */}
            <div className="space-y-5">
              <a href="tel:+440000000000" className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-[#C76A1B]/10 border border-[#C76A1B]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C76A1B]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#C76A1B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Call us directly</p>
                  <p className="text-[#C76A1B] font-bold">0000 000 0000</p>
                  <p className="text-slate-400 text-xs mt-0.5">Mon–Fri, 9am–6pm</p>
                </div>
              </a>

              <a
                href="https://wa.me/440000000000"
                className="flex items-start gap-4 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 bg-[#C76A1B]/10 border border-[#C76A1B]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C76A1B]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#C76A1B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp us</p>
                  <p className="text-[#C76A1B] font-bold">Message an Advisor</p>
                  <p className="text-slate-400 text-xs mt-0.5">Typically replies within the hour</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C76A1B]/10 border border-[#C76A1B]/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#C76A1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Email us</p>
                  <p className="text-[#C76A1B] font-bold">office@nexorafunding.co.uk</p>
                  <p className="text-slate-400 text-xs mt-0.5">We respond within one working day</p>
                </div>
              </div>
            </div>

            {/* Premium UK location placeholder card */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">

              {/* Map placeholder area */}
              {/*
                TODO: Replace this entire div with a Google Maps embed when the office address is confirmed:
                <iframe
                  src="https://www.google.com/maps/embed?pb=EMBED_URL_HERE"
                  width="100%" height="160" style={{ border: 0 }} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                TODO: Office address: [To be confirmed by client]
                TODO: Geo coordinates: [latitude], [longitude]
              */}
              <div className="relative h-40 bg-[#061830] flex flex-col items-center justify-center overflow-hidden">
                {/* Subtle map grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.055] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(199,106,27,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(199,106,27,0.6) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />
                {/* Location rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full border border-[#C76A1B]/10" />
                  <div className="absolute inset-[18px] rounded-full border border-[#C76A1B]/18" />
                  <div className="absolute inset-[34px] rounded-full border border-[#C76A1B]/28" />
                  {/* Pin dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#C76A1B] rounded-full shadow-[0_0_14px_rgba(199,106,27,0.7)]" />
                </div>
                <p className="relative z-10 mt-14 text-slate-500/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                  United Kingdom
                </p>
              </div>

              {/* Card body */}
              <div className="p-5 bg-white/[0.04]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#C76A1B]/15 border border-[#C76A1B]/25 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#C76A1B]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Supporting businesses across the UK</p>
                    {/* TODO: Replace with confirmed office address when provided by client */}
                    <p className="text-[#C76A1B]/70 text-xs font-medium mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C76A1B]/50 animate-pulse shrink-0" />
                      Office location coming soon
                    </p>
                    <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                      London · Manchester · Birmingham · Edinburgh · Bristol · and beyond
                    </p>
                  </div>
                </div>
              </div>

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
                    className="w-full bg-[#C76A1B] hover:bg-[#a85918] disabled:opacity-70 text-white font-bold py-3.5 rounded-lg transition-all duration-200 text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm"
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
