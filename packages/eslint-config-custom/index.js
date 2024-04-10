module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['unused-imports', '@typescript-eslint'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    // 사용하지 않는 import문을 error 처리
    'unused-imports/no-unused-imports-ts': ['error'],

    // 사용하지 않는 변수 error 처리
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // console.log문을 error 처리
    'no-console': 'error',
  },
};
