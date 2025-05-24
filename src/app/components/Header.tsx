'use client';

import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background-color: #00695c;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Inter', sans-serif;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: #b2dfdb;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: white;
  }

  &:focus {
    outline: 2px solid #005c4f;
    outline-offset: 2px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Lacrei Saúde</Logo>
      <Nav role="navigation">
        <NavLink href="/">Home</NavLink>
      </Nav>
    </HeaderContainer>
  );
}