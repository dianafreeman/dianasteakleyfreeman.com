import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img`
  opacity: 0.8;
  width: 50%;
  top: 0;
  float: ${props => props.floatDir};
`

const FloatingImage = ({ src, floatDir }) => <Image src={src} floatDir={floatDir} />

export default FloatingImage

FloatingImage.propTypes = {
  src: PropTypes.string.isRequired,
  floatDir: PropTypes.string.isRequired,
}
