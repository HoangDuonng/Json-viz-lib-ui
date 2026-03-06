import { api } from '@/lib/api/axios';
import type { LibrariesApiResponse } from '../types';

export interface GetLibrariesParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export async function getLibraries(params: GetLibrariesParams = {}) {
  const { data } = await api.get<LibrariesApiResponse>('/libraries', {
    params,
  });
  return data;
}
