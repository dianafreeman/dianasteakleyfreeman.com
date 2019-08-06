import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import tw from 'tailwind.macro'

export const Divider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`

export const Section = styled(ParallaxLayer)`
  ${tw`w-full h-full`};
  display: block;
  position: relative;
  background: ${props => props.bg};
  clip-path: ${props => props.clipPath};
`
