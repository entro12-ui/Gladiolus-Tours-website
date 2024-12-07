import React, { useState, ChangeEvent, FormEvent } from 'react';

interface BookingFormProps {
  adventureId: number;
}

interface FormData {
  name: string;
  email: string;
  date: string;
  guests: number;
}

export const GladiolusToursBookingInquiry = ({
  adventureId,
}: BookingFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    guests: 1,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add booking submission logic here
    console.log('Booking submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label
          htmlFor={`name-${adventureId}`}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id={`name-${adventureId}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor={`email-${adventureId}`}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id={`email-${adventureId}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor={`date-${adventureId}`}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Date
        </label>
        <input
          type="date"
          id={`date-${adventureId}`}
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor={`guests-${adventureId}`}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Number of Guests
        </label>
        <input
          type="number"
          id={`guests-${adventureId}`}
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Book Now
      </button>
    </form>
  );
};
