import React from 'react';
import { graphql } from 'gatsby';
import { Router, Link } from '@reach/router';
import Layout from '../../Layout/Layout';
import routes from '../../../config/web/routes';
import CardGrid from '../../CardGrid/CardGrid';
import { MainTitle, ContentWrap } from '../../Layout/styled';

const Home = ({ store }) => {
  return (
    <Layout>
      <ContentWrap>
        <div style={{ display: 'flex', flex: 1 }}>
          <MainTitle>
            Hi! 👋 <br /> I'm Diana.
          </MainTitle>
        </div>
        <div style={{ display: 'flex', flex: 2 }}>{/* <CardGrid items={routes} /> */}</div>
      </ContentWrap>
    </Layout>
  );
};
export default Home;
