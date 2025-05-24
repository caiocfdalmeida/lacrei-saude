'use client';

import styled from 'styled-components';

const Container = styled.main`
  padding: 2rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f1f1f;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  color: #666;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export default function MissaoPage() {
  return (
    <Container>
      <Title>Nossa Missão 🌈</Title>
      <Text>
        A Lacrei Saúde existe para garantir o acesso a uma saúde mais justa,
        segura e acolhedora para pessoas LGBTQIAPN+ e outros grupos em situação
        de vulnerabilidade. Buscamos transformar o cuidado em um ato de respeito,
        dignidade e inclusão. 
      </Text>
    </Container>
  );
}