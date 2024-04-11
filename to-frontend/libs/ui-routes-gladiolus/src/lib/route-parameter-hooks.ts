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

export const useAdventuresIdOrThrow = () => {
  const { adventuresId } = useParams<GtToursRouteParam.AdventuresId>();
  if (!adventuresId) {
    throw new Error(
      `Internal error: expected ${GtToursRouteParam.AdventuresId} parameter in URL.`
    );
  }
  return parseInt(adventuresId);
};

export const useDestinationIdOrThrow = () => {
  const { destinationId } = useParams<GtToursRouteParam.DestinationId>();
  if (!destinationId) {
    throw new Error(
      `Internal error: expected ${GtToursRouteParam.DestinationId} parameter in URL.`
    );
  }
  return parseInt(destinationId);
};
