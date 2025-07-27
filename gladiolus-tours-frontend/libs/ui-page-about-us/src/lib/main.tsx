import { GladiolusTeam } from '@collo/ui-page-landing-page';
import { Link } from 'react-router-dom';
import Team from './images/team.webp';
import Tanapa from './images/tanappa.webp';
import Ngorongoro from './images/ngorongoro.webp';
import TzGovernment from './images/tzgovernment.webp';
import TWC from './images/twc.webp';
import KwaWingu from './images/kwawingu.webp';
import Couple from './images/couple.webp';
import Flower from './images/flower.webp';
import GrandPaa from './images/grandpap.webp';
import MountKilimanjaro from './images/mount-kilimanjaro.webp';
import SafariGo from './images/safarigo.png';
import SafariBookings from './images/safaribookings.png';
import TeamWork from './images/team-work.webp';

const stats = [
  { label: 'Tours conducted annually', value: '50' },
  { label: 'Destinations covered', value: '5+' },
  { label: 'Satisfied customers', value: '95%' },
];

const values = [
  {
    name: 'Excellence in Service',
    description:
      'Providing world-class service with attention to detail and personalized experiences for every traveler.',
  },
  {
    name: 'Expert Tour Guides',
    description:
      'Our tour guides are knowledgeable, friendly, and passionate about ensuring you have a memorable and informative journey.',
  },
  {
    name: 'Continuous Improvement',
    description:
      'We are committed to always learning and improving our services to exceed the expectations of our valued customers.',
  },
  {
    name: 'Customer Satisfaction',
    description:
      'We prioritize customer satisfaction and aim to create a supportive and enjoyable travel experience for all our clients.',
  },
  {
    name: 'Responsible Tourism',
    description:
      'Taking responsibility for the impact of our tours on the environment and local communities, promoting sustainable and responsible tourism.',
  },
  {
    name: 'Relax and Enjoy',
    description:
      'We believe in providing downtime during your tours, allowing you to relax and enjoy the beauty of each destination at your own pace.',
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'Exploring Hidden Gems: Off the Beaten Path Adventures',
    href: '#',
    description:
      'Discover unique and lesser-known destinations that offer an extraordinary travel experience. Off the beaten path adventures await!',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Jan 2, 2024',
    datetime: '2024-01-02',
    author: {
      name: 'Tour Operator Team',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export const GladiolusToursAboutPage = () => {
  return (
    <div className="bg-gray-100 py-16">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-500">
                    Transforming Connections, One Journey at a Time
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-6"></div>
                  <p className="relative text-lg leading-8 text-gray-700 sm:max-w-md lg:max-w-none">
                    At <span className="font-semibold text-indigo-700">Gladiolus Tours</span>, we believe in changing the way people
                    connect through travel. Our mission is to create meaningful
                    journeys that go beyond the ordinary tourist experience.
                  </p>
                  <p className="relative mt-4 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    We curate personalized adventures that touch your soul and foster deep connections with the world
                    around you. Join us in embracing the transformative power of
                    exploration and discover the joy of shared moments in Tanzania's most breathtaking destinations.
                  </p>
                  <div className="mt-8">
                    <a href="#our-values" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center">
                      Discover Our Values
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={Couple}
                        alt="Old Couple"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={TeamWork}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={MountKilimanjaro}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={Flower}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={GrandPaa}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Commitment to Excellence
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-6"></div>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  At Gladiolus Tours, we believe in the transformative power of
                  travel. Our mission is to connect people through unforgettable
                  journeys that inspire and create lasting memories. Whether
                  you're exploring vibrant cities, relaxing on pristine beaches,
                  or embarking on adventurous escapades, we are committed to
                  providing you with exceptional experiences every step of the
                  way.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    Our commitment to excellence extends beyond traditional
                    tourism. We strive to make a positive impact on the
                    destinations we visit, fostering responsible travel
                    practices and supporting local communities. With Gladiolus
                    Tours, you embark on a journey that goes beyond sightseeing
                    – it's a celebration of cultures, a discovery of hidden
                    gems, and a connection with the world around you.
                  </p>

                  <div className="mt-10 p-6 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg">
                    <p className="italic text-gray-800">
                      "Join us in exploring the beauty of our planet while creating
                      meaningful connections with fellow travelers. We invite you
                      to be part of our community, where every journey is an
                      opportunity for personal growth, cultural exchange, and
                      unforgettable moments."
                    </p>
                    <p className="mt-3 font-semibold text-indigo-700">— Gladiolus Tours Team</p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Impact</h3>
                  <dl className="space-y-8">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center hover:bg-gray-100 transition-colors duration-300"
                      >
                        <dd className="text-4xl font-bold tracking-tight text-indigo-600 mb-2">
                          {stat.value}
                        </dd>
                        <dt className="text-base font-medium text-gray-700">
                          {stat.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 text-center">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Learn about our impact →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Representation Section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Global Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg">
                <img
                  src={SafariBookings}
                  alt="Safari Bookings Logo"
                  className="h-16 object-contain mb-2"
                />
                <span className="text-lg font-semibold text-gray-900">SafariBookings.com</span>
                <span className="text-sm text-gray-600 text-center">
                  We are proudly represented on <Link to="https://www.safaribookings.com/" className="text-blue-600 hover:text-blue-800 font-medium">SafariBookings</Link>, 
                  the largest marketplace for African Safaris!
                </span>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg">
                <img
                  src={SafariGo}
                  alt="SafariGo Logo"
                  className="h-16 object-contain mb-2"
                />
                <span className="text-lg font-semibold text-gray-900">SafariGo.com</span>
                <span className="text-sm text-gray-600 text-center">
                  We are also featured on <Link to="https://safarigo.com" className="text-blue-600 hover:text-blue-800 font-medium">SafariGo</Link>, 
                  connecting travelers with authentic safari experiences.
                </span>
              </div>
            </div>
          </div>
      </div>


        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="relative">
            <img
              src={Team}
              alt="Gladiolus Tours team members standing together, showcasing our dedicated staff who provide exceptional safari experiences in Tanzania"
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent xl:rounded-3xl"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                Our Team: Your Safari Companions
              </h3>
              <p className="text-white/90 max-w-md mt-2 drop-shadow-lg">
                Expert guides and support staff dedicated to creating your perfect Tanzania adventure
              </p>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div id="our-values" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 scroll-mt-24">
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values: Guiding Your Journey with Integrity and Purpose
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-6 mx-auto lg:mx-0"></div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Gladiolus Tours, our values are the compass that guides every
              aspect of your journey. We are committed to delivering exceptional
              travel experiences while upholding principles that prioritize
              integrity, sustainability, and genuine connection.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="bg-indigo-100 text-indigo-800 w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">
                  {index + 1}
                </div>
                <dt className="font-semibold text-gray-900 text-lg">{value.name}</dt>
                <dd className="mt-3 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Partners section */}
        <div className="relative mt-32 sm:mt-48 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Trusted Partners
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-6 mx-auto"></div>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                We collaborate with leading organizations to deliver exceptional travel experiences throughout Tanzania.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="p-8 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 flex flex-col items-center">
                  <img
                    className="h-16 object-contain mb-6"
                    src={SafariBookings}
                    alt="Safari Bookings - Marketplace for African Safaris"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safari Bookings</h3>
                  <p className="text-gray-600 text-center">The largest online marketplace for African safari tours, featuring trusted operators and authentic reviews.</p>
                  <a href="https://www.safaribookings.com/" target="_blank" rel="noopener noreferrer" className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-8 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 flex flex-col items-center">
                  <img
                    className="h-16 object-contain mb-6"
                    src={SafariGo}
                    alt="SafariGo - Safari Booking Platform"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SafariGo</h3>
                  <p className="text-gray-600 text-center">A premier platform connecting travelers with authentic safari experiences across East Africa.</p>
                  <a href="https://safarigo.com" target="_blank" rel="noopener noreferrer" className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600">Interested in partnering with us? <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact our partnership team</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Passionate Team
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-6 mx-auto"></div>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
              Our dedicated team of travel experts is committed to creating unforgettable experiences for every traveler.
              With deep local knowledge and a passion for Tanzania, we're here to make your journey truly special.
            </p>
          </div>
          <GladiolusTeam />
        </div>

        {/* Blog section */}
        {/*
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog: Stories That Inspire Wanderlust
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Immerse yourself in the tales from our adventures. From hidden
              gems to cultural treasures, our blog is a collection of stories
              that ignite the spirit of wanderlust.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
        */}
      </main>
    </div>
  );
};
