import React, { Suspense, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useContextBridge,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";

import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";
import useWindowDimensions from "@project/hooks/useWindowDimensions";
import { a, useSpring } from "@react-spring/three";
import { InView } from "react-intersection-observer";
import tw from "twin.macro";
import LaptopModel from "../../../components/LaptopModel";
import HeroPage from "../../../components/HeroPage";

const Section = styled.div`
  ${tw``}
  padding: 5em;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9;
  scroll-snap-type: y proximity;
`;

const Content = styled.div`
  scroll-snap-align: start;
  display: inline-block;

`;
const OverlayOuter = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;
const OverlayInner = styled.div`
  width: 100%;
  min-height: ${({ pages }) => `calc(${pages} * 100vh)`};
`;
const Overlay = React.forwardRef(({ pages, onScroll }, ref) => {
  return (
    <OverlayOuter ref={ref} onScroll={onScroll}>
      <OverlayInner pages={pages}>
        <InView>
          {({ inView, ref, entry }) => {
            return (
              <Section
                ref={ref}
                style={{
                  height: "100vh",
                  position: "relative",
                  zIndex: 4004,
                }}
              >
                <Content>
                  <h1
                    className="text-5xl"
                    style={{ position: "relative", zIndex: 4004 }}
                  >
                    Well Hello there!
                  </h1>
                  <p style={{ position: "relative", zIndex: 4004 }}>
                    Nulla labore ad qui sit. Laborum magna Lorem dolore amet eu.
                    Id incididunt elit esse tempor irure ipsum commodo culpa.
                    Amet sunt culpa labore nisi. Incididunt mollit officia
                    aliquip do exercitation sunt eu do.
                  </p>
                </Content>
              </Section>
            );
          }}
        </InView>
        <Section style={{ height: "150vh" }} />
        <InView>
          {({ inView, ref, entry }) => {
            return (
              <Section
                className="relative"
                ref={ref}
                style={{
                  position: "relative",
                  zIndex: 4004,
                  height: "100vh",
                  background: "darkgray",
                }}
              >
                <h1 style={{ position: "relative", zIndex: 4004 }}>Title 2</h1>
                <p style={{ position: "relative", zIndex: 4004 }}>
                  {JSON.stringify(ref.current, null, 2)}
                </p>
                <p style={{ position: "relative", zIndex: 4004 }}>
                  Ea laboris consectetur mollit ullamco fugiat voluptate laboris
                  ullamco sit amet exercitation consectetur deserunt. Enim
                  consequat ea pariatur laboris ad irure duis amet do sint
                  officia nostrud. Occaecat tempor reprehenderit eu ullamco
                  eiusmod velit non deserunt. Deserunt est in nostrud
                  exercitation eiusmod anim tempor ullamco dolor id sunt magna
                  excepteur laborum. In anim magna velit et esse amet in nulla
                  aute voluptate et aliquip.
                </p>
              </Section>
            );
          }}
        </InView>
      </OverlayInner>
    </OverlayOuter>
  );
});

const LAPTOP = {
  rotation: [
    [0, 0, 0],
    [0, -Math.PI / 6, 0],
    [0, -Math.PI / 6, 0],
  ],
  position: [
    [-0.5, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};
const CAMERA = {
  position: [
    [0, 6, 4],
    [0, 8, 5],
    [0, 8, 6],
  ],
  lookAt: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  fov: 45,
};

const Internal = ({ page, scroll }) => {
  // const [vec] = useState(new THREE.Vector3());
  const group = useRef();

  const { camera } = useThree();
  const index = page - 1 < 0 ? 0 : page - 1;

  useSpring({
    to: {
      lookAt: [...CAMERA.lookAt[index]],
      position: [...CAMERA.position[index]],
    },
    onFrame: ({ lookAt, position }) => {
      camera.position.set(position);
      camera.lookAt(lookAt);
      camera.updateProjectionMatrix();
    },
  });

  const { position: grpPosition, rotation: grpRotation } = useSpring({
    position: LAPTOP.position[page],
    rotation: LAPTOP.rotation[page], // .map((v) => v * scroll),
  });

  const [laptopOpen, setLaptopOpen] = useState(false);
  useEffect(() => void setTimeout(() => setLaptopOpen(true), 500));
  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <a.group ref={group} position={grpPosition} rotation={grpRotation}>
          <LaptopModel
            position-y={-0.5}
            position-x={-0.25}
            rotation-y={Math.PI}
            rotation-x={0.2}
            isOpen={laptopOpen}
            setOpen={setLaptopOpen}
          >
            <HeroPage />
          </LaptopModel>
        </a.group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1, 0]}
        opacity={0.5}
        width={20}
        height={20}
        blur={2}
        far={4.5}
        resolution={256}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default function Index() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const [page, setPage] = useState(0);
  const [scroll, setScroll] = useState(0);
  const scrollArea = useRef();

  useEffect(() => {
    if (scroll < 0.33) setPage(0);
    if (scroll > 0.33 && scroll < 0.66) {
      setPage(1);
    }
    if (scroll > 0.66) {
      setPage(2);
    }
  }, [scroll]);

  const handleScroll = (e) => {
    // proportion of total height scrolled
    setScroll(e.target.scrollTop / (e.target.scrollHeight - windowHeight));
  };

  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);
  return (
    <div style={{ height: "100vh" }}>
      <Canvas
        onCreated={(state) => state.events.connect(scrollArea.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => ({
            offsetX: clientX,
            offsetY: clientY,
          }),
        }}
        dpr={[1, 2]}
        camera={{
          position: CAMERA.position[page],
          fov: CAMERA.fov,
          aspect: windowWidth / windowHeight,
          zoom: windowWidth < 532 ? 1 - windowWidth * 0.001 : 1,
        }}
      >
        <ContextBridge>
          <Internal pageCt={3} page={page} scroll={scroll} />
        </ContextBridge>
      </Canvas>
      <Overlay pages={3} ref={scrollArea} onScroll={handleScroll} />
    </div>
  );
}
