import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxBackground, Section } from '../elements/Parallax'
import Content from '../elements/Content'
import { colors } from '../../tailwind'
// import FloatingImage from '../elements/FloatingImage'
import { BigTitle } from '../elements/Titles'

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl font-sans`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`
const About = ({ offset }) => (
  <>
    <ParallaxBackground
      bg={`radial-gradient(circle at bottom right,${colors['grey-dark']},${colors['grey-darkest']})`}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.3}
      offset={offset}
    >
      <Section speed={-0.1} offset={offset}>
        {/* <FloatingImage floatDir="right" /> */}
      </Section>
    </ParallaxBackground>
    <Content speed={0.1} offset={offset}>
      <Wrapper>
        <BigTitle>Welcome!</BigTitle>
        <AboutSub>I'm Diana.</AboutSub>
        <AboutDesc>This is my corner of the internet.</AboutDesc>
      </Wrapper>
    </Content>
  </>
)

export default About

About.propTypes = {
  offset: PropTypes.number.isRequired,
}
