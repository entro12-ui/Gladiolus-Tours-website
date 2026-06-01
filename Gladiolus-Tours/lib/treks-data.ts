export type TrekDifficulty = "Easy" | "Moderate" | "Challenging"

export interface Trek {
  id: string
  slug: string
  title: string
  headline?: string
  location: string
  region: "northern" | "southern" | "eastern" | "western" | "coast"
  duration: string
  elevation: string
  difficulty: TrekDifficulty
  bestTime: string
  permits: string
  image: string
  description: string
  overview?: string
  priceFrom?: string
  highlights: string[]
  whyChoose?: string[]
  itinerary?: Array<{
    day: string
    title: string
    description: string
  }>
}

/* ===========================
   MAJOR MOUNTAIN TREKS
=========================== */

export const majorMountainTreks: Trek[] = [
  {
    id: "kili-marangu",
    slug: "kilimanjaro-marangu-route",
    title: "Marangu Route",
    headline: "5 Days Marangu Route – Kilimanjaro Climb",
    location: "Kilimanjaro National Park, Tanzania",
    region: "northern",
    duration: "5 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Moderate",
    bestTime: "June – October & January – March",
    permits: "Kilimanjaro National Park permits required",
    image: "/gallery/marangu-hero.jpg",
    description:
      "The only Kilimanjaro route with hut accommodation. Known as the Coca-Cola Route, it is ideal for beginners seeking comfort and a shorter summit itinerary.",
    overview:
      "The Marangu Route is the most established and comfortable way to climb Mount Kilimanjaro. It is the only route offering dormitory-style hut accommodation, making it perfect for trekkers who prefer not to camp. The trail passes through rainforest, moorland, alpine desert, and finally reaches Uhuru Peak (5,895m), the highest point in Africa. While it is considered the easiest path, proper acclimatization is still essential for summit success.",
    priceFrom: "$2,100 per person",
    highlights: [
      "Only Kilimanjaro route with hut accommodation",
      "Ideal for beginners and first-time climbers",
      "Gradual and well-maintained trekking trail",
      "Classic summit ascent via Gilman's Point",
      "Comfortable mountain huts at every camp",
    ],
    whyChoose: [
      "Comfortable hut accommodation instead of camping",
      "Shorter duration and simpler logistics",
      "Excellent for moderate fitness levels",
      "Reliable summit success with proper pacing",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marangu Gate to Mandara Hut",
        description:
          "Begin your Kilimanjaro climb through lush montane rainforest. Spot colobus monkeys and exotic birds before reaching Mandara Hut (2,700m).",
      },
      {
        day: "Day 2",
        title: "Mandara Hut to Horombo Hut",
        description:
          "Ascend into moorland terrain with spectacular views of Mawenzi and Kibo peaks. Reach Horombo Hut (3,720m) for your first night at altitude.",
      },
      {
        day: "Day 3",
        title: "Horombo Hut to Kibo Hut",
        description:
          "Cross the alpine desert saddle between Mawenzi and Kibo. Arrive at Kibo Hut (4,700m) in the afternoon and rest before midnight summit push.",
      },
      {
        day: "Day 4",
        title: "Summit Day to Uhuru Peak & Descent to Horombo",
        description:
          "Midnight ascent to Gilman's Point, then continue along the crater rim to Uhuru Peak (5,895m) for sunrise. Descend to Horombo Hut for rest.",
      },
      {
        day: "Day 5",
        title: "Horombo Hut to Marangu Gate",
        description:
          "Final descent through rainforest to Marangu Gate. Collect your summit certificate and transfer back to your hotel in Arusha or Moshi.",
      },
    ],
  },

  {
    id: "kili-machame",
    slug: "kilimanjaro-machame-route",
    title: "Machame Route",
    headline: "7 Days Machame Route – Kilimanjaro Climb",
    location: "Kilimanjaro National Park, Tanzania",
    region: "northern",
    duration: "7 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June – October & January – March",
    permits: "Kilimanjaro National Park permits required",
    image: "/gallery/kiliman1.jpeg",
    description:
      "The most popular Kilimanjaro trekking route, offering dramatic scenery and excellent acclimatization via the climb-high, sleep-low principle.",
    overview:
      "Known as the Whiskey Route, the Machame Route is Kilimanjaro's most popular trail. It offers one of the highest summit success rates thanks to its excellent acclimatization profile. The route takes you through five distinct climate zones — from lush rainforest to arctic summit conditions — with spectacular views of the Breach Wall and Barranco Valley.",
    priceFrom: "$2,200 per person",
    highlights: [
      "Most popular Kilimanjaro route",
      "Excellent acclimatization profile",
      "Diverse scenery from rainforest to glaciers",
      "Iconic Barranco Wall climb",
      "High summit success rate",
    ],
    whyChoose: [
      "Best balance of challenge and reward",
      "Ideal for adventurous trekkers",
      "Scenic and varied landscapes",
      "Strong summit success statistics",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Machame Gate to Machame Camp",
        description:
          "Trek through dense rainforest filled with tropical vegetation. Camp at Machame Camp (3,000m) on the edge of the forest zone.",
      },
      {
        day: "Day 2",
        title: "Machame Camp to Shira 2 Camp",
        description:
          "Ascend steeply into moorland with increasingly open views of Kibo Peak. Cross onto the Shira Plateau and camp at Shira 2 (3,850m).",
      },
      {
        day: "Day 3",
        title: "Shira 2 to Lava Tower to Barranco Camp",
        description:
          "Acclimatization day via Lava Tower (4,600m) before descending into the scenic Barranco Valley. Camp at Barranco (3,960m).",
      },
      {
        day: "Day 4",
        title: "Barranco Camp to Karanga Camp",
        description:
          "Climb the famous Barranco Wall — a non-technical but exciting scramble — then traverse to Karanga Camp (4,035m).",
      },
      {
        day: "Day 5",
        title: "Karanga Camp to Barafu Camp",
        description:
          "Reach Barafu Camp (4,640m), the base camp for summit night. Rest and prepare equipment for the midnight ascent.",
      },
      {
        day: "Day 6",
        title: "Summit Day to Uhuru Peak & Mweka Camp",
        description:
          "Midnight ascent to Stella Point and Uhuru Peak (5,895m) for sunrise. Descend to Mweka Camp (3,100m) for recovery.",
      },
      {
        day: "Day 7",
        title: "Mweka Camp to Mweka Gate",
        description:
          "Final descent through rainforest to Mweka Gate. Receive your summit certificate and return to Arusha or Moshi.",
      },
    ],
  },

  {
    id: "kili-lemosho",
    slug: "kilimanjaro-lemosho-route",
    title: "Lemosho Route",
    headline: "8 Days Lemosho Route – Scenic Kilimanjaro Climb",
    location: "Kilimanjaro National Park, Tanzania",
    region: "northern",
    duration: "8 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June – October & January – March",
    permits: "Kilimanjaro National Park permits required",
    image: "/gallery/Lemoshoroute.jpeg",
    description:
      "One of the most scenic Kilimanjaro routes with lower crowds, remote wilderness start, and the highest summit success rates.",
    overview:
      "The Lemosho Route is widely regarded as the most beautiful way to climb Kilimanjaro. Beginning on the western slopes, it offers a remote wilderness experience, crosses the vast Shira Plateau, and provides excellent acclimatization. With an 8-day itinerary, it boasts one of the highest summit success rates on the mountain.",
    priceFrom: "$2,380 per person",
    highlights: [
      "Most scenic Kilimanjaro route",
      "Low crowd trekking experience",
      "Excellent acclimatization schedule",
      "Highest summit success rate",
      "Remote western approach",
    ],
    whyChoose: [
      "Premium trekking experience",
      "Best for serious climbers",
      "Less crowded than Machame",
      "Longer acclimatization for safety",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Londorossi Gate to Mti Mkubwa Camp",
        description:
          "Start through pristine rainforest on the remote western side of Kilimanjaro. Camp at Mti Mkubwa (2,750m).",
      },
      {
        day: "Day 2",
        title: "Mti Mkubwa to Shira 1 Camp",
        description:
          "Trek out of the forest into expansive moorland. Reach Shira 1 Camp (3,500m) with views across the plateau.",
      },
      {
        day: "Day 3",
        title: "Shira 1 to Shira 2 Camp",
        description:
          "Gentle hike across the Shira Plateau with panoramic views of Mount Meru and Kibo. Camp at Shira 2 (3,850m).",
      },
      {
        day: "Day 4",
        title: "Shira 2 to Lava Tower to Barranco Camp",
        description:
          "Climb to Lava Tower (4,600m) for acclimatization, then descend to Barranco Camp (3,960m).",
      },
      {
        day: "Day 5",
        title: "Barranco Camp to Karanga Camp",
        description:
          "Scale the Barranco Wall and traverse to Karanga Camp (4,035m) for another important acclimatization stage.",
      },
      {
        day: "Day 6",
        title: "Karanga to Barafu Camp",
        description:
          "Reach Barafu Camp (4,640m) and prepare carefully for summit night on Africa's highest mountain.",
      },
      {
        day: "Day 7",
        title: "Summit Day to Uhuru Peak & Mweka Camp",
        description:
          "Midnight push to Uhuru Peak (5,895m) via Stella Point. Descend to Mweka Camp (3,100m).",
      },
      {
        day: "Day 8",
        title: "Mweka Camp to Mweka Gate",
        description:
          "Complete the final descent through rainforest. Collect your certificate and celebrate your achievement.",
      },
    ],
  },

  {
    id: "kili-rongai",
    slug: "kilimanjaro-rongai-route",
    title: "Rongai Route",
    headline: "6 Days Rongai Route – Northern Kilimanjaro Approach",
    location: "Kilimanjaro National Park, Tanzania",
    region: "northern",
    duration: "6 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June – October & January – March",
    permits: "Kilimanjaro National Park permits required",
    image: "/gallery/kiliman3.jpeg",
    description:
      "The only Kilimanjaro route approaching from the north near Kenya. Quiet, dry, and offers a unique wilderness experience.",
    overview:
      "The Rongai Route is the only trail that approaches Kilimanjaro from the northern side near the Kenyan border. It is typically drier and less crowded than southern routes, making it ideal during rainy seasons. The gradual ascent profile and stunning northern scenery provide a unique climbing experience before joining the summit path.",
    priceFrom: "$2,150 per person",
    highlights: [
      "Least crowded Kilimanjaro route",
      "Dry conditions year-round",
      "Gradual ascent profile",
      "Unique northern wilderness views",
      "Excellent wildlife sightings",
    ],
    whyChoose: [
      "Ideal during rainy seasons",
      "Less traffic than southern routes",
      "Steady gradient climb",
      "Wildlife sightings on lower slopes",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Rongai Gate to Simba Camp",
        description:
          "Begin through forested northern slopes. Spot wildlife including colobus monkeys. Camp at Simba (2,650m).",
      },
      {
        day: "Day 2",
        title: "Simba Camp to Kikelewa Camp",
        description:
          "Trek into moorland with clear views toward Mawenzi and the northern plains. Camp at Kikelewa (3,600m).",
      },
      {
        day: "Day 3",
        title: "Kikelewa to Mawenzi Tarn Camp",
        description:
          "Climb into a scenic alpine valley beneath Mawenzi Peak. Camp at Mawenzi Tarn (4,330m) for acclimatization.",
      },
      {
        day: "Day 4",
        title: "Mawenzi Tarn to Kibo Hut",
        description:
          "Cross the alpine desert saddle between Mawenzi and Kibo. Arrive at Kibo Hut (4,700m) for summit preparation.",
      },
      {
        day: "Day 5",
        title: "Summit Day to Uhuru Peak & Horombo Hut",
        description:
          "Night ascent to Uhuru Peak (5,895m) via Gilman's Point. Descend to Horombo Hut (3,720m) for rest.",
      },
      {
        day: "Day 6",
        title: "Horombo Hut to Marangu Gate",
        description:
          "Descend through rainforest to Marangu Gate. Receive your certificate and return to Arusha or Moshi.",
      },
    ],
  },

  {
    id: "kili-umbwe",
    slug: "umbwe-route",
    title: "Umbwe Route",
    headline: "6 Days Umbwe Route – Steep Kilimanjaro Ascent",
    location: "Kilimanjaro National Park, Tanzania",
    region: "northern",
    duration: "6 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June – October & January – March",
    permits: "Kilimanjaro National Park permits required",
    image: "/gallery/kili2.jpeg",
    description:
      "The steepest and most direct route on Kilimanjaro. A demanding trail recommended for experienced trekkers seeking challenge.",
    overview:
      "The Umbwe Route is Kilimanjaro's steepest and most direct path to the summit. It is a demanding trail that ascends rapidly through forest and ridge lines before joining the southern circuit at Barranco Camp. Due to its rapid ascent profile, it is best suited for experienced trekkers with strong fitness levels and prior high-altitude experience.",
    priceFrom: "$2,150 per person",
    highlights: [
      "Steep and direct ascent",
      "Less crowded than other routes",
      "Quick access to Barranco Valley",
      "Challenging ridge trekking",
      "Adventure-focused experience",
    ],
    whyChoose: [
      "Most direct path to the summit",
      "Ideal for experienced trekkers",
      "Quiet and less trafficked",
      "Spectacular ridge views",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Umbwe Gate to Umbwe Cave Camp",
        description:
          "Begin with a steep climb through dense rainforest. The trail is narrow and demanding. Camp at Umbwe Cave (2,940m).",
      },
      {
        day: "Day 2",
        title: "Umbwe Cave to Barranco Camp",
        description:
          "Continue ascending steeply along the ridge with dramatic views. Descend slightly into Barranco Camp (3,960m).",
      },
      {
        day: "Day 3",
        title: "Barranco Camp to Karanga Camp",
        description:
          "Climb the Barranco Wall and traverse to Karanga Camp (4,035m) for acclimatization.",
      },
      {
        day: "Day 4",
        title: "Karanga to Barafu Camp",
        description:
          "Reach Barafu Camp (4,640m), the base camp for summit night. Rest and prepare for the midnight push.",
      },
      {
        day: "Day 5",
        title: "Summit Day to Uhuru Peak & Mweka Camp",
        description:
          "Midnight ascent to Stella Point and Uhuru Peak (5,895m). Descend to Mweka Camp (3,100m).",
      },
      {
        day: "Day 6",
        title: "Mweka Camp to Mweka Gate",
        description:
          "Final descent through rainforest. Collect your summit certificate and transfer back to your hotel.",
      },
    ],
  },

  {
    id: "kili-shira",
    slug: "shira-route",
    title: "Shira Route",
    headline: "7 Days Shira Route – Western Kilimanjaro Trek",
    location: "Kilimanjaro National Park, Tanzania",
    region: "northern",
    duration: "7 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June – October & January – March",
    permits: "Kilimanjaro National Park permits required",
    image: "/gallery/Lemoshoroute.jpeg",
    description:
      "A scenic western approach starting high on the Shira Plateau. Offers excellent landscapes and strong acclimatization.",
    overview:
      "The Shira Route begins at a high altitude on the western side of Kilimanjaro, offering immediate access to the vast Shira Plateau. This scenic approach provides excellent photo opportunities and strong acclimatization before merging with the Machame and Lemosho routes. It is ideal for trekkers who want to experience Kilimanjaro's dramatic western landscapes.",
    priceFrom: "$2,300 per person",
    highlights: [
      "Scenic Shira Plateau crossing",
      "Remote western start",
      "Excellent panoramic landscapes",
      "High summit success rate",
      "Less initial traffic",
    ],
    whyChoose: [
      "Immediate high-altitude scenery",
      "Strong acclimatization potential",
      "Beautiful plateau landscapes",
      "Less crowded western approach",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Shira Gate to Shira 1 Camp",
        description:
          "Start at high elevation and trek across the moorland zone. Camp at Shira 1 (3,500m) with expansive plateau views.",
      },
      {
        day: "Day 2",
        title: "Shira 1 to Shira 2 Camp",
        description:
          "Gentle hike across the Shira Plateau with views of Kibo and Mount Meru. Camp at Shira 2 (3,850m).",
      },
      {
        day: "Day 3",
        title: "Shira 2 to Barranco Camp via Lava Tower",
        description:
          "Ascend to Lava Tower (4,600m) for acclimatization, then descend to Barranco Camp (3,960m).",
      },
      {
        day: "Day 4",
        title: "Barranco Camp to Karanga Camp",
        description:
          "Climb the Barranco Wall and continue to Karanga Camp (4,035m).",
      },
      {
        day: "Day 5",
        title: "Karanga to Barafu Camp",
        description:
          "Reach Barafu Camp (4,640m) and prepare for the midnight summit attempt.",
      },
      {
        day: "Day 6",
        title: "Summit Day to Uhuru Peak & Mweka Camp",
        description:
          "Night ascent to Uhuru Peak (5,895m) via Stella Point. Descend to Mweka Camp (3,100m).",
      },
      {
        day: "Day 7",
        title: "Mweka Camp to Mweka Gate",
        description:
          "Descend through lush rainforest to Mweka Gate. Receive your certificate and celebrate.",
      },
    ],
  },

  {
    id: "meru",
    slug: "mount-meru-trek",
    title: "Mount Meru Trek",
    headline: "4 Days Mount Meru Trek – Arusha National Park",
    location: "Arusha National Park, Tanzania",
    region: "northern",
    duration: "4 Days",
    elevation: "4,566m (Socialist Peak)",
    difficulty: "Challenging",
    bestTime: "June – October & January – February",
    permits: "Park fees and armed ranger required",
    image: "/gallery/Mountmeruroute.jpeg",
    description:
      "Tanzania's second-highest peak and an excellent acclimatization climb before Kilimanjaro.",
    overview:
      "The Mount Meru trek is a spectacular 4-day adventure inside Arusha National Park. It combines wildlife encounters on the lower slopes with a dramatic crater-rim summit climb to Socialist Peak (4,566m). It is widely regarded as the best acclimatization trek before attempting Mount Kilimanjaro.",
    priceFrom: "$1,000 per person",
    highlights: [
      "Wildlife encounters on lower slopes",
      "Spectacular crater rim views",
      "Perfect Kilimanjaro acclimatization",
      "Less crowded than Kilimanjaro",
      "Stunning sunrise summit",
    ],
    whyChoose: [
      "Excellent pre-Kilimanjaro acclimatization",
      "Rich wildlife including buffalo and giraffes",
      "Dramatic volcanic crater scenery",
      "Shorter and more affordable than Kilimanjaro",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Momella Gate to Miriakamba Hut",
        description:
          "Trek through forest and open grassland with wildlife sightings including giraffes and buffalo. Reach Miriakamba Hut (2,514m).",
      },
      {
        day: "Day 2",
        title: "Miriakamba Hut to Saddle Hut",
        description:
          "Steep climb through montane forest to Saddle Hut (3,570m) with panoramic views of the crater and Mount Kilimanjaro.",
      },
      {
        day: "Day 3",
        title: "Summit Day to Socialist Peak & Miriakamba Hut",
        description:
          "Midnight ascent to Socialist Peak (4,566m) for sunrise over Kilimanjaro. Descend back to Miriakamba Hut.",
      },
      {
        day: "Day 4",
        title: "Miriakamba Hut to Momella Gate",
        description:
          "Final descent through Arusha National Park. Transfer back to Arusha for rest and celebration.",
      },
    ],
  },

  {
    id: "lengai",
    slug: "ol-doinyo-lengai-night-hike",
    title: "Ol Doinyo Lengai Night Hike",
    headline: "Ol Doinyo Lengai Active Volcano Climb",
    location: "Lake Natron, Tanzania",
    region: "northern",
    duration: "1 Night",
    elevation: "2,962m",
    difficulty: "Challenging",
    bestTime: "June – October",
    permits: "Local guide required",
    image: "/gallery/kili4.jpeg",
    description:
      "Climb Tanzania's only active volcano at night for dramatic sunrise views over the Rift Valley.",
    overview:
      "Ol Doinyo Lengai is Tanzania's only active volcano and a sacred mountain to the Maasai people. This challenging night hike takes you up steep volcanic ash and rock to the summit crater, where you will witness sunrise over the Great Rift Valley, Lake Natron, and distant Kilimanjaro.",
    priceFrom: "$350 per person",
    highlights: [
      "Active volcano climb",
      "Sunrise summit views",
      "Maasai cultural region",
      "Challenging adventure",
      "Remote wilderness",
    ],
  },
  {
  id: "prep-packing",
  slug: "packing-list",
  title: "Kilimanjaro Packing List",
  headline: "Essential Kilimanjaro Packing Checklist",
  location: "Mount Kilimanjaro, Tanzania",
  region: "northern",
  duration: "Preparation Guide",
  elevation: "Up to 5,895m",
  difficulty: "Moderate",
  bestTime: "Year-round",
  permits: "No permit required for guide",
  image: "/gallery/kiliman6.jpeg",
  description:
    "Complete gear checklist for climbing Mount Kilimanjaro safely and comfortably.",
  overview:
    "Preparing for Kilimanjaro requires proper clothing, layering systems, sleeping gear, and personal essentials. The right equipment significantly increases your summit success and overall comfort.",
  highlights: [
    "Layered clothing system",
    "High-altitude sleeping bag",
    "Waterproof gear",
    "Proper hiking boots",
    "Headlamp and trekking poles"
  ],
},

