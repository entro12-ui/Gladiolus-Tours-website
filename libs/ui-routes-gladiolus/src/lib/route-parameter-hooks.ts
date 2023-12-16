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
