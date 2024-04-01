import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { Destinations } from './destinations';

export const GladiolusDestinationsPage = () => {
  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safari Destinations'} />
      <Destinations />
    </div>
  );
};
