/**
 * Contact form validation schema.
 *
 * This is the single source of truth for the ContactForm's data shape and
 * client-side validation rules. Kept separate from the component so Phase 2
 * (CRM/API integration) can reuse ContactFormData without touching UI code.
 *
 * IMPORTANT: this is client-side validation only, for UX purposes.
 * It is NOT a security boundary. Whatever endpoint eventually receives this
 * data (HubSpot, Zoho, Salesforce, Pipedrive, or a custom API) MUST repeat
 * full validation server-side before the lead is trusted or stored.
 */

export interface ContactFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  fundingType: string;
  amount: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export const initialContactFormData: ContactFormData = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  fundingType: "",
  amount: "",
  message: "",
};

const NAME_MIN_LENGTH = 2;
const BUSINESS_NAME_MIN_LENGTH = 2;
export const MESSAGE_MAX_LENGTH = 750;

// Standard, pragmatic email pattern — good enough for client-side UX;
// the receiving API must still verify deliverability server-side.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Digits, spaces, brackets, hyphens and a single leading "+" — covers UK
// (e.g. "07700 900000", "020 3432 3492") and international formats
// (e.g. "+44 7700 900000", "+1 (415) 555-0100").
const PHONE_ALLOWED_CHARS_REGEX = /^\+?[0-9\s()-]+$/;

function isNumbersOnly(value: string): boolean {
  const stripped = value.replace(/\s+/g, "");
  return stripped.length > 0 && /^[0-9]+$/.test(stripped);
}

export function validateName(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter your full name.";
  if (trimmed.length < NAME_MIN_LENGTH) {
    return `Name must be at least ${NAME_MIN_LENGTH} characters.`;
  }
  if (isNumbersOnly(trimmed)) return "Name cannot be numbers only.";
  return undefined;
}

export function validateBusinessName(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter your business name.";
  if (trimmed.length < BUSINESS_NAME_MIN_LENGTH) {
    return `Business name must be at least ${BUSINESS_NAME_MIN_LENGTH} characters.`;
  }
  return undefined;
}

export function validatePhone(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter a phone number.";
  if (!PHONE_ALLOWED_CHARS_REGEX.test(trimmed)) {
    return "Phone number can only contain digits, spaces, brackets, hyphens and a leading +.";
  }
  const digitsOnly = trimmed.replace(/\D/g, "");
  // 7 digits covers shorter international lines; 15 is the E.164 maximum.
  // UK mobiles/landlines (10-11 digits, or 12-13 with +44) sit comfortably inside this range.
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return "Enter a valid UK or international phone number.";
  }
  return undefined;
}

export function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Please enter your email address.";
  if (!EMAIL_REGEX.test(trimmed)) return "Enter a valid email address.";
  return undefined;
}

export function validateFundingType(value: string): string | undefined {
  if (!value) return "Please select a finance type.";
  return undefined;
}

export function validateAmount(value: string): string | undefined {
  if (!value) return "Please select a funding amount.";
  return undefined;
}

export function validateMessage(value: string): string | undefined {
  if (value.length > MESSAGE_MAX_LENGTH) {
    return `Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`;
  }
  return undefined;
}

export const fieldValidators: {
  [K in keyof ContactFormData]: (value: string) => string | undefined;
} = {
  name: validateName,
  businessName: validateBusinessName,
  phone: validatePhone,
  email: validateEmail,
  fundingType: validateFundingType,
  amount: validateAmount,
  message: validateMessage,
};

/** Field order used to focus the first invalid field after a failed submit. */
export const fieldOrder: (keyof ContactFormData)[] = [
  "name",
  "businessName",
  "phone",
  "email",
  "fundingType",
  "amount",
  "message",
];

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  for (const field of fieldOrder) {
    const error = fieldValidators[field](data[field]);
    if (error) errors[field] = error;
  }
  return errors;
}
