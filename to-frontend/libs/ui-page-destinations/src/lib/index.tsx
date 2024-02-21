import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';

export const GladiolusDestinationsPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safari Destinations'} />
      <GladiolusHeaderSection
        header={'Safari Destinations'}
        description={'Explore Gladiolus Tours Destinations'}
      />
      <div></div>
    </div>
  );
};
