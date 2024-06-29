import { GtActivities } from './GtActivities';
import Mount_Kilimanjaro from './images/Itinerary/Mountain/Mount_Kilimanjaro.webp';
import Kilimanjaro_Machame_Route_01 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Machame_Route_Mountain_Landscape.webp';
import Kilimanjaro_Machame_Route_02 from './images/Itinerary/Mountain/Kilimanjaro_Climb_Machame_Route_01.webp';
import Kilimanjaro_Machame_Route_03 from './images/Itinerary/Mountain/Kilimanjaro_Climb_Machame_Route_02.webp';
import Mount_Kilimanjaro_Glacier_02 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Glacier_of_Southern_Ice_Field_02.webp';
import Mount_Kilimanjaro_Glacier_03 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Glacier_of_Southern_Ice_Field_03.webp';
import Mount_Kilimanjaro_3a from './images/Itinerary/Mountain/Kilimanjaro_Climb_3a.webp';
import Mount_Kilimanjaro_Climb_4a from './images/Itinerary/Mountain/Kilimanjaro_Climb_4a.webp';
import Mount_Kilimanjaro_Climb_4b from './images/Itinerary/Mountain/Kilimanjaro_Climb_4b.webp';
import Mount_Kilimanjaro_Climb_09 from './images/Itinerary/Mountain/Kilimanjaro_Climb_Camping_09.webp';
import Lemosho_Route_01 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Londorosi_Lemosho_01.webp';
import Lemosho_Route_02 from './images/Itinerary/Mountain/Mount_Kilimanjaro_View_from_Lemosho_Route_02.webp';
import Shira_Plateau_Kilimanjaro_01 from './images/Itinerary/Mountain/Shira_Plateau_Kilimanjaro_01.webp';
import Shira_Plateau_Kilimanjaro_02 from './images/Itinerary/Mountain/Shira_Plateau_Kilimanjaro_02.webp';
import Shira_Plateau_Kilimanjaro_03 from './images/Itinerary/Mountain/Shira_Plateau_Kilimanjaro_03.webp';
import Shira_Plateau_Kilimanjaro_04 from './images/Itinerary/Mountain/Shira_Plateau_Kilimanjaro_04.webp';
import Mount_Kilimanjaro_Mountain_Landscape_01 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Mountain_Landscape_01.webp';
import Mount_Kilimanjaro_Mountain_Landscape_02 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Mountain_Landscape_02.webp';
import Mount_Kilimanjaro_Summit from './images/Itinerary/Mountain/Mount_Kilimanjaro_Mountain_Summit.webp';
import Kilimanjaro_Climb_Camping from './images/Itinerary/Mountain/Kilimanjaro_Climb_Camping.webp';
import Kilimanjaro_Climb_Rongai_Route_01 from './images/Itinerary/Mountain/Kilimanjaro_Climb_Rongai_Route_01.webp';
import Kilimanjaro_Climb_Marangu_Gate_01 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Marangu-Route_the_Saddle_01.webp';
import Kilimanjaro_Climb_Marangu_Gate_03 from './images/Itinerary/Mountain/Kilimanjaro_Climb_Marangu_Gate_03.webp';
import Kilimanjaro_Climb_Horombo_Huts_06 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Horombo_Huts_06.webp';
import Kilimanjaro_Climb_Horombo_Huts_11 from './images/Itinerary/Mountain/Mount_Kilimanjaro_Horombo_Huts_11.webp';
import Ngorongoro_Crater_Black_Rhinos_NCA_01 from './images/Itinerary/adventure/Ngorongoro_Crater_Black_Rhinos_NCA_01.webp';
import Ngorongoro_Crater_Black_Rhinos_NCA_02 from './images/Itinerary/adventure/Ngorongoro_Crater_Black_Rhinos_NCA_02.webp';
import Ngorongoro_Crater_Elephant_NCA from './images/Itinerary/adventure/Ngorongoro_Crater_Elephant_NCA.webp';
import Ngorongoro_Crater_Floor_NCA from './images/Itinerary/adventure/Ngorongoro_Crater_Floor_NCA.webp';
import Ngorongoro_Crater_Wildlife_24 from './images/Itinerary/adventure/Ngorongoro_Crater_Wildlife_24.webp';
import Ngorongoro_Crater_View_NCA from './images/Itinerary/adventure/Ngorongoro_Crater_View_NCA.webp';
import Ngorongoro_Crater_Hyenas_NCA from './images/Itinerary/adventure/Ngorongoro_Crater_Hyenas_NCA.webp';
import Ngorongoro_Crater_Swamps_NCA from './images/Itinerary/adventure/Ngorongoro_Crater_Swamps_NCA.webp';
import Ngorongoro_Crater_Flamingos_10_NCA from './images/Itinerary/adventure/Ngorongoro_Crater_Flamingos_10_NCA.webp';
import Ngorongoro_Crater_Lion_20 from './images/Itinerary/adventure/Ngorongoro_Crater_Lion_20.webp';
import Ngorongoro_Crater_Ostrich_20 from './images/Itinerary/adventure/Ngorongoro_Crater_Ostrich_20.webp';
import Serengeti_Giraffe_8085 from './images/Itinerary/adventure/Serengeti_Girafe_8085.webp';
import Serengeti_National_Park_Lions_22 from './images/Itinerary/adventure/Serengeti_National_Park_Lions_22.webp';
import Serengeti_Wildebeests_03 from './images/Itinerary/adventure/Serengeti_Wildebeests_03.webp';
import Serengeti_National_Park_Hyenas_22 from './images/Itinerary/adventure/Serengeti_National_Park_Hyenas_22.webp';
import Serengeti_National_Park_Leopard_24 from './images/Itinerary/adventure/Serengeti_National_Park_Leopard_24.webp';
import Tarangire_National_Park_Giraffe_20 from './images/Itinerary/adventure/Tarangire_National_Park_Giraffe_20.webp';
import Lake_Manyara_National_Park_Giraffe_23 from './images/Itinerary/adventure/Lake_Manyara_National_Park_Giraffes_23.webp';

interface IItinerary {
  day: number;
  title: string;
  description: string;
  Accommodation: string;
}

export enum GtItineraryCategory {
  'Adventure Safaris',
  'Mountain Climbing',
  'Beach Holiday',
  'Walking Safaris',
  'Tourist Attraction',
}

export interface IGtAdventures {
  id: number;
  title: string;
  overview: string;
  category: GtItineraryCategory;
  code: string;
  duration: string;
  activities: GtActivities[];
  image: string;
  carouselImage: string[];
  status: boolean;
  itinerary: IItinerary[];
}

export type GladiolusToursAdventure = IGtAdventures[];

