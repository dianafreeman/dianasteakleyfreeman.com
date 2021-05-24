import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import styled from 'styled-components';

import { a } from '@react-spring/web';
import useLayout from '@hooks/useLayout';
import FloatingMesh from '../components/Meshes/FloatingMesh';
import Floor from '../components/Meshes/Floor';
import { ContactShadows, Plane } from '@react-three/drei';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Container = styled.div`
  position: relative;
`;

const Section = styled.div`
  z-index: 2;
  width: 100%;
  padding-top: 3em;
  padding-bottom: 3em;
  height: calc(100vh - 6em);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // position: relative;
  @media screen and (min-width: 568px) {
    // padding: 0 5vw;
    justify-content: center;
  }
`;

const Display1 = styled(a.h1)`
  font-size: 4.5rem;
  font-weight: 300;
  text-align: center;
  margin: unset;
  line-height: 1.2;
  @media screen and (min-width: 568px) {
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
  @media screen and (min-width: 568px) {
    max-width: 60%;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: unset;
    padding-right: 5vw;
    font-size: calc(1.5rem + 0.5vw);
  }
}
`;

const SocialContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  align-content: baseline;
`;

const ExternalLink = styled.a``;
const SocialLinks = () => {
  return (
    <SocialContainer>
      <li>
        <ExternalLink href="linkedin.com">
          <AiFillLinkedin />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="github.com">
          <AiFillGithub />
        </ExternalLink>
      </li>
    </SocialContainer>
  );
};

function Index() {
  const { colorSprings } = useLayout();

  // set background to section background color
  return (
    <Container>
      <Section>
        <Display1 style={{ color: colorSprings.text }}>I'm Diana. </Display1>
        <Sub2 style={{ color: colorSprings.text }}>
          Coder, Creator, Communicator.
        </Sub2>
        <hr />
        <SocialLinks />
      </Section>
    </Container>
  );
}

export default Index;
