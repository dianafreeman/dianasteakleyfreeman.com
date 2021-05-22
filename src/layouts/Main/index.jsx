import React, { useRef, forwardRef, Suspense } from 'react';

import { a } from '@react-spring/web';
import { useSpring } from '@react-spring/core';
import { Html, useProgress } from '@react-three/drei';

import ThemeProvider from '@context/ThemeProvider';
import LayoutProvider from '@context/LayoutProvider';

import useLayout from '@hooks/useLayout';
import MainLoading from '../../components/MainLoading';
import Scene from '../../components/Scene';
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

const Wrapper = ({ children }) => {
  const { colors } = useLayout();
  return (
    <a.main
      style={{
        background: colors.background,
      }}
    >
      {children}
    </a.main>
  );
};

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
  // Load and Fallback Handling

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
        <Wrapper>
          <Suspense fallback={<MainLoading />}>
            <Scene cameraProps={{ onCanvasCreated }}>
              <ScrollContainer scroll={scroll}>{children}</ScrollContainer>
            </Scene>
          </Suspense>
        </Wrapper>
        <ScrollArea ref={scrollRef} onScroll={onScroll} />
      </LayoutProvider>
    </ThemeProvider>
  );
}
export default Main;
