import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Taiabur Rahman/i })).toBeInTheDocument();
});
