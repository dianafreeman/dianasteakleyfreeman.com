/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import PageLayout from '../layouts/Layout';
import Card from '../components/Card';

// Components
import Navbar from '../components/Navbar';
import { ProjectGrid, BlogGrid } from '../components/CardGrid/CardGrid';
import { BigTitle } from '../elements/Titles';
import { colors } from '../config/tailwind';

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: inherit;
  margin: auto;
`;

const Index = () => {
  return (
    <PageLayout>
      <Row>
        <BigTitle>Diana M Steakley Freeman</BigTitle>
      </Row>
      <Navbar />
      <Row>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Row>
    </PageLayout>
  );
};

export default Index;
