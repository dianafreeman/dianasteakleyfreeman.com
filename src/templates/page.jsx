import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'

export const PageTemplate = ({ title, content }) => (
  <Layout>
    {/* Parallax Goes Here */}
    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
  </Layout>
)

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
