import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { SubmitHandler, useForm } from 'react-hook-form';
import { classNames } from '@collo/ui-utils';
import { FORM_VALIDATION_OPTIONS_KW_USER_EMAIL } from '@collo/ui-utils-form';
import {
  GladiolusToursContactRequest,
  useGladiolusToursContactMutation,
} from '@collo/ui-api';
import { Link } from 'react-router-dom';

export const GladiolusToursContactBody = () => {
  const mutation = useGladiolusToursContactMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GladiolusToursContactRequest>();

  const onSubmit: SubmitHandler<GladiolusToursContactRequest> = (data) => {
    mutation.mutate({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      message: data.message,
      phoneNumber: data.phoneNumber,
      subject: 'Contact Form: From Gladiolus Tours Website',
    });
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We'd love to hear from you! Whether you have questions about our
              exciting tours, need assistance in planning your dream vacation,
              or just want to say hello, we're here for you. Feel free to reach
              out using the contact form below, and our dedicated team will get
              back to you as soon as possible.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If you prefer more direct communication, you can also connect with
              us through the following:
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Tanzania, Arusha
                  <br />
                  MV8C+MC, Usa River
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <Link
                    className="hover:text-gray-900"
                    to="https://wa.link/zqu095"
                  >
                    +255 (789) 736-559
                  </Link>
                </dd>
                <dd>
                  <Link
                    className="hover:text-gray-900"
                    to="https://wa.link/gq064q"
                  >
                    +255 (753) 858-059
                  </Link>
                </dd>
                <dd>
                  <Link
                    className="hover:text-gray-900"
                    to="https://wa.link/8o6nzd"
                  >
                    +1 (401) 500-6480
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <Link
                    className="hover:text-gray-900"
                    to="mailto:info@gladiolustours.com"
                  >
                    info@gladiolustours.com
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          noValidate
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={classNames(
                      'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                      errors.firstName?.message
                        ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                        : ''
                    )}
                    required
                    {...register('firstName', {
                      required: 'First Name is required.',
                      minLength: {
                        value: 2,
                        message: 'Minimum length is 2.',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Maximum length is 20',
                      },
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: 'Only letters and spaces are allowed',
                      },
                    })}
                  />
                  {errors?.firstName?.message && (
                    <p className="text-red-600">{errors.firstName?.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={classNames(
                      'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                      errors.lastName?.message
                        ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                        : ''
                    )}
                    required
                    {...register('lastName', {
                      required: 'Last Name is required.',
                      minLength: {
                        value: 2,
                        message: 'Minimum length is 2.',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Maximum length is 20',
                      },
                      pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: 'Only letters and spaces are allowed',
                      },
                    })}
                  />
                  {errors?.lastName?.message && (
                    <p className="text-red-600">{errors.lastName?.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email *
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    className={classNames(
                      'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                      errors.email?.message
                        ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                        : ''
                    )}
                    required
                    {...register(
                      'email',
                      FORM_VALIDATION_OPTIONS_KW_USER_EMAIL
                    )}
                    placeholder="E-Mail"
                  />
                  {errors?.email?.message && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number *
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    {...register('phoneNumber')}
                    id="phone-number"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    className={classNames(
                      'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                      errors.phoneNumber?.message
                        ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
                        : ''
                    )}
                    required
                    {...register('phoneNumber', {})}
                  />
                  {errors?.phoneNumber?.message && (
                    <p className="text-red-600">
                      {errors.phoneNumber?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message *
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    {...register('message', {
                      required: 'Please provide more details here.',
                    })}
                    rows={4}
                    placeholder="Message"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                  {errors?.message?.message && (
                    <p className="text-red-600">{errors.message?.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
