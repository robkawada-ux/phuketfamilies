import type { Metadata } from "next";
import Link from "next/link";
import { og, SITE, SISTER_SITE } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import ArticleCard from "@/components/ui/ArticleCard";
import { ARTICLES } from "@/lib/articles";
import {
  FACILITIES,
  MATERNITY_FACILITIES,
  PAEDIATRIC_FACILITIES,
  ALL_AREAS,
  EMERGENCY_NUMBER,
} from "@/lib/healthcare";

const TITLE = "Healthcare for Families in Phuket";
const DESCRIPTION =
  "Hospitals, maternity, children's care, clinics and dentists for families in Phuket, with published prices where they exist and honest write-ups where they do not.";

export const metadata: Metadata = {
  alternates: { canonical: "/healthcare" },
  title: TITLE,
  description: DESCRIPTION,
  openGraph: og({ title: TITLE, description: DESCRIPTION, path: "/healthcare" }),
};


/** Two pieces carry this section. Everything else is supporting. */
const PILLARS: string[] = [];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Healthcare",
        item: `${SITE}/healthcare`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Healthcare resources for families in Phuket",
    itemListElement: [
      { name: "Hospitals, clinics and dentists", path: "/healthcare/hospitals" },
      { name: "Having a baby in Phuket", path: "/healthcare/maternity" },
      { name: "Paediatric care in Phuket", path: "/healthcare/paediatrics" },
    ].map((x, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: x.name,
      url: `${SITE}${x.path}`,
    })),
  },
];

