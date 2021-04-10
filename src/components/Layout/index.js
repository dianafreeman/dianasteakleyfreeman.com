import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import theme from '../../theme';
import SEO from './SEO';
import './layout.css';

function Layout({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <CssBaseline />
      <Container disableGutters style={{ height: '100vh' }} {...rest}>
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
