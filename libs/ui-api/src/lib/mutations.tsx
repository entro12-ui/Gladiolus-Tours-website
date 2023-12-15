import { useMutation } from '@tanstack/react-query';
import { sendFormEmailClient } from './index';

export interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  message: string;
}

export const useSendEmail = (onSuccess: (response: string) => void) => {
  return useMutation<string, Error, IForm>(
    async (variables) => {
      return await sendFormEmailClient.postForm(`send`, variables);
    },
    {
      onSuccess,
      onError: (err) => {
        alert('Failed to send message: ' + err.message);
      },
    }
  );
};
