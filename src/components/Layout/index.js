import React from 'react';
import SEO from '../SEO';
import './layout.css';

function Layout({ children, postNode, postPath, postSEO }) {
  return (
    <>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
