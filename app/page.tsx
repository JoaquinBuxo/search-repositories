'use client';

import { useState } from 'react';
import { useRepositories } from './hooks/useRepositories';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';
import { Pagination, Container, AppBar, Toolbar, Box } from '@mui/material';

export default function Home() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useRepositories(query, page);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <AppBar
        position='static'
        sx={{ backgroundColor: '#F6F8FA', border: '1px solid #D9DFE4' }}
        elevation={0}
      >
        <Toolbar>
          <Box width='100%' px={2}>
            <SearchBar onSearch={setQuery} />
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth='xl'>
        <Box my={4}>
          <RepositoryList repositories={data?.data || []} />
        </Box>
        <Box display='flex' justifyContent='center' mt={4} mb={4}>
          <Pagination
            count={data?.totalPages || 1}
            siblingCount={2}
            page={page}
            size='large'
            onChange={handleChange}
          />
        </Box>
      </Container>
    </>
  );
}
