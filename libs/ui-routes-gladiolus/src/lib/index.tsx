import { generatePath, Navigate } from 'react-router-dom';
import { GtToursRoute } from './routes';

export const NotFoundRedirect = () => {
  return <Navigate to={generatePath(GtToursRoute.NotFound)} />;
};
