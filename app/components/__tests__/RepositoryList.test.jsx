import { render, screen } from '@testing-library/react';
import { useContextRepository } from '../../hooks/useContextRepository';

import RepositoryList from '../RepositoryList';

jest.mock('../../hooks/useContextRepository', () => ({
  useContextRepository: jest.fn(),
}));

describe('RepositoryList', () => {
  test('displays LoadingList during loading', () => {
    // Simulate isLoading true
    useContextRepository.mockReturnValueOnce({
      isLoading: true,
    });

    render(<RepositoryList />);

    // Ensure LoadingList is rendered
    expect(screen.getByTestId('loading-list')).toBeInTheDocument();
  });

  test('displays error message in case of error', () => {
    useContextRepository.mockReturnValueOnce({
      isError: true,
      error: { message: 'Error message' },
    });

    render(<RepositoryList />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  test('displays no results search message', () => {
    useContextRepository.mockReturnValueOnce({
      repositories: [],
      query: 'searchQuery',
    });

    render(<RepositoryList />);
    expect(
      screen.getByText('No results found. Please try another search.')
    ).toBeInTheDocument();
  });

  test('displays start message without search term', () => {
    useContextRepository.mockReturnValueOnce({
      repositories: [],
    });

    render(<RepositoryList />);
    expect(
      screen.getByText('Please enter a search term to start.')
    ).toBeInTheDocument();
  });
});
