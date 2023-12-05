import { EntryPageHelmet } from '@gladiolus/ui-comp-page-helmet';
import GladiolusHeaderSection from '@gladiolus/ui-comp-header';

interface IProps {
  id: number;
  name: string;
  type: string;
  price: number;
  status: boolean;
  description: string;
}

export const GladiolusToursSafarisPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safaris'} />
      <GladiolusHeaderSection
        header={'Safaris'}
        description={'Safaris Offered by Gladiolus Tours'}
      />
    </div>
  );
};
