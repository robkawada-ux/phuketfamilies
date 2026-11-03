import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL, SISTER_SITE } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Logo size={28} />
              <span className="font-heading text-lg font-bold">Phuket Families</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              <span className="font-bold uppercase tracking-wide text-white">Your Phuket Roadmap.</span>{" "}
              Schools, guides and practical resources for families living
              on the island, from the team behind BKK Families in Bangkok.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-orange">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="/schools" className="hover:text-white">Schools</Link></li>
              <li><Link href="/healthcare" className="hover:text-white">Healthcare</Link></li>
              <li><Link href="/camps" className="hover:text-white">Holiday Camps</Link></li>
              <li><Link href="/blog" className="hover:text-white">Guides</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-orange">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>{CONTACT_EMAIL}</li>
              <li>
                <a
                  href="https://line.me/ti/p/~bachsuites"
                  className="hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINE: bachsuites
                </a>
              </li>
              <li>
                <Link href="/contact#advertise" className="font-semibold text-teal hover:text-white">
                  Advertising Opportunities →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-white/5 px-5 py-4 text-sm text-white/80">
          Also from us:{" "}
          <a href={SISTER_SITE.url} className="font-semibold text-teal hover:text-white">
            {SISTER_SITE.name}
          </a>
          , schools, healthcare, camps and family life in {SISTER_SITE.city}.
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Phuket Families. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
