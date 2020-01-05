/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import PageLayout from '../layouts/Layout';
import Card from '../components/Card'

// Components
import { ProjectGrid, BlogGrid } from '../components/CardGrid';
import { BigTitle } from '../elements/Titles';
import { colors } from '../../tailwind';

// export const query = graphql`
// `

// const AboutSub = styled.span`
//   ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl font-sans`};
// `;

// const AboutDesc = styled.p`
//   ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
// `;

const CardRow = styled.div`
 display: flex;
 justify-content: center;
 width: 80%;
 height: inherit;
 margin: auto;
`;
const Index = () => {
  return (
    <PageLayout numPages={1} isHorizontal={true}>
      <div style={{height: '100%', display: 'block', position: 'relative', textAlign: 'center', paddingTop: '2vh'}}>
          <BigTitle>Hi!, I'm Diana.</BigTitle>
          <CardRow>
            <Card ></Card>
            <Card ></Card>
            <Card ></Card>
            <Card ></Card>
          </CardRow>
      </div>
    </PageLayout>
  );
};

export default Index;
