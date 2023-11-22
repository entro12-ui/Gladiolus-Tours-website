import {generatePath, Navigate} from "react-router-dom";
import {GtToursRoute} from "./route-parameter-hooks";

export const NotFoundRedirect = () => {
  return <Navigate to={generatePath(GtToursRoute.NotFound)} />;
}

