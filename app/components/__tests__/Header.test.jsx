import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('renders correctly', () => {
    render(<Header />);
    const appBarElement = screen.getByRole('banner');
    expect(appBarElement).toBeInTheDocument();
  });

  test('contains a SearchBar component', () => {
    render(<Header />);
    const inputElement = screen.getByPlaceholderText(/Search/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('the AppBar has the correct style', () => {
    render(<Header />);
    const appBarElement = screen.getByRole('banner');
    expect(appBarElement).toHaveStyle({
      backgroundColor: '#F6F8FA',
      border: '1px solid #D9DFE4',
    });
  });
});
