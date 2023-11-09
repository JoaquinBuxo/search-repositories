'use client';

import { Repository } from '../types';
import { Grid, Typography } from '@mui/material';
import { useContextRepository } from '../context/RepositoryContext';
import RepositoryCard from './RepositoryCard';
import LoadingList from './LoadingList';

const RepositoryList = () => {
  const { query, data, isLoading, isError, error } = useContextRepository();

  const repositories = data?.data;

  if (isLoading) return <LoadingList />;

  if (isError) {
    return (
      <Typography variant='h6' color='textSecondary' align='center'>
        {error.message}
      </Typography>
    );
  }

  if (!repositories) {
    return (
      <Typography variant='h6' color='textSecondary' align='center'>
        {query
          ? 'No results found. Please try another search.'
          : 'Please enter a search term to start.'}
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      {repositories.map((repository: Repository) => (
        <Grid item xs={12} sm={6} md={3} key={repository.id}>
          <RepositoryCard repository={repository} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RepositoryList;
