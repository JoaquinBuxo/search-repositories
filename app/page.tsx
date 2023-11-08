'use client';

import { useState } from 'react';
import { useRepositories } from './hooks/useRepositories';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';

export default function Home() {
  const [query, setQuery] = useState('');
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    error,
  } = useRepositories(query);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred</p>}
      {data && (
        <RepositoryList
          repositories={data.pages.flatMap((page) => page.data)}
        />
      )}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>
    </div>
  );
}
