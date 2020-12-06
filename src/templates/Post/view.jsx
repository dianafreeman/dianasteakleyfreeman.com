import React from 'react';
import AuthorInfo from '../../components/AuthorInfo';
import PostTags from '../../components/PostTags';
import ShareToLinks from '../../components/ShareToLinks';
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
      <div className="post-meta">
        <PostTags tags={post.tags} />
        <ShareToLinks postPath={slug} postNode={post} />
      </div>
      <AuthorInfo config={config} />
      <Footer config={config} />
    </div>
  );
}
