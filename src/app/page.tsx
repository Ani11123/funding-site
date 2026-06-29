import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import TrustedPartners from "@/components/TrustedPartners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Slim sub-header: contact placeholders + social icons */}
      <TopBar />

      {/* Main navigation: logo (home) | Funding Options | Contact | Speak to Advisor */}
      <Header />

      <main>
        {/* 1. Hero — premium gradient background, two-column layout */}
        <Hero />

        {/* TrustBar — floating stat card overlapping hero bottom */}
        <TrustBar />

        {/* 2. Funding Options — 8 product cards */}
        <Services />

        {/* 3. How It Works — 4 premium steps */}
        <Process />

        {/* 4. Why Choose Us — standalone, feature tiles */}
        <WhyChooseUs />

        {/* 5. Customer Feedback — placeholder testimonials */}
        {/* TODO: Replace with real client testimonials when provided */}
        <Testimonials />

        {/* 6. Blog Preview — placeholder articles */}
        {/* TODO: Replace with real blog content when provided by client */}
        <BlogPreview />

        {/* 7. Trusted Partners — continuous marquee carousel */}
        {/* TODO: Replace placeholder cards with client's lender/partner logos */}
        <TrustedPartners />

        {/* 8. Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
