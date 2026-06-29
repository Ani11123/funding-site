import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora Funding Limited | Funding Growth. Building Futures.",
  description:
    "Nexora Funding Limited — independent business funding advisors helping UK SMEs access the right finance. From working capital to growth loans. Speak to an advisor today.",
  keywords: "business funding UK, SME finance, business loans, working capital, growth finance, Nexora Funding",
  openGraph: {
    title: "Nexora Funding Limited | Funding Growth. Building Futures.",
    description:
      "Independent business funding advisors helping UK SMEs access the right finance. Speak to an advisor today.",
    type: "website",
    locale: "en_GB",
  },
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
