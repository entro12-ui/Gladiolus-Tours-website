import React from 'react';
import { GtDestinationCategory } from '@collo/ui-persistance';

interface GtDestinationFilterProps {
  selectedFilter: GtDestinationCategory | '';
  onFilterChange: (filter: GtDestinationCategory | '') => void;
}

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

export const DestinationFilter = ({
  selectedFilter,
  onFilterChange,
}: GtDestinationFilterProps) => {
  const handleTabClick = (filter: GtDestinationCategory | '') => {
    onFilterChange(filter);
  };

  return (
    <div>
      <nav
        className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
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
