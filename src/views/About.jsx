import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Divider, Section } from '../elements/Parallax'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { colors } from '../../tailwind'
import FloatingImage from '../components/FloatingImage'
import heroImage from '../images/HeroTransparent.png'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`
const About = ({ children, offset }) => (
  <>
    <Divider
      bg={`radial-gradient(circle at bottom left,${colors['grey-dark']},${colors['grey-darker']})`}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.3}
      offset={offset}
    >
      <Section speed={-0.1} offset={offset}>
        <FloatingImage src={heroImage} floatDir="right" />
      </Section>
    </Divider>
    <Content speed={0.5} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
