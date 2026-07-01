import type { Metadata, Viewport } from "next";
import "./globals.css";

// TODO: Update metadataBase with confirmed production domain before launch
const siteUrl = "https://nexorafunding.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nexora Funding Limited | Commercial Finance for UK Businesses",
  description:
    "Connecting UK businesses with trusted commercial finance solutions through expert, advisor-led funding support. Business loans, invoice finance, asset finance and more.",
  keywords:
    "business finance UK, commercial finance, business loans, invoice finance, asset finance, merchant cash advance, working capital, SME funding, Nexora Funding",
  authors: [{ name: "Nexora Funding Limited" }],
  icons: {
    // favicon.ico handled by app/favicon.ico (Next.js special file — most reliable)
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  // TODO: Add OG image at public/og-image.jpg (1200×630px) when brand assets are finalised
  openGraph: {
    title: "Nexora Funding Limited | Commercial Finance for UK Businesses",
    description:
      "Connecting UK businesses with trusted commercial finance solutions through expert, advisor-led funding support.",
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Nexora Funding Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Funding Limited | Commercial Finance for UK Businesses",
    description:
      "Connecting UK businesses with trusted commercial finance solutions through expert, advisor-led funding support.",
  },
  // TODO: Update canonical with confirmed production domain
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2E59",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
