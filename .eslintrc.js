module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'unused-imports'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
        endOfLine: 'auto',
        tabWidth: 2,
      },
    ],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
