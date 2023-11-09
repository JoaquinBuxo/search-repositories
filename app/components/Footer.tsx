'use client';

import { Box, Pagination, useMediaQuery, useTheme } from '@mui/material';
import { useContextRepository } from '../context/RepositoryContext';

const Footer = () => {
  const { page, setPage, data } = useContextRepository();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    data && (
      <Box
        display='flex'
        justifyContent='center'
        mt={4}
        mb={4}
        position={isMobile ? 'relative' : 'fixed'}
        bottom={0}
        width='100%'
      >
        <Pagination
          count={data.totalPages}
          siblingCount={isMobile ? 1 : 2}
          page={page}
          size={isMobile ? 'medium' : 'large'}
          onChange={handleChange}
        />
      </Box>
    )
  );
};

export default Footer;
