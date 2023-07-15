module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    // Agrega aquí cualquier otra configuración de ESLint que estés utilizando
  ],
  rules: {
    'react/jsx-max-props-per-line': [2, {maximum: 1}],
  },
};