{
  id: "prep-altitude",
  slug: "altitude-acclimatization",
  title: "Altitude & Acclimatization",
  headline: "Understanding Altitude on Kilimanjaro",
  location: "Mount Kilimanjaro",
  region: "northern",
  duration: "Preparation Guide",
  elevation: "5,895m",
  difficulty: "Moderate",
  bestTime: "Year-round",
  permits: "No permit required",
  image: "/gallery/kiliman7.jpeg",
  description:
    "Learn how acclimatization improves your chances of reaching Uhuru Peak safely.",
  overview:
    "Altitude sickness is the biggest challenge on Kilimanjaro. Choosing longer routes and maintaining proper hydration and pacing dramatically improves summit success rates.",
  highlights: [
    "Climb high, sleep low principle",
    "Hydration importance",
    "Gradual ascent strategy",
    "Monitoring AMS symptoms"
  ],
},

{
  id: "prep-besttime",
  slug: "best-time-to-climb",
  title: "Best Time to Climb Kilimanjaro",
  headline: "Seasonal Guide for Kilimanjaro Climbing",
  location: "Mount Kilimanjaro",
  region: "northern",
  duration: "Preparation Guide",
  elevation: "5,895m",
  difficulty: "Easy",
  bestTime: "January–March & June–October",
  permits: "No permit required",
  image: "/gallery/kiliman8.jpeg",
  description:
    "Seasonal breakdown of Kilimanjaro weather patterns and summit conditions.",
  overview:
    "Kilimanjaro can be climbed year-round, but dry seasons offer better visibility and safer summit conditions.",
  highlights: [
    "Dry season advantages",
    "Rainy season considerations",
    "Temperature expectations",
    "Crowd levels by month"
  ],
},

