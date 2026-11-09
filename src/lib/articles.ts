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
  /** Describes the hero photo for screen readers and image search. Falls back to the title. */
  heroAlt?: string;
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
    slug: "where-to-live-in-phuket-with-kids",
    title: "Where to Live in Phuket with Kids: Areas, Schools and Rents (2026)",
    category: "Living in Phuket",
    date: "2026-11-05",
    excerpt:
      "The five areas where families on Phuket actually live, with the international schools in each, the nearest hospitals, what a family villa costs to rent and where the traffic bites.",
    metaDescription:
      "Where to live in Phuket with kids: Cherngtalay and Bang Tao, Thalang, Phuket Town, Kathu and Chalong and Rawai compared on schools, hospitals, rents and traffic, with 2026 villa rents.",
    keywords: [
      "where to live in phuket with kids",
      "best area to live in phuket for families",
      "phuket family neighbourhoods",
      "rent villa phuket family",
      "living in phuket with children",
      "bang tao vs rawai families",
      "moving to phuket with kids",
    ],
    headings: [
      { beforeParagraph: 1, text: "Start with the school" },
      { beforeParagraph: 3, text: "Cherngtalay, Bang Tao and Laguna" },
      { beforeParagraph: 5, text: "Thalang and the north" },
      { beforeParagraph: 7, text: "Phuket Town, Wichit and Koh Kaew" },
      { beforeParagraph: 9, text: "Kathu and Patong" },
      { beforeParagraph: 10, text: "Chalong, Rawai and Nai Harn" },
      { beforeParagraph: 12, text: "Before you sign a lease" },
    ],
    body: [
      "Phuket is a small island, but where you live decides how long the school run takes, how far you are from a hospital and what you pay in rent. This guide goes through the five areas where families actually live, with the international schools in each one, the nearest hospitals and clinics, what a family home costs to rent and what the traffic is like. Rents are Phuket 101's figures for twelve-month furnished leases in October 2026. School details come from our [schools directory](/schools).",
      "Most families choose the school first and then look for a home nearby, and on Phuket that order matters. The main north to south road, Thepkasattri Road, runs through two well-known bottlenecks: the **Heroines Monument** roundabout in Thalang, which the local traffic police call the worst on the island, and the **Koh Kaew intersection** near BISP, where police control U-turns from 7 to 9am and 4 to 6pm because it jams at school drop-off. Cherngtalay on the west coast has rush-hour queues of its own. Living on the far side of one of these from your school can turn a short drive into a long one.",
      "Of the 18 international schools in our directory, eight are in Chalong and Rawai in the south, four are in and around Phuket Town, three are in Thalang in the north, two are in Kathu and two are on the west coast in Cherngtalay (HeadStart has campuses in both Phuket Town and Cherngtalay). The island's main hospitals are all in or near Phuket Town.",
      "The west coast around Bang Tao Beach is the most expensive place to live on the island and the one newcomers hear about first, with the Laguna resort complex, Boat Avenue and Porto de Phuket for shopping, and Blue Tree for the kids. Phuket 101 puts a **three-bedroom pool villa at 60,000 to 150,000 baht a month in Bang Tao and Laguna**, and 70,000 to 200,000 baht or more in Surin and Cherngtalay, with homes inside Laguna at the top of the range.",
      "Schools on this side are [HeadStart's Cherngtalay campus](/schools/headstart-international-school), which goes up to Year 9 before students move to the Chaofah campus near Phuket Town, and the small nature-based [Bamboo Valley](/schools/bamboo-valley-phuket). [UWC Thailand](/schools/uwc-thailand-international-school) and [Glenalmond](/schools/glenalmond-phuket-international-school) are the nearest larger schools, inland on Thepkasattri Road, and North London Collegiate School plans to open a campus in the Bang Tao and Cherngtalay area in 2028. Bangkok Phuket Clinic has branches in [Laguna](/healthcare/hospitals/bangkok-phuket-clinic-laguna) and [Kamala](/healthcare/hospitals/bangkok-phuket-clinic-kamala), but the hospitals are in Phuket Town. For the kids there is [Adventure Village](/activities/adventure-village-blue-tree), [REBEL Rock Climbing](/activities/rebel-rock-climbing) and [surf lessons](/activities/saltwater-dreaming-surf-school) on Bang Tao Beach in the surf season.",
      "Inland Thalang, between the airport and the Heroines Monument, is quieter, greener and much cheaper. Phuket 101 counts inland Thalang among its budget areas, where a **three-bedroom pool villa runs 35,000 to 55,000 baht a month**. It is home to [UWC Thailand](/schools/uwc-thailand-international-school), [Glenalmond Phuket](/schools/glenalmond-phuket-international-school), which opened in August 2026 inside Thanyapura, and [Life School](/schools/life-school-phuket) in Si Sunthon, as well as [Thanyapura](/activities/thanyapura-junior-development-program) itself for swimming, tennis and holiday camps.",
      "The trade-off is the drive to the hospitals in Phuket Town, through the Heroines Monument. Bangkok Phuket Clinic has a branch in [Srisunthon](/healthcare/hospitals/bangkok-phuket-clinic-srisunthon), and Bumrungrad International Hospital is building a hospital at Mai Khao in the far north, now scheduled for the third quarter of 2027. Being close to the airport is a real plus for families who fly back and forth to Bangkok.",
      "Phuket Town and the suburbs around it are the practical choice: the lowest rents on the island, the big shopping malls, and every main hospital close by, including [Bangkok Hospital Phuket](/healthcare/hospitals/bangkok-hospital-phuket) and [Bangkok Hospital Siriroj](/healthcare/hospitals/bangkok-hospital-siriroj), both with children's clinics open into the evening. Phuket 101 puts a **three-bedroom pool villa at 30,000 to 55,000 baht a month** here, with townhouses from 15,000 baht.",
      "Schools here include [BISP](/schools/british-international-school-phuket) in Koh Kaew, [HeadStart's Chaofah campus](/schools/headstart-international-school), [Oak Meadow](/schools/oak-meadow-international-school) in Wichit and [Finnway](/schools/finnway-international-school-phuket) near Boat Lagoon. For weekends there is [Aquaria](/activities/aquaria-phuket) under Central Phuket Floresta, the [Ice Arena](/activities/ice-arena-phuket) at Boat Lagoon, [Formula Fun Karting](/activities/formula-fun-karting) and the [Old Town and its Sunday Walking Street](/activities/phuket-old-town-walking-street). The catch is the distance to the beaches, and the Koh Kaew intersection at school time if you live on the wrong side of it.",
      "Kathu sits in the valley between Phuket Town and Patong, with two of the island's more affordable schools, [Kajonkiet (KISP)](/schools/kajonkiet-international-school-phuket) and [QSI](/schools/qsi-international-school-of-phuket). Phuket 101 doesn't give Kathu rents separately. Patong itself is built around tourism and nightlife, so families who want to be on this side of the island usually live in Kathu; in Patong a three-bedroom pool villa runs 50,000 to 100,000 baht a month. Kathu is close to [Andamanda](/activities/andamanda-phuket), [Phuket Wake Park](/activities/phuket-wake-park) and [Flying Hanuman](/activities/flying-hanuman), and [Patong Hospital](/healthcare/hospitals/patong-hospital) has a 24-hour emergency room.",
      "The south has the most schools and a large, settled expat community. Eight of the 18 schools in our directory are here: [BCIS](/schools/bcis-international-school-phuket), [RIS Phuket](/schools/ruamrudee-international-school-phuket), [Lighthouse](/schools/lighthouse-international-school-phuket), [PGIS](/schools/prasan-gateway-international-school), [Montessori House](/schools/montessori-house-phuket-international-school), [École Française Jean de La Fontaine](/schools/ecole-francaise-jean-de-la-fontaine), [ISP](/schools/international-school-of-phuket) and [Buds](/schools/buds-international-school-phuket). Chalong is the cheaper half, with **three-bedroom pool villas at 38,000 to 70,000 baht a month**, against 45,000 to 90,000 baht in Rawai and Nai Harn, which are closer to the beaches.",
      "Bangkok Phuket Clinic has a branch in [Rawai](/healthcare/hospitals/bangkok-phuket-clinic-rawai), but the hospitals are in Phuket Town. Weekends mean Nai Harn and Rawai beaches, the [Big Buddha](/activities/big-buddha-phuket) and boat trips from Chalong Pier. Kata and Karon, over the hill to the west, are mostly holiday towns, with pool villas at 45,000 to 85,000 baht a month, though some families do live there and ISP's school bus covers both.",
      "Phuket 101's advice is to rent by the month for two or three months first, ideally in two different areas, before signing a year's lease. A twelve-month lease signed in the low season also locks in the lower low-season rent for the whole year.",
      "Budget for a pool villa's running costs as well as the rent. Phuket 101 estimates electricity for a three-bedroom pool villa at 3,500 to 6,500 baht a month with sensible air conditioning, and several times that with it running all day. Pool cleaning and a gardener are often included in a villa lease, but not always, so ask. Most listings we looked at ask for a two-month deposit plus the first month's rent in advance.",
      "If you are thinking of buying rather than renting, our Bangkok site has a guide to [what foreigners can and cannot own in Thailand](https://www.bkkfamilies.com/blog/foreign-property-ownership-thailand-2026). School fees usually outweigh the rent, so see our [Phuket school fees guide](/blog/phuket-international-school-fees) too, and if you are weighing boarding instead of a move, our guide to [boarding schools in Phuket for Bangkok families](/blog/boarding-schools-phuket-bangkok-families).",
    ],
    faq: [
      {
        question: "Which part of Phuket is best for families?",
        answer:
          "It depends on the school, because traffic at the Heroines Monument and Koh Kaew makes long school runs painful. The south (Chalong and Rawai) has the most international schools and mid-range rents, Phuket Town is the cheapest and closest to the hospitals, inland Thalang is quiet and near UWC and the airport, and Bang Tao and Laguna are the most expensive, with the most resort-style facilities.",
      },
      {
        question: "How much does it cost to rent a family home in Phuket?",
        answer:
          "By Phuket 101's October 2026 figures for twelve-month leases, a three-bedroom pool villa costs about 30,000 to 55,000 baht a month in Phuket Town, 38,000 to 70,000 in Chalong, 45,000 to 90,000 in Rawai and Nai Harn, and 60,000 to 150,000 in Bang Tao and Laguna. Electricity for a pool villa adds roughly 3,500 to 6,500 baht a month.",
      },
      {
        question: "Where are the hospitals in Phuket?",
        answer:
          "The main hospitals, Bangkok Hospital Phuket, Bangkok Hospital Siriroj, Mission Hospital and Vachira Phuket Hospital, are all in or near Phuket Town. Patong Hospital has a 24-hour emergency room, and Bangkok Phuket Clinic has branches in Laguna, Kamala, Rawai and Srisunthon. See [where to take a sick child in Phuket](/healthcare/paediatrics).",
      },
      {
        question: "Which area has the most international schools?",
        answer:
          "Chalong and Rawai in the south, with eight of the 18 schools in our [directory](/schools). Phuket Town and Koh Kaew have four, including BISP.",
      },
    ],
    relatedSchools: [
      { name: "British International School, Phuket (BISP)", slug: "british-international-school-phuket" },
      { name: "UWC Thailand International School", slug: "uwc-thailand-international-school" },
      { name: "HeadStart International School", slug: "headstart-international-school" },
      { name: "BCIS International School Phuket", slug: "bcis-international-school-phuket" },
    ],
  },
  {
    slug: "boarding-schools-phuket-bangkok-families",
    title: "Boarding Schools in Phuket for Bangkok Families: BISP and UWC (2026/27)",
    category: "Schools",
    date: "2026-11-05",
    excerpt:
      "Only two Phuket schools take boarders. What BISP and UWC Thailand offer, from what age, what boarding costs in 2026/27, and what Bangkok parents should ask before applying.",
    metaDescription:
      "Boarding schools in Phuket for Bangkok families: BISP (from Year 4) and UWC Thailand (Grades 9 to 12) compared, with 2026/27 boarding and tuition fees, summer camps to try first and questions to ask.",
    keywords: [
      "boarding school phuket",
      "bisp boarding fees",
      "uwc thailand boarding",
      "boarding school thailand for bangkok families",
      "phuket boarding school fees 2026",
      "international boarding school phuket",
    ],
    headings: [
      { beforeParagraph: 1, text: "BISP: boarding from age 8" },
      { beforeParagraph: 4, text: "UWC Thailand: boarding from Grade 9" },
      { beforeParagraph: 7, text: "Weekly or full boarding from Bangkok?" },
      { beforeParagraph: 8, text: "Try a summer camp first" },
      { beforeParagraph: 9, text: "Questions to ask before you apply" },
    ],
    body: [
      "Two international schools in Phuket take boarders: the British International School, Phuket (BISP) in Koh Kaew and UWC Thailand in Thalang. From Bangkok they are a flight of about an hour and a half, with many flights a day from both Suvarnabhumi and Don Mueang, which makes them a realistic option for Bangkok families who want boarding without sending a child to the UK. This guide compares the two, with the 2026/27 fees and the questions worth asking before you apply.",
      "[BISP](/schools/british-international-school-phuket) is the island's largest school, founded in 1996 on a 44-acre campus, and the only one on Phuket offering both A Levels and the IB Diploma. It takes **boarders from Year 4 (age 8) to Year 13**, either weekly or full, and one school directory puts the number of boarders at about 120. Its boarding houses are staffed by full-time house parents with assistants and matrons.",
      "BISP publishes its 2026/27 fees in full, and boarding is charged on top of tuition. **Weekly boarding** costs 396,400 baht a year for Years 4 to 6 and 457,800 baht for Years 7 to 13. **Full boarding** costs 473,550 baht for Years 4 to 6 and 509,300 baht for Years 7 to 13. Tuition runs from 755,900 baht in Year 4 to 982,700 baht in Years 9, 10 and 12, so a full boarder in Year 9 costs about **1.49 million baht a year** in tuition and boarding together.",
      "New families also pay a 6,000 baht application fee, a placement fee of 200,000 baht (250,000 baht for a family with more than one child) and a refundable 150,000 baht bond. For children whose English needs work, BISP runs an Intensive English Course in Years 7 and 8, charged at 63,000 baht in the first term and 42,000 baht in each of the next two.",
      "[UWC Thailand](/schools/uwc-thailand-international-school) is a non-profit IB school (Primary Years, Middle Years and Diploma) next to Thanyapura in Thalang, part of the worldwide UWC movement, with mindfulness and outdoor education built into school life. **Boarding is for Grades 9 to 12 only.** Boarders live in two houses on campus with houseparents and can use Thanyapura's pool and sports facilities. The school also offers day boarding, where students stay for meals, study and evening activities until 9pm.",
      "UWC publishes its 2026/27 fees as an image and a PDF rather than page text. A school directory gives the boarding fee as 633,000 baht a year for 2025/26, alongside tuition of 845,000 baht for Grades 6 to 10 and 904,000 baht for Grades 11 and 12, so expect 2026/27 to be a little higher and ask admissions for the current figure. Students applying for the IB Diploma can also apply through their national UWC committee, which offers need-based scholarships.",
      "UWC boarders go home on long weekends when staff have training days, and the school expects them to arrive on time and stay through the full term, which is worth knowing when you book flights.",
      "Weekly boarding means coming home every weekend, which from Bangkok means two flights a week, so most Bangkok families will be looking at full boarding. If one parent can spend part of the year in Phuket, weekly boarding at BISP or day boarding at UWC gives more flexibility, and our guide to [where to live in Phuket with kids](/blog/where-to-live-in-phuket-with-kids) covers the areas near each school.",
      "Both schools run residential summer camps, an easy way to see how a child copes with boarding before you commit. In 2026 [Summer@BISP's Full Camp](/camps/summer-at-bisp) took boarders aged 10 to 15 for 29,400 baht a week, and [UWC's Residential Camp](/camps/uwc-thailand-holiday-camps) took ages 12 to 18 for 36,500 baht a week. The 2027 dates aren't out yet, and we'll add them to the [camps directory](/camps) as soon as they are.",
      "Ask each school how weekends work for full boarders, which weekends and holidays students must go home, whether staff take students to and from the airport, and whether a local guardian is required. Airlines set their own rules for children flying alone, and many charge for an unaccompanied minor service, so check those before you plan regular flights.",
      "It is also worth asking how the boarding staff handle illness and who takes a child to hospital. Phuket's private hospitals are covered in our [Phuket hospitals guide](/blog/phuket-hospitals-for-families), including children's clinic hours.",
      "To compare boarding in Phuket with staying in Bangkok, our Bangkok site has a guide to [what international school really costs in Bangkok](https://www.bkkfamilies.com/blog/what-does-international-school-actually-cost-bangkok-2026), and our [Phuket school fees guide](/blog/phuket-international-school-fees) covers every day school on the island.",
    ],
    faq: [
      {
        question: "Which schools in Phuket offer boarding?",
        answer:
          "Two: [BISP](/schools/british-international-school-phuket), for Years 4 to 13, and [UWC Thailand](/schools/uwc-thailand-international-school), for Grades 9 to 12. The other international schools on the island are day schools.",
      },
      {
        question: "How much does boarding at BISP cost in 2026/27?",
        answer:
          "On top of tuition, weekly boarding is 396,400 baht a year for Years 4 to 6 and 457,800 baht for Years 7 to 13, and full boarding is 473,550 baht and 509,300 baht. With tuition, a full boarder in Year 9 costs about 1.49 million baht a year, plus one-off admission fees.",
      },
      {
        question: "What is the youngest age for boarding in Phuket?",
        answer:
          "BISP takes boarders from Year 4, which is age 8. UWC Thailand only boards students from Grade 9, around age 14.",
      },
      {
        question: "Can my child try boarding before we commit?",
        answer:
          "Yes. Both schools run residential summer camps: in 2026 BISP's Full Camp took ages 10 to 15 and UWC's Residential Camp took ages 12 to 18. See the [camps directory](/camps) for details.",
      },
    ],
    relatedSchools: [
      { name: "British International School, Phuket (BISP)", slug: "british-international-school-phuket" },
      { name: "UWC Thailand International School", slug: "uwc-thailand-international-school" },
    ],
  },
  {
    slug: "christmas-holiday-camps-phuket-2026",
    title: "Christmas Holiday Camps in Phuket 2026: Dates, Ages and Prices",
    category: "Camps",
    date: "2026-11-04",
    excerpt:
      "Every Christmas holiday camp in Phuket we can confirm for December 2026, from nature camps in Cherngtalay to swim and tennis at Thanyapura, plus what BISP ran last year and Christmas workshops for little ones.",
    metaDescription:
      "Christmas holiday camps in Phuket for December 2026: confirmed dates, ages, hours and weekly prices for Bamboo Valley, Thanyapura and ISP, plus BISP's camps and festive workshops for kids.",
    keywords: [
      "christmas camp phuket",
      "phuket holiday camp december 2026",
      "winter camp phuket",
      "kids camp phuket christmas",
      "phuket christmas activities for kids",
      "bamboo valley christmas camp",
      "thanyapura kids camp",
    ],
    headings: [
      { beforeParagraph: 1, text: "Camps with confirmed dates" },
      { beforeParagraph: 4, text: "BISP: what ran last Christmas" },
      { beforeParagraph: 6, text: "Christmas workshops and events for little ones" },
      { beforeParagraph: 8, text: "Visiting in January to March?" },
      { beforeParagraph: 9, text: "Before you book" },
    ],
    body: [
      "Phuket's international schools break up in mid-December and most go back in early January, which leaves working parents, and families visiting the island, looking for a few weeks of camp. This guide covers every Christmas camp we can confirm for 2026, the camps that ran last December and are likely to return, and a few festive one-offs for younger children. Every camp here also has a listing in our [Phuket holiday camps directory](/camps), where you can filter by age and dates.",
      "**[Bamboo Valley's Christmas Nature Camp](/camps/bamboo-valley-nature-camps)** in Cherngtalay runs for two weeks, from **14 to 25 December**, Monday to Friday from 9am to 3pm, with lunch included. The Mini camp for ages 3 to 6 costs **13,000 baht a week** and the Explorer camp for ages 6 to 13 costs **15,000 baht a week**, with two outings a week and transport for the Explorers. Days are spent outdoors with animal care, gardening, baking, crafts and games, and every camper needs health or travel medical insurance that covers the camp.",
      "**[Thanyapura's Future Stars camp](/camps/thanyapura-future-stars-camp)** in Thalang runs the longest, from **21 December to 8 January**, which suits families whose school starts back later. It is for ages 5 to 16. The full-day swim and tennis camp runs from 9am to 4pm for **13,000 baht a week** or 3,200 baht a day, and a half-day swim camp runs from 9am to 1.30pm for **7,400 baht a week** or 2,300 baht a day, both with lunch.",
      "**[ISP's Christmas Camp](/camps/isp-holiday-camps)** in Rawai runs from **14 to 24 December** for ages 6 to 12, from 8.45am to 3.45pm, and is open to children from other schools as well as ISP's own. ISP has not published the Christmas price, so ask when you book.",
      "Last December, **[BISP](/camps/summer-at-bisp)** in Koh Kaew hosted the biggest line-up on the island, open to children from other schools. It included a Cruzeiro football camp on 13 and 14 December for Years 3 to 6, a Christmas tennis camp from 13 to 16 December for ages 4 to 17, three weeks of swim camps between 15 December and 2 January, a Play Sports multi-sport camp from 13 to 16 December for ages 4 to 11, and three rounds of circus courses with [Mid-Air Circus Arts](/activities/mid-air-circus-arts) between 15 and 31 December.",
      "BISP has not announced its 2026 Christmas camps yet, but Play Sports' own page already lists its Christmas camp at BISP for **12 to 16 December**. Last year TEEMS Global also ran a winter camp at BISP from 15 to 21 December with a residential option, one of the very few boarding camps on the island at Christmas. We will add the 2026 dates to the [camps directory](/camps) as soon as they are published.",
      "For children too young for a full camp, Bamboo Valley runs **Saturday Christmas workshops** on 28 November, 12 December and 19 December for ages 3 to 8, with candle making, paper lanterns, decorating a Christmas tree and baking bread and carrot cake. A morning (10am to 12pm) or afternoon (1pm to 3pm) session costs **1,200 baht**, or **2,400 baht** for the whole day with lunch.",
      "At Cape Panwa, the **Pullman Phuket Panwa** resort holds a free Christmas tree lighting on 4 December from 6pm to 8pm and a Christmas market from 4 to 6 December. Its **Santa's Workshop** on 13 and 20 December, from 2pm to 4pm, costs 2,100 baht for a family of two adults and two children, plus 600 baht for each extra child aged 6 to 12.",
      "Phuket's high season brings a second wave of camps for families visiting from abroad. Bamboo Valley's Winter Nature Camp runs weekly from **18 January to 5 March 2027**, at 13,500 baht a week for the Mini camp and 15,500 baht for the Explorers. PGIS in Chalong ran an English immersion winter camp from late January to February 2026 for ages 5 to 12 at 12,000 to 13,000 baht a week, and it is likely to return. Both are in the [camps directory](/camps) under January to March.",
      "Book the weeks you need early, because the smaller camps fill up with holidaymakers over Christmas. Check what is included: lunch is included at all three confirmed camps, but transport to and from camp usually is not, and Phuket's traffic makes the location matter. Thanyapura is in the north near the airport, Bamboo Valley on the west coast near Bang Tao and ISP in Rawai in the far south. If you only need a few days, Thanyapura sells single days.",
      "Spending part of the holiday in Bangkok? Our sister site BKK Families has the same kind of [holiday camps directory for Bangkok](https://www.bkkfamilies.com/camps) and a guide to [Christmas in Bangkok with kids](https://www.bkkfamilies.com/blog/christmas-in-bangkok-with-kids), with family Christmas dinners, markets and where to find Santa.",
    ],
    faq: [
      {
        question: "When are the Christmas holidays for international schools in Phuket?",
        answer:
          "Most international schools in Phuket break up in mid-December and go back in early January, but the exact dates vary by school, so check your own school's calendar before booking a camp.",
      },
      {
        question: "Can holidaymakers join a Christmas camp in Phuket?",
        answer:
          "Yes. The camps in this guide are open to children who do not attend the school, and several, such as [Bamboo Valley](/camps/bamboo-valley-nature-camps), are used by families visiting the island. Bamboo Valley asks for valid health or travel medical insurance for every camper.",
      },
      {
        question: "How much does a Christmas camp in Phuket cost?",
        answer:
          "The confirmed day camps for Christmas 2026 cost between 7,400 baht a week for a half-day swim camp at Thanyapura and 15,000 baht a week for Bamboo Valley's Explorer camp. Thanyapura also sells single days from 2,300 baht.",
      },
      {
        question: "Is there a residential Christmas camp in Phuket?",
        answer:
          "Last year TEEMS Global ran a winter camp at BISP from 15 to 21 December with a residential option, open to children from any school. It has not yet been announced for 2026.",
      },
    ],
  },
  {
    slug: "phuket-international-school-fees",
    title: "Phuket International School Fees 2026/27: 18 Schools Compared",
    category: "Schools",
    date: "2026-11-03",
    updated: "2026-11-04",
    heroImage: "/images/articles/kids-group-activity.jpg",
    heroAlt: "A teacher smiling as a group of children fill bowls with vegetables at an outdoor table",
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
      "**[Finnway International School](/schools/finnway-international-school-phuket)**: 295,000 to 447,000 baht a year. A Finnish-model school in Koh Kaew for children aged 2 to 13, which added Grade 7 in August 2026, with classes of around 15.",
      "**[Oak Meadow International School](/schools/oak-meadow-international-school)**: 231,000 to 408,240 baht a year. An American curriculum from Nursery (age 2) to Grade 12 on a large campus in Wichit, with its own school buses.",
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
      "Phuket is bigger than it looks on a map, and most school runs are by car or school bus, so most families choose a school and a home together. Our directory groups the schools into five areas, and our guide to [where to live in Phuket with kids](/blog/where-to-live-in-phuket-with-kids) compares them on rents, hospitals and traffic.",
      "**The south (Chalong and Rawai)** has the most choice, with eight schools: BCIS, RIS, Lighthouse, PGIS, Montessori House, École Française, ISP and Buds. **Phuket Town, Wichit and Koh Kaew** has BISP, HeadStart's main campus, Oak Meadow and Finnway. **Kathu**, between Phuket Town and Patong, has Kajonkiet and QSI. **The north**, around Thalang, has UWC Thailand, Glenalmond and Life School. **The west coast** around Cherngtalay and Bangtao has Bamboo Valley and HeadStart's newer campus.",
      "Several schools run buses, BCIS, Oak Meadow and ISP among them, so ask about routes before you rule out a school that looks far away. The [map on our schools page](/schools) shows where each one is.",
      "Not every school runs to age 18. Buds stops at the end of primary, Finnway has just added Grade 7, ISP stops at around age 14 and RIS Phuket at Grade 8 for now. PGIS currently runs to lower secondary, and Glenalmond is starting with the early years and primary. Bamboo Valley takes children through the primary years. If your children are young this may not matter yet, but it is worth knowing which school they would move on to.",
      "The schools that currently teach right through to the final year of secondary are BISP, UWC Thailand, HeadStart, BCIS, Kajonkiet, QSI, Oak Meadow, Lighthouse and Life School.",
      "Only two schools on Phuket take boarders: BISP, with weekly and full boarding from Year 4, and UWC Thailand. That is one reason both draw students from the mainland and overseas. Our [boarding guide](/blog/boarding-schools-phuket-bangkok-families) compares the two, with 2026/27 boarding fees.",
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
    heroImage: "/images/articles/phuket-big-buddha.jpg",
    heroAlt: "The Big Buddha statue on Nakkerd Hill in Phuket under a blue sky, with visitors on the steps",
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
