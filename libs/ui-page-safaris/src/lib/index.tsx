import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { GladiolusSafaris } from '@collo/ui-comp-safaris';

export const GladiolusToursSafarisPage = () => {
  return (
    <>
      <div className="bg-white">
        <EntryPageHelmet title={'Safaris'} />
        <GladiolusHeaderSection
          header={'Safaris'}
          description={'Safaris Offered by Gladiolus Tours'}
        />
      </div>
      <div>
        <GladiolusSafaris />
      </div>
    </>
  );
};
