import React, { useRef, useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card';
import routes from '../config/web/routes';
import { BigTitle } from '../components/Type/Titles';
import CardGrid from '../components/CardGrid/CardGrid';

export const query = graphql`
  query IndexQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const ContentWrap = styled.div`
  margin: auto;
  padding-top: 2vh;
  text-align: center;
  height: inherit;
  @media screen and (min-width: ${props => props.theme.screen.md}){
    display: flex;
  }
  justify-content: center;
`;

const ContentCol = styled.div`

  @media screen and (min-width: ${props => props.theme.screen.md}){
    flex-basis: 50%;
  }
`;

const MainTitle = styled(BigTitle)`
  bottom: 1em;
  text-align: left;
`;

const Index = ({ data }) => {
  return (
    <Layout>
      <ContentWrap>
        <ContentCol>
          <MainTitle>
            Hi! 👋 <br /> I'm Diana.
          </MainTitle>
        </ContentCol>
          <CardGrid items={routes} />
      </ContentWrap>
    </Layout>
  );
};
export default Index;
