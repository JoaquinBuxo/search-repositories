import { Repository } from '../types';
import Image from 'next/image';

type RepositoryListProps = {
  repositories: Repository[];
};

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div>
      {repositories.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            width={50}
            height={50}
          />
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <p>Owner: {repo.owner.login}</p>
          <p>Created at: {new Date(repo.created_at).toLocaleDateString()}</p>
          <p>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
          <p>Topics: {repo.topics.join(', ')}</p>
          <p>Language: {repo.language}</p>
          <p>Stars: {repo.stargazers_count}</p>
        </a>
      ))}
    </div>
  );
};

export default RepositoryList;
