'use client';

import { useState } from 'react';
import { useRepositories } from './hooks/useRepositories';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';
import Pagination from './components/Pagination';

export default function Home() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useRepositories(query, page);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <RepositoryList repositories={data?.data || []} />
      <Pagination
        currentPage={page}
        totalPages={data?.totalPages || 1}
        onPageChange={setPage}
      />
    </div>
  );
}
