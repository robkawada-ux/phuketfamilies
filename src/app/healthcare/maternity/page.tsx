import type { Metadata } from "next";
import Link from "next/link";
import { og, SITE, SISTER_SITE } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import HealthcareDirectory from "@/components/ui/HealthcareDirectory";
import { MATERNITY_FACILITIES, EMERGENCY_NUMBER } from "@/lib/healthcare";

const TITLE = "Having a Baby in Phuket: Hospitals and Delivery Prices";
const DESCRIPTION =
  "Which Phuket hospitals deliver babies, the delivery package prices that are actually published, the conditions attached to them, and the birth registration change families need to know about.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/healthcare/maternity" },
  openGraph: og({
    title: TITLE,
    description: DESCRIPTION,
    path: "/healthcare/maternity",
  }),
};


const FAQ = [
  {
    q: "How much does it cost to have a baby in Phuket?",
    a: "Bangkok Hospital Phuket is the only hospital on the island we found publishing a delivery price: its all-inclusive packages for non-Thai mothers run from 67,000 to 166,000 baht, depending on the type of birth and room. Siriroj and Mission Hospital quote on request. That is well below Bangkok, where the big international hospitals start at around 110,000 baht for a normal delivery. Package prices assume an uncomplicated birth, and antenatal care is usually billed separately.",
  },
  {
    q: "Which hospital should I choose for the birth?",
    a: "For a straightforward pregnancy, the real variables are the obstetrician you trust, how far you will drive in labour, and what you want to pay. It stops being a matter of preference if the pregnancy is high risk, you are expecting twins, or the baby may need intensive care, in which case ask directly what level of neonatal care the hospital can provide without transferring you.",
  },
  {
    q: "Why are some prices missing?",
    a: "Because we could not find a published figure, and we would rather show the gap than fill it with an estimate. Be careful with Mission Hospital in particular: the cheap Mission delivery packages quoted online belong to Mission Hospital in Bangkok, not Phuket.",
  },
  {
    q: "Does insurance cover giving birth in Thailand?",
    a: "Only if you bought maternity cover well before conceiving. Maternity is typically an add-on with a waiting period of around ten months, and sometimes longer, so a policy taken out after a positive test will not pay for the birth. This is standard across the market rather than one insurer's quirk.",
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
        name: "Healthcare",
        item: `${SITE}/healthcare`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Having a baby",
        item: `${SITE}/healthcare/maternity`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Phuket hospitals that deliver babies",
    numberOfItems: MATERNITY_FACILITIES.length,
    itemListElement: MATERNITY_FACILITIES.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.name,
      url: `${SITE}/healthcare/hospitals/${f.slug}`,
    })),
  },
];

function baht(n: number): string {
  return `฿${n.toLocaleString()}`;
}

