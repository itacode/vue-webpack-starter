// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration
// https://vue-test-utils.vuejs.org/installation/

export const transform = {
  // process `*.vue` files with `@vue/vue3-jest`
  '^.+\\.vue$': '@vue/vue3-jest',
  // process js with `babel-jest`
  '^.+\\.jsx?$': 'babel-jest',
  // process `*.ts` files with `ts-jest`
  '^.+\\.tsx?$': [
    'ts-jest',
    {
      tsconfig: {
        module: 'commonjs',
      },
    },
  ],
};
export const moduleNameMapper = {
  '^@/(.*)$': '<rootDir>/src/$1',
};
export const testEnvironment = 'jsdom';
export const testEnvironmentOptions = {
  url: 'http://localhost/',
  // to fix `ReferenceError: Vue is not defined` due to a bug (?) in @vue/test-utils@2.0.0
  // https://github.com/vuejs/vue-jest/issues/479
  // https://issuehint.com/issue/vuejs/test-utils/1525
  customExportConditions: ['node', 'node-addons'],
};
export const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$';
