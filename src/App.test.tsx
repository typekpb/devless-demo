import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the get started heading', () => {
  render(<App />);
  const headingElement = screen.getByText('Get started');
  expect(headingElement).toBeInTheDocument();
});
