// Activities directory: days out and weekly classes for kids in Phuket.
// One Activity per venue or provider, each with its own page at
// /activities/<slug>.
//
// HONESTY RULES, same as camps and playgroups:
// - Never guess a price, time or age. Omit the field and the UI says
//   "not published".
// - status "confirmed" means we read the details on the operator's own
//   current page. "check" means the best detail we have comes from a
//   recent guide or listing, and the UI tells parents to confirm first.
// - closedNote marks somewhere that is closed right now. It stays listed,
//   clearly flagged, because parents search for it by name.
//
// MAINTENANCE: re-check prices every six months, and closures monthly.
// Attraction prices online are often reseller discounts: record the
// walk-in or official price, not a booking-site deal.

export type ActivityType = "Day out" | "Weekly class";

export type Category =
  // Days out
  | "Indoor play"
  | "Climbing, karts and adventure"
  | "Water parks"
  | "Aquariums and animals"
  | "Culture and views"
  // Weekly classes
  | "Swimming and multi-sport"
  | "Football"
  | "Gymnastics and circus"
  | "Martial arts"
  | "Surfing";

export const DAY_OUT_CATEGORIES: Category[] = [
  "Indoor play",
  "Climbing, karts and adventure",
  "Water parks",
  "Aquariums and animals",
  "Culture and views",
];

export const CLASS_CATEGORIES: Category[] = [
  "Swimming and multi-sport",
  "Football",
  "Gymnastics and circus",
  "Martial arts",
  "Surfing",
];

export type Setting = "Indoor" | "Outdoor" | "Indoor and outdoor";

/** Parts of the island, north to south, plus chains with several branches. */
export type Zone =
  | "Thalang and the north"
  | "Bang Tao and Cherngtalay"
  | "Patong and Kathu"
  | "Phuket Town"
  | "Kata and Karon"
  | "Chalong and Rawai"
  | "Several locations";

export const ZONES: Zone[] = [
  "Thalang and the north",
  "Bang Tao and Cherngtalay",
  "Patong and Kathu",
  "Phuket Town",
  "Kata and Karon",
  "Chalong and Rawai",
  "Several locations",
];

export type PriceUnit =
  | "entry"
  | "hour"
  | "session"
  | "term"
  | "course"
  | "month"
  | "activity";

export interface Price {
  /** Baht, for a child unless the note says otherwise. */
  from?: number;
  to?: number;
  unit: PriceUnit;
  free?: boolean;
  note?: string;
}

export interface Activity {
  slug: string;
  name: string;
  type: ActivityType;
  category: Category;
  /** Omit when we do not know. Only "Indoor" places count as rainy-day options. */
  setting?: Setting;
  /** Mall, park or building, when the name does not already say it. */
  venue?: string;
  address?: string;
  district: string;
  zone: Zone;
  transit?: string;
  /** Ages in years. Omit both when not published. */
  minAge?: number;
  maxAge?: number;
  hours?: string;
  price?: Price;
  description: string;
  worthKnowing?: string;
  /** Set when the place is closed right now. Shown as a banner. */
  closedNote?: string;
  /** Other branches, for chains. */
  branches?: string[];
  website?: string;
  phone?: string;
  lineId?: string;
  email?: string;
  facebook?: string;
  /** Slug of one of our own articles that covers this place. */
  relatedArticle?: string;
  status: "confirmed" | "check";
  sourceUrl: string;
  lastVerified: string;
}

const P101_KIDS = "https://www.phuket101.net/things-to-do-in-phuket-with-kids/";
const BISP = "British International School, Phuket";
const BISP_ADDRESS = "59 Moo 2, Thepkrasattri Road, Koh Kaew";

