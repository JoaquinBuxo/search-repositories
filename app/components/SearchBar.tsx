'use client';

import { useState, FormEvent } from 'react';
import { Container, Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query);
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
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search Github Repositories'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton type='submit' sx={{ p: '4px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchBar;
