import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';

export const GladiolusService = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Services'} />
      <GladiolusHeaderSection
        header={'Services'}
        description={'Services Offered by Gladiolus Tours'}
      />
    </div>
  );
};
