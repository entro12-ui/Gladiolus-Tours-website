import GTDestination1 from './images/Destinations/Ngorongoro_Crater_Flamingos_10_NCA.webp';
import GTDestination2 from './images/Destinations/Kitulo_National_Park_Orchidbed.webp';
import GTDestination3 from './images/Destinations/Ngorongoro_Crater_Swamps_NCA.webp';
import GTDestination4 from './images/Destinations/Gombe_Stream_National_Park_Chimp_Laying_Around_14.webp';
import GTDestination5 from './images/Destinations/Mbudya_Island_Dar-es-Salaam_1.webp';
import GTDestination6 from './images/Destinations/Mafia_Island_Chole_Mjini.webp';
import GTDestination7 from './images/Destinations/Zanzibar_Island_Stone_Town_01.webp';
import { GtItineraryCategory } from './GtAdventures';
import { GtActivities } from './GtActivities';

export enum GtDestinationCategory {
  'All Circuits',
  'Northern Circuit',
  'Southern Circuit',
  'Eastern Circuit',
  'Western Circuit',
  'Ocean Islands',
  'Mafia Island',
  'Zanzibar Island',
}

export type FAQ = {
  question: string;
  answer: string;
};

export interface GtNationalParks {
  id: number;
  name: string;
  description: string;
  status: boolean;
  imageSrc: string;
  imageAlt: string;
  rate: number;
  faq: FAQ[];
  activities: GtActivities[];
  adventures: GtItineraryCategory[];
  category: GtDestinationCategory;
}

export interface IDestinations {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  status: boolean;
  nationalParks: GtNationalParks[];
}

export type GladiolusToursDestinations = IDestinations[];

