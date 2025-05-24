'use client';

import styled from 'styled-components';
import ButtonLink from './components/ButtonLink'

const Container = styled.main`
  min-height: calc(100vh - 88px - 48px);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;

  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export default function HomePage() {
  return (
    <Container>
      <Title>Bem-vindo ao Lacrei Saúde! </Title>
      <Description>
        Seu sistema inclusivo e acolhedor de saúde!
      </Description>
      <ButtonGroup>
        <ButtonLink href="/faq">Perguntas Frequentes</ButtonLink>
        <ButtonLink href="/missao">Nossa Missão</ButtonLink>
        <ButtonLink href="/profissionais">Profissionais</ButtonLink>
      </ButtonGroup>
    </Container>
  );
}