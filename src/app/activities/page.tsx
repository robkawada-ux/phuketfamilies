import type { Metadata } from "next";
import { og, SITE, SISTER_SITE } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ActivitiesDirectory from "@/components/ui/ActivitiesDirectory";
import { ACTIVITIES } from "@/lib/activities";

const TITLE = "Things to Do With Kids in Phuket";
const DESCRIPTION =
  "Days out and weekly classes for kids in Phuket, from indoor play, aquariums and water parks to swimming, gymnastics, martial arts and surfing, with real hours, ages and prices. Filter for indoor options on rainy days.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/activities` },
  openGraph: og({ title: TITLE, description: DESCRIPTION, path: "/activities" }),
};

const DAYS_OUT = ACTIVITIES.filter((a) => a.type === "Day out").length;
const CLASSES = ACTIVITIES.filter((a) => a.type === "Weekly class").length;

const FAQ = [
  {
    q: "What can I do with kids in Phuket when it rains?",
    a: "Tick \"Indoors only\" in the directory above. The malls carry most of the load: Kidzooona and Froggy's Fun Park in Jungceylon, Aquaria under Central Phuket Floresta, and the Adventure Village at Blue Tree. For older children, REBEL Rock Climbing and the indoor go-karts are good rainy-day options too.",
  },
  {
    q: "What is free to do with kids in Phuket?",
    a: "Set the price filter to Free. The beaches are the obvious answer, and the Big Buddha and an evening at the Sunday Walking Street in Phuket Old Town cost nothing to visit. The government-run Phuket Aquarium at Cape Panwa is not free, but costs a small fraction of the big attractions.",
  },
  {
    q: "How much does an indoor playground cost in Phuket?",
    a: "Roughly 400 to 700 baht per child for a few hours or a day, with adults paying a smaller fee. Kidzooona in Jungceylon charges 370 baht for two hours and Blue Tree's Adventure Village 400 baht for an hour or 700 baht for the day.",
  },
  {
    q: "Can children surf in Phuket all year?",
    a: "No. Phuket's surf season runs roughly from May to November, when the southwest monsoon brings waves to the west coast. Outside that season the sea is usually flat, and the surf schools switch to stand-up paddleboarding.",
  },
  {
    q: "How do weekly classes work in Phuket?",
    a: "Most clubs sell a term, a month or a block of sessions rather than single classes, though many martial arts gyms also take drop-ins. Several programmes, such as gymnastics and circus arts, are based at international schools like BISP, so ask whether they take children from other schools. Classes usually pause in the school holidays and many run holiday camps instead; see our camps directory for those.",
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
      { "@type": "ListItem", position: 2, name: "Activities", item: `${SITE}/activities` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Things to do with kids in Phuket",
    numberOfItems: ACTIVITIES.length,
    itemListElement: ACTIVITIES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.name,
      url: `${SITE}/activities/${a.slug}`,
    })),
  },
];

const ALSO = [
  {
    href: "/camps",
    title: "Holiday camps",
    desc: "Camp weeks for Christmas, half term, Songkran and summer.",
  },
  {
    href: "/schools",
    title: "Schools",
    desc: "Every international school on the island, by area and fees.",
  },
  {
    href: "/healthcare/paediatrics",
    title: "Children's doctors",
    desc: "Where to take a sick child, and when the clinics are open.",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Days out and weekly classes"
        title="Things to Do With Kids in Phuket"
        subtitle={`${DAYS_OUT} days out and ${CLASSES} weekly classes, with real hours, ages and prices. Filter for indoors when the rain comes in.`}
        color="green"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Living on Phuket means the beach is never far away, but every
            parent on the island knows the afternoons when it is too hot, too
            wet or simply time for something different. This is the list for
            those days: days out when you want a plan, weekly classes when you
            want a routine, and an indoors filter for when the rain arrives.
          </p>
          <p>
            Every card shows the ages, the price and the part of the island.
            Where a price is not published we say so rather than guess, and
            where we have taken a detail from a recent guide rather than the
            operator&rsquo;s own page, the listing tells you to check before you
            go. Nobody pays to be listed.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {ALSO.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl border border-black/5 bg-teal-50 p-4 transition hover:shadow-md"
            >
              <p className="font-heading font-bold text-purple-dark">{l.title}</p>
              <p className="mt-1 text-sm text-neutral-600">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div id="directory" className="mt-12 scroll-mt-28">
          <ActivitiesDirectory />
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
                <h3 className="font-heading font-bold text-purple-dark">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-black/5 bg-neutral-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Run an activity, or know one we have missed?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            If your hours or prices have changed, your venue or class is
            missing, or something here is wrong, tell us and we will fix it.
            Listing is free and always will be.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send us a correction
          </Link>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-black/5 bg-teal-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            Spending time in Bangkok too?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Our sister site BKK Families has the same kind of directory for
            Bangkok, with more than 50 days out and weekly classes.
          </p>
          <a
            href={`${SISTER_SITE.url}/activities`}
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Things to do with kids in Bangkok
          </a>
        </div>
      </div>
    </>
  );
}
