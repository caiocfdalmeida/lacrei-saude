'use client';

import Link from 'next/link';
import styled from 'styled-components';

interface ButtonLinkProps {
  href: string;
  children: string; 
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <StyledLink href={href} passHref aria-label={children}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  background-color: #00856F;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  display: inline-block; /* Necessário para padding funcionar corretamente */

  &:hover {
    background-color: #006f5e;
  }

  &:focus {
    outline: 2px solid #005c4f;
    outline-offset: 2px;
  }

  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;