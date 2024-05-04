import { Fragment, useMemo, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '@collo/ui-utils';
import { GtDestinationCategory, GtDestinations } from '@collo/ui-persistance';
import { generatePath, Link } from 'react-router-dom';
import { GtToursRoute } from '@collo/ui-routes-gladiolus';

const sortOptions = [
  { name: 'By Name', href: '#' },
  { name: 'By Circuit', href: '#' },
];

const filters = [
  {
    id: 'Circuit',
    name: 'Circuit',
    options: [
      {
        value: GtDestinationCategory['All Circuits'],
        label: 'All Circuits',
        checked: true,
      },
      {
        value: GtDestinationCategory['Northern Circuit'],
        label: 'Northern Circuit',
        checked: false,
      },
      {
        value: GtDestinationCategory['Southern Circuit'],
        label: 'Southern Circuit',
        checked: false,
      },
      {
        value: GtDestinationCategory['Eastern Circuit'],
        label: 'Eastern Circuit',
        checked: false,
      },
      {
        value: GtDestinationCategory['Western Circuit'],
        label: 'Western Circuit',
        checked: false,
      },
      {
        value: GtDestinationCategory['Ocean Islands'],
        label: 'Ocean Islands',
        checked: false,
      },
      {
        value: GtDestinationCategory['Mafia Island'],
        label: 'Mafia Island',
        checked: false,
      },
      {
        value: GtDestinationCategory['Zanzibar Island'],
        label: 'Zanzibar Island',
        checked: false,
      },
    ],
  },
];

const generateStars = (rate: number): JSX.Element[] => {
  const stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push(
      <span key={i} className="text-yellow-400">
        &#9733;
      </span>
    );
  }
  return stars;
};

export function Destinations() {
  const [selectedCircuit, setSelectedCircuit] = useState<GtDestinationCategory>(
    GtDestinationCategory['All Circuits']
  );
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>('By Name');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 sm:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? '-rotate-180' : 'rotate-0',
                                      'h-5 w-5 transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      onChange={() =>
                                        setSelectedCircuit(option.value)
                                      }
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Gladiolus Tours Destinations
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
                Thoughtfully designed objects for the workspace, home, and
                travel.
              </p>
            </div>

            {/* Filters */}
            <section
              aria-labelledby="filter-heading"
              className="border-t border-gray-200 pt-6"
            >
              <h2 id="filter-heading" className="sr-only">
                Destination filters
              </h2>

              <div className="flex items-center justify-between">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    {/*
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort {selectedSortOption}
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  */}
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm font-medium text-gray-900'
                                )}
                                onClick={() =>
                                  setSelectedSortOption(option.name)
                                }
                              >
                                {option.name}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  Filters
                </button>

                <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
                  {filters.map((section, sectionIdx) => (
                    <Popover
                      as="div"
                      key={section.name}
                      id="menu"
                      className="relative inline-block text-left"
                    >
                      <div>
                        <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          <span>{section.name}</span>
                          {sectionIdx === 0 ? (
                            <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                              1
                            </span>
                          ) : null}
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={() =>
                                    setSelectedCircuit(option.value)
                                  }
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </section>

            {/* Product grid */}
            <section
              aria-labelledby="more-products-heading"
              className="mt-16 pb-24"
            >
              <h2 id="more-products-heading" className="sr-only">
                More Destinations
              </h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {GtDestinations.flatMap((destination) =>
                  destination.destinations
                    .filter((park) =>
                      selectedCircuit === GtDestinationCategory['All Circuits']
                        ? true
                        : park.category === selectedCircuit
                    )
                    .map((park) => (
                      <Link
                        key={park.id}
                        to={generatePath(GtToursRoute.DestinationDetails, {
                          destinationId: String(destination.id),
                          parkId: String(park.id),
                        })}
                        className="group"
                      >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                          <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 h-64">
                            <img
                              src={park.imageSrc}
                              alt={park.imageAlt}
                              className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                          <h3 className="truncate">{park.name}</h3>
                          <p className="ml-2 text-sm font-semibold text-gray-600">
                            {generateStars(park.rate)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">
                          {park.description.slice(0, 100)}...
                        </p>
                      </Link>
                    ))
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
