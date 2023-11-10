import { render, screen } from '@testing-library/react';
import RepositoryCard from '../RepositoryCard';

describe('RepositoryCard component', () => {
  const mockRepository = {
    id: 123,
    html_url: 'https://github.com/user/repo',
    name: 'Test Repo',
    owner: {
      login: 'Test User',
      avatar_url: 'https://github.com/user/avatar.jpg',
    },
    description: 'This is a test repository',
    topics: ['topic1', 'topic2'],
    language: 'JavaScript',
    stargazers_count: 123,
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
  };

  test('renders correctly', () => {
    render(<RepositoryCard repository={mockRepository} />);

    const titleElement = screen.getByText('Test Repo');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText('This is a test repository');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('correctly displays the owner name', () => {
    render(<RepositoryCard repository={mockRepository} />);

    const ownerElement = screen.getByText(/Test User/i);
    expect(ownerElement).toBeInTheDocument();
  });

  test('repository link points to correct URL', () => {
    render(<RepositoryCard repository={mockRepository} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'https://github.com/user/repo');
  });
});
