// import 'react-typed/dist/animatedCursor.css';
import React, { useState, useRef, useEffect } from 'react';
import Typed from 'react-typed';
import styled, { css } from 'styled-components';
import { Html, useProgress } from '@react-three/drei';

import useLayout from '@hooks/useLayout';

const PHRASE = "Hi, I'm Diana";

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  position: relative;
  background-color: ${(props) => props.bg};
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.percent}%;
    height: 100%;
    background-color: white;
  }
`;

const H1 = styled.h1`
  color: white;
  fontfamily: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 80px;
  text-align: left;
  min-width: 50vw;
`;

const FlexWrapper = styled.div`
  z-index: ${({ finished }) => (finished ? 0 : 999)};
  background-color: ${(props) => props.bg || 'black'};
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainLoading() {
  const typeRef = useRef();

  const { finished, setFinished } = useLayout();
  const { progress } = useProgress();

  const onTypingComplete = () => setFinished(true);

  return (
    <FlexWrapper finished={finished}>
      <div>
        <H1>
          <Typed
            ref={typeRef}
            strings={['Loading...']}
            typeSpeed={80}
            onComplete={onTypingComplete}
          />
        </H1>
        <ProgressBar bg="gray" percent={progress} />
      </div>
    </FlexWrapper>
  );
}
