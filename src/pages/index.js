import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { a } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import useTheme from "@project/hooks/useTheme";
import loadable from "@loadable/component";

import { FlexColumn, FlexDiv } from "../components/Flex";
import Links from "../components/Links";
import SEO from "../components/SEO";

const Scene = loadable(() => import("../components/Scene"));

const Section = styled(ParallaxLayer)`
  background-color: ${({ background }) => background || "#2b2b2b"};
`;

const Display1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  text-align: center;
  margin: unset;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
  @media screen and (min-width: 768px) {
    font-size: calc(4.5rem + 2vw);
  }
`;

const Sub2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin: unset;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: calc(1.5rem + 0.5vw);
  }
`;

const FlexSceneArea = styled(FlexDiv)`
  min-height: 370px;
  margin: unset;
  height: 50vh;
`;

function Index() {
  const { colors } = useTheme();

  return (
    <>
      {/* <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} /> */}
      <SEO />

      <Parallax pages={2}>
        <Section offset={0}>
          <FlexColumn justify="center">
            <FlexColumn justify="center">
              <Display1>I&apos;m Diana.</Display1>
              <Sub2>Coder, Creator, Communicator.</Sub2>
              <Links />
            </FlexColumn>
            <FlexSceneArea>
              <Scene modelText="D" />
            </FlexSceneArea>
          </FlexColumn>
        </Section>

        <Section background="#fff" offset={1}>
          <Display1>Coder</Display1>
        </Section>
      </Parallax>
      <div
        style={{
          backgroundColor: colors.text,
          textAlign: "center",
          position: "fixed",
          width: "100vw",
          bottom: 0,
        }}
      >
        <p>
          This site is under construction.{" "}
          <a href="https://github.com/dianafreeman/dianasteakleyfreeman.com">
            Check out the Git Repo here!
          </a>
        </p>
      </div>
    </>
  );
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
