import { ReactNode, useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  day: number;
}

export const AccordionItem = ({ title, children, day }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between cursor-pointer p-4 bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <div className="">Day {day}</div> */}
        <h3 className="text-xl font-semibold mb-2 text-black overflow-hidden">
          {title}
        </h3>
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
            style={{ transition: 'transform 0.2s ease-out' }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.697 7.283a1 1 0 01.02 1.414l-8.576 8.819A1.6 1.6 0 0112 18a1.584 1.584 0 01-1.141-.484L2.283 8.697a1 1 0 111.434-1.394L12 15.82l8.283-8.518a1 1 0 011.414-.02zm-9.99 8.84v-.001z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-height duration-300 ease-in-out ${
          isOpen ? 'h-auto' : 'h-0'
        }`}
      >
        <div className="bg-gray-100 dark:bg-gray-100 p-4">{children}</div>
      </div>
    </div>
  );
};
