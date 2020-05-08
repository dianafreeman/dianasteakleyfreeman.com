import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import PageLayout from '../layouts/Layout'
import PostList from '../components/PostList'

const BlogPage = posts => (
  <PageLayout>
    <Row>
      <BigTitle style={{ paddingTop: '25vh' }}>Diana M Steakley Freeman</BigTitle>
    </Row>
    <Row>
      <Subtitle style={{ color: 'white', margin: 'auto', fontStyle: 'italic', fontSize: '1.5em' }}>
        Hang tight -- a brand new site is coming soon!
      </Subtitle>
    </Row>{' '}
  </PageLayout>
)

export default BlogPage
