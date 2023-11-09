import { useState } from 'react';
import { AppBar } from '@mui/material';
import SearchBar from './SearchBar';

const Header = () => {
  const [query, setQuery] = useState('');

  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: '#F6F8FA', border: '1px solid #D9DFE4' }}
      elevation={0}
    >
      <SearchBar />
    </AppBar>
  );
};

export default Header;
