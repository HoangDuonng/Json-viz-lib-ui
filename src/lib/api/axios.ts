import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? '/api/v1';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Global error handling (e.g. toast, redirect to login)
    return Promise.reject(err);
  }
);
