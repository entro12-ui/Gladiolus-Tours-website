import { GtToursRoute } from '@collo/ui-routes-gladiolus';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { US } from 'country-flag-icons/react/3x2';
import { FR } from 'country-flag-icons/react/3x2';
import { DE } from 'country-flag-icons/react/3x2';
import { ES } from 'country-flag-icons/react/3x2';
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { Dialog, Transition, Menu } from '@headlessui/react';
import { classNames } from '@collo/ui-utils';
import GtLogo from './assets/gt-logo.png';

const navigation = [
  { name: 'Home', href: GtToursRoute.Home },
  { name: 'Services', href: GtToursRoute.Service },
  { name: 'Safaris', href: GtToursRoute.Safaris },
  { name: 'Adventures', href: GtToursRoute.Adventures },
  { name: 'Destinations', href: GtToursRoute.Destinations },
  { name: 'Accommodations', href: GtToursRoute.Accommodation },
  { name: 'About Us', href: GtToursRoute.AboutUs },
  { name: 'Contact Us', href: GtToursRoute.Contact },
];

export const GladiolusHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link to={GtToursRoute.Home} className="-m-1.5 p-1.5">
          {/*<Logo style={{ width: '50%' }} className={'mx-auto'} />*/}
          <img className="h-10 w-auto" src={GtLogo} alt="Gladiolus Tours" />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                Languages
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
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
              <Menu.Items className="lg:absolute right-0 z-10 mt-2 lg:w-56 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => changeLanguage('en')}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                        )}
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
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                        )}
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
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                        )}
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
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                        )}
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
            </Transition>
          </Menu>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={GtToursRoute.Home} className="-m-1.5 p-1.5">
              <span className="sr-only">Gladiolus Tours</span>
              <img
                className="h-8 w-auto"
                src="https://www.cleanpng.com/png-georgia-tech-yellow-jackets-football-georgia-tech-1344222/preview.html"
                alt="Gladiolus Tours"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                      Languages
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
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
                    <Menu.Items className="lg-w-56 right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => changeLanguage('en')}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                              )}
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
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                              )}
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
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                              )}
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
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'group flex items-center px-4 py-2 text-sm w-full focus:outline-none hover:bg-gray-100'
                              )}
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
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
