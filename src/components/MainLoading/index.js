import 'react-typed/dist/animatedCursor.css';
import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';
import styled, { css } from 'styled-components';
import { Html, useProgress } from '@react-three/drei';

import useTheme from '@hooks/useTheme';

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
  font-weight: 900;
  font-size: 90px;
  text-align: left;
  min-width: 50vw;
`;

const FlexWrapper = styled.div`
  zindex: 999;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MainLoading() {
  const [isLoaded, setLoaded] = useState(false);
  const [finished, setFinished] = useState(false);

  const { colors } = useTheme();

  const { progress } = useProgress();

  return (
    <FlexWrapper>
      <div>
        <H1>
          <Typed strings={[PHRASE]} typeSpeed={80} />
        </H1>
        <ProgressBar bg="gray" percent={progress} />
      </div>
    </FlexWrapper>
  );
}
