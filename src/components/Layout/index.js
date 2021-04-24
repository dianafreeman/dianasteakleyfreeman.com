import React from 'react';
import SEO from '../SEO';
import reportWebVitals from '@config/reportWebVitals';
import './layout.css';

function Layout({ children, ...rest }) {
  reportWebVitals(console.log);
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  );
}

export default Layout;
