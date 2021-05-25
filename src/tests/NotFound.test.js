import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../components';

describe('Teste o componente <NotFound.js />',
  () => {
    it('Teste se página contém um heading h2 com o texto Page requested not found 😭',
      () => {
        const { getByRole } = renderWithRouter(<NotFound />);
        const text = getByRole('heading',
          { name: 'Page requested not found Crying emoji' });
        expect(text).toBeInTheDocument();
      });
    it('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
      () => {
        const { getByRole } = renderWithRouter(<NotFound />);
        const image = getByRole('img',
          { name: 'Pikachu crying because the page requested was not found' });
        expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
      });
  });
