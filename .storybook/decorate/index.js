import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/config/theme';
import GlobalStyle from '../../src/components/GlobalStyle/GlobalStyle';
import { StoreProvider } from '../../src/stores'

export const smallItem = story => (
  <div style={{ width: '50%', margin: '0 auto', paddingTop: '20vh', textAlign: 'center' }}>
    {story()}
  </div>
);

export const withTheme = story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
);

export const withStore = story => (
  <StoreProvider>
    {story()}
  </StoreProvider>
)

