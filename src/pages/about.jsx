/* eslint-disable react/prop-types */
import React from 'react'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Section } from '../elements/Parallax'
import PageLayout from '../layouts/Layout'

const HeroHeader = styled(Section)`
  ${tw`text-white w-full h-full absolute`}
`
export const query = graphql`
  query {
    allWordpressWpTechnologies {
      nodes {
        name
        slug
        wordpress_id
        acf {
          logo_color
          stack_link
          stack_credit
          stack_logo
        }
      }
    }
  }
`

const AboutPage = () => (
  <PageLayout>
    <Parallax pages={3}>
      <HeroHeader offset={0}>
        <p>a thing</p>
      </HeroHeader>
      <Section offset={1}>
        <p>another thing</p>
      </Section>
      <Section offset={2}>
        <p>a third thing</p>
      </Section>
    </Parallax>
  </PageLayout>
)

export default AboutPage
