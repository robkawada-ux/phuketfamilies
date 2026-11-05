import type { Metadata } from "next";
import { og, SITE } from "@/lib/seo";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SchoolBreakTimeline from "@/components/ui/SchoolBreakTimeline";
import {
  SCHOOL_CALENDARS,
  BREAK_WINDOWS,
  CALENDAR_LAST_VERIFIED,
  type SchoolCalendar,
  type BreakWindowId,
} from "@/lib/schoolBreaks";

const TITLE = "Phuket International School Term Dates and Holidays 2026/27";
const DESCRIPTION =
  "Christmas, February half term and Songkran break dates for Phuket's international schools in 2026/27, read from each school's own calendar, plus when the island's holiday camps run.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/school-breaks` },
  openGraph: og({ title: TITLE, description: DESCRIPTION, path: "/school-breaks" }),
};

const FAQ = [
  {
    q: "Do all Phuket international schools have the same holidays?",
    a: "No. At the schools we hold, February half term falls anywhere between 12 and 22 February, and the April break runs 3 to 18 April at BISP and Kajonkiet but 12 to 26 April at BCIS. Christmas is the one break that lines up closely, roughly mid December to the first week of January.",
  },
  {
    q: "When does the Christmas holiday start at Phuket schools in 2026?",
    a: "Christmas breaks at the schools we hold start on 12 or 14 December 2026, and children go back between 4 and 6 January 2027: BISP on 4 January, BCIS on 5 January and Kajonkiet on 6 January.",
  },
  {
    q: "When is the Songkran break at Phuket international schools in 2027?",
    a: "BISP and Kajonkiet are off from 3 to 18 April 2027 and BCIS from 12 to 26 April. Songkran itself is 13 to 15 April, so every school we hold is closed that week.",
  },
  {
    q: "When do Phuket international schools finish for the summer in 2027?",
    a: "Kajonkiet and BCIS both have their last day on 25 June 2027. Check your own school's calendar, because last days vary by a week or more between schools.",
  },
  {
    q: "When should I book a holiday camp in Phuket?",
    a: "Christmas camps are taking bookings now. Most summer camps publish their 2027 dates between February and April, often with early bird prices, so that is the time to book for summer.",
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
      { "@type": "ListItem", position: 2, name: "School Term Dates", item: `${SITE}/school-breaks` },
    ],
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmt(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** "12 to 16 Feb" when in the same month, otherwise both months shown. */
function range(start: string, end: string): string {
  const [, sm, sd] = start.split("-").map(Number);
  const [, em, ed] = end.split("-").map(Number);
  if (sm === em) return `${sd} to ${ed} ${MONTHS[em - 1]}`;
  return `${sd} ${MONTHS[sm - 1]} to ${ed} ${MONTHS[em - 1]}`;
}

function breakFor(school: SchoolCalendar, window: BreakWindowId) {
  const found = school.breaks.filter((b) => b.window === window);
  if (found.length === 0) return null;
  return found.map((b) => range(b.start, b.end)).join(", ");
}

const TABLE_WINDOWS: { id: BreakWindowId; head: string }[] = [
  { id: "winter-2026", head: "Christmas" },
  { id: "spring-2027", head: "February" },
  { id: "songkran-2027", head: "Easter and Songkran" },
];

/** Schools in our directory whose 2026/27 calendar we could not read, and why. */
const NOT_YET: { name: string; slug: string; why: string }[] = [
  { name: "UWC Thailand", slug: "uwc-thailand-international-school", why: "we could not find its 2026/27 calendar on a public page" },
  { name: "Oak Meadow", slug: "oak-meadow-international-school", why: "its calendar is in the parent portal, not on the public site" },
  { name: "QSI Phuket", slug: "qsi-international-school-of-phuket", why: "its calendar is a PDF we could not open" },
  { name: "Lighthouse", slug: "lighthouse-international-school-phuket", why: "its calendars are published as images" },
  { name: "PGIS", slug: "prasan-gateway-international-school", why: "its calendar is published as an image" },
  { name: "RIS Phuket", slug: "ruamrudee-international-school-phuket", why: "its calendar page shows single events, not the breaks" },
  { name: "Glenalmond Phuket", slug: "glenalmond-phuket-international-school", why: "its calendar is a PDF we could not open" },
];

const WINDOW_IDS: BreakWindowId[] = ["winter-2026", "spring-2027", "songkran-2027", "summer-2027"];

export default function SchoolBreaksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Plan the year"
        title={TITLE}
        subtitle="When the kids are actually off, school by school, read from the calendars themselves."
        color="teal"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            There is no single Phuket school holiday calendar. Schools a short drive apart break
            on different weeks, and the gaps matter when you are booking a camp, a flight home or
            a week of childcare.
          </p>
          <p>
            So we read the schools&rsquo; own published calendars. Every date below comes from a
            school&rsquo;s own calendar page or PDF, with the source linked, and nothing is filled in
            from what British schools usually do. Where a school&rsquo;s dates were not readable, we
            say so rather than guess.
          </p>
        </div>

        <div className="mt-16">
          <div className="mx-auto mb-6 max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-purple-dark">The rest of the year at a glance</h2>
            <p className="mt-2 text-neutral-600">Each bar is a break. The gaps between schools are the point.</p>
          </div>
          <SchoolBreakTimeline />
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-purple-dark">School by school</h2>
            <p className="mb-6 mt-2 text-neutral-600">
              Dates are the days children are off school, including weekends and staff training days
              where the school lists them.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-purple/20 text-left">
                  <th className="py-3 pr-4 font-heading text-purple-dark">School</th>
                  {TABLE_WINDOWS.map((w) => (
                    <th key={w.id} className="py-3 pr-4 font-heading text-purple-dark">{w.head}</th>
                  ))}
                  <th className="py-3 font-heading text-purple-dark">Last day of the year</th>
                </tr>
              </thead>
              <tbody>
                {SCHOOL_CALENDARS.map((s) => (
                  <tr
                    key={s.name}
                    id={s.schoolSlug ?? undefined}
                    className="scroll-mt-40 border-b border-black/5 align-top target:bg-orange-50"
                  >
                    <td className="py-3 pr-4 font-semibold">
                      {s.schoolSlug ? (
                        <Link href={`/schools/${s.schoolSlug}`} className="text-orange">{s.name}</Link>
                      ) : (
                        s.name
                      )}
                      {s.confidence !== "verified" && (
                        <span className="ml-2 rounded bg-neutral-100 px-1.5 py-0.5 text-xs font-normal text-neutral-500">
                          {s.confidence === "partial" ? "partial" : "unconfirmed"}
                        </span>
                      )}
                    </td>
                    {TABLE_WINDOWS.map((w) => (
                      <td key={w.id} className="py-3 pr-4 text-neutral-600">
                        {breakFor(s, w.id) ?? <span className="text-neutral-400">not confirmed</span>}
                      </td>
                    ))}
                    <td className="py-3 text-neutral-600">
                      {s.termEnd ? fmt(s.termEnd) : <span className="text-neutral-400">not confirmed</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-2 text-sm text-neutral-600">
            {SCHOOL_CALENDARS.flatMap((s) =>
              s.breaks
                .filter((b) => b.note)
                .map((b) => (
                  <p key={`${s.name}-${b.window}`}>
                    <span className="font-semibold text-neutral-700">{s.name.split(" (")[0]}:</span> {b.note}
                  </p>
                )),
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">The breaks, and when the camps run</h2>
          <div className="mt-6 space-y-4">
            {BREAK_WINDOWS.filter((w) => WINDOW_IDS.includes(w.id)).map((w) => (
              <div key={w.id} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
                <h3 className="font-heading font-bold text-purple-dark">{w.label}</h3>
                <p className="mt-1 text-sm font-semibold text-teal">
                  Camps run {range(w.start, w.end)}
                  {w.coreStart && w.coreEnd && (
                    <span className="font-normal text-neutral-500">{"  busiest: "}{range(w.coreStart, w.coreEnd)}</span>
                  )}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{w.summary}</p>
                <p className="mt-2 text-sm">
                  <Link href="/camps" className="font-semibold text-orange">
                    Find a camp
                  </Link>
                  {w.id === "winter-2026" && (
                    <>
                      {" or read our "}
                      <Link href="/blog/christmas-holiday-camps-phuket-2026" className="font-semibold text-orange">
                        guide to Christmas camps in Phuket
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">Schools not on this page yet</h2>
          <p className="mt-2 text-neutral-600">
            We only show dates we have read from a school&rsquo;s own calendar. These schools are in our
            directory, but we could not read their 2026/27 breaks:
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
            {NOT_YET.map((s) => (
              <li key={s.slug}>
                <Link href={`/schools/${s.slug}`} className="font-semibold text-orange">{s.name}</Link>
                {": "}
                {s.why}.
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            The smaller schools in our directory are not on this page yet either. If you have your
            school&rsquo;s calendar, send it over and we will add it.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">Worth knowing</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
            <li>
              <strong>Thai public holidays can move.</strong> Schools close for them, and if the
              government changes a date during the year, school calendars change with it.
            </li>
            <li>
              <strong>Campuses can differ.</strong> HeadStart and Lighthouse run more than one campus,
              and kindergartens sometimes keep different dates from the main school.
            </li>
            <li>
              <strong>Always check your own school&rsquo;s calendar</strong> before you pay a deposit.
              This page is a planning tool, not a substitute.
            </li>
            <li>
              <strong>Comparing with Bangkok?</strong> Our sister site has the same page for{" "}
              <a href="https://www.bkkfamilies.com/school-breaks" className="font-semibold text-orange">
                Bangkok international school term dates
              </a>
              .
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-black/5 bg-neutral-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">Where these dates come from</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            {SCHOOL_CALENDARS.map((s) => (
              <li key={s.name}>
                <span className="font-semibold text-neutral-700">{s.name}</span>
                {": "}
                <a href={s.sourceUrl} target="_blank" rel="noreferrer" className="text-orange">{s.sourceLabel}</a>
                {s.caveat && <span className="block text-neutral-500">{s.caveat}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">Questions parents ask</h2>
          <div className="mt-6 space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
                <h3 className="font-heading font-bold text-purple-dark">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">Next</h2>
          <ul className="mt-4 space-y-3 text-neutral-700">
            <li>
              <Link href="/camps" className="font-semibold text-orange">Holiday camps in Phuket</Link>, sorted by break.
            </li>
            <li>
              <Link href="/schools" className="font-semibold text-orange">Our schools directory</Link>, if you are still
              choosing a school rather than planning around one.
            </li>
            <li>
              <Link href="/blog/where-to-live-in-phuket-with-kids" className="font-semibold text-orange">
                Where to live in Phuket with kids
              </Link>
              , area by area.
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-black/5 bg-neutral-50 p-6">
          <h2 className="font-heading text-lg font-bold text-purple-dark">Spot a date that is wrong?</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Calendars get revised and schools publish late. If a date here is wrong, or your school
            is missing and you have the calendar to hand, tell us and we will fix it the same week.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Send us a correction
          </Link>
          <p className="mt-6 text-xs text-neutral-500">
            All dates checked {fmt(CALENDAR_LAST_VERIFIED)} against each school&rsquo;s published calendar.
          </p>
        </div>
      </div>
    </>
  );
}
