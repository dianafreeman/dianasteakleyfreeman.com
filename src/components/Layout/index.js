import React from 'react';
import SEO from '../SEO';
import './layout.css';

function Layout({ children, ...rest }) {
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  );
}

export default Layout;
