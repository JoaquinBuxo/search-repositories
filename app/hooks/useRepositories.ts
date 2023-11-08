import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchRepositories } from '../services/githubService';
import { RepositoriesResponse } from '../types';

export const useRepositories = (query: string) => {
  return useInfiniteQuery<RepositoriesResponse, Error>({
    queryKey: ['repositories', query],
    queryFn: ({ pageParam = 1 }) =>
      fetchRepositories(query, pageParam as number),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
    enabled: !!query,
    initialPageParam: 1,
  });
};
