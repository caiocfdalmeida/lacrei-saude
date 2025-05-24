
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../src/app/page';
import { useRouter } from 'next/navigation';

describe('HomePage Navigation', () => {


  beforeEach(() => {

    jest.clearAllMocks();


    const mockRouter = {
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
    };
    useRouter.mockReturnValue(mockRouter);
    mockPush = mockRouter.push;
  });

  test('os botões de navegação devem ter os links corretos e navegar ao clicar', () => {

    render(<HomePage />);


    const faqButton = screen.getByText('Perguntas Frequentes');
    const missaoButton = screen.getByText('Nossa Missão');
    const profissionaisButton = screen.getByText('Profissionais');


    expect(faqButton).toHaveAttribute('href', '/faq');
    expect(missaoButton).toHaveAttribute('href', '/missao');
    expect(profissionaisButton).toHaveAttribute('href', '/profissionais');


    fireEvent.click(faqButton);
    expect(mockPush).toHaveBeenCalledWith('/faq'); // Verifica se push foi chamado com '/faq'
    expect(mockPush).toHaveBeenCalledTimes(1); 


    mockPush.mockClear();

    fireEvent.click(missaoButton);
    expect(mockPush).toHaveBeenCalledWith('/missao'); // Verifica se push foi chamado com '/missao'
    expect(mockPush).toHaveBeenCalledTimes(1); 

    mockPush.mockClear();

    fireEvent.click(profissionaisButton);
    expect(mockPush).toHaveBeenCalledWith('/profissionais'); // Verifica se push foi chamado com '/profissionais'
    expect(mockPush).toHaveBeenCalledTimes(1); 


  });
});