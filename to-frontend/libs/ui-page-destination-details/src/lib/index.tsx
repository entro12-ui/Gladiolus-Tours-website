import {
  GtToursRoute,
  useDestinationIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import { GtDestinations } from '@collo/ui-persistance';
import { Navigate } from 'react-router-dom';

export const GladiolusToursDestinationsDetails = () => {
  const destinationId = useDestinationIdOrThrow();
  const destination = GtDestinations[destinationId];

  if (!destination) {
    return <Navigate to={GtToursRoute.NotFound} />;
  }

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-16">
      <h1 className="text-3xl font-bold mb-8">{destination.name}</h1>
      <img
        src={destination.imageSrc}
        alt={destination.imageAlt}
        className="w-full h-64 rounded-lg object-cover object-center mb-8"
      />
      <p className="text-lg leading-7 mb-8">{destination.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Status</h2>
          <p className="text-base">{destination.status ? 'Open' : 'Closed'}</p>
        </div>
        {destination.nationalParks.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">National Parks</h2>
            <ul className="list-disc text-base pl-4">
              {destination.nationalParks.map((park) => (
                <li key={park.name}>
                  {park.name} - {park.status ? 'Open' : 'Closed'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <a
        href="/"
        className="inline-block py-2 px-4 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Learn More
      </a>
    </div>
  );
};
