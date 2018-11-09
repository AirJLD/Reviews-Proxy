module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: "eslint-config-airbnb",
    plugins: [
      'react',
      'jsx-a11y',
      'import',
    ],
    rules: {
        'no-console': 'off',
        'react/jsx-filename-extension': [0],
    },
};
