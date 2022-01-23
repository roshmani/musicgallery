/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.only('renders learn react link', () => {
  const {container,getByText}=render(<App />);
  expect(getByText(/Music Unlimited/i)).toBeInTheDocument();
  expect(getByText('A repo as you have never seen..')).toBeInTheDocument();  
});
