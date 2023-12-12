import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import { MainHero } from './hero';
import { GladiolusStats } from './stats';
import { GladiolusSafaris } from './safaris';
import { GladiolusTestimonials } from './testimonials';
import { GladiolusTeam } from './team-sections';
import { WhyGoWithGladiolus } from './services';
import { GladiolusToursIncentives } from './incentives';

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
          <WhyGoWithGladiolus />
        </div>
        <div>
          <GladiolusTestimonials />
        </div>
        <div>
          <GladiolusTeam />
        </div>
        <div>
          <GladiolusToursIncentives />
        </div>
      </main>
    </div>
  );
};
