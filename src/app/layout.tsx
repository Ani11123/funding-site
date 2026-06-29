import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora Funding Limited | Funding Growth. Building Futures.",
  description:
    "Nexora Funding Limited — independent business funding advisors helping UK SMEs access the right finance. From working capital to growth loans. Speak to an advisor today.",
  keywords: "business funding UK, SME finance, business loans, working capital, growth finance, Nexora Funding",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nexora Funding Limited | Funding Growth. Building Futures.",
    description:
      "Independent business funding advisors helping UK SMEs access the right finance. Speak to an advisor today.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#04244A",
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
