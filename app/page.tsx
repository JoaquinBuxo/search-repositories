'use client';

import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import LoadingList from './components/LoadingList';
import { Pagination, Container, Box, Typography } from '@mui/material';

import { useContextRepository } from './context/RepositoryContext';

export default function Home() {
  const { query, page, data, setPage, isLoading, isError, error } =
    useContextRepository();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Box my={4}>
          {isLoading ? (
            <LoadingList />
          ) : data?.data.length ? (
            <RepositoryList repositories={data.data} />
          ) : (
            <Typography variant='h6' color='textSecondary' align='center'>
              {query
                ? 'No results found. Please try another search.'
                : 'Please enter a search term to start.'}
            </Typography>
          )}
        </Box>
        {data && data.totalPages > 1 && (
          <Box display='flex' justifyContent='center' mt={4} mb={4}>
            <Pagination
              count={data.totalPages}
              siblingCount={2}
              page={page}
              size='large'
              onChange={handleChange}
            />
          </Box>
        )}
      </Container>
    </>
  );
}
