module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['module:@react-native/babel-preset'],

    plugins: [
      ['react-native-unistyles/plugin', {
        root: 'src'
      }],
      'react-native-reanimated/plugin',
      ['babel-plugin-react-compiler', { target: '19' }],
    ]
  }
}