import GTDestination1 from './images/Destinations/Ngorongoro_Crater_Flamingos_10_NCA.webp';
import GTDestination2 from './images/Destinations/Kitulo_National_Park_Orchidbed.webp';
import GTDestination3 from './images/Destinations/Ngorongoro_Crater_Swamps_NCA.webp';
import GTDestination4 from './images/Destinations/Gombe_Stream_National_Park_Chimp_Laying_Around_14.webp';
import GTDestination5 from './images/Destinations/Mbudya_Island_Dar-es-Salaam_1.webp';
import GTDestination6 from './images/Destinations/Mafia_Island_Chole_Mjini.webp';
import GTDestination7 from './images/Destinations/Zanzibar_Island_Stone_Town_01.webp';

export enum GtDestinationCategory {
  'Northern Circuit',
  'Southern Circuit',
  'Eastern Circuit',
  'Western Circuit',
  'Ocean Islands',
  'Mafia Island',
  'Zanzibar Island',
}

export interface GtNationalParks {
  name: string;
  description: string;
  status: boolean;
  category: GtDestinationCategory;
}

interface IDestinations {
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
        name: 'Serengeti National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Mount Kilimanjaro National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Arusha National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Lake Manyara National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Ngorongoro Conservation Area',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Tarangire National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Mkomazi National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: "Mount Ol'doinyo Lengai",
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Lake Natron',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Lake Natron',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Kondoa Rock Art Sites',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Lake Chala',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Lake Jipe',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Lake Eyasi',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Pare Mountains',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Mount Meru',
        description: '',
        status: true,
        category: GtDestinationCategory['Northern Circuit'],
      },
      {
        name: 'Materuni Waterfalls',
        description: '',
        status: true,
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
    category: GtDestinationCategory['Southern Circuit'],
    nationalParks: [
      {
        name: 'Ruaha National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Nyerere National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Kitulo National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Katavi National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Kalambo Falls',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Mbozi Mateorite',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Lake Ngozi',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Kaporongwe Falls',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Matema Beach',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Lake Nyasa',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Mnazi Bay - Ruvuma Estuary Marine Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Igeleke Rock Art Site',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
      {
        name: 'Isimila Stone Age Site',
        description: '',
        status: true,
        category: GtDestinationCategory['Southern Circuit'],
      },
    ],
  },
  {
    id: 3,
    name: 'Eastern Circuit',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination3,
    imageAlt: '',
    status: true,
    category: GtDestinationCategory['Eastern Circuit'],
    nationalParks: [
      {
        name: 'Nyerere National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Udzungwa National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Saadani National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Mikumi National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Usambara Mountains',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Amani Nature Forest Reserves',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Amboni Caves',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Uluguru Mountains',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Pugu Hill Nature Reserve',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Mnazi Bay - Ruvuma Estuary Marine Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Kilwa',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Kilwa Kisiwani',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Songo Mnara',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Kilwa Kivinje',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Pangani',
        description: '',
        status: true,
        category: GtDestinationCategory['Eastern Circuit'],
      },
      {
        name: 'Bagamoyo',
        description: '',
        status: true,
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
    category: GtDestinationCategory['Western Circuit'],
    nationalParks: [
      {
        name: 'Gombe Stream National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Mahale Mountains National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Saanane Island National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Rubondo Island National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Ukerewe Island',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Burigi-Chato National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Ibanda-Kyerwa National Park',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Lake Tanganyika',
        description: '',
        status: true,
        category: GtDestinationCategory['Western Circuit'],
      },
      {
        name: 'Lake Victoria',
        description: '',
        status: true,
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
    category: GtDestinationCategory['Ocean Islands'],
    nationalParks: [
      {
        name: 'Mbudya Island Marine Reserve',
        description: '',
        status: true,
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        name: 'Bongoyo Island Marine Reserve',
        description: '',
        status: true,
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        name: 'Pangavini Island Marine Reserve',
        description: '',
        status: true,
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        name: 'Fungu Yasin Sand Bar',
        description: '',
        status: true,
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        name: 'Sinda Island Marine Reserve',
        description: '',
        status: true,
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        name: 'Tanga Marine Park & Reserve',
        description: '',
        status: true,
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        name: 'Chumbe Island Marine Sanctuary',
        description: '',
        status: true,
        category: GtDestinationCategory['Ocean Islands'],
      },
      {
        name: 'Mnemba Island Conservation Area',
        description: '',
        status: true,
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
