/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import { FaBars, FaLink } from 'react-icons/fa'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { Link } from 'gatsby'
import data from '../../config/menudata'
import { colors } from '../../tailwind'

const MenuContainer = styled(animated.button)`
  ${tw`w-8/9 text-sm`}
  position: fixed;
  border-radius: 30px;
  background: none;
  z-index: 999;
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: row;
    justify-content: space-between;
  }
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    border: 2px solid white;
  }
`
const MenuItem = styled(animated(Link))`
  ${tw`border-transparent rounded mx-2 my-2 font-bold`}
  background-color: rgba(225,225,225, 0.8);
  position: relative;
  padding: 1.5em;
  display: block;
  color: ${colors['grey-darkest']};
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`
const MenuToggle = styled.div`
  ${tw`text-left px-2 py-3 text-lg `}
  display: flex;
  width: inherit;
  position: relative;
  color: white !important;
`

const NavBox = styled.div`
  float: left;
  width: initial;
  height: inherit;
  @media screen and min-width(468px) {
    display: flex;
  }
  display: block;
`
const Navbar = ({ parallax, parallaxRef, backgroundColor }) => {
  const [isOpen, set] = useState(false)

  const springRef = useRef()
  const { borderColor, borderRadius, width, ...rest } = useSpring({
    ref: springRef,
    from: {
      backgroundColor: 'rgba(225,225,225, 0.3)',
      width: 'initial',
      height: 'inherit',
    },
    to: {
      backgroundColor: isOpen ? 'rgba(225,225,225, 0.5)' : 'rgba(225,225,225, 0.3)',
      width: isOpen ? 'inherit' : 'initial',
      height: isOpen ? 'initial' : 'inherit',
    },
  })

  const transRef = useRef()
  const transitions = useTransition(isOpen ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(isOpen ? [springRef, transRef] : [transRef, springRef], [0, isOpen ? 0.3 : 0.5])
  return (
    <>
      <MenuContainer
        style={{ borderColor, borderRadius, width, ...rest }}
        onClick={e => {
          e.preventDefault()
          set(isOpen => !isOpen)
        }}
      >
        <NavBox>
          <MenuToggle>
            <FaBars />
            <span
              style={{
                marginLeft: '0.5em',
              }}
            >
              Menu
            </span>
          </MenuToggle>
          {transitions.map(({ item, key, props }) => (
            <MenuItem
              key={key}
              onClick={e => ( parallax ? parallax.scrollTo(item.offset) : e.preventDefault())}
              style={{ ...props, background: item.css }}
            >
              {item.name}
            </MenuItem>
          ))}
        </NavBox>
      </MenuContainer>
    </>
  )
}
export default Navbar
