// Source of truth for /school-breaks and the /camps break-window filter.
//
// RULE: every date below is read off the school's own published calendar.
// Nothing is inferred from "British schools usually...". If a date is not
// published, confidence is "partial" or "unverified" and it renders as such.

export type CalendarStyle = "british" | "american" | "ib" | "australian";
export type Confidence = "verified" | "partial" | "unverified";

export type BreakWindowId =
  | "oct-2026"
  | "winter-2026"
  | "spring-2027"
  | "songkran-2027"
  | "summer-2027"
  | "other-2027";

export interface SchoolBreak {
  window: BreakWindowId;
  start: string;
  end: string;
  endEstimated?: boolean;
  note?: string;
}

export interface SchoolCalendar {
  name: string;
  schoolSlug: string | null;
  style: CalendarStyle;
  sourceUrl: string;
  sourceLabel: string;
  lastVerified: string;
  confidence: Confidence;
  termStart?: string;
  termEnd?: string;
  breaks: SchoolBreak[];
  caveat?: string;
}

// Phuket school calendars, each read from the school's own published
// calendar on the date in lastVerified. Schools whose 2026/27 dates we could
// not read are listed on /school-breaks instead, not guessed here.
export const SCHOOL_CALENDARS: SchoolCalendar[] = [
  {
    name: "British International School, Phuket (BISP)",
    schoolSlug: "british-international-school-phuket",
    style: "british",
    sourceUrl: "https://www.bisphuket.ac.th/theme-content/uploads/2026/05/Calendar_2026-2027_18-5-2026.pdf",
    sourceLabel: "BISP school year calendar 2026/2027 (PDF, updated 18 May 2026)",
    lastVerified: "2026-11-05",
    confidence: "partial",
    breaks: [
      { window: "winter-2026", start: "2026-12-12", end: "2027-01-03" },
      {
        window: "spring-2027",
        start: "2027-02-13",
        end: "2027-02-22",
        note: "The published break runs to Monday 22 February.",
      },
      { window: "songkran-2027", start: "2027-04-03", end: "2027-04-18" },
    ],
    caveat:
      "BISP's calendar gives each break with the weekends either side. The first and last days of the school year are only marked on the calendar grid, which we could not read reliably, so they are not shown.",
  },
  {
    name: "BCIS International School Phuket (Berda Claude)",
    schoolSlug: "bcis-international-school-phuket",
    style: "british",
    sourceUrl: "https://www.bcisphuket.ac.th/calendar",
    sourceLabel: "BCIS calendar and holidays, academic year 2026-2027",
    lastVerified: "2026-11-05",
    confidence: "verified",
    termStart: "2026-08-24",
    termEnd: "2027-06-25",
    breaks: [
      {
        window: "winter-2026",
        start: "2026-12-14",
        end: "2027-01-04",
        note: "Back to school on 5 January. BCIS runs holiday camps from 14 to 18 December.",
      },
      {
        window: "spring-2027",
        start: "2027-02-15",
        end: "2027-02-19",
        note: "BCIS runs holiday camps during this week.",
      },
      {
        window: "songkran-2027",
        start: "2027-04-12",
        end: "2027-04-26",
        note: "Back to school on 27 April. BCIS runs holiday camps from 19 to 23 April.",
      },
    ],
  },
  {
    name: "Kajonkiet International School Phuket (KIS)",
    schoolSlug: "kajonkiet-international-school-phuket",
    style: "british",
    sourceUrl: "https://www.kisp.academy/welcome-to-admissions/school-calendar/",
    sourceLabel: "Kajonkiet International School Phuket school calendar",
    lastVerified: "2026-11-05",
    confidence: "verified",
    termStart: "2026-08-20",
    termEnd: "2027-06-25",
    breaks: [
      {
        window: "winter-2026",
        start: "2026-12-12",
        end: "2027-01-05",
        note: "Term 1 ends on 11 December and Term 2 starts on 6 January.",
      },
      {
        window: "spring-2027",
        start: "2027-02-12",
        end: "2027-02-21",
        note: "Friday 12 February is a staff training day, then half term from 13 to 21 February.",
      },
      {
        window: "songkran-2027",
        start: "2027-04-03",
        end: "2027-04-18",
        note: "Term 2 ends on 2 April and Term 3 starts on 19 April.",
      },
    ],
    caveat: "Kajonkiet also has a short half term from 28 to 31 May 2027.",
  },
  {
    name: "HeadStart International School",
    schoolSlug: "headstart-international-school",
    style: "british",
    sourceUrl: "https://headstartphuket.com/cherngtalay/campus-hub/",
    sourceLabel: "HeadStart Cherngtalay campus hub, important dates",
    lastVerified: "2026-11-05",
    confidence: "partial",
    breaks: [{ window: "winter-2026", start: "2026-12-14", end: "2027-01-01" }],
    caveat:
      "Taken from the important dates list on HeadStart's Cherngtalay campus page. We could not open the school's full 2026/27 calendar, so the February and April breaks, and the Chaofah campus dates, are not confirmed here.",
  },
];

