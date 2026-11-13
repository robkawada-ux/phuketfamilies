import type { Metadata } from "next";
import { og } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SchoolDirectory from "@/components/ui/SchoolDirectory";
import { SCHOOLS } from "@/lib/schools";
import { SITE } from "@/lib/seo";
import { todayInBangkok } from "@/lib/featured";

// Regenerated hourly so paid featured placements switch on and off by date.
export const revalidate = 21600; // every 6 hours (was hourly; cut for Vercel CPU cost)

export const metadata: Metadata = {
  alternates: { canonical: "/schools" },
  title: "International Schools in Phuket",
  description:
    `Compare all ${SCHOOLS.length} international schools in Phuket by area, curriculum and budget, with 2026/27 fees where schools publish them.`,
  openGraph: og({
    title: "International Schools in Phuket",
    description:
      `Compare all ${SCHOOLS.length} international schools in Phuket by area, curriculum and budget, with 2026/27 fees where schools publish them.`,
    path: "/schools",
  }),
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Schools", item: `${SITE}/schools` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "International schools in Bangkok",
    numberOfItems: SCHOOLS.length,
    itemListElement: SCHOOLS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE}/schools/${s.slug}`,
    })),
  },
];

export default function SchoolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Find the right fit"
        title="International Schools in Phuket"
        subtitle="From Thalang in the north to Rawai in the south. Filter by area, curriculum and budget to narrow it down fast."
        color="teal"
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <SchoolDirectory today={todayInBangkok()} />
        <p className="mt-10 text-center text-sm text-neutral-600">
          Planning around the school year? See{" "}
          <Link href="/school-breaks" className="font-semibold text-orange">
            Phuket school term dates and holidays 2026/27
          </Link>
          .
        </p>
        <p className="mt-3 text-center text-sm text-neutral-600">
          Considering other cities? See{" "}
          <a href="https://www.bkkfamilies.com/schools" className="font-semibold text-orange">international schools in Bangkok</a>{" "}
          and{" "}
          <a href="https://www.chiangmaifamilies.com/schools" className="font-semibold text-orange">international schools in Chiang Mai</a>.
        </p>
      </div>
    </>
  );
}
