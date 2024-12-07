import React, { useEffect, useState } from 'react';
import { generatePath, Navigate } from 'react-router-dom';
import {
  GtToursRoute,
  useAdventuresIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import { AccordionItem } from './accordion-item';
import './ImageSlider.css';
import { GtAdventures } from '@collo/ui-persistance';
import parse from 'html-react-parser';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setCurrentIndex(0);
    };

    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
        img.onload = handleLoad;
      });
    };

    preloadImages();
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        {'<'}
      </button>
      <div className="slide-container">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        ></div>
      </div>
      <button className="arrow right" onClick={nextSlide}>
        {'>'}
      </button>
    </div>
  );
};

export const GladiolusToursAdventuresDetails = () => {
  const adventureId = useAdventuresIdOrThrow();
  const adventure = GtAdventures[adventureId];

  if (!adventure) {
    return <Navigate to={generatePath(GtToursRoute.NotFound)} />;
  }

  const carouselImages = adventure.carouselImage.map((step) => step);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {adventure.title}
        </h2>
        <div className="mb-8 md:mb-0">
          <ImageSlider images={carouselImages} />
        </div>
        <h2 className="text-base font-semibold leading-7 text-indigo-400">
          Overview
        </h2>
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <p>{adventure.overview}</p>
        </div>
        <h2 className="text-base font-semibold leading-7 text-indigo-400">
          Itinerary
        </h2>
        <div>
          <div className="space-y-8">
            {adventure.itinerary.map((step, index) => (
              <AccordionItem key={index} title={step.title} day={step.day}>
                <div className="mb-6">
                  <p className="mb-2 text-black dark:text-black">
                    {step.Accommodation &&
                      `Accommodation: ${step.Accommodation}`}
                  </p>
                  <p className="text-black dark:text-black">
                    {parse(step.description)}
                  </p>
                </div>
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
