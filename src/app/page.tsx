import type { Metadata } from "next";
import { og, SISTER_SITE, SITE, SITE_NAME } from "@/lib/seo";
import Link from "next/link";
import StatCard from "@/components/ui/StatCard";
import ArticleCard from "@/components/ui/ArticleCard";
import { ARTICLES } from "@/lib/articles";
import { SCHOOLS, AREAS, ALL_CURRICULA } from "@/lib/schools";
import { TopBanner, SidebarSlot } from "@/components/ui/AdSlot";
import { StatRoads, Roundabout } from "@/components/ui/Road";

// Re-render hourly so booked banners start and end on their dates.
export const revalidate = 3600;

const TITLE = "Phuket Families: International Schools and Family Life in Phuket";
const DESCRIPTION =
  "Your Phuket roadmap: every international school on the island compared by area, curriculum and fees, plus practical guides for families living in Phuket.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: og({ title: TITLE, description: DESCRIPTION, path: "/" }),
};

// Tells search engines the site's name (shown above results) and who
// publishes it.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "phuketfamilies.com",
    url: SITE,
    inLanguage: "en",
    publisher: { "@id": `${SITE}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: SITE_NAME,
    url: SITE,
    logo: `${SITE}/apple-icon.png`,
    description: DESCRIPTION,
    areaServed: { "@type": "Place", name: "Phuket, Thailand" },
    parentOrganization: { "@id": "https://www.bkkfamilies.com/#organization", "@type": "Organization", name: "BKK Families", url: "https://www.bkkfamilies.com" },
  },
];

export default function HomePage() {
  const latest = ARTICLES.slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 6);
  const areaCount = AREAS.filter((a) => SCHOOLS.some((s) => s.areas.includes(a.id))).length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="bg-orange px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-base font-extrabold uppercase tracking-widest text-white">
            Your Phuket Roadmap
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight md:text-6xl">
            Family life on the island, mapped out.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Every international school in Phuket in one place, compared by
            area, curriculum and fees, plus practical guides for families
            moving to or living on the island.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/schools"
              className="rounded-full bg-white px-6 py-3 font-semibold text-orange transition hover:bg-white/90"
            >
              Browse Schools
            </Link>
            <a
              href={SISTER_SITE.url}
              className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Moving from Bangkok? Visit {SISTER_SITE.name}
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto -mt-10 max-w-6xl px-4">
        <div className="relative">
          <StatRoads />
          <div className="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard value={String(SCHOOLS.length)} label="International Schools" color="green" />
            <StatCard value={String(areaCount)} label="Areas of the Island" color="teal" />
            <StatCard value={String(ALL_CURRICULA.length)} label="Curricula Compared" color="purple" />
            <StatCard value="14 yrs" label="Helping Families in Thailand" color="orange" />
          </div>
        </div>
      </section>

      {/* TOP BANNER (paid slot, see lib/ads.ts) */}
      <section className="mx-auto mt-10 max-w-6xl px-4">
        <TopBanner />
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-purple-dark">
              Island Life, With Kids
            </h2>
            <p className="mt-4 text-neutral-700">
              Phuket has changed fast. A small market of international schools
              has grown to nearly twenty, from big British and IB campuses with
              boarding to small Montessori, Waldorf and French schools, and
              new names are still arriving.
            </p>
            <p className="mt-4 text-neutral-700">
              Phuket Families comes from the team behind{" "}
              <a href={SISTER_SITE.url} className="font-semibold text-purple hover:underline">
                {SISTER_SITE.name}
              </a>
              , which has helped families in Bangkok since 2012. Same approach
              here: real fees, plain facts, and no paid reviews.
            </p>
          </div>
          <div className="relative">
            <Roundabout />
            <div className="relative z-10 grid grid-cols-2 gap-4 md:auto-rows-fr md:gap-10">
              <Link
                href="/schools"
                className="rounded-xl bg-teal p-6 text-white transition hover:opacity-90"
              >
                <h3 className="font-heading text-xl font-bold">Schools</h3>
                <p className="mt-1 text-sm text-white/90">
                  {SCHOOLS.length} international schools, by area, curriculum
                  and budget.
                </p>
              </Link>
<Link
                href="/healthcare"
                className="rounded-xl bg-green p-6 text-white transition hover:opacity-90"
              >
                <h3 className="font-heading text-xl font-bold">Healthcare</h3>
                <p className="mt-1 text-sm text-white/90">
                  Hospitals, children&apos;s clinics, delivery prices and dentists.
                </p>
              </Link>
              <Link
                href="/camps"
                className="rounded-xl bg-purple p-6 text-white transition hover:opacity-90"
              >
                <h3 className="font-heading text-xl font-bold">Camps</h3>
                <p className="mt-1 text-sm text-white/90">
                  Holiday camps for Christmas, half term, Songkran and summer.
                </p>
              </Link>
              <Link
                href="/blog"
                className="rounded-xl bg-orange p-6 text-white transition hover:opacity-90"
              >
                <h3 className="font-heading text-xl font-bold">Guides</h3>
                <p className="mt-1 text-sm text-white/90">
                  Practical guides for families living in Phuket.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST GUIDES (hidden until the first article is published) */}
      {latest.length > 0 && (
        <section className="bg-sand px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-heading text-3xl font-bold text-purple-dark">
                Latest Guides
              </h2>
              <Link href="/blog" className="text-sm font-semibold text-orange">
                View all →
              </Link>
            </div>
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px]">
              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {latest.map((a, i) => (
                  <div
                    key={a.slug}
                    className={i < 3 ? "flex" : "hidden md:flex lg:hidden xl:flex"}
                  >
                    <ArticleCard article={a} />
                  </div>
                ))}
              </div>
              <aside aria-label="Featured" className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:content-start">
                <SidebarSlot slot="home-sidebar-top" />
                <SidebarSlot slot="home-sidebar-middle" />
                <SidebarSlot slot="home-sidebar-bottom" />
              </aside>
            </div>
          </div>
        </section>
      )}

      {/* ADVERTISE CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-2xl bg-purple px-8 py-12 text-center text-white">
          <h2 className="font-heading text-3xl font-bold">
            Reach Families in Phuket and Bangkok
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Banners on Phuket Families, plus the reach of {SISTER_SITE.name} and
            its Bangkok community. Always clearly labelled.
          </p>
          <Link
            href="/contact#advertise"
            className="mt-6 inline-block rounded-full bg-orange px-8 py-3 font-semibold text-white transition hover:opacity-90"
          >
            See Advertising Options
          </Link>
        </div>
      </section>
    </>
  );
}
