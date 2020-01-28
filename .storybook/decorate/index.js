import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/config/theme'
import GlobalStyle from '../../src/components/GlobalStyle/GlobalStyle'
export { default as DecorateState } from './state'

export const smallItem = story => (
  <div style={{ width: '50%', margin: '0 auto', paddingTop: '20vh', textAlign: 'center' }}>{story()}</div>
);

export const Theme = story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
);
