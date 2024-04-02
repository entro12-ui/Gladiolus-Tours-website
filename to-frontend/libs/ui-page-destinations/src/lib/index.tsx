import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { Destinations } from './destinations';

export const GladiolusDestinationsPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Destinations'} />
      {/*
      <GladiolusHeaderSection
        header={'Safari Destinations'}
        description={'Explore Gladiolus Tours Destinations'}
      />
      */}
      <div>
        <Destinations />
      </div>
    </div>
  );
};
