'use client';

import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchRepositories } from './services/githubService';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';

export default function Home() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useQuery(
    ['repositories', query],
    () => fetchRepositories(query),
    {
      enabled: !!query,
    }
  );

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {isLoading && <p>Loading...</p>}
      {error && <p>An error occurred</p>}
      {data && <RepositoryList repositories={data.items} />}
    </div>
  );
}
