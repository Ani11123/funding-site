import type { ContactFormData } from "./contactFormValidation";

export interface ContactFormSubmitResult {
  success: boolean;
}

/**
 * Submission boundary for the contact form.
 *
 * Phase 1 (current): simulates a network round-trip and always resolves
 * successfully. No data leaves the browser. This keeps the form, its loading
 * state and its success/error states fully wired up ahead of Phase 2.
 *
 * Phase 2 (future — NOT implemented yet):
 * TODO CRM ENDPOINT — replace the mock below with a real request to whichever
 *   destination is chosen: HubSpot, Zoho CRM, Salesforce, Pipedrive, or a
 *   custom API endpoint. No provider has been selected yet.
 * TODO AUTHENTICATION — attach the chosen CRM/API's auth (API key, OAuth
 *   token, signed request, etc.). Never embed real credentials client-side;
 *   route through a server/API route that holds the secret.
 * TODO CONSENT CAPTURE — capture explicit marketing/contact consent (e.g. a
 *   checkbox) if the client requires one beyond the existing privacy note,
 *   and submit it alongside the lead payload.
 * TODO GDPR CONSENT LOGGING — log what the user consented to and when,
 *   server-side, for compliance/audit purposes.
 * TODO RETRY HANDLING — add retry/backoff for transient network failures
 *   rather than failing the enquiry outright.
 * TODO DUPLICATE LEAD DETECTION — check for an existing lead with the same
 *   email/phone submitted recently before creating a new one downstream.
 * TODO SERVER-SIDE VALIDATION — the validation in contactFormValidation.ts is
 *   client-side UX only. The receiving endpoint MUST re-validate every field
 *   before trusting or storing it.
 * TODO SPAM PROTECTION — add a honeypot field, rate limiting, and/or CAPTCHA
 *   (only if/when approved) before this goes live.
 *
 * Deliberately not done here: no localStorage persistence of form data, and
 * no console logging of submitted values (this may contain personal data).
 */
export async function handleSubmitValidatedForm(
  data: ContactFormData
): Promise<ContactFormSubmitResult> {
  void data; // not sent anywhere yet — see TODOs above

  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 900);
  });
}
