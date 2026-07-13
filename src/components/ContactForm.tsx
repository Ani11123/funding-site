"use client";

import { useRef, useState, type FormEvent, type FocusEvent, type ChangeEvent } from "react";
import Image from "next/image";
import {
  type ContactFormData,
  type ContactFormErrors,
  initialContactFormData,
  fieldValidators,
  fieldOrder,
  validateContactForm,
  MESSAGE_MAX_LENGTH,
} from "@/lib/contactFormValidation";
import { handleSubmitValidatedForm } from "@/lib/contactFormSubmit";

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

function fieldClass(hasError: boolean) {
  return `w-full border rounded-lg px-4 py-2.5 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all bg-[#F4F5F7] ${
    hasError
      ? "border-red-400 focus:ring-red-300/40 focus:border-red-500"
      : "border-slate-200 focus:ring-[#C76A1B]/30 focus:border-[#C76A1B]"
  }`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-start gap-1.5 text-xs text-red-600">
      <svg className="w-3.5 h-3.5 shrink-0 mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialContactFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Belt-and-braces guard against double submission (in addition to the
  // disabled submit button) — protects against rapid double-clicks/taps
  // firing before React re-renders the disabled state.
  const isSubmittingRef = useRef(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const fundingTypeRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<keyof ContactFormData, React.RefObject<HTMLElement | null>> = {
    name: nameRef,
    businessName: businessNameRef,
    phone: phoneRef,
    email: emailRef,
    fundingType: fundingTypeRef,
    amount: amountRef,
    message: messageRef,
  };

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target as { name: keyof ContactFormData; value: string };
    setForm((prev) => ({ ...prev, [name]: value }));

    // Only re-validate live once the field has been interacted with, so we
    // never show an error before the user has had a chance to fill it in —
    // but we do clear an error as soon as the value becomes valid.
    if (touched[name]) {
      const error = fieldValidators[name](value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target as { name: keyof ContactFormData; value: string };
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Trim accidental leading/trailing whitespace cleanly once the user
    // leaves the field (email is the field most prone to copy/paste spaces).
    let finalValue = value;
    if (name === "email" && value.trim() !== value) {
      finalValue = value.trim();
      setForm((prev) => ({ ...prev, email: finalValue }));
    }

    const error = fieldValidators[name](finalValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }

  function focusFirstInvalidField(validationErrors: ContactFormErrors) {
    for (const field of fieldOrder) {
      if (validationErrors[field]) {
        fieldRefs[field].current?.focus();
        return;
      }
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (isSubmittingRef.current || loading) return;

    // Mark every field as touched so validation messages become visible,
    // matching the "clear inline error beneath the field" requirement even
    // for fields the user never focused (e.g. left both dropdowns unset).
    setTouched({
      name: true,
      businessName: true,
      phone: true,
      email: true,
      fundingType: true,
      amount: true,
      message: true,
    });

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      focusFirstInvalidField(validationErrors);
      return;
    }

    isSubmittingRef.current = true;
    setLoading(true);
    setSubmitError(null);

    try {
      const result = await handleSubmitValidatedForm(form);
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong sending your enquiry. Please try again or call us directly.");
      }
    } catch {
      setSubmitError("Something went wrong sending your enquiry. Please try again or call us directly.");
    } finally {
      setLoading(false);
      isSubmittingRef.current = false;
    }
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
                  Thank you, {form.name.trim().split(" ")[0]}. A member of our team will be in touch within one working day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-[#0B2E59] font-bold text-xl mb-1">Free Funding Enquiry</h3>
                <p className="text-slate-400 text-sm mb-6">No obligation. No spam. Just honest advice.</p>
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Your name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        ref={nameRef}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Smith"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={fieldClass(!!errors.name)}
                      />
                      <FieldError id="contact-name-error" message={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="contact-businessName" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Business name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-businessName"
                        ref={businessNameRef}
                        type="text"
                        name="businessName"
                        value={form.businessName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Smith &amp; Co Ltd"
                        aria-invalid={!!errors.businessName}
                        aria-describedby={errors.businessName ? "contact-businessName-error" : undefined}
                        className={fieldClass(!!errors.businessName)}
                      />
                      <FieldError id="contact-businessName-error" message={errors.businessName} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Phone number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        ref={phoneRef}
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="07700 900000"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                        className={fieldClass(!!errors.phone)}
                      />
                      <FieldError id="contact-phone-error" message={errors.phone} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Email address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        ref={emailRef}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@smithco.co.uk"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={fieldClass(!!errors.email)}
                      />
                      <FieldError id="contact-email-error" message={errors.email} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-fundingType" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Funding type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="contact-fundingType"
                        ref={fundingTypeRef}
                        name="fundingType"
                        value={form.fundingType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.fundingType}
                        aria-describedby={errors.fundingType ? "contact-fundingType-error" : undefined}
                        className={fieldClass(!!errors.fundingType)}
                      >
                        <option value="">Select type…</option>
                        {fundingTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <FieldError id="contact-fundingType-error" message={errors.fundingType} />
                    </div>
                    <div>
                      <label htmlFor="contact-amount" className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Funding amount <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="contact-amount"
                        ref={amountRef}
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.amount}
                        aria-describedby={errors.amount ? "contact-amount-error" : undefined}
                        className={fieldClass(!!errors.amount)}
                      >
                        <option value="">Select range…</option>
                        {amounts.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                      <FieldError id="contact-amount-error" message={errors.amount} />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        Tell us more (optional)
                      </label>
                      <span
                        className={`text-[11px] tabular-nums ${
                          form.message.length > MESSAGE_MAX_LENGTH ? "text-red-600" : "text-slate-400"
                        }`}
                      >
                        {form.message.length}/{MESSAGE_MAX_LENGTH}
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      ref={messageRef}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      maxLength={MESSAGE_MAX_LENGTH}
                      placeholder="What the funding is for, your industry, or how quickly you need it…"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`${fieldClass(!!errors.message)} resize-none`}
                    />
                    <FieldError id="contact-message-error" message={errors.message} />
                  </div>

                  {submitError && (
                    <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C76A1B] hover:bg-[#a85918] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-md transition-all duration-200 text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm"
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
