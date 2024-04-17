module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended'
    ],
    plugins: ['@typescript-eslint', 'astro'],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        '@typescript-eslint/indent': ['error', 2],
        'indent': 'off'
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro']
            },
            rules: {
                '@typescript-eslint/no-invalid-void-type': 'off',
                'no-undef': 'off'
            }
        }
    ]
}
