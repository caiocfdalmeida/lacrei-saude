const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Adiciona configurações para o jest
/** @type {import('jest').Config} */
const config = {
  // Adiciona mais opções antes do teste
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest', 
};

module.exports = createJestConfig(config);