export default function HealthcarePage() {
  const articles = ARTICLES.filter((a) => a.category === "Healthcare");
  const pillars = PILLARS.map((s) => articles.find((a) => a.slug === s)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a)
  );
  const rest = articles.filter((a) => !PILLARS.includes(a.slug));

  const dental = FACILITIES.filter((f) => f.services.includes("dental"));
  const mentalHealth = FACILITIES.filter((f) =>
    f.services.includes("mental-health")
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`${FACILITIES.length} places across ${ALL_AREAS.length} areas`}
        title="Healthcare in Phuket"
        subtitle="Working out where to have a baby, who to call at 2am with a fever, and what any of it costs is one of the hardest parts of moving here. We have made the searching easier below."
        color="teal"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-orange/30 bg-orange-50 p-5">
          <h2 className="font-heading text-base font-bold text-purple-dark">
            In an emergency
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-700">
            Thailand&rsquo;s national emergency medical number is{" "}
            <strong className="font-bold">{EMERGENCY_NUMBER}</strong>. Free,
            works from any phone, and English-speaking dispatch is usually
            available.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">
            Search the directory
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Pick whichever of these three is closest to what you need. Each one
            opens a searchable list you can narrow by area, by service and by
            the kind of place it is.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Link
              href="/healthcare/hospitals"
              className="group flex flex-col rounded-xl border-2 border-teal/30 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
            >
              <p className="font-heading text-3xl font-bold text-teal">
                {FACILITIES.length}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-purple-dark">
                Hospitals, clinics and dentists
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                The full directory, filterable by what you need, where you are
                and what kind of place it is.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange group-hover:underline">
                Search all {FACILITIES.length} →
              </span>
            </Link>

            <Link
              href="/healthcare/maternity"
              className="group flex flex-col rounded-xl border-2 border-teal/30 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
            >
              <p className="font-heading text-3xl font-bold text-teal">
                {MATERNITY_FACILITIES.length}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-purple-dark">
                Places that deliver babies
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                Every published delivery package price in one table, the
                international hospitals first, plus what each package leaves
                out.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange group-hover:underline">
                Compare delivery prices →
              </span>
            </Link>

            <Link
              href="/healthcare/paediatrics"
              className="group flex flex-col rounded-xl border-2 border-teal/30 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:shadow-md"
            >
              <p className="font-heading text-3xl font-bold text-teal">
                {PAEDIATRIC_FACILITIES.length}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-purple-dark">
                Paediatric services
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                Including which hospitals have a children&rsquo;s emergency
                department staffed by paediatricians, and which do not.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange group-hover:underline">
                Find care for a child →
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-2 border-purple/30 bg-purple-50 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-purple">
            Coming to Phuket
          </p>
          <h2 className="mt-1 font-heading text-2xl font-bold text-purple-dark">
            New hospitals on the way
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-700">
            <li>
              <strong>Bumrungrad International Hospital Phuket</strong>, a
              150-bed hospital in Mai Khao, under ten minutes from the airport.
              Bumrungrad now says it will open in the third quarter of 2027.
            </li>
            <li>
              <strong>PSU Hospital Phuket</strong>, a government hospital for
              complicated cases being built by Prince of Songkla University,
              also in Mai Khao.
            </li>
            <li>
              <strong>Wattanapat Hospital Phuket</strong>, a new private hospital
              from the southern Thai group that runs hospitals in Trang, Ao Nang
              and Samui.
            </li>
          </ul>
          <p className="mt-3 text-xs text-neutral-500">
            We will add each one to the directory once it is open and we can
            check its services.
          </p>
        </div>

        {pillars.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-purple-dark">
              Start here
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {pillars.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="block rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-bold text-purple-dark">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-orange">
                    Read it →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-neutral-50 p-6">
            <h2 className="font-heading text-lg font-bold text-purple-dark">
              Dentists
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Dental care in Phuket is good value, and there is a dedicated
              children&rsquo;s dental clinic in Phuket Town.
            </p>
            <ul className="mt-4 space-y-1.5">
              {dental.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/healthcare/hospitals/${f.slug}`}
                    className="text-sm font-semibold text-teal hover:underline"
                  >
                    {f.name}
                  </Link>
                  <span className="ml-2 text-xs text-neutral-500">{f.area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-neutral-50 p-6">
            <h2 className="font-heading text-lg font-bold text-purple-dark">
              Mental health and development
            </h2>
            {mentalHealth.length > 0 ? (
              <ul className="mt-4 space-y-1.5">
                {mentalHealth.map((f) => (
                  <li key={f.slug}>
                    <Link
                      href={`/healthcare/hospitals/${f.slug}`}
                      className="text-sm font-semibold text-teal hover:underline"
                    >
                      {f.name}
                    </Link>
                    <span className="ml-2 text-xs text-neutral-500">{f.area}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                We have not yet verified a standalone child psychologist or
                developmental clinic on the island. For now, the children&rsquo;s
                clinics at Bangkok Hospital Phuket and Siriroj are the starting
                point, and many families use online counselling or travel to
                Bangkok for assessments. If you know a practitioner families
                trust, please tell us.
              </p>
            )}
            <a
              href={`${SISTER_SITE.url}/learning-support`}
              className="mt-4 inline-block text-sm font-semibold text-orange hover:underline"
            >
              Learning support providers in Bangkok on {SISTER_SITE.name} →
            </a>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-black/5 bg-teal-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Where we cover
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            {ALL_AREAS.length} areas of the island, because on Phuket the right
            hospital is often the good one you can reach quickly. The big
            hospitals are all in and around Phuket Town, so families on the west
            coast and in the south should know their nearest clinic too:{" "}
            {ALL_AREAS.join(", ")}.
          </p>
          <Link
            href="/healthcare/hospitals"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Filter the directory by area
          </Link>
        </div>

        {rest.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-purple-dark">
              More reading
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {rest.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 rounded-xl border border-black/5 bg-neutral-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Know somewhere we have missed?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            This directory grows from what families actually tell us. If your
            paediatrician, clinic or dentist should be here, or something listed
            is out of date, send it over. Listing is free and always will be.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Tell us about a provider
          </Link>
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-xs leading-relaxed text-neutral-500">
          Everything in this section is information, not medical advice. We are
          parents, not clinicians. Nothing here is a
          recommendation to use or avoid any particular hospital, doctor or
          treatment, and it is no substitute for speaking to a qualified
          professional about your own family.
        </p>
      </div>
    </>
  );
}
