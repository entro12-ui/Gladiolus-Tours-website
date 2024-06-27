import { useMutation } from '@tanstack/react-query';
import { apiClient } from '../client';
import { GtNotify } from '@collo/ui-comp-notifications';

/**
 * Contact Form
 */
export type GladiolusToursRequest = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export type GladiolusToursResponse = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const useGladiolusToursContactMutation = (
  onSuccess: (response: GladiolusToursResponse) => void
) => {
  return useMutation<GladiolusToursResponse, Error, GladiolusToursRequest>(
    async (data) => {
      return await apiClient.post(`/contact`, data);
    },
    {
      onSuccess: (success) => {
        GtNotify.success('Message Sent', `${success.message}`);
      },
      onError: (error) => {
        GtNotify.danger('Failed To Send Message', `${error.message}`);
      },
    }
  );
};
