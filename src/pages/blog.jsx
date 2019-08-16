import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
// import styled from 'styled-components'
import PageLayout from '../layouts/Layout'
import { PostList } from '../components/PostList'

const BlogPage = props => {
  const { data } = props
  const { edges: posts } = data.allWordpressPost

  return (
    <PageLayout>
      <Parallax pages={2}>
        <PostList posts={posts} title="Latest posts" />
      </Parallax>
    </PageLayout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
