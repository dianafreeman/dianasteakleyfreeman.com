import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider, Section } from '../elements/Parallax'
import Content from '../elements/Content'
import FloatingImage from '../components/FloatingImage'
import heroImage from '../images/HeroTransparent.png'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider
      bg={`radial-gradient(circle at bottom left,${colors['grey-dark']},${colors['grey-darker']})`}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    >
      <Section speed={-0.1} offset={offset}>
        <FloatingImage src={heroImage} floatDir="left" />
      </Section>
    </Divider>
    <Content speed={0.5} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
