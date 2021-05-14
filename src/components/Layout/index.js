import React from 'react';
import SEO from '../SEO';
import './layout.css';
import Scene from '../Scene';

function Layout({ children, postNode, postPath, postSEO }) {
  return (
    <>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <main style={{ height: '100vh' }}>
        <Scene />
        {children}
      </main>
    </>
  );
}

export default Layout;
