import { GtItinerary } from '@collo/ui-persistance';
import {
  GtToursRoute,
  useItineraryIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import { generatePath, Navigate } from 'react-router-dom';

export const GladiolusToursItineraryDetails = () => {
  const itineraryId = useItineraryIdOrThrow();
  const itinerary = GtItinerary[itineraryId];

  if (!itinerary) {
    return <Navigate to={generatePath(GtToursRoute.NotFound)} />;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-300">
        {itinerary.title}
      </h2>
      <div className="text-gray-600 dark:text-gray-400">
        {itinerary.description.map((step, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="mb-2">
              {step.Accommodation && `Accommodation: ${step.Accommodation}`}
            </p>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
