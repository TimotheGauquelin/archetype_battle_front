import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const headingElement = screen.getByText(/page d'accueil/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome component', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/bienvenue/i);
  expect(welcomeElement).toBeInTheDocument();
});