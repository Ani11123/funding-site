import {
  Zap,
  SlidersHorizontal,
  Users,
  UserCheck,
  MessageSquareText,
  UserCog,
  FileCheck2,
  Banknote,
  Handshake,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Wallet,
  Boxes,
  FileText,
  CreditCard,
} from "lucide-react";
import type { BusinessFinancePageContent } from "@/components/business-finance/types";

export const businessLoansContent: BusinessFinancePageContent = {
  meta: {
    title: "Business Loans | Nexora Funding Limited",
    description:
      "Flexible business loans for UK businesses, matched to your cashflow and growth plans. Speak to a dedicated commercial finance adviser, free and with no obligation.",
    slug: "business-loans",
  },

  breadcrumbLabel: "Business Loans",

  hero: {
    eyebrow: "Business Loans",
    heading: "Business Loans Built Around Your Business",
    description:
      "Straightforward, flexible business loans matched to your cashflow and growth plans. Our advisers guide you to the right lender, with clear terms and no jargon.",
    primaryCtaLabel: "Speak to a Commercial Finance Advisor",
    secondaryCtaLabel: "Request a Callback",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "UK business owner reviewing finance options at a desk",
  },

  intro: {
    eyebrow: "About Business Loans",
    heading: "What is a business loan?",
    paragraphs: [
      "A business loan gives your company access to a lump sum of capital, repaid over an agreed term with regular instalments. It's one of the most established ways for UK businesses to fund growth, manage cashflow, or invest in new opportunities.",
      "Business loans can be secured against assets or unsecured, depending on your circumstances and how much you want to borrow. Terms, rates and repayment structures vary between lenders, which is why matching the right product to your business matters.",
      "Rather than approaching lenders one at a time, our advisers assess your situation and point you towards the options genuinely suited to your business, explaining the trade-offs in plain English along the way.",
    ],
  },

  benefits: {
    eyebrow: "Key Benefits",
    heading: "Why businesses choose this route",
    description: "A funding option built for flexibility, speed and clarity.",
    items: [
      {
        icon: Zap,
        title: "Fast Decisions",
        description: "Many lenders in our network can provide an initial indication quickly, so you're not left waiting to plan ahead.",
      },
      {
        icon: SlidersHorizontal,
        title: "Flexible Repayment",
        description: "Repayment terms can be structured around your cashflow, rather than a rigid one-size-fits-all schedule.",
      },
      {
        icon: Users,
        title: "Access to Multiple Lenders",
        description: "We work across a panel of commercial finance lenders, widening your options beyond a single bank.",
      },
      {
        icon: UserCheck,
        title: "Dedicated Finance Advisor",
        description: "One adviser stays with you from enquiry through to funds landing, so you always know where things stand.",
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
        description: "Share your funding requirement, business type and goals. No automated forms, no jargon.",
      },
      {
        icon: UserCog,
        title: "Advisor Assessment",
        description: "A dedicated funding specialist reviews your profile and identifies suitable options from our lender panel.",
      },
      {
        icon: FileCheck2,
        title: "Matched Solutions",
        description: "We present tailored loan options that align with your cashflow, sector and timeline, clearly explained.",
      },
      {
        icon: Banknote,
        title: "Funding Secured",
        description: "Move forward with confidence. We guide you through every step until funds reach your account.",
      },
    ],
  },

  eligibility: {
    eyebrow: "Eligibility",
    heading: "Is your business likely to qualify?",
    description: "General guidance only, every application is assessed individually by the lender.",
    items: [
      "Registered UK business (limited company, partnership or sole trader)",
      "Trading for a minimum period, usually assessed by individual lenders",
      "Regular business income or a clear plan for repayment",
      "No unresolved insolvency proceedings against the business",
      "A UK business bank account in the company's name",
      "Willingness to provide recent bank statements and basic financial information",
    ],
    note:
      "Every lender has its own criteria, and eligibility can vary by sector, trading history and loan size. Speak to an adviser for guidance specific to your business, there's no obligation.",
  },

  loanTypes: {
    eyebrow: "Types of Business Loans",
    heading: "Explore your loan options",
    description: "Common business loan structures we help clients access.",
    items: [
      {
        title: "Unsecured Business Loans",
        description: "No collateral required. A quicker route to funds for operational needs and short-term growth plans.",
      },
      {
        title: "Secured Business Loans",
        description: "Larger amounts secured against business assets or commercial property, typically at more competitive rates.",
      },
      {
        title: "Short-Term Business Loans",
        description: "Fast access to capital over a shorter repayment period, suited to time-sensitive opportunities.",
      },
      {
        title: "Growth & Expansion Loans",
        description: "Structured to support hiring, stock, new premises or entering new markets.",
      },
      {
        title: "Startup Business Loans",
        description: "Options for newer businesses, often considering the founder's plan and personal financial standing.",
      },
      {
        title: "Bridging Business Loans",
        description: "Short-term finance to bridge a gap, such as timing between a sale and a purchase.",
      },
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose Nexora",
    heading: "More Than a Loan Broker.",
    description:
      "We don't just match you with a lender. We work alongside you, explaining the options clearly and honestly.",
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
    heading: "Business loan questions we're asked often",
    items: [
      {
        question: "How much can my business borrow?",
        answer:
          "Loan amounts depend on the lender, your business's financial profile and whether the loan is secured or unsecured. An adviser can talk through realistic ranges once they understand your situation.",
      },
      {
        question: "Will applying affect my credit score?",
        answer:
          "An initial enquiry and market search typically uses a soft credit check, which does not appear on your credit file. A hard search generally only happens once you formally accept an offer.",
      },
      {
        question: "How quickly can funds be released?",
        answer:
          "Timelines vary by lender and loan type. Unsecured loans can sometimes complete in a matter of days, while secured or larger facilities usually take longer due to additional checks.",
      },
      {
        question: "Do I need to provide security or a personal guarantee?",
        answer:
          "It depends on the loan type and lender. Secured loans require an asset as security. Some unsecured loans may still ask for a personal guarantee, an adviser will explain this clearly before you proceed.",
      },
      {
        question: "My business has a limited trading history, can I still apply?",
        answer:
          "It's still worth a conversation. Some lenders specialise in newer businesses and consider factors like the founder's background and business plan alongside trading history.",
      },
      {
        question: "What documents will I need?",
        answer:
          "Most lenders ask for recent bank statements, basic company details and sometimes management accounts. Your adviser will confirm exactly what's needed for the lenders being considered.",
      },
    ],
  },

  relatedSolutions: {
    eyebrow: "Related Finance Solutions",
    heading: "Explore other funding routes",
    description: "Business loans aren't the right fit for every situation. Here are other options worth considering.",
    items: [
      {
        icon: Boxes,
        title: "Asset Finance",
        description: "Finance equipment, vehicles and machinery without straining working capital.",
        href: "/asset-finance",
      },
      {
        icon: FileText,
        title: "Invoice Finance",
        description: "Release cash tied up in outstanding invoices to maintain steady cashflow.",
        href: "/invoice-finance",
      },
      {
        icon: Wallet,
        title: "Working Capital",
        description: "Keep operations running smoothly with tailored working capital facilities.",
        href: "/working-capital",
      },
      {
        icon: CreditCard,
        title: "Merchant Cash Advance",
        description: "Access fast funding based on your card turnover with flexible repayments.",
        href: "/merchant-cash-advance",
      },
    ],
  },

  finalCta: {
    eyebrow: "Ready When You Are",
    heading: "Let's Find the Right Business Loan for You",
    description:
      "Talk to our commercial finance advisers today. It's free, confidential and with no obligation.",
  },
};
