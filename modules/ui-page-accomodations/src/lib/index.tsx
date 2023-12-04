import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import GladiolusHeaderSection from '@gladiolus/ui-comp-header';

export const GladiolusAccommodationsToursPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Accommodations'} />
      <GladiolusHeaderSection
        header={'Accommodations'}
        description={'Accommodations Offered by Gladiolus Tours'}
      />
    </div>
  );
};
