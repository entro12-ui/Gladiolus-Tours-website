import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';

export const GladiolusLandingPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Home'} />
      <main>{/*<MainHero />*/}</main>
    </div>
  );
};
