import React, { useRef, forwardRef, useEffect } from 'react';

import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';
import { Html, useProgress } from '@react-three/drei';

import ThemeProvider from '@context/ThemeProvider';
import LayoutProvider from '@context/LayoutProvider';

import MainLoading from '../../components/MainLoading';
import ScrollContainer from './ScrollContainer';
import SEO from './SEO';

import 'layout.scss';

const ScrollArea = forwardRef(({ onScroll }, ref) => {
  return (
    <div
      ref={ref}
      onScroll={onScroll}
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        overflowY: 'auto',
        top: 0,
        left: 0,
      }}
    >
      <div style={{ height: `200vh`, pointerEvents: 'none' }}></div>
    </div>
  );
});

/**
 * Wraps all gatsby generated pages with common neesd
 * handles
 *  scrolling,
 *  SEO,
 *  loading state,
 *  & ThreeJS Scene Setup
 *
 * @param {*} { children, postNode, postPath, postSEO }
 * @returns
 */
function Main({ children, postNode, postPath, postSEO }) {
  // Scroll Handling
  const scrollRef = useRef();
  const scroll = useRef(0);
  const onScroll = (e) =>
    (scroll.current = (e.target.scrollTop / e.target.scrollHeight) * 2);

  // Callbacks

  const onCanvasCreated = (state) => state.events.connect(scrollRef.current);
  return (
    <ThemeProvider>
      <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} />
      <LayoutProvider>
        <a.main
          style={{
            background: colors.background,
          }}
        >
          <MainLoading />
          <Scene
            canvasProps={{
              onCreated: onCanvasCreated,
            }}
          >
            <ScrollContainer>{children}</ScrollContainer>
          </Scene>
        </a.main>
        <ScrollArea ref={scrollRef} onScroll={onScroll} />
      </LayoutProvider>
    </ThemeProvider>
  );
}
export default Main;