export const GtAdventures: GladiolusToursAdventure = [
  {
    id: 1,
    title: '9 Days Kilimanjaro Trek via Northern Route',
    overview:
      'The Northern Circuit route is the newest route up Mount Kilimanjaro and arguably the best. That’s because it’s a combination of all of the best elements of the other routes with beautiful scenery, plenty of solitude, a healthy challenge, and the potential to spot wildlife, this is definitely the route for you.\n' +
      '\n' +
      'The Northern Circuit route follows the same route as Lemosho route for the first few days, but rather than sticking to the south side of Kibo, it turns to the little-used northern trails instead. The route is also has the most acclimatization time and the highest summit success rate.',
    code: 'GT001',
    duration: '',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Kilimanjaro_Machame_Route_01,
    carouselImage: [
      Mount_Kilimanjaro,
      Kilimanjaro_Machame_Route_02,
      Kilimanjaro_Machame_Route_03,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha / Moshi Town – Londorossi Gate (2210 m) – Mti Mkubwa Camp (Big Tree Camp) (2780 m)',
        Accommodation: 'Mti Mkubwa Camp',
        description:
          'You will be picked up at your hotel at around 08:00am and transferred to the Lemosho (Londorossi) gate located on the western side of Kilimanjaro. After the registration process you will still start our climb steadily through the forests of the Lemosho glades to reach Big Tree camp where you will be spending the night.<br/><br/>' +
          '<b>Distance:</b> About 6 km | <b>Approx. time:</b> 3-4 hours | <b>Habitat:</b> Montane forest',
      },
      {
        day: 3,
        title:
          'Mti Mkubwa Camp (Big Tree Camp) (2780 m) – Shira 1 Camp (3500 m)',
        Accommodation: 'Shira 1 Camp',
        description:
          'Trek across a plateau of grassy moorland and heather scattered with volcanic rock formations. Our destination for today is the Shira 1 Camp from where there are often views of Kibo Peak floating on the clouds. This section has reasonable amount of altitude and parts of the route are fairly steep. Dinner and overnight at the Camp.<br/><br/>' +
          '<b>Distance:</b> About 5 km | <b>Hiking time:</b> 4-5 hours | <b>Habitat:</b> Meadows',
      },
      {
        day: 4,
        title: 'Shira 1 Camp (3500 m) – Shira 2 Camp (3845 m)',
        Accommodation: 'Shira 2 Camp',
        description:
          'This section you will get the chance to view the Northern Ice fields from the western side of the mountain with some unusual views of Kibo. A steady climb across the moorland of the Shira Plateau will help with acclimatization and we enjoy great panoramic views to destination Shira 2 Camp. In the afternoon you will take an acclimatization walk then head back to camp for dinner and overnight.<br/><br/>' +
          '<b>Distance:</b> About 7 km | <b>Hiking time:</b> 3-4 hours | <b>Habitat:</b> Moorland',
      },
      {
        day: 5,
        title:
          'Shira Camp 2 (3845 m) – Lava Tower (4630 m) – Moir Hut (4200 m)',
        Accommodation: 'Moir Hut',
        description:
          'The fifth day of this route will take you east into the High Alpine desert zone. Here the Lemosho Route connects with the popular Machame Route before you leave for a more secluded trail to Lava Tower. This part of your journey involves gradual exposure to much higher altitudes, consolidating your acclimatization process. The end of the day sees you heading towards the Moir Camp (4,200 m), situated behind the magnificent Lent Hills for Dinner and overnight.<br/><br/>' +
          '<b>Distance:</b> About 14 km | <b>Hiking time:</b> 5-7 hours | <b>Habitat:</b> Alpine Desert',
      },
      {
        day: 6,
        title: 'Moir Hut (4200 m) – Buffalo Camp (4020 m)',
        Accommodation: 'Buffalo Camp',
        description:
          'After breakfast, gather your gear and climb out of the Moir Valley, a short detour sees you reach the summit of Lent Hills to admire the views before rejoining the Kilimanjaro Northern Circuit trail. Journey along rolling terrain that incline and decline, taking you around the northern slopes of Kibo before reaching Buffalo Camp for Dinner and overnight.<br/><br/>' +
          '<b>Distance:</b> About 12 km | <b>Hiking time:</b> 5-7 hours | <b>Habitat:</b> Alpine Desert\n',
      },
      {
        day: 7,
        title: 'Buffalo Camp (4020 m) – Third Cave (3870 m)',
        Accommodation: 'Third Cave',
        description:
          'Your Kilimanjaro Northern Circuit adventure continues with a revitalizing morning climbing up to the top of ‘Buffalo Ridge’. After stopping for lunch, you’ll continue eastwards through High and Low Alpine scenery passing increasingly sparse and rare vegetation. The day’s journey ends after circumventing the northern slopes to reach the Rongai Third Cave Camp. By this stage of the trek, you’ll be fully acclimatized to the high altitude.<br/><br/>' +
          '<b>Distance:</b> About 8 km | <b>Hiking time:</b> 5-7 hours | <b>Habitat:</b> Alpine Desert\n',
      },
      {
        day: 8,
        title: 'Third Cave Camp (3870 m) – School Hut Camp (4715 m)',
        Accommodation: 'School Hut Camp',
        description:
          'This is the final leg of the trip before your last ascent up to the peak of Mount Kilimanjaro. The highlight of the day will be the trek up and over The Saddle, a lunar landscape that lies between the Kibo and Mawenzi Peaks. You’ll then head southwest to School Hut (4,800 m) to rest in preparations for the summit, dinner and overnight.<br/><br/>' +
          '<b>Distance:</b> About 6 km | <b>Hiking time:</b> 4-6 hours | <b>Habitat:</b> Alpine desert',
      },
      {
        day: 9,
        title:
          'School Hut (4715 m) – Uhuru Peak (5895 m) – Millennium Camp (3790 m)',
        Accommodation: 'Millennium Camp',
        description:
          'Get off to an early start you will travel through the darkness towards Kilimanjaro’s main crater rim at Gilman’s Point. There you’ll rest before the final push, passing spectacular ice cliffs and glaciers. You’ll arrive at the Mount Kilimanjaro summit just in time to catch the sunrise, the most spectacular of nature’s backdrops. Share the sense of exhilaration and accomplishment with your guides and support team. Soak in the beauty of the view before retracing your steps down the crater rim. Then you’ll descend on the Mweka Route towards the last stop on your journey – Millennium Camp.<br/><br/>' +
          '<b>Total Distance:</b> About 19 km | <b>Hiking/Descending time:</b> 11–15 hours | <b>Habitat:</b> Arctic, Montane forest',
      },
      {
        day: 10,
        title:
          'Millennium Camp (3790 m) – Mweka Gate (1630 m) – Moshi / Arusha Town',
        Accommodation: 'Mweka Gate',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect or summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha for dinner and overnight.<br/><br/>' +
          '<b>Distance:</b> About 12.1 km | <b>Hiking time:</b> 4-5 hours | <b>Habitat:</b> Montane forest',
      },
      {
        day: 11,
        title: 'Departure Day / Go on a Safari',
        Accommodation: 'Hotel',
        description: `
        After breakfast, depart for your next destination, which is optional or can be arranged:<br/><br/>
        <ul>
            <li>Safari to the National Parks</li>
            <li>Transfer to Kilimanjaro International Airport or Arusha Airport</li>
            <li>Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar</li>
            <li>Nairobi via border town Namanga</li>
        </ul>
        `,
      },
    ],
  },

  {
    id: 2,
    title: '5-6 Days Kilimanjaro Trek via Marangu Route',
    overview:
      'The Marangu Route nick named (Coca Cola Route)is the oldest and most well established trekking route on Mount Kilimanjaro, and it remains extremely popular compare to others. This path provides trekkers with the classic Kilimanjaro climbing experience, offering sweeping views and a wonderful hiking adventure all the way to the summit of Uhuru Peak. That said, it also has some unique aspects that set it apart from any of the other routes as well, giving Marangu route a character and feeling that is entirely its own. A 6 day variant provides good time for acclimatization due to a rest day at Horombo Hut.',
    code: 'GT002',
    duration: '6 Days / 5 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Kilimanjaro_Climb_Marangu_Gate_01,
    carouselImage: [
      Kilimanjaro_Climb_Horombo_Huts_06,
      Kilimanjaro_Climb_Marangu_Gate_03,
      Kilimanjaro_Climb_Camping,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day - Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Arrive at Kilimanjaro International Airport to be picked up, taken to your hotel for overnight stay. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha / Moshi Town – Marangu Gate (1980 m) - Mandara Hut (2700 m)',
        Accommodation: 'Mandara Hut',
        description:
          'Leave Moshi by car for Marangu Gate for the necessary formalities before beginning our trek. The hiking trail begins by ascending a beautiful, tropical rain forest. At the upper edge of the forest line, we have the opportunity to see blue monkeys. The trail then widens to expose beautiful hillsides until we reach Mandara Hut for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 12 km | Hiking time: 3-5 hours | Habitat: Montane forest\n',
      },
      {
        day: 3,
        title: 'Mandara Hut (2700 m) – Horombo Hut (3720 m)',
        Accommodation: 'Horombo Hut',
        description:
          'After breakfast, follow the ascending path through the alpine – meadow. The altitude begins to change and slowdown your pace while enjoying the flora and the view of Mawenzi and Kibo peaks. Arrive at the Horombo Hut for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 12 km | Hiking time: 6-8 hours | Habitat: Moorland\n',
      },
      {
        day: 4,
        title:
          'Horombo Hut (3720 m) – Acclimatization trek to Zebra Rocks (4020 m) [OPTIONAL EXTRA DAY]',
        Accommodation: 'Horombo Hut',
        description:
          'This is an extra day meant for acclimatization and can be spent day hiking on Mawenzi Ridge. The unique landscape offers motivating views of Kibo and Mawenzi. After spending a few moments exploring the area we head back to Horombo Hut.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 2-3 hours | Habitat: Moorland\n' +
          '\n' +
          'Mawenzi Ridge (4020 m) and back Horombo Hut (3720 m)\n' +
          'Distance: About 5 km | Hiking time: 1-2 hours | Habitat: Moorland \n',
      },
      {
        day: 5,
        title: 'Horombo Hut (3720 m) – Kibo Hut (4700 m)',
        Accommodation: 'Kibo Hut',
        description:
          'After breakfast, resume the climb, the landscape becomes rugged and rocky. Lobelias begin to appear then cross the lunar desert of the "Saddle" between Mawenzi and Kibo. Continue to Kibo hut for dinner and preparations for the summit.\n' +
          '\n' +
          'Distance: About 10 km | Hiking time: 6-8 hours | Habitat: Alpine desert \n',
      },
      {
        day: 6,
        title: 'Kibo hut (4700 m) – Uhuru Peak (5895 m) - Horombo Hut (3720 m)',
        Accommodation: 'Horombo Hut',
        description:
          'Summit Attempt!!\n' +
          "The beginning of the last ascent is made in the wee hours of the morning while the scree is still frozen. This is the most mentally and physically challenging portion of the trek. Climb the very steep part of the route to GILMANS POINT (likely to see coming over Mawenzi Peak). UHURU PEAK is reached within an hour's walk along the crater rim. (19,344 ft). Start the walk along the craters rim. (19,344 ft). Start the descent to Horombo hut for overnight.\n" +
          '\n' +
          'Distance: 6 km ascent + 16 km descent | Hiking time: 6-8 hours to Uhuru | Descend time: 4-5 hours to Horombo | Habitat: Stone scree and ice-capped summit\n',
      },
      {
        day: 7,
        title: 'Horombo Hut (3720 m) – Marangu Gate (1980 m) – Moshi/Arusha',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Marangu Gate. Here we will collect our summit certificates, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha to your hotel for dinner and overnight.\n' +
          '\n' +
          'Distance: About 20 km | Descend time: 5-7 hours | Habitat: Moorland, Montane forest',
      },
      {
        day: 8,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 3,
    title: '5 Days Kilimanjaro Trek via Umbwe Route',
    overview:
      'The Umbwe route is short, steep and direct route and its considered to be very difficult and challenging way up Mount Kilimanjaro. Due to the quick ascent, Umbwe does not provide the necessary stages for altitude acclimatization. Although the traffic on this route is very low, the chances of success are also low. The route is offered at a minimum of five days, though six days is recommended when attempting this route. The Umbwe route should only be attempted by those who are very strong hikers and are confident in their ability to acclimatize.\n',
    code: 'GT003',
    duration: '5 Days / 4 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Mount_Kilimanjaro_Climb_4a,
    carouselImage: [
      Mount_Kilimanjaro_Climb_4b,
      Lemosho_Route_01,
      Mount_Kilimanjaro_Climb_09,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha /Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi / Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title: 'Arusha /Moshi – Umbwe Gate (1800 m) – Umbwe Cave Camp (2850 m)',
        Accommodation: 'Umbwe Cave-Camp',
        description:
          'From Umbwe Gate you ascend through forestry track before it narrows and steepness to climb a ridge between Lonzo and Umbwe Rivers. This is the steepest part of the entire trek. Eventually after hours of this exhausting exercise, and again in altitude of 1050 approximately, you reach a rocky overhang. This is Umbwe Cave a popular first night Campsite with plenty of water sources available.\n' +
          '\n' +
          'The day begins with a 50 minute drive to Machame Gate where registration formalities will be completed. We then transfer through villages and coffee and banana plantations to Umbwe Gate. The trail ascends sharply on a forestry track which winds up the dense rain forest. The path narrows and steepens as we climb the ridge between two rivers surrounded by huge trees. Umbwe Camp is perched between trees and thick undergrowth.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 5-6 hours | Habitat: Montane forest\n',
      },
      {
        day: 3,
        title: 'Umbwe Cave Camp (2850 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'After leaving the forest, continue through open moorlands until reaching Barranco Camp. Barranco is generally regarded as the most scenic campsite on the Umbwe Trail as it’s surrounded by giant senecios and lobelias. As Barranco is in a valley, the sun rises later than at the other camps. Dinner and overnight at Barranco camp.\n' +
          '\n' +
          'Distance: About 6 km | Hiking time: 5-7 hours | Habitat: Montane forest, Moorland\n',
      },
      {
        day: 4,
        title: 'Barranco Camp (3950 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'We starts by descending into the start of the Great Barranco, a huge ravine. We then exit steeply, up the Great Barranco Wall, which divides us from the southeastern slopes of Kibo. It’s a climb over rock, not technical but long and tiring. Passing underneath the Heim and Kersten glaciers, we head towards the Karanga valley. From here we have a steep climb up from Karanga valley to \n' +
          '\n' +
          'walk to Barafu camp at 4640 m. The climb will take us across desolate scree slopes with no vegetation around us at all. It’s a tough steep walk made more difficult by the altitude. On arriving at camp we eat and spend the afternoon resting as we prepare for a long night and day ahead. It is important to keep hydrated and warm. We have an early dinner and then try to get some sleep as we will be getting up at between 11pm and 12pm to start the climb to the summit. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 8 km | Hiking time: 6-8 hours | Habitat: Alpine desert\n',
      },
      {
        day: 5,
        title:
          'Barafu Camp (4640 m) – Uhuru Peak (5895 m) – Mweka Camp (3100 m)',
        Accommodation: 'Mweka Camp',
        description:
          'We start off at around midnight, and walk steeply upwards to the summit glaciers. We will be climbing scree for 4 to 5 hours but gain incredible height over a short distance. The views are spectacular. We should be on the crater rim at Stella Point (5739 m) as the first rays of the sun hit us. Spectacular ice cliffs within the crater surround us and the views to jagged Mawenzi peak and beyond are breathtaking. Another hour’s walking takes us to the summit, Uhuru Peak (5895 m). We begin our descent by returning to Stella Point and then descending on scree slope and track back to Barafu Camp for breakfast, before finally heading down to Mweka Camp for a long well-earned rest. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 13.4 km | Hiking time: 8–12 hours | Habitat: Arctic, Montane forest\n',
      },
      {
        day: 6,
        title: 'Mweka Camp (3100 m) – Mweka Gate (1630 m) – Moshi /Arusha Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect or summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha for dinner and overnight.\n' +
          '\n' +
          'Distance: About 12.1 km | Hiking time: 4-5 hours | Habitat: Montane forest',
      },
      {
        day: 7,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 4,
    title: '6 Days Kilimanjaro Trek via Rongai Route',
    overview:
      'The Rongai route is the only route that approaches Kilimanjaro from the north, close to the Kenyan border, this route still experiences low crowds. Rongai has a more gradual slope than the other routes. It is the preferred route for those looking for an alternative to the popular Marangu route, for those who would like a more remote hike, and for those who are climbing during the rainy season (the north side receives less precipitation).\n' +
      '\n' +
      'Rongai is a moderately difficult route, and is highly recommended, especially for those with less backpacking experience. Although the scenery is not as varied as the western routes, Rongai makes up for this by passing through true wilderness areas for nearly the entire way. Descent is made via the Marangu route. Rongai route can be done on a 6 or 7 Days Kilimanjaro Climb. The 6 day variation does not have an acclimatization day on day four at Mawenzi Turn Hut. ',
    code: 'GT004',
    duration: '6 Days / 5 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Kilimanjaro_Climb_Rongai_Route_01,
    carouselImage: [
      Mount_Kilimanjaro_Mountain_Landscape_01,
      Mount_Kilimanjaro_Mountain_Landscape_02,
      Mount_Kilimanjaro_3a,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha / Moshi Town – Nalemoru Gate (2020 m) – Simba Camp (2625 m)',
        Accommodation: 'Simba Camp',
        description:
          'After breakfast you will be driven around Mount Kilimanjaro to its north-western side and after 3 to 4 hours, you will arrive at the Nalemoru Gate. After the registration process your adventure begins. The path runs alongside mountain farmers’ fields and pine forests before it enters the sparse mountain forest zone, where black and white colobus monkeys can often be seen. After an approximate 3 to 4 hour hike, you will reach the Simba Camp where you will spend the night.\n' +
          '\n' +
          'Distance: About 8 km | Hiking time: 3-4 hours | Habitat: Montane forest \n',
      },
      {
        day: 3,
        title: 'Simba Camp (2625 m) – Kikelewa Camp (3630 m)',
        Accommodation: 'Kikelewa Camp',
        description:
          'From Simba camp you’ll trek through the heather and moorland zones and the views of Mawenzi and the vast Kenyan steppes are nothing short of grand. You will have lunch at the Second Cave (3,450 m) and after a short break, you will cross the undulating terrain to Kikelewa Camp. This camp boasts with incredible views and after a strenuous day’s climb, you can relax and take in its peaceful ambience.\n' +
          '\n' +
          'Distance: About 10 km | Hiking time: 5-6 hours | Habitat: Moorland\n',
      },
      {
        day: 4,
        title: 'Kikelewa Camp (3630 m) – Mawenzi Tarn Hut (4310 m)',
        Accommodation: 'Mawenzi Tarn Hut',
        description:
          'The typical senescent vegetation will soon disappear and the scenery will become more barren with the occasional rock formations. In good weather you can enjoy the breath-taking views of the Kibo and Mawenzi summits as well as Kenya’s savannah grasslands. After passing a few more rock formations, you will arrive at the Mawenzi Hut. For many mountain climbers, it is the most atmospheric camp on the mountain.\n' +
          '\n' +
          'Distance: About 6 km | Hiking time: 4-5 hours | Habitat: Moorland\n',
      },
      {
        day: 5,
        title: 'Mawenzi Tarn Hut (4310 m) – Kibo Hut (4715 m)',
        Accommodation: 'Kibo Hut',
        description:
          'On a relatively easy path, today’s leg takes you over the Kibo Saddle. A lack of vegetation is characteristic for the landscape here as only a few types of grass and other plant species can survive in this dry area and thin air. Just before today’s destination is reached, one last rock passage has to be conquered. Finally you will arrive at the School Hut, where you can relax and mentally prepare yourself for tomorrow’s summit stage.\n' +
          '\n' +
          'Distance: About 8 km | Hiking time: 5-6 hours | Habitat: Alpine desert\n',
      },
      {
        day: 6,
        title: 'Kibo Hut (4715 m) – Uhuru Peak (5895 m) – Horombo Hut (3720 m)',
        Accommodation: 'Horombo Hut',
        description:
          'The climb begins at around 00:00 h and after a 5 to 7 hour walk on frozen volcanic ash, you will reach Gillman’s Point (5,715 m) on the crater’s edge. The sun rays will warm you while you trek for another 1 to 2 hours until you reach Uhuru Peak and finally stand on “Africa’s Roof”. The descent on the now thawed lava ash runs almost along the same route and you will arrive at the School Hut in the late morning. A warm meal will be served and after a well-deserved break, the descent continues to the Horombo Hut.\n' +
          '\n' +
          'Distance: About 21 km | Hiking/Descending time: 12 - 14 hours | Habitat: Artic, Alpine desert\n',
      },
      {
        day: 7,
        title:
          'Horombo Hut (3720 m) – Marangu Gate (1860 m) – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest passing Mandara Hut to Marangu Gate. Here we will collect our summit certificates, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha to your hotel for dinner and overnight.\n' +
          '\n' +
          'Distance: About 18 km | Descending time: 5-6 hours | Habitat: Moorland, Rain Forest\n',
      },
      {
        day: 8,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 5,
    title: '6 Days Kilimanjaro Trek via Machame Route',
    overview:
      'The most popular route to the summit of Mount Kilimanjaro these days is Machame route, and for good reason. Forested traverse to Barafu. This trail offers stunning views, a reasonable challenge, and plenty of time to acclimate, making it a good choice for those who have a bit of extra time in their schedule.',
    code: 'GT005',
    duration: '6 Days / 5 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Kilimanjaro_Machame_Route_02,
    carouselImage: [Kilimanjaro_Machame_Route_03, Kilimanjaro_Machame_Route_02],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha/Moshi Town – Machame Gate (1800 m) – Machame Camp (3010 m)',
        Accommodation: 'Machame Camp',
        description:
          'Transfer from your hotel to the Kilimanjaro National Park gate at Machame. After registration and preparations we start our trek into the lush rainforest. There is the possibility of spotting some Black-and-White Colobus monkeys on the way to Machame camp for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 5-6 hours | Habitat: Montane forest\n',
      },
      {
        day: 3,
        title: 'Machame Camp (3010 m) – Shira Camp (3845 m) ',
        Accommodation: 'Shira Camp',
        description:
          'After a short forest hike we continue a steep ridge passing through open moorlands crossing a large gorge to reach Shira Camp, beautiful views of the Shira Plateau and sometimes Mount Meru. Overnight stay at the camp\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 4-6 hours | Habitat: Moorland\n',
      },
      {
        day: 4,
        title:
          'Shira Camp (3845 m) – Lava Tower (4630 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'We will take an acclimatization hike to Lava Tower for lunch, before descending to the Barranco valley. For those who have energy, and if time and weather permit, there’s the possibility to scramble up the Lava Tower itself. The scenery is amazing today, passing through different zones of the mountain before dropping again to reach Barranco camp (This camp is considered by many to be the most beautiful and scenic on Kilimanjaro) for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 11 km | Hiking/Descending time: 6-8 hours | Habitat: Moorland, Semi desert\n',
      },
      {
        day: 5,
        title: 'Barranco Camp (3950 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'The path climbs steep out of the Barranco valley and crosses the Karanga valley, then turns North to reach Barafu Hut. Overnight stay at Barafu camp.\n' +
          '\n' +
          'Distance: About 11 km | Hiking time: 8-10 hours | Habitat: Alpine desert\n',
      },
      {
        day: 6,
        title:
          'Barafu Camp (4640 m) – Uhuru Peak (5895 m) – Mweka Camp (3080 m)',
        Accommodation: 'Mweka Camp',
        description:
          'Summit Attempt \n' +
          'Along day with an early start to reach the crater, ream at the Stella point in time for sunrise, then to Uhuru peak, the highest point in Africa. After celebrating with photos at the summit we descend to Mweka Camp (Mweka Camp is a descent-only campsite from the Shira, Lemosho, Machame and Umbwe Routes). Overnight, stay at the camp.\n' +
          '\n' +
          'Hiking time: 8 hours to reach Uhuru Peak | Descend time: 7/8 hours to descend to Mweka Camp | Distance: About 6 km ascent + 15 km descent | Habitat: Stone scree and ice-capped summit',
      },
      {
        day: 7,
        title:
          'Mweka Camp (3080 m) – Mweka Gate (1630 m) – Moshi / Arusha Town ',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect our summit certificates, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha to your hotel for dinner and overnight.\n' +
          '\n' +
          'Hiking time: 3-5 hours | Habitat: Montane forest\n',
      },
      {
        day: 8,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 6,
    title: '6 Days Kilimanjaro Trek via Umbwe Route',
    overview:
      'The Umbwe route is short, steep and direct route and its considered to be very difficult and challenging way up Mount Kilimanjaro. Due to the quick ascent, Umbwe does not provide the necessary stages for altitude acclimatization. Although the traffic on this route is very low, the chances of success are also low. The route is offered at a minimum of five days, though six days is recommended when attempting this route. The Umbwe route should only be attempted by those who are very strong hikers and are confident in their ability to acclimatize.',
    code: 'GT006',
    duration: '',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Lemosho_Route_02,
    carouselImage: [Kilimanjaro_Climb_Rongai_Route_01, Lemosho_Route_01],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title: 'Arusha / Moshi – Umbwe Gate (1800 m) – Forest Camp (2850 m)',
        Accommodation: 'Forest Camp',
        description:
          'From Umbwe Gate you ascend through forestry track before it narrows and steepness to climb a ridge between Lonzo and Umbwe Rivers. This is the steepest part of the entire trek. Eventually after hours of this exhausting exercise, and again in altitude of 1050 approximately, you reach a rocky overhang. This is Umbwe Cave (2850m) a popular first night Campsite with plenty of water sources available.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 5-6 hours | Habitat: Montane forest',
      },
      {
        day: 3,
        title: 'Forest Camp (2850 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'After leaving the forest, continue through open moorlands until reaching Barranco Camp. Barranco is generally regarded as the most scenic campsite on the Umbwe Trail as it’s surrounded by giant senecios and lobelias. As Barranco is in a valley, the sun rises later than at the other camps. Dinner and overnight at the camp.\n' +
          '\n' +
          'Distance: About 6 km | Hiking time: 5-7 hours | Habitat: Montane forest, Moorland\n',
      },
      {
        day: 4,
        title: 'Barranco Camp (3950 m) – Karanga Camp (4035 m)',
        Accommodation: 'Karanga Camp',
        description:
          "We starts by descending into the start of the Great Barranco, a huge ravine. We then exit steeply, up the Great Barranco Wall, which divides us from the southeastern slopes of Kibo. It’s a climb over rock, not technical but long and tiring. Passing underneath the Heim and Kersten glaciers, we head towards the Karanga valley. From here we have a steep climb up from Karanga valley to our night's camp at Karanga camp, set at 3950 m. For those feeling strong we will go for a mid-afternoon acclimatization trek up to around 4200 m before descending back to camp for the night.\n" +
          '\n' +
          'Distance: About 5 km | Hiking time: 4-5 hours | Habitat: Moorland\n',
      },
      {
        day: 5,
        title: 'Karanga Camp (4035 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'After a good night’s rest and breakfast, we set off on walk to Barafu camp at 4640 m. The climb will take us across desolate scree slopes with no vegetation around us at all. It’s a tough steep walk made more difficult by the altitude. On arriving at camp we eat and spend the afternoon resting as we prepare for a long night and day ahead. It is important to keep hydrated and warm. We have an early dinner and then try to get some sleep as we will be getting up at between 11pm and 12pm to start the climb to the summit. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 3 km | Hiking time: 4-5 hours | Habitat: Alpine desert\n',
      },
      {
        day: 6,
        title:
          'Barafu Camp (4640 m) – Uhuru Peak (5895 m) – Mweka Camp (3100 m)',
        Accommodation: 'Mweka Camp',
        description:
          'We start off at around midnight, and walk steeply upwards to the summit glaciers. We will be climbing scree for 4 to 5 hours but gain incredible height over a short distance. The views are spectacular. We should be on the crater rim at Stella Point (5739 m) as the first rays of the sun hit us. Spectacular ice cliffs within the crater surround us and the views to jagged Mawenzi peak and beyond are breathtaking. Another hour’s walking takes us to the summit, Uhuru Peak (5895 m). We begin our descent by returning to Stella Point and then descending on scree slope and track back to Barafu Camp for breakfast, before finally heading down to Mweka Camp for a long well-earned rest. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 13.4 km | Hiking time: 8–12 hours | Habitat: Arctic, Montane forest\n',
      },
      {
        day: 7,
        title:
          'Mweka Camp (3100 m) – Mweka Gate (1630 m) – Moshi / Arusha Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect or summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha for dinner and overnight.\n' +
          '\n' +
          'Distance: About 12.1 km | Hiking time: 4-5 hours | Habitat: Montane forest',
      },
      {
        day: 8,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 7,
    title: '7 Days Kilimanjaro Trek via Shira Route',
    overview:
      "The Shira Route is a little used trail that begins near Shira Ridge. It is nearly identical to the Lemosho route. In fact, Shira was the original route and Lemosho is the improved variation. Although Shira is a varied and beautiful route, it is less favorable than its successor due to the relatively high altitude of Shira's starting point, which is accessed by vehicle. ",
    code: 'GT007',
    duration: '7 Days / 6 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Shira_Plateau_Kilimanjaro_01,
    carouselImage: [
      Shira_Plateau_Kilimanjaro_02,
      Shira_Plateau_Kilimanjaro_03,
      Shira_Plateau_Kilimanjaro_04,
      Shira_Plateau_Kilimanjaro_01,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day - Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. Mountain trek equipment check to make sure you have all the necessary gear and missing can be rented on this day.',
      },
      {
        day: 2,
        title: 'Arusha / Moshi Town – Shira Gate – Simba Camp (3597 m)',
        Accommodation: 'Simba Camp',
        description:
          'Trekking begins by exploring the grassy moorland and volcanic rock formations on the plateau as today is a fairly easy day to help with acclimatization. Then we take a scenic path to the Shira Cathedral, a huge buttress of rock surrounded by steep spires and pinnacles, before settling at Shira Camp.\n' +
          '\n' +
          'Distance: About 4 km | Hiking time: 1-2 hours | Habitat: Montane forest \n',
      },
      {
        day: 3,
        title: 'Simba Camp (3597 m) – Shira 2 Camp (3810 m)',
        Accommodation: 'Shira 2 Camp',
        description:
          'Today is a fairly easy day to help with acclimatization. We begin by exploring the grassy moorland and volcanic rock formations on the plateau. Then we take a scenic path to the Shira Cathedral, a huge buttress of rock surrounded by steep spires and pinnacles, before settling at Shira 2 Camp.\n' +
          '\n' +
          'Distance: About 6 km | Hiking time: 2 hours | Habitat: Moorland\n',
      },
      {
        day: 4,
        title:
          'Shira 2 Camp (3810 m) - Lava Tower (4630 m) – Barranco Camp (3976 m)',
        Accommodation: 'Barranco Camp',
        description:
          'Trekking continues to the east up a ridge and then head southeast towards the Lava Tower - a 300 ft tall volcanic rock formation. We descend down to Barranco Camp through the strange but beautiful Senecio Forest to an altitude of 4114 m. Although you begin and end the day at the same elevation, the time spent at higher altitude is very beneficial for acclimatization.\n' +
          '\n' +
          'Total Distance: About 10 km | Approx. time: Ascending 4-5 hrs + Descent 2-3 hrs | Habitat: Alpine Desert\n',
      },
      {
        day: 5,
        title: 'Barranco Camp (3976 m) – Karanga Camp (3995 m)',
        Accommodation: 'Karanga Camp',
        description:
          'Descend into a ravine to the base of the Great Barranco Wall. Then we climb the non-technical but steep, nearly 900 ft cliff. From the top of the Barranco Wall we cross a series of hills and valleys until we descend sharply into Karanga Valley. One more steep climb up leads us to Karanga Camp. This is a shorter day meant for acclimatization.\n' +
          '\n' +
          'Distance: About 4 km | Hiking time: 5-6 hours | Habitat: Alpine desert\n',
      },
      {
        day: 6,
        title: 'Karanga Camp (3995 m) – Barafu Camp (4673 m)',
        Accommodation: 'Barafu Camp',
        description:
          'We leave Karanga and hit the junction which connects with the Mweka Trail. We continue up to the rocky section to Barafu Hut. At this point, you have completed the Southern Circuit, which offers views of the summit from many different angles. Here we make camp, rest and enjoy an early dinner to prepare for the summit day. The two peaks of Mawenzi and Kibo are viewable from this position.\n' +
          '\n' +
          'Distance: About 4 km | Hiking time: 4-5 hours | Habitat: Artic, Alpine desert\n',
      },
      {
        day: 7,
        title:
          'Barafu Camp (4673 m) - Uhuru Peak (5895 m) – Mweka Camp (3068 m)',
        Accommodation: 'Mweka Camp',
        description:
          'On wee time we begin our push to the summit. This is the most mentally and physically challenging portion of the trek. The wind and cold at this elevation and time of day can be extreme. We ascend in the darkness for several hours while taking frequent, but short, breaks. Near Stella Point (5761 m), you will be rewarded with the most magnificent sunrise you are ever likely to see coming over Mawenzi Peak. Finally, we arrive at Uhuru Peak- the highest point on Mount Kilimanjaro and the continent of Africa.\n' +
          '\n' +
          'From the summit, we now make our descent continuing straight down to the Mweka Hut camp site, stopping at Barafu for lunch. The trail is very rocky and can be quite hard on the knees; trekking poles are helpful. Mweka Camp is situated in the upper forest and mist or rain can be expected in the late afternoon. Later in the evening, we enjoy our last dinner on the mountain and a well-earned sleep.\n' +
          '\n' +
          'Distance: About 5 km ascent + 12 km descent | Hiking time: 7/8 hours to reach Uhuru Peak | Descend time: 4/6 hours to descend to Mweka | Habitat: Stone scree and ice-capped summit, Rain Forest\n',
      },
      {
        day: 8,
        title:
          'Mweka Camp (3068 m) – Mweka Gate (1640 m) – Moshi / Arusha Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect or summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha for dinner and overnight.\n' +
          '\n' +
          'Distance: About 10 km | Hiking time: 3-4 hours | Habitat: Rain Forest\n',
      },
      {
        day: 9,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 8,
    title: '7 Days Kilimanjaro Trek via Rongai Route',
    overview:
      'The Rongai route is the only route that approaches Kilimanjaro from the north, close to the Kenyan border, this route still experiences low crowds. Rongai has a more gradual slope than the other routes. It is the preferred route for those looking for an alternative to the popular Marangu route, for those who would like a more remote hike, and for those who are climbing during the rainy season (the north side receives less precipitation).\n' +
      '\n' +
      'Rongai is a moderately difficult route, and is highly recommended, especially for those with less backpacking experience. Although the scenery is not as varied as the western routes, Rongai makes up for this by passing through true wilderness areas for nearly the entire way. Descent is made via the Marangu route. Rongai route can be done on a 6 or 7 Days Kilimanjaro Climb. The 6 day variation does not have an acclimatization day on day four at Mawenzi Turn Hut. ',
    code: 'GT008',
    duration: '7 Days / 6 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Kilimanjaro_Climb_Horombo_Huts_11,
    carouselImage: [
      Kilimanjaro_Climb_Rongai_Route_01,
      Kilimanjaro_Climb_Rongai_Route_01,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.\n',
      },
      {
        day: 2,
        title:
          'Arusha/Moshi Town – Nalemoru Gate (2020 m) – Simba Camp (2625 m)',
        Accommodation: 'Simba Camp',
        description:
          'After breakfast you will be driven around Mount Kilimanjaro to its north-western side and after 3 to 4 hours, you will arrive at the Nalemoru Gate. After the registration process your adventure begins. The path runs alongside mountain farmers’ fields and pine forests before it enters the sparse mountain forest zone, where black and white colobus monkeys can often be seen. After an approximate 3 to 4 hour hike, you will reach the Simba Camp where you will spend the night.\n' +
          '\n' +
          'Distance: About 8 km | Hiking time: 3-4 hours | Habitat: Montane forest \n',
      },
      {
        day: 3,
        title: 'Simba Camp (2625 m) – Second Cave Camp (3480 m)',
        Accommodation: 'Second Cave Camp',
        description:
          'From Simba camp you’ll trek through the heather and moorland zones and the views of Mawenzi and the vast Kenyan steppes are nothing short of grand. After lunch we leave the main trail and strike out and head southeast across the moorland on a smaller path towards the jagged peaks of Mawenzi to Second Cave Camp in a sheltered valley which is decorated with Giant Senecios for dinner and overnight.  \n' +
          '\n' +
          'Distance: About 4 km | Hiking time: 2-3 hours | Habitat: Moorland\n',
      },
      {
        day: 4,
        title: 'Second Cave Camp (3480 m) – Kikelewa Camp (3630 m)',
        Accommodation: 'Kikelewa Camp',
        description:
          ' After breakfast trekk to Kikilewa Camp, where you can see Kibo Volcano at its finest (barring cloudy weather). This will be a relief day, so after lunch you will have time to sleep before the next trekking towards Mawenzi Tarn Camp. Dinner and Overnight at the Camp.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 3-4 hours | Habitat: Moorland\n',
      },
      {
        day: 5,
        title: 'Kikelewa Camp (3630 m) – Mawenzi Tarn Hut (4310 m)',
        Accommodation: 'Mawenzi Tarn Hut',
        description:
          'The typical senescent vegetation will soon disappear and the scenery will become more barren with the occasional rock formations. In good weather you can enjoy the breath-taking views of the Kibo and Mawenzi summits as well as Kenya’s savannah grasslands. After passing a few more rock formations, you will arrive at the Mawenzi Hut. For many mountain climbers, it is the most atmospheric camp on the mountain.\n' +
          '\n' +
          'Distance: About 6 km | Hiking time: 4-5 hours | Habitat: Moorland',
      },
      {
        day: 6,
        title: 'Mawenzi Tarn Hut (4310 m) – Kibo Hut (4715 m)',
        Accommodation: 'Kibo Hut',
        description:
          'On a relatively easy path, today’s leg takes you over the Kibo Saddle. A lack of vegetation is characteristic for the landscape here as only a few types of grass and other plant species can survive in this dry area and thin air. Just before today’s destination is reached, one last rock passage has to be conquered. Finally you will arrive at the School Hut, where you can relax and mentally prepare yourself for tomorrow’s summit stage.\n' +
          '\n' +
          'Distance: About 8 km | Hiking time: 5-6 hours | Habitat: Alpine desert\n',
      },
      {
        day: 7,
        title: 'Kibo Hut (4715 m) – Uhuru Peak (5895 m) – Horombo Hut (3720 m)',
        Accommodation: 'Horombo Hut',
        description:
          'The climb begins at around 00:00 h and after a 5 to 7 hour walk on frozen volcanic ash, you will reach Gillman’s Point (5,715 m) on the crater’s edge. The sun rays will warm you while you trek for another 1 to 2 hours until you reach Uhuru Peak and finally stand on “Africa’s Roof”. The descent on the now thawed lava ash runs almost along the same route and you will arrive at the School Hut in the late morning. A warm meal will be served and after a well-deserved break, the descent continues to the Horombo Hut.\n' +
          '\n' +
          'Distance: About 21 km | Hiking/Descending time: 12 - 14 hours | Habitat: Artic, Alpine desert\n',
      },
      {
        day: 8,
        title:
          'Horombo Hut (3720 m) – Marangu Gate (1860 m) – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest passing Mandara Hut to Marangu Gate. Here we will collect our summit certificates, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha to your hotel for dinner and overnight.\n' +
          '\n' +
          'Distance: About 18 km | Descending time: 5-6 hours | Habitat: Moorland, Rain Forest\n',
      },
      {
        day: 9,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          '\n' +
          '\n' +
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 9,
    title: '7 Days Kilimanjaro Trek via Lemosho Route',
    overview:
      'The Lemosho Route is often considered the most beautiful of all the trekking trails up Mount Kilimanjaro. It crosses the entire Shira Plateau from west to east in a pleasant, relatively flat hike. Crowds are low until the route joins the Machame route near Lava Tower. ',
    code: 'GT009',
    duration: '7 Days / 6 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Lemosho_Route_01,
    carouselImage: [Lemosho_Route_01, Lemosho_Route_02],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha/Moshi Town – Londorossi Gate (3000 m) – Shira 1 Camp (3500 m)',
        Accommodation: 'Shira 1 Camp',
        description:
          'You will be picked up at your hotel at around 08:00am and transferred to the Londorossi gate located on the western side of Kilimanjaro. After the registration process you will still start our climb steadily through the forests of the Lemosho glades to reach Shira 1 camp where you will be spending the night.\n' +
          '\n' +
          'Distance: About 5 km | Approx. time: 1-2 hours | Habitat: Meadows',
      },
      {
        day: 3,
        title: 'Shira 1 Camp (3500 m) – Shira 2 Camp (3845 m)',
        Accommodation: 'Shira 2 Camp',
        description:
          'This section you will get the chance to view the Northern Ice fields from the western side of the mountain with some unusual views of Kibo. A steady climb across the moorland of the Shira Plateau will help with acclimatization and we enjoy great panoramic views to destination Shira 2 Camp. In the afternoon you will take an acclimatization walk then head back to camp for dinner and overnight.\n' +
          '\n' +
          'Distance: About 7 km | Hiking time: 3-4 hours | Habitat: Moorland',
      },
      {
        day: 4,
        title:
          'Shira 2 Camp (3845 m) – Lava Tower (4630 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'Your trek starts with an ascent with far-reaching panoramic views, walking in to the climatic zone of the upland desert and on the lava ridges beneath the glaciers of the Western Breach. You will reach the distinct pinnacle of the Lava Tower (4630 m), our high point for the day and a great place to enjoy your lunch. In the afternoon we make a steep descent to our camp for the night, located in the base of the Great Barranco Valley (3950 m), sheltered by towering cliffs but with extensive views of the plains below. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 11 km | Hiking/Descending time: 6-8 hours | Habitat: Moorland, Semi desert\n',
      },
      {
        day: 5,
        title: 'Barranco Camp (3950 m) – Karanga Camp (4035 m)',
        Accommodation: 'Karang Camp',
        description:
          'We starts by descending into the start of the Great Barranco, a huge ravine. We then exit steeply, up the Great Barranco Wall, which divides us from the southeastern slopes of Kibo. It’s a climb over rock, not technical but long and tiring. Passing underneath the Heim and Kersten glaciers, we head towards the Karanga valley. From here we have a steep climb up from Karanga valley to our night’s camp at Karanga camp, set at 3950 m. For those feeling strong we will go for a mid-afternoon acclimatization trek up to around 4200 m before descending back to camp for the night.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 4-5 hours | Habitat: Moorland\n',
      },
      {
        day: 6,
        title: 'Karanga Camp (4035 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'After a good night’s rest and breakfast, we set off on walk to Barafu camp at 4640 m. The climb will take us across desolate scree slopes with no vegetation around us at all. It’s a tough steep walk made more difficult by the altitude. On arriving at camp we eat and spend the afternoon resting as we prepare for a long night and day ahead. It is important to keep hydrated and warm. We have an early dinner and then try to get some sleep as we will be getting up at between 11pm and 12pm to start the climb to the summit. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 3 km | Hiking time: 4-5 hours | Habitat: Alpine desert',
      },
      {
        day: 7,
        title:
          'Barafu Camp (4640 m) – Uhuru Peak (5895 m) – Millennium Camp (3790 m)',
        Accommodation: 'Millennium Camp',
        description:
          'We start off at around midnight, and walk steeply upwards to the summit glaciers. We will be climbing scree for 4 to 5 hours but gain incredible height over a short distance. The views are spectacular. We should be on the crater rim at Stella Point (5739 m) as the first rays of the sun hit us. Spectacular ice cliffs within the crater surround us and the views to jagged Mawenzi peak and beyond are breathtaking. Another hour’s walking takes us to the summit, Uhuru Peak (5895 m). We begin our descent by returning to Stella Point and then descending on scree slope and track back to Barafu Camp for breakfast, before finally heading down to Millennium Camp for a long well-earned rest. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 13.4 km | Hiking time: 8–12 hours | Habitat: Arctic, Montane forest\n',
      },
      {
        day: 8,
        title:
          'Millennium Camp (3790 m) – Mweka Gate (1630 m) – Moshi / Arusha Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect or summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha for dinner and overnight.\n' +
          '\n' +
          'Distance: About 12.1 km | Hiking time: 4-5 hours | Habitat: Montane forest',
      },
      {
        day: 9,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          '\n' +
          '\n' +
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 10,
    title: '8 Days Kilimanjaro Trek via Lemosho Route',
    overview:
      'The Lemosho Route is often considered the most beautiful of all the trekking trails up Mount Kilimanjaro. It crosses the entire Shira Plateau from west to east in a pleasant, relatively flat hike. Crowds are low until the route joins the Machame route near Lava Tower. ',
    code: 'GT0010',
    duration: '8 Days / 7 Nights',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Mount_Kilimanjaro_Glacier_02,
    carouselImage: [
      Lemosho_Route_01,
      Lemosho_Route_02,
      Mount_Kilimanjaro_Glacier_03,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha / Moshi Town – Lemosho Gate (2210 m) – Mti Mkubwa Camp (Big Tree Camp) (2780 m)',
        Accommodation: 'Mti Mkubwa Camp',
        description:
          'You will be picked up at your hotel at around 08:00am and transferred to the Lemosho (Londorossi) gate located on the western side of Kilimanjaro. After the registration process you will still start our climb steadily through the forests of the Lemosho glades to reach Big Tree camp where you will be spending the night.\n' +
          '\n' +
          'Distance: About 6 km | Approx. time: 3-4 hours | Habitat: Montane forest',
      },
      {
        day: 3,
        title:
          'Mti Mkubwa Camp (Big Tree Camp) (2780 m) – Shira 1 Camp (3500 m)',
        Accommodation: 'Shira 1 Camp',
        description:
          'Trek across a plateau of grassy moorland and heather scattered with volcanic rock formations. Our destination for today is the Shira 1 Camp from where there are often views of Kibo Peak floating on the clouds. This section has reasonable amount of altitude and parts of the route are fairly steep. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 4-5 hours | Habitat: Meadows',
      },
      {
        day: 4,
        title: 'Shira 1 Camp (3500 m) – Shira 2 Camp (3845 m)',
        Accommodation: 'Shira 2 Camp',
        description:
          'This section you will get the chance to view the Northern Ice fields from the western side of the mountain with some unusual views of Kibo. A steady climb across the moorland of the Shira Plateau will help with acclimatization and we enjoy great panoramic views to destination Shira 2 Camp. In the afternoon you will take an acclimatization walk then head back to camp for dinner and overnight.\n' +
          '\n' +
          'Distance: About 7 km | Hiking time: 3-4 hours | Habitat: Moorland',
      },
      {
        day: 5,
        title:
          'Shira 2 Camp (3845 m) – Lava Tower (4630 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'Your trek starts with an ascent with far-reaching panoramic views, walking in to the climatic zone of the upland desert and on the lava ridges beneath the glaciers of the Western Breach. You will reach the distinct pinnacle of the Lava Tower (4630 m), our high point for the day and a great place to enjoy your lunch. In the afternoon we make a steep descent to our camp for the night, located in the base of the Great Barranco Valley (3950 m), sheltered by towering cliffs but with extensive views of the plains below. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 11 km | Hiking/Descending time: 6-8 hours | Habitat: Moorland, Semi desert\n',
      },
      {
        day: 6,
        title: 'Barranco Camp (3950 m) – Karanga Camp (4035 m)',
        Accommodation: 'Karanga Camp',
        description:
          'We starts by descending into the start of the Great Barranco, a huge ravine. We then exit steeply, up the Great Barranco Wall, which divides us from the southeastern slopes of Kibo. It’s a climb over rock, not technical but long and tiring. Passing underneath the Heim and Kersten glaciers, we head towards the Karanga valley. From here we have a steep climb up from Karanga valley to our night’s camp at Karanga camp, set at 3950 m. For those feeling strong we will go for a mid-afternoon acclimatization trek up to around 4200 m before descending back to camp for the night.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 4-5 hours | Habitat: Moorland\n',
      },
      {
        day: 7,
        title: 'Karanga Camp (4035 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'After a good night’s rest and breakfast, we set off on walk to Barafu camp at 4640 m. The climb will take us across desolate scree slopes with no vegetation around us at all. It’s a tough steep walk made more difficult by the altitude. On arriving at camp we eat and spend the afternoon resting as we prepare for a long night and day ahead. It is important to keep hydrated and warm. We have an early dinner and then try to get some sleep as we will be getting up at between 11pm and 12pm to start the climb to the summit. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 3 km | Hiking time: 4-5 hours | Habitat: Alpine desert\n',
      },
      {
        day: 8,
        title:
          'Barafu Camp (4640 m) – Uhuru Peak (5895 m) – Millennium Camp (3790 m)',
        Accommodation: 'Millennium Camp',
        description:
          'We start off at around midnight, and walk steeply upwards to the summit glaciers. We will be climbing scree for 4 to 5 hours but gain incredible height over a short distance. The views are spectacular. We should be on the crater rim at Stella Point (5739 m) as the first rays of the sun hit us. Spectacular ice cliffs within the crater surround us and the views to jagged Mawenzi peak and beyond are breathtaking. Another hour’s walking takes us to the summit, Uhuru Peak (5895 m). We begin our descent by returning to Stella Point and then descending on scree slope and track back to Barafu Camp for breakfast, before finally heading down to Millennium Camp for a long well-earned rest. Dinner and overnight at the Camp.\n' +
          '\n' +
          'Distance: About 13.4 km | Hiking time: 8 – 12 hours | Habitat: Arctic, Montane forest\n',
      },
      {
        day: 9,
        title:
          'Millennium Camp (3790 m) – Mweka Gate (1630 m) – Moshi / Arusha Town',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here we will collect or summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha for dinner and overnight.\n' +
          '\n' +
          'Distance: About 12.1 km | Hiking time: 4-5 hours | Habitat: Montane forest',
      },
      {
        day: 10,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 11,
    title: '8 Days Kilimanjaro Trek via Machame Route',
    overview:
      'The most popular route to the summit of Mount Kilimanjaro these days is Machame route, and for good reason. Forested traverse to Barafu. This trail offers stunning views, a reasonable challenge, and plenty of time to acclimate, making it a good choice for those who have a bit of extra time in their schedule. ',
    code: 'GT0011',
    duration: '',
    category: GtItineraryCategory['Mountain Climbing'],
    activities: [GtActivities['Climbing / Trekking']],
    image: Mount_Kilimanjaro_Summit,
    carouselImage: [
      Kilimanjaro_Machame_Route_01,
      Kilimanjaro_Machame_Route_02,
      Kilimanjaro_Machame_Route_03,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival Day – Arusha / Moshi Town',
        Accommodation: 'Hotel',
        description:
          'Pick up from Kilimanjaro airport and transfer to hotel in Moshi/ Arusha. A pre-climb briefing can be organized where we will provide you all the information to prepare for your climb. This will include a day to day guide of your climb, the gear required as well as discussing acute mountain sickness and all health and safety on Kilimanjaro.',
      },
      {
        day: 2,
        title:
          'Arusha / Moshi Town – Machame Gate (1800 m) – Machame Camp (3010 m)',
        Accommodation: 'Machame Camp',
        description:
          'Transfer from your hotel to the Kilimanjaro National Park gate at Machame. After registration and preparations we start our trek into the lush rainforest. There is the possibility of spotting some Black-and-White Colobus monkeys on the way to Machame camp for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 5-6 hours | Habitat: Montane forest\n',
      },
      {
        day: 3,
        title: 'Machame Camp (3010 m) – Shira Camp (3845 m) ',
        Accommodation: 'Shira Camp',
        description:
          'After a short forest hike we continue a steep ridge passing through open moorlands crossing a large gorge to reach Shira Camp, beautiful views of the Shira Plateau and sometimes Mount Meru. Overnight stay at the camp\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 4-6 hours | Habitat: Moorland\n',
      },
      {
        day: 4,
        title:
          'Shira Camp (3845 m) – Lava Tower (4630 m) – Barranco Camp (3950 m)',
        Accommodation: 'Barranco Camp',
        description:
          'We will take an acclimatization hike to Lava Tower (~15,190’) for lunch, before descending to the Barranco valley. For those who have energy, and if time and weather permit, there’s the possibility to scramble up the Lava Tower itself. The scenery is amazing today, passing through different zones of the mountain before dropping again to reach Barranco camp (This camp is considered by many to be the most beautiful and scenic on Kilimanjaro) for Dinner and overnight.\n' +
          '\n' +
          'Distance: About 11 km | Hiking/Descending time: 6-8 hours | Habitat: Moorland, Semi desert\n',
      },
      {
        day: 5,
        title: 'Barranco Camp (3950 m) – Karanga Camp (4035 m)',
        Accommodation: 'Karanga Camp',
        description:
          'Today you will tackle the steepest part of this route – the famous Barranco Wall, also known as the ‘Breakfast Wall’. It’s not as difficult as it looks, and your guide will assist you through this passage in just a little more than an hour. On top of Barranco Wall you can get a glimpse of the southern glaciers of Kibo and take a short rest before continuing towards Karanga Camp. \n' +
          '\n' +
          'This camp is located less than 100 meters higher then Barranco Camp which gives your body some more time to acclimatize to the altitude. After your lunch at the camp you have the option to do a short round trip towards Barafu Camp for further acclimatization, or you can just relax at your camp. Overnight, stay at the camp.\n' +
          '\n' +
          'Distance: About 5 km | Hiking time: 4-5 hours | Habitat: Moorland\n',
      },
      {
        day: 6,
        title: 'Karanga Camp (4035 m) – Barafu Camp (4640 m)',
        Accommodation: 'Barafu Camp',
        description:
          'After breakfast we take the trail that passes through striking alpine desert expanses and leads you to your final camp before the summit hike – the Barafu Camp. You will have some time to relax before the evening meal is served. After dinner you are advised to get as much sleep as possible before summit attempt. \n' +
          '\n' +
          'Distance: About 6 km | Hiking time: 4-5 hours | Habitat: Alpine desert',
      },
      {
        day: 7,
        title: 'Barafu Camp (4640 m) – Crater Camp (5730 m)',
        Accommodation: 'Crater Camp',
        description:
          'After strenuous climbing up the scree and ash paths you should reach Stella point, the crater rim of Kibo. From Stella Point you will head towards the highest camp on Kilimanjaro – the Crater Camp – which is situated at an altitude of 5730m. From here there are breath-taking views of the surrounding glaciers. Dinner and overnight at the camp.',
      },
      {
        day: 8,
        title:
          'Crater Camp (5730 m) – Uhuru Peak (5895 m) – Mweka Camp (3080 m)',
        Accommodation: 'Mweka Camp',
        description:
          'The first sunlight marks the start of your final ascent towards the summit. It will be a slow and arduous 2 hours or so before you reach the highest point in Africa, ‘Uhuru Peak’, which towers above anywhere else in Africa at 5895 meters. From the peak, you will be able to see the surrounding summits, glaciers and landscapes being lit up by the warm morning sun – a truly unforgettable experience. \n' +
          '\n' +
          'After a short break and the summit pictures, you will return to Barafu Camp where the rest of the climbing crew will await you. Here you will have some time to rest and a much-needed warm meal will be served. Afterwards, you will continue your descent to Mweka Camp for dinner and overnight.\n',
      },
      {
        day: 9,
        title: 'Mweka Camp (3080 m) – Mweka Gate (1630 m) – Moshi/Arusha Town ',
        Accommodation: 'Hotel',
        description:
          'Make the final descent through the rain forest to Mweka Gate. Here you will collect your summit certificate, have lunch and say goodbye to our mountain crew before drive back to Moshi/Arusha to your hotel for dinner and overnight.\n' +
          '\n' +
          'Hiking time: 3-5 hours | Habitat: Montane forest',
      },
      {
        day: 10,
        title: 'Departure Day / Go on a Safari',
        Accommodation: '',
        description:
          'After breakfast, depart for your next destination, which is optional or can be arranged:\n' +
          '\n' +
          '    Safari to the National Parks\n' +
          '    Transfer to Kilimanjaro International Airport or Arusha Airport\n' +
          '    Transport to Other Towns in Tanzania i.e. Dar es Salaam, Zanzibar\n' +
          '    Nairobi via border town Namanga\n' +
          '\n',
      },
    ],
  },
  {
    id: 12,
    title: '5 Days Lake Manyara, Serengeti and Ngorongoro Crater Safari',
    overview:
      'A 5 day Safari to provide unlimited wildlife encounters in the heart of the Northern Tanzania Circuit. You’ll see what Lake Manyara National Park, Ngorongoro Crater (one of the world’s eight natural wonders), and Serengeti National Park have to offer. The safari is ideal for those safari goes seeking to explore the best of Tanzania with adequate time.',
    code: 'GT0012',
    duration: '5 Days / 4 Nights',
    category: GtItineraryCategory['Adventure Safaris'],
    activities: [
      GtActivities['Game Drives'],
      GtActivities['Great Migration'],
      GtActivities['Bird Watching'],
      GtActivities['Balloon Safari'],
      GtActivities['Canopy Walkway'],
    ],
    image: Serengeti_National_Park_Hyenas_22,
    carouselImage: [
      Ngorongoro_Crater_View_NCA,
      Ngorongoro_Crater_Black_Rhinos_NCA_01,
      Ngorongoro_Crater_Black_Rhinos_NCA_02,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Moshi / Arusha - Lake Manyara National Park',
        Accommodation: '',
        description:
          'At 8:30am, you will depart for Lake Manyara National Park where you will do game drive; Lake Manyara is a shallow freshwater lake in Tanzania. It is said to be the “loveliest (lake) … in Africa,” Lake Manyara is covering 127 square miles (329 km2) of Lake Manyara National Park, the lake’s alkaline waters cover approximately 89 square miles (231 km2). <br/><br/>' +
          'It is famous for a good number of baboons and birdlife, also home to herbivores such as hippos, impalas, elephants, wildebeests, buffalo, warthogs, and giraffes, giant fig trees and mahogany seen in the groundwater forest. Dinner and overnight at either midrange or luxury Lodge on Full Board basis in either Manyara or Karatu.\n',
      },
      {
        day: 2,
        title: 'Serengeti National Park',
        Accommodation: '',
        description:
          'After breakfast drive to Serengeti National Park with an optional – via Olduvai Gorge (Millions of years ago, the site was that of a large lake, the shores of which were covered with successive deposits of volcanic ash. <br/><br/>' +
          'Excavation work there was pioneered by Louis and Mary Leakey beginning in 1931. The Serengeti National park covers 14,763 km² (5,700 square miles) of grassland plains and savanna as well as river trine forest and woodlands. <br/><br/>' +
          'The park lies in the north of the country, bordered to the north by the national Tanzania and Kenyan border. Dinner and overnight at either midrange or luxury Lodge in Serengeti. <br/><br/>',
      },
      {
        day: 3,
        title: 'Full day at Serengeti National Park',
        Accommodation: '',
        description:
          'Start your day with a full day game driving in the Serengeti plains, the endless, almost treeless grassland of the south is the most emblematic scenery of the park. <br/><br/>' +
          'Other hoofed animals – zebra, gazelle, impala, hartebeest, topi, buffalo, and waterbuck – also occur in huge numbers thru out the year.  Dinner and overnight at either midrange or luxury lodge on Full Board basis in Serengeti.\n',
      },
      {
        day: 4,
        title: 'Ngorongoro Conservation Area Authority',
        Accommodation: '',
        description:
          'Wake-up call at 6:00am, in order to have just a cup of hot coffee then proceed for the early morning game drive, this morning game drive is very important as you will be able to witness the early morning kills from the big five only if you will be lucky enough. <br/><br/>' +
          'After the game drive back to the Lodge at 9:30am in order to have your main breakfast, there after you will check out the Lodge and proceed with game drives en–route to Ngorongoro Conservation Area Authority. Dinner and overnight at either midrange or luxury lodge.',
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Tour – Drive Back to Arusha / Moshi',
        Accommodation: '',
        description:
          'Descend into the Ngorongoro Crater for crater tour. This is world heritage site; the incomparable Ngorongoro crater is the world’s largest “caldera”. Dominated by cliffs standing some 600 meters high and presenting a sheer drop down to a wide open space of some 246 square km, and you may see everything from elephant to lion, and if you’re lucky, the near–extinct black rhino, all amongst large herds of zebra and wildebeest.  Afternoon exit the crater and drive back to Arusha/Airport/Moshi.',
      },
    ],
  },
  {
    id: 13,
    title: '5 Days Serengeti and Ngorongoro Crater Safari',
    overview:
      'This tour offers you a 5-day Tanzania Migration Safari where your river crossing tour will take you to the Mara River for the spectacular migration crossing which is an experience of a lifetime. Let us tailor-make your itinerary and customize your tour according to your requirements and duration.',
    code: 'GT0013',
    duration: '5 Days / 4 Nights',
    category: GtItineraryCategory['Adventure Safaris'],
    activities: [
      GtActivities['Game Drives'],
      GtActivities['Great Migration'],
      GtActivities['Bird Watching'],
      GtActivities['Balloon Safari'],
    ],
    image: Ngorongoro_Crater_Black_Rhinos_NCA_02,
    carouselImage: [
      Ngorongoro_Crater_Swamps_NCA,
      Ngorongoro_Crater_Flamingos_10_NCA,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Moshi / Arusha – Serengeti National Park',
        Accommodation: '',
        description:
          'After early morning breakfast, we begin our drive to the Serengeti National Park via Ngorongoro with a few stops during the journey at interesting scenic points for you to take pictures and get the full experience of your Tanzania Classic tour. <br/><br/>' +
          'The drives from Moshi/Arusha to Serengeti National Park is approximately 6 hours and we will make provision for your lunch during the journey by providing you with enjoyable lunch boxes to allow for us arriving timeously for afternoon animal sightings in the Serengeti. Dinner and overnight at either midrange or luxury lodge in Serengeti.',
      },
      {
        day: 2,
        title: 'Full day in Serengeti National Park',
        Accommodation: '',
        description:
          'A full day Serengeti tour will start after your breakfast, where you will spend the day observing animals in their natural habitat at a different time and in various parts of the Serengeti. <br/><br/>' +
          'Look forward to witnessing large herds of migrating animals, prides of lions, cheetah, leopard, elephant, giraffe, buffalo, and antelope as well as various species of birdlife and indigenous trees.',
      },
      {
        day: 3,
        title: 'Another Full day in Serengeti National Park',
        Accommodation: '',
        description:
          'Enjoy a full day of animal sightings and capture the wilderness in all its glory as you drive through the Serengeti in search of wildlife. <br/><br/>' +
          'Depending on the time of the year this 5 Days Tanzania Classic Migration tour will be located in the central Serengeti, Northern Serengeti, or Southern Serengeti. <br/><br/>' +
          'This itinerary is flexible and the accommodation will be booked according to animal migratory movement. Dinner and overnight at either midrange or luxury lodge in Serengeti.<br/><br/>',
      },
      {
        day: 4,
        title:
          'Morning in Serengeti National park – Afternoon drive to Ngorongoro',
        Accommodation: '',
        description:
          'This tour will start with an early breakfast at your lodge or camp before you leave for morning game sightings. <br/><br/>' +
          'At midday, you will enjoy your picnic lunch thereafter you will continue with afternoon animal sightings as you drive to the Ngorongoro crater rim for an overnight stay.',
      },
      {
        day: 5,
        title:
          'Morning in Ngorongoro Crater – Afternoon drive back to Arusha / Moshi',
        Accommodation: '',
        description:
          'Today your safari will begin with an early breakfast at your lodge or camp before you travel down the crater rim to view the animals inside the crater up-close. <br/><br/>' +
          'The Ngorongoro crater is the world’s largest unbroken Caldera where thousands of animals live, where you will see big five animals. <br/><br/>' +
          'That afternoon you will enjoy your picnic lunch at the hippo pool then continue with the afternoon’s animal sightings as you make your way out of the crater and on your way back to your arranged hotel in Arusha/Airport/Moshi.<br/>',
      },
    ],
  },
  {
    id: 14,
    title: '6 Days Tarangire, Serengeti and Ngorongoro Crater Safari',
    overview:
      'A 6 day Safari to provide unlimited wildlife encounters in the heart of the Northern Tanzania Circuit. You’ll see what Lake Manyara, Tarangire National Park, Ngorongoro Crater (one of the world’s eight natural wonders), and Serengeti National Park have to offer. The safari is ideal for those safari goes seeking to explore the best of Tanzania with adequate time.',
    code: 'GT0014',
    duration: '6 Days / 5 Nights',
    category: GtItineraryCategory['Adventure Safaris'],
    activities: [
      GtActivities['Game Drives'],
      GtActivities['Great Migration'],
      GtActivities['Bird Watching'],
      GtActivities['Balloon Safari'],
    ],
    image: Ngorongoro_Crater_Elephant_NCA,
    carouselImage: [
      Ngorongoro_Crater_Wildlife_24,
      Tarangire_National_Park_Giraffe_20,
      Serengeti_Wildebeests_03,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Moshi / Arusha - Lake Manyara National Park',
        Accommodation: '',
        description:
          'After breakfast from Arusha, proceed to Lake Manyara National Park for a full day game drive with picnic lunches, Later proceed to Lake Manyara for dinner and overnight stay.',
      },
      {
        day: 2,
        title: 'Lake Manyara – Serengeti National Park',
        Accommodation: '',
        description:
          'After breakfast, proceed to Serengeti National Park for a game drive with picnic lunches, Dinner and overnight at either midrange or luxury Lodge in Serengeti.',
      },
      {
        day: 3,
        title: 'Full day in Serengeti National Park',
        Accommodation: '',
        description:
          'Early morning game drive Serengeti National Park, back for breakfast and relax. Later again proceed for a full day game drive with picnic lunches, Dinner and overnight at either midrange or luxury lodge in Serengeti.',
      },
      {
        day: 4,
        title: 'Serengeti National Park – Afterwards to Ngorongoro',
        Accommodation: '',
        description:
          'Early morning game drive Serengeti National Park, back for breakfast and then proceed to Ngorongoro Crater, en route game drive with picnic lunches, Later proceed to <b>Ngorongoro Wildlife</b> for dinner and overnight stay.',
      },
      {
        day: 5,
        title: 'Full day Ngorongoro Crater – Afterwards to Tarangire',
        Accommodation: '',
        description:
          'After early breakfast, proceed for a Full Day Crater tour with picnic lunches at Ngorongoro Crater, later proceed to Tarangire. Dinner and overnight at either midrange or luxury lodge.',
      },
      {
        day: 6,
        title: 'Tarangire National Park – Arusha / Moshi',
        Accommodation: '',
        description:
          'After early breakfast, proceed for a full day game drive at Tarangire National Park with picnic lunches, Later proceed back to Arusha in the evening.',
      },
    ],
  },
  {
    id: 15,
    title: '5 Days Tarangire, Serengeti, Ngorongoro, Lake Manyara Safari',
    overview: '',
    code: 'GT0015',
    duration: '5 Days / 4 Nights',
    category: GtItineraryCategory['Adventure Safaris'],
    activities: [
      GtActivities['Game Drives'],
      GtActivities['Great Migration'],
      GtActivities['Bird Watching'],
      GtActivities['Balloon Safari'],
      GtActivities['Night Game Drives'],
    ],
    image: Tarangire_National_Park_Giraffe_20,
    carouselImage: [
      Serengeti_National_Park_Lions_22,
      Ngorongoro_Crater_Floor_NCA,
      Serengeti_National_Park_Leopard_24,
    ],
    status: true,
    itinerary: [
      {
        day: 1,
        title: 'Moshi / Arusha - Tarangire National Park',
        Accommodation: '',
        description:
          'Your expert safari driver will pick you up from the hotel after breakfast and transfer you to Tarangire National Park for the animal sighting. Enjoy 2 hours a relaxing drive from Moshi/Airport/Arusha to Tarangire National Park. <br/><br/>' +
          'The Park is rich with ancient giant baobab trees, also known as the ‘’Tree of life’’, which covers most of the landscape of the park, after a full day of game drive, you will be transferred to your arranged hotel or lodge for dinner and overnight either Tarangire, Manyara or Karatu.',
      },
      {
        day: 2,
        title: 'Serengeti National Park',
        Accommodation: '',
        description:
          'After an early morning breakfast, we will be heading to Serengeti National Park through Ngorongoro conservation area, we will have some stop during the journey at some interesting scenic point for you to take pictures and get the full experience of Tanzania classic safari. After animal viewing in Serengeti, you will be transferred to your lodge for dinner and overnight in Serengeti.',
      },
      {
        day: 3,
        title: 'Full day game viewing in Serengeti',
        Accommodation: '',
        description:
          'You will spend the full day observing animals at the different parts of the Serengeti. It is the wildebeest migration for which Serengeti is perhaps most famous, abundance of large animals including Lions, Buffalos, Hyenas, Antelopes and Others. <br/><br/>' +
          'Over a million wildebeest and about hundreds zebra graze from south of the northern hills to the southern plains for the short rain season.\n',
      },
      {
        day: 4,
        title: 'Morning Game drive in Serengeti Park - Drive to Ngorongoro',
        Accommodation: '',
        description:
          'After an early breakfast at your lodge or camp, you will continue with game viewing as we drive to Ngorongoro Crater for a wildlife spotting. You will experience the Maasai traditional life on the way to Ngorongoro Crater. <br/><br/>' +
          'The Crater has vast number of animals including lion, zebra, elephant and various resident animals, it also a good spot to see the rare black rhino. Dinner and Overnight in either Karatu or Manyara.',
      },
      {
        day: 5,
        title: 'Manyara National Park',
        Accommodation: '',
        description:
          'A 5 days Tanzania  safari will commence with an early breakfast, you will visit Lake Manyara National Park for animals’ sightings with the option for a cultural visit in nearby village Mto wa Mbu (the mosquito river) the park is famous for the tree-climbing lion and a thousand of flamingos.<br/><br/>' +
          'Dependent on your schedule and returning flight, thereafter you will be transferred to the airport on time or to your arranged hotel in Arusha/Moshi marking the end of your 5 days safari in Tanzania.\n',
      },
    ],
  },
];
