// Healthcare directory. One Facility per PLACE YOU GO.
//
// Unlike camps, where a parent shops for a specific bookable week, a family
// choosing healthcare is choosing a building: where do I deliver, where do I
// take a feverish four year old at 11pm, who will my insurer pay directly.
// So the directory filters on facilities, not on services, and services are
// tags carried by the facility.
//
// The two views that matter most are the maternity filter and the paediatric
// filter. Both are just this list with a service tag applied, which is why
// maternity and paediatric detail live in their own optional blocks rather
// than being smeared across the top-level fields.
//
// MAINTENANCE: prices and phone numbers rot faster than anything else on
// this site. Every facility carries lastVerified, and the maternity block
// carries its own because package prices change on a different cycle from
// the rest of the entry. See isStale and STALE_AFTER_DAYS.
//
// EDITORIAL: nothing here is medical advice and no facility pays to be
// listed. Where a hospital does not publish a price we say so rather than
// estimating, because a wrong number on a maternity package is worse than
// no number at all. Every price below was read from the hospital's own
// published package page, and packageUrl is the receipt.

export type FacilityType =
  | "international-hospital"
  | "private-hospital"
  | "public-hospital"
  | "specialist-hospital"
  | "clinic"
  | "dental";

/**
 * Controlled vocabulary. Typed as a union so an unrecognised tag fails the
 * build rather than silently producing a filter option nobody selected.
 */
export type Service =
  | "maternity"
  | "nicu"
  | "fertility"
  | "paediatrics"
  | "paediatric-emergency"
  | "developmental-paediatrics"
  | "vaccinations"
  | "emergency-24h"
  | "family-medicine"
  | "mental-health"
  | "allergy"
  | "dermatology"
  | "physiotherapy"
  | "travel-medicine"
  | "dental"
  | "paediatric-dentistry"
  | "orthodontics";

/**
 * How much of the insurance admin the facility absorbs. "most" means the
 * international desk settles directly with the major expat insurers;
 * "some" means a short panel; "none" means pay and claim back.
 */
export type DirectBilling = "most" | "some" | "none" | "unknown";

/**
 * Why a hospital has no price in the comparison table. These are not the
 * same thing and the table must not conflate them: "on-enquiry" is a choice
 * the hospital made, "unverified" is unfinished work on our side.
 */
export type MaternityPricing = "published" | "on-enquiry" | "unverified";

export interface MaternityInfo {
  /** Defaults to "published" when packageFrom is set, "unverified" when not. */
  pricing?: MaternityPricing;
  /** Baht, published package for an uncomplicated vaginal delivery. */
  packageFrom?: number;
  /** Baht, top of the published range, normally the caesarean package. */
  packageTo?: number;
  /** What the package does and does not cover. Quoted fairly, not sold. */
  packageNote?: string;
  /** Where the price was read. The receipt for the number above. */
  packageUrl?: string;
  /** 2 = special care, 3 = full intensive care including ventilation. */
  nicuLevel?: 2 | 3;
  /** Whether a partner can stay overnight in the room. Asked constantly. */
  partnerCanStay?: boolean;
  waterBirth?: boolean;
  /** Vaginal birth after caesarean. Some hospitals decline it. */
  vbacSupported?: boolean;
  /** Package prices move independently of the rest of the entry. */
  lastVerified: string;
}

export interface PaediatricInfo {
  /** A children's ER with its own entrance, not the adult ER with a nurse. */
  separateChildrensEr?: boolean;
  /** Opening hours of the children's service, when it is not 24h. */
  erHours?: string;
  /** Assessment and therapy for development, not just acute illness. */
  developmentalServices?: boolean;
  note?: string;
  lastVerified: string;
}

