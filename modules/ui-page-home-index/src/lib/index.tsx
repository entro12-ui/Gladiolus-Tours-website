import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import { MainHero } from './hero';
import { GladiolusStats } from './stats';
import { GladiolusSafaris } from './safaris';
import { GladiolusServices } from './services';
import { GladiolusTestimonials } from './testimonials';
import { GladiolusTeam } from './team-sections';

export const GladiolusLandingPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Home'} />
      <main>
        <div>
          <MainHero />
        </div>
        <div>
          <GladiolusStats />
        </div>
        <div>
          <GladiolusSafaris />
        </div>
        <div>
          <GladiolusServices />
        </div>
        <div>
          <GladiolusTestimonials />
        </div>
        <div>
          <GladiolusTeam />
        </div>
      </main>
    </div>
  );
};
