import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { ParallaxBackground, Section } from '../elements/Parallax'
import Content from '../elements/Content'

const Wrapper = styled.div`
  ${tw`w-full`};
`
const Hero = ({ children, offset }) => (
  <div style={{ display: 'block' }}>
    <ParallaxBackground
      bg={`radial-gradient(circle at bottom left,${colors['grey-dark']},${colors['grey-darkest']})`}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.3}
      offset={offset}
     />
    <Content speed={1.0} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </div>
)

export default Hero

Hero.propTypes = {
  offset: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
}
