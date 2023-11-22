import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GLADIOLUS_TOURS_ROUTE_TABLE } from './route-table';
import { getWebsiteBaseHref } from '@gladiolus/ui-utils';

export function UiRouterGladiolusTours() {
  const router = createBrowserRouter(GLADIOLUS_TOURS_ROUTE_TABLE, {
    basename: getWebsiteBaseHref(),
  });

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
