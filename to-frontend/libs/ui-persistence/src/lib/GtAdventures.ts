import Mount_Kilimanjaro from './images/Itinerary/Mount_Kilimanjaro.webp';
import Hippo from './images/Itinerary/Hippo.webp';
import Flamingos from './images/Itinerary/Lesser_Flamingos_Lake_Natron_01.webp';
import { GtActivities } from './GtActivities';

interface IItinerary {
  day: number;
  title: string;
  description: string;
  Accommodation: string;
}

export enum GtItineraryCategory {
  'Adventure Safaris',
  'Mountain Climbing',
  'Beach Holiday',
  'Walking Safaris',
  'Tourist Attraction',
}

export interface IGtAdventures {
  id: number;
  title: string;
  overview: string;
  category: GtItineraryCategory;
  code: string;
  duration: string;
  activities: GtActivities[];
  image: string;
  carouselImage: string[];
  status: boolean;
  itinerary: IItinerary[];
}

export type GladiolusToursAdventure = IGtAdventures[];

export const GtAdventures: GladiolusToursAdventure = [
  {
    id: 1,
    title: '4 Days Kilimanjaro Trek via Machame Route',
    overview:
      'The 4 Days Kilimanjaro Short Trek via Machame route is referred as Special Kilimanjaro Climbing challenge to get to the summit for shortest period of time. It is NOT more affordable than a 6 days Kilimanjaro hike but it is a challenge for most fit hikers. So this itinerary is designed for Mountaineers as a Kilimanjaro Climb Challenge.\n',
    code: 'GT001',
    duration: '4 Days / 3 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Hippo,
    carouselImage: [Flamingos, Mount_Kilimanjaro],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day - Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha / Moshi Town - Machame Gate (1800 m) - Machame Camp (3010 m)',
        Accommodation: 'Machame Camp',
        description:
          'Transfer from your hotel to the Kilimanjaro National Park gate at Machame. After registration and preparations we start our trek into the lush rainforest. There is the possibility of spotting some Black-and-White Colobus monkeys on the way to Machame camp for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 5-6 hours | Habitat: Montane forest\n',
      },
      {
        day: 3,
        title:
          'Machame Camp (3010 m) – Shira Camp (3845 m) – Lava Tower (4630 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'After a short forest hike we continue a steep ridge passing through open moorlands crossing a large gorge to reach Shira Camp, beautiful views of the Shira Plateau and sometimes Mount Meru. The trek continues to ascent above the Shira Plateau in the direction of the Lava Tower. The vegetation becomes sparser as the landscape changes to an afro-alpine desert. The route passes through the sweeping Barranco Valley with its lobelia and giant senecio plants. After 1 to 7 hours, you will arrive at the Barranco Camp.\n' +
          '\n' +
          'Distance: About 16 km | Hiking time: 6-10 hours | Habitat: Moorland, Semi desert\n',
      },
      {
        day: 4,
        title: 'Barranco Camp (3950 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'The path climbs steep out of the Barranco valley and crosses the Karanga valley, then turns North to reach Barafu Hut. Overnight stay at Barafu camp.\n' +
          '\n' +
          'Distance: About 11 km | Hiking time: 8-10 hours | Habitat: Alpine desert\n',
      },
      {
        day: 5,
        title:
          'Barafu Camp (4640 m) – Uhuru Peak (5895 m) – Mweka Camp (3080 m) – Mweka Gate (1630 m) – Moshi / Arusha Town',
        Accommodation: 'Hotel',
        description:
          '\n' +
          '\n' +
          'Summit Attempt\n' +
          'Along day with an early start to reach the crater, ream at the Stella point in time for sunrise, then to Uhuru peak, the highest point in Africa. After celebrating with photos at the summit we start descent to Base, Picnic Lunch en-route to Mweka Gate were you will collect our summit certificates, and say goodbye to our mountain crew before drive back to Moshi/Arusha to your hotel for dinner and overnight.\n' +
          '\n' +
          'Hiking time: 8 hours to reach Uhuru Peak | Descend time: 8-11 hours to descend to Mweka Gate | Distance: About 6 km ascent + 20 km descent | Habitat: Stone scree and ice-capped summit, Moorland, Montane forest\n',
      },
      {
        day: 6,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },

  {
    id: 2,
    title: '5-6 Days Kilimanjaro Trek via Marangu Route',
    overview:
      'The Marangu Route nick named (Coca Cola Route)is the oldest and most well established trekking route on Mount Kilimanjaro, and it remains extremely popular compare to others. This path provides trekkers with the classic Kilimanjaro climbing experience, offering sweeping views and a wonderful hiking adventure all the way to the summit of Uhuru Peak. That said, it also has some unique aspects that set it apart from any of the other routes as well, giving Marangu route a character and feeling that is entirely its own. A 6 day variant provides good time for acclimatization due to a rest day at Horombo Hut.',
    code: 'GT002',
    duration: '6 Days / 5 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Mount_Kilimanjaro,
    carouselImage: [Mount_Kilimanjaro, Flamingos],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day - Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Arrive at Kilimanjaro International Airport to be picked up, taken to your hotel for overnight stay. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha / Moshi Town – Marangu Gate (1980 m) - Mandara Hut (2700 m)',
        Accommodation: 'Mandara Hut',
        description:
          'Leave Moshi by car for Marangu Gate for the necessary formalities before beginning our trek. The hiking trail begins by ascending a beautiful, tropical rain forest. At the upper edge of the forest line, we have the opportunity to see blue monkeys. The trail then widens to expose beautiful hillsides until we reach Mandara Hut for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 12 km | Hiking time: 3-5 hours | Habitat: Montane forest\n',
      },
      {
        day: 3,
        title: 'Mandara Hut (2700 m) – Horombo Hut (3720 m)',
        Accommodation: 'Horombo Hut',
        description:
          'After breakfast, follow the ascending path through the alpine – meadow. The altitude begins to change and slowdown your pace while enjoying the flora and the view of Mawenzi and Kibo peaks. Arrive at the Horombo Hut for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 12 km | Hiking time: 6-8 hours | Habitat: Moorland\n',
      },
      {
        day: 4,
        title:
          'Horombo Hut (3720 m) – Acclimatization trek to Zebra Rocks (4020 m) [OPTIONAL EXTRA DAY]',
        Accommodation: 'Horombo Hut',
        description:
          'This is an extra day meant for acclimatization and can be spent day hiking on Mawenzi Ridge. The unique landscape offers motivating views of Kibo and Mawenzi. After spending a few moments exploring the area we head back to Horombo Hut.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 2-3 hours | Habitat: Moorland\n' +
          '\n' +
          'Mawenzi Ridge (4020 m) and back Horombo Hut (3720 m)\n' +
          'Distance: About 5 km | Hiking time: 1-2 hours | Habitat: Moorland \n',
      },
      {
        day: 5,
        title: 'Horombo Hut (3720 m) – Kibo Hut (4700 m)',
        Accommodation: 'Kibo Hut',
        description:
          'After breakfast, resume the climb, the landscape becomes rugged and rocky. Lobelias begin to appear then cross the lunar desert of the "Saddle" between Mawenzi and Kibo. Continue to Kibo hut for dinner and preparations for the summit.\n' +
          '\n' +
          'Distance: About 10 km | Hiking time: 6-8 hours | Habitat: Alpine desert \n',
      },
      {
        day: 6,
        title: 'Kibo hut (4700 m) – Uhuru Peak (5895 m) - Horombo Hut (3720 m)',
        Accommodation: 'Horombo Hut',
        description:
          'Summit Attempt!!\n' +
          "The beginning of the last ascent is made in the wee hours of the morning while the scree is still frozen. This is the most mentally and physically challenging portion of the trek. Climb the very steep part of the route to GILMANS POINT (likely to see coming over Mawenzi Peak). UHURU PEAK is reached within an hour's walk along the crater rim. (19,344 ft). Start the walk along the craters rim. (19,344 ft). Start the descent to Horombo hut for overnight.\n" +
          '\n' +
          'Distance: 6 km ascent + 16 km descent | Hiking time: 6-8 hours to Uhuru | Descend time: 4-5 hours to Horombo | Habitat: Stone scree and ice-capped summit\n',
      },
      {
        day: 7,
        title: 'Horombo Hut (3720 m) – Marangu Gate (1980 m) – Moshi/Arusha',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Marangu Gate. Here we will collect our summit certificates, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha to your hotel for dinner and overnight.\n' +
          '\n' +
          'Distance: About 20 km | Descend time: 5-7 hours | Habitat: Moorland, Montane forest',
      },
      {
        day: 8,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 3,
    title: '5 Days Kilimanjaro Trek via Umbwe Route',
    overview:
      'The Umbwe route is short, steep and direct route and its considered to be very difficult and challenging way up Mount Kilimanjaro. Due to the quick ascent, Umbwe does not provide the necessary stages for altitude acclimatization. Although the traffic on this route is very low, the chances of success are also low. The route is offered at a minimum of five days, though six days is recommended when attempting this route. The Umbwe route should only be attempted by those who are very strong hikers and are confident in their ability to acclimatize.\n',
    code: 'GT003',
    duration: '5 Days / 4 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Mount_Kilimanjaro,
    carouselImage: [Mount_Kilimanjaro, Flamingos],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha /Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi / Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title: 'Arusha /Moshi – Umbwe Gate (1800 m) – Umbwe Cave Camp (2850 m)',
        Accommodation: 'Umbwe Cave-Camp',
        description:
          'From Umbwe Gate you ascend through forestry track before it narrows and steepness to climb a ridge between Lonzo and Umbwe Rivers. This is the steepest part of the entire trek. Eventually after hours of this exhausting exercise, and again in altitude of 1050 approximately, you reach a rocky overhang. This is Umbwe Cave a popular first night Campsite with plenty of water sources available.\n' +
          '\n' +
          'The day begins with a 50 minute drive to Machame Gate where registration formalities will be completed. We then transfer through villages and coffee and banana plantations to Umbwe Gate. The trail ascends sharply on a forestry track which winds up the dense rain forest. The path narrows and steepens as we climb the ridge between two rivers surrounded by huge trees. Umbwe Camp is perched between trees and thick undergrowth.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 5-6 hours | Habitat: Montane forest\n',
      },
      {
        day: 3,
        title: 'Umbwe Cave Camp (2850 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'After leaving the forest, continue through open moorlands until reaching Barranco Camp. Barranco is generally regarded as the most scenic campsite on the Umbwe Trail as it’s surrounded by giant senecios and lobelias. As Barranco is in a valley, the sun rises later than at the other camps. Dinner and overnight at Barranco camp.\n' +
          '\n' +
          'Distance: About 6 km | Hiking time: 5-7 hours | Habitat: Montane forest, Moorland\n',
      },
      {
        day: 4,
        title: 'Barranco Camp (3950 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'We starts by descending into the start of the Great Barranco, a huge ravine. We then exit steeply, up the Great Barranco Wall, which divides us from the southeastern slopes of Kibo. It’s a climb over rock, not technical but long and tiring. Passing underneath the Heim and Kersten glaciers, we head towards the Karanga valley. From here we have a steep climb up from Karanga valley to \n' +
          '\n' +
          'walk to Barafu camp at 4640 m. The climb will take us across desolate scree slopes with no vegetation around us at all. It’s a tough steep walk made more difficult by the altitude. On arriving at camp we eat and spend the afternoon resting as we prepare for a long night and day ahead. It is important to keep hydrated and warm. We have an early dinner and then try to get some sleep as we will be getting up at between 11pm and 12pm to start the climb to the summit. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 8 km | Hiking time: 6-8 hours | Habitat: Alpine desert\n',
      },
      {
        day: 5,
        title:
          'Barafu Camp (4640 m) – Uhuru Peak (5895 m) – Mweka Camp (3100 m)',
        Accommodation: 'Mweka Camp',
        description:
          'We start off at around midnight, and walk steeply upwards to the summit glaciers. We will be climbing scree for 4 to 5 hours but gain incredible height over a short distance. The views are spectacular. We should be on the crater rim at Stella Point (5739 m) as the first rays of the sun hit us. Spectacular ice cliffs within the crater surround us and the views to jagged Mawenzi peak and beyond are breathtaking. Another hour’s walking takes us to the summit, Uhuru Peak (5895 m). We begin our descent by returning to Stella Point and then descending on scree slope and track back to Barafu Camp for breakfast, before finally heading down to Mweka Camp for a long well-earned rest. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 13.4 km | Hiking time: 8–12 hours | Habitat: Arctic, Montane forest\n',
      },
      {
        day: 6,
        title: 'Mweka Camp (3100 m) – Mweka Gate (1630 m) – Moshi /Arusha Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect or summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha for dinner and overnight.\n' +
          '\n' +
          'Distance: About 12.1 km | Hiking time: 4-5 hours | Habitat: Montane forest',
      },
      {
        day: 7,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
];
