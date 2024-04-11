export enum GtToursRouteParam {
  AdventuresId = 'adventuresId',
  DestinationId = 'destinationId',
  CulturalActivityId = 'culturalActivityId',
  SafariId = 'safariId',
  ParkId = 'parkId',
}
export enum GtToursRoute {
  Home = '/',
  AboutUs = '/about-us',
  Safaris = '/safaris',
  SafariDetails = '/safari/:safariId',
  Adventures = '/adventures',
  AdventuresDetails = '/adventure/:adventuresId',
  Destinations = '/destinations',
  DestinationDetails = '/destinations/:destinationId',
  Contact = '/contact',
  NotFound = '/404',
}
