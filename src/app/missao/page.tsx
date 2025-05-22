'use client'

import styled from 'styled-components'

const Container = styled.main`
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`

export default function MissaoPage() {
  return (
    <Container>
      <Title>Nossa Missão</Title>
      <Text>
        A Lacrei Saúde existe para garantir o acesso a uma saúde mais justa,
        segura e acolhedora para pessoas LGBTQIAPN+ e outros grupos em situação
        de vulnerabilidade. Buscamos transformar o cuidado em um ato de
        respeito, dignidade e inclusão.
      </Text>
    </Container>
  )
}
