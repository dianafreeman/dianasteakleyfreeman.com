import React from 'react';
import Layout from '../../Layout';
import { MainTitle, ContentWrap } from '../../Layout/styled';
import { StoreProvider } from '../../../stores';

const Blog = ({ store }) => {
  return (
    <>
      <Layout>
        <ContentWrap>
          <MainTitle>Blog</MainTitle>
        </ContentWrap>
      </Layout>
    </>
  );
};

export default Blog;
