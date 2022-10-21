import { render, screen } from '@testing-library/react';
import App from './App';

test('renders megbank header', () => {
  render(<App />);
  const el = screen.getByText(/Magbank/i);
  expect(el).toBeInTheDocument();
});
