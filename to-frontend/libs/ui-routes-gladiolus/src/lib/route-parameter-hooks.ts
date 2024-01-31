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

export const useCulturalActivityIdOrThrow = () => {
  const { culturalActivityId } =
    useParams<GtToursRouteParam.CulturalActivityId>();
  if (!culturalActivityId) {
    throw new Error(
      `Internal error: expected ${GtToursRouteParam.CulturalActivityId} parameter in URL.`
    );
  }
  return parseInt(culturalActivityId);
};

export const useAccommodationIdOrThrow = () => {
  const { accommodationId } = useParams<GtToursRouteParam.AccommodationId>();
  if (!accommodationId) {
    throw new Error(
      `Internal error: expected ${GtToursRouteParam.AccommodationId} parameter in URL.`
    );
  }
  return parseInt(accommodationId);
};
