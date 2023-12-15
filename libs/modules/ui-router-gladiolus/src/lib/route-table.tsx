import { UiGladiolusToursLayoutWebsite } from '@gladiolus/ui-layout-gladiolus';
import { Outlet } from 'react-router-dom';
import { GtToursRoute } from '@gladiolus/ui-routes-gladiolus';
import {
  LazyAboutUsPage,
  LazyAccommodationsPage,
  LazyContactPage,
  LazyDestinationsPage,
  LazyErrorNotFoundPage,
  LazyItinerariesPage,
  LazyLandingPage,
  LazySafarisPage,
  LazyServicePage,
} from './lazy-pages';
import { ScrollToTop } from '@gladiolus/ui-comp-scroll-to-top';

const TopLevelWebsiteLayout = () => {
  return (
    <UiGladiolusToursLayoutWebsite>
      <ScrollToTop />
      <Outlet />
    </UiGladiolusToursLayoutWebsite>
  );
};

export const GLADIOLUS_TOURS_ROUTE_TABLE = [
  {
    element: <TopLevelWebsiteLayout />,
    children: [
      {
        path: GtToursRoute.Home,
        index: true,
        element: <LazyLandingPage />,
      },
      {
        path: GtToursRoute.Service,
        index: true,
        element: <LazyServicePage />,
      },
      {
        path: GtToursRoute.Destinations,
        index: true,
        element: <LazyDestinationsPage />,
      },
      {
        path: GtToursRoute.AboutUs,
        index: true,
        element: <LazyAboutUsPage />,
      },
      {
        path: GtToursRoute.Safaris,
        index: true,
        element: <LazySafarisPage />,
      },
      {
        path: GtToursRoute.Accommodation,
        index: true,
        element: <LazyAccommodationsPage />,
      },
      {
        path: GtToursRoute.itineraries,
        index: true,
        element: <LazyItinerariesPage />,
      },
      {
        path: GtToursRoute.Contact,
        index: true,
        element: <LazyContactPage />,
      },
      {
        path: '*',
        element: <LazyErrorNotFoundPage />,
      },
    ],
  },
];
