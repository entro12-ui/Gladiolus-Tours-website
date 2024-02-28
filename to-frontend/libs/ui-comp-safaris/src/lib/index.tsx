import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GtSafaris } from '@collo/ui-persistance';

export const GladiolusSafaris = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Our Safaris - Explore Tanzania with our tailor-made tours!
        </h2>
        <p className="max-w-3xl text-base text-gray-500 mb-12">
          Come and observe the wildlife in the national parks, climb to the
          summit of Kilimanjaro, meet the Maasai tribes, relax on the beaches of
          Zanzibar, soak up the history of Stone Town, and dive into the heart
          of Mafia Island, a veritable paradise for diving enthusiasts.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GtSafaris.map((safari, index) => (
            <Link
              key={safari.name}
              to={'#'}
              className={`group block ${isVisible ? 'animate-fadeIn' : ''}`}
            >
              <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img
                  src={safari.imageSrc}
                  alt={safari.imageAlt}
                  className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4 h-24 overflow-hidden">
                <h3 className="text-xl font-semibold text-gray-900">
                  {safari.name}
                </h3>
                <p className="mt-2 text-gray-600 overflow-hidden overflow-ellipsis truncate">
                  {safari.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
