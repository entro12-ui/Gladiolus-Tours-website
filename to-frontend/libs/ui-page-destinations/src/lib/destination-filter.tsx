import { useState } from 'react';
import { GtDestinationCategory } from '@collo/ui-persistance';

interface GtDestinationFilterProps {
  onFilterChange: (filter: GtDestinationCategory) => void;
}

export function DestinationFilter({
  onFilterChange,
}: GtDestinationFilterProps) {
  const [filter, setFilter] = useState<GtDestinationCategory | ''>('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value as unknown as GtDestinationCategory;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter destination"
      />
    </div>
  );
}
