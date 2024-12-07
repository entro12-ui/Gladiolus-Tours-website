import Visitor from './images/Visitors_And_Giraffes.webp';
import Zanzibar from './images/Zanzibar.webp';
import Walking from './images/Walking.webp';
import Sunrise from './images/Sunrise.webp';
import Mountain_Sunrise from './images/Mountain-Sunrise.webp';
import Ngorongoro from './images/Ngorongoro-Green-View.webp';
import King_Fisher from './images/King-Fisher.webp';
import Flamingo from './images/Flamingo.webp';

interface IFeatures {
  name: string;
  description: string;
}

const features: IFeatures[] = [
  {
    name: 'Your Custom Safari Experience',
    description:
      'Embark on a journey like no other with Gladiolus Tours Safaris, your trusted partner for tailor-made, unforgettable safaris in the heart of Tanzania.',
  },
  {
    name: 'Crafting Unique Adventures',
    description:
      'Indulge in experiences designed exclusively for you, tailored to your preferences and budget. Your dream adventure awaits with Gladiolus Tours Safaris.',
  },
  {
    name: 'Privately Yours, Authentically Wild',
    description:
      'Step into a world of private and authentic safaris, meticulously designed for a personalized experience. Our passionate driver-guides speak multiple languages, ensuring your journey is truly exceptional.',
  },
  {
    name: 'Responsive, Flexible, Unforgettable',
    description:
      'Our responsive team is dedicated to turning your last-minute requests into reality. Whether adapting your trip or finding the ideal solution on the go, your Gladiolus adventure is marked by responsiveness and flexibility.',
  },
  {
    name: 'Discover Tanzania and Zanzibar',
    description:
      'Embark on tailor-made tours to Tanzania and Zanzibar. Our partners share our commitment to preserving the environment and respecting local traditions. Let our experienced guides lead you to unique experiences, from climbing Kilimanjaro to relaxing on the idyllic beaches of Zanzibar.',
  },
  {
    name: 'Safe Travels, Memorable Moments',
    description:
      "Travel with complete peace of mind with Gladiolus Safaris, a registered company in Tanzania, fully licensed to operate safaris. Our local offices guarantee immediate assistance, ensuring you're in good hands for a safe and memorable travel experience.",
  },
];

export const GladiolusSafaris = () => {
  const alternativeText = 'Gladiolus Safaris';
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Unlock the Wonders of Gladiolus Tours Safaris
        </h2>
        <p className="mt-4 text-gray-500">
          Immerse yourself in the extraordinary with Gladiolus Safaris. Our
          bespoke safaris in Tanzania redefine adventure, offering personalized
          experiences crafted just for you.
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <img
          src={Visitor}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
        <img
          src={Sunrise}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
        <img
          src={Flamingo}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
        <img
          src={Zanzibar}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
        <img
          src={Mountain_Sunrise}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
        <img
          src={Walking}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
        <img
          src={King_Fisher}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
        <img
          src={Ngorongoro}
          alt={alternativeText}
          className="rounded-lg bg-gray-100 h-40 w-full object-cover"
        />
      </div>
    </div>
  );
};
