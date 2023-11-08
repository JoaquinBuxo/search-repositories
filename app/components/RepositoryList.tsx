import { Repository } from '../types';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  Grid,
} from '@mui/material';

type RepositoryListProps = {
  repositories: Repository[];
};

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <Grid container spacing={3}>
      {repositories.map((repo) => (
        <Grid item xs={12} sm={6} md={3} key={repo.id}>
          <Card sx={{ height: '100%' }}>
            <CardActionArea
              component='a'
              href={repo.html_url}
              target='_blank'
              rel='noopener noreferrer'
              sx={{ height: '100%' }}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label='repository'>
                    <Image
                      src={repo.owner.avatar_url}
                      alt={repo.owner.login}
                      width={50}
                      height={50}
                    />
                  </Avatar>
                }
                title={repo.name}
                subheader={`Owner: ${repo.owner.login}`}
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary' mb={2}>
                  {repo.description}
                </Typography>
                {repo.topics.length > 0 && (
                  <Typography variant='body2' color='text.secondary'>
                    Topics: {repo.topics.join(', ')}
                  </Typography>
                )}
                <Box display='flex' alignItems='center'>
                  {repo.language && (
                    <Typography variant='body2' color='text.secondary' mr={2}>
                      Language: {repo.language}
                    </Typography>
                  )}
                  <Typography variant='body2' color='text.secondary'>
                    Stars: {repo.stargazers_count}
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                  <Typography variant='body2' color='text.secondary' mr={2}>
                    Created at: {new Date(repo.created_at).toLocaleDateString()}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Last updated:{' '}
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RepositoryList;
