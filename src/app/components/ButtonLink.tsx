'use client'

import Link from 'next/link'
import styled from 'styled-components'

interface ButtonLinkProps {
  href: string
  children: React.ReactNode
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <Link href={href} passHref>
      <StyledButton>{children}</StyledButton>
    </Link>
  )
}

const StyledButton = styled.button`
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

  &:hover {
    background-color: #006f5e;
  }

  &:focus {
    outline: 2px solid #005c4f;
    outline-offset: 2px;
  }
`
