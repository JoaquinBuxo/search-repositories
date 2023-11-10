import { render, screen, fireEvent } from '@testing-library/react';
import { useContextRepository } from '../../hooks/useContextRepository';

import SearchBar from '../SearchBar';

jest.mock('../../hooks/useContextRepository', () => ({
  useContextRepository: jest.fn(),
}));

describe('SearchBar', () => {
  test('updates the query on form submission', () => {
    const setQueryMock = jest.fn();
    useContextRepository.mockReturnValueOnce({
      setQuery: setQueryMock,
    });

    render(<SearchBar />);

    // Simulate user input and form submission
    const input = screen.getByPlaceholderText('Search Github Repositories');
    fireEvent.change(input, { target: { value: 'react' } });

    const form = screen.getByTestId('search-form');
    fireEvent.submit(form);

    expect(setQueryMock).toHaveBeenCalledWith('react');
  });

  test('prevents default form submission behavior', () => {
    const setQueryMock = jest.fn();
    useContextRepository.mockReturnValueOnce({
      setQuery: setQueryMock,
    });

    render(<SearchBar />);

    const form = screen.getByTestId('search-form');
    fireEvent.submit(form);

    expect(setQueryMock).not.toHaveBeenCalled();
  });
});
