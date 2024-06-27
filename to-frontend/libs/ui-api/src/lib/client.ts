import axios from 'axios';

const baseURL = 'https://p6v8eafh3f.execute-api.af-south-1.amazonaws.com/prev';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
