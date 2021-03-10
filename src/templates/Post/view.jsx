import React from 'react';
// import AuthorInfo from '../../components/AuthorInfo';
import Footer from '../../components/Layout/Footer';
import config from '@config/siteConfig';

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
    <div>
      <h1>{post.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="post-meta"></div>

      <Footer config={config} />
    </div>
  );
}
