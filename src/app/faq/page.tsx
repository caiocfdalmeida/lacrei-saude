'use client'

import styled from 'styled-components'

const Container = styled.main`
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

const Question = styled.dt`
  font-weight: bold;
  margin-top: 1rem;
`

const Answer = styled.dd`
  margin-left: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`

export default function FAQPage() {
  return (
    <Container>
      <Title>Perguntas Frequentes (FAQ)</Title>
      <dl>
        <Question>Como posso encontrar um profissional confiável?</Question>
        <Answer>
          Todos os profissionais da plataforma passam por curadoria e seguem o
          nosso compromisso com o acolhimento e o respeito.
        </Answer>

        <Question>Preciso me cadastrar para buscar profissionais?</Question>
        <Answer>
          Não. A
