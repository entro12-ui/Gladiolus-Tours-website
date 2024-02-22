import React from 'react';
import {
  GtDestinationCategory,
  GladiolusToursDestinations,
  GtNationalParks,
} from '@collo/ui-persistance';

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
    <div>
      <ul>
        {filteredDestinations.map((destination) => (
          <React.Fragment key={destination.id}>
            {destination.nationalParks.map((park: GtNationalParks) => (
              <li key={park.id}>
                <strong>{park.name}</strong> - {park.description}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
