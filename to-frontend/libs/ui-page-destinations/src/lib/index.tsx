import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { DestinationCounter } from './destination-counter';
import { DestinationFilter } from './destination-filter';
import { DestinationList } from './destination-list';
import { useState } from 'react';
import { GtDestinations } from '@collo/ui-persistance';

export const GladiolusDestinationsPage = () => {
  const [destinations] = useState(GtDestinations);

  const handleFilterChange = (filter: string) => {
    // Filter Logic
  };

  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safari Destinations'} />
      <GladiolusHeaderSection
        header={'Safari Destinations'}
        description={'Explore Gladiolus Tours Destinations'}
      />
      <div>
        <DestinationCounter count={destinations.length} />
        <DestinationFilter
          onFilterChange={(filter) => handleFilterChange(filter)}
        />
        <DestinationList />
      </div>
    </div>
  );
};
