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

// Phuket school calendars go here once read from each school's own calendar.
export const SCHOOL_CALENDARS: SchoolCalendar[] = [];

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
// 2026/27, read off the operators' own published schedules. We do not
// yet hold verified Phuket school calendars, so no summary below names a
// school's term dates. Add them here once read from each school's calendar.
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
      "The busiest camp season after summer. Phuket camps run from 14 December, and the longest runs straight through to 8 January. Many families travel at this time, so book early if you are staying on the island.",
  },
  {
    id: "spring-2027",
    label: "February half term 2027",
    shortLabel: "February 2027",
    start: "2027-02-08",
    end: "2027-02-19",
    summary:
      "Most February camps on the island run 15 to 19 February. Thanyapura also runs the week before, 8 to 12 February, which covers Chinese New Year. Check your own school's half term before booking.",
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
      "Phuket camps run between 5 and 16 April, with Songkran itself on 13 to 15 April. Easter 2027 falls on 28 March, so check whether your school's break follows Easter or Songkran.",
  },
  {
    id: "summer-2027",
    label: "Summer 2027",
    shortLabel: "Summer 2027",
    start: "2027-06-21",
    end: "2027-08-13",
    summary:
      "The main camp season, roughly late June to mid August. Most operators publish summer dates between February and April, often with early bird prices, so many listings below still show the dates they ran in 2026.",
  },
];

export const CALENDAR_LAST_VERIFIED = "2026-09-12";

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
