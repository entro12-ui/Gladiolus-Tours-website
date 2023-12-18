import Box from './images/Box.webp';
import Customer_Loyalty from './images/Customer-Loyalty.webp';
import Destination from './images/Destination.webp';
import GtLogo from './images/GtLogo/192 X 192.webp';
interface IIncentives {
  name: string;
  imageSrc: string;
  description: string;
}

const incentives: IIncentives[] = [
  {
    name: 'Exclusive Tour Packages',
    imageSrc: `${Box}`,
    description:
      'Unlock unique travel experiences with our exclusive tour packages, curated just for you. Discover hidden gems and create unforgettable memories.',
  },
  {
    name: 'Personalized Itineraries',
    imageSrc: `${Destination}`,
    description:
      'Tailor your journey to perfection. Our experts craft personalized itineraries, ensuring every moment aligns with your preferences and travel aspirations.',
  },
  {
    name: 'Loyalty Rewards Program',
    imageSrc: `${Customer_Loyalty}`,
    description:
      'Join our Loyalty Rewards Program and earn exclusive perks, discounts, and special access with every booking. Your journey with us is truly rewarding.',
  },
];

export const GladiolusToursIncentives = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Elevate Your Journey with Gladiolus Tours
              </h2>
              <p className="mt-4 text-gray-500">
                Immerse yourself in unparalleled travel experiences. From
                exclusive tour packages to personalized itineraries, we redefine
                the art of exploration.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={GtLogo}
                alt="Gladiolus Tours"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
