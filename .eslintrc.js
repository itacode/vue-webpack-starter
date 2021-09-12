module.exports = {
  root: true,
  // https://eslint.vuejs.org/user-guide/#usage
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  rules: {
    // "off" or 0; "warn" or 1; "error" or 2
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'no-unused-vars': process.env.NODE_ENV !== 'production' ? 'warn' : 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
