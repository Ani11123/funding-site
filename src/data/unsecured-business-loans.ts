import {
  PoundSterling,
  Percent,
  Clock,
  Building2,
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

const product = getProductBySlug("unsecured-business-loans")!;

export const unsecuredBusinessLoansContent: BusinessFinancePageContent = {
  meta: {
    title: product.seoTitle,
    description: product.seoDescription,
    slug: product.slug,
  },

  breadcrumbLabel: "Unsecured Business Loans",

  hero: {
    eyebrow: "Unsecured Business Loans",
    heading: "Funding Without Tying Up Your Assets",
    description:
      "Borrow what your business needs without pledging property or equipment as security. Approval is based on your business's performance, with funds often available within 24 hours.",
    primaryCtaLabel: "Speak to a Commercial Finance Advisor",
    secondaryCtaLabel: "Request a Callback",
    image: product.heroImage,
    imageAlt: product.heroImageAlt,
  },

  intro: {
    eyebrow: "About Unsecured Business Loans",
    heading: "What is an unsecured business loan?",
    paragraphs: [
      "An unsecured business loan lets you borrow without pledging property, equipment or other assets as collateral. Instead, lenders base their decision on your business's creditworthiness and trading performance, which means your assets stay fully protected throughout the life of the loan.",
      "Because there's no asset valuation or legal due diligence to complete, this route is typically faster to arrange than secured borrowing, making it a practical option when you need funds without delay.",
    ],
  },

  benefits: {
    eyebrow: "Key Features",
    heading: "What you can expect",
    description: "The headline terms currently available through our unsecured lending panel.",
    items: [
      {
        icon: PoundSterling,
        title: "Loan Amounts",
        description: "£10,000 to £2 million, sized to your business's trading performance rather than any asset value.",
      },
      {
        icon: Percent,
        title: "Competitive Rates",
        description: "Fixed annual rates from 6.9%, agreed upfront so you know exactly what to budget for.",
      },
      {
        icon: Clock,
        title: "Fast Access",
        description: "Funds can often reach your account within 24 hours of formal approval.",
      },
      {
        icon: Building2,
        title: "Open to All Sectors",
        description: "Available to businesses across all sectors, assessed on their own financial merits.",
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
        title: "Initial Enquiry",
        description: "A short conversation about what you need. This early stage has no impact on your business credit score.",
      },
      {
        icon: UserCog,
        title: "Advisor Assessment",
        description: "A dedicated adviser reviews your funding requirement and gathers the essential business information.",
      },
      {
        icon: FileCheck2,
        title: "Matched Solutions",
        description: "We search our lender panel, prepare your application, and present a clear, no-obligation quote.",
      },
      {
        icon: Banknote,
        title: "Funding Secured",
        description: "Once approved, funds are transferred directly to your business account without unnecessary delay.",
      },
    ],
  },

  eligibility: {
    eyebrow: "Is This the Right Fit?",
    heading: "When to consider an unsecured loan",
    description: "This form of financing is particularly well suited to businesses that:",
    items: [
      "Need funding quickly, without the time needed for asset valuation or legal checks",
      "Want to preserve business and personal assets rather than offering them as security",
      "Have an established trading history and sound, demonstrable financials",
      "Need flexibility to use funds across a range of purposes as circumstances change",
    ],
    note:
      "Eligibility varies by lender and is assessed on your specific trading history and financials. Speak to an adviser for guidance specific to your business, there's no obligation.",
  },

  loanTypes: {
    eyebrow: "Common Uses",
    heading: "Where this funding helps most",
    description: "Unsecured funding is designed to flex around whatever your business needs it for.",
    items: [
      {
        title: "Payroll and Overheads",
        description: "Bridge short-term gaps so wages and essential outgoings are always covered on time.",
      },
      {
        title: "Marketing and Growth",
        description: "Invest in campaigns or new initiatives without drawing down your existing cash reserves.",
      },
      {
        title: "Working Capital Shortfalls",
        description: "Smooth over seasonal dips or unexpected costs while maintaining day-to-day stability.",
      },
      {
        title: "Expansion Plans",
        description: "Fund your next phase of growth, from new premises to additional stock or headcount.",
      },
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose Nexora",
    heading: "Straightforward Access, Properly Explained.",
    description:
      "Our advisers assess your situation against a broad panel of lenders, taking into account your trading history, sector and cash flow patterns, so the option we recommend is genuinely aligned with your business, not just the fastest one available.",
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
    heading: "Unsecured business loan questions we're asked often",
    items: [
      {
        question: "What defines an unsecured business loan?",
        answer: "It's a form of financing that doesn't require you to pledge assets such as property or equipment. Approval is based primarily on your business's creditworthiness and trading performance.",
      },
      {
        question: "Who is eligible to apply?",
        answer: "Eligibility varies by lender, but generally favours established businesses with a demonstrable trading history and sound financials.",
      },
      {
        question: "What borrowing limits are available?",
        answer: "Loan amounts typically range from £10,000 to £2 million, depending on your business profile and requirements.",
      },
      {
        question: "How quickly can funds be released?",
        answer: "In most cases, funds can be released within 24 hours of formal approval.",
      },
      {
        question: "Are there restrictions on how I can use the funds?",
        answer: "Funds can generally be used for a wide variety of business purposes, including working capital, equipment, marketing and expansion.",
      },
      {
        question: "Will applying affect my credit score?",
        answer: "An initial enquiry with us does not affect your credit rating. A formal application to a lender may involve a credit check, which we'll always discuss with you in advance.",
      },
    ],
  },

  relatedSolutions: {
    eyebrow: "Related Finance Solutions",
    heading: "Explore other funding routes",
    description: "An unsecured loan isn't the right fit for every situation. Here are other options worth considering.",
    items: toRelatedSolutionItems(getRelatedProducts("unsecured-business-loans")),
  },

  finalCta: {
    eyebrow: "Ready When You Are",
    heading: "Access Funding Without Tying Up Your Assets",
    description: "Talk to our commercial finance advisers today. It's free, confidential and with no obligation.",
  },
};
