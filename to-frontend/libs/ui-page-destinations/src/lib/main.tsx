import React, { useState } from 'react';
import {
  GtDestinationCategory,
  GtDestinations,
  GtNationalParks,
} from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';
import { UiStatus } from '@collo/ui-comp-status';
import { classNames } from '@collo/ui-utils';

export const GladiolusToursDestinations = () => {
  const [selectedCircuit, setSelectedCircuit] =
    useState<GtDestinationCategory | null>(null);

  const filteredDestinations = selectedCircuit
    ? GtDestinations.filter(
        (destination) => destination.category === selectedCircuit
      )
    : [];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between mb-8">
          <div className="flex items-center gap-4">
            <label
              htmlFor="filter-circuit"
              className="text-sm font-medium text-gray-700"
            >
              Filter by Circuit:
            </label>
            <Tab
              selectedDestination={selectedCircuit}
              onTabChange={setSelectedCircuit}
            />
          </div>
        </div>
      </div>

      {filteredDestinations.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination, index) => (
              <div
                key={index}
                className="block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {destination.nationalParks.map((park, parkIndex) => (
                      <ParkCard key={parkIndex} park={park} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface TabProps {
  selectedDestination: GtDestinationCategory | null;
  onTabChange: (category: GtDestinationCategory | null) => void;
}

const Tab = ({ selectedDestination, onTabChange }: TabProps) => {
  const destinations: GtDestinationCategory[] = [
    GtDestinationCategory['Northern Circuit'],
    GtDestinationCategory['Southern Circuit'],
    GtDestinationCategory['Eastern Circuit'],
    GtDestinationCategory['Western Circuit'],
    GtDestinationCategory['Mafia Island'],
    GtDestinationCategory['Ocean Islands'],
    GtDestinationCategory['Zanzibar Island'],
  ];

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Filter
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          value={selectedDestination || ''}
          onChange={(e) =>
            onTabChange(
              e.target.value as unknown as GtDestinationCategory | null
            )
          }
        >
          <option value="">All Circuits</option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          <button
            onClick={() => onTabChange(null)}
            className={`group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 ${
              selectedDestination === null
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All Circuits
          </button>
          {destinations.map((destination) => (
            <button
              key={destination}
              onClick={() => onTabChange(destination)}
              className={classNames(
                destination === selectedDestination
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
              aria-current={
                destination === selectedDestination ? 'page' : undefined
              }
            >
              {destination}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const ParkCard: React.FC<{ park: GtNationalParks }> = ({ park }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{park.name}</h4>
      <p className="text-sm text-gray-500 mb-4">{park.description}</p>
      <p>
        <UiStatus status={park.status} />
      </p>
    </div>
  );
};