export const GtDestinations: GladiolusToursDestinations = [
  {
    id: 1,
    name: 'Northern Circuit',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination1,
    imageAlt: 'Northern Circuit',
    status: true,
    nationalParks: [
      {
        id: 1,
        name: 'Serengeti National Park',
        description:
          'Serengeti National Park is undoubtedly the best-known wildlife sanctuary in the world, unequalled for its natural beauty and scientific value, it has the greatest concentration of plains game in Africa\n' +
          '\n' +
          'The Serengeti National Park in Tanzania was established in 1952. It is home to the greatest wildlife spectacle on earth - the great migration of wildebeest and zebra. The resident population of lion, cheetah, elephant, giraffe, and birds is also impressive. There’s a wide variety of accommodation available, from luxury lodges to mobile camps. The park covers 5,700 sq miles, (14,763 sq km), it’s larger than Connecticut, with at most a couple hundred vehicles driving around.\n' +
          '\n' +
          'The Park can be divided into 3 sections. The popular southern/central part (Seronera Valley), is what the Maasai called the “serengit”, the land of endless plains. It’s classic savannah, dotted with acacias and filled with wildlife. The western corridor is marked by the Grumeti River, and has more forests and dense bush. The north, Lobo area, meets up with Kenya’s Masai Mara Reserve, is the least visited section.\n' +
          '\n' +
          'Two World Heritage Sites and two Biosphere Reserves have been established within the 30,000 km² region. It’s unique ecosystem has inspired writers from Ernest Hemingway to Peter Mattheissen, filmakers like Hugo von Lawick and Alan Root as well as numerous photographers and scientists - many of which have put their works at our disposal to create this website.\n' +
          '\n' +
          'The Serengeti ecosystem is one of the oldest on earth. The essential features of climate, vegetation and fauna have barely changed in the past million years. Early man himself made an appearance in Olduvai Gorge about two million years ago. Some patterns of life, death, adaptation and migration are as old as the hills themselves.\n' +
          '\n' +
          'It is the migration for which Serengeti is perhaps most famous. Over a million wildebeest and about 200,000 zebras flow south from the northern hills to the southern plains for the short rains every October and November, and then swirl west and north after the long rains in April, May and June. So strong is the ancient instinct to move that no drought, gorge or crocodile infested river can hold them back.\n' +
          '\n' +
          'The Wildebeest travel through a variety of parks, reserves and protected areas and through a variety of habitat. Join us to explore the different forms of vegetation and landscapes of the Serengeti ecosystem and meet some of their most fascinating inhabitants.\n',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'When is the best time of year to visit the Serengeti?',
            answer:
              'The climate of the Serengeti National Park is subtropical, with rain season from November to April and dry season from May to October.\n' +
              'The park is located at an altitude between 1,100 and 2,000 meters with annual average rainfall ranging from 900 to 1,000 mm.\n' +
              'The Serengeti is a year-round safari destination. However, the peak, wet season runs from March to April.\n' +
              'June to October: June and July are the best months to see the wildebeest in the western corridor, and August to September in the northern parts of the Serengeti. During this time, the weather is generally sunny with not much rain. Please note that this is also one of the busier times to visit, so there will be more safari vehicles on the road, accommodation is limited, and prices can be a bit higher.\n' +
              "November to May: January to February is the best time to see newborns. This, in turn, lures the predators. It's very green during this time, with incredible bird watching opportunities. April to May is the low season, so there will be fewer crowds, and – bonus – prices might be lower.\n",
          },
          {
            question: 'How much does a safari in the Serengeti cost?',
            answer:
              "A Serengeti safari will depend on various factors, including but not limited to where you stay, when you're visiting, and what activities you wish to partake in. However, the price per person per day is usually around $500-$2,500. ",
          },
          {
            question: 'How to get to the Serengeti National Park?',
            answer:
              'Distance: Arusha - Serengeti Park gate: 142 km | 4-4.5 hours\n' +
              'Road. Accessed from all towns and cities to the present entry or exit points/gates namely Naabi Hill, Seronera, Ndutu, Kusini, Kirawira, Handajega, Ikoma, Tabora ‘B’, Lamai, Lobo, Ndabaka, Machochwe and Kleins.\n' +
              'Air. There are all weather airstrips in the center of the park (Seronera), in the South (Kusini), in the East (Lobo), in the West (Kirawira) and in the North (Kogatende & Lamai). There are scheduled and private charters from Arusha, Mwanza, Kilimanjaro, Musoma, Dar es salaam and Zanzibar.\n',
          },
          {
            question: 'What makes a Serengeti National Park safari so special?',
            answer:
              'Serengeti National Park, a world-renown, World Biosphere Reserve and World Heritage Site that has many attractions than any other national park in Africa. The Great Migration, The Big Five, Unique Bird Collections, Endangered Species, Highest concentration of Carnivores and Herbivores, Scenic and Spectacular Landscapes are some of the attractions one will encounter!\n' +
              "The Serengeti is best known for being host to part of the Great Migration. Every year, millions of wildebeest traverse the plains, with zebra, gazelle and others following them on their journey. Predators take advantage of this spectacular gathering to plan attacks, from lions stalking them to crocodiles attacking during their river crossings. This means that there's much drama during this time! \n",
          },
          {
            question: 'Where to visit the Great Serengeti Migration',
            answer:
              "The great wildebeest migration of over 1.3 million accompanied by large numbers of zebra, and smaller numbers of Grant's & Thomson's gazelle, eland and impala with an annual pattern seeking fresh grazing and water. Having a chance of encountering this phenomena has being  described as one of the natural wonders and gives you a life time experience from nature.\n" +
              'The famous Great Migration moves in a clockwise direction from the north via the central part, to the west, and then back to the Maasai Mara in Kenya. Therefore, the time of your trip will greatly depend on where you should go for your Great Migration safari. \n' +
              "While the wildebeests are in the south, it's calving season, and many newborn animals are around. Those make easy prey, so predators are on the prowl! When they move through central Serengeti, the big cat sightings are incredible! \n" +
              'As the animals move through the west, they cross the Grumeti River, trying to escape crocodile jaws. Have your camera ready for exciting Great Migration safari sightings! And then, in the north, they have to tackle another obstacle, the Mara River, where more hungry crocodiles and hippos await. \n',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 2,
        name: 'Mount Kilimanjaro National Park',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 3,
        name: 'Arusha National Park',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 4,
        name: 'Lake Manyara National Park',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 5,
        name: 'Ngorongoro Conservation Area',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 6,
        name: 'Tarangire National Park',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 7,
        name: 'Mkomazi National Park',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 8,
        name: "Mount Ol'doinyo Lengai",
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 9,
        name: 'Lake Natron',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 10,
        name: 'Lake Natron',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 11,
        name: 'Kondoa Rock Art Sites',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 12,
        name: 'Lake Chala',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 13,
        name: 'Lake Jipe',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 14,
        name: 'Lake Eyasi',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 15,
        name: 'Pare Mountains',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 16,
        name: 'Mount Meru',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        id: 17,
        name: 'Materuni Waterfalls',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Northern Circuit'],
      },
    ],
  },
  {
    id: 2,
    name: 'Southern Circuit',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination2,
    imageAlt: 'Southern Circuit',
    status: true,
    nationalParks: [
      {
        id: 1,
        name: 'Ruaha National Park',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 2,
        name: 'Nyerere National Park',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 3,
        name: 'Kitulo National Park',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 4,
        name: 'Katavi National Park',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 5,
        name: 'Kalambo Falls',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 6,
        name: 'Mbozi Mateorite',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 7,
        name: 'Lake Ngozi',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 8,
        name: 'Kaporongwe Falls',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 9,
        name: 'Matema Beach',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 10,
        name: 'Lake Nyasa',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 11,
        name: 'Mnazi Bay - Ruvuma Estuary Marine Park',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 12,
        name: 'Igeleke Rock Art Site',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        id: 13,
        name: 'Isimila Stone Age Site',
        description: '',
        status: true,
        imageSrc: GTDestination2,
        imageAlt: 'Southern Circuit',

        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Southern Circuit'],
      },
    ],
  },
  {
    id: 3,
    name: 'Eastern Circuit',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination3,
    imageAlt: 'Eastern Circuit',
    status: true,
    nationalParks: [
      {
        id: 1,
        name: 'Nyerere National Park',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 2,
        name: 'Udzungwa National Park',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 3,
        name: 'Saadani National Park',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 4,
        name: 'Mikumi National Park',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 5,
        name: 'Usambara Mountains',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 6,
        name: 'Amani Nature Forest Reserves',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 7,
        name: 'Amboni Caves',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 8,
        name: 'Uluguru Mountains',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 9,
        name: 'Pugu Hill Nature Reserve',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 10,
        name: 'Mnazi Bay - Ruvuma Estuary Marine Park',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 11,
        name: 'Kilwa',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 12,
        name: 'Kilwa Kisiwani',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 13,
        name: 'Songo Mnara',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 14,
        name: 'Kilwa Kivinje',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 15,
        name: 'Pangani',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        id: 16,
        name: 'Bagamoyo',
        description: '',
        status: true,
        imageSrc: GTDestination3,
        imageAlt: 'Eastern Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Eastern Circuit'],
      },
    ],
  },
  {
    id: 4,
    name: 'Western Circuit',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination4,
    imageAlt: 'Western Circuit',
    status: true,
    nationalParks: [
      {
        id: 1,
        name: 'Gombe Stream National Park',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 2,
        name: 'Mahale Mountains National Park',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 3,
        name: 'Saanane Island National Park',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 4,
        name: 'Rubondo Island National Park',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 5,
        name: 'Ukerewe Island',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 6,
        name: 'Burigi-Chato National Park',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 7,
        name: 'Ibanda-Kyerwa National Park',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 8,
        name: 'Lake Tanganyika',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        id: 9,
        name: 'Lake Victoria',
        description: '',
        status: true,
        imageSrc: GTDestination4,
        imageAlt: 'Western Circuit',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Western Circuit'],
      },
    ],
  },
  {
    id: 5,
    name: 'Ocean Islands',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination5,
    imageAlt: 'Ocean Islands',
    status: true,
    nationalParks: [
      {
        id: 1,
        name: 'Mbudya Island Marine Reserve',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        id: 2,
        name: 'Bongoyo Island Marine Reserve',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        id: 3,
        name: 'Pangavini Island Marine Reserve',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        id: 4,
        name: 'Fungu Yasin Sand Bar',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        id: 5,
        name: 'Sinda Island Marine Reserve',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        id: 6,
        name: 'Tanga Marine Park & Reserve',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        id: 7,
        name: 'Chumbe Island Marine Sanctuary',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        id: 8,
        name: 'Mnemba Island Conservation Area',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Ocean Islands'],
      },
    ],
  },
  {
    id: 6,
    name: 'Mafia Island',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination6,
    imageAlt: 'Mafia Island',
    status: true,
    nationalParks: [
      {
        id: 1,
        name: 'Whale Sharks Snorkeling',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Mafia Island',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [GtActivities['Fishing / Sport Fishing']],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Mafia Island'],
      },
    ],
  },
  {
    id: 7,
    name: 'Deep Sea Fishing in Zanzibar',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination7,
    imageAlt: 'Zanzibar Island',
    status: true,
    nationalParks: [
      {
        id: 8,
        name: 'Mnemba Island Conservation Area',
        description: '',
        status: true,
        imageSrc: GTDestination5,
        imageAlt: 'Ocean Islands',
        rate: 5,
        faq: [
          {
            question: 'What is the best time to visit Serengeti?',
            answer: 'Answer to the question',
          },
          {
            question: 'Are there accommodation options in Serengeti?',
            answer: 'Answer to the question',
          },
        ],
        activities: [
          GtActivities['Balloon Safari'],
          GtActivities['Game Drives'],
          GtActivities['Bird Watching'],
          GtActivities['Wedding / Honeymoon'],
          GtActivities['Great Migration'],
        ],
        adventures: [GtItineraryCategory['Adventure Safaris']],
        category: GtDestinationCategory['Zanzibar Island'],
      },
    ],
  },
];
