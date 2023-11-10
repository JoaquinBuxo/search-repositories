import { Grid } from '@mui/material';
import SkeletonCard from './SkeletonCard';

const LoadingList = () => {
  return (
    <Grid container spacing={3} data-testid='loading-list'>
      {Array.from(new Array(12)).map((_, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <SkeletonCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingList;
