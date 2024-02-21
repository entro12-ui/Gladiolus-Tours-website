import {
  GladiolusToursDestinations,
  GtDestinationCategory,
} from '@collo/ui-persistance';

interface DestinationListProps {
  destinations: GladiolusToursDestinations;
  filter: GtDestinationCategory | '';
}

export function DestinationList({
  destinations,
  filter,
}: DestinationListProps) {
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
          </li>
        ))}
      </ul>
    </div>
  );
}
