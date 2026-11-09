import { verifiedBudget } from "./schoolFees";
import type { Featured } from "./featured";

export type Budget = "under400k" | "over400k" | "unknown";

export type Area = "north" | "west" | "central" | "town" | "south";

/**
 * Five broad parts of the island, in the order the directory lists them,
 * north to south. Kept coarse on purpose: on Phuket the school run is by car
 * or school bus, so parents choose a part of the island, not a district. The
 * covers line says which places fall in each.
 */
/** place: short name used in search descriptions, e.g. "in Thalang, Phuket". */
export const AREAS: { id: Area; label: string; covers: string; place: string }[] = [
  { id: "north", label: "North: Thalang and the airport", covers: "Thalang, Si Sunthon, Thep Krasattri, Mai Khao, Nai Yang and the airport", place: "Thalang" },
  { id: "west", label: "West coast: Cherngtalay and Bangtao", covers: "Cherngtalay, Bangtao, Laguna, Pasak, Surin and Layan", place: "Cherngtalay" },
  { id: "central", label: "Kathu and Patong", covers: "Kathu, Patong and the valley between them", place: "Kathu" },
  { id: "town", label: "Phuket Town, Wichit and Koh Kaew", covers: "Phuket Town, Wichit, Ratsada, Koh Kaew, Boat Lagoon and Cape Panwa", place: "Phuket Town" },
  { id: "south", label: "South: Chalong and Rawai", covers: "Chalong, Rawai, Nai Harn, Kata and Karon", place: "Chalong and Rawai" },
];

export const AREA_LABEL = Object.fromEntries(
  AREAS.map((a) => [a.id, a.label])
) as Record<Area, string>;

export interface School {
  name: string;
  slug: string;
  curricula: string[];
  budget: Budget;
  website?: string;
  description?: string;
  founded?: number;
  ageRange?: string;
  languageOfInstruction?: string;
  /**
   * Third-party indicative range only, shown with an "unverified" label.
   * Schools whose own fee schedule we have read live in schoolFees.ts and
   * must not carry this field: the page builds their figures from there.
   */
  feeRange?: string;
  photo?: string;
  // Virtual tour video, where the school has sent us one.
  virtualTour?: string;
  /**
   * Where the school is, as one of the AREAS below. Schools with campuses in
   * more than one area list each, main campus first. The directory groups
   * by the first area and the location filter matches any of them.
   */
  areas: Area[];
  /**
   * Shown as the school's location instead of its area label, when the area
   * label names places the school is not near (e.g. Oak Meadow asked us not
   * to mention Koh Kaew). The directory still groups by `areas`.
   */
  location?: string;
  /**
   * Paid featured placement (see lib/featured.ts). Only for a school that has
   * paid; it never changes anything else in the listing.
   */
  featured?: Featured;
  /**
   * Held back until the school's license is verified. Pending schools are
   * left out of SCHOOLS, so they have no page, no directory card and no
   * sitemap entry. Delete the flag to publish.
   */
  pending?: boolean;
}

