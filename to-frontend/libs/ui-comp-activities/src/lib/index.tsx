import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCarSide,
  faMountain,
  faEye,
  faBinoculars,
  faWalking,
  faLandmark,
  faBicycle,
  faEyeSlash,
  faFish,
  faHippo,
  faHorse,
  faMuseum,
  faTree,
  faPlaceOfWorship,
  faHeart,
  faCity,
  faLandmarkAlt,
  faSwimmingPool,
  faShip,
  faUmbrellaBeach,
  faQuestionCircle,
  faUtensils,
  faPepperHot,
} from '@fortawesome/free-solid-svg-icons';
import { GtActivities } from '@collo/ui-persistance';

export function getActivityIcon(activity: GtActivities): IconDefinition {
  switch (activity) {
    case GtActivities['Game Drives']:
      return faCarSide;
    case GtActivities['Climbing / Trekking']:
      return faMountain;
    case GtActivities['Great Migration']:
      return faEye;
    case GtActivities['Bird Watching']:
      return faBinoculars;
    case GtActivities['Walking / Hiking']:
      return faWalking;
    case GtActivities['Cultural Visits']:
      return faLandmark;
    case GtActivities['Beach Relaxation']:
      return faUmbrellaBeach;
    case GtActivities['Snorkeling / Swimming']:
      return faSwimmingPool;
    case GtActivities['Canoeing / Kayaking']:
      return faSwimmingPool;
    case GtActivities['Balloon Safari']:
      return faSwimmingPool;
    case GtActivities.Biking:
      return faBicycle;
    case GtActivities['Night Game Drives']:
      return faEyeSlash;
    case GtActivities.Waterfalls:
      return faSwimmingPool;
    case GtActivities['Historical Visits']:
      return faLandmarkAlt;
    case GtActivities['Rock Climbing']:
      return faMountain;
    case GtActivities['Caving / Caves']:
      return faSwimmingPool;
    case GtActivities['Rock Art / Cave Painting']:
      return faSwimmingPool;
    case GtActivities['Whale Watching']:
      return faEye;
    case GtActivities['Turtle Hatching']:
      return faSwimmingPool;
    case GtActivities['Dolphin Watching']:
      return faFish;
    case GtActivities['Giant Tortoise Watching']:
      return faHippo;
    case GtActivities['Chimpanzee Watching']:
      return faSwimmingPool;
    case GtActivities['Scuba Diving']:
      return faSwimmingPool;
    case GtActivities['Canopy Walkway']:
      return faTree;
    case GtActivities['Spice Farms']:
      return faPepperHot;
    case GtActivities['Picnicking']:
      return faUtensils;
    case GtActivities['Dhow Cruise']:
      return faShip;
    case GtActivities['City Tours']:
      return faCity;
    case GtActivities['Fishing / Sport Fishing']:
      return faSwimmingPool;
    case GtActivities['Camel / Horse Riding']:
      return faHorse;
    case GtActivities['Museum / Monument']:
      return faMuseum;
    case GtActivities['Forest Walk']:
      return faTree;
    case GtActivities['Worship Site']:
      return faPlaceOfWorship;
    case GtActivities['Wedding / Honeymoon']:
      return faHeart;
    default:
      return faQuestionCircle;
  }
}
