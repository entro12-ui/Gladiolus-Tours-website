import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '@collo/ui-comp-scroll-to-top';
import { UiGladiolusToursLayoutWebsite } from '@collo/ui-layout-gladiolus';
import {
  LazyAboutUsPage,
  LazyAccommodationsPage,
  LazyErrorNotFoundPage,
  LazyLandingPage,
  LazyServicePage,
} from './lazy-pages';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';

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
        path: GtToursRoute.AboutUs,
        index: true,
        element: <LazyAboutUsPage />,
      },
      {
        path: GtToursRoute.Accommodation,
        index: true,
        element: <LazyAccommodationsPage />,
      },
      {
        path: GtToursRoute.Service,
        index: true,
        element: <LazyServicePage />,
      },
      {
        path: '*',
        element: <LazyErrorNotFoundPage />,
      },
    ],
  },
];
