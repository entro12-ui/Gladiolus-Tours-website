import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '@collo/ui-comp-scroll-to-top';
import { UiGladiolusToursLayoutWebsite } from '@collo/ui-layout-gladiolus';
import { LazyErrorNotFoundPage, LazyLandingPage } from './lazy-pages';
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
        path: '*',
        element: <LazyErrorNotFoundPage />,
      },
    ]
  }
];
