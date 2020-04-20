import React from 'react';
import { graphql } from 'gatsby';
import { Router, Link } from '@reach/router';
<<<<<<< HEAD
import routes from '@site-config/web/routes';
import Layout from '../../Layout/Layout';
import List from '../../List';
=======
import Layout from '../../Layout/Layout';
import routes from '../../../config/web/routes';
import CardGrid from '../../CardGrid/CardGrid';
import { MainTitle, ContentWrap } from '../../Layout/styled';
>>>>>>> restart basic ui, refactor pages for SPA

const Home = ({ store }) => {
  return (
    <Layout>
<<<<<<< HEAD
      <div className="col-sm-6 " style={{ display: 'flex', margin: 'auto' }}>
        <div className="mx-auto">
          <h1>Hi. I'm Diana. 👋</h1>
          <p style={{ color: 'white' }}>
            Cillum esse aliquip occaecat eu sunt fugiat sunt nisi. Elit sit aliqua tempor aliquip id
            nisi non veniam. Ullamco quis dolor irure dolore non laborum. Eu sunt ullamco magna nisi
            est laborum. Non pariatur amet aliquip laboris excepteur sit reprehenderit reprehenderit
            occaecat dolor quis sint incididunt incididunt. Pariatur ullamco pariatur enim ea.
          </p>
        </div>
      </div>
      <div className="col-sm-6" style={{ display: 'flex' }}>
        <List items={routes} />
      </div>
=======
      <ContentWrap>
        <div style={{ display: 'flex', flex: 1 }}>
          <MainTitle>
            Hi! 👋 <br /> I'm Diana.
          </MainTitle>
        </div>
        <div style={{ display: 'flex', flex: 2 }}>{/* <CardGrid items={routes} /> */}</div>
      </ContentWrap>
>>>>>>> restart basic ui, refactor pages for SPA
    </Layout>
  );
};
export default Home;
