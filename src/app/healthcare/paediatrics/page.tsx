import type { Metadata } from "next";
import Link from "next/link";
import { og, SITE } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import HealthcareDirectory from "@/components/ui/HealthcareDirectory";
import {
  PAEDIATRIC_FACILITIES,
  FACILITIES,
  EMERGENCY_NUMBER,
} from "@/lib/healthcare";

const TITLE = "Paediatric Care in Phuket: Where to Take a Sick Child";
const DESCRIPTION =
  "Where to take a sick child in Phuket: children's clinic opening hours at each hospital, what happens after they close, neighbourhood clinics and children's dentists, filterable by area.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/healthcare/paediatrics",
  },
  openGraph: og({
    title: TITLE,
    description: DESCRIPTION,
    path: "/healthcare/paediatrics",
  }),
};


const FAQ = [
  {
    q: "Where do I take a sick child at 2am in Phuket?",
    a: "To a 24-hour emergency department. None of the hospitals we checked advertises a separate children's emergency department, so at night children are seen in the main ER. Bangkok Hospital Phuket keeps its Children's Clinic open until 11pm every day, the latest we found, and Siriroj's runs until 8pm. After that, both hospitals' 24-hour emergency departments see children. For anything critical, call 1669 rather than driving.",
  },
  {
    q: "Do I need a hospital, or will a clinic do?",
    a: "For a routine checkup, a vaccination, a rash or an ordinary childhood illness, a good clinic is faster and a fraction of the price of the same visit at an international hospital. Go to a hospital instead for a fever in an infant, a fever lasting more than a couple of days in an older child, breathing difficulty, dehydration, unusual drowsiness, any significant injury, and anything you are simply worried about and cannot explain.",
  },
  {
    q: "Where can my child see a doctor without going into town?",
    a: "The Bangkok Hospital group runs neighbourhood clinics in Laguna, Kamala, Rawai, Si Sunthon, Mai Khao and at the airport, open daily until 6pm or 8pm. They handle consultations for everyday illness, wound care, injections including vaccines and blood tests. They are not emergency departments, so anything serious still means a hospital.",
  },
  {
    q: "What is a well baby clinic?",
    a: "A dedicated service for routine infant and child checkups: growth and development monitoring, vaccinations on schedule, and feeding and sleep advice, separate from the queue of sick children. Ask the children's clinic at your hospital whether it runs separate well-child appointments, so a healthy checkup does not mean sitting with sick children.",
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
        name: "Paediatrics",
        item: `${SITE}/healthcare/paediatrics`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Paediatric services in Phuket",
    numberOfItems: PAEDIATRIC_FACILITIES.length,
    itemListElement: PAEDIATRIC_FACILITIES.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.name,
      url: `${SITE}/healthcare/hospitals/${f.slug}`,
    })),
  },
];

export default function PaediatricsPage() {
  // No Phuket hospital we checked advertises a separate children's ER, so the useful split is
  // children's clinic hours, then the 24-hour ER that takes over after them.
  const withHours = PAEDIATRIC_FACILITIES.filter((f) => f.paediatrics?.erHours);
  const clinics = FACILITIES.filter((f) => f.type === "clinic");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`${PAEDIATRIC_FACILITIES.length} paediatric services`}
        title="Paediatric Care in Phuket"
        subtitle="The question that matters at 9pm with a feverish child: whose children's clinic is still open, and where to go once it closes."
        color="teal"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-xl border border-orange/30 bg-orange-50 p-5">
          <h2 className="font-heading text-base font-bold text-purple-dark">
            In an emergency
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-neutral-700">
            Thailand&rsquo;s national emergency medical number is{" "}
            <strong className="font-bold">{EMERGENCY_NUMBER}</strong>. Free, any
            phone, English-speaking dispatch usually available. If your family
            already uses one hospital, save its own ambulance line too, since a
            private ambulance takes you to that hospital rather than the nearest.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            None of the hospitals we checked advertises a separate
            children&rsquo;s emergency department. Instead, the two big private hospitals run
            children&rsquo;s clinics with long daily hours, staffed by
            paediatricians, and after those close children are seen in the
            main 24-hour emergency department.
          </p>
          <p>
            So the thing to save in your phone is not just a hospital name but
            its children&rsquo;s clinic hours. All the hospitals are in and
            around Phuket Town, so families in Rawai, Kamala or Laguna should
            also know their nearest neighbourhood clinic.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-bold text-purple-dark">
              Children&rsquo;s clinic hours
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Paediatricians on duty, then the hospital&rsquo;s 24-hour ER.
            </p>
            <ul className="mt-4 space-y-2">
              {withHours.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/healthcare/hospitals/${f.slug}`}
                    className="text-sm font-semibold text-teal hover:underline"
                  >
                    {f.name}
                  </Link>
                  <span className="block text-xs text-neutral-500">
                    {f.area} · {f.paediatrics!.erHours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-black/5 bg-neutral-50 p-6">
            <h2 className="font-heading text-lg font-bold text-purple-dark">
              Neighbourhood clinics
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              For everyday illness, closer to home. Not for emergencies.
            </p>
            <ul className="mt-4 space-y-2">
              {clinics.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/healthcare/hospitals/${f.slug}`}
                    className="text-sm font-semibold text-teal hover:underline"
                  >
                    {f.name}
                  </Link>
                  <span className="block text-xs text-neutral-500">{f.area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="directory" className="mt-16 scroll-mt-28">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">
            Browse paediatric services
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Filtered to paediatrics. Narrow by area to find what is close, or
            clear the filter to see the whole directory.
          </p>
          <div className="mt-6">
            <HealthcareDirectory initialService="paediatrics" />
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

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-black/5 bg-teal-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">
            New here and not sure how to choose?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            A directory tells you what your options are. Working out how to pick
            between them is a different question, and one worth answering before
            you need to.
          </p>
          <Link
            href="/healthcare/hospitals"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Read the hospital write-ups
          </Link>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-neutral-500">
          This page is information, not medical advice, and is not a
          recommendation to use or avoid any provider. Services change, so
          confirm directly before you rely on anything here.
        </p>
      </div>
    </>
  );
}
