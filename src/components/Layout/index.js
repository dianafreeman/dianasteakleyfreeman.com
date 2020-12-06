import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

import theme from '../../theme';
import Navigation from './Navigation';
import Main from './Main';
import SEO from './SEO';
import { styled } from '@material-ui/core/styles';
import { Box, Breadcrumbs } from '@material-ui/core';

const PaddedContainer = styled(Container)(({ theme, ...rest }) => ({
  padding: theme.spacing(4),
  position: 'relative',
}));

function Layout({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO />
      <PaddedContainer disableGutters>
        <Navigation />
        {children}
      </PaddedContainer>
    </ThemeProvider>
  );
}

export default Layout;
