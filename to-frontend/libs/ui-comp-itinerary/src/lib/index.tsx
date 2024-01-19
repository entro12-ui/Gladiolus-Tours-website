import {
  GladiolusToursItinerary,
  GtItineraryCategory,
} from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';

interface IProps {
  itinerary: GladiolusToursItinerary;
}

export const Itinerary = ({ itinerary }: IProps) => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-300">
        Explore Gladiolus Packages
      </h2>
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="my-8 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 duration-300 hover:transform hover:scale-105"
          >
            <Link
              to={generatePath(GtToursRoute.ItineraryDetails, {
                itineraryId: String(index),
              })}
              className="block"
            >
              <figure>
                <img
                  src={`${item.image}?auto=format&fit=crop&w=400&q=50`}
                  alt={item.title}
                  className="rounded-t h-64 w-full object-cover"
                />
                <figcaption className="p-4">
                  <div className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                    Category: {GtItineraryCategory[item.category]}
                  </div>
                  <p className="text-xl mb-3 font-semibold leading-tight text-gray-800 dark:text-gray-300">
                    {item.title}
                  </p>
                  <p className="text-sm leading-5 text-gray-600 dark:text-gray-400">
                    {item.overview}
                  </p>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
