import React from 'react';
import SEO from './SEO';
import './layout.css';
import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';

import Scene from '../../components/Scene';

function Layout({ children, postNode, postPath, postSEO }) {
  const [{ background, fill }, set] = useSpring(
    { background: '#f0f0f0', fill: '#202020' },
    [],
  );

  return (
    <>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <a.main style={{ background }}>
        <div className="container">
          {/* <div className="navbar">maybe something goes here?</div> */}
          <div className="canvas-wrapper">
            <Scene />
          </div>
          <div className="content-wrapper">{children}</div>
        </div>
      </a.main>
    </>
  );
}
export default Layout;
