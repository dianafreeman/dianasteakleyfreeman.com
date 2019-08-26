/* eslint-disable react/prop-types */
import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { graphql } from 'gatsby'
import PageLayout from '../layouts/Layout'
import Navbar from '../components/Navbar'

// Sections
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Blog from '../sections/Blog'
// Components
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
    allWordpressPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          id
          title
          content
          date
          slug
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
    }
  }
`

   
const Index = ({ data }) => {
  const technologies = data.allWordpressWpTechnologies.nodes
  const projects = data.allWordpressWpProjects.nodes
  const posts = data.allWordpressPost.edges
    .filter(edge => !edge.node.slug.match(/testimonial/) && !edge.node.title.match(/Testimonial/))
    .map(el => el.node)
  console.log(posts)
  return (
    <>
      <PageLayout>
        <Parallax pages={5}>
          <Navbar />
          <Hero offset={0}>
            <BigTitle>
              <TypedTitle strings={['Diana M. Steakley-Freeman']} smallTitle={['Coder', 'Creator', 'Communicator']} />
            </BigTitle>
          </Hero>
          <Projects offset={1} projects={projects} technologies={technologies} />
          <About offset={2} />
          <Blog offset={3} posts={posts} />
          <Contact offset={4} />
        </Parallax>
      </PageLayout>
    </>
  )
}

export default Index
