import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { a } from "@react-spring/web";

import useLayout from "@project/hooks/useLayout";
import loadable from "@loadable/component";

import {
  FlexContainer,
  FlexColumn,
  FlexRow,
  FlexDiv,
} from "../components/Flex";
import Links from "../components/Links";

const Scene = loadable(() => import("../components/Scene"));

const Section = styled(FlexRow)`
  padding: ${({ theme }) => theme.spacing.sm} 0;
  margin: 0 auto;
`;

const Display1 = styled(a.h1)`
  font-size: 4.5rem;
  font-weight: 300;
  text-align: center;
  margin: unset;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: calc(4.5rem + 2vw);
  }
`;

const Sub2 = styled(a.p)`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin: unset;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: calc(1.5rem + 0.5vw);
  }
`;

const FlexSceneArea = styled(FlexDiv)`
  min-height: 370px;
  margin: unset;
  height: 50vh;
  }
`;

function ErrorPage({ data }) {
  const { colorSprings } = useLayout();

  const [ready, setReady] = useState(false);

  // delay even the attempt at rendering
  useEffect(() => void setTimeout(() => setReady(true), 500), []);

  return (
    <>
      <FlexContainer>
        <Section justify="space-between" justifyMd="center">
          <FlexColumn justify="center">
            <FlexColumn justify="center">
              <Display1 style={{ color: colorSprings.text }}>
                I&apos;m Diana.
              </Display1>
              <Sub2 style={{ color: colorSprings.text }}>
                Coder, Creator, Communicator.
              </Sub2>
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
                    color: colorSprings.text,
                    textAlign: "center",
                  }}
                >
                  <p>Loading...</p>
                </a.div>
              )}
            </FlexSceneArea>
          </FlexColumn>
          <FlexRow>
            <p>{data.site.siteMetadata.copyright}</p>
          </FlexRow>
        </Section>
      </FlexContainer>
    </>
  );
}

export default ErrorPage;

export const pageQuery = graphql`
  query ErrorPageQuery {
    site {
      siteMetadata {
        copyright
      }
    }
  }
`;
