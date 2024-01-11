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

export const LazyAccommodationsPage = loadable(
  () => import('@collo/ui-page-accommodations'),
  {
    fallback: <RouterLazyFallback />,
  }
);

export const LazyServicePage = loadable(
  () => import('@collo/ui-page-services'),
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

export const LazyItineraryDetailsPage = loadable(
  () => import('@collo/ui-page-itinerary'),
  { fallback: <RouterLazyFallback /> }
);
