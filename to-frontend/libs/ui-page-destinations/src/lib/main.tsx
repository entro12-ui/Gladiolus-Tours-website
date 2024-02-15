import React, { useState } from 'react';
import { GtDestinationCategory, GtDestinations } from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';
import { UiStatus } from '@collo/ui-comp-status';
import { classNames } from '@collo/ui-utils';

export const GladiolusToursDestinations = () => {
  // Use state with type for selectedCircuit
  const [selectedCircuit, setSelectedCircuit] = useState<GtDestinationCategory>(
    GtDestinationCategory['Northern Circuit']
  );

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
            <Tab
              selectedCategory={selectedCircuit}
              onTabChange={setSelectedCircuit}
            />
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

interface TabProps {
  selectedCategory: GtDestinationCategory;
  onTabChange: (category: GtDestinationCategory) => void;
}

const Tab = ({ selectedCategory, onTabChange }: TabProps) => {
  const tabs = [
    {
      name: 'Northern Circuit',
      category: GtDestinationCategory['Northern Circuit'],
    },
    {
      name: 'Southern Circuit',
      category: GtDestinationCategory['Southern Circuit'],
    },
    {
      name: 'Eastern Circuit',
      category: GtDestinationCategory['Eastern Circuit'],
    },
    {
      name: 'Western Circuit',
      category: GtDestinationCategory['Western Circuit'],
    },
    {
      name: 'Ocean Islands',
      category: GtDestinationCategory['Ocean Islands'],
    },
    {
      name: 'Mafia Island',
      category: GtDestinationCategory['Mafia Island'],
    },
    {
      name: 'Zanzibar Island',
      category: GtDestinationCategory['Zanzibar Island'],
    },
  ];

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Filter
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          value={selectedCategory}
          onChange={(e) => onTabChange(parseInt(e.target.value))}
        >
          {tabs.map((tab) => (
            <option key={tab.category} value={tab.category}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <button
              key={tab.category}
              onClick={() => onTabChange(tab.category)}
              className={classNames(
                tab.category === selectedCategory
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
              aria-current={
                tab.category === selectedCategory ? 'page' : undefined
              }
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
