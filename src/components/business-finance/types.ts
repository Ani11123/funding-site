import type { LucideIcon } from "lucide-react";

export interface IconTextItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedSolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface LoanTypeItem {
  title: string;
  description: string;
}

/**
 * Full content contract for a Business Finance service page.
 * Every remaining Business Finance route (asset-finance, invoice-finance, etc.)
 * renders the same <BusinessFinanceTemplate /> — only this data changes.
 */
export interface BusinessFinancePageContent {
  meta: {
    title: string;
    description: string;
    slug: string;
  };
  breadcrumbLabel: string;
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  benefits: {
    eyebrow: string;
    heading: string;
    description: string;
    items: IconTextItem[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: IconTextItem[];
  };
  eligibility: {
    eyebrow: string;
    heading: string;
    description: string;
    items: string[];
    note: string;
  };
  loanTypes: {
    eyebrow: string;
    heading: string;
    description: string;
    items: LoanTypeItem[];
  };
  whyChoose: {
    eyebrow: string;
    heading: string;
    description: string;
    items: IconTextItem[];
  };
  faqs: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };
  relatedSolutions: {
    eyebrow: string;
    heading: string;
    description: string;
    items: RelatedSolutionItem[];
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    description: string;
  };
}
