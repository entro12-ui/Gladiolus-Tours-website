import { GladiolusToursItinerary } from '@collo/ui-persistance';
import { Link } from 'react-router-dom';

interface IProps {
  itinerary: GladiolusToursItinerary;
}

export const Itinerary = ({ itinerary }: IProps) => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800 dark:text-gray-300">
        Gladiolus Tour Operator Itineraries
      </h2>
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {itinerary.map((itinerary, index) => (
          <div
            key={index}
            className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          >
            <Link to={`/itinerary/${index}`} className="cursor-pointer">
              <figure>
                <img
                  src={`${itinerary.image}?auto=format&fit=crop&w=400&q=50`}
                  alt={itinerary.title}
                  className="rounded-t h-72 w-full object-cover"
                />
                <figcaption className="p-4">
                  <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                    {itinerary.title}
                  </p>
                  <small className="leading-5 text-gray-500 dark:text-gray-400">
                    {itinerary.overview}
                  </small>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
