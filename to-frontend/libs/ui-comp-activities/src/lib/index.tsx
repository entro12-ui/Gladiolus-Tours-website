import { GtActivities } from '@collo/ui-persistance';
import { faHiking, faSwimmer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function GladiolusToursActivities(actvities: GtActivities) {
  switch (actvities) {
    case GtActivities.Hiking:
      return <FontAwesomeIcon icon={faHiking} className="w-6 h-6 mr-2" />;
    case GtActivities.Camping:
      return <FontAwesomeIcon icon={faCamping} className="w-6 h-6 mr-2" />;
    case GtActivities.Snorkeling:
      return <FontAwesomeIcon icon={faSwimmer} className="w-6 h-6 mr-2" />;
  }
}
