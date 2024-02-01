export enum GtToursRouteParam {
  AdventuresId = 'adventuresId',
  DestinationId = 'destinationId',
  CulturalActivityId = 'culturalActivityId',
  AccommodationId = 'accommodationId',
  SafariId = 'safariId',
}
export enum GtToursRoute {
  Home = '/',
  AboutUs = '/about-us',
  Service = '/service',
  Safaris = '/safaris',
  SafariDetails = '/safari/:safariId',
  Destinations = '/destinations',
  DestinationDetails = '/destinations/:destinationId',
  Accommodation = '/accommodation-activities',
  AccommodationDetails = '/accommodation-activities/accommodationId',
  CulturalActivity = '/culturalActivity',
  CulturalActivityDetails = '/cultural-activity/:culturalActivityId',
  Adventures = '/adventures',
  AdventuresDetails = '/adventure/:adventuresId',
  Contact = '/contact',
  NotFound = '/404',
}
