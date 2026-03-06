import axios from 'axios';
import { publicEnv } from '@/config/publicEnv';

const baseURL = publicEnv.apiBaseUrl;

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
