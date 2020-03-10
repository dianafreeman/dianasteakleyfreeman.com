import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../src/components/GlobalStyle/GlobalStyle';
import { StoreProvider } from '../../src/stores';
import theme from '../../src/config/theme';

export const smallItem = story => (
  <div style={{ width: '50%', margin: '0 auto', paddingTop: '20vh', textAlign: 'center' }}>
    {story()}
  </div>
);

export const withTheme = story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle fontFamily={theme.fontFamily} />
    {story()}
  </ThemeProvider>
);

export const withLightTheme = story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle lightTheme fontFamily={theme.fontFamily} />
    {story()}
  </ThemeProvider>
);

export const withStore = story => <StoreProvider>{story()}</StoreProvider>;
