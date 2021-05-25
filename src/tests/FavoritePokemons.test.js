import React from 'react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

it('renders a reading with the text `No favorite pokemon found`', () => {
  const { getByText } = renderWithRouter(<FavoritePokemons />);
  const favoriteText = getByText(/No favorite pokemon found/i);
  expect(favoriteText).toBeInTheDocument();
});
