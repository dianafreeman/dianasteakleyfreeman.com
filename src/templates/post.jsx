import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../layouts/Layout'

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost
  console.log(data)
  return (
    <PageLayout title={post.title}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </PageLayout>
  )
}

export default PostTemplate

PostTemplate.propTypes = {
  data: PropTypes.array.isRequired,
}

// export const pageQuery = graphql`
//   query wordpressPost(slug: $slug) {
//     featured_media {
//       localFile {
//         childImageSharp {
//           resolutions {
//             src
//           }
//         }
//       }
//     }
//     title
//     internal {
//       content
//     }
//     slug
//     wordpress_id
//   }
// }

// `
