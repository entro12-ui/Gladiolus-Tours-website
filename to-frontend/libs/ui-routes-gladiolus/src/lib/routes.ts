export enum GtToursRouteParam {
  AdventuresId = 'adventuresId',
  DestinationId = 'destinationId',
  CulturalActivityId = 'culturalActivityId',
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
  CulturalActivity = '/culturalActivity',
  CulturalActivityDetails = '/cultural-activity/:culturalActivityId',
  Adventures = '/adventures',
  AdventuresDetails = '/adventure/:adventuresId',
  Contact = '/contact',
  NotFound = '/404',
}
