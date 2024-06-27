import { useMutation } from '@tanstack/react-query';
import { apiClient } from '../client';
import { GtNotify } from '@collo/ui-comp-notifications';

/**
 * Contact Form
 */
export type GladiolusToursContactRequest = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export type GladiolusToursContactResponse = {
  data: string;
  status: number;
};

export const useGladiolusToursContactMutation = () => {
  return useMutation<
    GladiolusToursContactResponse,
    Error,
    GladiolusToursContactRequest
  >(
    async (data) => {
      return await apiClient.post(`/contact`, data);
    },
    {
      onSuccess: (response) => {
        if (response.status === 201) {
          GtNotify.success(
            'Message Sent',
            `Your message has been successfully sent.`
          );
        } else {
          GtNotify.info(
            'Message Sent',
            `Your message has been sent, but there was an unexpected status code.`
          );
        }
      },
      onError: () => {
        GtNotify.danger(
          'Server Error',
          `There was a server error. Please try again later.`
        );
      },
    }
  );
};
