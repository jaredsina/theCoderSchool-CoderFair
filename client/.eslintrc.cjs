module.exports = {
  root: true,
  env: { node: true, es2020: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/*'],
  overrides: [
    {
      plugins: ['react-refresh', 'check-file'],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es2020: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'check-file/filename-naming-convention': [
          'error',
          {
            '**/*.{ts,tsx}': 'KEBAB_CASE',
          },
          {
            ignoreMiddleExtensions: true,
          },
        ],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'import/no-cycle': 'error', // disallow cyclic dependencies
        'linebreak-style': ['error', 'unix'], // enforce consistent linebreak style
        'react/prop-types': 'off', // disable prop-types as we use TypeScript for type checking
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
            ], // enforce a convention in module import order
            'newlines-between': 'always', // require a newline between import groups
            alphabetize: { order: 'asc', caseInsensitive: true }, // enforce alphabetization
          },
        ],
        'import/default': 'off', // disallow default exports
        'import/no-named-as-default': 'off', // disallow named exports as the default export
        'import/no-named-as-default-member': 'off', // disallow named exports that are not grouped with a default export
        'import/no-restricted-paths': [
          'error',
          {
            zones: [
              // enforce unidirectional codebase:

              // e.g. src/app can import from src/features but not the other way around
              {
                target: './src/features',
                from: './src/app',
              },

              // e.g src/features and src/app can import from these shared modules but not the other way around
              {
                target: [
                  './src/components',
                  './src/hooks',
                  './src/lib',
                  './src/types',
                  './src/utils',
                ],
                from: ['./src/features', './src/app'],
              },
            ],
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error'], // disallow unused variables
        '@typescript-eslint/explicit-function-return-type': ['off'], // require explicit return types on functions and class methods
        '@typescript-eslint/explicit-module-boundary-types': ['off'], // require explicit return and argument types on exported functions' and classes' public class methods
        '@typescript-eslint/no-explicit-any': ['error'], // disallow usage of the any type
        '@typescript-eslint/no-empty-function': ['off'], // disallow empty functions
      },
    },
    {
      plugins: ['check-file'],
      files: ['src/**/!(__tests__)/*'],
      rules: {
        'check-file/folder-naming-convention': [
          'error',
          {
            '**/*': 'KEBAB_CASE',
          },
        ],
      },
    },
  ],
};
