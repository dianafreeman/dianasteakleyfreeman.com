import React from 'react';
import SEO from '../SEO';
import reportWebVitals from '@config/reportWebVitals';
import './layout.css';

function Layout({ children, postNode, postPath, postSEO }) {
  reportWebVitals(console.log);
  return (
    <>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
