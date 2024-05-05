import { StarIcon } from '@heroicons/react/20/solid';

const TOTAL_STARS = 5;

interface IRate {
  rate: number;
}

export const RateStars = (rate: IRate) => {
  const stars = [];
  for (let i = 0; i < TOTAL_STARS; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={`h-5 w-5 flex-shrink-0 ${
          i < rate.rate ? 'text-yellow-400' : 'text-gray-300'
        }`}
        aria-hidden="true"
      />
    );
  }
  return <div className="flex">{stars}</div>;
};
