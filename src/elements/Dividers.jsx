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

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`
export const DividerImageBackground = styled(ParallaxLayer)`
  background-image: url('${props => props.imgSrc}');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: .8;
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`
