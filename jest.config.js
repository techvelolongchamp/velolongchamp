module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/utils/',
    '<rootDir>/cypress/',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['!/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'hooks/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    'styles/**/*.{ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(jpg|JPG|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/fileMock.ts',
  },
}
