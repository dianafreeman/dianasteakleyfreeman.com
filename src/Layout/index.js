import React from 'react';
import SEO from '../components/SEO';
import SceneProvider from '../components/Scene/SceneProvider';
import './layout.css';
import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';

function Layout({ children, postNode, postPath, postSEO }) {
  const [{ background, fill }, set] = useSpring(
    { background: '#f0f0f0', fill: '#202020' },
    [],
  );
  return (
    <SceneProvider>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <a.main style={{ height: '100vh', background }}>{children}</a.main>
    </SceneProvider>
  );
}

export default Layout;
