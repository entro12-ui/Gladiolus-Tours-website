import {
  useDestinationIdOrThrow,
  useNationalParkIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import {
  GtDestinations,
  GtNationalParks,
  IDestinations,
} from '@collo/ui-persistance';
import { useEffect, useState } from 'react';

export function GladiolusParkDetails() {
  const nationalParkId = useNationalParkIdOrThrow();
  const destinationId = useDestinationIdOrThrow();
  const [destination, setDestination] = useState<IDestinations>();

  useEffect(() => {
    const selectedDestination = GtDestinations.find(
      (destination) => destination.id === destinationId
    );

    if (selectedDestination) {
      setDestination(selectedDestination);
    }
  }, [destinationId]);

  if (!destination) {
    return <h1>Destination Not Found</h1>;
  }

  const gtNationalPark = destination.nationalParks.find(
    (park: GtNationalParks) => park.id === nationalParkId
  );

  if (!gtNationalPark) {
    return <h1>National Park Not Found</h1>;
  }

  return (
    <div>
      <div
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${gtNationalPark.imageSrc})` }}
      >
        <div className="bg-black bg-opacity-40 h-full flex items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">{gtNationalPark.name}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-2">
                About {gtNationalPark.name}
              </h2>
              <p className="text-gray-700">{gtNationalPark.description}</p>
            </div>
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-2">Location</h2>
              <p className="text-gray-700">{destination.name}</p>
            </div>
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-2">FAQs</h2>
              {gtNationalPark.faq.map((item, index) => (
                <div key={index} className="mb-2">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-2">Activities</h2>
              <ul>
                {gtNationalPark.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-2">Adventures</h2>
              <ul>
                {gtNationalPark.adventures.map((adventure, index) => (
                  <li key={index}>{adventure}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
