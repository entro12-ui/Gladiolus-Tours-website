import Img0 from './images/Safaris/Ngorongoro_Crater_Elephants_NCA.webp';

interface SafariTypes {
  name: string;
  description: string;
}

export interface ISafari {
  id: number;
  name: string;
  type: string;
  href: string;
  price: string;
  description: string;
  status: boolean;
  imageSrc: string;
  imageAlt: string;
  safariTypes: SafariTypes[];
}

export type GladiolusToursSafari = ISafari[];

export const GtSafaris: GladiolusToursSafari = [
  {
    id: 1,
    name: 'Wildlife Safaris',
    type: 'Wildlife Safaris',
    href: '',
    price: '',
    description:
      'We believe in value for money. Every guest would like to have the most reliable and comfortable vehicles on safari. In response to the clients’ needs, we have a very strict vehicle replacement policy that ensures a young fleet at all times. We have a total fleet of 225 well-maintained motor vehicles, predominantly 4-wheel drives. This does away with the problem of sub-contracting vehicles and driver-guides, which may compromise the quality of services. Our safari vehicles are specifically converted for maximum space and comfort. All of them have hatched roof and sliding windows to facilitate good viewing and convenient photography during game drives and sight seeing, fridge and sockets for charging electronic devices.',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Wildlife Safaris',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },

  {
    id: 2,
    name: 'Adventure Safaris',
    type: 'Adventure Safaris',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: '',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Group and Incentive Travel',
    type: 'Group and Incentive Travel',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Group and Incentive Travel',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 4,
    name: 'Camping Safaris',
    type: 'Camping Safaris',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Camping Safaris',
    safariTypes: [
      {
        name: 'Standard Camping Safaris',
        description:
          '\n\nStandard Camping, our flagship camping product, is a very popular product in the northern Tanzania game parks. One of the most important features of this product is staying in a private and exclusive campsite, off the beaten track wilderness. The camping crew, together with equipment and provisions, travels separately in a support vehicle ahead of the guests, so that when you arrive at the campsite everything is prepared and waiting – tents up, meals cooking, and hot water ready for a shower.\n\nAccommodation is provided in spacious walk-in tents with twin beds made of fine tropical wood, mattresses, blankets, bed sheets & pillows, and two folding bedside tables. Wash room facilities are set on the far end, inside the guest tent, and include a hot water bucket-shower and a chemical toilet. Each accommodation tent has a hand washbasin, and a verandah with two safari chairs and a safari table allowing you to relax with a book, or just enjoy the different smells, sights and sounds around you.\n\nThe mess tent is spacious and well ventilated, with dining tables and chairs, cutlery, crockery, table cloth and other amenities offered in a standard restaurant. The camp serves three freshly cooked meals a day – breakfast, and 3-course lunch and dinner. Evenings at the campsite are invariably one of the highlights of a game park program, with a crackling campfire in a serene and quiet surrounding interrupted by occasional distant calls of wildlife. The experience of camping in an African bush, as pure as the Serengeti for example, is so special and fulfilling.\n',
      },
      {
        name: 'Budget Camping Safaris',
        description:
          '\n\nBudget camping is the ideal way for those who like to “rough it”. Accommodation is provided in a public campsite in a two-man tent with folding safari beds, mattresses, pillows blankets and bed sheets. The tents are spacious enough for two people and have a mesh on each window to keep off insects.\n\nThe guests’ safari vehicle, invariably a 4-wheel drive (4×4), manned by a driver-guide experienced in camping and accompanied by your cook, tows a custom-built trailer carrying camping equipment and provisions. All preparations for setting up the camp are made on arrival at the campsite. The driver-guide and cook will pitch tents, cook and do cleaning. The cook prepares three meals a day – breakfast, lunch, and dinner (3-course) served on a dining table with chairs. The public campsites provide basic washroom facilities including shared toilets and shower of reasonable hygienic standard for the guests.\n',
      },
    ],
  },
  {
    id: 5,
    name: 'Beach Holiday',
    type: 'Beach Holiday',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Beach Holiday',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 6,
    name: 'Mountain Climbing & Trekking',
    type: 'Mountain Climbing & Trekking',
    href: '',
    price: '',
    description:
      'Tanzania is home to the highest mountain in Africa – Mount Kilimanjaro (5895 metres), which is also the highest free-standing mountain in the world. Despite its height Kilimanjaro is one of the world’s most accessible high summits, with most climbers reaching the peak (Uhuru Peak) with little more than a walking stick, proper clothing and determination',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Mountain Climbing & Trekking',
    safariTypes: [
      {
        name: 'Mount Kilimanjaro',
        description: '',
      },
      {
        name: 'Mount Meru',
        description: '',
      },
      {
        name: 'Ol Donyo Lengai',
        description: '',
      },
      {
        name: 'Usambara Mountains',
        description: '',
      },
      {
        name: 'Udzungwa Mountains',
        description: '',
      },
    ],
  },
  {
    id: 7,
    name: 'Cultural & Historical Tours',
    type: 'Cultural & Historical Tours',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Cultural & Historical Tours',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 8,
    name: 'Zanzibar & Beach Holidays',
    type: 'Zanzibar & Beach Holidays',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Zanzibar & Beach Holidays',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 9,
    name: 'Walking Safari',
    type: 'Walking Safari',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Walking Safari',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 10,
    name: 'Walking Safaris',
    type: 'Walking Safaris',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Walking Safaris',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
  {
    id: 11,
    name: 'Balloon Safaris in Serengeti and Tarangire',
    type: 'Balloon Safaris in Serengeti and Tarangire',
    href: '',
    price: '',
    description: '',
    status: true,
    imageSrc: `${Img0}`,
    imageAlt: 'Balloon Safaris in Serengeti and Tarangire',
    safariTypes: [
      {
        name: '',
        description: '',
      },
    ],
  },
];
