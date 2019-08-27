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
import wpConfig from '../../config/wordpress'


export const query = graphql`
  query {
    allWordpressWpProjects {
      edges {
        node {
          acf {
            project_color
            project_link
          }
          id
          title
          slug
          content
          technologies
          wordpress_id
          featured_media {
            localFile {
              url
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allWordpressPost(sort: { order: DESC, fields: date }, filter: { categories: { eq: 19 } }) {
      edges {
        node {
          id
          title
          content
          date
          slug
          featured_media {
            localFile {
              url
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
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
  const projects = data.allWordpressWpProjects.edges.map(edge => edge.node)
  const posts = data.allWordpressPost.edges.map(edge => edge.node)
  console.log(posts)
  return (
    <>
      <PageLayout>
        <Parallax pages={5}>
          <Navbar />
          <Hero offset={0}>
            <TypedTitle strings={['Diana M. Steakley-Freeman']} smallTitle={['Coder', 'Creator', 'Communicator']} />
          </Hero>
          <Projects offset={1} projects={projects} />
          <About offset={2} />
          <Blog offset={3} posts={posts} />
          <Contact offset={4} />
        </Parallax>
      </PageLayout>
    </>
  )
}

export default Index
