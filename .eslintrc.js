module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:storybook/recommended'],
  plugins: ['react-compiler'],
  rules: {
    'react-compiler/react-compiler': 'error',
  },
};