export interface Facility {
  slug: string;
  name: string;
  /** Thai name, where it helps a taxi driver or a Grab pin. */
  thaiName?: string;
  type: FacilityType;
  /** Phuket town or neighbourhood. Drives the area filter. */
  area: string;
  address?: string;
  /** How to get there, phrased as a parent would say it. Rarely needed on Phuket. */
  nearestTransit?: string;
  /**
   * Facility-supplied image, path under /public. Only with explicit
   * permission, same rule as camps and schools. No scraping.
   */
  photo?: string;
  photoAlt?: string;
  photoCredit?: string;
  photoCaption?: string;
  description: string;
  /** The honesty box. What we would tell a friend, including the downsides. */
  worthKnowing?: string;
  services: Service[];
  /** Languages reliably available, beyond Thai. */
  languages?: string[];
  directBilling?: DirectBilling;
  directBillingNote?: string;
  /** Joint Commission International accreditation. */
  jciAccredited?: boolean;
  maternity?: MaternityInfo;
  paediatrics?: PaediatricInfo;
  website?: string;
  email?: string;
  phone?: string;
  /** Separate emergency or ambulance line, where one is published. */
  emergencyPhone?: string;
  lineId?: string;
  facebook?: string;
  lastVerified: string;
}

/**
 * Display labels for the controlled vocabularies.
 *
 * These MUST live here rather than in the directory component. Next replaces
 * a "use client" module's exports with client references when a server
 * component imports them, so a label map defined in the client component
 * silently resolves to undefined on every server-rendered page. That shipped
 * once and produced empty service pills and nameless MedicalProcedure
 * entries in the structured data.
 */
export const SERVICE_LABEL: Record<Service, string> = {
  maternity: "Maternity",
  nicu: "Neonatal intensive care",
  fertility: "Fertility",
  paediatrics: "Paediatrics",
  "paediatric-emergency": "Children's emergency",
  "developmental-paediatrics": "Developmental",
  vaccinations: "Vaccinations",
  "emergency-24h": "24h emergency",
  "family-medicine": "Family medicine",
  "mental-health": "Mental health",
  allergy: "Allergy",
  dermatology: "Dermatology",
  physiotherapy: "Physiotherapy",
  "travel-medicine": "Travel medicine",
  dental: "Dental",
  "paediatric-dentistry": "Children's dentistry",
  orthodontics: "Orthodontics",
};

export const TYPE_LABEL: Record<FacilityType, string> = {
  "international-hospital": "International hospital",
  "private-hospital": "Private hospital",
  "public-hospital": "Public hospital",
  "specialist-hospital": "Specialist hospital",
  clinic: "Clinic",
  dental: "Dental",
};

/** Thailand's national emergency medical number. Surfaced on every page. */
export const EMERGENCY_NUMBER = "1669";

