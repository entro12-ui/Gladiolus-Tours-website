import { MainHero } from './hero';
import { GladiolusSafaris } from './safaris';
import { GladiolusTestimonials } from './testimonials';
import { GladiolusTeam } from './team-sections';
import { WhyGoWithGladiolus } from './services';
import { GladiolusToursIncentives } from './incentives';
import { GladiolusOverview } from './overview';
import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { Itinerary } from '@collo/ui-comp-itinerary';
import { GtPackage } from '@collo/ui-persistance';

export const GladiolusLandingPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Home'} />
      <main>
        <div>
          <MainHero />
        </div>
        <div>
          <Itinerary itinerary={GtPackage} />
        </div>
        <div>
          <GladiolusOverview />
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
