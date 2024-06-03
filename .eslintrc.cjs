module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'plugin:import/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/newline-after-import': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                groups: ['index', 'builtin', 'external', 'type', 'internal', 'parent', 'sibling', 'object'],
            },
        ],
    },
};
