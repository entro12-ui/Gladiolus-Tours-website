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
    title: '4 Days Kilimanjaro Trek via Machame Route',
    overview: 'Welcome to Gladiolus Tours',
    code: 'GT002',
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
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha/Moshi Town – Machame Gate (1800 m) – Machame Camp (3010 m)',
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
          '    Nairobi via border town Namanga',
      },
    ],
  },
];
