import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import PageLayout from '../components/Layouts/PageLayout'
import CardGrid from '../components/CardGrid'

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          timeToRead
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

const BlogPage = ({data}) => {
  console.log(data)
return <PageLayout>{/* <CardGrid posts={posts} title="Latest posts" /> */}</PageLayout>
}

export default BlogPage
