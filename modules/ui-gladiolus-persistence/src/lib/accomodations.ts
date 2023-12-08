interface Hotels {
  name: '';
  description: '';
}
interface Lodges {
  name: '';
  description: '';
}
interface Camps {
  name: '';
  description: '';
}
interface IAccommodations {
  id: number;
  name: string;
  href: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  status: boolean;
  hotels: Hotels[];
  lodges: Lodges[];
  camps: Camps[];
}
export const Accommodations: IAccommodations[] = [
  {
    id: 1,
    name: '',
    href: '',
    price: '',
    imageSrc: '',
    imageAlt: '',
    description: '',
    status: true,
    hotels: [
      {
        name: '',
        description: '',
      },
    ],
    lodges: [
      {
        name: '',
        description: '',
      },
    ],
    camps: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 2,
    name: 'Southern Circuit',
    href: '',
    price: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
    status: true,
    hotels: [
      {
        name: '',
        description: '',
      },
    ],
    lodges: [
      {
        name: '',
        description: '',
      },
    ],
    camps: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Western Circuit',
    href: '',
    price: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
    status: true,
    hotels: [
      {
        name: '',
        description: '',
      },
    ],
    lodges: [
      {
        name: '',
        description: '',
      },
    ],
    camps: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 4,
    name: 'The Coastal',
    href: '',
    price: '',
    description: '',
    imageSrc: '',
    imageAlt: '',
    status: true,
    hotels: [
      {
        name: '',
        description: '',
      },
    ],
    lodges: [
      {
        name: '',
        description: '',
      },
    ],
    camps: [
      {
        name: '',
        description: '',
      },
    ],
  },
];
