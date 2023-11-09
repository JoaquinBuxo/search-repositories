'use client';

import { FormEvent } from 'react';
import { Container, Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContextRepository } from '../context/RepositoryContext';

const SearchBar = () => {
  const { setQuery } = useContextRepository();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    setQuery(input.value);
  };

  return (
    <Container maxWidth='lg'>
      <Paper
        component='form'
        elevation={0}
        sx={{
          m: '16px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #D9DFE4',
        }}
        onSubmit={handleSubmit}
      >
        <InputBase
          name='search'
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search Github Repositories'
        />
        <IconButton type='submit' sx={{ p: '4px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchBar;
