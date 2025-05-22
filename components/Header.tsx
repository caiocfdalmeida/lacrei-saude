'use client';

import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background-color: #00695c; /* verde azulado */
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-family: 'Inter', sans-serif;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #b2dfdb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Lacrei Saúde</Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
