import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { GladiolusToursAboutPage } from './main';

export const GladiolusToursAboutUs = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'About us'} />
      <GladiolusHeaderSection
        header={'About us'}
        description={'About Gladiolus Tours'}
      />
      <div>
        <GladiolusToursAboutPage />
      </div>
    </div>
  );
};