{
  id: "prep-faq",
  slug: "climbing-faqs",
  title: "Kilimanjaro Climbing FAQs",
  headline: "Frequently Asked Questions About Kilimanjaro",
  location: "Mount Kilimanjaro",
  region: "northern",
  duration: "Information Guide",
  elevation: "5,895m",
  difficulty: "Easy",
  bestTime: "Year-round",
  permits: "No permit required",
  image: "/gallery/kiliman9.jpeg",
  description:
    "Common questions about climbing Kilimanjaro answered by our mountain experts.",
  overview:
    "Get clear answers about fitness level, training, safety, altitude sickness, summit success rate, and preparation for your Kilimanjaro expedition.",
  highlights: [
    "Do I need prior experience?",
    "How fit should I be?",
    "What is summit success rate?",
    "How cold does it get?"
  ],
},
]

/* ===========================
   OTHER NOTABLE HIKES
=========================== */

export const otherNotableHikes: Trek[] = [
  {
    id: "udzungwa",
    slug: "udzungwa-mountains-waterfalls-hike",
    title: "Udzungwa Mountains Waterfalls Hike",
    headline: "Udzungwa Rainforest & Waterfall Trek",
    location: "Udzungwa Mountains National Park",
    region: "southern",
    duration: "1-3 Days",
    elevation: "Up to 2,576m",
    difficulty: "Moderate",
    bestTime: "June – October",
    permits: "Park fees required",
    image: "/gallery/duluti-00.webp",
    description:
      "Tropical rainforest hiking with dramatic waterfalls and endemic wildlife.",
    highlights: [
      "Sanje Waterfalls",
      "Rainforest biodiversity",
      "Cool climate",
      "Endemic wildlife",
      "Photography opportunities",
    ],
  },

  {
    id: "usambara",
    slug: "usambara-mountains-cultural-walks",
    title: "Usambara Mountains Cultural Walks",
    headline: "Village & Cultural Hiking",
    location: "Lushoto, Tanzania",
    region: "eastern",
    duration: "1-4 Days",
    elevation: "1,200m–2,300m",
    difficulty: "Easy",
    bestTime: "June – October",
    permits: "Local guide recommended",
    image: "/gallery/duluti-01.webp",
    description:
      "Relaxed highland trekking through villages and scenic viewpoints.",
    highlights: [
      "Village walks",
      "Cool temperatures",
      "Cultural experiences",
      "Scenic views",
      "Family-friendly hiking",
    ],
  },

  {
    id: "empakaai",
    slug: "ngorongoro-highlands-empakaai-crater-trek",
    title: "Empakaai Crater Trek",
    headline: "Ngorongoro Highlands Walking Safari",
    location: "Ngorongoro Conservation Area",
    region: "northern",
    duration: "1-2 Days",
    elevation: "3,200m",
    difficulty: "Moderate",
    bestTime: "June – October, January – March",
    permits: "Conservation fees required",
    image: "/gallery/Ngorongoro.jpeg",
    description:
      "Guided crater rim hiking in the Ngorongoro Highlands with flamingo lake views.",
    highlights: [
      "Volcanic landscapes",
      "Flamingo lake views",
      "Maasai scenery",
      "Highland trekking",
      "Safari extension option",
    ],
  },
]