import { useQuery } from '@tanstack/react-query';
import { fetchRepositories } from '../services/githubService';
import { RepositoriesResponse } from '../types';

export const useFetchRepositories = (query: string, page: number) => {
  return useQuery<RepositoriesResponse, Error>({
    queryKey: ['repositories', query, page],
    queryFn: () => fetchRepositories(query, page),
    enabled: !!query,
  });
};
