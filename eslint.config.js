import js from '@eslint/js';
import vanillaExtract from '@antebudimir/eslint-plugin-vanilla-extract';
import react from '@eslint-react/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const restrictLayers = (files, groups, message) => ({
  files,
  rules: {
    'no-restricted-imports': [
      'error',
      { patterns: [{ group: groups, message }] },
    ],
  },
});

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@eslint-react': react,
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      '@eslint-react/no-array-index-key': 'warn',
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-self-closing-comp': [
        'error',
        { component: true, html: true },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:'],
            ['^react$', '^react-dom', '^@?\\w'],
            ['^@(app|routes|pages|domains|shared)(/.*|$)'],
            ['^\\.'],
            ['^.+\\.css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  restrictLayers(
    ['src/shared/**'],
    ['@app/*', '@routes/*', '@pages/*', '@domains/*'],
    'shared는 다른 계층을 import할 수 없습니다.',
  ),
  restrictLayers(
    ['src/domains/cart/**'],
    ['@app/*', '@routes/*', '@pages/*', '@domains/material/*'],
    'domains는 pages/app 또는 다른 도메인을 import할 수 없습니다.',
  ),
  restrictLayers(
    ['src/domains/material/**'],
    ['@app/*', '@routes/*', '@pages/*', '@domains/cart/*'],
    'domains는 pages/app 또는 다른 도메인을 import할 수 없습니다.',
  ),
  {
    files: ['**/*.css.ts'],
    extends: [vanillaExtract.configs.recommended],
  },
  eslintConfigPrettier,
]);