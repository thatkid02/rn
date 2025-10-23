import React from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { appThemes, breakpoints } from './styles/theme';
import { Home } from './pages/Home';

StyleSheet.configure({
  themes: appThemes,
  breakpoints: breakpoints,
});


export const AppContent = () => {
  return <Home />;
};