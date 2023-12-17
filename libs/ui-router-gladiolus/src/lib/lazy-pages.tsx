import loadable from '@loadable/component';
import { RouterLazyFallback } from '@collo/ui-comp-router-lazy-fallback';

export const LazyLandingPage = loadable(
  () => import('@collo/ui-page-landing-page'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyErrorNotFoundPage = loadable(
  () => import('@collo/ui-page-error-404'),
  { fallback: <RouterLazyFallback /> }
);
