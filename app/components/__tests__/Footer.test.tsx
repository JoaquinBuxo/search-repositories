import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContextRepository } from '../../hooks/useContextRepository';
import Footer from '../Footer';

// Mock the useContextRepository hook
jest.mock('../../context/RepositoryContext', () => ({
  useContextRepository: jest.fn(),
}));

describe('Footer component', () => {
  const mockSetPage = jest.fn();

  beforeEach(() => {
    (useContextRepository as jest.Mock).mockReturnValue({
      page: 1,
      setPage: mockSetPage,
      data: { totalPages: 5 },
    });
  });

  test('renders correctly', () => {
    render(<Footer />);
    const paginationElement = screen.getByRole('navigation');
    expect(paginationElement).toBeInTheDocument();
  });

  test('calls setPage when page number is clicked', async () => {
    render(<Footer />);

    const button = await screen.findByText('2');
    userEvent.click(button);

    await waitFor(() => {
      expect(mockSetPage).toHaveBeenCalledWith(2);
    });
  });
});