export const ACTIVITIES: Activity[] = [
  // ============================================================ Indoor play
  {
    slug: "adventure-village-blue-tree",
    name: "Adventure Village, Blue Tree",
    type: "Day out",
    category: "Indoor play",
    setting: "Indoor",
    venue: "Blue Tree Phuket",
    address: "4/2 Srisoonthorn Road, Si Sunthon, Thalang",
    district: "Cherngtalay",
    zone: "Bang Tao and Cherngtalay",
    hours: "Daily, 10am to 10pm",
    price: {
      from: 400,
      to: 700,
      unit: "entry",
      note: "Per child: 400 baht for an hour or 700 baht for the day, plus 100 baht for an accompanying adult. Five-day, monthly and annual passes are also sold.",
    },
    description:
      "A big indoor play centre inside the Blue Tree complex, built for children who need to burn off energy: a trampoline grid with a foam pit, climbing frames and tunnels leading to a zip line and drop slides, and a separate soft play area for under-fives. There is a roller skate area, a party room and a cafe with simple food for kids.",
    worthKnowing:
      "Tickets are separate from the Blue Tree Lagoon water park on the same site. The busier zones need an adult watching, because children come into the foam pit from several directions.",
    status: "check",
    sourceUrl: "https://thebackpackingfamily.com/adventure-village-phuket-for-kids/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "kidzooona-jungceylon",
    name: "Kidzooona, Jungceylon",
    type: "Day out",
    category: "Indoor play",
    setting: "Indoor",
    venue: "Jungceylon, 3rd floor, Botanica zone",
    address: "Jungceylon, Rat-U-Thit 200 Pi Road, Patong",
    district: "Patong",
    zone: "Patong and Kathu",
    minAge: 1,
    maxAge: 8,
    hours: "Daily, 11am to 10pm",
    price: {
      from: 370,
      to: 410,
      unit: "entry",
      note: "At the Jungceylon branch, 370 baht for two hours or 410 baht for the whole day per child. Adults pay 120 or 140 baht. Other branches charge different rates.",
    },
    description:
      "A Japanese-style indoor playground run in Thailand by Aeon Fantasy, aimed at toddlers and young children, with role-play zones, ball pits, climbing frames and a creative corner. It is a few minutes' walk back from Patong Beach, so it works well for a hot or wet afternoon in Patong.",
    worthKnowing:
      "Children and adults need socks, which you can buy there if you forget. The biggest Kidzooona in Phuket is at Central Phuket Festival in Phuket Town, and there is a smaller one at Big C.",
    branches: ["Central Phuket Festival", "Big C"],
    status: "check",
    sourceUrl: "https://www.phuket101.net/kidzoona/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "froggys-fun-park-jungceylon",
    name: "Froggy's Fun Park, Jungceylon",
    type: "Day out",
    category: "Indoor play",
    setting: "Indoor",
    venue: "Jungceylon, 3rd floor",
    address: "Jungceylon, Rat-U-Thit 200 Pi Road, Patong",
    district: "Patong",
    zone: "Patong and Kathu",
    hours: "Daily, 11am to 10pm",
    description:
      "Jungceylon calls it the largest indoor amusement park in Phuket: trampolines, a rope park, a children's playground with slides and zip lines, bungee jumping, VR and arcade games. It suits a wider age range than the toddler play centres, and older children can happily spend a couple of hours here.",
    worthKnowing:
      "Games and rides are paid for on a separate game card, so it is worth agreeing a budget before you go. Power Drive Elite Kart Park, an indoor electric go-kart track, is in the same mall.",
    status: "check",
    sourceUrl: "https://www.jungceylon.com/explore/top-activities-for-kids-to-do-at-jungceylon-phuket",
    lastVerified: "2026-11-04",
  },

  // ============================================================ Climbing, karts and adventure
  {
    slug: "rebel-rock-climbing",
    name: "REBEL Rock Climbing",
    type: "Day out",
    category: "Climbing, karts and adventure",
    setting: "Indoor",
    address: "194/6 Moo 7, Srisoonthorn Road, Thalang",
    district: "Cherngtalay",
    zone: "Bang Tao and Cherngtalay",
    minAge: 4,
    hours: "Tuesday to Sunday, 10am to 8pm. Closed Monday.",
    price: {
      from: 600,
      to: 800,
      unit: "entry",
      note: "Children under 12: 600 baht for a two-hour pass or 800 baht for the day. Adults pay 700 or 900 baht.",
    },
    description:
      "Phuket's big indoor climbing gym: three storeys and about 700 square metres of walls overlooking a lake, with more than 80 top-rope routes and separate bouldering areas. Staff teach beginners and handle the ropes, so children can climb on their first visit, and it is one of the best rainy-day options in the north of the island.",
    phone: "076 608 734",
    status: "check",
    sourceUrl: "https://www.phuket101.net/rebel-rock-climbing-in-phuket/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "ice-arena-phuket",
    name: "Ice Arena Phuket",
    type: "Day out",
    category: "Climbing, karts and adventure",
    venue: "Boat Lagoon",
    district: "Koh Kaew",
    zone: "Phuket Town",
    hours: "Daily, 9am to 10pm",
    price: {
      from: 350,
      unit: "entry",
      note: "350 baht for children and 450 baht for adults.",
    },
    description:
      "An ice rink at Boat Lagoon, just north of Phuket Town. Skating is a novelty for most children who grow up on the island, and it makes a cool change on a very hot or wet afternoon.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },
  {
    slug: "formula-fun-karting",
    name: "Formula Fun Karting",
    type: "Day out",
    category: "Climbing, karts and adventure",
    setting: "Indoor",
    district: "Phuket Town area",
    zone: "Phuket Town",
    minAge: 7,
    hours: "9am to 7pm",
    description:
      "An indoor electric go-kart track near Phuket Town, with junior karts for children from about seven. Because it is indoors it runs whatever the weather.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },
  {
    slug: "flying-hanuman",
    name: "Flying Hanuman",
    type: "Day out",
    category: "Climbing, karts and adventure",
    setting: "Outdoor",
    district: "Kathu",
    zone: "Patong and Kathu",
    minAge: 4,
    hours: "8am to 5pm",
    description:
      "A zipline course through the rainforest canopy in the hills of Kathu, open to children from about four. It is outdoors, so go in the morning before the heat and the afternoon showers.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },

  // ============================================================ Water parks
  {
    slug: "andamanda-phuket",
    name: "Andamanda Phuket",
    type: "Day out",
    category: "Water parks",
    setting: "Outdoor",
    district: "Kathu",
    zone: "Patong and Kathu",
    hours: "Daily, 10am to 7pm",
    description:
      "Phuket's biggest water park, themed on Thai heritage and mythology and set between Patong and Phuket Town. It has dozens of slides, a wave pool, a long lazy river and separate play zones for small children, which is enough to fill a whole day.",
    worthKnowing:
      "Tickets go by height, not age: under 91 cm is free, 91 to 121 cm pays the child rate and 122 cm and up pays the adult rate. Buying online is usually cheaper than paying at the gate.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },
  {
    slug: "splash-jungle-water-park",
    name: "Splash Jungle Water Park",
    type: "Day out",
    category: "Water parks",
    setting: "Outdoor",
    address: "65 Moo 4, Mai Khao",
    district: "Mai Khao",
    zone: "Thalang and the north",
    hours: "10am to 5.45pm. Closed Tuesday and Wednesday.",
    description:
      "A water park at Mai Khao in the far north of the island, with fast slides such as the Boomerango and Super Bowl, a wave pool, a 335 metre lazy river, a family raft ride and a separate aqua play pool for young children.",
    worthKnowing:
      "It is close to the airport, so it is a long drive from the south of the island. It closes midweek, so check the day before you go.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },
  {
    slug: "phuket-wake-park",
    name: "Phuket Wake Park",
    type: "Day out",
    category: "Water parks",
    setting: "Outdoor",
    district: "Kathu",
    zone: "Patong and Kathu",
    minAge: 6,
    hours: "7am to 9pm",
    price: {
      from: 750,
      unit: "hour",
      note: "750 baht for an hour or 1,000 baht for two hours, the same price for children and adults.",
    },
    description:
      "Cable wakeboarding on a lake in Kathu, where an overhead cable pulls riders around the course instead of a boat. Children from about six can try it if they can swim.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },

  // ============================================================ Aquariums and animals
  {
    slug: "aquaria-phuket",
    name: "Aquaria Phuket",
    type: "Day out",
    category: "Aquariums and animals",
    setting: "Indoor",
    venue: "Central Phuket Floresta, B1 floor",
    address: "199 Vichitsongkram Road, Wichit",
    district: "Wichit",
    zone: "Phuket Town",
    hours: "Daily, 10.30am to 7pm, last admission 6pm",
    description:
      "A large modern aquarium in the basement of Central Phuket Floresta, which claims to be the biggest in Thailand, with about 25,000 animals across eight or nine themed zones, an ocean tunnel and scheduled shows. Allow an hour and a half to two hours, and pair it with lunch in the mall on a wet day.",
    worthKnowing:
      "Tickets go by height: under 90 cm is free, 91 to 140 cm pays the child rate and anyone taller pays the adult rate. Prices change often, so check online before you go, where tickets are usually cheaper than at the gate. This is not the same place as the older Phuket Aquarium at Cape Panwa, which is much cheaper. The AR Trickeye Museum is on the same floor and is often sold as a combo ticket.",
    status: "check",
    sourceUrl: "https://www.phuket101.net/aquaria-central-floresta-phuket/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "phuket-aquarium-cape-panwa",
    name: "Phuket Aquarium, Cape Panwa",
    type: "Day out",
    category: "Aquariums and animals",
    setting: "Indoor and outdoor",
    address: "51 Sakdidet Road, Cape Panwa",
    district: "Cape Panwa",
    zone: "Phuket Town",
    hours: "Daily, 8.30am to 4.30pm, including public holidays",
    price: {
      from: 150,
      unit: "entry",
      note: "For foreign visitors, 150 baht for a child and 300 baht for an adult. Thai children pay 40 baht and Thai adults 80 baht.",
    },
    description:
      "The island's original aquarium, opened in 1983 and run by the Phuket Marine Biological Center, a government research station. It focuses on the Andaman Sea's own marine life, with a short walk-through tunnel and sea turtles the centre rescues and cares for. It is smaller and older than Aquaria, but a fraction of the price.",
    worthKnowing:
      "It is about 20 minutes from Phuket Town and pairs well with lunch at the Cape Panwa seafood restaurants. Do not confuse it with Aquaria, the newer and much more expensive aquarium in Central Phuket Floresta.",
    phone: "076 391 126",
    status: "check",
    sourceUrl: "https://www.phuket101.net/phuket-aquarium",
    lastVerified: "2026-11-04",
  },

  // ============================================================ Culture and views
  {
    slug: "big-buddha-phuket",
    name: "Big Buddha",
    type: "Day out",
    category: "Culture and views",
    setting: "Outdoor",
    venue: "Nakkerd Hill",
    district: "Chalong",
    zone: "Chalong and Rawai",
    price: { free: true, unit: "entry" },
    description:
      "The huge white marble Buddha on Nakkerd Hill, with views over Chalong Bay and the south of the island. Go early or late in the day, because the terrace is open and gets very hot.",
    worthKnowing:
      "It is a working religious site, so cover shoulders and knees. The road up is steep and winding.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },
  {
    slug: "phuket-old-town-walking-street",
    name: "Phuket Old Town and Sunday Walking Street",
    type: "Day out",
    category: "Culture and views",
    setting: "Outdoor",
    venue: "Thalang Road and Soi Romanee",
    district: "Phuket Town",
    zone: "Phuket Town",
    hours: "Walking Street market on Sunday evenings",
    price: { free: true, unit: "entry" },
    description:
      "The colourful Sino-Portuguese shophouses of Phuket's old town are good for a stroll and a snack at any time, and on Sunday evenings Thalang Road closes to traffic for the Walking Street market, with street food, crafts and performers.",
    status: "check",
    sourceUrl: P101_KIDS,
    lastVerified: "2026-11-04",
  },

  // ============================================================ Weekly classes
  {
    slug: "thanyapura-junior-development-program",
    name: "Thanyapura Junior Development Program",
    type: "Weekly class",
    category: "Swimming and multi-sport",
    venue: "Thanyapura Sports and Health Resort",
    address: "Thepkasattri Road, Thalang",
    district: "Thalang",
    zone: "Thalang and the north",
    minAge: 3,
    hours:
      "Term-time, weekday afternoons from 3.10pm, with times depending on the sport and level. Each class has a 15-minute skill test before the first session.",
    price: {
      from: 500,
      to: 800,
      unit: "session",
      note: "The only price on the page is for the toddler tennis and triathlon group: 500 baht a session, or 800 baht as a drop-in. Ask for the other groups' term prices.",
    },
    description:
      "Thanyapura's term-time programme for children in swimming, tennis, triathlon and Muay Thai, taught in its Olympic-standard pools and on its courts. Swimming runs in four levels from about age 4, tennis from a toddler-and-parent class at 3 to 5 up to an 11-plus group, triathlon for ages 3 to 14, and Muay Thai for children aged 9 and up.",
    worthKnowing:
      "The details here are from Thanyapura's January to June 2026 term page, so check the current term's timetable. During school breaks the programme pauses and Thanyapura runs its Future Stars holiday camp instead.",
    status: "check",
    sourceUrl: "https://www.thanyapura-phuket.com/event/junior-development-program-apr2026",
    lastVerified: "2026-11-04",
  },
  {
    slug: "mid-air-circus-arts",
    name: "Mid-Air Circus Arts (MACA)",
    type: "Weekly class",
    category: "Gymnastics and circus",
    venue: BISP,
    address: BISP_ADDRESS,
    district: "Koh Kaew",
    zone: "Phuket Town",
    minAge: 4,
    description:
      "Phuket's circus academy, based at BISP, teaching flying trapeze, aerial arts and acrobatics in weekly term classes from beginner to performer level. It also runs holiday camps and hosts the Junior Aerial Championships, which brought together 83 young performers in 2026.",
    worthKnowing:
      "The latest weekly class details we found are in a 2021 BISP post, where classes were priced by the number of sessions a week. MACA is clearly still active, with a summer camp and the Junior Aerial Championships at BISP in 2026, so ask it for the current timetable and whether classes are open to children from other schools.",
    status: "check",
    sourceUrl: "https://www.bisphuket.ac.th/aerial-arts-flying-trapeze-and-gymnastics-classes-are-back/",
    lastVerified: "2026-11-04",
  },
  {
    slug: "phuket-gymnastics",
    name: "Phuket Gymnastics",
    type: "Weekly class",
    category: "Gymnastics and circus",
    setting: "Indoor",
    venue: BISP,
    address: BISP_ADDRESS,
    district: "Koh Kaew",
    zone: "Phuket Town",
    minAge: 2,
    description:
      "A gymnastics club based in BISP's sports hall, with classes from parent and toddler (ages 2 to 3) up to a competition team that travels to events in Bangkok. It has competition-standard equipment, including the island's first set of uneven bars, and runs holiday courses in the school breaks.",
    status: "check",
    sourceUrl: "https://www.bisphuket.ac.th/?p=37483",
    lastVerified: "2026-11-04",
  },
  {
    slug: "bangtao-muay-thai-kids-bjj",
    name: "Kids BJJ at Bangtao Muay Thai & MMA",
    type: "Weekly class",
    category: "Martial arts",
    district: "Bang Tao",
    zone: "Bang Tao and Cherngtalay",
    minAge: 4,
    maxAge: 16,
    hours:
      "Kids (4 to 5) 9.30 to 10.30am or 4.30 to 5.30pm, Juniors (6 to 8) 10 to 11am or 5 to 6pm, Youth (9 and up) 5 to 6pm. Check which days each group runs.",
    price: {
      from: 500,
      unit: "session",
      note: "500 baht drop-in, 1,400 baht a week, 5,000 baht a month or 13,500 baht for three months. A second child gets 15% off and a third 30% off.",
    },
    description:
      "Brazilian Jiu-Jitsu classes for children at a Bang Tao gym. BJJ is a grappling sport with no strikes, so it suits children who want a martial art without punches and kicks. The youngest groups do 30 minutes of BJJ followed by 30 minutes of supervised play.",
    worthKnowing:
      "The gym's page gives slightly different age bands in different places, so confirm the right group when you book.",
    website: "https://bangtaomuaythai.com/kids-bjj-classes-at-bangtao-muay-thai-amp-mma-phuket",
    status: "confirmed",
    sourceUrl: "https://bangtaomuaythai.com/kids-bjj-classes-at-bangtao-muay-thai-amp-mma-phuket",
    lastVerified: "2026-11-04",
  },
  {
    slug: "sor-dejdamrong-kids-muay-thai",
    name: "Kids Muay Thai at Sor Dejdamrong",
    type: "Weekly class",
    category: "Martial arts",
    address: "100/189 Moo 7, Soi Chonlaprathan, Kathu",
    district: "Kathu",
    zone: "Patong and Kathu",
    minAge: 5,
    maxAge: 12,
    hours: "Monday to Saturday, 8 to 10am and 4 to 6pm (two-hour group classes)",
    description:
      "Children's Muay Thai at a traditional Kathu gym run by former world champions. Classes focus on technique, coordination and fitness in a controlled setting, and each one ends with a cool-down and a short talk about a value such as respect or perseverance.",
    worthKnowing:
      "Children outside the 5 to 12 range can ask for a private assessment. Prices are not on the gym's page, so ask when you book.",
    phone: "098 949 8703 (WhatsApp)",
    website: "https://www.sordejdamrongmuaythai.com/kids-muay-thai-classes-phuket",
    status: "confirmed",
    sourceUrl: "https://www.sordejdamrongmuaythai.com/kids-muay-thai-classes-phuket",
    lastVerified: "2026-11-04",
  },
  {
    slug: "phuket-dolphins-kids-football",
    name: "Phuket Dolphins Kids Football Academy",
    type: "Weekly class",
    category: "Football",
    setting: "Outdoor",
    district: "Chalong and Bang Tao",
    zone: "Several locations",
    description:
      "A children's football club with pitches in Chalong and Bang Tao, offering programmes for beginners and experienced players, group and individual training, goalkeeper sessions and friendly matches. The Chalong club has two open fields and six training sessions a week, all in the evening.",
    branches: ["Chalong", "Bang Tao"],
    status: "check",
    sourceUrl: "https://phuket-insider.com/en/places/phuket-dolphins-kids-football-academy-chalong",
    lastVerified: "2026-11-04",
  },
  {
    slug: "saltwater-dreaming-surf-school",
    name: "Saltwater Dreaming Surf School",
    type: "Weekly class",
    category: "Surfing",
    setting: "Outdoor",
    venue: "Bang Tao Beach",
    district: "Cherngtalay",
    zone: "Bang Tao and Cherngtalay",
    description:
      "A surf school teaching beginners at Bang Tao, one of the gentler beaches on the island to learn on. Lessons last two hours and include the board and a rash guard, with group, private and children's lessons and a five-day group programme.",
    price: {
      from: 1400,
      unit: "session",
      note: "Two-hour lessons: 1,400 baht a person in a group, 1,800 baht for a child under 10, 2,800 baht private. The five-day group programme is 6,300 baht.",
    },
    worthKnowing:
      "The school says its season usually runs from May to October, and the sea is often flat outside it. For children under 10 it asks parents to get in touch first to check conditions.",
    website: "https://www.saltwater-dreaming.com/phuketsurfschool.htm",
    status: "confirmed",
    sourceUrl: "https://www.saltwater-dreaming.com/phuketsurfschool.htm",
    lastVerified: "2026-11-04",
  },
  {
    slug: "bangtao-surf-school",
    name: "Bangtao Surf School",
    type: "Weekly class",
    category: "Surfing",
    setting: "Outdoor",
    venue: "Bang Tao Beach, near Catch Beach Club",
    district: "Cherngtalay",
    zone: "Bang Tao and Cherngtalay",
    description:
      "A surf school on Bang Tao Beach that Phuket 101 picks out as the one most focused on children. Surf lessons run in the wave season, and stand-up paddleboarding takes over when the sea is flat.",
    worthKnowing:
      "Surf lessons run from May to November and paddleboarding from December to April. Prices are not on the guide we used, so ask when you book.",
    status: "check",
    sourceUrl: "https://www.phuket101.net/best-surf-schools-in-phuket/",
    lastVerified: "2026-11-04",
  },
];

// ------------------------------------------------------------------ helpers

export function ageLabel(min?: number, max?: number): string | null {
  if (min === undefined && max === undefined) return null;
  if (min !== undefined && max === undefined) return min === 0 ? "All ages" : `${min} and up`;
  if (min === undefined) return `Up to ${max}`;
  if (min === 0) return `Babies to ${max}`;
  return `${min} to ${max}`;
}

export function ageMatches(age: number, a: Activity): boolean {
  if (a.minAge === undefined && a.maxAge === undefined) return true;
  const lo = a.minAge ?? 0;
  const hi = a.maxAge ?? 99;
  return age >= lo && age <= hi;
}

const UNIT_LABEL: Record<PriceUnit, string> = {
  entry: "",
  hour: " an hour",
  session: " a session",
  term: " a term",
  course: " a course",
  month: " a month",
  activity: " an activity",
};

export function priceLabel(p?: Price): string | null {
  if (!p) return null;
  if (p.free) return "Free";
  if (p.from === undefined) return null;
  const base =
    p.to && p.to !== p.from
      ? `฿${p.from.toLocaleString()} to ฿${p.to.toLocaleString()}`
      : `From ฿${p.from.toLocaleString()}`;
  return base + UNIT_LABEL[p.unit];
}

export type Budget = "free" | "under500" | "500to1000" | "over1000" | "unknown";

/** Entry-style budget band. Term and course fees always count as "over1000". */
export function budgetBand(a: Activity): Budget {
  const p = a.price;
  if (!p) return "unknown";
  if (p.free) return "free";
  if (p.from === undefined) return "unknown";
  if (p.from < 500) return "under500";
  if (p.from <= 1000) return "500to1000";
  return "over1000";
}

export const ALL_CATEGORIES_BY_TYPE = {
  "Day out": DAY_OUT_CATEGORIES,
  "Weekly class": CLASS_CATEGORIES,
} as const;
