import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import PageLayout from '../layouts/Layout'
import iconData from '../../config/icondata'

const Wrapper = styled.div`
  ${tw`w-full h-full`}
`
const Inner = styled.div`
  ${tw`mx-auto w-3/5`}
  margin-top: 3em;
`

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
  <IconWrapper target="_blank" href={link} fadeLength="0.15s" color={color} textOnHover={textOnHover}>
    {children}
  </IconWrapper>
)
const SandboxPage = () => {
  console.log(iconData)
  return (
    <PageLayout>
      <Wrapper>
        <Inner>
          {iconData.map(iconObj => (
            <IconButton link={iconObj.link} textOnHover={iconObj.textColor} color={iconObj.color}>
              {iconObj.icon}
            </IconButton>
          ))}
        </Inner>
      </Wrapper>
    </PageLayout>
  )
}

export default SandboxPage
