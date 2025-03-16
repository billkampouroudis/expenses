import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  tseslint.configs.base,
  pluginReact.configs.flat.recommended,
  prettierRecommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'public/',
      'ios/',
      'android/',
      '.vite/',
      'coverage/',
    ],
    languageOptions: { globals: globals.browser },
    plugins: {},
    rules: {
      'prettier/prettier': 'warn',
      semi: ['warn', 'always'],
      'react/react-in-jsx-scope': 'off',
      'max-len': ['error', { code: 100 }],
      'no-unused-vars': [
        'warn', // Or 'error'
        {
          // ignore arguments starting with _
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
];
