'use client';

import { createContext, useContext, useState } from 'react';
import { useRepositories } from '../hooks/useRepositories';
import { RepositoryContextType } from './types';

const RepositoryContext = createContext({} as RepositoryContextType);

export const RepositoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError, error } = useRepositories(query, page);

  return (
    <RepositoryContext.Provider
      value={{
        query,
        setQuery,
        page,
        setPage,
        data,
        isLoading,
        isError,
        error,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepository = () => {
  return useContext(RepositoryContext);
};
