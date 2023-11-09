'use client';

import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import LoadingList from './components/LoadingList';
import { Pagination, Container, Box, Typography } from '@mui/material';

import { useContextRepository } from './context/RepositoryContext';

export default function Home() {
  const { page, data, setPage } = useContextRepository();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Box my={4}>
          <RepositoryList />
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
