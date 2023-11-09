import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders search input placeholder', () => {
  render(<Header />);
  const inputElement = screen.getByPlaceholderText(/Search/i);
  expect(inputElement).toBeInTheDocument();
});
