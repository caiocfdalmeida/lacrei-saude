'use client'

import styled from 'styled-components'

const Container = styled.main`
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Question = styled.dt`
  font-weight: bold;
  margin-top: 1rem;
`

const Answer = styled.dd`
  margin-bottom: 1rem;
  margin-left: 1rem;
`

export default function FAQPage() {
  return (
    <Container>
      <Title>Perguntas Frequentes (FAQ)</Title>
      <dl>
        <Question>Como posso encontrar um profissional confiável?</Question>
        <Answer>Você pode usar a plataforma para buscar profissionais verificados.</Answer>

        <Question>O que é o Marsha Design System?</Question>
        <Answer>É um sistema de design inclusivo usado por este projeto.</Answer>
      </dl>
    </Container>
  )
}
