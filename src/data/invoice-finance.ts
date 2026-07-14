import {
  PoundSterling,
  Percent,
  Lock,
  Users2,
  MessageSquareText,
  UserCog,
  FileCheck2,
  Banknote,
  Handshake,
  ShieldCheck,
  Clock3,
  HeartHandshake,
} from "lucide-react";
import type { BusinessFinancePageContent } from "@/components/business-finance/types";
import { getProductBySlug, getRelatedProducts, toRelatedSolutionItems } from "@/data/businessFinanceData";

const product = getProductBySlug("invoice-finance")!;

export const invoiceFinanceContent: BusinessFinancePageContent = {
  meta: {
    title: product.seoTitle,
    description: product.seoDescription,
    slug: product.slug,
  },

  breadcrumbLabel: "Invoice Finance",

  hero: {
    eyebrow: "Invoice Finance",
    heading: "Release Working Capital. Improve Cash Flow. Stay in Control.",
    description:
      "Access a significant proportion of the value of your outstanding invoices within 24 hours of raising them, rather than waiting 30, 60 or 90 days for payment.",
    primaryCtaLabel: "Speak to a Commercial Finance Advisor",
    secondaryCtaLabel: "Request a Callback",
    image: product.heroImage,
    imageAlt: product.heroImageAlt,
  },

  intro: {
    eyebrow: "About Invoice Finance",
    heading: "What is invoice finance?",
    paragraphs: [
      "Invoice Finance lets you access a significant proportion of the value of your outstanding invoices, typically within 24 hours of raising them, rather than waiting 30, 60 or 90 days for payment. It's a reliable, self-liquidating source of working capital that grows in line with your sales.",
      "It's particularly suited to B2B businesses with credit-sale terms and a need for predictable, consistent cash flow.",
    ],
  },

  benefits: {
    eyebrow: "Key Features",
    heading: "What you can expect",
    description: "The headline terms currently available through our invoice finance panel.",
    items: [
      {
        icon: PoundSterling,
        title: "Funding Amounts",
        description: "£10,000 to £5 million+, scaling with the value of your sales ledger.",
      },
      {
        icon: Percent,
        title: "Advance Rate",
        description: "Typically 80% to 90% of invoice value, released shortly after you raise the invoice.",
      },
      {
        icon: Lock,
        title: "Flexible Facilities",
        description: "Confidential or disclosed options are available, depending on what suits your business.",
      },
      {
        icon: Users2,
        title: "Credit Control",
        description: "Choose full-service, where the lender manages collections, or selective, where you keep control.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    heading: "Four Clear Steps to Your Funding",
    description: "We handle the complexity so you can focus on running your business.",
    steps: [
      {
        icon: MessageSquareText,
        title: "Tell Us Your Need",
        description: "Share details of your sales ledger, payment terms and the funding you're looking for.",
      },
      {
        icon: UserCog,
        title: "Advisor Assessment",
        description: "A dedicated adviser reviews your payment cycles and customer concentration to shape the right structure.",
      },
      {
        icon: FileCheck2,
        title: "Matched Solutions",
        description: "We present suitable invoice finance structures from our panel, clearly explained.",
      },
      {
        icon: Banknote,
        title: "Funding Secured",
        description: "Once the facility is live, funds are typically released within 24 hours of raising an invoice.",
      },
    ],
  },

  eligibility: {
    eyebrow: "Is This the Right Fit?",
    heading: "When to consider invoice finance",
    description: "This solution is particularly beneficial for businesses that:",
    items: [
      "Experience cash flow gaps due to extended payment terms",
      "Are growing rapidly and need working capital to support that growth",
      "Prefer a funding line that scales automatically with sales volume",
      "Wish to outsource or improve their credit control processes",
    ],
    note:
      "Suitability depends on your sales ledger, sector and customer base. Speak to an adviser for guidance specific to your business, there's no obligation.",
  },

  loanTypes: {
    eyebrow: "Types of Invoice Finance",
    heading: "Choose the structure that fits",
    description: "Three common ways to release cash from your outstanding invoices.",
    items: [
      {
        title: "Factoring",
        description: "The lender purchases your invoices and takes on credit control and collections. Ideal for businesses with limited internal resource for debtor management.",
      },
      {
        title: "Invoice Discounting",
        description: "You retain control over your sales ledger and collections. The facility is confidential, so your customers are unaware of the arrangement.",
      },
      {
        title: "Selective Invoice Finance",
        description: "Fund individual invoices case by case, rather than a whole-ledger facility. Maximum flexibility for occasional or seasonal needs.",
      },
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose Nexora",
    heading: "A Facility Built Around Your Ledger.",
    description:
      "We review your sales ledger, payment cycles and customer concentration to recommend the most suitable structure, then negotiate competitive terms so you retain flexibility and transparency throughout.",
    items: [
      {
        icon: Handshake,
        title: "Advisor-Led Approach",
        description: "A dedicated adviser guides you personally, not an automated system.",
      },
      {
        icon: ShieldCheck,
        title: "Honest, Clear Guidance",
        description: "We explain the trade-offs plainly, including where a product isn't the right fit.",
      },
      {
        icon: Clock3,
        title: "Fast, Confidential Process",
        description: "We respect your time and privacy throughout the enquiry.",
      },
      {
        icon: HeartHandshake,
        title: "No Obligation",
        description: "Initial advice is free, with no pressure to proceed.",
      },
    ],
  },

  faqs: {
    eyebrow: "FAQs",
    heading: "Invoice finance questions we're asked often",
    items: [
      {
        question: "How quickly can I access funds against an invoice?",
        answer: "Typically within 24 hours of raising the invoice, once your facility is set up and running.",
      },
      {
        question: "Will my customers know I'm using invoice finance?",
        answer: "That depends on the structure. Factoring is typically disclosed, while invoice discounting is confidential, so your customers deal with you as normal.",
      },
      {
        question: "What percentage of an invoice's value can I access?",
        answer: "Advance rates are typically 80% to 90% of the invoice value, with the balance (less fees) paid once your customer settles.",
      },
      {
        question: "Do I have to fund my whole sales ledger?",
        answer: "Not necessarily. Selective invoice finance lets you fund individual invoices case by case, rather than committing your entire ledger.",
      },
      {
        question: "Who handles chasing customers for payment?",
        answer: "With factoring, the lender manages credit control and collections. With invoice discounting, you retain control of your own sales ledger.",
      },
      {
        question: "Is invoice finance suitable for a growing business?",
        answer: "Yes, it's particularly well suited to rapidly growing businesses, since the facility scales automatically as your sales volume increases.",
      },
    ],
  },

  relatedSolutions: {
    eyebrow: "Related Finance Solutions",
    heading: "Explore other funding routes",
    description: "Invoice finance isn't the right fit for every situation. Here are other options worth considering.",
    items: toRelatedSolutionItems(getRelatedProducts("invoice-finance")),
  },

  finalCta: {
    eyebrow: "Ready When You Are",
    heading: "Turn Your Invoices into Working Capital",
    description: "Talk to our commercial finance advisers today. It's free, confidential and with no obligation.",
  },
};
