import { useEffect, useState } from 'react';

interface IStats {
  id: number;
  name: string;
  value: string;
}

const overview: IStats[] = [
  { id: 1, name: 'Number of Destinations', value: '3' },
  { id: 2, name: 'Years of Experience', value: '12' },
  { id: 3, name: 'Tours Offered', value: '10' },
  { id: 4, name: 'Customized Tours', value: '10' },
];

const Typewriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const newCurrentWord = words[currentWordIndex];
      setCurrentWord(newCurrentWord);

      if (isDeleting) {
        setCurrentIndex((prevIndex) => {
          if (prevIndex > 0) {
            return prevIndex - 1;
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevWordIndex) =>
              prevWordIndex === words.length - 1 ? 0 : prevWordIndex + 1
            );
            return 0;
          }
        });
      } else {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < newCurrentWord.length) {
            return prevIndex + 1;
          } else {
            setIsDeleting(true);
            return newCurrentWord.length;
          }
        });
      }
    };

    const intervalId = setInterval(type, 150);

    return () => clearInterval(intervalId);
  }, [words, currentWordIndex, currentIndex, isDeleting]);

  return (
    <h3 id="typewriter" className="font-sans">
      Discover our services:{' '}
      <span className="text-orange-500 font-semibold">
        {currentWord.substring(0, currentIndex)}
      </span>
    </h3>
  );
};

export const GladiolusOverview = () => {
  const words: string[] = ['Safari', 'Safari & Trekking', 'Safari & Zanzibar'];

  return (
    <div className="bg-[#e2e0d4] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by creators worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Welcome to Gladiolus Tours Safari, your trusted partner for
              tailor-made, unforgettable safaris in <br /> Tanzania.
            </p>
            <Typewriter words={words} />
          </div>
          {/*<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>*/}
        </div>
      </div>
    </div>
  );
};
