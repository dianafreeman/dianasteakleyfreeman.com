/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { graphql } from 'gatsby'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import PageLayout from '../layouts/Layout'

// Sections
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Blog from '../sections/Blog'
// Components
import { ProjectGrid, BlogGrid } from '../components/CardGrid'
import { BigTitle } from '../elements/Titles'
import { ParallaxBackground, ParallaxSection, ParallaxHeader } from '../elements/Parallax'
import TypedTitle from '../components/TypedTitle'
import wpConfig from '../../config/wordpress'
import { colors } from '../../tailwind'

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

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl font-sans`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      posts: [],
    }
    this.parallax = React.createRef()
  }

  componentDidMount() {
    const { data } = this.props
    this.setState({
      projects: data.allWordpressWpProjects.edges.map(edge => edge.node),
      posts: data.allWordpressPost.edges.map(edge => edge.node),
    })
  }

  render() {
    const { projects } = this.state
    const { posts } = this.state
    return (
      <PageLayout parallax numPages={5}>
        <ParallaxBackground
          offset={0}
          bg={`radial-gradient(circle at bottom left,${colors['grey-dark']},${colors['grey-darkest']})`}
          clipPath="polygon(0 10%, 100% 0%, 100% 90%, 0 100%)"
          speed={0.3}
        />
        <ParallaxLayer offset={0}>
          <ParallaxSection speed={1} offset={0}>
            <TypedTitle strings={['Diana M. Steakley-Freeman']} smallTitle={['Coder', 'Creator', 'Communicator']} />
          </ParallaxSection>
        </ParallaxLayer>

        {/* <ParallaxBackground
            offset={1}
            bg={`radial-gradient(circle at top right,${colors['grey-dark']},${colors['grey-darkest']})`}
            // clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
            speed={0.3}
          /> */}

        <ParallaxLayer offset={1}>
          <ParallaxSection offset={1} speed={0.2}>
            <ParallaxHeader>
              <BigTitle>Projects</BigTitle>
            </ParallaxHeader>
            <ProjectGrid projects={projects} />
          </ParallaxSection>
        </ParallaxLayer>

        <ParallaxBackground
          offset={2}
          bg={`radial-gradient(circle at top right,${colors['grey-dark']},${colors['grey-darkest']})`}
          clipPath="polygon(0 0, 100% 10%, 100% 100%, 0 90%)"
          speed={0.3}
        />

        <ParallaxLayer offset={2}>
          <ParallaxSection offset={2} speed={0.1}>
            <ParallaxHeader>
              <BigTitle>Welcome!</BigTitle>
              <AboutSub>I'm Diana.</AboutSub>
            </ParallaxHeader>
            <AboutDesc>This is my corner of the internet.</AboutDesc>
          </ParallaxSection>
        </ParallaxLayer>

        {/* <ParallaxBackground
            offset={3}
            bg={`radial-gradient(circle at top right,${colors['grey-dark']},${colors['grey-darkest']})`}
            clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
            speed={0.3}
          /> */}
        <ParallaxLayer offset={3}>
          <ParallaxSection offset={3} speed={0.1}>
            <ParallaxHeader>
              <BigTitle>Blog</BigTitle>
            </ParallaxHeader>
            <BlogGrid posts={posts} />
          </ParallaxSection>
        </ParallaxLayer>

        <ParallaxBackground
          offset={4}
          bg={`radial-gradient(circle at bottom right,${colors['grey-dark']},${colors['grey-darkest']})`}
          clipPath="polygon(0 10%, 100% 0%, 100% 90%, 0 100%)"
          speed={0.3}
        />
        <ParallaxLayer offset={4}>
          <ParallaxSection offset={4}>
            <ParallaxHeader>
              <BigTitle>Shall we connect?</BigTitle>
            </ParallaxHeader>
            <p>
              Say <a href="mailto:dev@dianasteakleyfreeman.com">Hi</a> or find me on other platforms.
            </p>
          </ParallaxSection>
        </ParallaxLayer>
      </PageLayout>
    )
  }
}

export default Index
