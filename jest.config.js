module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  testRegex: 'tests/.*\\.test\\.js$',
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
  verbose: true
};
