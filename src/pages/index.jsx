/* eslint-disable react/prop-types */
import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { graphql } from 'gatsby'
import PageLayout from '../layouts/Layout'

// Sections
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
// Components
import FloatingImage from '../elements/FloatingImage'
import heroImage from '../images/computerFace.png'
import TypedTitle from '../components/TypedTitle'
import { BigTitle } from '../elements/Titles'

export const query = graphql`
  query IndexQuery {
    allWordpressWpProjects {
      nodes {
        title
        technologies
        content
        excerpt
        acf {
          project_color
          project_link
        }
        featured_media {
          localFile {
            childImageSharp {
              resolutions(width: 600) {
                src
              }
            }
          }
        }
      }
    }
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

const Index = ({ data }) => {
  const technologies = data.allWordpressWpTechnologies.nodes
  const projects = data.allWordpressWpProjects.nodes
  return (
    <>
      <PageLayout>
        <Parallax pages={4}>
          <Hero offset={0}>
            <BigTitle>
              <TypedTitle strings={['Diana M. Steakley-Freeman']} smallTitle={['Coder', 'Creator', 'Communicator']} />
            </BigTitle>
          </Hero>
          <Projects offset={1} projects={projects} technologies={technologies} />
          <About offset={2} />
          <Contact offset={3} />
        </Parallax>
      </PageLayout>
    </>
  )

}

export default Index
