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
