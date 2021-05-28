import React from 'react';
import styled from 'styled-components';

import { a } from '@react-spring/web';
import { Loader } from '@react-three/drei';

import useLayout from '@hooks/useLayout';
import Scene from '../components/Scene';

import { FlexContainer, FlexBox, FlexColumn } from '../components/Flex';
import SocialLinks from '../components/SocialLinks';

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

const Section = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: ${({ theme }) => theme.spacing.xl};
    padding-bottom: ${({ theme }) => theme.spacing.xl};
    padding-left: ${({ theme }) => theme.spacing.xl};
    max-width: 50%;
    justify-content: center;
  }
`;

const Display1 = styled(a.h1)`
  font-size: 4.5rem;
  font-weight: 300;
  text-align: center;
  margin: unset;
  line-height: 1.2;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    text-align: left;
  }
  @media screen and (min-width: 768px) {
    font-size: calc(4.5rem + 2vw);
  }
`;

const Sub2 = styled(a.p)`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin: unset;
  text-align: center;
  padding-bottom: 2em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    text-align: left;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-bottom: unset;
    padding-right: 5vw;
    font-size: calc(1.5rem + 0.5vw);
  }
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

const Button = styled(a.a)`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 25px;
  font-size: 1rem;
  margin-bottom: 1em;
  display: inline;
`;

const HorizBorder = styled.hr`
  width: 100%;
  padding: unset;
  margin: ${({ margin }) =>
    margin ? `${margin[0] || 0} ${margin[1] || 0}` : 'auto'};
`;

const FlexSceneArea = styled(FlexBox)`
  min-height: 50vh;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

const RenderableScene = () => (
  <>
    <SceneBox>
      <SceneWrapper>
        <Scene cameraProps={{ position: [0, 5, 30], zoom: 1 }} />
      </SceneWrapper>
    </SceneBox>
    <FlexSceneArea order={1} />
  </>
);

function Index() {
  const { colorSprings } = useLayout();

  return (
    <>
      <FlexContainer>
        <Section>
          <FlexColumn>
            <FlexBox justify="flex-start" justifyMd="center" order={1}>
              <Display1 style={{ color: colorSprings.text }}>
                I'm Diana.
              </Display1>
              <Sub2 style={{ color: colorSprings.text }}>
                Coder, Creator, Communicator.
              </Sub2>
            </FlexBox>
            <FlexBox order={2}>
              <HorizBorder />
              <a.p style={{ color: colorSprings.text }}>
                There's more coming to this site soon.
              </a.p>
              <Button
                style={{
                  backgroundColor: colorSprings.text,
                  color: colorSprings.background,
                }}
              >
                Open in Github
              </Button>
              <HorizBorder />
              <SocialLinks />
            </FlexBox>
            <RenderableScene />
          </FlexColumn>
        </Section>
      </FlexContainer>
      <Loader />
    </>
  );
}

export default Index;
