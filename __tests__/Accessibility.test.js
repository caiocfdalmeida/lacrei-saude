// __tests__/HomePage.test.tsx (continuando ou em um novo arquivo)

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../src/app/page'; 

describe('HomePage Accessibility', () => {
  test('os botões de navegação devem ser focáveis', () => {
    render(<HomePage />);


    const faqButton = screen.getByText('Perguntas Frequentes');
    const missaoButton = screen.getByText('Nossa Missão');
    const profissionaisButton = screen.getByText('Profissionais');

    // Simula o foco em cada botão programaticamente
    // Aqui, verificamos se o elemento pode receber foco
    faqButton.focus();
    expect(faqButton).toHaveFocus();

    missaoButton.focus();
    expect(missaoButton).toHaveFocus();

    profissionaisButton.focus();
    expect(profissionaisButton).toHaveFocus();
  });
});