export const FACILITIES: Facility[] = [
  {
    slug: "bangkok-hospital-phuket",
    name: "Bangkok Hospital Phuket",
    type: "international-hospital",
    area: "Phuket Town",
    address: "2/1 Hongyok Utis Road, Talat Yai, Mueang Phuket 83000",
    description:
      "The island's largest hospital and the default for most expat families. Bangkok Hospital Phuket opened in 1993, has around 200 beds and more than 30 specialist centres, and was the first hospital in Phuket to earn JCI accreditation. Its emergency and trauma centre runs 24 hours a day and is certified by the Royal College of Surgeons of Thailand as a trauma centre. For families, the parts that matter are the Children's Clinic on the first floor, open every day from 8am to 11pm, a children's ward, the Women's Health Center for obstetrics and gynaecology, and a dental centre on the fifth floor that includes children's dentistry.",
    worthKnowing:
      "Being the default has a cost: expat guides consistently report longer waits here than at the Bangkok flagship, and it is priced as the island's premium option. The children's clinic hours are the detail to save in your phone. Before 11pm a sick child goes to the Children's Clinic; after that, through the main emergency department. If your child may need neonatal or paediatric intensive care, ask the hospital directly what it can handle on site, as we could not confirm that from its own pages. Note also that from 14 August 2026 the hospital stopped registering births on families' behalf: it still issues the medical birth documents, but parents now take them to the registration office themselves.",
    services: [
      "maternity",
      "paediatrics",
      "vaccinations",
      "emergency-24h",
      "family-medicine",
      "dental",
      "paediatric-dentistry",
    ],
    directBilling: "most",
    directBillingNote:
      "Expat guides describe it as having the island's widest direct billing network. We have not seen an insurer panel list, so confirm your own policy before you need it.",
    jciAccredited: true,
    maternity: {
      packageFrom: 67000,
      packageTo: 166000,
      packageNote:
        "The \"Kiss my Baby Sabaijai\" all-inclusive childbirth packages run from 67,000 to 166,000 baht and are published as valid to 30 June 2027. Two conditions stand out: the packages apply only to non-Thai mothers with a full-term pregnancy, and complications for mother or newborn are excluded. The breakdown by package (normal birth, caesarean, room type) is published as images rather than text, so ask the Women's Health Center for the tier that fits you.",
      packageUrl:
        "https://www.bangkokhospital.com/en/phuket/package/kiss-my-baby-all-inclusive-childbirth-packages-bpk",
      lastVerified: "2026-11-02",
    },
    paediatrics: {
      erHours: "Children's Clinic daily 8am to 11pm, then the main 24-hour emergency department",
      note: "Children's Clinic on the first floor, extension 1011. Women's Health Center on the first floor, open 8am to 5pm, extension 1021.",
      lastVerified: "2026-11-02",
    },
    website: "https://www.bangkokhospital.com/en/phuket",
    phone: "+66 76 254 425",
    emergencyPhone: "1719 (BDMS emergency hotline), or extension 1060 to 1062",
    lastVerified: "2026-11-02",
  },
  {
    slug: "bangkok-hospital-siriroj",
    name: "Bangkok Hospital Siriroj",
    type: "international-hospital",
    area: "Wichit",
    address: "44 Chalermprakiat Ror 9 Road (the bypass road, next to Big C), Wichit, Mueang Phuket 83000",
    description:
      "Still called Phuket International Hospital by many residents, Siriroj opened in 1982 as the first private hospital in southern Thailand, founded by Phuket locals, and joined the BDMS group in 2014. It is JCI accredited and sits on the bypass road between Central Phuket and Big C, which makes it easier to reach than the Phuket Town hospitals for many families. Its newer building has a dedicated Women's Health Center, a Children's Department with play areas, a dental centre and a hemodialysis centre. The Children's Clinic is on the third floor of Building 3 and opens every day from 8am to 8pm.",
    worthKnowing:
      "Siriroj and Bangkok Hospital Phuket are separate hospitals in the same group, a few kilometres apart, so check which one a doctor or an insurer means. Siriroj is also known for plastic and aesthetic surgery, which is a big part of its foreign patient traffic but irrelevant to most families. It does not publish a delivery price, so ask the Women's Health Center for a quote.",
    services: [
      "maternity",
      "paediatrics",
      "vaccinations",
      "emergency-24h",
      "family-medicine",
      "dental",
      "paediatric-dentistry",
      "orthodontics",
    ],
    directBilling: "unknown",
    jciAccredited: true,
    maternity: {
      pricing: "unverified",
      packageNote:
        "Delivers babies through its Women's Health Center. No delivery package price is published on the hospital's site that we could find; it does publish antenatal packages.",
      lastVerified: "2026-11-02",
    },
    paediatrics: {
      erHours: "Children's Clinic daily 8am to 8pm, then the 24-hour emergency department",
      note: "Children's Clinic on the 3rd floor of Building 3, extensions 3367 and 3368.",
      lastVerified: "2026-11-02",
    },
    website: "https://www.bangkokhospital.com/en/siriroj",
    phone: "+66 76 361 888",
    emergencyPhone: "+66 76 210 935, or 1719",
    lastVerified: "2026-11-02",
  },
  {
    slug: "mission-hospital-phuket",
    name: "Mission Hospital Phuket",
    type: "private-hospital",
    area: "Phuket Town",
    address: "4/1 Thepkrasattri Road, Ratsada, Mueang Phuket 83000",
    description:
      "A non-profit private hospital run by the Seventh-day Adventist Church, which has served Phuket for more than 70 years and recently opened a new twin-tower building. It is open 24 hours and is generally cheaper than the two Bangkok Hospital group hospitals, which is why many long-term residents use it for routine care and keep the bigger hospitals for complex cases.",
    worthKnowing:
      "Two things trip people up online. First, Mission Hospital Phuket is on Thepkrasattri Road just north of Phuket Town, not near Kamala as one expat guide claims. Second, the cheap Mission Hospital delivery packages that circulate online (34,000 baht for a natural birth) belong to Mission Hospital in Bangkok, a different hospital; we found no published Phuket price. Its paediatric and maternity services are mentioned by several guides but we have not verified the detail from the hospital itself.",
    services: ["maternity", "paediatrics", "emergency-24h", "family-medicine"],
    directBilling: "unknown",
    maternity: {
      pricing: "unverified",
      packageNote:
        "No Phuket delivery package price found. Prices quoted online for \"Mission Hospital\" are the Bangkok hospital's.",
      lastVerified: "2026-11-02",
    },
    phone: "+66 76 237 220",
    emergencyPhone: "+66 76 237 227",
    lastVerified: "2026-11-02",
  },
  {
    slug: "dibuk-hospital",
    name: "Dibuk Hospital",
    type: "private-hospital",
    area: "Wichit",
    address: "89/8-9 Moo 2, Chaofa West Road, Wichit, Mueang Phuket 83000",
    description:
      "The budget member of the Bangkok Hospital group in Phuket, positioned as \"efficient and affordable care\". Dibuk opened in 2014 and joined BDMS in 2015. It runs a 24-hour emergency department and handles everyday problems such as flu, stomach bugs, minor injuries and road accidents, with general practice and orthopaedics, and it accepts Thai social security. It is on Chaofa West Road, opposite Kajonkiet International School.",
    worthKnowing:
      "Good for the everyday family medicine that is not complicated, at lower prices than its sister hospitals. For anything more serious it refers patients on to Bangkok Hospital Phuket or Siriroj, so if you already know your child needs a specialist, start there.",
    services: ["emergency-24h", "family-medicine"],
    directBilling: "unknown",
    website: "https://www.dibukhospital.com",
    phone: "+66 76 298 298",
    emergencyPhone: "1719",
    lastVerified: "2026-11-02",
  },
  {
    slug: "vachira-phuket-hospital",
    name: "Vachira Phuket Hospital",
    thaiName: "โรงพยาบาลวชิระภูเก็ต",
    type: "public-hospital",
    area: "Phuket Town",
    address: "353 Yaowarat Road, Talat Yai, Mueang Phuket 83000",
    description:
      "Phuket's main government hospital, a regional hospital with around 550 beds and a teaching hospital for Walailak University's medical school. It is where serious cases from across the Andaman provinces are sent, and it charges the Ministry of Public Health's rates, which are the same for Thais and foreigners and far below private hospital prices. It has an international department to help foreign patients through the system.",
    worthKnowing:
      "Vachira treats emergency patients first and settles payment afterwards, unlike private hospitals that ask for a deposit. The trade-off is queues at every stage, a more basic environment and less English. We have only verified its emergency service; its maternity and children's services exist as you would expect of a regional hospital, but we have not checked the detail.",
    services: ["emergency-24h"],
    directBilling: "none",
    website: "https://www.vachiraphuket.go.th",
    phone: "+66 76 361 234",
    lastVerified: "2026-11-02",
  },
  {
    slug: "patong-hospital",
    name: "Patong Hospital",
    type: "public-hospital",
    area: "Patong",
    address: "57 Sainamyen Road, Patong, Kathu, Phuket 83150",
    description:
      "The government hospital for Patong and the west coast around it, with around 120 beds and a 24-hour emergency department. Prices are low and it is close by for families in Patong and Kathu.",
    worthKnowing:
      "Useful for minor emergencies when you need somewhere near, but English is limited and serious cases are transferred to Vachira or Bangkok Hospital Phuket.",
    services: ["emergency-24h"],
    directBilling: "none",
    phone: "+66 76 342 633",
    emergencyPhone: "+66 76 340 444, or 1669",
    lastVerified: "2026-11-02",
  },
  {
    slug: "bangkok-phuket-clinic-laguna",
    name: "Bangkok Phuket Clinic Laguna",
    type: "clinic",
    area: "Laguna and Cherngtalay",
    description:
      "One of the Bangkok Hospital group's neighbourhood clinics, serving the Laguna, Bangtao and Cherngtalay area. The clinics handle consultations, common illnesses such as colds and stomach upsets, wound care, injections including vaccines, blood tests and medical certificates. Open daily 9am to 6pm.",
    worthKnowing:
      "Handy for a temperature or a grazed knee without the drive to town. It is a clinic, not an emergency department: anything serious goes to Bangkok Hospital Phuket or Siriroj.",
    services: ["family-medicine", "vaccinations"],
    directBilling: "unknown",
    website: "https://www.bangkokhospital.com/en/phuket/center-clinic/trauma/bangkok-phuket-clinic-bpk/laguna",
    phone: "+66 61 172 2550",
    lastVerified: "2026-11-02",
  },
  {
    slug: "bangkok-phuket-clinic-kamala",
    name: "Bangkok Phuket Clinic Kamala",
    type: "clinic",
    area: "Kamala",
    description:
      "The Bangkok Hospital group's neighbourhood clinic for Kamala and the west coast between Patong and Surin. Consultations, common illnesses, wound care, injections including vaccines, blood tests and medical certificates. Open daily 9am to 8pm.",
    worthKnowing:
      "A clinic, not an emergency department. For anything serious, go to a hospital.",
    services: ["family-medicine", "vaccinations"],
    directBilling: "unknown",
    website: "https://www.bangkokhospital.com/en/phuket/center-clinic/trauma/bangkok-phuket-clinic-bpk/kamala",
    phone: "+66 93 576 7070",
    lastVerified: "2026-11-02",
  },
  {
    slug: "bangkok-phuket-clinic-rawai",
    name: "Bangkok Phuket Clinic Rawai",
    type: "clinic",
    area: "Rawai",
    description:
      "The Bangkok Hospital group's neighbourhood clinic for Rawai, Nai Harn and the south of the island, the furthest point from the Phuket Town hospitals. Consultations, common illnesses, wound care, injections including vaccines, blood tests and medical certificates. Open daily 8am to 8pm.",
    worthKnowing:
      "For families in the south this is the nearest group facility, but it is a clinic, not an emergency department. In a real emergency call 1669 rather than driving.",
    services: ["family-medicine", "vaccinations"],
    directBilling: "unknown",
    website: "https://www.bangkokhospital.com/en/siriroj/center-clinic/trauma/bangkok-phuket-clinic-bsi/rawai",
    phone: "+66 80 272 2622",
    lastVerified: "2026-11-02",
  },
  {
    slug: "bangkok-phuket-clinic-srisunthon",
    name: "Bangkok Phuket Clinic Srisunthon",
    type: "clinic",
    area: "Thalang",
    description:
      "The newest of the Bangkok Hospital group's neighbourhood clinics, in Si Sunthon in the centre-north of the island. Consultations, common illnesses, wound care, injections including vaccines, blood tests and medical certificates. Open daily 8am to 8pm.",
    worthKnowing:
      "A clinic, not an emergency department. The group also runs clinics at Mai Khao and at the airport.",
    services: ["family-medicine", "vaccinations"],
    directBilling: "unknown",
    website: "https://www.bangkokhospital.com/en/phuket/center-clinic/trauma/bangkok-phuket-clinic-bpk/bangkokphuketclinicsrisunthon",
    phone: "+66 64 915 7992",
    lastVerified: "2026-11-02",
  },
  {
    slug: "children-family-dental-clinic",
    name: "Children Family Dental Clinic (Dr. Au)",
    type: "dental",
    area: "Phuket Town",
    address: "15/8 Montri Road, Talat Yai, Mueang Phuket 83000",
    description:
      "Phuket's first dedicated children's dental clinic, open for more than 27 years and run by Dr. Ubonwan Phakamethavee, a former paediatric dentistry lecturer. The clinic is designed for children, with seven treatment rooms and an X-ray room, and also treats adults, so it can look after the whole family. Open every day from 9am to 8:30pm.",
    worthKnowing:
      "The long daily hours make after-school appointments easy. It also sees patients under Thai social security.",
    services: ["dental", "paediatric-dentistry"],
    directBilling: "unknown",
    phone: "+66 76 210 069",
    lastVerified: "2026-11-02",
  },
  {
    slug: "phuket-international-dental-center",
    name: "Phuket International Dental Center",
    type: "dental",
    area: "Wichit",
    address: "4th floor, Main Building, Bangkok Hospital Siriroj, 44 Chalermprakiat Ror 9 Road, Mueang Phuket 83000",
    description:
      "One of the oldest dental practices on the island, serving Phuket's international community since 1985, with a team of around 15 dentists across several locations, including inside Bangkok Hospital Siriroj. It covers every dental specialty in one centre, including children's dentistry (fillings, sealants, fluoride, space maintainers) and orthodontics with traditional, lingual and Damon braces and Invisalign.",
    worthKnowing:
      "Having children's dentistry and orthodontics under one roof saves a referral when your child's adult teeth come in.",
    services: ["dental", "paediatric-dentistry", "orthodontics"],
    directBilling: "unknown",
    website: "https://www.bangkokhospital.com/en/siriroj/center-clinic/center-group/dental-center-bsi/overview",
    phone: "+66 76 361 888",
    lastVerified: "2026-11-02",
  },
];

