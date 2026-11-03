// Camps directory. One Camp per OPERATOR, with nested sessions.
//
// A Camp is the organisation that runs the camp. A CampSession is one
// bookable programme-week: a specific programme running on specific dates
// for a specific age range at a specific price.
//
// The directory filters on SESSIONS, not operators, because a parent is
// shopping for a specific week at a specific price for a specific child.
// This is why categories, ages and price all live on the session: one
// operator can run a Thai literacy week and a competitive swimming week
// that share nothing but a car park.
//
// MAINTENANCE: sessions expire. Every session carries lastVerified and
// dateStatus. See the quarterly verification pass in the project notes.

import type { BreakWindowId } from "./schoolBreaks";

export type CampFormat = "day" | "half-day" | "residential";

export type CampCategory =
  | "academic"
  | "art-and-design"
  | "cookery"
  | "language-learning"
  | "music-and-drama"
  | "nature-and-outdoors"
  | "sport-and-fitness"
  | "stem"
  | "swimming"
  | "multi-activity";

/**
 * confirmed      dates published by the operator for this run
 * tba            operator has announced the camp but not the dates
 * ran-previously ran in a past year, not yet re-announced. Shown greyed,
 *                with previousRun giving the dates it last ran.
 */
export type DateStatus = "confirmed" | "tba" | "ran-previously";

export type PriceUnit = "per-day" | "per-week" | "per-session";

export interface CampSession {
  id: string;
  /** Programme name, e.g. "English (EAL) Camp". Operators run many. */
  programme: string;
  /** Which city-wide break window this falls in. See BREAK_WINDOWS. */
  window: BreakWindowId;
  /** Inclusive. Required when dateStatus is "confirmed". */
  startDate?: string;
  endDate?: string;
  dateStatus: DateStatus;
  /** Human-readable dates of the last confirmed run, for ran-previously. */
  previousRun?: string;
  /** On the session, not the operator. A provider spans categories. */
  categories: CampCategory[];
  /**
   * Real numbers, not brackets, so the age filter can be a single input.
   * Omit BOTH when the operator genuinely does not publish an age range,
   * the same rule as price. A session with no ages renders as "Age range
   * not published" and is never hidden by the age filter, because hiding
   * it would punish the parent for the operator's omission.
   */
  minAge?: number;
  maxAge?: number;
  format: CampFormat;
  /** Baht. Omit all three when genuinely unpublished rather than guessing. */
  priceFrom?: number;
  priceTo?: number;
  priceUnit?: PriceUnit;
  /** True when the price is our researched estimate, not a published figure. */
  priceEstimated?: boolean;
  /** Where this session runs. Omit when it is the operator's main venue. */
  venue?: string;
  /** Daily start and end, e.g. "9am to 3pm". */
  hours?: string;
  minimumBooking?: string;
  lunchIncluded?: boolean;
  /** Residential only. */
  nights?: number;
  supervisionRatio?: string;
  bookingUrl?: string;
  note?: string;
  lastVerified: string;
}

export interface Camp {
  slug: string;
  name: string;
  /** Phuket area where the camp runs. */
  area: string;
  /** Where camps physically run, when it is worth naming. Shown in the hero. */
  mainVenue?: string;
  /**
   * Operator-supplied image, path under /public. Only with explicit
   * permission. Some operators permit use but forbid alteration, so this
   * renders whole and unclipped rather than cropped to a hero band.
   */
  photo?: string;
  /** Alt text. Required whenever photo is set. */
  photoAlt?: string;
  /** Who to credit, rendered under the image. */
  photoCredit?: string;
  /** Context line under the image, e.g. what it is and when it was published. */
  photoCaption?: string;
  description: string;
  /** Honesty box on the detail page, same pattern as learning support. */
  worthKnowing?: string;
  /**
   * Slugs of operators whose camps run at THIS operator's venue.
   * Lets a parent browsing a school also see the independents on campus.
   */
  hosts?: string[];
  /** Slugs of venues this operator runs at, when it is a guest. */
  hostedAt?: string[];
  website?: string;
  email?: string;
  phone?: string;
  lineId?: string;
  facebook?: string;
  /**
   * Seasonal skin for the detail page. "halloween" swaps the purple hero for
   * a night-sky gradient and adds pumpkins, bats and cobwebs. Purely visual.
   */
  theme?: "halloween";
  /** One-line hook shown in the hero, under the venue. */
  tagline?: string;
  /** Short activity bullets, emoji first, shown as cards under the description. */
  highlights?: string[];
  sessions: CampSession[];
  lastVerified: string;
}

