import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist/']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      pluginVue.configs['flat/recommended'],
      eslintConfigPrettier,
    ],
  },
]);
