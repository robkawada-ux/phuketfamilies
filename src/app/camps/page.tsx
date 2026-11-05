import type { Metadata } from "next";
import { og, SITE, SISTER_SITE } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CampsDirectory from "@/components/ui/CampsDirectory";
import { CAMPS, ALL_SESSIONS } from "@/lib/camps";
import { todayInBangkok } from "@/lib/featured";

// Regenerated hourly so paid featured placements switch on and off by date.
export const revalidate = 3600;

const TITLE = "Holiday Camps in Phuket 2026/27";
const DESCRIPTION =
  "Phuket holiday camps for Christmas, February half term, Songkran and summer, with real dates, ages and prices, checked against each camp's own page.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/camps` },
  openGraph: og({ title: TITLE, description: DESCRIPTION, path: "/camps" }),
};

const FAQ = [
  {
    q: "When do holiday camps run in Phuket?",
    a: "Around the international school breaks: Christmas and New Year (from mid December into early January), a February half term week, Easter and Songkran in early April, and the long summer break from late June to mid August. Phuket's high season also brings a few camps that run weekly from January to March for visiting families.",
  },
  {
    q: "How much does a holiday camp cost in Phuket?",
    a: "Most full day camps at international schools cost between 10,000 and 20,000 baht a week, usually with lunch included. Summer@BISP is the most expensive day camp at 22,550 baht a week, which includes dinner and a 6pm finish for older children. A few schools, such as PGIS, offer a lower rate for families resident in Phuket.",
  },
  {
    q: "Do I have to attend the school to join its camp?",
    a: "No. Every school camp listed here is open to children from other schools, and several are aimed at families visiting Phuket on holiday. A few give a discount to their own pupils.",
  },
  {
    q: "Why do some listings show last year's dates?",
    a: "Many Phuket camps only publish summer dates between February and April. Rather than leave out a camp that runs every year, we show the dates it ran in 2026 and mark them clearly, so you know who to watch.",
  },
  {
    q: "Are there residential camps in Phuket?",
    a: "Yes, a few. Summer@BISP has a Full Camp with boarding for children older than 9, and UWC Thailand's summer camp has a residential option for ages 12 to 18.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Camps",
        item: `${SITE}/camps`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Holiday camp operators in Phuket",
    numberOfItems: CAMPS.length,
    itemListElement: CAMPS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE}/camps/${c.slug}`,
    })),
  },
];

export default function CampsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="School holidays, sorted"
        title="Holiday Camps in Phuket"
        subtitle={`Real dates, real ages, real prices. ${ALL_SESSIONS.length} camp weeks from ${CAMPS.length} operators, checked and described honestly.`}
        color="purple"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Phuket has more holiday camps than most families expect, from
            nature camps in Cherngtalay to swim and tennis weeks at
            Thanyapura and boarding summer camps at BISP and UWC
            Thailand. The hard part is that dates and prices are scattered across
            school websites, Facebook posts and flyers, and half of what turns
            up in a search is from last year.
          </p>
          <p>
            So this directory is built around dates. Every entry is one camp
            week: when it runs, who it is for, what it costs and where.
            Filter by the holiday you need and your child&rsquo;s age, and
            you should have a shortlist in about thirty seconds. Not sure
            when your school breaks? Check our{" "}
            <Link href="/school-breaks" className="font-semibold text-orange">
              Phuket school term dates
            </Link>
            .
          </p>
          <p>
            Nobody pays to be listed here, and the few paid featured placements
            are always labelled. Every date and price comes from the
            camp&rsquo;s own page, and where a price is not published we say
            so rather than guess. Where a camp runs every year but has not
            announced its next dates, we show the dates it last ran and mark
            them clearly.
          </p>
        </div>

        <div id="directory" className="mt-12 scroll-mt-28">
          <CampsDirectory today={todayInBangkok()} />
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-black/5 bg-teal-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Moving between Phuket and Bangkok?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Our sister site BKK Families has the same kind of directory for
            Bangkok&rsquo;s holiday camps, with the verified school holiday
            dates for the city&rsquo;s international schools.
          </p>
          <a
            href={`${SISTER_SITE.url}/camps`}
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            See Bangkok holiday camps
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">
            Questions parents ask
          </h2>
          <div className="mt-6 space-y-4">
            {FAQ.map((f) => (
              <div
                key={f.q}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <h3 className="font-heading font-bold text-purple-dark">
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-black/5 bg-neutral-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Running a camp, or spotted one we have missed?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            This directory is only useful if it is current. If your dates have
            changed, your camp is missing, or something here is wrong, tell us
            and we will fix it. Listing is free and always will be.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send us a correction
          </Link>
        </div>
      </div>
    </>
  );
}
