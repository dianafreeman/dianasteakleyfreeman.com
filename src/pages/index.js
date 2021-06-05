import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { a } from "@react-spring/web";

import useTheme from "@project/hooks/useTheme";
import loadable from "@loadable/component";

import {
  FlexContainer,
  FlexColumn,
  FlexRow,
  FlexDiv,
} from "../components/Flex";
import Links from "../components/Links";
import SEO from "../components/SEO";

const Scene = loadable(() => import("../components/Scene"));

const Section = styled(FlexRow)`
  padding: ${({ theme }) => theme.spacing.sm} 0;
  margin: 0 auto;
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

const Sub2 = styled.p`
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

  const [ready, setReady] = useState(false);

  // delay even the attempt at rendering
  useEffect(() => void setTimeout(() => setReady(true), 500), []);

  return (
    <>
      {/* <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} /> */}
      <SEO />

      <FlexContainer>
        <Section justify="space-between" justifyMd="center">
          <FlexColumn justify="center">
            <FlexColumn justify="center">
              <Display1>I&apos;m Diana.</Display1>
              <Sub2>Coder, Creator, Communicator.</Sub2>
              <Links />
            </FlexColumn>
            <FlexSceneArea>
              {ready ? (
                <Scene modelText="D" />
              ) : (
                <a.div
                  style={{
                    width: "100%",
                    height: "100%",
                    color: colors.text,
                    textAlign: "center",
                  }}
                >
                  <p>Loading...</p>
                </a.div>
              )}
            </FlexSceneArea>
          </FlexColumn>
        </Section>
        <FlexRow>
          <footer>
            <p>
              This site is under construction. You check it out in GitHub,
              though, if you&apos;re into that kind of thing.
            </p>
          </footer>
        </FlexRow>
      </FlexContainer>
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
