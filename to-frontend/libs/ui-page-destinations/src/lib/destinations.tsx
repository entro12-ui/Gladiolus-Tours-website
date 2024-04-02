import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GtDestinationCategory, GtDestinations } from '@collo/ui-persistance';

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

export const Destinations = () => {
  const [filter, setFilter] = useState<GtDestinationCategory | null>(null);

  const handleCheckboxChange = (category: GtDestinationCategory | null) => {
    setFilter(category);
  };

  // Flatten all national parks into a single array
  const allNationalParks = GtDestinations.flatMap((dest) => dest.nationalParks);

  return (
    <section className="px-4 md:px-6 py-6 md:py-12 lg:py-16 xl:py-24 2xl:py-32">
      <div className="container grid gap-6">
        {/* Filter Checkbox */}
        <div>
          {Object.keys(GtDestinationCategory).map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={
                  filter ===
                  GtDestinationCategory[
                    category as keyof typeof GtDestinationCategory
                  ]
                }
                onChange={() =>
                  handleCheckboxChange(
                    GtDestinationCategory[
                      category as keyof typeof GtDestinationCategory
                    ]
                  )
                }
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
        {/* National Parks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allNationalParks.map((park) => (
            <div
              key={park.id}
              className="p-4 border border-gray-300 rounded-lg"
            >
              <img
                src={park.imageSrc}
                alt={park.imageAlt}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <div className="flex items-center justify-between">
                <p className="font-semibold">{park.name}</p>
                <Link className="text-blue-500 hover:text-blue-700" to="#">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
