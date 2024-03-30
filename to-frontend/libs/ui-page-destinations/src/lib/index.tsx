import { EntryPageHelmet } from '@collo/ui-comp-page-helmet';
import { GladiolusHeaderSection } from '@collo/ui-comp-header';
import { DestinationCounter } from './destination-counter';
import { DestinationFilter } from './destination-filter';
import { DestinationList } from './destination-list';
import { useState } from 'react';
import { GtDestinationCategory, GtDestinations } from '@collo/ui-persistance';
import { Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';

export const GladiolusDestinationsPage = () => {
  const [destinations] = useState(GtDestinations);
  const [filter, setFilter] = useState<GtDestinationCategory>(
    GtDestinationCategory['All Circuits']
  );

  const handleFilterChange = (newFilter: GtDestinationCategory) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white">
      <EntryPageHelmet title={'Safari Destinations'} />
      {/*
      <GladiolusHeaderSection
        header={'Safari Destinations'}
        description={'Explore Gladiolus Tours Destinations'}
      />
      */}
      <div className="flex items-center justify-center h-screen">
        <Link
          to={GtToursRoute.Home}
          type="button"
          className="relative block w-full max-w-lg rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg
            className="mx-auto h-12 w-12 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="mt-2 block text-lg font-semibold text-gray-900">
            This feature is under development and will be available soon.
          </span>
        </Link>
      </div>
    </div>
  );
};
