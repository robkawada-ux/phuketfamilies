# phuketfamilies.com: Project Context

## Overview
Phuket Families is the Phuket sister site of BKK Families (bkkfamilies.com). It was started in Nov 2026 as a copy of the bkkfamilies codebase in its own repo (not a shared codebase), with the Bangkok-only sections stripped out and the brand swapped to an island palette. Rob prefers launching sites over running Facebook groups, so there is no Phuket Facebook group; the site leans on BKK Families and the Bangkok Expat Families group for reach.

## Repo & local setup
- GitHub repo: `robkawada-ux/phuketfamilies`
- Local path: `/Users/robertkawada/Projects/phuketfamilies` (on Roberts-iMac-2). The Bangkok site is at `~/Projects/bkkfamilies`.
- Same GitHub-to-Vercel workflow as bkkfamilies. Rob runs commands one at a time in Terminal.

## Domain & deployment
- Domain phuketfamilies.com bought Nov 2026. Canonical host is `www.phuketfamilies.com`, set once in `SITE` in `src/lib/seo.ts` (sitemap, robots, canonicals and JSON-LD all read it).
- TODO: create the Vercel project, point DNS, set up a GA4 property and a Search Console property (verification goes in `layout.tsx` as `metadata.verification.google`). The bkkfamilies GA and GSC tokens were deliberately removed.
- Contact email is the `CONTACT_EMAIL` constant in `src/lib/seo.ts`: info@phuketfamilies.com, a Namecheap email forwarder to robkawada@gmail.com (set up 3 Nov 2026, no catch-all on purpose).

## Brand
- Name Phuket Families, tagline "YOUR PHUKET ROADMAP" (always caps and bold), same layout and cartoon road theme as BKK Families.
- Palette lives in `tailwind.config.ts`. Token NAMES are inherited from bkkfamilies (purple, orange...), only values changed: purple = deep teal #0E7C86, purple-dark = navy #1B2A3A, orange = coral #FF6B4A, teal #3EC1D3, green #8DC63F, plus sand #F6EFE3.
- Logo: the BKK Families four-dot mark in the new colours. Keep `Logo.tsx`, `src/app/icon.svg`, `favicon.ico` and `apple-icon.png` in sync.
- Nav has a "Bangkok" link to bkkfamilies.com; the footer has an "Also from us" cross-link (`SISTER_SITE` in seo.ts).

## Share images (Facebook previews), required on every page
- Same rule as bkkfamilies: every page must emit an og:image. `og()` in `src/lib/seo.ts` attaches the nearest section card (`SECTION_CARDS`: /schools, /blog), falling back to the homepage card.
- Cards are 1200x630, deep teal with the road and palm. Articles without a hero image use `public/images/og/blog-default.png`.

## Site architecture
- Live sections: home, /schools (directory + detail pages), /healthcare (hub, /hospitals directory + detail pages, /maternity, /paediatrics), /blog (titled "Guides", empty at launch), /contact (incl. #advertise).
- Removed from the Bangkok copy, to be rebuilt with Phuket data later: activities, camps, playgroups, learning support, health insurance and school breaks. `schoolBreaks.ts` and `schoolFees.ts` are kept with empty data because the school pages use their types and helpers.
- Articles are TypeScript objects in `src/lib/articles.ts` (see the Article interface). Body paragraphs support `[label](/path)` links and `**bold**` via RichText. Byline renders as "by Phuket Families".
- Plan: cross-link articles between phuketfamilies.com and bkkfamilies.com where it genuinely helps the reader (a few links per article, editorial, not a link scheme).

## Schools directory
- 18 schools in `src/lib/schools.ts`, researched 2 Nov 2026. Sources, addresses, one-time fees and open questions are in the claude.ai project doc `claude/phuket-schools.md`.
- Five areas, north to south: north (Thalang and the airport), west (Cherngtalay and Bangtao), central (Kathu and Patong), town (Phuket Town, Wichit, Koh Kaew), south (Chalong and Rawai). `SchoolAreaMap.tsx` is a simplified island map.
- `feeRange` holds the published 2026/27 range. Budget tags use the middle of the range (under/over 400k). When a school's own per-year schedule is read, add it to `schoolFees.ts` and drop its `feeRange`.
- Still open: official websites for Glenalmond, Finnway, PGIS, École Française, Bamboo Valley, Life School, Buds and ISP; RIS Phuket fees from one source only. Oasis International School excluded (no evidence it still operates). NLCS Phuket planned for 2028.
- UWC Thailand lives here; it was removed from bkkfamilies (its URL there 301s to /schools).

## Tools
- `scripts/linkcheck.sh` checks external school website URLs (written for bkkfamilies; use parallelism 4).

## Healthcare directory (added 2 Nov 2026)
- Rebuilt from the bkkfamilies healthcare code with Phuket data: 12 facilities in `src/lib/healthcare.ts` (Bangkok Hospital Phuket, Bangkok Hospital Siriroj, Mission Hospital Phuket, Dibuk, Vachira, Patong Hospital, four Bangkok Phuket Clinic branches, two dental practices). Research notes in the claude.ai project doc `claude/phuket-healthcare.md`.
- Same honesty rules as Bangkok: every figure from the provider's own page where possible, `pricing: "unverified"` when we have not found a published price, and unverified services left out of the tags rather than guessed.
- Only Bangkok Hospital Phuket publishes a delivery price (67,000 to 166,000 baht, non-Thai mothers only). Mission Hospital delivery prices found online are Mission Hospital BANGKOK's, not Phuket's.
- No Phuket hospital we checked advertises a separate children's ER, so `separateChildrensEr` is left unset rather than false. The paediatrics page is built around children's clinic hours instead.
- Gaps: no verified standalone mental health or developmental provider yet, Vachira's family services unverified, NICU levels unconfirmed.
