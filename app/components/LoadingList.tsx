import { Grid } from '@mui/material';
import SkeletonCard from './SkeletonCard';

const NUM_SKELETON_CARD = 12;

const LoadingList = () => {
  return (
    <Grid container spacing={3} my={2} data-testid='loading-list'>
      {Array.from({ length: NUM_SKELETON_CARD }).map((_, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <SkeletonCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingList;
