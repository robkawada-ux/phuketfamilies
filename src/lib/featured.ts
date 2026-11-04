/**
 * Paid featured placements (see the Phuket rate card in the claude.ai project
 * doc `claude/phuket-rate-card.md`).
 *
 * A featured school or camp is shown first in its group, with a "Featured"
 * label and the advertiser's offer line. Paying never changes the listing's
 * description, fees or any other editorial content, and every featured
 * placement is labelled as paid.
 *
 * To sell one: add `featured: { from, until, offer?, invoice? }` to the
 * school in schools.ts or the camp in camps.ts. It switches itself on and off
 * by date, because the pages that show it are regenerated every hour.
 */
export interface Featured {
  /** First day of the paid placement, YYYY-MM-DD, Bangkok time. */
  from: string;
  /** Last day of the paid placement, inclusive, YYYY-MM-DD, Bangkok time. */
  until: string;
  /**
   * Optional offer supplied by the advertiser, shown as written on the card
   * and the detail page, e.g. "15% off first-term tuition for new students".
   * Keep it to one short sentence.
   */
  offer?: string;
  /** Our invoice number, for the records only. Never shown on the site. */
  invoice?: string;
}

/** Today's date in Bangkok (UTC+7), as YYYY-MM-DD. */
export function todayInBangkok(now: Date = new Date()): string {
  return new Date(now.getTime() + 7 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/** True when the placement is running on `today` (YYYY-MM-DD). */
export function isFeaturedNow(
  f: Featured | undefined,
  today: string = todayInBangkok(),
): boolean {
  return !!f && f.from <= today && today <= f.until;
}

/** How often (seconds) pages showing featured placements are regenerated. */
export const FEATURED_REVALIDATE = 3600;
