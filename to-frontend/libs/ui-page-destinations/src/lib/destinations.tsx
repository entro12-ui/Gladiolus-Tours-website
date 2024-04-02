import React from 'react';
import { Link } from 'react-router-dom';

interface MapIconProps {
  className?: string;
}

const MapIcon: React.FC<MapIconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" x2="9" y1="3" y2="18" />
    <line x1="15" x2="15" y1="6" y2="21" />
  </svg>
);

export const Destinations: React.FC = () => {
  return (
    <section className="px-4 md:px-6 py-6 md:py-12 lg:py-16 xl:py-24 2xl:py-32">
      <div className="container grid gap-6">
        <div className="flex flex-col gap-2">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Find Your Destination
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Discover the perfect place for your next adventure
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <input
                className="w-full max-w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Search destinations..."
                type="search"
              />
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="flex flex-col gap-2">
            <div className="grid gap-2">
              <div className="p-4 border border-gray-300 rounded-lg">
                <div className="grid gap-2">
                  <h3 className="font-semibold tracking-tight">
                    Bali, Indonesia
                  </h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Island Paradise
                  </p>
                </div>
                <div className="p-4 flex items-center justify-between border-t border-gray-300 rounded-b-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <MapIcon className="w-4 h-4" />
                    <span>Indonesia</span>
                  </div>
                  <Link
                    className="ml-auto text-blue-500 hover:text-blue-700"
                    to="#"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Other Card components */}
        </div>
      </div>
    </section>
  );
};
