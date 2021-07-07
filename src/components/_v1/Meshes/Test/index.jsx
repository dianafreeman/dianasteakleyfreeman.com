import * as THREE from "three";
import React, {
  Suspense,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";
import styled, { css } from "styled-components";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  useContextBridge,
  Html,
  Environment,
  Center,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";
import useWindowDimensions from "@project/hooks/useWindowDimensions";
import { a, useSpring } from "@react-spring/three";
import { a as webA, useSpring as useWebSpring } from "@react-spring/web";
import HeroPage from "../../../HeroPage";
import Model from "./MacBookPro_blend";

const Section = styled.div`
  padding: 5em;
`;
const ScrollAreaOuter = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y proximity;
`;
const ScrollAreaInner = styled.div`
  width: 100%;
  min-height: ${({ pages }) => `calc(${pages} * 100vh)`};
  & > div {
    scroll-snap-align: start;
  }
`;
const ScrollArea = React.forwardRef(({ pages, onScroll }, ref) => {
  return (
    <ScrollAreaOuter
      // disablePointer={disablePointer}
      ref={ref}
      onScroll={onScroll}
    >
      <ScrollAreaInner pages={pages}>
        <Section style={{ height: "150vh", padding: "40px" }}>
          <h1>Title 1</h1>
          <p>
            Nulla labore ad qui sit. Laborum magna Lorem dolore amet eu. Id
            incididunt elit esse tempor irure ipsum commodo culpa. Amet sunt
            culpa labore nisi. Incididunt mollit officia aliquip do exercitation
            sunt eu do.
          </p>
        </Section>
        <Section style={{ height: "150vh" }}>
          <h1>Title 2</h1>
          <p>
            Ea laboris consectetur mollit ullamco fugiat voluptate laboris
            ullamco sit amet exercitation consectetur deserunt. Enim consequat
            ea pariatur laboris ad irure duis amet do sint officia nostrud.
            Occaecat tempor reprehenderit eu ullamco eiusmod velit non deserunt.
            Deserunt est in nostrud exercitation eiusmod anim tempor ullamco
            dolor id sunt magna excepteur laborum. In anim magna velit et esse
            amet in nulla aute voluptate et aliquip.
          </p>
        </Section>
      </ScrollAreaInner>
    </ScrollAreaOuter>
  );
});
/*
 // Make it float
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     group.current.rotation.x = THREE.MathUtils.lerp(
//       group.current.rotation.x,
//       Math.cos(t / 2) / 10 + 0.25,
//       0.1
//     );
//     group.current.rotation.y = THREE.MathUtils.lerp(
//       group.current.rotation.y,
//       Math.sin(t / 4) / 10,
//       0.1
//     );
//     group.current.rotation.z = THREE.MathUtils.lerp(
//       group.current.rotation.z,
//       Math.sin(t / 4) / 20,
//       0.1
//     );
//     group.current.position.y = THREE.MathUtils.lerp(
//       group.current.position.y,
//       (-5 + Math.sin(t)) / 5,
//       0.1
//     );
//   });
*/
// [-10, 0, -25]

const STATE = {
  camera: {
    position: [
      // [0, 0, -10],
      [3, 10, -5],
      [0, 5, -7],
      [0, 7, -6],
      // [0, 7, -12],
    ],
    fov: 35,
  },
  laptop: {
    rotation: [
      // [0, 0, 0],
      [0, -Math.PI / 5, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    position: [
      [0, -1.5, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
};

const ActiveScreen = ({ detached }) => {
  const { scale } = useSpring({
    scale: detached ? 1.5 : 1,
  });
  return (
    <a.group scale={scale}>
      <Html
        style={{
          width: "670px",
          height: "454px",
          background: "#2b2b2b",
          borderRadius: "3px",
          overflowY: "auto",
          padding: "0",
        }}
        transform
        occlude
        rotation-x={-Math.PI / 2}
        rotation-y={Math.PI}
        scale={0.125}
        position-x={-1.07}
        position-z={-0.8}
        position-y={0}
      >
        <div
          style={{
            padding: "10px",
            width: "670px",
            height: "227px",
          }}
        >
          <HeroPage />
        </div>
      </Html>
    </a.group>
  );
};
const Internal = ({ page, top, scroll }) => {
  const [vec] = useState(new THREE.Vector3());
  const group = useRef();
  // useEffect(() => {
  //   // Center the group on mount
  //   new THREE.Box3()
  //     .setFromObject(group.current)
  //     .getCenter(group.current.position)
  //     .multiplyScalar(-1);
  // }, []);

  // zoom out until scroll top == .33
  useFrame((state) => {
    const step = 0.1;
    state.camera.position.lerp(
      vec.set(
        STATE.camera.position[page][0], // - scroll.current * 100, // - top * 0.01,
        STATE.camera.position[page][1] + scroll.current * 100, // scroll * 0.01, // - top * 0.01,
        STATE.camera.position[page][2] // - scroll.current * 100 // - top * 0.01
      ),
      step
    );

    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  const { position: grpPosition, rotation: grpRotation } = useSpring({
    position: STATE.laptop.position[page],
    rotation: STATE.laptop.rotation[page],
  });

  const [laptopOpen, setOpen] = useState(true);
  // useEffect(() => void setTimeout(() => setOpen(true), 1000));
  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Center>
          <a.group ref={group} position={grpPosition} rotation={grpRotation}>
            <Model
              center
              rotation-y={Math.PI}
              rotation-x={0.2}
              open={laptopOpen}
            >
              {/* Screen Content */}
              <ActiveScreen detached={false} />
            </Model>
          </a.group>
        </Center>
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
        // enablePan={false}
        // enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const [top, set] = useState(0);
  const [page, setPage] = useState(0);

  const scroll = useRef(0);
  const scrollArea = useRef();

  const handlePages = () => {
    // useEffect(() => {
    //     if (top < scaledWindowHeight) setPage(0);
    //     if (top > scaledWindowHeight && top < scaledWindowHeight * 2) {
    //       if (page !== 1) setPage(1);
    //     }
    //     if (top > scaledWindowHeight * 2) {
    //       if (page !== 2) setPage(2);
    //     }
    //   }, [top, windowHeight, windowWidth]);
  };
  useScrollPosition(
    ({ currPos }) => {
      scroll.current = currPos.y; /// (e.target.scrollHeight - windowHeight);
    },
    [],
    scrollArea
  );
  // const handleScroll = (e) => {
  //   // proportion of total height scrolled
  //   scroll.current =
  //     e.target.scrollTop / (e.target.scrollHeight - windowHeight);
  // };
  // // const scaledWindowHeight = windowHeight * 0.2;

  /*
  1) set canvas opacity to zero
  2) fill screen with hero page
  3) on scroll down, shrink and t
  */

  // const { canvasOpacity, scale } = useWebSpring({
  //   canvasOpacity: top < 162 ? 0 : 1,
  //   // scale: top === 0 ? 1 : top < 162 ? 0.89 : -top * 0.0001,
  // });
  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);
  return (
    <>
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
          // zoom: 0.75,
          position: STATE.camera.position[0],
          fov: STATE.camera.fov,
        }}
      >
        <ContextBridge>
          <Internal top={top} page={page} scroll={scroll} />
        </ContextBridge>
      </Canvas>

      <ScrollArea pages={3} ref={scrollArea} />
    </>
  );
}
