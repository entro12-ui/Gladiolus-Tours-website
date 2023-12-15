import axios from 'axios';

export const sendFormEmailClient = axios.create({
  baseURL: 'https://api.emailjs.com/api/v1.0/email/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
