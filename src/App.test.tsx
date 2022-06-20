import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppService }  from './Services/app.service';

test('renders movie list link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Movie List/i);
  expect(linkElement).toBeInTheDocument();
});

test('check if movies list can be fetched', () => {
  const appService = new AppService();
  appService.getMovies().then(m => {
    expect(m.length).toBeGreaterThan(0);
  });
});

test('check if movie can be fetched by passing filter', () => {
  const appService = new AppService();
  appService.getMovie('The').then(m => {
    expect(m.length).toBeGreaterThan(0);
  });
});

test('check for empty filter', () => {
  const appService = new AppService();
  appService.getMovie('').then(m => {
    expect(m).toBe(null);
  });
});
