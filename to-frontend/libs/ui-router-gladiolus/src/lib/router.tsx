import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { getWebsiteBaseHref } from '@collo/ui-utils';
import { GLADIOLUS_TOURS_ROUTE_TABLE } from './route-table';

// See https://medium.com/doctolib/react-query-cachetime-vs-staletime-ec74defc483e
// * cacheTime default is 5 mins
// * staleTime default is 0 mins
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // never refetch on window focus
      retry: false, // otherwise by default will retry errors up to 3 times
    },
  },
});

export function UiRouterGladiolusTours() {
  const router = createBrowserRouter(GLADIOLUS_TOURS_ROUTE_TABLE, {
    basename: getWebsiteBaseHref(),
  });

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
