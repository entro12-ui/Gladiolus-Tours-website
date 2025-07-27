import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { GladiolusToursAboutPage } from './main';

export const GladiolusToursAboutUs = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'About Gladiolus Tours - Our Story, Values & Team'} />
      <GladiolusHeaderSection
        header={'About Us'}
        description={'Discover the story, values, and passionate team behind Gladiolus Tours'}
      />
      <div className="overflow-hidden">
        <GladiolusToursAboutPage />
      </div>
    </div>
  );
};
