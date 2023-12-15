import { XMarkIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { GtToursRoute } from '@gladiolus/ui-routes-gladiolus';

export const GladiolusBanner = () => {
  return (
    <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <Link to={GtToursRoute.Safaris}>
          <strong className="font-semibold">Gladiolus Tours 2023</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us in holiday Safari/Tour from December 25 – 31 to see what’s
          coming next&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
