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

export const BREAK_WINDOWS: BreakWindow[] = [
  {
    id: "oct-2026",
    label: "October half term 2026",
    shortLabel: "Oct 2026",
    start: "2026-10-12",
    end: "2026-10-25",
    coreStart: "2026-10-12",
    coreEnd: "2026-10-16",
    summary:
      "Two separate weeks, not one. Patana and St Andrews take 12 to 16 October. King's takes 17 to 25 October. Camp supply is heaviest in the first week.",
  },
  {
    id: "winter-2026",
    label: "Winter and New Year 2026/27",
    shortLabel: "Winter 2026",
    start: "2026-12-14",
    end: "2027-01-11",
    coreStart: "2026-12-21",
    coreEnd: "2027-01-01",
    summary:
      "The most staggered break of the year. St Andrews is out from 14 December, Patana not until 19 December. St Andrews returns 5 January, Shrewsbury not until 12 January. Nearly a month of rolling demand.",
  },
  {
    id: "spring-2027",
    label: "Spring half term 2027",
    shortLabel: "Spring 2027",
    start: "2027-02-15",
    end: "2027-03-26",
    summary:
      "There is no single spring break. St Andrews takes mid February, King's takes late February, Patana takes late March around Easter. Check your own school's dates before booking anything labelled February half term.",
  },
  {
    id: "songkran-2027",
    label: "Songkran break 2027",
    shortLabel: "Songkran 2027",
    start: "2027-04-03",
    end: "2027-04-18",
    coreStart: "2027-04-05",
    coreEnd: "2027-04-16",
    summary:
      "The most aligned break after October. Most schools take the full two weeks, 5 to 16 April, with Songkran itself on 13 to 15 April. Very few camps run during the festival days themselves.",
  },
  {
    id: "summer-2027",
    label: "Summer 2027",
    shortLabel: "Summer 2027",
    start: "2027-06-23",
    end: "2027-08-20",
    summary:
      "Finish dates spread across three weeks, from 22 June at St Andrews to 2 July at King's, and American calendar schools finish earlier still. Eight weeks of camp demand, and the only window where residential and overseas programmes are realistic.",
  },
  {
    id: "other-2027",
    label: "Other term time breaks 2027",
    shortLabel: "Other 2027",
    start: "2027-05-01",
    end: "2027-06-06",
    summary:
      "A few schools take short breaks inside Term 3. King's takes 1 to 4 May and 3 to 6 June. Almost no camps are scheduled against these, since demand is too thin.",
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
