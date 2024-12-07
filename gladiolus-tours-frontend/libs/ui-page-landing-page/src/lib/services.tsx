const services = [
  {
    name: 'Unforgettable Adventures Await',
    description:
      'We craft immersive journeys, blending local authenticity with seamless logistics, ensuring every moment is a cherished travel memory.',
  },
  {
    name: 'Tailored Excellence',
    description:
      'Choose Gladiolus Tours for personalized experiences that cater to your unique desires, providing a bespoke adventure where every detail is curated to perfection.',
  },
  {
    name: 'Expertly Guided Explorations',
    description:
      'Opt for Gladiolus Tours and be led by seasoned guides passionate about unlocking the secrets of each destination, creating enriching and insightful travel narratives.',
  },
  {
    name: 'Safety Redefined',
    description:
      'At Gladiolus Tours, your well-being is paramount. Our commitment to the highest safety standards ensures you can explore with confidence, focusing solely on your adventure.',
  },
  {
    name: 'Cultural Immersion Beyond Borders',
    description:
      'With Gladiolus Tours, delve deep into the heart of diverse cultures. Our itineraries offer authentic encounters, fostering a profound connection with the places you visit.',
  },
  {
    name: 'Seamless Wanderlust',
    description:
      'Gladiolus Tours transforms your travel dreams into reality. Our commitment to seamless logistics ensures a stress-free journey, allowing you to savor every moment of your exploration.',
  },
];

export const WhyGoWithGladiolus = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why go with Gladiolus Tours
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Immerse yourself in unparalleled adventures, where every journey is
            meticulously crafted, creating memories that last a lifetime.
            Discover the extraordinary with us!
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
