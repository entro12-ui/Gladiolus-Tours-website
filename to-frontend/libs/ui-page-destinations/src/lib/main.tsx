import React from 'react';
import { GtDestinations } from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';
import { UiStatus } from '@collo/ui-comp-status';

export const GladiolusToursDestinations = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Explore Destinations
        </h2> */}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GtDestinations.map((destination, index) => (
            <Link
              key={destination.id}
              to={generatePath(GtToursRoute.DestinationDetails, {
                destinationId: String(index),
              })}
              className="block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={destination.imageSrc}
                  alt={destination.imageAlt}
                  className="rounded-t h-64 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {destination.description}
                </p>
                <p>
                  <UiStatus status={destination.status} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
