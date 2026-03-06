'use client';

import { useQuery } from '@tanstack/react-query';
import { getLibraries, type GetLibrariesParams } from '../services/libraryService';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 12;

export function useLibraries(params: GetLibrariesParams) {
  const page = params.page ?? DEFAULT_PAGE;
  const pageSize = params.pageSize ?? DEFAULT_PAGE_SIZE;
  const search = params.search ?? '';

  return useQuery({
    queryKey: ['libraries', page, pageSize, search],
    queryFn: () =>
      getLibraries({
        page,
        pageSize,
        search: search || undefined,
      }),
    staleTime: 60_000,
  });
}
