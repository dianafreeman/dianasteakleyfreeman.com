import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

export const ParallaxBackground = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`

export const Section = styled(ParallaxLayer)`
  ${tw`w-full h-full pin-t pin-l`};
  display: block;
  position: absolute;
  background: ${props => props.bg};
`
export const PageHeader = styled.div`
  height: 50vh;
`

ParallaxBackground.propTypes = {
  fill: PropTypes.string,
  clipPath: PropTypes.string,
  bg: PropTypes.string,
}

Section.propTypes = {
  bg: PropTypes.string,
}
