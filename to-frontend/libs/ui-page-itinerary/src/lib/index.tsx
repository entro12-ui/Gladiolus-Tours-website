import React from 'react';
import { GtItinerary } from '@collo/ui-persistance';
import {
  GtToursRoute,
  useItineraryIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import { generatePath, Navigate } from 'react-router-dom';
import { AccordionItem } from './accordion-item';

export const GladiolusToursItineraryDetails = () => {
  const itineraryId = useItineraryIdOrThrow();
  const itinerary = GtItinerary[itineraryId];

  if (!itinerary) {
    return <Navigate to={generatePath(GtToursRoute.NotFound)} />;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        {itinerary.description.map((step, index) => (
          <AccordionItem key={index} title={step.title}>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                {step.title}
              </h3>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                {step.Accommodation && `Accommodation: ${step.Accommodation}`}
              </p>
              <p className="text-gray-800 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};
