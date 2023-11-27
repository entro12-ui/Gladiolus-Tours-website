import { UiGladiolusToursLayoutWebsite } from '@gladiolus/ui-layout-gladiolus';
import { Outlet } from 'react-router-dom';
import { GtToursRoute } from '@gladiolus/ui-routes-gladiolus';
import { LazyErrorNotFoundPage } from './lazy-pages';

const CommonLayoutChildren = () => {
  return <Outlet />;
};

const WebsiteLayout = () => {
  return (
    <UiGladiolusToursLayoutWebsite>
      <CommonLayoutChildren />
    </UiGladiolusToursLayoutWebsite>
  );
};

const EmptyLayout = () => {
  return <Outlet />;
};

export const GLADIOLUS_TOURS_ROUTE_TABLE = [
  {
    element: <WebsiteLayout />,
    children: [
      {
        path: GtToursRoute.HomePage,
        element: <EmptyLayout />,
        index: true,
      },
      {
        path: '*',
        element: <LazyErrorNotFoundPage />,
      },
    ],
  },
];
