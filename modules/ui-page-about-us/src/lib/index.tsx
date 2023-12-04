import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import GladiolusHeaderSection from '@gladiolus/ui-comp-header';

export const GladiolusToursAboutUs = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'About us'} />
      <GladiolusHeaderSection
        header={'About us'}
        description={'About us Offered by Gladiolus Tours'}
      />
    </div>
  );
};
