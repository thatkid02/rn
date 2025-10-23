import type { Preview } from '@storybook/react-native-web-vite'
import { StyleSheet } from 'react-native-unistyles';
import { appThemes, breakpoints } from '../src/styles/theme';

StyleSheet.configure({
  settings: {
    initialTheme: 'light',
  },
  breakpoints,
  themes: appThemes,
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;