// Curriculum + budget tags, split at 400,000 THB/year. For the schools in
// schoolFees.ts the budget below is ignored and recomputed from the verified
// primary-stage fee (see verifiedBudget), so it can never drift from the
// figures shown on the page. For the rest the tag is taken from the middle of
// the published range, since the top of a range is a sixth-form fee and the
// bottom is usually a part-time nursery place. Research notes and sources for
// every school: the project doc claude/phuket-schools.md (2 Nov 2026).
const SCHOOL_ENTRIES: School[] = [
  {
    name: "British International School, Phuket (BISP)",
    slug: "british-international-school-phuket",
    areas: ["town"],
    curricula: ["British", "International Baccalaureate"],
    budget: "over400k",
    website: "https://www.bisphuket.ac.th",
    founded: 1996,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "489,000 to 982,700 THB/year",
    description: "Founded in 1996, BISP is Phuket's largest and longest-established international school, with more than 1,100 students on a 44-acre campus on Thepkrasattri Road in Koh Kaew, a short drive north of Phuket Town.\n\nIt is the only school on the island to offer both A Levels and the IB Diploma in the sixth form, after the English National Curriculum and IGCSEs, and it is one of only two Phuket schools that take boarders, with weekly and full boarding from Year 4. Sport is a serious part of school life, and BISP is a member of FOBISIA, the federation of British international schools in Asia.\n\nIt is also the most expensive school on the island, and its primary years have the longest waiting lists, so families usually apply before they move. On top of tuition, expect a placement fee of 200,000 THB (250,000 for a family with more than one child) and a 150,000 THB refundable bond.",
  },
  {
    name: "UWC Thailand International School",
    slug: "uwc-thailand-international-school",
    areas: ["north"],
    curricula: ["International Baccalaureate"],
    budget: "over400k",
    website: "https://uwcthailand.ac.th",
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "345,000 to 933,000 THB/year",
    description: "UWC Thailand is a non-profit IB World School in Thalang, in the north of the island, teaching the full IB continuum: the Primary Years, Middle Years and Diploma Programmes, from nursery to Grade 12.\n\nThe school began as the Phuket International Academy Day School and joined the United World Colleges movement in 2016, which brought its mission of bringing young people from different countries together, and a global scholarship network. It is accredited by the Council of International Schools, and mindfulness and outdoor education are built into the timetable rather than added on.\n\nUWC Thailand is one of the two Phuket schools with boarding, which is why it also draws students from the mainland and overseas. Budget for one-off joining costs on top of tuition, including an entrance fee and a development fund contribution.",
  },
  {
    name: "HeadStart International School",
    slug: "headstart-international-school",
    areas: ["town", "west"],
    curricula: ["British"],
    budget: "over400k",
    website: "https://www.headstartphuket.com",
    founded: 2005,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "347,000 to 540,000 THB/year",
    description: "HeadStart started in 2005 as a small home school and has grown into one of Phuket's biggest British schools, with around 1,500 students across two campuses: the main Chaofah City campus in Wichit, in the centre of the island, and a newer campus in Cherngtalay on the west coast, opened in August 2023.\n\nIt follows the English National Curriculum from the early years to Year 13, and is the only school on the island offering Cambridge IGCSEs, A Levels and BTECs, which suits students who want a more applied route in the sixth form. The Cherngtalay campus currently runs up to Year 9, after which students move to the Chaofah campus.\n\nHeadStart is a common choice for families in Phuket Town, Chalong and Rawai who want a full British pathway at lower fees than BISP. Expect a one-off fee of around 100,000 THB on entry.",
  },
  {
    name: "BCIS International School of Phuket",
    slug: "bcis-international-school-phuket",
    areas: ["south"],
    curricula: ["British", "French"],
    budget: "over400k",
    website: "https://bcisphuket.ac.th",
    founded: 2017,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English, French",
    feeRange: "302,000 to 502,500 THB/year",
    description: "BCIS International School of Phuket opened in Chalong in 2017 and is the only school on Phuket offering a choice of two full curricula on one campus: the British Cambridge pathway through IGCSE and A Level, and the French national programme.\n\nSince 2023 it has been part of International Schools Partnership, the group that also owns Bangkok Prep, which brings the backing of a large international school network. The school has around 400 students from roughly 60 nationalities, and runs school buses from Rawai, Phuket Town, Cherngtalay, Patong and other parts of the island.\n\nBCIS is the natural choice for French-speaking families and for anyone who wants a smaller British school in the south of the island. Expect a one-off fee of around 75,000 THB on entry.",
  },
  {
    name: "Kajonkiet International School Phuket (KISP)",
    slug: "kajonkiet-international-school-phuket",
    areas: ["central"],
    curricula: ["British"],
    budget: "under400k",
    website: "https://kisp.academy",
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "200,000 to 454,000 THB/year",
    description: "Kajonkiet International School Phuket teaches the British curriculum from the early years through IGCSE and A Level, entirely in English, on a campus in the Kathu valley between Phuket Town and Patong.\n\nWith around 700 students it is one of the larger schools on the island, and part of the long-established Thai Kajonkiet education group. Its central location makes it one of the easiest school runs from most of the island, and it is popular with families in Kathu, Patong, Phuket Town and Kamala.\n\nKISP is the school most often chosen by families who want a full British pathway at noticeably lower fees than BISP or HeadStart. Expect a one-off fee of around 60,000 THB on entry.",
  },
  {
    name: "QSI International School of Phuket",
    slug: "qsi-international-school-of-phuket",
    areas: ["central"],
    curricula: ["American"],
    budget: "under400k",
    website: "https://phuket.qsi.org",
    founded: 2000,
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "About 194,000 to 452,745 THB/year (billed in US dollars)",
    description: "QSI Phuket is a non-profit American school that opened in Kathu in 2000, part of Quality Schools International, a network of more than 35 schools around the world.\n\nIt follows the QSI mastery learning model, where students move on once they have mastered each defined outcome rather than simply at the end of a term, and it offers Advanced Placement courses and a US high school diploma at the top of the school. That suits families heading for American or Canadian universities, and families who move between QSI schools in other countries.\n\nQSI is small, with around 150 students, which gives it a close community feel. Fees are set in US dollars, so the baht figure moves with the exchange rate, and secondary students pay an annual capital fund fee on top of tuition.",
  },
  {
    name: "Oak Meadow International School",
    slug: "oak-meadow-international-school",
    areas: ["town"],
    curricula: ["American"],
    budget: "under400k",
    website: "https://oakmeadow.ac.th",
    founded: 2007,
    location: "Wichit, Phuket Town",
    ageRange: "Ages 2 to 18",
    languageOfInstruction: "English",
    feeRange: "231,000 to 408,240 THB/year",
    description: "Founded in 2007, Oak Meadow International School teaches an American curriculum from its Nursery, which takes children from age 2, to Grade 12 on a large campus with lakes and woodland in Wichit, close to Phuket Town.\n\nIts core families are American families and anyone who wants a US high school diploma rather than A Levels or the IB, which makes it, with QSI, one of the two main American options on the island. The school runs its own buses from the main residential areas.\n\nOak Meadow sits in the middle of Phuket's fee range, below the big British and IB schools. Expect a one-off fee of around 50,000 THB on entry.",
  },
  {
    name: "Ruamrudee International School Phuket (RIS Phuket)",
    slug: "ruamrudee-international-school-phuket",
    areas: ["south"],
    curricula: ["American"],
    budget: "over400k",
    website: "https://www.rism.ac.th",
    ageRange: "Ages 2 to 14",
    languageOfInstruction: "English",
    feeRange: "525,500 to 803,500 THB/year",
    description: "RIS Phuket is the Chalong Bay campus of Ruamrudee International School, one of Bangkok's oldest international schools, founded in 1957 and among the first schools in Southeast Asia to be accredited by WASC.\n\nThe Phuket campus sits by the sea in Chalong and currently teaches from Pre-K to Grade 8, following an American curriculum based on AERO standards, with Mandarin as a compulsory subject. The school describes itself as values-based and welcomes students of all faiths.\n\nBecause it stops at Grade 8 for now, families should plan where their children will go for high school. Fees for the Phuket campus come from a single published source, so confirm current figures with the school.",
  },
  {
    name: "Glenalmond Phuket International School",
    slug: "glenalmond-phuket-international-school",
    areas: ["north"],
    curricula: ["British"],
    budget: "over400k",
    founded: 2026,
    ageRange: "Ages 2 to 11 (opening years)",
    languageOfInstruction: "English",
    feeRange: "490,000 to 750,000 THB/year",
    description: "Glenalmond Phuket opened in August 2026 inside the Thanyapura Sports and Health Resort in Thalang, in formal partnership with Glenalmond College and Craigclowan School in Scotland. It is the first school to carry the Glenalmond name outside the UK.\n\nIt follows the English National Curriculum, starting with the Early Years and Primary, with secondary year groups to be added in phases. Pupils have access to Thanyapura's sports facilities, including its Olympic-size pool.\n\nPublished 2026/27 tuition is 490,000 THB for nursery to kindergarten and 750,000 THB from Year 1, plus a 200,000 THB placement fee (100,000 for siblings) and a 150,000 THB refundable deposit. As a brand new school, families should ask how and when the senior years will open.",
  },
  {
    name: "Finnway International School Phuket",
    slug: "finnway-international-school-phuket",
    areas: ["town"],
    curricula: ["Finnish"],
    budget: "under400k",
    website: "https://www.finnwayphuket.com",
    founded: 2018,
    ageRange: "Ages 2 to 13",
    languageOfInstruction: "English",
    feeRange: "295,000 to 447,000 THB/year",
    description: "Finnway is a Finnish-model international school for children aged 2 to 13, on Thepkrasattri Road in Koh Kaew near Boat Lagoon. It grew out of Rainbow Trout International Kindergarten and now runs from Pre-K to Grade 7.\n\nTeaching follows Finland's approach of play-based, student-led learning, taught in English, with Thai and Chinese as compulsory language classes. Classes are small, typically around 15 children, and the school has a wide after-school programme for its size.\n\nFinnway opened its lower secondary in August 2026, starting with Grade 7, so ask how far up the school plans to grow before counting on it for the secondary years.",
  },
  {
    name: "Lighthouse International School Phuket",
    slug: "lighthouse-international-school-phuket",
    areas: ["south"],
    curricula: ["Canadian", "British"],
    budget: "under400k",
    website: "https://www.lighthousephuket.com",
    founded: 2019,
    ageRange: "Ages 1 to 18",
    languageOfInstruction: "English",
    feeRange: "220,000 to 387,000 THB/year",
    description: "Founded in 2019 by parents and educators, Lighthouse is the international school of Rawai, following the Canadian Alberta curriculum with Cambridge exams at the top of the school. It received Alberta accreditation in 2025.\n\nIt runs three campuses in the south of the island: a kindergarten in Chalong, a primary campus on Soi Salika in Rawai, and a secondary campus in Rawai that opened in August 2024 for Grades 7 to 12. It takes children from one year old.\n\nLighthouse is one of the more affordable full-age schools on Phuket and a natural choice for families living in Rawai, Nai Harn and Chalong. Expect a one-off fee of around 40,000 THB on entry.",
  },
  {
    name: "Prasan Gateway International School (PGIS)",
    slug: "prasan-gateway-international-school",
    areas: ["south"],
    curricula: ["British"],
    budget: "under400k",
    website: "https://www.pgisphuket.com",
    founded: 2025,
    ageRange: "Ages 2 to 13",
    languageOfInstruction: "English",
    feeRange: "238,000 to 394,500 THB/year",
    description: "Prasan Gateway International School opened in February 2025 in Chalong, near Robinson Chalong, making it one of the newest schools on the island.\n\nIt follows the English National Curriculum with the International Early Years and International Primary Curriculum, and runs a Chinese immersion programme alongside English-medium teaching, with English language support for children who need it. Classes are typically around 16 children.\n\nPGIS currently teaches from nursery to lower secondary, so families should ask how far up the school will grow.",
  },
  {
    name: "Montessori House Phuket International School",
    slug: "montessori-house-phuket-international-school",
    areas: ["south"],
    curricula: ["Montessori"],
    budget: "under400k",
    website: "https://montessori-thailand.com",
    ageRange: "Ages 2 to 12",
    languageOfInstruction: "English",
    feeRange: "241,000 to 305,700 THB/year",
    description: "Montessori House Phuket is a Montessori school in Chalong, near Wat Chalong, within easy reach of Rawai, Nai Harn and Phuket Town. It describes itself as the only licensed Montessori school on the island.\n\nTeaching follows the Montessori method, with child-led learning, mixed-age classrooms and hands-on materials, taught in English.\n\nMany families start here in the early years and move to one of the larger schools for secondary, and the school is used to preparing children for that move. Expect a one-off fee of around 45,000 THB on entry.",
  },
  {
    name: "École Française Jean de La Fontaine",
    slug: "ecole-francaise-jean-de-la-fontaine",
    areas: ["south"],
    curricula: ["French"],
    budget: "under400k",
    website: "https://www.ecolefrancaisephuket.com",
    founded: 2021,
    ageRange: "Ages 3 to 12",
    languageOfInstruction: "French, English",
    feeRange: "300,000 THB/year",
    description: "École Française Jean de La Fontaine is a small bilingual French and English school on Soi Salika in Rawai, founded in 2021, which follows the official French national curriculum.\n\nWith around 36 students and classes capped at 12, it is a genuine micro-school, running from kindergarten to the first years of collège. Classes run from 8:20am to 3pm, and the school does not run a bus.\n\nIt suits French-speaking families in the south of the island who want the French programme in a small setting. BCIS in Chalong is the other French option, on a much larger campus.",
  },
  {
    name: "Bamboo Valley Phuket",
    slug: "bamboo-valley-phuket",
    areas: ["west"],
    curricula: ["Waldorf", "British"],
    budget: "under400k",
    founded: 2021,
    ageRange: "Ages 1 to 12",
    languageOfInstruction: "English",
    feeRange: "258,000 to 292,400 THB/year, plus VAT",
    description: "Bamboo Valley is a small, nature-based school on a former palm plantation in Pasak, Cherngtalay, founded in 2021 by a family who moved to Phuket from Bangkok.\n\nIt combines Waldorf-inspired, play-based learning and a Forest School approach with the UK National Curriculum, for children from about one year old through the primary years. There are no uniforms and hot lunches are cooked daily. The school also runs holiday nature camps for young children.\n\nBamboo Valley is very small, which is the point for the families who choose it, and it serves the Bangtao and Laguna side of the island. Tuition is quoted before 7% VAT.",
  },
  {
    name: "International School of Phuket (ISP)",
    slug: "international-school-of-phuket",
    areas: ["south"],
    curricula: ["British"],
    budget: "under400k",
    website: "https://www.internationalschoolphuket.com",
    founded: 2008,
    ageRange: "Ages 5 to 14",
    languageOfInstruction: "English",
    feeRange: "174,600 to 197,820 THB/year",
    description: "The International School of Phuket, established in 2008, is a small Cambridge International school on Soi Sermsuk in Rawai, and the only Cambridge school in that part of the island.\n\nIt teaches students aged about 5 to 14, with an eco and outdoor focus that makes use of its setting near Nai Harn, and runs a GPS-tracked school bus covering Kata, Karon, Chalong, Rawai and Nai Harn.\n\nISP is one of the most affordable international schools on Phuket. As it stops at around age 14, families will need a plan for the IGCSE years.",
  },
  {
    name: "Life School Phuket",
    slug: "life-school-phuket",
    areas: ["north"],
    curricula: ["British"],
    budget: "under400k",
    founded: 2016,
    ageRange: "Ages 3 to 18",
    languageOfInstruction: "English",
    feeRange: "165,000 to 240,000 THB/year",
    description: "Life School Phuket is a very small independent school in Si Sunthon, Thalang, founded in 2016, with around 50 students and classes of about 10 to 12.\n\nIt follows the British curriculum for core subjects in what it describes as an adaptive, alternative approach, and runs from kindergarten to Grade 12.\n\nIt is among the most affordable schools on the island, and suits families who want a small, informal setting. Ask the school which qualifications its senior students sit.",
  },
  {
    name: "Buds International School Phuket",
    slug: "buds-international-school-phuket",
    areas: ["south"],
    curricula: ["American"],
    budget: "under400k",
    ageRange: "Ages 1 to 12",
    languageOfInstruction: "English",
    feeRange: "159,000 to 189,000 THB/year",
    description: "Buds is a long-running bilingual nursery, kindergarten and primary school on Chaofa East Road in Chalong, about a kilometre north of Chalong Circle, for children from 12 months to 12 years.\n\nIt follows an American curriculum based on the Common Core from nursery to Grade 6, with native English-speaking teachers working alongside Thai assistants, and Thai and Mandarin lessons.\n\nBuds is one of the most affordable options on the island for younger children, and welcomes both Thai and international families. Families will need to choose another school for secondary.",
  },
];

export const SCHOOLS: School[] = SCHOOL_ENTRIES.filter((s) => !s.pending).map((s) => ({
  ...s,
  budget: verifiedBudget(s.slug) ?? s.budget,
}));

export const ALL_CURRICULA = Array.from(
  new Set(SCHOOLS.flatMap((s) => s.curricula))
).sort();
