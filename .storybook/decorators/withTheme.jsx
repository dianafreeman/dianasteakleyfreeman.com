import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import theme from '../../src/theme';

const withTheme = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  );
};

export default withTheme;
