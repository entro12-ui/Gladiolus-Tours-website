import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

interface RateDisplayProps {
  rate: number;
}

export const RateDisplay = ({ rate }: RateDisplayProps) => {
  const solidStarsCount: number = Math.floor(rate); // Number of solid stars
  const hasHalfStar: boolean = rate % 1 !== 0; // Check if there's a half star

  // Generate solid stars
  const solidStars: JSX.Element[] = Array.from(
    { length: solidStarsCount },
    (_, index) => (
      <FontAwesomeIcon
        icon={solidStar as IconDefinition}
        key={index}
        className="text-yellow-500"
      />
    )
  );

  // Generate half star if applicable
  const halfStar: JSX.Element | null = hasHalfStar ? (
    <FontAwesomeIcon
      icon={solidStar as IconDefinition}
      className="text-yellow-500"
    />
  ) : null;

  // Total stars to display (solid + half)
  const totalStars: number = solidStarsCount + (hasHalfStar ? 1 : 0);

  // Generate regular stars for remaining slots
  const regularStars: JSX.Element[] = Array.from(
    { length: 5 - totalStars },
    (_, index) => (
      <FontAwesomeIcon
        icon={solidStar as IconDefinition}
        key={index}
        className="text-gray-300"
      />
    )
  );

  return (
    <div className="flex items-center">
      {solidStars}
      {halfStar}
      {regularStars}
    </div>
  );
};

export default RateDisplay;
