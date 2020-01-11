/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
const post = {
  id: "",
  title: "a title",
  date: "",
  slug: "",
  author: {
    slug: "",
    name: "",
  }
}

const PostList = ({ posts, title }) => (
  <section className="section">
    <div className="container">
      <div className="content">
        <h1 className="has-text-weight-bold is-size-2">{title}</h1>
      </div>
      {/* {posts.map(({ node: post }) => ( */}
        <div
          className="content"
          style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
          key={post.id}
        >
          <p>
            <Link className="has-text-primary" to={post.slug}>
              {post.title}
            </Link>
            <span> &bull; </span>
            <small>
              {post.date} - posted by{' '}
              <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
            </small>
          </p>
          <div>
            <div
              dangerouslySetInnerHTML={{
                // __html: post.excerpt.replace(/<p class="link-more.*/, ''),
              }}
            />
            <Link className="button is-small" to={post.slug}>
              Keep Reading →
            </Link>
          </div>
        </div>
      {/* ))} */}
    </div>
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default PostList;