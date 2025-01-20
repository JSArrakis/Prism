const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.erb/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@models/(.*)$': '<rootDir>/src/renderer/models/$1',
    '^@navigation/(.*)$': '<rootDir>/src/renderer/navigation/$1',
    '^@screens/(.*)$': '<rootDir>/src/renderer/screens/$1',
    '^@services/(.*)$': '<rootDir>/src/renderer/services/$1',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  setupFiles: ['./.erb/scripts/check-build-exists.ts'],
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  testPathIgnorePatterns: ['release/app/dist', 'release/app'],
  transform: {
    '\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '\\.css$': '<rootDir>/cssTransform.js',
  },
  transformIgnorePatterns: ['node_modules/(?!material-symbols)'],
};
