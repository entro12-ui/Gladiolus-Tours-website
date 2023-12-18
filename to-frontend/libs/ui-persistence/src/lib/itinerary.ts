import { ReactNode } from 'react';

interface IDescription {
  title: string;
  description: string;
}

enum Category {
  Mount,
  Safari,
}

export interface IItinerary {
  id: number;
  title: string;
  brief: string;
  category: Category;
  code: string;
  image: ReactNode;
  status: boolean;
  description: IDescription[];
}

export type GladiolusToursItinerary = IItinerary[];

export const GtItinerary: GladiolusToursItinerary = [
  {
    id: 1,
    title: 'Tanzania Family Safari',
    brief: '8 Days | Take a walk on the wild side in Kenya and Tanzania',
    code: 'GT001',
    category: Category.Safari,
    image: false,
    status: true,
    description: [
      {
        title: 'DAY 1: ARUSHA – NGORONGORO',
        description:
          'Meet in Arusha. After lunch, drive through the Ngorongoro Highlands to your lodge situated on the rim of the crater. The crater covers over 300 square kilometers of land and is the home of the rare black rhino, prides of lion, elephant, cheetah and great herds of buffalo, antelope and wildebeest. Dinner and overnight at a lodge in Ngorongoro.',
      },
      {
        title: 'DAY 2: NGORONGORO',
        description:
          'Today you will descend over 600 meters to the floor of the crater for a day crater tour. Explore the forest areas that are inhabited by monkey and elephant, the lake area, where you may see the flamingos and the open savannah where the lions hunt for food. Picnic lunches will be served in the crater. Dinner and overnight at a lodge in Ngorongoro.',
      },
      {
        title: 'DAY 3: NGORONGORO – SERENGETI',
        description:
          'After breakfast drive to Oldupai Gorge, site of Louis and Mary Leakey’s renowned archaeological discoveries. Their findings include some of the man’s earliest known ancestral remains. Optional: Maasai Village Visit\n' +
          '\n' +
          'Continue to Serengeti National Park in time for lunch. This enormous park supports every variety of animal imaginable – from large predators such as lion, leopard and cheetah to the smaller herbivores they prey on. Afternoon game drive. Dinner and overnight at a lodge in Serengeti.',
      },
      {
        title: 'DAY 4: SERENGETI',
        description:
          'Today you spend the whole day on game drive in this National Park, which is rich with all different species of animals. To maximize game viewing you will carry a picnic lunch with you and spend full day in the Serengeti National Park.\n' +
          '\n' +
          'Dinner and overnight at a lodge in Serengeti.',
      },
      {
        title: 'DAY 5: SERENGETI – MANYARA',
        description:
          'Breakfast at your lodge. Drive to Lake Manyara, a soda lake lying in the Great Rift Valley. Lunch at Lake Manyara. In the afternoon game drive in Lake Manyara National Park, home of the tree-climbing lions. Apart from the varied types of landscape including jungle, swamp and savanna, there are also a large variety of animals including Giraffe, Zebra, Elephant, Gazelle, hippos, monkeys and about 400 different species of birds. Dinner and overnight in a lodge around Lake Manyara.',
      },
      {
        title: 'DAY 6: MANYARA – ARUSHA',
        description:
          'After breakfast drive to Arusha\n' + '\n' + 'Lunch in a restaurant.',
      },
    ],
  },
];
