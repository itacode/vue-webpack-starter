// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration

module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    // process `*.vue` files with `vue-jest`
    '^.+\\.vue$': 'vue-jest',
    // process js with `babel-jest`
    '^.+\\.jsx?$': 'babel-jest',
    // process `*.ts` files with `ts-jest`
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Fix "SyntaxError: Cannot use import statement outside a module"
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Jsdom is for a browser environment.
  testEnvironment: 'jsdom',

  testURL: 'http://localhost/',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
};
