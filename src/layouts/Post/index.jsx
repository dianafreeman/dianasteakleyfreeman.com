import React from "react";
import { graphql } from "gatsby";

function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <>
      <div style={{ marginLeft: 30 }}>
        <h1>{post.title}</h1>
        <p>{slug}</p>
        <div className="post-meta">
          <pre>{JSON.stringify(post, null, 2)}</pre>
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  );
}
export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        image {
          id
        }
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
