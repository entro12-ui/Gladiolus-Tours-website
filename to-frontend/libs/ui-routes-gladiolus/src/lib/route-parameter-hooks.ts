import { useParams } from 'react-router-dom';
import { GtToursRouteParam } from './routes';

export const useSafariIdOrThrow = () => {
  const { safariId } = useParams<GtToursRouteParam.SafariId>();
  if (!safariId) {
    throw new Error(
      `Internal error: expected ${GtToursRouteParam.SafariId} parameter in URL.`
    );
  }
  return parseInt(safariId);
};

export const useItineraryIdOrThrow = () => {
  const { itineraryId } = useParams<GtToursRouteParam.ItineraryId>();
  if (!itineraryId) {
    throw new Error(
      `Internal error: expected ${GtToursRouteParam.ItineraryId} parameter in URL.`
    );
  }
  return parseInt(itineraryId);
};
