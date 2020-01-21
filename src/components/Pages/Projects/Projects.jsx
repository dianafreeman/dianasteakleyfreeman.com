import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../../Layout/Layout';
import CardGrid from '../../CardGrid';

const Projects = ({ store, posts }) => (
  <>
    <Layout>
      <ContentWrap>
        <MainTitle>Projects</MainTitle>
      </ContentWrap>
    </Layout>
  </>
);

export default Projects;
