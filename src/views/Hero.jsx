import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import FloatingImage from '../elements/FloatingImage'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`
const HeroWrapper = styled.div`

`

const Hero = ({ children, offset, bg }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <FloatingImage src={bg} />
    </Divider>
    <Content speed={0.6} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
}
