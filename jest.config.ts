/** @type {import('ts-jest').JestConfigWithTsJest} */

const baseDir = '<rootDir>/src/app/doubles';
const baseTestDir = '<rootDir>/src/tests/doubles';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  //collectCoverageFrom: ['src/**/*.ts'],
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  coveragePathIgnorePatterns: ['src/index.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  //testMatch: ['**/tests/**/*.test.ts'],
  testMatch: [`${baseTestDir}/**/*.test.ts`],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      // ts-jest configuration goes here // old tsconfig.json
      tsconfig: 'tsconfig.json',
    }],
  },
};