import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa'
import PageLayout from '../layouts/Layout'
import iconData from '../../config/icondata'
import data from '../../config/menudata'

const Wrapper = styled.div`
  ${tw`w-full h-full`}
`
const Inner = styled.div`
  ${tw`mx-auto w-3/5`}
  margin-top: 3em;
`

const NavWrapper = styled.div`
  ${tw`w-full md:w-1/3 relative`}
`

const NavListItem = styled.a`
  ${tw`px-3 py-2 my-3 rounded w-full`}
  border: 1px solid red;
  position: relative;
  display: block;
  color: white !important;
`

const DropContainer = styled.div``
// const DropContent = styled.div`
//   position: relative;
//   width: 100%;
//   a {
//     display: ${props => (props.expanded ? 'block' : 'none')};
//     float: unset;
//     width: 100%;
//     text-indent: none;
//   }
// `

const DropContent = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  a {
    float: unset;
    width: 100%;
    text-indent: none;
  }
`
const MenuToggle = styled.a`
  float: right;
  width: 100%;
  display: inline;
`
const IconWrapper = styled.span`
  float: right;
  color: inherit;
`
const MenuContainer = styled(animated.button)`
  ${tw`w-8/9`}
  position: fixed;
  background: none;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: row;
    justify-content: space-between;
  }
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    border: 2px solid white;
  }
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
`
const MenuLabel = styled.p`
  ${tw`text-center px-2`}
  display: inline-block;
  color: white !important;
`

const NavBox = styled.div`
  float: left;
  display: flex;
  width: 100%;
`
const Dropdown = () => {
  const [expanded, set] = useState(false)

  const springRef = useRef()
  const { height, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { height: '0px' },
    to: { height: expanded ? '1000px' : '0px' },
  })

  const transRef = useRef()
  const transitions = useTransition(expanded ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(expanded ? [springRef, transRef] : [transRef, springRef], [0, expanded ? 0.1 : 0.5])
  return (
    <NavWrapper>
      <MenuContainer
        style={{ ...rest, height }}
        onClick={e => {
          e.preventDefault()
          set(open => !open)
        }}
      >
        <NavBox>
          <DropContainer>
            <NavListItem
              onClick={e => {
                e.preventDefault()
                set(!expanded)
              }}
            >
              <MenuLabel>What's On This Page</MenuLabel>
              <IconWrapper>{expanded ? <FaChevronDown /> : <FaChevronLeft />}</IconWrapper>
            </NavListItem>
            <DropContent style={{ ...rest, height }}>
              {transitions.map(({ item, key, props }) => (
                <NavListItem
                  key={key}
                  // onClick={e => (parallax ? parallax.scrollTo(item.offset) : e.preventDefault())}
                  style={{ ...props, background: item.css }}
                >
                  {item.name}
                </NavListItem>
              ))}
            </DropContent>
          </DropContainer>
        </NavBox>
      </MenuContainer>
    </NavWrapper>
  )
}

const SandboxPage = () => {
  console.log(iconData)
  return (
    <PageLayout>
      <Wrapper>
        <Inner>
          <Dropdown />
        </Inner>
      </Wrapper>
    </PageLayout>
  )
}

export default SandboxPage
