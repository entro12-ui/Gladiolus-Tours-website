import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { US, FR, DE, ES } from 'country-flag-icons/react/3x2';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export function LanguageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [rightPlacement, setRightPlacement] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setRightPlacement(window.innerWidth > 768); // Adjust the breakpoint as needed
  };

  const changeLanguage = (language: string) => {
    // Implement your language change logic here
    console.log(`Changing language to ${language}`);
    // Close the menu after language selection if needed
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={toggleMenu}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
        >
          Languages
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {() => (
          <Menu.Items
            className={`absolute mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              rightPlacement
                ? 'right-0 origin-top-right'
                : 'left-0 origin-top-left'
            }`}
            style={{ zIndex: '9999' }} // Ensure dropdown is on top of other elements
          >
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100`}
                  >
                    <US
                      title="United States"
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    English
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => changeLanguage('fr')}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100`}
                  >
                    <FR
                      title="French"
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    French
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => changeLanguage('de')}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100`}
                  >
                    <DE
                      title="German"
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    German
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => changeLanguage('es')}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100`}
                  >
                    <ES
                      title="Spanish"
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Spanish
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
}
