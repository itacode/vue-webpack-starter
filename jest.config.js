// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration
// https://vue-test-utils.vuejs.org/installation/

module.exports = {
  transform: {
    // process `*.vue` files with `@vue/vue3-jest`
    '^.+\\.vue$': '@vue/vue3-jest',
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

  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
    // to fix `ReferenceError: Vue is not defined` due to a bug (?) in @vue/test-utils@2.0.0
    // https://github.com/vuejs/vue-jest/issues/479
    // https://issuehint.com/issue/vuejs/test-utils/1525
    customExportConditions: [
      'node',
      'node-addons'
    ]
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
};
