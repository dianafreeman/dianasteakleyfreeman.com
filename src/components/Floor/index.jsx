import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTexture, Reflector } from '@react-three/drei';
import { TextureLoader, MirroredRepeatWrapping, MathUtils, DoubleSide } from 'three';

import ColorMapImage from '../../assets/textures/stone/ColorMap.jpg';
import NormalMapImage from '../../assets/textures/stone/NormalMap.jpg';

const deg = (val) => MathUtils.degToRad(val);

const DEFAULT_MATERIAL_PROPS = {
  roughness: 0,
  metalness: 0,
  color: '#fcceb1',
};
function Floor({
  width,
  height,
  depth,
  materialProps = DEFAULT_MATERIAL_PROPS,
  geometryProps,
  ...rest
}) {
  const [colorMap, normalMap] = useTexture([ColorMapImage, NormalMapImage]);

  useEffect(() => {
    function setRepeating(textureMaps) {
      textureMaps.forEach((map) => {
        map.wrapS = MirroredRepeatWrapping;
        map.wrapT = MirroredRepeatWrapping;
        map.repeat.set(7, 4);
      });
    }
    setRepeating([colorMap, normalMap]);
  }, [colorMap, normalMap]);

  return (
    <mesh receiveShadow position={[0, -depth, 0]} {...rest}>
      <Reflector
        blur={[512, 512]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={0.75} // How much blur mixes with surface roughness
        mixStrength={0.5} // Strength of the reflections
        resolution={526} // Off-buffer resolution, lower=faster, higher=better quality
        args={[width, height]} // PlaneBufferGeometry arguments
        rotation={[deg(270), deg(0), deg(0)]}
        mirror={0.5} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        minDepthThreshold={0.25}
        maxDepthThreshold={1}
        depthScale={5}
        distortion={0.01} // Amount of distortion based on the distortionMap texture
        distortionMap={normalMap} // The red channel of this texture is used as the distortion map. Default is null
      >
        {(Material, props) => (
          <Material
            metalness={0.5}
            roughness={1}
            {...props}
            map={colorMap}
            bumpMap={normalMap}
            side={DoubleSide}
          />
        )}
      </Reflector>
    </mesh>
  );
}

export default Floor;
