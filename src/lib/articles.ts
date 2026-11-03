export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  /** ISO date of the last substantive revision. Feeds dateModified and the sitemap. */
  updated?: string;
  excerpt: string;
  /**
   * Paragraphs. Plain text plus the minimal inline markup understood by
   * components/ui/RichText: [label](/path) and [label](https://...) for
   * links, **text** for bold. Nothing else is parsed. Headings and images
   * have their own arrays below rather than living in the body.
   */
  body: string[];
  heroImage?: string;
  images?: { src: string; alt: string; afterParagraph: number }[];
  headings?: { beforeParagraph: number; text: string }[];
  /** Answers accept the same inline markup as body paragraphs. */
  faq?: { question: string; answer: string }[];
  relatedSchools?: { name: string; slug: string }[];
  metaDescription?: string;
  keywords?: string[];
  /**
   * Set on a paid Sponsored Feature. The page shows a "Sponsored by" notice
   * above the article and every outbound link gets rel="sponsored". Never
   * set this on a review or a directory listing: those are not for sale.
   */
  sponsored?: { sponsor: string; url?: string };
}

export const ARTICLES: Article[] = [
  {
    slug: "phuket-international-school-fees",
    title: "Phuket International School Fees 2026/27: 18 Schools Compared",
    category: "Schools",
    date: "2026-11-03",
    excerpt:
      "What 18 international schools in Phuket charge for 2026/27, from 159,000 to 982,700 baht a year, plus joining fees, bonds, the school run and which schools stop early.",
    metaDescription:
      "Phuket international school fees for 2026/27: 18 schools compared, from 159,000 to 982,700 baht a year, plus joining fees, bonds and which schools stop early.",
    keywords: [
      "phuket international school fees",
      "international schools in phuket",
      "phuket school fees 2026/27",
      "best international schools phuket",
      "british school phuket fees",
      "ib school phuket",
      "cheapest international school phuket",
    ],
    headings: [
      { beforeParagraph: 2, text: "The premium tier: 750,000 baht and up" },
      { beforeParagraph: 7, text: "The middle tier: topping out at 400,000 to 550,000 baht" },
      { beforeParagraph: 14, text: "Under 400,000 baht at every age" },
      { beforeParagraph: 23, text: "The costs on top of tuition" },
      { beforeParagraph: 26, text: "Location matters as much as price" },
      { beforeParagraph: 29, text: "Check how far up the school goes" },
      { beforeParagraph: 31, text: "Boarding" },
      { beforeParagraph: 32, text: "Comparing with Bangkok" },
    ],
    body: [
      "Phuket has more international schools than most families expect, and their fees cover a wide range. The most affordable school on our list charges about 159,000 baht a year for its youngest children, while the most expensive reaches 982,700 baht in its final years. This guide puts the published 2026/27 fees for all 18 schools in our [Phuket schools directory](/schools) side by side, then covers the costs that sit on top of tuition and the practical questions that matter just as much as price.",
      "A note on the figures. Each range runs from the youngest year group to the oldest, so the low number is usually nursery or kindergarten and the high number the last years of secondary. These are the published 2026/27 ranges we found when we researched the schools in November 2026. Fees change every year, so always confirm with the school's admissions office before you budget.",
      "Four schools have a top fee of 750,000 baht or more.",
      "**[British International School, Phuket (BISP)](/schools/british-international-school-phuket)**: 489,000 to 982,700 baht a year. The island's largest and longest-established international school, founded in 1996, and the only one offering both A Levels and the IB Diploma in the sixth form. Its primary years have the longest waiting lists on the island, so families usually apply before they move.",
      "**[UWC Thailand](/schools/uwc-thailand-international-school)**: 345,000 to 933,000 baht a year. A non-profit IB World School in Thalang teaching the full IB continuum, from nursery to the Diploma, and part of the United World Colleges movement. Its early years cost less than you might expect, but the senior years are close to BISP's.",
      "**[Ruamrudee International School Phuket (RIS)](/schools/ruamrudee-international-school-phuket)**: 525,500 to 803,500 baht a year. The Chalong campus of one of Bangkok's oldest international schools, teaching an American curriculum. It currently runs to Grade 8, and we found these fees in only one published source, so check them with the school.",
      "**[Glenalmond Phuket](/schools/glenalmond-phuket-international-school)**: 490,000 to 750,000 baht a year. Brand new in August 2026, inside the Thanyapura resort in Thalang, in partnership with Glenalmond College in Scotland. It is starting with the early years and primary, with secondary year groups to follow.",
      "Six schools top out between roughly 400,000 and 550,000 baht. This is where most of the island's British and American options sit.",
      "**[HeadStart International School](/schools/headstart-international-school)**: 347,000 to 540,000 baht a year. One of the biggest British schools on Phuket, with around 1,500 students on campuses in Wichit and Cherngtalay, and the only school on the island offering IGCSEs, A Levels and BTECs.",
      "**[BCIS International School Phuket](/schools/bcis-international-school-phuket)**: 302,000 to 502,500 baht a year. The British Cambridge pathway and the French national programme on one campus in Chalong, with around 400 students from roughly 60 nationalities.",
      "**[Kajonkiet International School Phuket](/schools/kajonkiet-international-school-phuket)**: 200,000 to 454,000 baht a year. A full British pathway to A Level in the Kathu valley at fees well below BISP and HeadStart, and central enough for an easy school run from most of the island.",
      "**[QSI International School of Phuket](/schools/qsi-international-school-of-phuket)**: about 194,000 to 452,745 baht a year. A small non-profit American school in Kathu with Advanced Placement courses. Fees are set in US dollars, so the baht figure moves with the exchange rate.",
      "**[Finnway International School](/schools/finnway-international-school-phuket)**: 295,000 to 447,000 baht a year. A Finnish-model primary school in Koh Kaew for children aged 2 to 12, with classes of around 15.",
      "**[Oak Meadow International School](/schools/oak-meadow-international-school)**: 231,000 to 408,240 baht a year. An American curriculum from kindergarten to Grade 12 on a large campus in Wichit, with its own school buses.",
      "The other eight schools stay under 400,000 baht a year all the way through. Several are small, and several stop before the end of secondary, which is part of why they cost less.",
      "**[Lighthouse International School](/schools/lighthouse-international-school-phuket)**: 220,000 to 387,000 baht a year. The Canadian Alberta curriculum with Cambridge exams at the top of the school, on three campuses in Chalong and Rawai, from age one to Grade 12.",
      "**[Prasan Gateway International School (PGIS)](/schools/prasan-gateway-international-school)**: 238,000 to 394,500 baht a year. Opened in Chalong in 2025, with the English National Curriculum and a Chinese immersion programme. It currently runs from nursery to lower secondary.",
      "**[Montessori House Phuket](/schools/montessori-house-phuket-international-school)**: 241,000 to 305,700 baht a year. A Montessori school in Chalong, popular for the early years.",
      "**[École Française Jean de La Fontaine](/schools/ecole-francaise-jean-de-la-fontaine)**: 300,000 baht a year. A bilingual French and English micro-school in Rawai with around 36 students, following the French national curriculum.",
      "**[Bamboo Valley Phuket](/schools/bamboo-valley-phuket)**: 258,000 to 292,400 baht a year, plus 7% VAT. A small nature-based school in Cherngtalay combining a Waldorf-inspired, Forest School approach with the UK National Curriculum, through the primary years.",
      "**[International School of Phuket (ISP)](/schools/international-school-of-phuket)**: 174,600 to 197,820 baht a year. A small Cambridge school in Rawai for children aged about 5 to 14, with a bus covering Kata, Karon, Chalong, Rawai and Nai Harn.",
      "**[Life School Phuket](/schools/life-school-phuket)**: 165,000 to 240,000 baht a year. A very small independent school in Thalang with around 50 students, from kindergarten to Grade 12.",
      "**[Buds International School](/schools/buds-international-school-phuket)**: 159,000 to 189,000 baht a year. A bilingual nursery, kindergarten and primary school in Chalong for children from 12 months to 12 years.",
      "Tuition is only part of the bill. Most schools charge a one-off fee when your child joins, and the two most expensive British schools add a refundable bond as well.",
      "BISP charges a placement fee of 200,000 baht (250,000 for a family with more than one child) plus a 150,000 baht refundable bond. Glenalmond charges a 200,000 baht placement fee (100,000 for siblings) plus a 150,000 baht refundable deposit. HeadStart's joining fee is around 100,000 baht, BCIS around 75,000, Kajonkiet around 60,000, Oak Meadow around 50,000, Montessori House around 45,000 and Lighthouse around 40,000. UWC Thailand charges an entrance fee and a development fund contribution, and QSI adds an annual capital fund fee for secondary students.",
      "So at BISP or Glenalmond, the placement fee and bond alone add 350,000 baht to the first year. Then budget for the extras that rarely appear in a fee table: buses, uniforms, lunches, exam fees, trips and after-school activities.",
      "Phuket is bigger than it looks on a map, and most school runs are by car or school bus, so most families choose a school and a home together. Our directory groups the schools into five areas.",
      "**The south (Chalong and Rawai)** has the most choice, with eight schools: BCIS, RIS, Lighthouse, PGIS, Montessori House, École Française, ISP and Buds. **Phuket Town, Wichit and Koh Kaew** has BISP, HeadStart's main campus, Oak Meadow and Finnway. **Kathu**, between Phuket Town and Patong, has Kajonkiet and QSI. **The north**, around Thalang, has UWC Thailand, Glenalmond and Life School. **The west coast** around Cherngtalay and Bangtao has Bamboo Valley and HeadStart's newer campus.",
      "Several schools run buses, BCIS, Oak Meadow and ISP among them, so ask about routes before you rule out a school that looks far away. The [map on our schools page](/schools) shows where each one is.",
      "Not every school runs to age 18. Finnway and Buds stop at the end of primary, ISP at around age 14 and RIS Phuket at Grade 8 for now. PGIS currently runs to lower secondary, and Glenalmond is starting with the early years and primary. Bamboo Valley takes children through the primary years. If your children are young this may not matter yet, but it is worth knowing which school they would move on to.",
      "The schools that currently teach right through to the final year of secondary are BISP, UWC Thailand, HeadStart, BCIS, Kajonkiet, QSI, Oak Meadow, Lighthouse and Life School.",
      "Only two schools on Phuket take boarders: BISP, with weekly and full boarding from Year 4, and UWC Thailand. That is one reason both draw students from the mainland and overseas.",
      "If you are deciding between Phuket and Bangkok, our sister site [BKK Families](https://www.bkkfamilies.com/schools) has the same kind of directory for Bangkok's international schools. Bangkok has far more schools at every price point, while Phuket's choice narrows in the senior years.",
      "Run a school in Phuket and spotted something out of date? [Let us know](/contact) and we will update your listing. Listings are free.",
    ],
    faq: [
      {
        question: "How much are international school fees in Phuket?",
        answer:
          "For 2026/27, published fees at the 18 schools in our directory run from about 159,000 baht a year (Buds, for the youngest children) to 982,700 baht (BISP, for the final years of secondary). Most schools charge between 200,000 and 550,000 baht a year, depending on the age of the child. Many also charge a one-off joining fee of 40,000 to 200,000 baht.",
      },
      {
        question: "What is the cheapest international school in Phuket?",
        answer:
          "On published 2026/27 fees, the most affordable are [Buds International School](/schools/buds-international-school-phuket) (159,000 to 189,000 baht, nursery to Grade 6), [Life School Phuket](/schools/life-school-phuket) (165,000 to 240,000 baht, kindergarten to Grade 12) and [ISP](/schools/international-school-of-phuket) (174,600 to 197,820 baht, ages about 5 to 14).",
      },
      {
        question: "Which international schools in Phuket offer the IB?",
        answer:
          "[BISP](/schools/british-international-school-phuket) offers the IB Diploma alongside A Levels in the sixth form, and [UWC Thailand](/schools/uwc-thailand-international-school) teaches the full IB continuum from nursery to the Diploma.",
      },
      {
        question: "Are there boarding schools in Phuket?",
        answer:
          "Two international schools take boarders: BISP, with weekly and full boarding from Year 4, and UWC Thailand.",
      },
      {
        question: "Which part of Phuket has the most international schools?",
        answer:
          "The south of the island, around Chalong and Rawai, with eight of the 18 schools in our directory. Phuket Town and Wichit come next, with four, including BISP and HeadStart's main campus.",
      },
    ],
  },
  {
    slug: "phuket-hospitals-for-families",
    title: "Hospitals in Phuket for Families: Where to Take Your Child",
    category: "Healthcare",
    date: "2026-11-03",
    excerpt:
      "Which Phuket hospital to use for a sick child, an emergency, a new baby or a dentist, with children's clinic hours, delivery prices and the clinics closest to home.",
    metaDescription:
      "A parent's guide to hospitals in Phuket: children's clinic hours, 24-hour emergency rooms, delivery prices, neighbourhood clinics and children's dentists.",
    keywords: [
      "hospitals in phuket",
      "phuket hospital for children",
      "best hospital in phuket",
      "bangkok hospital phuket",
      "having a baby in phuket",
      "phuket paediatrician",
      "international hospital phuket",
    ],
    headings: [
      { beforeParagraph: 1, text: "In an emergency" },
      { beforeParagraph: 3, text: "The two main private hospitals" },
      { beforeParagraph: 6, text: "Lower-cost and government hospitals" },
      { beforeParagraph: 9, text: "Clinics closer to home" },
      { beforeParagraph: 12, text: "Having a baby in Phuket" },
      { beforeParagraph: 15, text: "Children's dentists" },
      { beforeParagraph: 16, text: "Insurance and direct billing" },
      { beforeParagraph: 17, text: "Comparing with Bangkok" },
    ],
    body: [
      "Most expat families in Phuket end up using the same two or three hospitals, but which one is right depends on where you live, what time it is and what you need. This guide looks at the island's hospitals and clinics from a parent's point of view. Every facility mentioned here has a full listing in our [Phuket hospitals and clinics directory](/healthcare/hospitals).",
      "In a medical emergency anywhere in Thailand, call **1669**, the national emergency medical number. The Bangkok Hospital group, which runs most of Phuket's private hospitals and clinics, also has its own emergency hotline, **1719**. Save both in your phone now, along with the address of the 24-hour hospital nearest your home.",
      "Private hospitals usually ask for a deposit or proof of insurance before treatment. [Vachira Phuket Hospital](/healthcare/hospitals/vachira-phuket-hospital), the island's main government hospital, treats emergency patients first and settles payment afterwards.",
      "**[Bangkok Hospital Phuket](/healthcare/hospitals/bangkok-hospital-phuket)** in Phuket Town is the island's largest hospital and the default for most expat families. It was the first hospital in Phuket to earn JCI accreditation, runs a 24-hour emergency and trauma centre, and has a Children's Clinic on the first floor that is open every day from **8am to 11pm**. After 11pm, a sick child is seen in the main emergency department. It is priced as the island's premium option, and expat guides report longer waits here than at the Bangkok flagship.",
      "**[Bangkok Hospital Siriroj](/healthcare/hospitals/bangkok-hospital-siriroj)**, which many residents still call Phuket International Hospital, is a few kilometres away on the bypass road between Central Phuket and Big C, which makes it easier to reach for many families. It is also JCI accredited, with a Children's Department and a Children's Clinic open every day from **8am to 8pm**, then a 24-hour emergency department.",
      "The two are separate hospitals in the same group, so when a doctor or an insurer says \"Bangkok Hospital\", check which one they mean. Our [guide to where to take a sick child](/healthcare/paediatrics) compares their children's services in more detail.",
      "**[Mission Hospital Phuket](/healthcare/hospitals/mission-hospital-phuket)**, a non-profit Seventh-day Adventist hospital on Thepkrasattri Road just north of Phuket Town, is open 24 hours and generally costs less than the Bangkok Hospital group. Many long-term residents use it for routine care and keep the bigger hospitals for complex cases.",
      "**[Dibuk Hospital](/healthcare/hospitals/dibuk-hospital)** in Wichit is the budget member of the Bangkok Hospital group, with a 24-hour emergency department for everyday problems such as flu, stomach bugs and minor injuries. For anything more serious it refers patients on to its sister hospitals.",
      "The government hospitals, Vachira in Phuket Town and **[Patong Hospital](/healthcare/hospitals/patong-hospital)**, charge Ministry of Public Health rates, which are the same for Thais and foreigners and far below private prices. Vachira is the regional referral hospital for serious cases and has an international department to help foreign patients. The trade-off at both is longer queues, a more basic environment and less English.",
      "Phuket's main hospitals are all in or near Phuket Town, which can be a long drive from the beaches. For a temperature, an ear infection or a grazed knee, the Bangkok Hospital group's neighbourhood clinics are often the quicker choice. They handle consultations, common illnesses, wound care, vaccinations, blood tests and medical certificates.",
      "**[Laguna](/healthcare/hospitals/bangkok-phuket-clinic-laguna)**, for Bangtao and Cherngtalay, is open daily from 9am to 6pm. **[Kamala](/healthcare/hospitals/bangkok-phuket-clinic-kamala)** is open daily from 9am to 8pm. **[Rawai](/healthcare/hospitals/bangkok-phuket-clinic-rawai)**, for Nai Harn and the south, is open daily from 8am to 8pm, and so is **[Srisunthon](/healthcare/hospitals/bangkok-phuket-clinic-srisunthon)** in Thalang.",
      "These are clinics, not emergency departments. If your child is seriously unwell, go to a hospital or call 1669.",
      "Bangkok Hospital Phuket is the only hospital we found that publishes a delivery price. Its all-inclusive childbirth packages run from **67,000 to 166,000 baht** and are published as valid to 30 June 2027. They apply only to non-Thai mothers with a full-term pregnancy, and complications for mother or baby are excluded, so ask the Women's Health Center which package fits you.",
      "Bangkok Hospital Siriroj and Mission Hospital Phuket also deliver babies but do not publish a price. Be careful with the cheap Mission Hospital packages you may find online: they belong to Mission Hospital in Bangkok, a different hospital.",
      "One recent change: since 14 August 2026, Bangkok Hospital Phuket no longer registers births on families' behalf. It still issues the medical birth documents, but parents now take them to the registration office themselves. Our [guide to having a baby in Phuket](/healthcare/maternity) has more detail.",
      "**[Children Family Dental Clinic](/healthcare/hospitals/children-family-dental-clinic)** in Phuket Town was the island's first dedicated children's dental clinic and is open every day from 9am to 8:30pm, which makes after-school appointments easy. **[Phuket International Dental Center](/healthcare/hospitals/phuket-international-dental-center)**, inside Bangkok Hospital Siriroj, has children's dentistry and orthodontics under one roof. Bangkok Hospital Phuket's dental centre also treats children.",
      "If you have international health insurance, check whether your insurer bills the hospital directly before you need it. Expat guides describe Bangkok Hospital Phuket as having the island's widest direct billing network, but we have not seen an insurer list, so call your insurer to confirm. Without direct billing you pay up front and claim the money back.",
      "If you split your time between Phuket and Bangkok, or are still deciding where to live, our sister site has the same kind of [guide to Bangkok hospitals](https://www.bkkfamilies.com/healthcare), including [delivery prices at Bangkok hospitals](https://www.bkkfamilies.com/healthcare/maternity). We check every Phuket listing against the provider's own information where we can, and if you run a hospital or clinic here and something is out of date, please [contact us](/contact).",
    ],
    faq: [
      {
        question: "What is the best hospital in Phuket for children?",
        answer:
          "Most expat families use [Bangkok Hospital Phuket](/healthcare/hospitals/bangkok-hospital-phuket), which has a Children's Clinic open every day from 8am to 11pm and a children's ward, or [Bangkok Hospital Siriroj](/healthcare/hospitals/bangkok-hospital-siriroj), whose Children's Clinic is open every day from 8am to 8pm. Outside those hours, children are seen in each hospital's 24-hour emergency department.",
      },
      {
        question: "Is there a children's emergency room in Phuket?",
        answer:
          "None of the Phuket hospitals we checked advertises a separate children's emergency room. Children are seen in the children's clinics during opening hours, and in the main 24-hour emergency department after that.",
      },
      {
        question: "How much does it cost to have a baby in Phuket?",
        answer:
          "Bangkok Hospital Phuket's all-inclusive childbirth packages run from 67,000 to 166,000 baht for non-Thai mothers with a full-term pregnancy, excluding complications. It is the only Phuket hospital we found that publishes a delivery price. See our [maternity guide](/healthcare/maternity).",
      },
      {
        question: "What is the emergency number in Phuket?",
        answer:
          "Call 1669 for a medical emergency anywhere in Thailand. The Bangkok Hospital group's own emergency hotline is 1719.",
      },
      {
        question: "Which hospitals in Phuket are JCI accredited?",
        answer:
          "Of the hospitals in our directory, Bangkok Hospital Phuket and Bangkok Hospital Siriroj are both JCI accredited.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

/**
 * Fail the build on article data that would render wrong but not crash.
 *
 * headings and images are positioned by paragraph index, so an index past
 * the end of body simply never renders: the heading silently disappears and
 * the article ships with a missing section. Types cannot catch that, and the
 * page still builds, so it has to be asserted. Duplicate slugs are checked
 * here too, since two articles sharing one would quietly shadow each other
 * in generateStaticParams.
 *
 * Runs at module load, which means during next build.
 */
(function validateArticles() {
  const seen = new Set<string>();

  for (const a of ARTICLES) {
    if (seen.has(a.slug)) {
      throw new Error(`articles.ts: duplicate slug "${a.slug}"`);
    }
    seen.add(a.slug);

    const last = a.body.length - 1;

    for (const h of a.headings ?? []) {
      if (h.beforeParagraph < 0 || h.beforeParagraph > last) {
        throw new Error(
          `articles.ts: "${a.slug}" heading "${h.text}" points at paragraph ` +
            `${h.beforeParagraph}, but body has ${a.body.length} paragraphs ` +
            `(0 to ${last}). The heading would never render.`
        );
      }
    }

    for (const img of a.images ?? []) {
      if (img.afterParagraph < 0 || img.afterParagraph > last) {
        throw new Error(
          `articles.ts: "${a.slug}" image "${img.src}" points at paragraph ` +
            `${img.afterParagraph}, but body has ${a.body.length} paragraphs ` +
            `(0 to ${last}). The image would never render.`
        );
      }
    }
  }
})();
