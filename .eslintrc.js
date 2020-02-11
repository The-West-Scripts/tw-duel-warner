module.exports = {
    env: {
        es6: true,
        node: true,
        jquery: true,
        browser: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['warn'],
        'func-names': 'off',
        'prefer-rest-params': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
        camelcase: ['error', { allow: ['GM_notification'] }],
        'dot-notation': 'off',
        'no-prototype-builtins': 'off',
    },
    globals: {
        GM_notification: true,
        globalSendNotification: true,
        west: true,
        wman: true,
        scriptUpdater: true,
        UserMessage: true,
        Player: true,
        Character: true,
    },
};
