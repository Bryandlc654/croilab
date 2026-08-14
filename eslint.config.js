// @ts-check
import tsParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    rules: {
      // Pendiente: secciones #proyectos/#nosotros/#blog no existen aún.
      'astro/jsx-a11y/anchor-is-valid': 'off',
    },
  },
];
