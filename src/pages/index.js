import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { Loader, Environment, ContactShadows } from "@react-three/drei";
import {
  Parallax,
  ParallaxLayer as ReactParallaxLayer,
} from "@react-spring/parallax";

import useTheme from "@project/hooks/useTheme";
import loadable from "@loadable/component";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
// import { Col, FlexDiv, Row } from "../components/Flex";
import Links from "../components/Links";
import SEO from "../components/SEO";

const Scene = loadable(() => import("../components/Scene"));
const Stage = loadable(() => import("../components/Scene/Stage"));

const FloatingMesh = loadable(() =>
  import("../components/Scene/Meshes/FloatingMesh")
);

const ParallaxLayer = styled(ReactParallaxLayer)`
  background-color: ${({ background }) => background || "#2b2b2b"};
`;

const Display1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  text-align: left;
  margin: unset;
  line-height: 1.2;
  color: ${({ color, theme }) => color || theme.colors.text};
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

const FlexSceneArea = styled(Col)`
  min-height: 370px;
  max-height: 500px;
  margin: auto;
  height: 50vh;
`;

// const Container = styled(Row)`
//   padding: ${({ theme }) => theme.spacing.xl};
//   width: 100%;
//   height: inherit;
//   margin: auto;
// `;

const ParallaxRow = styled(ParallaxLayer)`
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  height: inherit;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
`;

function Index() {
  const { colors, spacing, palette } = useTheme();

  return (
    <>
      {/* <SEO postNode={postNode} postPath={postPath} postSEO={postSEO} /> */}
      <SEO />
      <Parallax pages={3}>
        <ParallaxLayer background={colors.background} offset={0}>
          <ParallaxLayer speed={1}>
            <ParallaxRow align="center">
              <Col justify="center" sm={12} lg={7} style={{ margin: "auto" }}>
                <Display1>Hi! I&apos;m Diana.</Display1>
                {/* <Sub2>Coder, Creator, Communicator.</Sub2> */}
                <Links />
              </Col>
              <Col justify="center" sm={12} lg={5} style={{ margin: "auto" }}>
                <FlexSceneArea>
                  <Scene cameraProps={{ fov: 30, zoom: 0.65 }}>
                    <Stage>
                      <FloatingMesh
                        size={2}
                        position={[0, 0.5, 0]}
                        string="D"
                      />
                      <ContactShadows
                        rotation-x={Math.PI / 2}
                        opacity={0.75}
                        position={[0, -1, 0]}
                        width={5}
                        height={5}
                        near={0.1}
                        blur={5} // Amount of blur (default=1)
                        far={4} // Focal distance (default=10)
                        resolution={256} // Rendertarget resolution (default=256)
                      />
                    </Stage>
                  </Scene>
                </FlexSceneArea>
              </Col>
            </ParallaxRow>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer background={palette.lighter} offset={1}>
          <Display1 color={palette.darker}>Projects</Display1>
        </ParallaxLayer>
        <ParallaxLayer background="darkblue" offset={2}>
          <Display1>Blog</Display1>
        </ParallaxLayer>
      </Parallax>
      <Loader />
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
