import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import theme from '../../theme';
import './layout.css';
import ThreeCanvas from '../ThreeCanvas';

function Layout({ children, ...rest }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container disableGutters style={{ height: '100vh' }}>
          {children}
          {/* <ThreeCanvas /> */}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;