// Phuket camps, researched 3 Nov 2026. Every date and price below is read
// off the operator's own page. Where an operator has not re-announced, the
// session is "ran-previously" with the 2026 dates, filed under the 2027
// window it will next fall in.
export const CAMPS: Camp[] = [
  {
    slug: "bamboo-valley-nature-camps",
    name: "Bamboo Valley Nature Camps",
    area: "Cherngtalay",
    mainVenue: "Bamboo Valley, 3/74 Moo 4, Cherngtalay, Thalang",
    description:
      "Bamboo Valley is a small nature-based school on a former palm plantation in Cherngtalay, and it runs nature camps in every holiday of the year under the name Phuket Nature Camp. Days run 9am to 3pm, Monday to Friday, with animal care, gardening, baking, arts and crafts, stories and acting, Muay Thai, yoga and meditation. There are two groups: Mini Camp for ages 3 to 6, and Explorer Camp for ages 7 to 13, which adds two outings a week, a field trip on Tuesday and a beach day on Thursday, with transport included.",
    worthKnowing:
      "Unusually for Phuket, the whole 2026/27 calendar is already published, from Christmas through to summer 2027. Meals and materials are included in both groups. Every camper needs valid health or travel medical insurance covering the camp period.",
    website: "https://phuketcamp.com",
    email: "info@bamboovalleyphuket.com",
    phone: "098 912 4218 (WhatsApp)",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "bv-xmas-2026-mini",
        programme: "Christmas Nature Camp, Mini",
        window: "winter-2026",
        startDate: "2026-12-14",
        endDate: "2026-12-25",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 3,
        maxAge: 6,
        format: "day",
        priceFrom: 13000,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "bv-xmas-2026-explorer",
        programme: "Christmas Nature Camp, Explorer",
        window: "winter-2026",
        startDate: "2026-12-14",
        endDate: "2026-12-25",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 7,
        maxAge: 13,
        format: "day",
        priceFrom: 15000,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        note: "Includes two outings a week with transport.",
        lastVerified: "2026-11-03",
      },
      {
        id: "bv-winter-2027-mini",
        programme: "Winter Nature Camp, Mini",
        window: "other-2027",
        startDate: "2027-01-18",
        endDate: "2027-03-05",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 3,
        maxAge: 6,
        format: "day",
        priceFrom: 13500,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        note: "Runs weekly for seven weeks, mainly for families visiting in high season.",
        lastVerified: "2026-11-03",
      },
      {
        id: "bv-winter-2027-explorer",
        programme: "Winter Nature Camp, Explorer",
        window: "other-2027",
        startDate: "2027-01-18",
        endDate: "2027-03-05",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 7,
        maxAge: 13,
        format: "day",
        priceFrom: 15500,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        note: "Runs weekly for seven weeks. Includes two outings a week with transport.",
        lastVerified: "2026-11-03",
      },
      {
        id: "bv-easter-2027-mini",
        programme: "Easter Nature Camp, Mini",
        window: "songkran-2027",
        startDate: "2027-04-05",
        endDate: "2027-04-09",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 3,
        maxAge: 6,
        format: "day",
        priceFrom: 13500,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "bv-easter-2027-explorer",
        programme: "Easter Nature Camp, Explorer",
        window: "songkran-2027",
        startDate: "2027-04-05",
        endDate: "2027-04-09",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 7,
        maxAge: 13,
        format: "day",
        priceFrom: 15500,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "bv-summer-2027-mini",
        programme: "Summer Nature Camp, Mini",
        window: "summer-2027",
        startDate: "2027-06-28",
        endDate: "2027-08-13",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 3,
        maxAge: 6,
        format: "day",
        priceFrom: 13500,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "bv-summer-2027-explorer",
        programme: "Summer Nature Camp, Explorer",
        window: "summer-2027",
        startDate: "2027-06-28",
        endDate: "2027-08-13",
        dateStatus: "confirmed",
        categories: ["nature-and-outdoors", "multi-activity"],
        minAge: 7,
        maxAge: 13,
        format: "day",
        priceFrom: 15500,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "thanyapura-future-stars-camp",
    name: "Thanyapura Future Stars Holiday Camp",
    area: "Thalang",
    mainVenue: "Thanyapura Sports and Health Resort, 120/1 Moo 7, Thepkasattri Road, Thalang",
    description:
      "Thanyapura is the sports resort in Thalang with an Olympic-size pool and tennis courts, and its Future Stars Holiday Camp runs in every school break for ages 5 to 16, open to all levels from beginners up. The full day is swimming in the morning, lunch, tennis in the afternoon and a fitness session to finish, from 9am to 4pm. A half-day option is swimming only, 9am to 1:30pm, including lunch.",
    worthKnowing:
      "Thanyapura publishes a whole year of camp dates in advance, including two February weeks, one of them over Chinese New Year. Its page gives the 2027 dates without the year, but the weekdays only fit 2027. Single days can be booked as drop-ins, at 3,200 baht for a full day or 2,300 baht for a half day. The registration form's age list starts at 4, while the camp says 5 to 16, so confirm first if your child is 4.",
    website: "https://www.thanyapura-phuket.com/promotion/future-star-holiday-camp/",
    phone: "076 336 000, or WhatsApp 089 973 9551",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "thanyapura-winter-2026-full",
        programme: "Future Stars, full day (swim and tennis)",
        window: "winter-2026",
        startDate: "2026-12-21",
        endDate: "2027-01-08",
        dateStatus: "confirmed",
        categories: ["swimming", "sport-and-fitness"],
        minAge: 5,
        maxAge: 16,
        format: "day",
        priceFrom: 13000,
        priceUnit: "per-week",
        hours: "9am to 4pm",
        minimumBooking: "1 day, at 3,200 baht",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "thanyapura-winter-2026-half",
        programme: "Future Stars, half day (swim)",
        window: "winter-2026",
        startDate: "2026-12-21",
        endDate: "2027-01-08",
        dateStatus: "confirmed",
        categories: ["swimming"],
        minAge: 5,
        maxAge: 16,
        format: "half-day",
        priceFrom: 7400,
        priceUnit: "per-week",
        hours: "9am to 1:30pm",
        minimumBooking: "1 day, at 2,300 baht",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "thanyapura-feb-2027-full",
        programme: "Future Stars, full day (swim and tennis)",
        window: "spring-2027",
        startDate: "2027-02-08",
        endDate: "2027-02-19",
        dateStatus: "confirmed",
        categories: ["swimming", "sport-and-fitness"],
        minAge: 5,
        maxAge: 16,
        format: "day",
        priceFrom: 13000,
        priceUnit: "per-week",
        hours: "9am to 4pm",
        minimumBooking: "1 day, at 3,200 baht",
        lunchIncluded: true,
        note: "Two separate weeks: 8 to 12 February (Chinese New Year week) and 15 to 19 February.",
        lastVerified: "2026-11-03",
      },
      {
        id: "thanyapura-feb-2027-half",
        programme: "Future Stars, half day (swim)",
        window: "spring-2027",
        startDate: "2027-02-08",
        endDate: "2027-02-19",
        dateStatus: "confirmed",
        categories: ["swimming"],
        minAge: 5,
        maxAge: 16,
        format: "half-day",
        priceFrom: 7400,
        priceUnit: "per-week",
        hours: "9am to 1:30pm",
        minimumBooking: "1 day, at 2,300 baht",
        lunchIncluded: true,
        note: "Two separate weeks: 8 to 12 February (Chinese New Year week) and 15 to 19 February.",
        lastVerified: "2026-11-03",
      },
      {
        id: "thanyapura-apr-2027-full",
        programme: "Future Stars, full day (swim and tennis)",
        window: "songkran-2027",
        startDate: "2027-04-05",
        endDate: "2027-04-16",
        dateStatus: "confirmed",
        categories: ["swimming", "sport-and-fitness"],
        minAge: 5,
        maxAge: 16,
        format: "day",
        priceFrom: 13000,
        priceUnit: "per-week",
        hours: "9am to 4pm",
        minimumBooking: "1 day, at 3,200 baht",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "thanyapura-apr-2027-half",
        programme: "Future Stars, half day (swim)",
        window: "songkran-2027",
        startDate: "2027-04-05",
        endDate: "2027-04-16",
        dateStatus: "confirmed",
        categories: ["swimming"],
        minAge: 5,
        maxAge: 16,
        format: "half-day",
        priceFrom: 7400,
        priceUnit: "per-week",
        hours: "9am to 1:30pm",
        minimumBooking: "1 day, at 2,300 baht",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "thanyapura-summer-2027-full",
        programme: "Future Stars, full day (swim and tennis)",
        window: "summer-2027",
        startDate: "2027-06-21",
        endDate: "2027-07-30",
        dateStatus: "confirmed",
        categories: ["swimming", "sport-and-fitness"],
        minAge: 5,
        maxAge: 16,
        format: "day",
        priceFrom: 13000,
        priceUnit: "per-week",
        hours: "9am to 4pm",
        minimumBooking: "1 day, at 3,200 baht",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "thanyapura-summer-2027-half",
        programme: "Future Stars, half day (swim)",
        window: "summer-2027",
        startDate: "2027-06-21",
        endDate: "2027-07-30",
        dateStatus: "confirmed",
        categories: ["swimming"],
        minAge: 5,
        maxAge: 16,
        format: "half-day",
        priceFrom: 7400,
        priceUnit: "per-week",
        hours: "9am to 1:30pm",
        minimumBooking: "1 day, at 2,300 baht",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "isp-holiday-camps",
    name: "ISP Holiday Camps",
    area: "Rawai",
    mainVenue: "International School of Phuket, Soi Sermsuk, Viset Road, Rawai",
    description:
      "The International School of Phuket runs a camp in every school break on its campus in Rawai, open to ISP pupils and children from other schools. Each holiday has its own theme: a festive Christmas camp with crafts and a performance, a Champion's Camp of sport and goal-setting in February, a Songkran camp with swimming, eco projects and water play, and two summer programmes, a Fun Camp and an English Camp, with one or two field trips a week. Food is cooked on site three times a day.",
    worthKnowing:
      "ISP has published dates for the whole year but not yet the prices for these camps. As a guide, its October 2026 camp cost 3,820 baht for four days, which is low by Phuket standards. The camp website gives ages 6 to 12, so ask before booking a younger child.",
    website: "https://ispcamps.com",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "isp-xmas-2026",
        programme: "Christmas Camp",
        window: "winter-2026",
        startDate: "2026-12-14",
        endDate: "2026-12-24",
        dateStatus: "confirmed",
        categories: ["multi-activity", "art-and-design", "music-and-drama"],
        minAge: 6,
        maxAge: 12,
        format: "day",
        hours: "8:45am to 3:45pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "isp-feb-2027",
        programme: "Champion's Camp",
        window: "spring-2027",
        startDate: "2027-02-15",
        endDate: "2027-02-19",
        dateStatus: "confirmed",
        categories: ["sport-and-fitness", "multi-activity"],
        minAge: 6,
        maxAge: 12,
        format: "day",
        hours: "8:45am to 3:45pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "isp-songkran-2027",
        programme: "Songkran Camp",
        window: "songkran-2027",
        startDate: "2027-04-05",
        endDate: "2027-04-09",
        dateStatus: "confirmed",
        categories: ["swimming", "nature-and-outdoors", "multi-activity"],
        minAge: 6,
        maxAge: 12,
        format: "day",
        hours: "8:45am to 3:45pm",
        lunchIncluded: true,
        note: "School closed on 6 April, so the week is four days.",
        lastVerified: "2026-11-03",
      },
      {
        id: "isp-summer-2027-fun",
        programme: "Summer Fun Camp",
        window: "summer-2027",
        startDate: "2027-06-28",
        endDate: "2027-08-13",
        dateStatus: "confirmed",
        categories: ["multi-activity", "sport-and-fitness", "stem", "music-and-drama"],
        minAge: 6,
        maxAge: 12,
        format: "day",
        hours: "8:45am to 3:45pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        note: "ISP's page gives 28 June to 14 August. 14 August 2027 is a Saturday, so the last camp day is likely Friday 13 August.",
        lastVerified: "2026-11-03",
      },
      {
        id: "isp-summer-2027-english",
        programme: "Summer English Camp",
        window: "summer-2027",
        startDate: "2027-06-28",
        endDate: "2027-08-13",
        dateStatus: "confirmed",
        categories: ["language-learning", "academic"],
        minAge: 6,
        maxAge: 12,
        format: "day",
        hours: "8:45am to 3:45pm",
        minimumBooking: "1 week",
        lunchIncluded: true,
        note: "ISP's page gives 28 June to 14 August. 14 August 2027 is a Saturday, so the last camp day is likely Friday 13 August.",
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "summer-at-bisp",
    name: "Summer@BISP",
    area: "Koh Kaew",
    mainVenue: "British International School, Phuket, 59 Moo 2, Thepkrasattri Road, Koh Kaew",
    description:
      "BISP's summer camp is the biggest on the island and the only one with a full boarding option. Children choose a morning programme each week, English (built on the Cambridge English Young Learners framework), Cruzeiro Football, Coding and Digital Skills by CYBERone, or Adventure Sports for ages 9 to 15, then join on and off-campus activities in the afternoon. There is a separate Early Years Camp for ages 3 to 5. Children older than 9 can board as Full Camp students from Sunday to Saturday, with evening and weekend activities. BISP's sports academies also run short Christmas camps.",
    worthKnowing:
      "At 22,550 baht a week it is the most expensive day camp on the island, but the day fee covers lunch, dinner, snacks and the afternoon trips, and children aged 9 to 15 stay until 6pm. Early bird, returning-camper and sibling discounts of 5% to 15% apply, one per child. Health insurance is required and not included. Summer 2027 dates are not out yet.",
    website: "https://www.bisphuket.ac.th/summer/",
    email: "summer@bisphuket.ac.th",
    phone: "076 335 555",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "bisp-summer-early-years",
        programme: "Early Years Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 24 July 2026",
        categories: ["multi-activity"],
        minAge: 3,
        maxAge: 5,
        format: "half-day",
        priceFrom: 9000,
        priceUnit: "per-week",
        hours: "8:30 to 11:30am",
        lastVerified: "2026-11-03",
      },
      {
        id: "bisp-summer-day-6-8",
        programme: "Lower Primary Day Camp (English, Football or Coding)",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 24 July 2026",
        categories: ["language-learning", "sport-and-fitness", "stem"],
        minAge: 6,
        maxAge: 8,
        format: "day",
        priceFrom: 22550,
        priceUnit: "per-week",
        hours: "8:30am to 3pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "bisp-summer-day-9-15",
        programme: "Day Camp (English, Football, Coding or Adventure Sports)",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 24 July 2026",
        categories: ["language-learning", "sport-and-fitness", "stem", "nature-and-outdoors"],
        minAge: 9,
        maxAge: 15,
        format: "day",
        priceFrom: 22550,
        priceUnit: "per-week",
        hours: "8:30am to 6pm",
        lunchIncluded: true,
        note: "Lunch and dinner included.",
        lastVerified: "2026-11-03",
      },
      {
        id: "bisp-summer-full-camp",
        programme: "Full Camp (boarding)",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "28 June to 25 July 2026",
        categories: ["language-learning", "sport-and-fitness", "stem", "nature-and-outdoors"],
        minAge: 10,
        maxAge: 15,
        format: "residential",
        priceFrom: 29400,
        priceUnit: "per-week",
        nights: 6,
        note: "BISP says Full Camp is for children older than 9. Sunday to Saturday, with evening and weekend activities.",
        lastVerified: "2026-11-03",
      },
      {
        id: "bisp-xmas-tennis",
        programme: "Christmas Tennis Camp (BISP Tennis Academy)",
        window: "winter-2026",
        dateStatus: "ran-previously",
        previousRun: "13 to 16 December 2025",
        categories: ["sport-and-fitness"],
        minAge: 4,
        maxAge: 17,
        format: "day",
        note: "Single days or the full four days, all levels.",
        lastVerified: "2026-11-03",
      },
      {
        id: "bisp-xmas-football",
        programme: "Cruzeiro Football Christmas Camp",
        window: "winter-2026",
        dateStatus: "ran-previously",
        previousRun: "13 to 14 December 2025",
        categories: ["sport-and-fitness"],
        minAge: 7,
        maxAge: 11,
        format: "half-day",
        hours: "8am to 12pm",
        note: "For Years 3 to 6.",
        lastVerified: "2026-11-03",
      },
      {
        id: "bisp-xmas-teems",
        programme: "TEEMS Global Winter Camp",
        window: "winter-2026",
        dateStatus: "ran-previously",
        previousRun: "15 to 21 December 2025",
        categories: ["sport-and-fitness", "stem"],
        format: "day",
        note: "Run at BISP by TEEMS Global, as a day or residential camp, with Multi-Sports and STEAM, Athlete Development and Tennis options. Open to all schools.",
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "headstart-summer-camp",
    name: "HeadStart Summer Camp",
    area: "Wichit",
    mainVenue: "HeadStart Chaofah City Campus, 39/99 Moo 4, Vichitsongkram Road, Wichit",
    description:
      "HeadStart runs a six-week summer camp at its Chaofah City campus, open to children from any school, with a separate programme for each age group: an Activity Camp for ages 4 to 5, Around the World Camp for 6 to 7, Discovery Camp for 8 to 9, Adventure Camp for 10 to 14 with trips around the island, and an English Focus Camp for 8 to 14 with three English periods a day. Activities across the camps include dance, drama, gymnastics, martial arts, football, tennis, arts and crafts, coding and robotics.",
    worthKnowing:
      "Fees include lunch, snacks, excursions, materials, a T-shirt and basic accident insurance during camp hours. There is 10% off for three or more weeks in one booking, and a Late Club until 5pm for 3,000 baht a week. HeadStart also runs short sports camps over Songkran. Summer 2027 dates are not out yet; registration for 2026 opened in early March.",
    website: "https://headstartphuket.com/after-school/summer-camp",
    phone: "076 612 875",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "headstart-activity",
        programme: "Activity Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 7 August 2026",
        categories: ["multi-activity"],
        minAge: 4,
        maxAge: 5,
        format: "day",
        priceFrom: 18000,
        priceUnit: "per-week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "headstart-around-the-world",
        programme: "Around the World Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 7 August 2026",
        categories: ["multi-activity", "art-and-design"],
        minAge: 6,
        maxAge: 7,
        format: "day",
        priceFrom: 20000,
        priceUnit: "per-week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "headstart-discovery",
        programme: "Discovery Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 7 August 2026",
        categories: ["multi-activity", "stem"],
        minAge: 8,
        maxAge: 9,
        format: "day",
        priceFrom: 20000,
        priceUnit: "per-week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "headstart-adventure",
        programme: "Adventure Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 7 August 2026",
        categories: ["nature-and-outdoors", "sport-and-fitness", "stem"],
        minAge: 10,
        maxAge: 14,
        format: "day",
        priceFrom: 20000,
        priceUnit: "per-week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "headstart-english-focus",
        programme: "English Focus Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 7 August 2026",
        categories: ["language-learning", "academic"],
        minAge: 8,
        maxAge: 14,
        format: "day",
        priceFrom: 20000,
        priceUnit: "per-week",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "uwc-thailand-holiday-camps",
    name: "UWC Thailand Holiday Camps",
    area: "Thalang",
    mainVenue: "UWC Thailand, 115/15 Moo 7, Thepkrasattri Road, Thalang",
    description:
      "UWC Thailand runs its holiday camps with TEEMS Global, an organisation that delivers holiday and residential camps for schools across Asia. The summer camp runs for four weeks, with a Sports and Technology Camp for ages 4 to 14 combining sport, creativity and technology, and a residential camp for ages 12 to 18. Families can book single weeks or all four.",
    worthKnowing:
      "Optional English immersion lessons from 3 to 4pm cost 7,500 baht a week on top of the day camp. In 2026, families who registered by the end of April got 5% off. UWC also ran a February half term camp with TEEMS in 2026. Summer 2027 dates are not out yet.",
    website: "https://www.uwcthailand.ac.th/beyond-the-classroom/summer-camps-2026",
    phone: "076 540 871",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "uwc-summer-day",
        programme: "Sports and Technology Camp (day)",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "22 June to 17 July 2026",
        categories: ["sport-and-fitness", "stem"],
        minAge: 4,
        maxAge: 14,
        format: "day",
        priceFrom: 18950,
        priceUnit: "per-week",
        lastVerified: "2026-11-03",
      },
      {
        id: "uwc-summer-residential",
        programme: "Residential Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "22 June to 17 July 2026",
        categories: ["sport-and-fitness", "stem"],
        minAge: 12,
        maxAge: 18,
        format: "residential",
        priceFrom: 36500,
        priceUnit: "per-week",
        nights: 5,
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "qsi-summer-fun-camp",
    name: "QSI Summer Fun Camp",
    area: "Kathu",
    mainVenue: "QSI International School of Phuket, 81/4 Moo 1, Chalermprakiat Ror 9 Road, Kathu",
    description:
      "QSI Phuket runs a two-week summer camp at the start of the summer break, open to children from any school, with a different theme each week. In 2026 that was a Discovery Week of creative projects and art workshops, then an Adventure Week of outdoor challenges, team quests and experiments, with one field trip each week. Younger children (4 to 6) and older ones (7 to 12) run on separate schedules.",
    worthKnowing:
      "Prices include meals, materials and field trips. The camp starts early: in 2026 it ran 22 June to 3 July, so it suits families whose school finishes in mid June. Summer 2027 dates are not out yet.",
    website: "https://phuket.qsi.org/fs/pages/8370",
    email: "veronika-sinitsina@phuket.qsi.org",
    phone: "093 582 5068",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "qsi-summer-4-6",
        programme: "Summer Fun Camp, ages 4 to 6",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "22 June to 3 July 2026",
        categories: ["multi-activity", "art-and-design"],
        minAge: 4,
        maxAge: 6,
        format: "day",
        priceFrom: 12000,
        priceUnit: "per-week",
        hours: "8am to 3:30pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
      {
        id: "qsi-summer-7-12",
        programme: "Summer Fun Camp, ages 7 to 12",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "22 June to 3 July 2026",
        categories: ["multi-activity", "art-and-design", "nature-and-outdoors"],
        minAge: 7,
        maxAge: 12,
        format: "day",
        priceFrom: 12500,
        priceUnit: "per-week",
        hours: "9am to 5pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "pgis-holiday-camps",
    name: "PGIS Holiday Camps",
    area: "Chalong",
    mainVenue: "Prasan Gateway International School, 45/9 Moo 1, Soi Ta-Iad, Chalong",
    description:
      "Prasan Gateway International School runs English-immersion camps in two seasons: a Winter Camp from late January into February, aimed partly at families visiting Phuket in high season, and a four-week Summer Camp. Both combine English with STEAM projects, sport including Muay Thai and swimming, and a field trip around the island every week, for ages 5 to 12 in groups by age.",
    worthKnowing:
      "PGIS has a local resident rate for families on a Phuket student visa or long-term residence: 7,900 baht a week in summer 2026, against an early bird rate of 15,000 baht for a single week for visitors. Meals and field trips are included. In 2026 the winter camp paused for Chinese New Year, so check the weeks. Neither camp has 2027 dates yet.",
    website: "https://www.pgisphuket.com/eca-and-camps",
    email: "info@pgisphuket.com",
    phone: "090 188 8993 (WhatsApp)",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "pgis-summer",
        programme: "Summer Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "13 July to 7 August 2026",
        categories: ["language-learning", "stem", "multi-activity"],
        minAge: 5,
        maxAge: 12,
        format: "day",
        priceFrom: 7900,
        priceTo: 15000,
        priceUnit: "per-week",
        hours: "8:30am to 3pm",
        lunchIncluded: true,
        note: "7,900 baht a week was the local resident rate. The visitor early bird rate was 15,000 baht for one week, falling to 12,000 a week if booked for all four.",
        lastVerified: "2026-11-03",
      },
      {
        id: "pgis-winter",
        programme: "Winter Camp",
        window: "other-2027",
        dateStatus: "ran-previously",
        previousRun: "26 January to 20 February 2026",
        categories: ["language-learning", "stem", "multi-activity"],
        minAge: 5,
        maxAge: 12,
        format: "day",
        priceFrom: 12000,
        priceTo: 13000,
        priceUnit: "per-week",
        hours: "8:30am to 3:30pm",
        minimumBooking: "2 weeks",
        lunchIncluded: true,
        note: "Early bird prices in 2026: 26,000 baht for two weeks, 48,000 for four.",
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "lighthouse-summer-camp",
    name: "Lighthouse Primary Summer Camp",
    area: "Rawai",
    mainVenue: "Lighthouse International School primary campus, 21/1 Soi Salika, Rawai",
    description:
      "Lighthouse International School runs a six-week summer camp at its primary campus in Rawai for ages 4 to 11, with arts and crafts, outdoor games and sport, simple science experiments, music and drama, and life skills activities.",
    worthKnowing:
      "Snacks, lunch and materials are included. In 2026 the early bird price, for bookings between February and May, was 30,000 baht for all six weeks, against 45,000 baht at the regular rate. Summer 2027 dates are not out yet.",
    website: "https://lighthousephuket.com/lighthouse-primary-summer-camp-2026/",
    email: "support@lighthousephuket.com",
    phone: "080 871 4842",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "lighthouse-summer",
        programme: "Primary Summer Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 7 August 2026",
        categories: ["multi-activity", "art-and-design"],
        minAge: 4,
        maxAge: 11,
        format: "day",
        priceFrom: 10000,
        priceUnit: "per-week",
        hours: "9am to 3pm",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "kis-summer-school",
    name: "KIS Summer School",
    area: "Kathu",
    mainVenue: "Kajonkiet International School Phuket, 125/1 Soi The Valley 1, Kathu",
    description:
      "Kajonkiet International School runs a four-week Summer School in July, more academic than most camps, with English and phonics, maths, science, arts and Thai each day, plus outdoor play for the early years and digital learning for older children. Each week has a history theme, from prehistory to the space age, with a field trip to match. Children are grouped by age from Pre-Nursery (age 2) to Year 9.",
    worthKnowing:
      "A good fit for a child who needs to keep up with English or maths over the summer. The 2026 page did not mention lunch, so ask. Early bird bookings got 10% off, and KIS pupils get bigger discounts. Summer 2027 dates are not out yet.",
    website: "https://www.kisp.academy/summer-school/",
    email: "eca@kisp.academy",
    phone: "076 684 445",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "kis-summer-early-years",
        programme: "Early Years (Pre-Nursery to Reception)",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "6 to 31 July 2026",
        categories: ["academic", "language-learning"],
        minAge: 2,
        maxAge: 4,
        format: "day",
        priceFrom: 16000,
        priceUnit: "per-week",
        hours: "8:30am to 3pm",
        note: "Half days for Pre-Nursery and Nursery at 11,200 baht a week.",
        lastVerified: "2026-11-03",
      },
      {
        id: "kis-summer-years-1-9",
        programme: "Years 1 to 9",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "6 to 31 July 2026",
        categories: ["academic", "language-learning", "stem"],
        minAge: 5,
        maxAge: 14,
        format: "day",
        priceFrom: 18000,
        priceUnit: "per-week",
        hours: "8:30am to 3pm",
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "ivy-camps-usa-phuket",
    name: "Ivy Camps USA (Phuket)",
    area: "Chalong",
    mainVenue: "BCIS International School and RIS Phuket, Chalong",
    description:
      "Ivy Camps USA runs week-long summer day camps with instructors from US universities, at BCIS in Chalong and at RIS Phuket on Chalong Bay. Each week offers two topics, such as public speaking, leading as a CEO, game design and escape rooms, filmmaking, or making and marketing your own chocolate brand, with project work in the morning and games and sport after lunch.",
    worthKnowing:
      "Ivy is a separate operator using the two campuses, with its own prices and early bird deadline, so school discounts do not apply. In 2026 the RIS weeks sold out. Summer 2027 dates are not out yet.",
    // Website left off: ivycampsusa.com/thailand-summer-camps could not be loaded to confirm it (3 Nov 2026).
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "ivy-bcis-summer",
        programme: "Summer Camp at BCIS",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 24 July 2026",
        categories: ["academic", "stem", "art-and-design"],
        minAge: 8,
        maxAge: 14,
        format: "day",
        priceFrom: 17000,
        priceTo: 18500,
        priceUnit: "per-week",
        venue: "BCIS International School Phuket, Chalong",
        hours: "9am to 3pm",
        note: "17,000 baht early bird, 18,500 baht regular.",
        lastVerified: "2026-11-03",
      },
      {
        id: "ivy-ris-summer",
        programme: "Summer Camp at RIS Phuket",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "27 July to 7 August 2026",
        categories: ["academic", "stem"],
        minAge: 6,
        maxAge: 14,
        format: "day",
        priceFrom: 16150,
        priceTo: 17950,
        priceUnit: "per-week",
        venue: "RIS Phuket, Chalong Bay",
        hours: "9am to 3pm",
        note: "16,150 baht early bird, 17,950 baht regular. Sold out in 2026.",
        lastVerified: "2026-11-03",
      },
    ],
  },
  {
    slug: "andamanda-great-nagon-camp",
    name: "The Great Nagon Camp at Andamanda",
    area: "Kathu",
    mainVenue: "Andamanda Phuket water park, Kathu",
    description:
      "Andamanda, the water park in Kathu, runs a one-week kids camp with a different activity each day: crafts, kids yoga, boxing, a swimming day and a little chef cooking day, plus time in the water park. Groups are capped at about 30 children.",
    worthKnowing:
      "Single days are 1,990 baht, and booking seven days ahead gets 10% off. Lunch, snacks and water park access are included. In 2026 there was one session, at the start of the summer holiday. 2027 dates are not out yet.",
    website: "https://www.andamandaphuket.com/group-reservation/kids-camp",
    email: "admd-events@andamandaphuket.com",
    phone: "081 249 6630",
    lastVerified: "2026-11-03",
    sessions: [
      {
        id: "andamanda-summer",
        programme: "The Great Nagon Camp",
        window: "summer-2027",
        dateStatus: "ran-previously",
        previousRun: "29 June to 3 July 2026",
        categories: ["multi-activity", "swimming", "sport-and-fitness", "cookery"],
        minAge: 6,
        maxAge: 12,
        format: "day",
        priceFrom: 9500,
        priceUnit: "per-week",
        hours: "8:30am to 4:30pm",
        minimumBooking: "1 day, at 1,990 baht",
        lunchIncluded: true,
        lastVerified: "2026-11-03",
      },
    ],
  },
];

/** Flattened view for the directory filter. */
export interface SessionWithCamp extends CampSession {
  camp: Camp;
}

export const ALL_SESSIONS: SessionWithCamp[] = CAMPS.flatMap((camp) =>
  camp.sessions.map((session) => ({ ...session, camp }))
);

export const ALL_CATEGORIES: CampCategory[] = Array.from(
  new Set(ALL_SESSIONS.flatMap((s) => s.categories))
).sort();

export const ALL_AREAS: string[] = Array.from(
  new Set(CAMPS.map((c) => c.area))
).sort();

/** Days since a session was last verified. Drives the staleness warning. */
export function daysSinceVerified(iso: string, now: Date = new Date()): number {
  const then = new Date(`${iso}T00:00:00Z`).getTime();
  return Math.floor((now.getTime() - then) / 86_400_000);
}

export const STALE_AFTER_DAYS = 90;

export function isStale(iso: string, now: Date = new Date()): boolean {
  return daysSinceVerified(iso, now) > STALE_AFTER_DAYS;
}

export function campBySlug(slug: string): Camp | undefined {
  return CAMPS.find((c) => c.slug === slug);
}
