import React from 'react';
import SEO from '../SEO';
import './layout.css';

function Layout({ children, ...rest }) {
  console.log('Layout Props');
  console.log(rest);
  return (
    <>
      <SEO />
      <main>{children}</main>
    </>
  );
}

export default Layout;
