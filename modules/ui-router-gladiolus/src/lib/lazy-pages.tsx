import loadable from '@loadable/component';
import { RouterLazyFallback } from '@gladiolus/ui-comp-router-lazy-fallback';

export const LazyErrorNotFoundPage = loadable(
  () => import('@gladiolus/ui-page-gladiolus-tours-error-404'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyLandingPage = loadable(
  () => import('@gladiolus/ui-page-home-index'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyServicePage = loadable(
  () => import('@gladiolus/ui-page-services'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyDestinationsPage = loadable(
  () => import('@gladiolus/ui-page-destinations'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyAboutUsPage = loadable(
  () => import('@gladiolus/ui-page-about-us'),
  { fallback: <RouterLazyFallback /> }
);

export const LazySafarisPage = loadable(
  () => import('@gladiolus/ui-page-safaris'),
  { fallback: <RouterLazyFallback /> }
);
