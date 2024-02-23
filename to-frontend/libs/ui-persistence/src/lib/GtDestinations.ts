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

type FAQ = {
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
}

export interface IDestinations {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  status: boolean;
  nationalParks: GtNationalParks[];
  category: GtDestinationCategory;
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
    category: GtDestinationCategory['Northern Circuit'],
    nationalParks: [
      {
        id: 1,
        name: 'Serengeti National Park',
        description: '',
        status: true,
        imageSrc: GTDestination1,
        imageAlt: 'Northern Circuit',
        rate: 4.5,
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
    category: GtDestinationCategory['Southern Circuit'],
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
    category: GtDestinationCategory['Eastern Circuit'],
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
    category: GtDestinationCategory['Western Circuit'],
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
    category: GtDestinationCategory['Ocean Islands'],
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
    category: GtDestinationCategory['Mafia Island'],
    nationalParks: [],
  },
  {
    id: 7,
    name: 'Zanzibar Island',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination7,
    imageAlt: 'Zanzibar Island',
    status: true,
    category: GtDestinationCategory['Zanzibar Island'],
    nationalParks: [],
  },
];
