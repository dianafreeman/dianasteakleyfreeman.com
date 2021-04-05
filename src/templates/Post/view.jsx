import React from 'react';
// import AuthorInfo from '../../components/AuthorInfo';
import Footer from '../../components/Layout/Footer';
import config from '@config/siteConfig';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

/*

.post-meta {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

*/
export default function PostView({ post, pageContext }) {
  const { slug } = pageContext;

  return (
    <Box mx={4}>
      <h1>{post.frontmatter.title}</h1>
      <div className="post-meta">
        <pre>{JSON.stringify(post.frontmatter, null, 2)}</pre>
      </div>
      <Typography dangerouslySetInnerHTML={{ __html: post.html }} />

      <Footer config={config} />
    </Box>
  );
}