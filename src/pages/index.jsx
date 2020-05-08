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
import { BigTitle, Subtitle } from '../elements/Titles';
import { colors } from '../config/tailwind';

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;
  margin: auto;
`;

const Index = () => {
  return (
    <PageLayout>
      <Row>
        <BigTitle style={{paddingTop: '25vh'}}>Diana M Steakley Freeman</BigTitle>
      </Row>
      <Row>
        <Subtitle style={{color: 'white', margin: "auto", fontStyle: "italic", fontSize: '1.5em'}}>Hang tight -- a brand new site is coming soon!</Subtitle>
      </Row>
    </PageLayout>
  );
};

export default Index;
