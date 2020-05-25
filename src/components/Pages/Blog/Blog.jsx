import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { inject, observer } from 'mobx-react';
import List from '../../List';
import Layout from '../../Layout';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            timeToRead
            frontmatter {
              title
              path
              slug
              date
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="col-sm-12" style={{ display: 'flex', margin: 'auto' }}>
        <div className="mx-auto col-sm-6">
          <h1>Blog</h1>
          <p style={{ color: 'white' }}>
            Sint ex cillum exercitation proident proident consequat pariatur excepteur id voluptate
            eiusmod. Anim sit pariatur do ex consequat consequat aliquip. Lorem labore laborum non
            elit dolore proident do occaecat sit reprehenderit eiusmod non consectetur excepteur.
          </p>
        </div>
        <div className="col-sm-6" style={{ display: 'flex' }}>
          <List type="MARKDOWN" items={data.allMarkdownRemark.edges.map(p => p.node)} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
