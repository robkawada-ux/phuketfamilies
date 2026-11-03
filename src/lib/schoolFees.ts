// Verified international school fees for phuketfamilies.com.
// Every figure must be read from the school's own published schedule, with the date it was read.
// Third-party aggregator figures are deliberately excluded: in checking, Doris, Schoozy,
// Tutopiya and The Thaiger were each found quoting prior-year figures as current.
//
// Schools that do not publish fees are absent from this file by design. They must render
// in a labelled block below the table, never inside it.
//
// IMPORTANT: never compare schools on a min/max range.
// The cheapest row in a schedule is rarely a comparable product. Harrow's is a
// parent-accompanied toddler session two mornings a week (146,300); Shrewsbury's
// is Nursery at the City Campus only (696,300). Sorting those against each other
// ranks a playgroup against a sixth form.
// Any comparison must be locked to one `stage`, which is why rows are stored per
// year group. Early years should be its own table: hours per week, parent
// attendance and meal inclusion all differ across those rows.

export type FeeStage =
  | 'early-years'
  | 'primary'
  | 'lower-secondary'
  | 'upper-secondary'
  | 'sixth-form';

export type FeeStatus = 'published' | 'on-enquiry' | 'unverified';

export type Inclusion =
  | 'lunch'
  | 'snacks'
  | 'textbooks'
  | 'residential-trips'
  | 'eal'
  | 'transport'
  | 'uniform'
  | 'exam-fees'
  | 'after-school';

export interface FeeRow {
  /** The school's own wording for the year group. */
  label: string;
  /** Our normalised stage, so schools with different year names can be compared. */
  stage: FeeStage;
  annual: number;
  /** Set to 2 for exam years billed over two terms rather than three. */
  billedTerms?: 2 | 3;
}

export interface OneTimeFees {
  application?: number;
  /** Entrance, admission, enrolment or guaranteed-place fee. */
  registration?: number;
  refundableDeposit?: number;
  /** Charged when a child passes assessment but no place is available. */
  waitingPool?: number;
}

export interface RecurringExtra {
  label: string;
  annualFrom: number;
  annualTo?: number;
  /** True where the school decides, not the parent. */
  compulsory: boolean;
}

export interface SchoolFees {
  status: FeeStatus;
  /** Academic year the schedule covers, e.g. '2026/27'. */
  feeYear: string;
  /** The page or PDF the figures were read from. Required when status is 'published'. */
  sourceUrl?: string;
  /** ISO date the source was last read. */
  verified?: string;
  rows?: FeeRow[];
  oneTime?: OneTimeFees;
  includes?: Inclusion[];
  excludes?: Inclusion[];
  extras?: RecurringExtra[];
  /** Shown as the 'worth knowing' caveat on the school's row. */
  note?: string;
}

// Phuket schools' own fee schedules go here once read, per year group.
// Until a school is added, its page shows the indicative feeRange from schools.ts.
export const schoolFees: Record<string, SchoolFees> = {};

/** Schools checked that publish no fee figures at all. */
export const feesOnEnquiry: Record<string, { checked: string; detail: string }> = {};


// ---------------------------------------------------------------------------
// Helpers. Everything the site displays about a school's fees goes through
// these, so schoolFees above is the single source of truth.
// ---------------------------------------------------------------------------

/** Rows billed for a full year. Exam years billed over two terms are left out
 *  of headline figures because their lower total is not a cheaper product. */
function fullYearRows(f: SchoolFees): FeeRow[] {
  return (f.rows ?? []).filter((r) => r.billedTerms !== 2);
}

export interface FeeSummary {
  /** First primary-stage row (usually Year 1 or Grade 1), the comparable headline. */
  primary?: FeeRow;
  from: FeeRow;
  to: FeeRow;
  feeYear: string;
  verified?: string;
  sourceUrl?: string;
}

/** Lowest and highest full-year fee, each with the school's own year-group label. */
export function feeSummary(slug: string): FeeSummary | null {
  const f = schoolFees[slug];
  if (!f || f.status !== "published") return null;
  const rows = fullYearRows(f);
  if (rows.length === 0) return null;
  const from = rows.reduce((a, b) => (b.annual < a.annual ? b : a));
  const to = rows.reduce((a, b) => (b.annual > a.annual ? b : a));
  const primary = rows.find((r) => r.stage === "primary");
  return { primary, from, to, feeYear: f.feeYear, verified: f.verified, sourceUrl: f.sourceUrl };
}

/**
 * Budget tag for a verified school, read from its first primary-stage fee
 * (Year 1 or Grade 1 in most schedules). Locking to one stage follows the
 * rule above: early years rows mix half days, parent sessions and meal plans,
 * so an average across every row is not comparable between schools. Schools
 * with no primary row fall back to the mean of their full-year rows.
 */
export function verifiedBudget(slug: string): "under400k" | "over400k" | null {
  const f = schoolFees[slug];
  if (!f || f.status !== "published") return null;
  const rows = fullYearRows(f);
  if (rows.length === 0) return null;
  const primary = rows.find((r) => r.stage === "primary");
  const basis = primary
    ? primary.annual
    : rows.reduce((sum, r) => sum + r.annual, 0) / rows.length;
  return basis >= 400000 ? "over400k" : "under400k";
}

export function formatThb(n: number): string {
  return n.toLocaleString("en-US");
}

/** "18 September 2026" from an ISO date, without timezone drift. */
export function formatVerifiedDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

export const INCLUSION_LABEL: Record<Inclusion, string> = {
  lunch: "Lunch",
  snacks: "Snacks",
  textbooks: "Textbooks",
  "residential-trips": "Residential trips",
  eal: "English language support",
  transport: "School bus",
  uniform: "Uniform",
  "exam-fees": "Exam fees",
  "after-school": "After-school activities",
};

export const ONE_TIME_LABEL: Record<keyof OneTimeFees, string> = {
  application: "Application fee",
  registration: "Registration or entrance fee",
  refundableDeposit: "Refundable deposit",
  waitingPool: "Waiting pool fee",
};
