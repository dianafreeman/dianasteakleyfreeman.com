import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useSpring, animated } from 'react-spring'
import { colors } from '../../tailwind'
import Modal from './Modal';

const CardWrapper = styled.div`
  ${tw`shadow-lg no-underline rounded-lg text-white relative text-center`};
  background: ${props => props.bg}98;
  min-height: 200px;
  min-width: 200px;
  margin: 1em;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: hidden;
  &:before {
    ${tw`rounded-lg`};
    content: ' ';
    position: absolute;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

const TextWrapper = styled.div`
  ${tw`font-sans text-small `};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`
const CardTitle = styled.h3`
  ${tw`font-serif`}
  font-weight: 700;
`
const CardFooter = styled.div`
  ${tw`absolute w-full font-sans`}
  background-color: ${colors['grey-dark']};
  background: linear-gradient(to right,#474d51,#273238);
  bottom: 0;
`

const ExpandCard = styled(animated(CardWrapper))`
  background-color: gray;
  display: block;
  height: 200px;
`
const GrowCard = ({ title, bg, img, slug, type = 'project' }) => {
  const [open, setOpen] = useState(false)
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ width: 90, color: '#ffaaee' })
      await next({ opacity: 1, color: 'rgb(14,26,19)' })
    },
    from: { width: 300, position: 'relative' },
  })
  return (
    <ExpandCard style={props} bg={bg} img={img} onClick={() => setOpen(open => !open)}>
      <TextWrapper>{type === 'blog' ? <Link to={`/blog/${slug}`}>Go there</Link> : null}</TextWrapper>
      <CardFooter>
        <CardTitle>{title}</CardTitle>
      </CardFooter>
    </ExpandCard>
  )
}

export default GrowCard

GrowCard.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
}
