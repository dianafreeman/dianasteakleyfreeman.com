import React from 'react';
import styled from 'styled-components';

import loadable from '@loadable/component';

import { FlexBox } from '../components/Flex';

const SceneInternals = loadable(() => import('./Internals'));

const SceneWrapper = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    position: fixed;
    width: 50%;
    left: unset;
    right: 0;
  }
`;

const SceneBox = styled.div`
  top: calc(1em + 2vh);
  height: calc(98vh - 4em);
  width: 100%;
  left: 0;
  position: absolute;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    right: 0;
    left: unset;
    width: 50%;
  }
`;
const FlexSceneArea = styled(FlexBox)`
  min-height: 50vh;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

const RenderableScene = (props) => {
  const isSSR = typeof window === 'undefined';

  return (
    !isSSR && (
      <Suspense fallback="...">
        <SceneBox>
          <SceneWrapper>
            <SceneInternals {...props} />
          </SceneWrapper>
        </SceneBox>
        <FlexSceneArea order={1} />
      </Suspense>
    )
  );
};
export default RenderableScene;
