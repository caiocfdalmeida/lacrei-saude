'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #004d40; /* verde escuro */
  color: #c8e6c9; /* verde claro */
  text-align: center;
  padding: 1.5rem 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados.
    </FooterContainer>
  );
}
