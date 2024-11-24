import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    // https://github.com/eslint/eslint/discussions/17429#discussioncomment-6579229
    ignores: ['**/__tests__/', '**/*.d.ts'],
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      // "off" or 0; "warn" or 1; "error" or 2
      'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
      'no-unused-vars':
        process.env.NODE_ENV !== 'production' ? 'warn' : 'error',
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];