export interface BreakWindow {
  id: BreakWindowId;
  label: string;
  shortLabel: string;
  start: string;
  end: string;
  coreStart?: string;
  coreEnd?: string;
  summary: string;
}

// Phuket windows are drawn from when Phuket camps actually run in
// 2026/27, read off the operators' own published schedules. Summaries name
// school dates only where they appear in SCHOOL_CALENDARS above.
export const BREAK_WINDOWS: BreakWindow[] = [
  {
    id: "winter-2026",
    label: "Christmas and New Year 2026/27",
    shortLabel: "Christmas 2026",
    start: "2026-12-14",
    end: "2027-01-08",
    coreStart: "2026-12-21",
    coreEnd: "2027-01-01",
    summary:
      "Christmas breaks at the schools we hold start on 12 or 14 December, and children go back between 4 and 6 January. Phuket camps run from 14 December, and the longest runs straight through to 8 January. Many families travel at this time, so book early if you are staying on the island.",
  },
  {
    id: "spring-2027",
    label: "February half term 2027",
    shortLabel: "February 2027",
    start: "2027-02-01",
    end: "2027-02-22",
    coreStart: "2027-02-15",
    coreEnd: "2027-02-19",
    summary:
      "Half term falls between 12 and 22 February at the schools we hold, and the only week they all share is 15 to 19 February, which is when most February camps on the island run. Thanyapura also runs the two weeks before, 1 to 5 February and 8 to 12 February, the second of which covers Chinese New Year.",
  },
  {
    id: "other-2027",
    label: "January to March 2027, for visiting families",
    shortLabel: "Jan to Mar 2027",
    start: "2027-01-11",
    end: "2027-03-05",
    summary:
      "Phuket's high season brings visiting families on long stays, and a few camps run weekly through term time for them. Useful if your child is not in school here.",
  },
  {
    id: "songkran-2027",
    label: "Easter and Songkran 2027",
    shortLabel: "Songkran 2027",
    start: "2027-04-05",
    end: "2027-04-16",
    summary:
      "BISP and Kajonkiet break from 3 to 18 April, while BCIS breaks from 12 to 26 April, so the week all three share is 12 to 16 April, Songkran week itself (13 to 15 April). Phuket camps run between 5 and 16 April, so a camp in the first week suits BISP and Kajonkiet families but not BCIS ones.",
  },
  {
    id: "summer-2027",
    label: "Summer 2027",
    shortLabel: "Summer 2027",
    start: "2027-06-21",
    end: "2027-08-13",
    summary:
      "The main camp season, roughly late June to mid August. Kajonkiet and BCIS both finish on 25 June 2027. Most camp operators publish summer dates between February and April, often with early bird prices, so many camp listings still show the dates they ran in 2026.",
  },
];

export const CALENDAR_LAST_VERIFIED = "2026-11-05";

/** The calendar for a directory school, if we hold one. */
export function calendarFor(schoolSlug: string): SchoolCalendar | null {
  return SCHOOL_CALENDARS.find((c) => c.schoolSlug === schoolSlug) ?? null;
}

/** True when a calendar has dates worth showing on the school's own page. */
export function hasPublishableDates(c: SchoolCalendar | null): boolean {
  return !!c && c.confidence !== "unverified" && (c.breaks.length > 0 || !!c.termStart);
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

/** "12 October 2026" */
export function formatDay(iso: string): string {
  const { y, m, d } = parts(iso);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** "12 to 16 October 2026", "19 December 2026 to 10 January 2027" */
export function formatRange(start: string, end: string): string {
  const a = parts(start);
  const b = parts(end);
  if (a.y === b.y && a.m === b.m) return `${a.d} to ${b.d} ${MONTHS[b.m - 1]} ${b.y}`;
  if (a.y === b.y) return `${a.d} ${MONTHS[a.m - 1]} to ${b.d} ${MONTHS[b.m - 1]} ${b.y}`;
  return `${formatDay(start)} to ${formatDay(end)}`;
}

export function windowLabel(id: BreakWindowId): string {
  return BREAK_WINDOWS.find((w) => w.id === id)?.label ?? id;
}
