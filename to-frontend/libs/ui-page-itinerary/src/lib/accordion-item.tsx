import React, { ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between cursor-pointer p-4 bg-white dark:bg-gray-800 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <div>{isOpen ? '▼' : '►'}</div>
      </div>
      {isOpen && (
        <div className="bg-gray-100 dark:bg-gray-700 p-4">{children}</div>
      )}
    </div>
  );
};
