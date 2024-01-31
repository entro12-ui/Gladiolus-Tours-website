import Mount_Kilimanjaro from './images/Itinerary/Mount_Kilimanjaro.webp';
import Hippo from './images/Itinerary/Hippo.webp';
import Flamingos from './images/Itinerary/Lesser_Flamingos_Lake_Natron_01.webp';

interface IItinerary {
  day: number;
  title: string;
  description: string;
  Accommodation: string;
}

export enum GtItineraryCategory {
  Mount,
  Safari,
}

export interface IGtAdventures {
  id: number;
  title: string;
  overview: string;
  category: GtItineraryCategory;
  code: string;
  image: string;
  carouselImage: string[];
  status: boolean;
  itinerary: IItinerary[];
}

export type GladiolusToursItinerary = IGtAdventures[];

export const GtAdventures: GladiolusToursItinerary = [
  {
    id: 1,
    title: '8 Days | Take a walk on the wild side in Kenya and Tanzania',
    overview: 'Welcome to Gladiolus Tours',
    code: 'GT001',
    category: GtItineraryCategory.Safari,
    image: Hippo,
    carouselImage: [Flamingos, Mount_Kilimanjaro],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'DAY 1: ARUSHA – NGORONGORO',
        Accommodation: '',
        description:
          'Meet in Arusha. After lunch, drive through the Ngorongoro Highlands to your lodge situated on the rim of the crater. The crater covers over 300 square kilometers of land and is the home of the rare black rhino, prides of lion, elephant, cheetah and great herds of buffalo, antelope and wildebeest. Dinner and overnight at a lodge in Ngorongoro.',
      },
      {
        day: 2,
        title: 'DAY 2: NGORONGORO',
        Accommodation: '',
        description:
          'Today you will descend over 600 meters to the floor of the crater for a day crater tour. Explore the forest areas that are inhabited by monkey and elephant, the lake area, where you may see the flamingos and the open savannah where the lions hunt for food. Picnic lunches will be served in the crater. Dinner and overnight at a lodge in Ngorongoro.',
      },
      {
        day: 3,
        title: 'DAY 3: NGORONGORO – SERENGETI',
        Accommodation: '',
        description:
          'After breakfast drive to Oldupai Gorge, site of Louis and Mary Leakey’s renowned archaeological discoveries. Their findings include some of the man’s earliest known ancestral remains. Optional: Maasai Village Visit\n' +
          '\n' +
          'Continue to Serengeti National Park in time for lunch. This enormous park supports every variety of animal imaginable – from large predators such as lion, leopard and cheetah to the smaller herbivores they prey on. Afternoon game drive. Dinner and overnight at a lodge in Serengeti.',
      },
      {
        day: 4,
        title: 'DAY 4: SERENGETI',
        Accommodation: '',
        description:
          'Today you spend the whole day on game drive in this National Park, which is rich with all different species of animals. To maximize game viewing you will carry a picnic lunch with you and spend full day in the Serengeti National Park.\n' +
          '\n' +
          'Dinner and overnight at a lodge in Serengeti.',
      },
      {
        day: 5,
        title: 'DAY 5: SERENGETI – MANYARA',
        Accommodation: '',
        description:
          'Breakfast at your lodge. Drive to Lake Manyara, a soda lake lying in the Great Rift Valley. Lunch at Lake Manyara. In the afternoon game drive in Lake Manyara National Park, home of the tree-climbing lions. Apart from the varied types of landscape including jungle, swamp and savanna, there are also a large variety of animals including Giraffe, Zebra, Elephant, Gazelle, hippos, monkeys and about 400 different species of birds. Dinner and overnight in a lodge around Lake Manyara.',
      },
      {
        day: 6,
        title: 'DAY 6: MANYARA – ARUSHA',
        Accommodation: '',
        description:
          'After breakfast drive to Arusha\n' + '\n' + 'Lunch in a restaurant.',
      },
    ],
  },

  {
    id: 2,
    title: '4 Days Kilimanjaro Trek via Machame Route',
    overview: 'Welcome to Gladiolus Tours',
    code: 'GT002',
    category: GtItineraryCategory.Mount,
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
