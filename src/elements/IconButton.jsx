import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'

const IconWrapper = styled(Link)`
  ${tw`text-black border border-white height-auto`}
  display: flex;
  margin: 0.5em;
  float: right;
  border-radius: 2em;
  background-color: white;
  margin: 0.5em;
  transition-property: background-color;
  transition-duration: ${props => props.fadeLength};
  transition-timing-function: ease-in-out;
  border: 2px solid white;
  svg {
    margin: 0.5em;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: ${props => props.color};
    svg {
      fill: ${props => props.textOnHover};
      transition-property: fill;
      transition-duration: ${props => props.fadeLength};
      transition-timing-function: ease-in-out;
    }
  }
`

const IconButton = ({ color, children, textOnHover, fadeLength, link }) => (
  <IconWrapper target="_blank" href={link} fadeLength={fadeLength} color={color} textOnHover={textOnHover}>
    {children}
  </IconWrapper>
)

export default IconButton

IconButton.defaultProps = {
  fadeLength: '0.15s',
  color: 'black',
  textOnHover: 'white',
}

IconButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.arrayOf('node').isRequired,
  textOnHover: PropTypes.string,
  fadeLength: PropTypes.string,
  link: PropTypes.string.isRequired,
}
