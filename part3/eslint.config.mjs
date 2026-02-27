import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import stylisticJs from '@stylistic/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Base Recommended Rules (This "uses" the js variable)
  js.configs.recommended,

  // 2. TypeScript and React Recommended Rules
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // 3. Your Custom Configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      'no-unused-vars': 'warn', // 1. Allow require() statements
      '@typescript-eslint/no-require-imports': 'off',

      // 2. Turn off the "unused vars" error (or set it to "warn")

      '@typescript-eslint/no-unused-vars': 'warn',

      // 3. Allow console.log() statements
      'no-console': 'off',
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },

  // 4. Global Ignores
  {
    ignores: ['dist/**'],
  },
]
