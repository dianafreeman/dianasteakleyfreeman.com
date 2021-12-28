/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, {
  Suspense,
  useEffect,
  useRef,
  useContext,
  useState,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  useContextBridge,
  Environment,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { a as webA } from "@react-spring/web";

import { LaptopContext } from "@project/providers/LaptopProvider";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import LaptopModel from "./Model";

const LaptopGroup = React.forwardRef(({ groupProps, ...rest }, ref) => (
  
  <a.group ref={ref} {...groupProps}>
    <LaptopModel {...rest} />
  </a.group>
));

const Scene = () => {
  const { laptopOpen, setLaptopOpen } = useContext(LaptopContext);
  const group = useRef();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    new THREE.Box3()
      .setFromObject(group.current)
      .getCenter(group.current.position)
      .multiplyScalar(-1);
  }, [width, height]);

  const [down, setDown] = useState(true);
  const [titlePositionPx, setTitlePosition] = useState(-10);
  const [laptopPositionY, setLaptopPosition] = useState(0);

  const { titlePosSpring, scaleSpring, laptopPosSpringY, htmlPosSPring } =
    useSpring({
      titlePosSpring: titlePositionPx,
      htmlPosSPring: laptopOpen ? 0.8 : 0.25,
      scaleSpring: down ? 0.96 : 1,
      laptopPosSpringY: laptopPositionY,
    });

  useEffect(() => {
    if (laptopOpen) {
      setTitlePosition(-25);
      setLaptopPosition(-2);
    } else {
      setTitlePosition(-2);
      setLaptopPosition(-1);
    }
  }, [laptopOpen, setTitlePosition, setLaptopPosition]);
  return (
    <>
      <Html
        fullscreen
        style={{ display: "flex", pointerEvents: "none" }}
      >
        <webA.h1
          style={{
            fontSize: "calc(25px + 3vw)",
            position: "relative",
            transform: titlePosSpring.to((y) => `translateY(${y}vh)`),
          }}
          className="w-full font-roboto font-black text-gray-800 text-center self-center"
        >
          {!laptopOpen ? "Well Hello There!" : "I'm Diana"}
        </webA.h1>
      </Html>
      <pointLight position={[10, 10, 10]} intensity={1} />

      <LaptopGroup
        ref={group}
        groupProps={{
          "rotation-y": Math.PI,
          "position-y": laptopPosSpringY,
        }}
        scale={scaleSpring}
     
        
      />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position-y={laptopPosSpringY.to((p) => p - 0.5)}
        opacity={0.6}
        width={20}
        height={20}
        blur={1}
        far={4.5}
        resolution={256}
      />
      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={laptopOpen}
        minPolarAngle={laptopOpen ? 0.35 : 1.5}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default ({ canvasStyle, ...props }) => {
  const cameraDefaults = {
    position: [0, 1, 4.5], // [0, 1, width > 900 ? 4 : width > 600 ? 6 : width > 400 ? 7 : 8],
    // zoom: width > 900 ? 1 : width > 600 ? 0.8 : width < 400 ? 0.5 : 0.6,
    //   lookAt: [0, -3, 0],
    //   fov: 55,
  };
  const ContextBridge = useContextBridge(LaptopContext);

  return (
    <Canvas style={canvasStyle} dpr={[1, 2]}>
      <ContextBridge>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={cameraDefaults.position}
            // zoom={cameraDefaults.zoom}
            near={1}
            far={100}
            fov={45}
          />

          <Scene {...props} />
        </Suspense>
      </ContextBridge>
    </Canvas>
  );
};