export const ALL_AREAS: string[] = Array.from(
  new Set(FACILITIES.map((f) => f.area))
).sort();

export const ALL_SERVICES: Service[] = Array.from(
  new Set(FACILITIES.flatMap((f) => f.services))
).sort();

export const ALL_TYPES: FacilityType[] = Array.from(
  new Set(FACILITIES.map((f) => f.type))
).sort();

/** Facilities that deliver babies, the highest-intent view in the section. */
export const MATERNITY_FACILITIES: Facility[] = FACILITIES.filter((f) =>
  f.services.includes("maternity")
);

/** Facilities with a paediatric service, the other high-intent view. */
export const PAEDIATRIC_FACILITIES: Facility[] = FACILITIES.filter((f) =>
  f.services.includes("paediatrics")
);

/** Days since an entry was last checked. Drives the staleness warning. */
export function daysSinceVerified(iso: string, now: Date = new Date()): number {
  const then = new Date(`${iso}T00:00:00Z`).getTime();
  return Math.floor((now.getTime() - then) / 86_400_000);
}

/**
 * Shorter than the camps window. Camp dates are annual; a phone number or a
 * package price can change any week, and health content carries a higher
 * trust bar than a football camp.
 */
export const STALE_AFTER_DAYS = 60;

export function isStale(iso: string, now: Date = new Date()): boolean {
  return daysSinceVerified(iso, now) > STALE_AFTER_DAYS;
}

export function facilityBySlug(slug: string): Facility | undefined {
  return FACILITIES.find((f) => f.slug === slug);
}

/** Lowest published delivery package across the directory, for the intro copy. */
export function lowestPublishedPackage(): number | null {
  const prices = FACILITIES.map((f) => f.maternity?.packageFrom).filter(
    (p): p is number => typeof p === "number"
  );
  return prices.length ? Math.min(...prices) : null;
}

/** Highest published delivery package across the directory. */
export function highestPublishedPackage(): number | null {
  const prices = FACILITIES.flatMap((f) =>
    [f.maternity?.packageFrom, f.maternity?.packageTo].filter(
      (p): p is number => typeof p === "number"
    )
  );
  return prices.length ? Math.max(...prices) : null;
}
