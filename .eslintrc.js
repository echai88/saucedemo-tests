module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:wdio/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
      'wdio'
  ],
  globals: {
    '$': 'readonly',
    '$$': 'readonly',
    'describe': 'readonly',
    'it': 'readonly',
    '__dirname': 'readonly',
  },
  rules: {
    'no-await-in-loop': 'off',
    'no-duplicate-imports': 'error',
    'no-restricted-imports': ['error', {
      patterns: ['src/*'],
    }],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
