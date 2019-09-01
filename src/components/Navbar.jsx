/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import { FaBars, FaLink } from 'react-icons/fa'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { Link } from 'gatsby'
import data from '../../config/menudata'

const NavWrapper = styled.div`
  ${tw`w-screen`}
`
const MenuContainer = styled(animated(Link))`
  ${tw`w-8/9`}
  position: fixed;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: row;
    justify-content: space-between;
  }
  border-radius: 5px;
  cursor: pointer;
`

const MenuItem = styled(animated(Link))`
  background: transparent;
  border-radius: 5px;
  position: relative;
  padding: 1.5em;
  border: 1px solid white;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
  left: -100px;
`
const MenuLabel = styled.p`
  ${tw`text-center px-2`}
  display: block;
  color: white !important;
`
const Navbar = ({ parallax }) => {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { width, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { width: '20%' },
    to: { width: open ? '100%' : '20%' },
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.5])

  console.log(parallax)
  return (
    <NavWrapper>
      <MenuContainer style={{ ...rest, width }} onClick={() => set(open => !open)}>
        <MenuLabel>
          <FaBars /> <br />
          Menu
        </MenuLabel>
        {transitions.map(({ item, key, props }) => (
          <MenuItem key={key} onClick={() => parallax.scrollTo(item.offset)} style={{ ...props, background: item.css }}>
            {item.name}
          </MenuItem>
        ))}
      </MenuContainer>
    </NavWrapper>
  )
}
export default Navbar
