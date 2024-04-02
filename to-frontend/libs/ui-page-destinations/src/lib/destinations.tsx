import React, { useState } from 'react';
import { GtDestinationCategory, IDestinations } from '@collo/ui-persistance';
import { classNames } from '@collo/ui-utils';

interface FilteredNationalParksProps {
  destinations: IDestinations[];
}

export const Destinations: React.FC<FilteredNationalParksProps> = ({
  destinations,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<GtDestinationCategory>(GtDestinationCategory['All Circuits']);

  const filteredParks = selectedCategory
    ? destinations.filter(
        (destination: IDestinations) =>
          destination.category === selectedCategory
      )
    : [];

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex items-center space-x-4 mb-4">
        {Object.values(GtDestinationCategory).map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category as GtDestinationCategory)
            }
            className={classNames('px-4 py-2 rounded-full focus:outline-none')}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredParks.map((destination) => (
        <div
          key={destination.id}
          className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden m-4"
        >
          <div className="flex items-center space-x-2 mt-4">
            {destination.nationalParks.map((park) => (
              <div key={park.id} className="flex items-center space-x-2">
                <img
                  src={park.imageSrc}
                  alt={park.imageAlt}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <span>{park.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
