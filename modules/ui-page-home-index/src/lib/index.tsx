import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import { MainHero } from './hero';
import { GladiolusStats } from './stats';

export const GladiolusLandingPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Home'} />
      <main>
        <div>
          <MainHero />
        </div>
        <br />
        <div>
          <GladiolusStats />
        </div>
        <br />
        <div></div>
      </main>
    </div>
  );
};