export default function MaternityPage() {
  /**
   * Most expensive first. The international hospitals are the names families
   * arrive already knowing, so the table starts where their expectations are
   * and works down to what the same birth costs elsewhere.
   */
  const priced = MATERNITY_FACILITIES.filter(
    (f) => typeof f.maternity?.packageFrom === "number"
  ).sort(
    (a, b) => (b.maternity!.packageFrom ?? 0) - (a.maternity!.packageFrom ?? 0)
  );
  /**
   * Every hospital that delivers babies gets a row, priced or not. Hiding the
   * unpriced ones in a footnote below the table made them effectively
   * invisible, which is how a hospital already in the directory looked missing.
   */
  const unpriced = MATERNITY_FACILITIES.filter(
    (f) => typeof f.maternity?.packageFrom !== "number"
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`${MATERNITY_FACILITIES.length} hospitals compared`}
        title="Having a Baby in Phuket"
        subtitle="Which hospitals on the island deliver babies, what is actually published about the price, and the conditions that decide your bill."
        color="teal"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Phuket has three private hospitals that deliver babies, all in or
            near Phuket Town, plus the government hospital, Vachira. Only one of
            them publishes a delivery price, which makes budgeting harder than it
            should be.
          </p>
          <p>
            Below is what is published, with the date we checked it and a link
            to the page it came from, then the hospitals you will need to call
            for a quote.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-purple-dark text-left">
                <th className="py-2 pr-4 font-heading font-bold text-purple-dark">
                  Hospital
                </th>
                <th className="py-2 pr-4 font-heading font-bold text-purple-dark">
                  Area
                </th>
                <th className="py-2 pr-4 font-heading font-bold text-purple-dark">
                  From
                </th>
                <th className="py-2 font-heading font-bold text-purple-dark">
                  Up to
                </th>
              </tr>
            </thead>
            <tbody>
              {priced.map((f) => (
                <tr key={f.slug} className="border-b border-black/5">
                  <td className="py-2.5 pr-4">
                    <Link
                      href={`/healthcare/hospitals/${f.slug}`}
                      className="font-semibold text-teal hover:underline"
                    >
                      {f.name}
                    </Link>
                  </td>
                  <td className="py-2.5 pr-4 text-neutral-600">{f.area}</td>
                  <td className="py-2.5 pr-4 font-semibold text-neutral-800">
                    {baht(f.maternity!.packageFrom!)}
                  </td>
                  <td className="py-2.5 text-neutral-600">
                    {f.maternity?.packageTo
                      ? baht(f.maternity.packageTo)
                      : "One package only"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-xs leading-relaxed text-neutral-500">
          Prices are each hospital&rsquo;s own published figure for an
          uncomplicated birth, read from their package page and dated on their
          entry. Only hospitals that publish a price appear above.
        </p>

        {unpriced.length > 0 && (
          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-black/5 bg-neutral-50 p-6">
            <h2 className="font-heading text-lg font-bold text-purple-dark">
              Also deliver babies, but do not publish a price
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              These {unpriced.length} are not in the table because there is no
              figure to put in it. They are worth calling, particularly if one is
              near you, since an unpublished price is not the same as a high one.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {unpriced.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/healthcare/hospitals/${f.slug}`}
                    className="text-sm font-semibold text-teal hover:underline"
                  >
                    {f.name}
                  </Link>
                  <span className="block text-xs text-neutral-500">
                    {f.area}
                    {f.maternity?.pricing === "on-enquiry"
                      ? " · quotes on enquiry"
                      : " · not yet confirmed by us"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-neutral-500">
              &ldquo;Quotes on enquiry&rdquo; means we checked and the hospital
              does not publish. &ldquo;Not yet confirmed&rdquo; means we have not
              finished checking, which is on us rather than on them. If you get a
              quote from any of these, send it over and we will add it.
            </p>
          </div>
        )}

        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-orange/30 bg-orange-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            The price is not the bill
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Packages are priced for a birth that goes to plan. Bangkok Hospital
            Phuket&rsquo;s packages are for non-Thai mothers with a full-term
            pregnancy only, and complications for mother or baby are billed
            separately. Ask every hospital what happens to the price if a planned
            normal birth becomes a caesarean, whether antenatal visits are
            included, and what level of newborn intensive care it can provide
            without transferring your baby.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            <strong>Birth registration changed in August 2026.</strong> From 14
            August 2026, Bangkok Hospital Phuket no longer registers births or
            collects birth certificates on families&rsquo; behalf. It still
            issues the medical birth documents, but parents must take them to
            the district registration office themselves.
          </p>
          <a
            href={`${SISTER_SITE.url}/healthcare/maternity`}
            className="mt-4 inline-block text-sm font-semibold text-teal hover:underline"
          >
            Compare Bangkok delivery prices on {SISTER_SITE.name} →
          </a>
        </div>

        <div id="directory" className="mt-16 scroll-mt-28">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">
            Browse the hospitals
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Filtered to maternity. Clear the filter to see everything in the
            directory.
          </p>
          <div className="mt-6">
            <HealthcareDirectory initialService="maternity" />
          </div>
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

        <p className="mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-neutral-500">
          This page is information, not medical advice, and is not a
          recommendation to use or avoid any hospital. Prices change and packages
          are withdrawn, so confirm directly with the hospital before you rely on
          anything here. In an emergency, Thailand&rsquo;s national ambulance
          number is {EMERGENCY_NUMBER}.
        </p>
      </div>
    </>
  );
}
