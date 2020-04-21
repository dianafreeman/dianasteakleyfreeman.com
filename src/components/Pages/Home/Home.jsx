import React from 'react';
import { graphql } from 'gatsby';
import { Router, Link } from '@reach/router';
import routes from '@site-config/web/routes';
import Layout from '../../Layout/Layout';
import List from '../../List';
import { MainTitle } from '../../Layout/styled';

const Home = ({ store }) => {
  return (
    <Layout>
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
    </Layout>
  );
};
export default Home;
