# 🏥 Projeto Lacrei Saúde – Frontend

Este é o repositório do projeto frontend desenvolvido com Next.js, TypeScript e Styled-Components, inspirado no Design System da Lacrei Saúde (Marsha).

## 🚀 Instruções para rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/caiocfdalmeida/lacrei-saude
   cd lacrei-saude

2. Instale a dependência:
npm install

3. Inicie o servidor local:
npm run dev

4. Acesse no navegador:
http://localhost:3000

5. Build e Deploy
É necessário fazer a instalação do jest, caso não esteja instalado:
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @types/jest ts-jest

Gerar build de produção:
npm run build

Iniciar aplicação após o build
npm run start
Adicione ao package.json 
""scripts": {
  "test": "jest"
}
"
Crie o arquivo de configuração jest.config.js

"module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
};"

Crie o arquivo jest.setup.ts
import '@testing-library/jest-dom';

6. Para rodar os testes: 
npm run test

7. Rollback no vercel:

Acesse o dashboard

Vá em "Deploys"

Escolha a versão anterior e clique em “Promote to Production”

8. Escolhas visuais e técnicas:
Framework: Next.js 15 (App Router)

Linguagem: TypeScript

Estilização: Styled-Components com suporte a tema

Design System: Inspirado no Marsha (Lacrei Saúde)

GlobalStyle: Reset básico com fonte Inter e cores neutras

Responsividade: Breakpoints definidos para mobile, tablet e desktop

Acessibilidade: Uso de tags semânticas e contraste adequado