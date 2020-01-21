import React, { useEffect, useState } from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import PageLayout from '../components/Layouts/PageLayout'
import Card from '../components/Card'
import { BigTitle } from '../components/Titles'

// export const query = graphql`
// query TestQuery {
//     allSitePage {
//       edges {
//         node {
//           id
//           path
//         }
//       }
//     }
//   }
// `

const CardWrap = styled.div`
  width: 45ch;
  height: 45ch;
  background: grey;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
`

const AnimatedCard = () => {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const AniWrap = animated(CardWrap)

  return (
    <AniWrap
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

const Index = () => (
  <PageLayout>
    <BigTitle>Diana M Steakley Freeman</BigTitle>
    {/* <div style={tw`w-full flex justify-center`}> */}
    <AnimatedCard />
    {/* </div> */}
  </PageLayout>
)

export default Index
