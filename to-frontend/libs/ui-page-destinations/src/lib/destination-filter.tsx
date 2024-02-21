import { useState } from 'react';

interface GtDestinationFilterProps {
  onFilterChange: (filter: string) => void;
}

export function DestinationFilter({
  onFilterChange,
}: GtDestinationFilterProps) {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
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
