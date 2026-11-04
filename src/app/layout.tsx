import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SITE, SITE_NAME, GA_MEASUREMENT_ID } from "@/lib/seo";

// Google Analytics: phuketfamilies.com has its own GA4 property, set by
// GA_MEASUREMENT_ID in lib/seo.ts. Search Console is verified by a DNS TXT
// record, so no verification meta tag is needed here.

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
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
