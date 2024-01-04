interface NationalParks {
  name: string;
  description: string;
  status: boolean;
}

interface IDestinations {
  id: number;
  name: string;
  href: string;
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
    href: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
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
    href: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
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
    href: '',
    description: '',
    imageSrc: '',
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
    href: '',
    description: '',
    imageSrc: '',
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
    id: 5,
    name: 'Ocean Islands',
    href: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
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
    href: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
    status: true,
    nationalParks: [],
  },
  {
    id: 7,
    name: 'Zanzibar Island',
    href: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
    status: true,
    nationalParks: [],
  },
];
