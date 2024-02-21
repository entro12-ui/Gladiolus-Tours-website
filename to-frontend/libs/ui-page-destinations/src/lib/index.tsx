import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { DestinationCounter } from './destination-counter';
import { DestinationFilter } from './destination-filter';
import { DestinationList } from './destination-list';

export const GladiolusDestinationsPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safari Destinations'} />
      <GladiolusHeaderSection
        header={'Safari Destinations'}
        description={'Explore Gladiolus Tours Destinations'}
      />
      <div>
        <DestinationCounter />
        <DestinationFilter />
        <DestinationList />
      </div>
    </div>
  );
};
