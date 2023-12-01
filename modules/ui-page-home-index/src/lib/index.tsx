import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import { MainHero } from './hero';

export const GladiolusLandingPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Home'} />
      <main>
        <MainHero />
      </main>
    </div>
  );
};
