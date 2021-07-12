/* eslint-disable react/no-array-index-key */
import React, { Suspense, useRef, useState, useEffect } from "react";
import Typed from "react-typed";
import styled, { css } from "styled-components";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useContextBridge,
  Environment,
  ContactShadows,
  OrbitControls,
  useProgress,
} from "@react-three/drei";

import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";
import useWindowDimensions from "@project/hooks/useWindowDimensions";
import { a, useSpring } from "@react-spring/three";
import {
  a as webA,
  useSpring as useWebSpring,
  useTrail,
} from "@react-spring/web";

import LaptopModel from "../components/LaptopModel";
import HeroPage from "../components/HeroPage";
import Loader from "../components/Loader";

const RAINBOW = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#577590",
];
const TrailText = ({ children, show, component }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: show ? 1 : 0,
    transform: `perspective(600px) rotateX(${show ? 0 : 180}deg)`,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const Component = webA(component || "p");
  return trail.map(({ ...style }, index) => (
    <Component
      className="inline-block text-xl"
      style={{ ...style, color: RAINBOW[index] }}
    >
      {items[index]}
    </Component>
  ));
};
const Section = styled.div`
  display: flex;
  position: relative;
  z-index: 9;
  scroll-snap-type: y proximity;
  ${({ disablePointer }) =>
    disablePointer &&
    css`
      pointer-events: none;
    `}
`;

const Content = styled.div`
  scroll-snap-align: start;
`;
const OverlayOuter = styled(webA.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  ${({ disablePointer }) =>
    disablePointer &&
    css`
      pointer-events: none;
    `}
`;
const OverlayInner = styled.div`
  width: 100%;
  ${({ disablePointer }) =>
    disablePointer &&
    css`
      pointer-events: none;
    `}
  min-height: ${({ pages }) => `calc(${pages} * 100vh)`};
`;

const TypedEl = React.forwardRef(
  (
    { strings, component, reveal, typeSpeed, onComplete, style, ...rest },
    ref
  ) => {
    const { opacity } = useWebSpring({
      opacity: reveal ? 1 : 0,
    });
    const Component = component || React.Fragment;
    const typedRef = useRef();
    const AniComponent = webA(Component);

    useEffect(() => {
      if (reveal) {
        typedRef.current.start();
      } else {
        typedRef.current.stop();
        typedRef.current.reset();
      }
    }, [reveal, typedRef]);

    return (
      <AniComponent style={{ ...style, opacity }} {...rest}>
        <Typed
          ref={ref}
          strings={strings}
          typeSpeed={typeSpeed || 100}
          // eslint-disable-next-line no-return-assign
          typedRef={(typed) => (typedRef.current = typed)}
          onComplete={() => {
            setTimeout(() => {
              typedRef.current.toggleBlinking();
              typedRef.current.cursor.style.visibility = "hidden";
              return onComplete && onComplete();
            }, 1000);
          }}
        />
      </AniComponent>
    );
  }
);

const Overlay = React.forwardRef(
  ({ pages, onScroll, reveal, ...rest }, ref) => {
    const typedTitleRef = useRef();
    // null until loaded
    const [typedIdx, setTypedIdx] = useState(null);
    const { progress, active } = useProgress();

    useEffect(() => {
      if (active && progress === 100) return setTypedIdx(0);
      return setTypedIdx(null);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [progress, setTypedIdx]);

    const showNext = () =>
      setTypedIdx((prevState) => (prevState === 2 ? 2 : prevState + 1));

    return (
      <OverlayOuter
        ref={ref}
        onScroll={onScroll}
        className="bg-gray-900"
        {...rest}
      >
        <OverlayInner pages={pages}>
          <Section
            ref={ref}
            className="h-screen bg-blue relative flex justify-center p-10 pb-1 z-9 flex-row"
            style={{
              zIndex: 4004,
            }}
          >
            <Content className="flex justify-center flex-col w-full h-full">
              <TypedEl
                ref={typedTitleRef}
                className="text-5xl relative text-yellow-50"
                strings={["Well Hello There!"]}
                reveal={typedIdx !== null && typedIdx >= 0}
                component="h1"
                onComplete={showNext}
              />
              <TypedEl
                ref={typedTitleRef}
                className="text-gray-100 text-lg relative pb-6"
                strings={[
                  `There is more coming to this site soon,
                  but that doesn't mean you can't...`,
                ]}
                reveal={typedIdx !== null && typedIdx >= 1}
                component="p"
                typeSpeed={40}
                onComplete={showNext}
              />
              <div>
                <TrailText
                  show={typedIdx !== null && typedIdx === 2}
                  component="p"
                >
                  {"EXPLORE".split("")}
                </TrailText>
              </div>
            </Content>
            <button type="button">Skip </button>
          </Section>
        </OverlayInner>
      </OverlayOuter>
    );
  }
);

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

const Internal = ({ page }) => {
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
    rotation: LAPTOP.rotation[page],
  });

  const [laptopOpen, setLaptopOpen] = useState(false);

  // useEffect(() => void setTimeout(() => setLaptopOpen(true), 500), []);
  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={1} />
      <a.group ref={group} position={grpPosition} rotation={grpRotation}>
        <LaptopModel
          center
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
  const { loaded, total } = useProgress();
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
    const scrollAmt =
      e.target.scrollTop / (e.target.scrollHeight - windowHeight);
    setScroll(scrollAmt);
  };

  const { opacity } = useWebSpring({
    opacity: loaded < total ? 0 : 1,
  });

  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);
  return (
    <div style={{ height: "100vh" }}>
      <Loader />
      <Overlay
        className="bg-gray-900"
        style={{ opacity }}
        pages={1}
        ref={scrollArea}
        onScroll={handleScroll}
      />
      <Canvas
        style={{ opacity: 0 }}
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
          <Suspense fallback={null}>
            <Internal pageCt={3} page={page} scroll={scroll} />
          </Suspense>
        </ContextBridge>
      </Canvas>
    </div>
  );
}
