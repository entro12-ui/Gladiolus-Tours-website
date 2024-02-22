import React from 'react';
import {
  GtDestinationCategory,
  GladiolusToursDestinations,
  GtNationalParks,
  GtItineraryCategory,
} from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';

interface DestinationListProps {
  destinations: GladiolusToursDestinations;
  filter: GtDestinationCategory;
}

export const DestinationList = ({
  destinations,
  filter,
}: DestinationListProps) => {
  const filteredDestinations =
    filter === GtDestinationCategory['All Circuits']
      ? destinations
      : destinations.filter((destination) => destination.category === filter);

  return (
    <div className="grid grid-flow-row gap-8 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {filteredDestinations.map((destination, index) => (
        <div
          key={index}
          className="my-8 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 duration-300 hover:transform hover:scale-105"
        >
          <Link
            to={generatePath(GtToursRoute.DestinationDetails, {
              destinationId: String(index),
            })}
            className="block"
          >
            <figure key={destination.id}>
              {destination.nationalParks.map((park: GtNationalParks) => (
                <React.Fragment key={destination.id}>
                  <img
                    src={`${park.imageSrc}?auto=format&fit=crop&w=400&q=50`}
                    alt={park.imageAlt}
                    className="rounded-t h-64 w-full object-cover"
                  />
                  <figcaption className="p-4">
                    <div className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                      Category: {GtItineraryCategory[park.category]}
                    </div>
                    <p className="text-xl mb-3 font-semibold leading-tight text-gray-800 dark:text-gray-300">
                      {park.name}
                    </p>
                    <p className="text-sm leading-5 text-gray-600 dark:text-gray-400">
                      {park.description}
                    </p>
                  </figcaption>
                </React.Fragment>
              ))}
            </figure>
          </Link>
        </div>
      ))}
    </div>
  );
};
