import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { GladiolusToursDestinations } from './main';

export const GladiolusDestinationsPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safari Destinations'} />
      <GladiolusHeaderSection
        header={'Safari Destinations'}
        description={'Explore Gladiolus Tours Destinations'}
      />
      <div>
        <GladiolusToursDestinations />
      </div>
    </div>
  );
};
