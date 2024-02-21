import React from 'react';
import {
  GtDestinationCategory,
  GladiolusToursDestinations,
} from '@collo/ui-persistance';

interface FilterComponentProps {
  selectedFilter: GtDestinationCategory | '';
  destinations: GladiolusToursDestinations;
  onFilterChange: (filter: GtDestinationCategory | '') => void;
}

export const DestinationFilter = ({
  selectedFilter,
  destinations,
  onFilterChange,
}: FilterComponentProps) => {
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
    { name: 'Ocean Islands', category: GtDestinationCategory['Ocean Islands'] },
    { name: 'Mafia Island', category: GtDestinationCategory['Mafia Island'] },
    {
      name: 'Zanzibar Island',
      category: GtDestinationCategory['Zanzibar Island'],
    },
  ];

  // Filter out categories without any destinations within the filtered list
  const availableTabs = tabs.filter((tab) => {
    if (selectedFilter === '') {
      return true; // Include all tabs when no filter is applied
    }
    // Include tabs with destinations in the filtered list or when the tab matches the selected filter
    return (
      destinations.some(
        (destination) => destination.category === tab.category
      ) || tab.category === selectedFilter
    );
  });

  const handleTabClick = (filter: GtDestinationCategory | '') => {
    onFilterChange(filter);
  };

  return (
    <div>
      <nav
        className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
        aria-label="Tabs"
      >
        {availableTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.category)}
            className={`${
              selectedFilter === tab.category
                ? 'text-gray-900 bg-white'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            } group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
};
