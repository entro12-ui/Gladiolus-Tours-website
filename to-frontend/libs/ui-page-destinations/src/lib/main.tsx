import React, { useState } from 'react';
import { GtDestinationCategory, GtDestinations } from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';
import { UiStatus } from '@collo/ui-comp-status';

export const GladiolusToursDestinations = () => {
  // Use state with type for selectedCircuit
  const [selectedCircuit, setSelectedCircuit] =
    useState<GtDestinationCategory>();

  // Define filter options with type
  const filterOptions: {
    value: GtDestinationCategory;
    label: string;
  }[] = [
    {
      value: GtDestinationCategory['Northern Circuit'],
      label: 'All Destinations',
    },
    {
      value: GtDestinationCategory['Northern Circuit'],
      label: 'Northern Circuit',
    },
    {
      value: GtDestinationCategory['Southern Circuit'],
      label: 'Southern Circuit',
    },
    {
      value: GtDestinationCategory['Eastern Circuit'],
      label: 'Eastern Circuit',
    },
    {
      value: GtDestinationCategory['Western Circuit'],
      label: 'Western Circuit',
    },
    {
      value: GtDestinationCategory['Mafia Island'],
      label: 'Mafia Island',
    },
    {
      value: GtDestinationCategory['Ocean Islands'],
      label: 'Ocean Islands',
    },
    {
      value: GtDestinationCategory['Zanzibar Island'],
      label: 'Zanzibar Island',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your existing header or remove it */}
        {/* Filter section */}
        <div className="flex justify-between mb-8">
          {/* ... */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="filter-circuit"
              className="text-sm font-medium text-gray-700"
            >
              Filter by Circuit:
            </label>
            <select
              id="filter-circuit"
              value={selectedCircuit}
              onChange={(e) =>
                setSelectedCircuit(
                  e.target.value as unknown as GtDestinationCategory
                )
              }
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GtDestinations.filter(
            (destination) =>
              !selectedCircuit ||
              selectedCircuit === destination.nationalParks[0].category
          ).map((destination, index) => (
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
