import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import GladiolusHeaderSection from '@gladiolus/ui-comp-header';
import { GladiolusToursContactBody } from './main';

export const GladiolusToursContactPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Contact'} />
      <GladiolusHeaderSection
        header={'Contact'}
        description={'Gladiolus Tours Contacts'}
      />
      <div>
        <GladiolusToursContactBody />
      </div>
    </div>
  );
};
