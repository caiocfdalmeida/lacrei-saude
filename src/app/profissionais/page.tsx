'use client'

import styled from 'styled-components'

const Container = styled.main`
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`

export default function ProfissionaisPage() {
  return (
    <Container>
      <Title>Profissionais de Saúde</Title>
      <Description>
        Aqui você encontra profissionais que respeitam sua identidade e acolhem
        com empatia e segurança. A Lacrei Saúde conecta você com quem entende e
        cuida com respeito.
      </Description>
      {/* No futuro: Cards com lista de profissionais */}
    </Container>
  )
}
