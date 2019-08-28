import React, { useState, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { Link } from 'gatsby'
import data from '../../config/menudata'

const MenuItem = styled(animated.div)`
  background: white;
  display: block;
  border-radius: 5px;
  will-change: transform, opacity;
`

const MenuContainer = styled(animated(Link))`
  position: fixed;
  z-index: 999;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  &:focus {
    border: 2px solid white;
  }
`
const Navbar = () => {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'darkgray' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'darkgray' },
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
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <MenuContainer style={{ ...rest, size }} onClick={() => set(open => !open)} >
      <FaBars />
      {transitions.map(({ item, key, props, name }) => (
        <MenuItem key={key} style={{ ...props, background: item.css }}>
          <p>{name}</p>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}
export default Navbar
