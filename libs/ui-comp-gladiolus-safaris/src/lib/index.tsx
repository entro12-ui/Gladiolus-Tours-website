import { Safaris } from '@gladiolus/ui-gladiolus-persistence';
import { Link } from 'react-router-dom';

export const GladiolusSafaris = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Safaris Explore Tanzania with our tailor-made tours!
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Come and observe the wildlife in the national parks, climb to the
          summit of Kilimanjaro, meet the Maasai tribes, relax on the beaches of
          Zanzibar, soak up the history of Stone Town and dive into the heart of
          Mafia Island, a veritable paradise for diving enthusiasts.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {Safaris.map((safari) => (
            <Link key={safari.name} to={'#'} className="group block">
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  src={safari.imageSrc}
                  alt={safari.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {safari.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 truncate">
                {safari.description}
              </p>
              <br />
              <br />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
