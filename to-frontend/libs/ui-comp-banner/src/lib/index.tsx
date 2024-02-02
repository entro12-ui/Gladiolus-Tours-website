import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';

export const GladiolusBanner = () => {
  const currentYear = new Date().getFullYear();
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleDismissBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    isBannerVisible && (
      <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white">
          <Link to={GtToursRoute.Adventures}>
            <strong className="font-semibold">
              Gladiolus Tours {currentYear}
            </strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Explore our Holiday Adventures and create unforgettable memories
            this year&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            onClick={handleDismissBanner}
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    )
  );
};
