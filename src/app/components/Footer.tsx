'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #004d40;
  color: #b2dfdb;
  text-align: center;
  padding: 1rem 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 576px) {
    padding: 0.75rem 0;
    font-size: 0.75rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  span, .email-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid #b2dfdb;
    border-radius: 50%;
    font-size: 0.75rem;
    color: #b2dfdb;
  }

  .email-icon {
    padding: 4px;
    box-sizing: border-box;
  }

  .email-icon svg {
    fill: #b2dfdb;
    width: 100%;
    height: 100%;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <span>f</span>
        <span>i</span>
        <span>ln</span>
        <div className="email-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
      </SocialIcons>
      © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados.
    </FooterContainer>
  );
}