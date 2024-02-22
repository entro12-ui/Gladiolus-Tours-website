import React from 'react';
import {
  GtDestinationCategory,
  GladiolusToursDestinations,
  GtNationalParks,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredDestinations.flatMap((destination) =>
        destination.nationalParks.map((park: GtNationalParks, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 duration-300 transform hover:scale-105"
          >
            <Link
              to={generatePath(GtToursRoute.NationalParkDetail, {
                destinationId: String(destination.id),
                parkId: String(park.id),
              })}
              className="block"
            >
              <figure>
                <img
                  src={`${park.imageSrc}?auto=format&fit=crop&w=400&q=50`}
                  alt={park.imageAlt}
                  className="h-64 w-full object-cover rounded-t"
                />
                <figcaption className="p-4">
                  <p className="text-xl mb-3 font-semibold leading-tight text-gray-800 dark:text-gray-300">
                    {park.name}
                  </p>
                  <p className="text-sm leading-5 text-gray-600 dark:text-gray-400">
                    {park.description}
                  </p>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
