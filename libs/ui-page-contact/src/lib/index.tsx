import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
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
