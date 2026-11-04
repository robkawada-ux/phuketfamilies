import type { Metadata } from "next";
import { og, CONTACT_EMAIL, SISTER_SITE } from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import { SLOT_SPECS } from "@/lib/ads";

const DESCRIPTION =
  "Get in touch with Phuket Families, or advertise to families in Phuket, with packages that can include BKK Families and its Bangkok community.";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact & Advertising",
  description: DESCRIPTION,
  openGraph: og({ title: "Contact & Advertising", description: DESCRIPTION, path: "/contact" }),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Find the right solution for you"
        title="Contact Us"
        subtitle="A school to add, a correction, or an advertising question? We read everything."
        color="purple"
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-xl bg-teal p-6 text-center text-white transition hover:opacity-90"
          >
            <p className="text-xs uppercase tracking-wide text-white/80">Email</p>
            <p className="mt-1 font-heading text-lg font-bold">{CONTACT_EMAIL}</p>
          </a>
          <a
            href="https://line.me/ti/p/~bachsuites"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-orange p-6 text-center text-white transition hover:opacity-90"
          >
            <p className="text-xs uppercase tracking-wide text-white/80">LINE</p>
            <p className="mt-1 font-heading text-lg font-bold">bachsuites</p>
          </a>
          <a
            href={SISTER_SITE.url}
            className="rounded-xl bg-green p-6 text-center text-white transition hover:opacity-90"
          >
            <p className="text-xs uppercase tracking-wide text-white/80">Sister site</p>
            <p className="mt-1 font-heading text-lg font-bold">{SISTER_SITE.name}, Bangkok</p>
          </a>
        </div>

        <div className="mt-12 rounded-xl border border-black/5 bg-sand p-6">
          <h2 className="font-heading text-xl font-bold text-purple-dark">
            Schools: get listed for free
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Every licensed international school in Phuket gets a free listing
            and its own page. If your school is missing, or something on your
            page is out of date, email us your current fee schedule and a
            campus photo you are happy for us to use, and we will update it.
          </p>
        </div>

        {/* Why advertise */}
        <div id="advertise" className="mt-20 scroll-mt-32">
          <p className="text-xs font-bold uppercase tracking-wide text-orange">
            Advertise With Us
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-purple-dark md:text-4xl">
            Reach families in Phuket, and in Bangkok too.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Phuket Families is the island edition of {SISTER_SITE.name}, the
            family directory behind the Bangkok Expat Families community.
            Families researching a school, a doctor or a move to Phuket land
            here, and many of them are coming from Bangkok. Packages can cover
            either site, or both.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-purple p-6 text-white">
              <p className="font-heading text-3xl font-bold">2 sites</p>
              <p className="mt-1 text-sm text-white/80">
                Phuket Families and {SISTER_SITE.name}, booked together or
                separately
              </p>
            </div>
            <div className="rounded-xl bg-teal p-6 text-white">
              <p className="font-heading text-3xl font-bold">Nearly 40K</p>
              <p className="mt-1 text-sm text-white/80">
                Members in the Bangkok Expat Families Facebook group, available
                in combined packages
              </p>
            </div>
            <div className="rounded-xl bg-green p-6 text-white">
              <p className="font-heading text-3xl font-bold">Since 2012</p>
              <p className="mt-1 text-sm text-white/80">
                Helping families in Thailand choose schools, doctors and
                activities
              </p>
            </div>
          </div>
        </div>

        {/* Who it's for */}
        <div className="mt-20">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">
            Built for the businesses families actually search for
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-purple-dark">Schools</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Phuket&apos;s school market is growing fast and families compare
                every option before they move. A featured listing puts your
                school in front of them while they are deciding.
              </p>
            </div>
            <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-purple-dark">
                Healthcare &amp; Insurance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Families arriving on the island need a paediatrician, a dentist
                and a health plan almost straight away, and they look for
                someone they can trust.
              </p>
            </div>
            <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-purple-dark">
                Family Services &amp; Beyond
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Villas and real estate, movers, tutors, swim schools, activity
                centres, kid-friendly restaurants and resorts. If a family
                moving to Phuket needs it, they are searching for it.
              </p>
            </div>
          </div>
        </div>

        {/* Placements */}
        <div className="mt-20">
          <h2 className="font-heading text-2xl font-bold text-purple-dark">
            Placements
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-purple-dark">
                Homepage Banners
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-neutral-600">
                <li>✓ Top banner (sole ownership, never rotated)</li>
                <li>✓ Sidebar placements (top, middle, or bottom)</li>
              </ul>
              <p className="mt-3 text-xs text-neutral-500">
                Banner artwork: {SLOT_SPECS["home-top"].size} for the top
                banner, {SLOT_SPECS["home-sidebar-top"].size} for the sidebar.
                Every banner is labelled as sponsored.
              </p>
            </div>
            <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-purple-dark">
                Featured Listings &amp; Combined Packages
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-neutral-600">
                <li>✓ Featured school listing in the Phuket directory</li>
                <li>✓ Featured camp in the Phuket holiday camps directory</li>
                <li>✓ Sponsored articles, clearly labelled</li>
                <li>✓ Bundles with {SISTER_SITE.name} and the Bangkok group</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Our reviews are never for sale. Sponsored articles are written by
            the advertiser, edited by us, and everything paid is clearly
            labelled as sponsored.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-purple-dark px-8 py-12 text-center text-white">
          <h2 className="font-heading text-3xl font-bold">
            Let&apos;s put your business in front of Phuket&apos;s families.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Tell us a bit about what you offer, and we&apos;ll put together a
            package that fits your goals and budget.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full bg-orange px-8 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Email {CONTACT_EMAIL}
            </a>
            <a
              href="https://line.me/ti/p/~bachsuites"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-purple-dark"
            >
              Add us on LINE: bachsuites
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
