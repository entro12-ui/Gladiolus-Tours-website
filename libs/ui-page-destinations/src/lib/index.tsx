import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { GladiolusToursDestinations } from './main';

export const GladiolusDestinationsPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Destinations'} />
      <GladiolusHeaderSection
        header={'Destinations'}
        description={'Destinations Offered by Gladiolus Tours'}
      />
      <div>
        <GladiolusToursDestinations />
      </div>
    </div>
  );
};
