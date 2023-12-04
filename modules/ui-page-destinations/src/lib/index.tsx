import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import GladiolusHeaderSection from '@gladiolus/ui-comp-header';

export const GladiolusDestinations = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Destinations'} />
      <GladiolusHeaderSection
        header={'Destinations'}
        description={'Destinations Offered by Gladiolus Tours'}
      />
    </div>
  );
};
