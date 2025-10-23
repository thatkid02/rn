import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AppContent } from './src/App';
import { appThemes, breakpoints } from './src/styles/theme';
import { StyleSheet } from 'react-native-unistyles';

StyleSheet.configure({
  settings: {
    initialTheme: 'light',
  },
  breakpoints,
  themes: appThemes,
});

function App() {

  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

export default App;
