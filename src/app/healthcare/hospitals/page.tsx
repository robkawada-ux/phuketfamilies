import type { Metadata } from "next";
import Link from "next/link";
import { og, SITE } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import HealthcareDirectory from "@/components/ui/HealthcareDirectory";
import {
  FACILITIES,
  MATERNITY_FACILITIES,
  PAEDIATRIC_FACILITIES,
  EMERGENCY_NUMBER,
} from "@/lib/healthcare";

const TITLE = "Hospitals and Clinics in Phuket for Families";
const DESCRIPTION =
  "Every hospital, clinic and dental practice we can verify for families in Phuket, with children's clinic hours, published delivery prices and what each place is actually good at.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/healthcare/hospitals" },
  openGraph: og({
    title: TITLE,
    description: DESCRIPTION,
    path: "/healthcare/hospitals",
  }),
};


const FAQ = [
  {
    q: "How do I choose between all of these?",
    a: "On Phuket the choice is narrower than it looks. The three main private hospitals, Bangkok Hospital Phuket, Bangkok Hospital Siriroj and Mission Hospital, are all in or near Phuket Town, so the real question is distance. If you live on the west coast or in the south, pick a neighbourhood clinic for everyday illness and know which hospital you will drive to for anything serious. Then check whether your insurer settles directly with that hospital.",
  },
  {
    q: "Will my insurance be billed directly?",
    a: "At the big international hospitals, usually yes, through their international patient desk. At mid-market Thai private hospitals it depends on a shorter panel of insurers, and at small clinics you should expect to pay and claim back. Confirm before admission rather than on the day, and be aware that maternity in particular usually carries a waiting period of ten to twelve months or longer, so a policy bought after conception will not cover the birth.",
  },
  {
    q: "What is the difference between the hospital types here?",
    a: "International hospitals are built around foreign patients, with an international desk and prices to match; on Phuket that means the two Bangkok Hospital group hospitals. Private hospitals are the mainstream Thai private sector, usually cheaper, with English that varies. Public hospitals charge government rates and handle the island's most serious cases, but expect queues and less English. Clinics handle the routine things that do not need a hospital at all.",
  },
  {
    q: "Do I need to speak Thai?",
    a: "Not at the international hospitals, which treat large numbers of foreign patients every year. At smaller private hospitals English is usually available but patchier, and at the government hospitals, Vachira and Patong, you should not rely on it. Much of the price gap between them is a gap in how much translation and hand-holding is included.",
  },
  {
    q: "How current is this?",
    a: "Every entry carries the date we last checked it, and so does each maternity package price separately, because prices move on a different cycle from phone numbers. Anything older than sixty days shows a warning on its page. Prices were read from each provider's own published page and each entry links to the page it came from, so you can check our working. Where a provider does not publish something we say so rather than estimating.",
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
        name: "Hospitals and clinics",
        item: `${SITE}/healthcare/hospitals`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hospitals, clinics and dental practices in Phuket for families",
    numberOfItems: FACILITIES.length,
    itemListElement: FACILITIES.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.name,
      url: `${SITE}/healthcare/hospitals/${f.slug}`,
    })),
  },
];

export default function HospitalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Where families actually go"
        title="Hospitals and Clinics in Phuket"
        subtitle={`${FACILITIES.length} places checked and described honestly, including ${MATERNITY_FACILITIES.length} that deliver babies and ${PAEDIATRIC_FACILITIES.length} with a paediatric service.`}
        color="teal"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Choosing a hospital on an island you have just moved to is mostly
            guesswork. Most of what you find online is written for tourists
            with a scooter injury, not for a family with a feverish toddler, and
            several guides get basic facts wrong, such as where a hospital
            actually is.
          </p>
          <p>
            So this directory does the boring thing. Every entry says what the
            place is good at, where it is, what it costs where that is
            published, and what we would tell a friend about the downsides.
            Nobody pays to be listed. Where a hospital does not publish a price
            we say so rather than guessing, and every price links back to the
            page we read it on.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-orange/30 bg-orange-50 p-5">
          <h2 className="font-heading text-base font-bold text-purple-dark">
            In an emergency
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-700">
            Thailand&rsquo;s national emergency medical number is{" "}
            <strong className="font-bold">{EMERGENCY_NUMBER}</strong>. It is
            free, it works from any phone, and English-speaking dispatch is
            usually available. If your family already uses one hospital, save
            its own ambulance line in your phone as well, since a private
            ambulance from your own hospital will take you to that hospital.
          </p>
        </div>

        <div id="directory" className="mt-12 scroll-mt-28">
          <HealthcareDirectory />
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-5 md:grid-cols-2">
          <Link
            href="/healthcare/maternity"
            className="block rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="font-heading text-3xl font-bold text-teal">
              {MATERNITY_FACILITIES.length}
            </p>
            <h2 className="mt-1 font-heading text-lg font-bold text-purple-dark">
              Hospitals that deliver babies
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              With every published delivery package price in one table, the
              international hospitals first, and the exclusions that decide your
              actual bill.
            </p>
          </Link>

          <Link
            href="/healthcare/paediatrics"
            className="block rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="font-heading text-3xl font-bold text-teal">
              {PAEDIATRIC_FACILITIES.length}
            </p>
            <h2 className="mt-1 font-heading text-lg font-bold text-purple-dark">
              Paediatric services
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Including which hospitals have a children&rsquo;s emergency
              department staffed by paediatricians, and which do not.
            </p>
          </Link>
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
            Spotted something wrong, or somewhere we have missed?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Prices and phone numbers change constantly and this is only useful
            if it is current. If a figure here is out of date, or your practice
            is missing, tell us and we will fix it. Listing is free and always
            will be.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send us a correction
          </Link>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-neutral-500">
          This directory is information, not medical advice. We are parents,
          not clinicians. Nothing on this page is a
          recommendation to use or avoid any particular hospital, doctor or
          treatment, and it is no substitute for speaking to a qualified
          professional about your own family. Always confirm prices, services
          and insurance arrangements with the provider directly before you rely
          on them.
        </p>
      </div>
    </>
  );
}
