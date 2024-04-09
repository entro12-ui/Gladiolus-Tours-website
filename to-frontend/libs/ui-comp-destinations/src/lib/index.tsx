import React from 'react';
import { GladiolusToursDestinations } from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';
import { UiStatus } from '@collo/ui-comp-status';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProps {
  destinations: GladiolusToursDestinations;
}

export const Destinations: React.FC<IProps> = ({ destinations }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray dark:bg-gray-800 py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <h2 className="text-4xl font-extrabold mb-8 text-white dark:text-white">
        Explore Gladiolus Destinations
      </h2>
      <Slider {...sliderSettings} className="slick-container">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="my-8 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-white duration-300 hover:transform hover:scale-105"
          >
            <Link
              to={generatePath(GtToursRoute.Destinations)}
              className="block"
            >
              <figure>
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="rounded-t h-64 w-full object-cover"
                />
                <figcaption className="p-4">
                  <div className="mb-3 text-sm text-black dark:text-black">
                    Status: <UiStatus status={item.status} />
                  </div>
                  <p className="text-xl mb-3 font-semibold leading-tight text-black dark:text-black">
                    {item.name}
                  </p>
                  <p className="text-sm leading-5 text-black dark:text-black">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};
