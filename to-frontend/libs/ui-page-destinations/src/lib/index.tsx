import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { DestinationFilter } from './destination-filter';
import { DestinationList } from './destination-list';
import { useState } from 'react';
import { GtDestinationCategory, GtDestinations } from '@collo/ui-persistance';

export const GladiolusDestinationsPage = () => {
  const [destinations] = useState(GtDestinations);
  const [filter, setFilter] = useState<GtDestinationCategory>(
    GtDestinationCategory['All Circuits']
  );

  const handleFilterChange = (newFilter: GtDestinationCategory) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safari Destinations'} />
      {/*
      <GladiolusHeaderSection
        header={'Safari Destinations'}
        description={'Explore Gladiolus Tours Destinations'}
      />
      */}
      <div>
        <DestinationFilter
          selectedFilter={filter}
          onFilterChange={handleFilterChange}
        />
        <DestinationList filter={filter} destinations={destinations} />
      </div>
    </div>
  );
};
