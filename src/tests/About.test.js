import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About Component', () => {
  test('Show pokedéx info', () => {
    render(<About />);
    const textInfo = screen.getByText(/this application simulates a pokédex/i);
    expect(textInfo).toBeInTheDocument();
  });
});
