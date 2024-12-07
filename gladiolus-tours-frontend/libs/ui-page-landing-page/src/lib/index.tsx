import { MainHero } from './hero';
import { GladiolusSafaris } from './safaris';
import { GladiolusTestimonials } from './testimonials';
import { GladiolusTeam } from './team-sections';
import { WhyGoWithGladiolus } from './services';
import { GladiolusToursIncentives } from './incentives';
import { GladiolusOverview } from './overview';
import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GtAdventures, GtDestinations } from '@collo/ui-persistance';
import { Adventure } from '@collo/ui-comp-adventure';
import { Destinations } from '@collo/ui-comp-destinations';

export const GladiolusLandingPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Home'} />
      <main>
        <div>
          <MainHero />
        </div>
        <div>
          <Adventure adventure={GtAdventures} />
        </div>
        <div>
          <GladiolusOverview />
        </div>
        <div>
          <Destinations destinations={GtDestinations} />
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
