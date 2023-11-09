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
} from '@mui/material';

type RepositoryCardProps = {
  repository: Repository;
};

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea
        component='a'
        href={repository.html_url}
        target='_blank'
        rel='noopener noreferrer'
        sx={{ height: '100%' }}
      >
        <CardHeader
          avatar={
            <Avatar aria-label='repository'>
              <Image
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
                width={50}
                height={50}
              />
            </Avatar>
          }
          title={repository.name}
          subheader={`Owner: ${repository.owner.login}`}
        />
        <CardContent>
          <Typography
            variant='body2'
            color='text.secondary'
            mb={2}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {repository.description}
          </Typography>
          {repository.topics.length > 0 && (
            <Typography variant='body2' color='text.secondary'>
              Topics: {repository.topics.join(', ')}
            </Typography>
          )}
          <Box display='flex' alignItems='center'>
            {repository.language && (
              <Typography variant='body2' color='text.secondary' mr={2}>
                Language: {repository.language}
              </Typography>
            )}
            <Typography variant='body2' color='text.secondary'>
              Stars: {repository.stargazers_count}
            </Typography>
          </Box>
          <Box display='flex' alignItems='center'>
            <Typography variant='body2' color='text.secondary' mr={2}>
              Created at: {new Date(repository.created_at).toLocaleDateString()}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Last updated:{' '}
              {new Date(repository.updated_at).toLocaleDateString()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RepositoryCard;
