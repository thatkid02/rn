import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-native-web-vite",
    "options": {
      "pluginReactOptions": {
        "babel": {
          plugins: [
            ["react-native-unistyles/plugin", {
              root: './src',
            }],
            'react-native-reanimated/plugin'
          ]
        }
      }
    }
  }
};
export default config;