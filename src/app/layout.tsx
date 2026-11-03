import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SITE, SITE_NAME } from "@/lib/seo";

// Google Analytics and the Search Console verification tag belong to
// bkkfamilies.com and were removed on purpose. When phuketfamilies.com gets
// its own GA4 property and Search Console property, add them back here
// (gtag via next/script, and metadata.verification.google).

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Phuket Families: Schools and Family Life in Phuket",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Your Phuket roadmap: international schools in Phuket compared by area, curriculum and fees, plus guides for families living on the island. A sister site to BKK Families in Bangkok.",
  openGraph: {
    title: "Phuket Families: Schools and Family Life in Phuket",
    description:
      "International schools, guides and resources for families living in Phuket.",
    // no url here on purpose: it would be inherited by every page
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white font-body">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
