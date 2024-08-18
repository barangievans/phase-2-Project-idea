import React from 'react'; // Import React to use JSX
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Dairy Cow Management/i);
  expect(headingElement).toBeInTheDocument();
});
