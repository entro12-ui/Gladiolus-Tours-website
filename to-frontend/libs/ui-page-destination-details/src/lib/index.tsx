import {
  useDestinationIdOrThrow,
  useNationalParkIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import {
  FAQ,
  GtActivities,
  GtDestinations,
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
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowCircleDown';
import './style.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RateStars } from '@collo/ui-comp-rate-star';

interface InternalLink {
  label: string;
  target: string;
  iconClass: string;
}

export function GladiolusToursDestinationsDetails() {
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

  const gtNationalPark = destination.destinations.find(
    (destination: GtDestinations) => destination.id === nationalParkId
  );

  if (!gtNationalPark) {
    return <h1>National Park Not Found</h1>;
  }

  const internalLinks: InternalLink[] = [
    { label: 'Overview', target: '#overview', iconClass: 'icon-home' },
    { label: 'Activities', target: '#activities', iconClass: 'icon-ski' },
    { label: 'FAQ', target: '#faq', iconClass: 'icon-menu' },
    {
      label: 'Safari Packages',
      target: '#safari-packages',
      iconClass: 'icon-destination',
    },
    {
      label: 'Parks Nearby',
      target: '#parks-nearby',
      iconClass: 'icon-nature',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
        <div
          className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center relative"
          style={{ backgroundImage: `url(${gtNationalPark.imageSrc})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl font-bold z-10">
              {gtNationalPark.name}{' '}
              <span className="text-base ml-2">
                <RateStars rate={gtNationalPark.rate} />
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          {internalLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                const element = document.querySelector(link.target);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center justify-center w-1/5 mx-1 p-4 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon
                icon={link.iconClass as IconProp}
                className="mr-2"
              />
              <span>{link.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2">
          <div className="px-6 py-8" id="overview">
            <h1 className="text-4xl font-bold">Overview</h1>
            <p className="text-gray-700 description">
              {gtNationalPark.description}
            </p>
          </div>
          <div className="px-6 py-8" id="activities">
            <h1 className="text-4xl font-bold">Activities</h1>
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
        <div className="px-6 py-4" id="faq">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
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
      </div>
    </div>
  );
}
