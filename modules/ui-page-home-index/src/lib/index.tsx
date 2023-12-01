import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import { GladiolusBanner } from './banners';
import { MainHero } from './hero';

export const GladiolusLandingPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Home'} />
      <main>
        <GladiolusBanner />
        <MainHero />
      </main>
    </div>
  );
};
