import {
  PoundSterling,
  Percent,
  RefreshCcw,
  Repeat,
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

const product = getProductBySlug("revolving-credit-facility")!;

export const revolvingCreditFacilityContent: BusinessFinancePageContent = {
  meta: {
    title: product.seoTitle,
    description: product.seoDescription,
    slug: product.slug,
  },

  breadcrumbLabel: "Revolving Credit Facility",

  hero: {
    eyebrow: "Revolving Credit Facility",
    heading: "Access Funds When You Need Them. Repay When You Can.",
    description:
      "A flexible line of credit you can draw from, repay and redraw as needed, much like a business credit card, but typically at lower rates and with higher limits.",
    primaryCtaLabel: "Speak to a Commercial Finance Advisor",
    secondaryCtaLabel: "Request a Callback",
    image: product.heroImage,
    imageAlt: product.heroImageAlt,
  },

  intro: {
    eyebrow: "About Revolving Credit",
    heading: "What is a revolving credit facility?",
    paragraphs: [
      "A Revolving Credit Facility gives your business a flexible line of credit that you can draw from, repay and redraw as needed, much like a business credit card, but typically at lower rates and with higher limits.",
      "It provides a reliable safety net for managing working capital fluctuations, covering short-term cash flow gaps, or seizing unexpected opportunities without applying for a new loan each time.",
    ],
  },

  benefits: {
    eyebrow: "Key Features",
    heading: "What you can expect",
    description: "The headline terms currently available through our revolving credit panel.",
    items: [
      {
        icon: PoundSterling,
        title: "Credit Limits",
        description: "£10,000 to £1 million+, set to match your working capital needs.",
      },
      {
        icon: Percent,
        title: "Interest Rates",
        description: "From 6.9% APR (variable), charged only on what you actually draw.",
      },
      {
        icon: RefreshCcw,
        title: "Repayment Flexibility",
        description: "Interest is charged only on the drawn amount, not on the full approved facility.",
      },
      {
        icon: Repeat,
        title: "Renewable",
        description: "The facility can be rolled over or reviewed annually as your business evolves.",
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
        description: "Share your working capital cycles and the facility size you have in mind.",
      },
      {
        icon: UserCog,
        title: "Advisor Assessment",
        description: "A dedicated adviser reviews your cashflow and risk appetite against our lender panel.",
      },
      {
        icon: FileCheck2,
        title: "Matched Solutions",
        description: "We present suitable revolving credit facilities with rates and limits clearly explained.",
      },
      {
        icon: Banknote,
        title: "Funding Secured",
        description: "Once the facility is in place, funds can typically be accessed within hours whenever needed.",
      },
    ],
  },

  eligibility: {
    eyebrow: "Is This the Right Fit?",
    heading: "When to consider revolving credit",
    description: "This form of finance is particularly valuable for businesses that:",
    items: [
      "Experience seasonal or cyclical cash flow variations",
      "Require a contingency buffer for unforeseen expenses or emergencies",
      "Value the ability to access funds immediately without repeated applications",
      "Prefer to pay interest only on the amount actually utilised",
    ],
    note:
      "Facility size and pricing depend on your business's financial profile. Speak to an adviser for guidance specific to your business, there's no obligation.",
  },

  loanTypes: {
    eyebrow: "Strategic Advantages",
    heading: "Why businesses value this facility",
    description: "A revolving credit facility offers several distinct benefits.",
    items: [
      {
        title: "Cost Efficiency",
        description: "You only incur interest on the funds you draw, not the entire approved limit.",
      },
      {
        title: "Agility",
        description: "Once the facility is in place, funds can be accessed within hours, enabling swift decision-making.",
      },
      {
        title: "Flexibility",
        description: "Repay early without penalty, reducing interest costs when cash flow is strong.",
      },
      {
        title: "Peace of Mind",
        description: "Knowing you have a committed line of credit provides confidence for forward planning.",
      },
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose Nexora",
    heading: "A Facility That Flexes With You.",
    description:
      "We work with you to understand your cash flow cycles and risk appetite before recommending a facility size and structure that suits your business, then review it periodically to ensure it stays aligned with your needs.",
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
    heading: "Revolving credit questions we're asked often",
    items: [
      {
        question: "How is this different from a fixed-term loan?",
        answer: "With a fixed-term loan, you receive a lump sum and repay it on a set schedule. A revolving facility lets you draw, repay and redraw funds as needed, up to your agreed limit.",
      },
      {
        question: "Do I pay interest on the whole facility or just what I use?",
        answer: "Only on what you draw. If you have a £100,000 facility but only use £20,000, interest is charged on the £20,000.",
      },
      {
        question: "How much could my business access?",
        answer: "Typically £10,000 to £1 million or more, depending on your business's financial profile.",
      },
      {
        question: "Is the facility ongoing, or does it end after one use?",
        answer: "It's designed to be renewable. Facilities are typically rolled over or reviewed annually as your business evolves.",
      },
      {
        question: "Can I repay early without a penalty?",
        answer: "Yes, you can typically repay early without penalty, which reduces interest costs when your cash flow is strong.",
      },
      {
        question: "What can the facility be used for?",
        answer: "It's flexible by design, commonly used for managing seasonal cash flow, covering short-term gaps, or acting as a contingency buffer for unexpected costs.",
      },
    ],
  },

  relatedSolutions: {
    eyebrow: "Related Finance Solutions",
    heading: "Explore other funding routes",
    description: "Revolving credit isn't the right fit for every situation. Here are other options worth considering.",
    items: toRelatedSolutionItems(getRelatedProducts("revolving-credit-facility")),
  },

  finalCta: {
    eyebrow: "Ready When You Are",
    heading: "Establish a Flexible Credit Line for Your Business",
    description: "Talk to our commercial finance advisers today. It's free, confidential and with no obligation.",
  },
};
