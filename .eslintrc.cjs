module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        "prettier/prettier": "error",
        '@typescript-eslint/no-var-requires': 0,
    },
    root: true,
};