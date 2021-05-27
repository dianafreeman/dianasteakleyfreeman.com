import React, { useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import styled from 'styled-components';

import { a, useSpring} from '@react-spring/web';
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiFillMail } from 'react-icons/ai';
import useTheme from '@hooks/useTheme';
import useLayout from '@hooks/useLayout';
import Scene from '../components/Scene';

const ContainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;


const StyledMain = styled(a.main)`
  margin: unset;
  padding-right: 10vw;
  padding-left: 10vw;
`;

const Wrapper = ({ children }) => {
  const { colorSprings } = useLayout();

  return (
    <StyledMain style={{ backgroundColor: colorSprings.background }}>

      {children}
    </StyledMain>
  );
};

const SceneWrapper = styled.div`
  z-index: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  @media screen and (min-width: 568px) {
    width: 50%;
    left: unset;
    right: 0;
  }
`;

const Container = ({children, ...rest}) => (
  <ContainWrapper {...rest}>
    <Wrapper>

      {children}
        <SceneWrapper>
          <Scene cameraProps={{ position: [0, 5, 30], zoom: 1 }} />
        </SceneWrapper>
    </Wrapper>
  </ContainWrapper>
)

const Section = styled.div`
  z-index: 2;
  width: inherit;
  padding-top: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.xl};
  height: calc(100vh - ${props => props.theme.spacing.xl} - ${props => props.theme.spacing.xl});
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 568px) {
    max-width: 60%;
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
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: unset;
    padding-right: 5vw;
    font-size: calc(1.5rem + 0.5vw);
  }
}
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  width: inherit;
  justify-content: space-between;
  list-style: none;
  align-content: baseline;
  padding: unset;
`;

const ExternalLink = styled(a.a)`
  font-size: 4rem;
  &:active, &:focus {
    color: ${props => props.theme.palette.primaryLight}; // css fallback
  }
`;

const AnimatedLink = (props) => {
  const [isHovered, set] = useState(false)
  const { springConfig: config, palette } = useTheme()
  const [{ color }] = useSpring({
    color: isHovered ? palette.primaryLight : palette.secondaryLight,
    config,
  }, [isHovered])

  const toggle = ( ) => set(bool => !bool)

  return <ExternalLink onMouseEnter={() => toggle()} onMouseLeave={() => toggle()} {...props} style={{ color }}/>
}
const SocialLinks = () => {

  return (
    <SocialList>
      <li>
        <AnimatedLink href="https://www.linkedin.com/in/dianasteakleyfreeman/">
          <AiFillLinkedin />
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink href="https://github.com/dianafreeman">
          <AiFillGithub />
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink href="https://twitter.com/dianasfreeman">
          <AiOutlineTwitter />
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink href="mailto:diana@dianasteakelyfreeman.com">
          <AiFillMail />
        </AnimatedLink>
      </li>
    </SocialList>
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
        <hr style={{ width: "100%", marginTop: '2em' }} />
        <SocialLinks />
      </Section>
    </Container>
  );
}

export default Index;

