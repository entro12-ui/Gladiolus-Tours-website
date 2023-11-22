import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GLADIOLUS_TOURS_ROUTE_TABLE } from './route-table';

export const UiRouterGladiolusTours = () => {
  const router = createBrowserRouter(GLADIOLUS_TOURS_ROUTE_TABLE, {
    basename: '',
  });

  return <RouterProvider router={router} />;
};
