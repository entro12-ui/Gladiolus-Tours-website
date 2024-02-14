import {
  GtToursRoute,
  useDestinationIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import { GtDestinations } from '@collo/ui-persistance';
import { Navigate } from 'react-router-dom';

export const GladiolusToursDestinationsDetails = () => {
  const destinationId = useDestinationIdOrThrow();
  const destination = GtDestinations[destinationId];

  if (!destination) {
    return <Navigate to={GtToursRoute.NotFound} />;
  }

  return (
    <div className="destinations-container">
      <h1>Gladiolus Tours Destinations</h1>
      <p>Discover exciting adventures in Tanzania:</p>
    </div>
  );
};
