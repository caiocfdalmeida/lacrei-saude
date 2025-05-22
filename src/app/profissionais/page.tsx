'use client'

import styled from 'styled-components'
import ButtonLink from '../components/ButtonLink'

export default function Profissionais() {
  return (
    <Container>
      <Title>Profissionais de Saúde</Title>
      <Description>
        Conheça nossa equipe dedicada que garante atendimento acolhedor e inclusivo.
      </Description>
      
      <ButtonLink href="/">Voltar para Home</ButtonLink>
    </Container>
  )
}

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
