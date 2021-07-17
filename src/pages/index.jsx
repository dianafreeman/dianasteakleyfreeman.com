/* eslint-disable react/no-array-index-key */
import React, { Suspense, useRef, useState, useEffect } from "react";

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

import LaptopModel from "../components/LaptopModel";
import HeroPage from "../components/HeroPage";
import Loader from "../components/Loader";
import Overlay from "../components/Overlay";
import OverlayContent from "../components/OverlayContent";

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

  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  return (
    <div style={{ height: "100vh" }}>
      <Loader />
      <Overlay pages={1} ref={scrollArea} onScroll={handleScroll}>
        <OverlayContent />
      </Overlay>
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
