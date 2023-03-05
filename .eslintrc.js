module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'sonarjs', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/forbid-prop-types': [0, { forbid: ['any', 'array'] }],
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'sonarjs/cognitive-complexity': 'off',
    // 'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    // 'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
