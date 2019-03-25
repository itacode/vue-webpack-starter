module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jquery: true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  parserOptions: {
    "ecmaVersion": 8,
  },
  rules: { // "off" or 0; "warn" or 1; "error" or 2
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
  },
};
