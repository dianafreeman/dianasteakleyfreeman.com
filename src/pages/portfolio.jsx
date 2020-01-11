import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import PageLayout from '../layouts/Layout'
import { PostList } from '../components/PostList'

const BlogPage = posts => (
  <PageLayout>
    <Parallax pages={2}>
      <PostList posts={posts} title="Latest posts" />
    </Parallax>
  </PageLayout>
)

export default BlogPage
