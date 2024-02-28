import {
  useDestinationIdOrThrow,
  useNationalParkIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import {
  FAQ,
  GtActivities,
  GtDestinations,
  GtNationalParks,
  IDestinations,
} from '@collo/ui-persistance';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { getActivityIcon } from '@collo/ui-comp-activities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RateDisplay } from '@collo/ui-comp-rate';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowCircleDown';

export function GladiolusParkDetails() {
  const nationalParkId = useNationalParkIdOrThrow();
  const destinationId = useDestinationIdOrThrow();
  const [destination, setDestination] = useState<IDestinations>();

  useEffect(() => {
    const selectedDestination = GtDestinations.find(
      (destination) => destination.id === destinationId
    );

    if (selectedDestination) {
      setDestination(selectedDestination);
    }
  }, [destinationId]);

  if (!destination) {
    return <h1>Destination Not Found</h1>;
  }

  const gtNationalPark = destination.nationalParks.find(
    (park: GtNationalParks) => park.id === nationalParkId
  );

  if (!gtNationalPark) {
    return <h1>National Park Not Found</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-96"
            style={{ backgroundImage: `url(${gtNationalPark.imageSrc})` }}
          >
            <div className="bg-black bg-opacity-40 h-full flex items-center justify-center text-white text-center">
              <h1 className="text-4xl font-bold">{gtNationalPark.name}</h1>
            </div>
          </div>
          <div className="px-6 py-8">
            <h1 className="text-4xl font-bold">
              {gtNationalPark.name} {/* Display park name */}
              <span className="text-base ml-2">
                <RateDisplay rate={gtNationalPark.rate} />
              </span>{' '}
            </h1>
            <p className="text-gray-700">{gtNationalPark.description}</p>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <h2 className="text-2xl font-semibold mb-4">
              {gtNationalPark.name}
            </h2>
            {gtNationalPark.faq.map((item: FAQ, index: number) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faArrowCircleDown} />}
                >
                  <Typography variant="h6">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold mb-4">Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gtNationalPark.activities.map((activity, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <FontAwesomeIcon
                    icon={getActivityIcon(activity)}
                    className="w-6 h-6 mr-2"
                  />
                  <h4 className="text-lg font-semibold mb-2">
                    {GtActivities[activity]}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
