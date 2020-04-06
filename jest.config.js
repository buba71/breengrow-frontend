module.exports = {
  verbose: true,
  testMatch: ['<rootDir>/test/unit/**/*'],
  setupFilesAfterEnv: ['./setupTests.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    // '<rootDir>/middleware/**/*.js',
    '<rootDir>/pages/**/*.vue'
  ]
};
