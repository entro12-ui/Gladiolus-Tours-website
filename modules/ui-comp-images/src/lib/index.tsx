import Image0 from './images/buffalo.webp';
import Image1 from './images/cave_lion.webp';
import Image2 from './images/buffalo_grass.webp';
import Image3 from './images/cheetah.webp';
import Image4 from './images/elephant.webp';
import Image5 from './images/zebras.webp';
import Image6 from './images/ngorongoro_zebra.webp';
import Image7 from './images/lion.webp';
import Image8 from './images/lioness.webp';
import Image9 from './images/elephant_family.webp';
import { getRandomIntExclusiveUpperBound } from '@gladiolus/ui-utils';

const images = [
  Image0,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

interface Props {
  className?: string;
}
export const GladiolusToursImage = ({ className }: Props) => {
  const choice = getRandomIntExclusiveUpperBound(0, images.length);
  return (
    <img src={images[choice]} className={className} alt={'Gladiolus Tours'} />
  );
};

export const GladiolusToursLogo = () => {
  return null;
};
