import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';

export const GladiolusAccommodationsToursPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Accommodations & Activities'} />
      <GladiolusHeaderSection
        header={'Accommodations & Activities'}
        description={'Accommodations & Activities Offered by Gladiolus Tours'}
      />
    </div>
  );
};
