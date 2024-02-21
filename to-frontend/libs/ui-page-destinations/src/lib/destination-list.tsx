import React from 'react';
import {
  GtDestinationCategory,
  GladiolusToursDestinations,
  GtNationalParks,
} from '@collo/ui-persistance';

interface DestinationListProps {
  destinations: GladiolusToursDestinations;
  filter: GtDestinationCategory | '';
}

export const DestinationList = ({
  destinations,
  filter,
}: DestinationListProps) => {
  // Filter destinations based on the selected category
  const filteredDestinations = filter
    ? destinations.filter((destination) => destination.category === filter)
    : destinations;

  return (
    <div>
      <h2>Destinations</h2>
      <ul>
        {filteredDestinations.map((destination) => (
          <li key={destination.id}>
            <strong>{destination.name}</strong> - {destination.category}
            {/* Render national parks associated with this destination only if the category matches the filter */}
            {destination.category === filter && (
              <ul>
                {destination.nationalParks.map((park: GtNationalParks) => (
                  <li key={park.id}>
                    <strong>{park.name}</strong> - {park.description}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
