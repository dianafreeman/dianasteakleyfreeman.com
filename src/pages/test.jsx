/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import * as THREE from "three";

import { Canvas, useThree } from "@react-three/fiber";
import {
  useContextBridge,
  Environment,
  ContactShadows,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";
import useWindowDimensions from "@project/hooks/useWindowDimensions";
import { a, useSpring, config } from "@react-spring/three";

import LaptopModel from "../components/LaptopModel";
import HeroPage from "../components/HeroPage";
import Loader from "../components/Loader";
import Overlay from "../components/Overlay";

const LAPTOP = {
  rotation: [
    [0, 0, 0],
    [0, -Math.PI / 6, 0],
    [0, -Math.PI / 6, 0],
  ],
  position: [
    [0, 0, 0],
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

const Internal = ({ page, laptopOpen, setLaptopOpen, ready }) => {
  const group = useRef();
  const { width: windowWidth } = useWindowDimensions();

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

  const {
    position: grpPosition,
    rotation: grpRotation,
    scale,
  } = useSpring({
    position: LAPTOP.position[page],
    rotation: LAPTOP.rotation[page],
    scale: 1,
  });

  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={1} />
      <a.group
        ref={group}
        position={grpPosition}
        rotation={grpRotation}
        scale={scale}
        opacity={ready ? 1 : 0}
      >
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
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.4, 0]}
          opacity={ready ? 0.5 : 0}
          width={20}
          height={20}
          blur={2}
          far={4.5}
          resolution={256}
        />
      </a.group>

      <Environment preset="city" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Section = (props) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <div ref={ref} {...props}>
      <span>is in view {inView ? "true" : "false"}</span>
      <span>is in view {inView ? "true" : "false"}</span>
    </div>
  );
};
export default function Index() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const { progress: loadingProgress, active: isLoading } = useProgress();

  const [page, setPage] = useState(0);
  // const [scroll, setScroll] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const scroll = useRef(0);
  // const [showOverlay, setShowOverlay] = useState(false);

  const [laptopOpen, setLaptopOpen] = useState(false);
  const scrollArea = useRef();

  // useEffect(() => {
  //   if (scroll < 0.33) setPage(0);
  //   if (scroll > 0.33 && scroll < 0.66) {
  //     setPage(1);
  //   }
  //   if (scroll > 0.66) {
  //     setPage(2);
  //   }
  // }, [scroll]);

  const handleScroll = (e) => {
    // proportion of total height scrolled
    const scrollAmt =
      e.target.scrollTop / (e.target.scrollHeight - windowHeight);
    scroll.current = scrollAmt;
  };

  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);
  const AnimatedCanvas = a(Canvas);

  return (
    <>
      <Loader progress={loadingProgress} active={isLoading} />
      <AnimatedCanvas
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
        }}
        dpr={[1, 2]}
        camera={{
          position: CAMERA.position[page],
          fov: CAMERA.fov,
          aspect: windowWidth / windowHeight,
          zoom: 1,
        }}
      >
        <ContextBridge>
          <Suspense fallback={null}>
            <Internal
              ready={isLoaded}
              page={page}
              scroll={scroll}
              laptopOpen={laptopOpen}
              setLaptopOpen={setLaptopOpen}
            />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </ContextBridge>
      </AnimatedCanvas>

      <Overlay
        pages={3}
        ref={scrollArea}
        onScroll={handleScroll}
        // onDrag={(e) => console.log(e)}
      >
        <Section
          style={{
            height: "100vh",
            // backgroundColor: "pink",
            opacity: 0.5,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        />
        <Section
          style={{
            height: "100vh",
            // backgroundColor: "teal",
            opacity: 0.5,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        />
        <Section
          style={{
            height: "100vh",
            // backgroundColor: "orange",
            opacity: 0.5,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        />
      </Overlay>
    </>
  );
}
