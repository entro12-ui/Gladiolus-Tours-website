import GTDestination1 from './images/Destinations/Ngorongoro_Crater_Flamingos_10_NCA.webp';
import GTDestination2 from './images/Destinations/Kitulo_National_Park_Orchidbed.webp';
import GTDestination3 from './images/Destinations/Ngorongoro_Crater_Swamps_NCA.webp';
import GTDestination4 from './images/Destinations/Gombe_Stream_National_Park_Chimp_Laying_Around_14.webp';
import GTDestination5 from './images/Destinations/Mbudya_Island_Dar-es-Salaam_1.webp';
import GTDestination6 from './images/Destinations/Mafia_Island_Chole_Mjini.webp';
import GTDestination7 from './images/Destinations/Zanzibar_Island_Stone_Town_01.webp';

interface NationalParks {
  name: string;
  description: string;
  status: boolean;
}

interface IDestinations {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  status: boolean;
  nationalParks: NationalParks[];
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
        name: 'Arusha National Park',
        description: '',
        status: true,
      },
      {
        name: 'Tarangire National Park',
        description: '',
        status: true,
      },
      {
        name: 'Lake Manyara National Park',
        description: '',
        status: true,
      },
      {
        name: 'Ngorongoro Conservation Area',
        description: '',
        status: true,
      },
      {
        name: 'Serengeti National Park',
        description: '',
        status: true,
      },
      {
        name: 'Mkomazi National Park',
        description: '',
        status: true,
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
        name: 'Mikumi National Park',
        description: '',
        status: true,
      },
      {
        name: 'Ruaha National Park',
        description: '',
        status: true,
      },
      {
        name: 'Nyerere National Park',
        description: '',
        status: true,
      },
      {
        name: 'Udzunguwa National Park',
        description: '',
        status: true,
      },
      {
        name: 'Kitulo National Park',
        description: '',
        status: true,
      },
      {
        name: 'Katavi National Park',
        description: '',
        status: true,
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
    nationalParks: [
      {
        name: 'Kigoma Town',
        description: '',
        status: true,
      },
      {
        name: 'Gombe Stream National Park',
        description: '',
        status: true,
      },
      {
        name: 'Mahale Mountains National Park',
        description: '',
        status: true,
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
        name: 'Kigoma Town',
        description: '',
        status: true,
      },
      {
        name: 'Gombe Stream National Park',
        description: '',
        status: true,
      },
      {
        name: 'Mahale Mountains National Park',
        description: '',
        status: true,
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
        name: 'Dar Es Salaam City',
        description: '',
        status: true,
      },
      {
        name: 'Bagamoyo',
        description: '',
        status: true,
      },
      {
        name: 'Saadani National Park',
        description: '',
        status: true,
      },
      {
        name: 'Pangani National Park',
        description: '',
        status: true,
      },
      {
        name: 'Mafia Island',
        description: '',
        status: true,
      },
      {
        name: 'Zanzibar Islands (Unguja & Pemba)',
        description: '',
        status: true,
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
    nationalParks: [],
  },
  {
    id: 7,
    name: 'Zanzibar Island',
    description: 'Welcome to Gladiolus Tours',
    imageSrc: GTDestination7,
    imageAlt: 'Zanzibar Island',
    status: true,
    nationalParks: [],
  },
];
