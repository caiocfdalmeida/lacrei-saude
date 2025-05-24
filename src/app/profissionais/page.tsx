'use client';

import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';

const Container = styled.main`
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  text-align: center;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f1f1f;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #666;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ProfessionalsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ProfessionalCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  width: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ProfessionalName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f1f1f;
  margin-bottom: 0.5rem;
`;

const ProfessionalSpecialty = styled.p`
  font-size: 1rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

const ProfessionalBio = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export default function Profissionais() {
  return (
    <Container>
      <Title>Profissionais de Saúde 🩺</Title>
      <Description>
        Conheça nossa equipe dedicada que garante atendimento acolhedor e inclusivo.
      </Description>
      <ProfessionalsContainer>
        <ProfessionalCard>
          <ProfessionalName>Dra. Ana Silva</ProfessionalName>
          <ProfessionalSpecialty>Cardiologista</ProfessionalSpecialty>
          <ProfessionalBio>
            Especialista em doenças cardiovasculares com mais de 10 anos de experiência, focada em prevenção e tratamento personalizado.
          </ProfessionalBio>
        </ProfessionalCard>
        <ProfessionalCard>
          <ProfessionalName>Dr. Carlos Mendes</ProfessionalName>
          <ProfessionalSpecialty>Pediatra</ProfessionalSpecialty>
          <ProfessionalBio>
            Dedicado ao cuidado infantil, com abordagem empática e atenção ao desenvolvimento saudável das crianças.
          </ProfessionalBio>
        </ProfessionalCard>
        <ProfessionalCard>
          <ProfessionalName>Enf. Mariana Costa</ProfessionalName>
          <ProfessionalSpecialty>Enfermeira Obstetra</ProfessionalSpecialty>
          <ProfessionalBio>
            Especialista em saúde materna, oferecendo suporte durante gestação, parto e pós-parto com cuidado humanizado.
          </ProfessionalBio>
        </ProfessionalCard>
      </ProfessionalsContainer>
      <ButtonLink href="/">Voltar para Home</ButtonLink>
    </Container>
  );
}