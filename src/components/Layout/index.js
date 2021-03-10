import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

import theme from '../../theme';

import SEO from './SEO';
import { styled } from '@material-ui/core/styles';

function Layout({ children, ...rest }) {
  {
    /* todo: add dynamic helmet*/
  }
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Layout;
