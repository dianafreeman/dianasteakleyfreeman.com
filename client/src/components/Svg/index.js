import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SLUG_MAP = {
  CODER: 'coder',
  CREATOR: 'creator',
  COMMUNICATOR: 'communicator',
};

const FILE_NAME_MAP = {
  CODER: 'svg/WireframeMe_black.svg',
  CREATOR: 'svg/LineDrawing.svg',
  COMMUNICATOR: 'svg/ColorDrawing.svg',
  _CODER: '1x/WireframeMe_black.png',
  _CREATOR: '1x/LineDrawing.png',
  _COMMUNICATOR: '1x/ColorDrawing.png',
};

const TYPES = ['CODER', 'CREATOR', 'COMMUNICATOR'];

const Svg = () => {
  const [uris, setUris] = useState({
    CODER: `${process.env.PUBLIC_URL}/assets/${FILE_NAME_MAP['CODER']}`,
    CREATOR: `${process.env.PUBLIC_URL}/assets/${FILE_NAME_MAP['CREATOR']}`,
    COMMUNICATOR: `${process.env.PUBLIC_URL}/assets/${FILE_NAME_MAP['COMMUNICATOR']}`,
  });

  const [images, setImages] = useState({
    CODER: `${process.env.PUBLIC_URL}/assets/${FILE_NAME_MAP['CODER']}`,
    CREATOR: `${process.env.PUBLIC_URL}/assets/${FILE_NAME_MAP['CREATOR']}`,
    COMMUNICATOR: `${process.env.PUBLIC_URL}/assets/${FILE_NAME_MAP['COMMUNICATOR']}`,
  });
  useEffect(() => {
    async function tryGetImg(uri) {
      try {
        const resp = await axios.get(uri);
        debugger;
        return resp.body;
      } catch (err) {
        console.error(err);
      }
    }
    tryGetImg(uris['CODER']);
    // const responses = TYPES.map((T) => tryGetImg(uris[T]));
  }, []);

  return <img src={''} />;
};

export default Svg;
