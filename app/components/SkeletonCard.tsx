import { Fragment } from 'react';
import { Card, CardHeader, CardContent, Skeleton } from '@mui/material';

const NUM_SKELETON_CONTENT = 3;

const SkeletonCard = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        avatar={
          <Skeleton
            animation='wave'
            variant='circular'
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation='wave'
            height={10}
            width='80%'
            sx={{ marginBottom: 2 }}
          />
        }
        subheader={<Skeleton animation='wave' height={10} width='40%' />}
      />
      <CardContent>
        {Array.from({ length: NUM_SKELETON_CONTENT }).map((_, index) => (
          <Fragment key={index}>
            <Skeleton animation='wave' height={10} />
            <Skeleton
              animation='wave'
              height={10}
              width='80%'
              sx={{ marginBottom: 2 }}
            />
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
