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

export const LazyAboutUsPage = loadable(
  () => import('@collo/ui-page-about-us'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyContactPage = loadable(
  () => import('@collo/ui-page-contact'),
  { fallback: <RouterLazyFallback /> }
);

export const LazySafarisPage = loadable(
  () => import('@collo/ui-page-safaris'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyDestinationsPage = loadable(
  () => import('@collo/ui-page-destinations'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyDestinationDetailPage = loadable(
  () => import('@collo/ui-page-destination-details'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyAdventuresPage = loadable(
  () => import('@collo/ui-page-adventures'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyAdventureDetailPage = loadable(
  () => import('@collo/ui-page-adventure-details'),
  { fallback: <RouterLazyFallback /> }
);

export const LazyNationalParkDetails = loadable(
  () => import('@collo/ui-page-park-details'),
  { fallback: <RouterLazyFallback /> }
);
