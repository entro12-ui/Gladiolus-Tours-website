import React, { useEffect, useState } from 'react';
import {
  GtToursRoute,
  useItineraryIdOrThrow,
} from '@collo/ui-routes-gladiolus';
import { generatePath, Navigate } from 'react-router-dom';
import { AccordionItem } from './accordion-item';
import './ImageSlider.css';
import {GtAdventures} from "@collo/ui-persistance";

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
      <button className="arrow" onClick={prevSlide}>
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
      <button className="arrow" onClick={nextSlide}>
        {'>'}
      </button>
    </div>
  );
};

export const GladiolusToursItineraryDetails = () => {
  const itineraryId = useItineraryIdOrThrow();
  const itinerary = GtAdventures[itineraryId];

  if (!itinerary) {
    return <Navigate to={generatePath(GtToursRoute.NotFound)} />;
  }

  const carouselImages = itinerary.carouselImage.map((step) => step);

  return (
    <>
      <ImageSlider images={carouselImages} />
      <div className="container mx-auto py-10">
        <div className="space-y-8">
          {itinerary.itinerary.map((step, index) => (
            <AccordionItem key={index} title={step.title}>
              <div className="mb-6">
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
    </>
  );
};
