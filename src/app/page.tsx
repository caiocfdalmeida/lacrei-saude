'use client'

import styled from 'styled-components'
import ButtonLink from './components/ButtonLink'


export default function HomePage() {
  return (
    <Container>
      <Title>Bem-vindo ao Lacrei Saúde</Title>
      <Description>
        Seu sistema inclusivo de saúde baseado no Marsha Design System.
      </Description>

      <ButtonGroup>
        <ButtonLink href="/faq">Perguntas Frequentes</ButtonLink>
        <ButtonLink href="/missao">Nossa Missão</ButtonLink>
        <ButtonLink href="/profissionais">Profissionais</ButtonLink>
      </ButtonGroup>
    </Container>
  )
}

// Estilização com styled-components

const Container = styled.main`
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1f1f1f;
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #4f4f4f;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

